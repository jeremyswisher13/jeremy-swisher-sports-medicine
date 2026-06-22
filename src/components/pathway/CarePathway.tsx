import type { Condition } from '../../content'
import { useProgram } from '../../hooks/useProgram'
import { Icon } from '../common/Icon'

const stepIconKeys = ['shield', 'heart', 'exercises', 'arrowRight']

/** The staged care pathway overview. Selecting a step sets the active phase. */
export function CarePathway({ condition }: { condition: Condition }) {
  const program = useProgram()
  const progress = program.getProgress(condition.id)
  const phases = condition.hep.phases
  const activeId = progress.activePhaseId ?? phases[0]?.id

  return (
    <section className="panel pathway-panel" aria-labelledby="pathway-title">
      <div className="panel-header">
        <div>
          <h2 id="pathway-title">Care Pathway: {condition.shortName}</h2>
          <p>{condition.tissue}</p>
        </div>
      </div>
      <div className="pathway-steps" role="list" aria-label="Care pathway phases">
        {phases.map((phase, index) => {
          const allDone = phase.exercises.every((ex) =>
            progress.completedExerciseIds.has(ex.id),
          )
          const isActive = phase.id === activeId
          const cls = isActive ? 'active' : allDone ? 'complete' : 'upcoming'
          return (
            <button
              key={phase.id}
              className={`pathway-step ${cls}`}
              type="button"
              onClick={() => program.setActivePhase(condition.id, phase.id)}
              aria-pressed={isActive}
            >
              <span className="step-number">{phase.order}</span>
              <span className="step-body">
                <Icon name={stepIconKeys[index] ?? 'info'} size={30} strokeWidth={1.6} />
                <strong>{phase.title}</strong>
                <span>{phase.summary}</span>
                <ul>
                  {phase.exitCriteria.slice(0, 3).map((c) => (
                    <li key={c}>
                      <span className="task-dot" />
                      {c}
                    </li>
                  ))}
                </ul>
              </span>
            </button>
          )
        })}
      </div>
      <div className="panel-footer">
        <span>
          <Icon name="shield" size={20} />
          Goal: {condition.clinicalGoal}
        </span>
      </div>
    </section>
  )
}
