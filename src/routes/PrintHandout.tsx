import { Link } from 'react-router-dom'
import { conditionById, HEP_DISCLAIMER, GLOBAL_DISCLAIMER } from '../content'
import type { RehabPhase } from '../content'
import { useProgram } from '../hooks/useProgram'
import { formatDose } from '../lib/format'
import { Icon } from '../components/common/Icon'

export function PrintHandoutRoute() {
  const program = useProgram()

  const active = program.programs.find((p) => p.id === program.activeProgramId) ?? null
  const today = new Date().toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  if (!active || active.items.length === 0) {
    return (
      <div className="print-page empty">
        <p>No program selected, or the program is empty.</p>
        <Link to="/program" className="primary-action">
          Go to My Program
        </Link>
      </div>
    )
  }

  return (
    <div className="print-page">
      <div className="print-toolbar no-print">
        <Link to="/program" className="ghost-action">
          <Icon name="chevronRight" size={18} className="rot-back" />
          Back
        </Link>
        <button type="button" className="primary-action" onClick={() => window.print()}>
          <Icon name="print" size={20} />
          Print / Save PDF
        </button>
      </div>

      <header className="print-header">
        <div>
          <h1>Home Exercise Program</h1>
          <p className="print-program-name">{active.name}</p>
        </div>
        <div className="print-clinic">
          <strong>Jeremy Swisher, MD</strong>
          <span>Sports Medicine</span>
          <span>{today}</span>
        </div>
      </header>

      <p className="print-disclaimer">{HEP_DISCLAIMER}</p>

      {active.items.map((item) => {
        const c = conditionById.get(item.conditionId)
        if (!c) return null
        const phase: RehabPhase =
          c.hep.phases.find((p) => p.id === item.phaseId) ?? c.hep.phases[0]
        return (
          <section key={item.conditionId} className="print-condition">
            <h2>{c.name}</h2>
            <p className="print-phase">
              Phase {phase.order}: {phase.title} — {phase.goal}
            </p>
            <table className="print-table">
              <thead>
                <tr>
                  <th>Exercise</th>
                  <th>Dose</th>
                  <th>Frequency</th>
                  <th>Cues</th>
                </tr>
              </thead>
              <tbody>
                {phase.exercises.map((ex) => (
                  <tr key={ex.id}>
                    <td data-label="Exercise">
                      <strong>{ex.name}</strong>
                    </td>
                    <td data-label="Dose">{formatDose(ex.dose)}</td>
                    <td data-label="Frequency">{ex.frequency}</td>
                    <td data-label="Cues">{ex.formCues.join('; ')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="print-redflags">
              <strong>See a clinician if:</strong>{' '}
              {c.redFlags
                .filter((f) => f.urgency !== 'see-clinician')
                .map((f) => f.text)
                .join(' ')}
            </div>
          </section>
        )
      })}

      <footer className="print-footer">{GLOBAL_DISCLAIMER}</footer>
    </div>
  )
}
