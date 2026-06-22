import { useState } from 'react'
import { HEP_DISCLAIMER } from '../../content'
import type { Condition, RehabPhase } from '../../content'
import { useProgram } from '../../hooks/useProgram'
import { ExerciseCard } from './ExerciseCard'
import { FollowAlongSession } from './FollowAlongSession'
import { Disclaimer } from '../common/Disclaimer'
import { Icon } from '../common/Icon'

export function HomeExerciseProgram({ condition }: { condition: Condition }) {
  const program = useProgram()
  const phases = condition.hep.phases
  const progress = program.getProgress(condition.id)
  const [sessionOpen, setSessionOpen] = useState(false)

  const activePhase: RehabPhase =
    phases.find((p) => p.id === progress.activePhaseId) ?? phases[0]

  const total = activePhase.exercises.length
  const doneInPhase = activePhase.exercises.filter((ex) =>
    progress.completedExerciseIds.has(ex.id),
  ).length
  const pct = total ? Math.round((doneInPhase / total) * 100) : 0

  return (
    <section className="panel exercise-panel" aria-labelledby="exercise-title">
      <div className="panel-title-row">
        <h2 id="exercise-title">
          <Icon name="exercises" size={22} />
          Home Exercise Program
        </h2>
        {progress.completedExerciseIds.size > 0 && (
          <button
            type="button"
            className="small-button"
            onClick={() => program.resetCondition(condition.id)}
          >
            Reset progress
          </button>
        )}
      </div>

      <div className="hep-intro">
        <p>{condition.hep.overview}</p>
      </div>

      <div className="exercise-layout">
        <div className="phase-list" role="list" aria-label="Program phases">
          {phases.map((phase) => {
            const phaseDone = phase.exercises.every((ex) =>
              progress.completedExerciseIds.has(ex.id),
            )
            const isSelected = phase.id === activePhase.id
            return (
              <button
                key={phase.id}
                type="button"
                className={`phase-tab ${isSelected ? 'selected' : ''}`}
                onClick={() => program.setActivePhase(condition.id, phase.id)}
                aria-pressed={isSelected}
              >
                <span>{phaseDone ? <Icon name="check" size={14} /> : phase.order}</span>
                <strong>Phase {phase.order}</strong>
                <em>{phase.title}</em>
                <small>{phaseDone ? 'complete' : `${phase.exercises.length} exercises`}</small>
              </button>
            )
          })}
        </div>

        <div className="exercise-detail">
          <div className="exercise-detail-header">
            <div>
              <h3>
                Phase {activePhase.order}: {activePhase.title}
              </h3>
              <p>{activePhase.summary}</p>
            </div>
          </div>

          {/* Progress + follow-along CTA */}
          <div className="hep-actionbar">
            <div className="hep-progress">
              <div className="hep-progress-top">
                <span>
                  <strong>{doneInPhase}</strong> of {total} done
                </span>
                <span>{pct}%</span>
              </div>
              <div className="hep-progress-track" aria-hidden="true">
                <div className="hep-progress-fill" style={{ width: `${pct}%` }} />
              </div>
            </div>
            <button
              type="button"
              className="primary-action hep-start"
              onClick={() => setSessionOpen(true)}
              disabled={total === 0}
            >
              <Icon name="play" size={20} />
              {doneInPhase > 0 && doneInPhase < total ? 'Resume session' : 'Start follow-along'}
            </button>
          </div>

          <div className="phase-meta">
            <div>
              <strong>Goal</strong>
              <span>{activePhase.goal}</span>
            </div>
            <div>
              <strong>Timeframe</strong>
              <span>{activePhase.durationGuidance}</span>
            </div>
            <div>
              <strong>Move on when</strong>
              <ul>
                {activePhase.exitCriteria.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>

          {activePhase.educationPoints.length > 0 && (
            <div className="phase-education">
              <strong>Keep in mind</strong>
              <ul>
                {activePhase.educationPoints.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="exercise-card-list">
            {activePhase.exercises.map((ex) => (
              <ExerciseCard
                key={ex.id}
                exercise={ex}
                done={progress.completedExerciseIds.has(ex.id)}
                onToggle={() => program.toggleExercise(condition.id, ex.id)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="hep-disclaimer">
        <Disclaimer text={HEP_DISCLAIMER} compact />
      </div>

      {sessionOpen && (
        <FollowAlongSession
          condition={condition}
          phase={activePhase}
          onClose={() => setSessionOpen(false)}
        />
      )}
    </section>
  )
}
