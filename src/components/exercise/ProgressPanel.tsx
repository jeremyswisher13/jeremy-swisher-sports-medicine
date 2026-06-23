import type { Condition } from '../../content'
import { useProgram } from '../../hooks/useProgram'
import { Icon } from '../common/Icon'

function fmtDate(ts: number): string {
  return new Date(ts).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
}

function Sparkline({ values, max }: { values: number[]; max: number }) {
  const w = 240
  const h = 44
  const pad = 5
  const n = values.length
  const x = (i: number) => pad + (n === 1 ? 0 : (i / (n - 1)) * (w - 2 * pad))
  const y = (v: number) => pad + (1 - v / max) * (h - 2 * pad)
  const pts = values.map((v, i) => `${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ')
  const lastIdx = n - 1
  return (
    <svg
      className="sparkline"
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="none"
      role="img"
      aria-label={`Pain trend: ${values.join(', ')} out of ${max}`}
    >
      <polyline className="sparkline-line" points={pts} fill="none" />
      <circle className="sparkline-dot" cx={x(lastIdx)} cy={y(values[lastIdx])} r="3.2" />
    </svg>
  )
}

/**
 * Per-condition rehab journal: sessions, adherence streak, pain trend, and a
 * short history. All from the local-only session log; hidden until the patient
 * has completed at least one follow-along session.
 */
export function ProgressPanel({ condition }: { condition: Condition }) {
  const program = useProgram()
  const stats = program.getConditionStats(condition.id)
  if (stats.count === 0) return null

  const recent = program.getSessions(condition.id).slice(0, 5)
  const streak = program.currentStreakDays
  const last = stats.lastSession

  return (
    <section className="panel progress-panel" aria-labelledby="progress-title">
      <div className="panel-title-row">
        <h2 id="progress-title">
          <Icon name="heart" size={22} />
          Your progress
        </h2>
      </div>

      <div className="progress-body">
        <div className="progress-stats">
          <div className="progress-stat">
            <strong>{stats.count}</strong>
            <span>session{stats.count === 1 ? '' : 's'}</span>
          </div>
          {streak > 0 && (
            <div className="progress-stat streak">
              <strong>
                <Icon name="flame" size={18} />
                {streak}
              </strong>
              <span>day streak</span>
            </div>
          )}
          {last?.pain != null && (
            <div className="progress-stat">
              <strong>{last.pain}/10</strong>
              <span>last pain</span>
            </div>
          )}
        </div>

        {stats.painSeries.length >= 2 && (
          <div className="progress-trend">
            <div className="progress-trend-head">
              <span>Pain trend</span>
              <small>{stats.painSeries.length} logged</small>
            </div>
            <Sparkline values={stats.painSeries} max={10} />
            <div className="progress-trend-scale">
              <span>none</span>
              <span>worst</span>
            </div>
          </div>
        )}

        <ul className="progress-history">
          {recent.map((s) => (
            <li key={s.id}>
              <span className="ph-date">{fmtDate(s.completedAt)}</span>
              <span className="ph-meta">
                {s.exercisesDone}/{s.exercisesTotal} exercises
              </span>
              <span className="ph-tags">
                {s.pain != null && <em className="ph-pain">pain {s.pain}</em>}
                {s.effort != null && <em className="ph-effort">effort {s.effort}</em>}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
