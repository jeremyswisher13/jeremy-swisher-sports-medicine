import type { Exercise } from '../../content'
import { formatDose } from '../../lib/format'
import { Icon } from '../common/Icon'
import { MediaEmbed } from '../common/MediaEmbed'

/**
 * Exercise detail: dose table, cues, progression/regression, and an optional
 * curated video. No figure illustrations (premium, text- and video-led).
 */
export function ExerciseCard({
  exercise,
  done,
  onToggle,
}: {
  exercise: Exercise
  done?: boolean
  onToggle?: () => void
}) {
  return (
    <article className={`exercise-card ${done ? 'done' : ''}`}>
      <div className="exercise-card-body">
        <div className="exercise-card-head">
          <div>
            <h4>{exercise.name}</h4>
            <p className="exercise-target">{exercise.target}</p>
          </div>
          {onToggle && (
            <button
              type="button"
              className={`check-toggle ${done ? 'done' : ''}`}
              onClick={onToggle}
              aria-pressed={done}
              aria-label={done ? 'Mark not done' : 'Mark done'}
            >
              <span className="checkbox" aria-hidden="true">
                {done && <Icon name="check" size={14} />}
              </span>
              {done ? 'Done' : 'Mark done'}
            </button>
          )}
        </div>

        <p className="exercise-purpose">{exercise.purpose}</p>

        <table className="exercise-table">
          <tbody>
            <tr>
              <th scope="row">Dose</th>
              <td>{formatDose(exercise.dose)}</td>
            </tr>
            <tr>
              <th scope="row">Frequency</th>
              <td>{exercise.frequency}</td>
            </tr>
            <tr>
              <th scope="row">Progress it</th>
              <td>{exercise.progression}</td>
            </tr>
            <tr>
              <th scope="row">Make it easier</th>
              <td>{exercise.regression}</td>
            </tr>
            {exercise.painRule && (
              <tr>
                <th scope="row">Pain rule</th>
                <td>{exercise.painRule}</td>
              </tr>
            )}
            {exercise.equipment && exercise.equipment.length > 0 && (
              <tr>
                <th scope="row">Equipment</th>
                <td>{exercise.equipment.join(', ')}</td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="exercise-cues">
          <strong>Form cues</strong>
          <ul>
            {exercise.formCues.map((cue) => (
              <li key={cue}>{cue}</li>
            ))}
          </ul>
        </div>

        {exercise.cautions && exercise.cautions.length > 0 && (
          <div className="exercise-cautions">
            <strong>Caution</strong>
            <ul>
              {exercise.cautions.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        )}

        {exercise.video && <MediaEmbed video={exercise.video} />}
      </div>
    </article>
  )
}
