import { useState } from 'react'
import type { Condition, Exercise, RehabPhase } from '../../content'
import { formatDose } from '../../lib/format'
import { useProgram } from '../../hooks/useProgram'
import { useCountdown, fmtTime } from '../../hooks/useCountdown'
import { Icon } from '../common/Icon'
import { MediaEmbed } from '../common/MediaEmbed'

const REST_SECONDS = 45

/**
 * Full-screen "follow-along" player: walks the patient through one phase, one
 * exercise at a time, with a hold/rest timer, set tracking, form cues, and the
 * curated video. Completing an exercise marks it done in saved progress.
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
  const [step, setStep] = useState(0)

  function markDone(ex: Exercise) {
    if (!program.isExerciseDone(condition.id, ex.id)) {
      program.toggleExercise(condition.id, ex.id)
    }
  }

  const total = exercises.length
  const isComplete = step >= total
  const pct = Math.round((Math.min(step, total) / total) * 100)

  return (
    <>
      <button className="drawer-scrim" type="button" aria-label="Close session" onClick={onClose} />
      <section className="session-overlay" role="dialog" aria-modal="true" aria-label="Follow-along session">
        <header className="session-bar">
          <div className="session-bar-info">
            <span className="session-eyebrow">Follow along · {condition.shortName}</span>
            <strong>
              Phase {phase.order}: {phase.title}
            </strong>
          </div>
          <button type="button" className="session-close" onClick={onClose} aria-label="Close">
            <Icon name="close" size={20} />
          </button>
        </header>

        <div className="session-progress" aria-hidden="true">
          <div className="session-progress-fill" style={{ width: `${pct}%` }} />
        </div>

        {isComplete ? (
          <SessionComplete
            condition={condition}
            phase={phase}
            doneCount={exercises.filter((e) => program.isExerciseDone(condition.id, e.id)).length}
            onClose={onClose}
            onRestart={() => setStep(0)}
          />
        ) : (
          <ExercisePlayer
            key={exercises[step].id}
            exercise={exercises[step]}
            index={step}
            total={total}
            onDone={() => {
              markDone(exercises[step])
              setStep((s) => s + 1)
            }}
            onSkip={() => setStep((s) => s + 1)}
            onPrev={step > 0 ? () => setStep((s) => s - 1) : undefined}
          />
        )}
      </section>
    </>
  )
}

function ExercisePlayer({
  exercise,
  index,
  total,
  onDone,
  onSkip,
  onPrev,
}: {
  exercise: Exercise
  index: number
  total: number
  onDone: () => void
  onSkip: () => void
  onPrev?: () => void
}) {
  const sets = exercise.dose.sets ?? 1
  const holdSeconds = exercise.dose.holdSeconds
  const isHold = !!holdSeconds
  const [setsDone, setSetsDone] = useState(0)
  const [mode, setMode] = useState<'idle' | 'rest'>('idle')
  const timer = useCountdown()
  const [showVideo, setShowVideo] = useState(false)

  const allSetsDone = setsDone >= sets

  function logSet() {
    const next = setsDone + 1
    setSetsDone(next)
    timer.reset()
    if (next < sets) setMode('rest')
    else setMode('idle')
  }

  function startRest() {
    setMode('idle')
    timer.start(REST_SECONDS)
  }

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

      {/* Timer / action zone */}
      {!allSetsDone && (
        <div className="session-timer-zone">
          {isHold ? (
            <>
              <div className={`session-timer ${timer.finished ? 'finished' : ''}`}>
                <span className="session-timer-num">
                  {timer.started ? fmtTime(timer.remaining) : fmtTime(holdSeconds!)}
                </span>
                <span className="session-timer-unit">
                  {mode === 'rest' ? 'rest' : 'sec hold'}
                </span>
              </div>
              {mode === 'rest' ? (
                <div className="session-actions">
                  <button type="button" className="primary-action" onClick={startRest}>
                    <Icon name="play" size={18} /> Rest {REST_SECONDS}s
                  </button>
                  <button type="button" className="small-button" onClick={() => setMode('idle')}>
                    Skip rest
                  </button>
                </div>
              ) : !timer.started || timer.finished ? (
                <div className="session-actions">
                  {timer.finished ? (
                    <button type="button" className="primary-action" onClick={logSet}>
                      <Icon name="check" size={18} /> Log set {setsDone + 1}
                    </button>
                  ) : (
                    <button type="button" className="primary-action" onClick={() => timer.start(holdSeconds!)}>
                      <Icon name="play" size={18} /> Start {holdSeconds}s hold
                    </button>
                  )}
                </div>
              ) : (
                <div className="session-actions">
                  <button type="button" className="small-button" onClick={timer.pause}>
                    Pause
                  </button>
                  <button type="button" className="small-button" onClick={() => timer.reset()}>
                    Reset
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="session-rep-zone">
              <div className="session-rep-readout">
                <strong>{exercise.dose.reps ?? '—'}</strong>
                <span>reps{exercise.dose.tempo ? ` · ${exercise.dose.tempo}` : ''}</span>
              </div>
              <button type="button" className="primary-action" onClick={logSet}>
                <Icon name="check" size={18} /> Complete set {setsDone + 1}
              </button>
            </div>
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
        <button type="button" className="primary-action session-next" onClick={onDone}>
          {allSetsDone ? 'Done — next' : 'Mark done — next'}
          <Icon name="arrowRight" size={18} />
        </button>
      </div>
    </div>
  )
}

function SessionComplete({
  condition,
  phase,
  doneCount,
  onClose,
  onRestart,
}: {
  condition: Condition
  phase: RehabPhase
  doneCount: number
  onClose: () => void
  onRestart: () => void
}) {
  return (
    <div className="session-complete">
      <div className="session-complete-mark">
        <Icon name="check" size={40} />
      </div>
      <h2>Session complete</h2>
      <p>
        Nice work — you finished {doneCount} of {phase.exercises.length} exercises for{' '}
        {condition.shortName} (Phase {phase.order}).
      </p>
      <p className="session-complete-note">
        Remember the pain rule: a little discomfort that settles by the next morning is usually fine;
        sharp, worsening, or next-day-building pain means scale back.
      </p>
      <div className="session-actions">
        <button type="button" className="primary-action" onClick={onClose}>
          Done
        </button>
        <button type="button" className="ghost-action" onClick={onRestart}>
          Restart session
        </button>
      </div>
    </div>
  )
}
