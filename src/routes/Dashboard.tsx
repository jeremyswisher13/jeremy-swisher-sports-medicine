import { Link } from 'react-router-dom'
import {
  conditionById,
  conditions,
  populatedRegions,
  procedures,
  regions,
  GLOBAL_DISCLAIMER,
} from '../content'
import { useProgram } from '../hooks/useProgram'
import { Disclaimer } from '../components/common/Disclaimer'
import { Icon } from '../components/common/Icon'

export function DashboardRoute() {
  const program = useProgram()

  const started = program.startedConditionIds
    .map((id) => conditionById.get(id))
    .filter((c) => c != null)
    .slice(0, 3)

  const populated = populatedRegions()

  return (
    <section className="page dashboard">
      <header className="page-head">
        <h1>Sports Medicine Dashboard</h1>
        <p>
          Evidence-based injury education, home exercise programs, and procedure
          guidance — organized by body region.
        </p>
      </header>

      <div className="stat-row">
        <div className="stat-tile">
          <strong>{conditions.length}</strong>
          <span>Conditions</span>
        </div>
        <div className="stat-tile">
          <strong>{populated.length}</strong>
          <span>Body regions</span>
        </div>
        <div className="stat-tile">
          <strong>{procedures.length}</strong>
          <span>Procedures</span>
        </div>
        <div className="stat-tile">
          <strong>{program.programs.length}</strong>
          <span>Saved programs</span>
        </div>
      </div>

      {started.length > 0 && (
        <section className="panel continue-panel">
          <div className="panel-title-row">
            <h2>
              <Icon name="exercises" size={22} />
              Continue where you left off
            </h2>
          </div>
          <div className="continue-list">
            {started.map((c) => (
              <Link key={c!.id} to={`/condition/${c!.id}`} className="continue-row">
                <span>
                  <strong>{c!.name}</strong>
                  <small>{c!.shortName}</small>
                </span>
                <Icon name="chevronRight" size={18} />
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="region-section">
        <h2 className="section-title">Browse by region</h2>
        <div className="region-grid">
          {(populated.length ? populated : regions).map((region) => {
            return (
              <Link key={region.id} to={`/region/${region.id}`} className="region-card">
                <Icon name={region.iconKey} size={28} strokeWidth={1.7} />
                <span className="region-card-body">
                  <strong>{region.name}</strong>
                  <small>{region.blurb}</small>
                </span>
                <Icon name="chevronRight" size={18} />
              </Link>
            )
          })}
        </div>
      </section>

      <Disclaimer text={GLOBAL_DISCLAIMER} />
    </section>
  )
}
