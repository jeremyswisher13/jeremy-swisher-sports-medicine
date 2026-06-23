import { useEffect, useMemo, useRef, useState } from 'react'
import type { Condition, Exercise, RehabPhase } from '../../content'
import { formatDose } from '../../lib/format'
import { parseReps, parseTempo, type TempoPhase } from '../../lib/tempo'
import { cue } from '../../lib/audio'
import { useProgram } from '../../hooks/useProgram'
import { useCoachTimer } from '../../hooks/useCoachTimer'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { fmtTime } from '../../hooks/useCountdown'
import { Icon } from '../common/Icon'
import { MediaEmbed } from '../common/MediaEmbed'

const REST_SECONDS = 45
const RING_CIRC = 327 // 2πr for r=52, used by the SVG progress rings

type Flow = 'exercises' | 'checkin' | 'summary'

/**
 * Coached full-screen follow-along player. Walks one phase, one exercise at a
 * time: holds and rests auto-run with audio/haptic cues, rep exercises with an
 * explicit tempo get a metronome, and the session ends with a pain/effort
 * check-in that is logged to the local rehab journal.
 */
export function FollowAlongSession({
  condition,
  phase,
  onClose,
}: {
  condition: Condition
  phase: RehabPhase
  onClose: () => void
}) {
  const program = useProgram()
  const exercises = phase.exercises
  const [soundOn, setSoundOn] = useLocalStorage<boolean>('jsm:sound', true)
  const [flow, setFlow] = useState<Flow>('exercises')
  const [logged, setLogged] = useState(false)
  const [step, setStep] = useState(() => {
    const firstIncomplete = exercises.findIndex(
      (ex) => !program.isExerciseDone(condition.id, ex.id),
    )
    return firstIncomplete >= 0 ? firstIncomplete : 0
  })

  const nextPhase = useMemo(
    () => condition.hep.phases.find((p) => p.order === phase.order + 1) ?? null,
    [condition, phase],
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  function markDone(ex: Exercise) {
    if (!program.isExerciseDone(condition.id, ex.id)) {
      program.toggleExercise(condition.id, ex.id)
    }
  }

  const total = exercises.length
  const pct =
    flow === 'exercises'
      ? Math.round((Math.min(step, total) / total) * 100)
      : 100

  function advance() {
    if (step + 1 >= total) setFlow('checkin')
    else setStep((s) => s + 1)
  }

  function saveCheckIn(pain: number | null, effort: number | null) {
    if (!logged) {
      program.logSession({
        conditionId: condition.id,
        phaseId: phase.id,
        completedAt: Date.now(),
        exercisesDone: exercises.filter((e) =>
          program.isExerciseDone(condition.id, e.id),
        ).length,
        exercisesTotal: total,
        pain,
        effort,
      })
      setLogged(true)
    }
    setFlow('summary')
  }

  return (
    <>
      <button className="drawer-scrim" type="button" aria-label="Close session" onClick={onClose} />
      <section
        className="session-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Follow-along session"
      >
        <header className="session-bar">
          <div className="session-bar-info">
            <span className="session-eyebrow">Follow along · {condition.shortName}</span>
            <strong>
              Phase {phase.order}: {phase.title}
            </strong>
          </div>
          <div className="session-bar-actions">
            <button
              type="button"
              className="session-icon-btn"
              onClick={() => setSoundOn((v) => !v)}
              aria-pressed={soundOn}
              aria-label={soundOn ? 'Mute audio cues' : 'Unmute audio cues'}
              title={soundOn ? 'Sound on' : 'Sound off'}
            >
              <Icon name={soundOn ? 'volume' : 'volumeOff'} size={20} />
            </button>
            <button type="button" className="session-close" onClick={onClose} aria-label="Close">
              <Icon name="close" size={20} />
            </button>
          </div>
        </header>

        <div className="session-progress" aria-hidden="true">
          <div className="session-progress-fill" style={{ width: `${pct}%` }} />
        </div>

        {flow === 'exercises' && (
          <ExercisePlayer
            key={exercises[step].id}
            exercise={exercises[step]}
            index={step}
            total={total}
            soundOn={soundOn}
            onExerciseDone={() => {
              markDone(exercises[step])
              advance()
            }}
            onSkip={advance}
            onPrev={step > 0 ? () => setStep((s) => s - 1) : undefined}
          />
        )}

        {flow === 'checkin' && (
          <CheckIn
            condition={condition}
            onSave={saveCheckIn}
          />
        )}

        {flow === 'summary' && (
          <SessionSummary
            condition={condition}
            phase={phase}
            nextPhase={nextPhase}
            doneCount={exercises.filter((e) => program.isExerciseDone(condition.id, e.id)).length}
            streak={program.currentStreakDays}
            onAdvancePhase={
              nextPhase
                ? () => {
                    program.setActivePhase(condition.id, nextPhase.id)
                    onClose()
                  }
                : undefined
            }
            onClose={onClose}
          />
        )}
      </section>
    </>
  )
}

// ---------------------------------------------------------------------------
// Per-exercise coached player
// ---------------------------------------------------------------------------

function ExercisePlayer({
  exercise,
  index,
  total,
  soundOn,
  onExerciseDone,
  onSkip,
  onPrev,
}: {
  exercise: Exercise
  index: number
  total: number
  soundOn: boolean
  onExerciseDone: () => void
  onSkip: () => void
  onPrev?: () => void
}) {
  const sets = exercise.dose.sets ?? 1
  const holdSeconds = exercise.dose.holdSeconds
  const isHold = !!holdSeconds
  const tempoPhases = useMemo(() => parseTempo(exercise.dose.tempo), [exercise.dose.tempo])
  const repTarget = useMemo(() => parseReps(exercise.dose.reps), [exercise.dose.reps])
  const guidedReps = !isHold && tempoPhases.length > 0 && repTarget != null

  const [setsDone, setSetsDone] = useState(0)
  const [stage, setStage] = useState<'idle' | 'work' | 'rest'>('idle')
  const [showVideo, setShowVideo] = useState(false)
  const primaryRef = useRef<HTMLButtonElement>(null)

  const sound = (fn: () => void) => {
    if (soundOn) fn()
  }
  const allSetsDone = setsDone >= sets

  const work = useCoachTimer({
    onTick: (r) => {
      if (r > 0 && r <= 3) sound(cue.count)
    },
    onComplete: () => {
      sound(cue.done)
      completeSet()
    },
  })
  const rest = useCoachTimer({
    onTick: (r) => {
      if (r > 0 && r <= 3) sound(cue.count)
    },
    onComplete: () => {
      sound(cue.go)
      setStage('idle')
    },
  })

  function completeSet() {
    setSetsDone((prev) => {
      const next = prev + 1
      if (next < sets) {
        sound(cue.rest)
        setStage('rest')
        rest.start(REST_SECONDS)
      } else {
        setStage('idle')
      }
      return next
    })
  }

  function startSet() {
    sound(cue.go)
    if (isHold) {
      setStage('work')
      work.start(holdSeconds!)
    } else if (guidedReps) {
      setStage('work')
    } else {
      // manual reps: logging the set is the action
      completeSet()
    }
  }

  function skipRest() {
    rest.reset()
    setStage('idle')
  }

  // Space triggers the current primary action.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.code === 'Space') {
        const el = primaryRef.current
        if (el && !el.disabled) {
          e.preventDefault()
          el.click()
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="session-body">
      <div className="session-stepcount">
        Exercise {index + 1} of {total}
      </div>
      <h2 className="session-ex-name">{exercise.name}</h2>
      <p className="session-ex-target">{exercise.target}</p>
      <p className="session-ex-purpose">{exercise.purpose}</p>

      <div className="session-dose-chip">{formatDose(exercise.dose)}</div>

      {/* Set tracker */}
      <div className="session-sets" aria-label={`${setsDone} of ${sets} sets done`}>
        {Array.from({ length: sets }, (_, i) => (
          <span key={i} className={`session-set-dot ${i < setsDone ? 'done' : ''}`}>
            {i < setsDone ? <Icon name="check" size={14} /> : i + 1}
          </span>
        ))}
        <span className="session-sets-label">
          {allSetsDone ? 'All sets done' : `Set ${setsDone + 1} of ${sets}`}
        </span>
      </div>

      {/* Work / rest zone */}
      {!allSetsDone && (
        <div className="session-stage">
          {stage === 'rest' ? (
            <RestZone
              remaining={rest.remaining}
              running={rest.running}
              onPause={rest.pause}
              onResume={rest.resume}
              onSkip={skipRest}
              primaryRef={primaryRef}
            />
          ) : stage === 'work' && isHold ? (
            <HoldZone
              holdSeconds={holdSeconds!}
              remaining={work.remaining}
              running={work.running}
              onPause={work.pause}
              onResume={work.resume}
            />
          ) : stage === 'work' && guidedReps ? (
            <RepCadence
              key={`${exercise.id}-set-${setsDone}`}
              phases={tempoPhases}
              reps={repTarget!}
              soundOn={soundOn}
              onComplete={() => {
                sound(cue.done)
                completeSet()
              }}
            />
          ) : (
            <IdleZone
              setNumber={setsDone + 1}
              isHold={isHold}
              guided={guidedReps}
              reps={exercise.dose.reps}
              tempo={exercise.dose.tempo}
              onStart={startSet}
              primaryRef={primaryRef}
            />
          )}
        </div>
      )}

      {/* Form cues + pain rule */}
      <div className="session-cues">
        <strong>Form cues</strong>
        <ul>
          {exercise.formCues.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
        {exercise.painRule && <p className="session-painrule">Pain rule: {exercise.painRule}</p>}
      </div>

      {exercise.video && (
        <div className="session-video-toggle">
          {showVideo ? (
            <MediaEmbed video={exercise.video} />
          ) : (
            <button type="button" className="small-button" onClick={() => setShowVideo(true)}>
              <Icon name="play" size={16} /> Watch the demo
            </button>
          )}
        </div>
      )}

      {/* Navigation */}
      <div className="session-nav">
        {onPrev ? (
          <button type="button" className="ghost-action" onClick={onPrev}>
            Back
          </button>
        ) : (
          <span />
        )}
        <button type="button" className="small-button" onClick={onSkip}>
          Skip
        </button>
        <button
          type="button"
          className="primary-action session-next"
          ref={allSetsDone ? primaryRef : undefined}
          onClick={onExerciseDone}
        >
          {allSetsDone ? 'Done — next' : 'Mark done — next'}
          <Icon name="arrowRight" size={18} />
        </button>
      </div>
    </div>
  )
}

function IdleZone({
  setNumber,
  isHold,
  guided,
  reps,
  tempo,
  onStart,
  primaryRef,
}: {
  setNumber: number
  isHold: boolean
  guided: boolean
  reps?: string
  tempo?: string
  onStart: () => void
  primaryRef: React.RefObject<HTMLButtonElement | null>
}) {
  const label = isHold ? 'Start hold' : guided ? 'Start guided set' : 'Complete set'
  return (
    <div className="session-idle">
      <p className="session-idle-hint">
        Set {setNumber}
        {!isHold && reps ? ` · ${reps} reps` : ''}
        {!isHold && tempo ? ` · ${tempo}` : ''}
      </p>
      <button type="button" className="primary-action session-bigbtn" ref={primaryRef} onClick={onStart}>
        <Icon name="play" size={20} /> {label}
      </button>
    </div>
  )
}

function HoldZone({
  holdSeconds,
  remaining,
  running,
  onPause,
  onResume,
}: {
  holdSeconds: number
  remaining: number
  running: boolean
  onPause: () => void
  onResume: () => void
}) {
  const shown = running || remaining > 0 ? remaining : holdSeconds
  const frac = holdSeconds > 0 ? shown / holdSeconds : 0
  return (
    <div className="session-ring-zone">
      <ProgressRing fraction={frac} label={fmtTime(shown)} sub="sec hold" tone="work" />
      <div className="session-actions">
        {running ? (
          <button type="button" className="small-button" onClick={onPause}>
            Pause
          </button>
        ) : (
          <button type="button" className="small-button" onClick={onResume}>
            Resume
          </button>
        )}
      </div>
    </div>
  )
}

function RestZone({
  remaining,
  running,
  onPause,
  onResume,
  onSkip,
  primaryRef,
}: {
  remaining: number
  running: boolean
  onPause: () => void
  onResume: () => void
  onSkip: () => void
  primaryRef: React.RefObject<HTMLButtonElement | null>
}) {
  const frac = REST_SECONDS > 0 ? remaining / REST_SECONDS : 0
  return (
    <div className="session-ring-zone">
      <ProgressRing fraction={frac} label={fmtTime(remaining)} sub="rest" tone="rest" />
      <div className="session-actions">
        {running ? (
          <button type="button" className="small-button" onClick={onPause}>
            Pause
          </button>
        ) : (
          <button type="button" className="small-button" onClick={onResume}>
            Resume
          </button>
        )}
        <button type="button" className="primary-action" ref={primaryRef} onClick={onSkip}>
          Skip rest
        </button>
      </div>
    </div>
  )
}

function RepCadence({
  phases,
  reps,
  soundOn,
  onComplete,
}: {
  phases: TempoPhase[]
  reps: number
  soundOn: boolean
  onComplete: () => void
}) {
  const [rep, setRep] = useState(0) // completed reps
  const [pi, setPi] = useState(0) // current phase index
  const [paused, setPaused] = useState(false)
  const current = phases[pi]

  useEffect(() => {
    if (paused) return
    if (soundOn) cue.tick()
    const id = setTimeout(() => {
      let nextPi = pi + 1
      let nextRep = rep
      if (nextPi >= phases.length) {
        nextPi = 0
        nextRep = rep + 1
      }
      if (nextRep >= reps) {
        onComplete()
        return
      }
      setRep(nextRep)
      setPi(nextPi)
    }, current.seconds * 1000)
    return () => clearTimeout(id)
    // re-runs on each phase/rep change to schedule the next beat
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pi, rep, paused])

  return (
    <div className="session-ring-zone">
      <div className="cadence-ring" key={`${rep}-${pi}`}>
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <circle className="cadence-track" cx="60" cy="60" r="52" />
          <circle
            className={`cadence-sweep ${paused ? 'paused' : ''}`}
            cx="60"
            cy="60"
            r="52"
            style={{ animationDuration: `${current.seconds}s` }}
          />
        </svg>
        <div className="cadence-center">
          <span className="cadence-phase">{current.label}</span>
          <span className="cadence-rep">
            Rep {Math.min(rep + 1, reps)} / {reps}
          </span>
        </div>
      </div>
      <div className="session-actions">
        <button type="button" className="small-button" onClick={() => setPaused((p) => !p)}>
          {paused ? 'Resume' : 'Pause'}
        </button>
        <button type="button" className="small-button" onClick={onComplete}>
          Done set
        </button>
      </div>
    </div>
  )
}

function ProgressRing({
  fraction,
  label,
  sub,
  tone,
}: {
  fraction: number
  label: string
  sub: string
  tone: 'work' | 'rest'
}) {
  const offset = RING_CIRC * (1 - Math.max(0, Math.min(1, fraction)))
  return (
    <div className={`session-ring tone-${tone}`}>
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <circle className="ring-track" cx="60" cy="60" r="52" />
        <circle
          className="ring-fill"
          cx="60"
          cy="60"
          r="52"
          strokeDasharray={RING_CIRC}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="session-ring-center">
        <span className="session-ring-num">{label}</span>
        <span className="session-ring-sub">{sub}</span>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// End-of-session check-in + summary
// ---------------------------------------------------------------------------

function CheckIn({
  condition,
  onSave,
}: {
  condition: Condition
  onSave: (pain: number | null, effort: number | null) => void
}) {
  const [pain, setPain] = useState(2)
  const [effort, setEffort] = useState(5)

  return (
    <div className="session-checkin">
      <div className="session-complete-mark">
        <Icon name="check" size={36} />
      </div>
      <h2>How did that feel?</h2>
      <p className="session-checkin-intro">
        A quick check-in helps you track {condition.shortName} over time. This stays private on
        this device.
      </p>

      <div className="checkin-field">
        <div className="checkin-label">
          <span>Pain during/after</span>
          <strong>{pain}/10</strong>
        </div>
        <input
          type="range"
          min={0}
          max={10}
          step={1}
          value={pain}
          onChange={(e) => setPain(Number(e.target.value))}
          className="checkin-slider pain"
          aria-label="Pain level 0 to 10"
        />
        <div className="checkin-scale">
          <span>None</span>
          <span>Worst</span>
        </div>
      </div>

      <div className="checkin-field">
        <div className="checkin-label">
          <span>Effort (how hard)</span>
          <strong>{effort}/10</strong>
        </div>
        <input
          type="range"
          min={1}
          max={10}
          step={1}
          value={effort}
          onChange={(e) => setEffort(Number(e.target.value))}
          className="checkin-slider effort"
          aria-label="Effort level 1 to 10"
        />
        <div className="checkin-scale">
          <span>Easy</span>
          <span>Max</span>
        </div>
      </div>

      <div className="session-actions">
        <button type="button" className="primary-action" onClick={() => onSave(pain, effort)}>
          Save session
        </button>
        <button type="button" className="ghost-action" onClick={() => onSave(null, null)}>
          Skip
        </button>
      </div>
    </div>
  )
}

function SessionSummary({
  condition,
  phase,
  nextPhase,
  doneCount,
  streak,
  onAdvancePhase,
  onClose,
}: {
  condition: Condition
  phase: RehabPhase
  nextPhase: RehabPhase | null
  doneCount: number
  streak: number
  onAdvancePhase?: () => void
  onClose: () => void
}) {
  const phaseComplete = doneCount >= phase.exercises.length
  return (
    <div className="session-complete">
      <div className="session-complete-mark">
        <Icon name="check" size={40} />
      </div>
      <h2>Session logged</h2>
      <p>
        Nice work — {doneCount} of {phase.exercises.length} exercises for {condition.shortName}{' '}
        (Phase {phase.order}).
      </p>
      {streak > 0 && (
        <p className="session-streak">
          <Icon name="flame" size={18} /> {streak}-day streak
        </p>
      )}
      <p className="session-complete-note">
        Remember the pain rule: a little discomfort that settles by the next morning is usually
        fine; sharp, worsening, or next-day-building pain means scale back.
      </p>
      <div className="session-actions">
        {phaseComplete && nextPhase && onAdvancePhase ? (
          <button type="button" className="primary-action" onClick={onAdvancePhase}>
            Advance to Phase {nextPhase.order}
            <Icon name="arrowRight" size={18} />
          </button>
        ) : (
          <button type="button" className="primary-action" onClick={onClose}>
            Done
          </button>
        )}
        <button type="button" className="ghost-action" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
}
