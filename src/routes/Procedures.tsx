import { Link } from 'react-router-dom'
import { procedures, PROCEDURE_DISCLAIMER } from '../content'
import { EvidenceBadge } from '../components/common/badges'
import { Disclaimer } from '../components/common/Disclaimer'
import { Icon } from '../components/common/Icon'

export function ProceduresIndexRoute() {
  return (
    <section className="page">
      <header className="page-head">
        <h1>Interventional Sports Medicine</h1>
        <p>
          Procedures explained for shared decision-making — what they are, who they
          may fit, and what the evidence actually shows.
        </p>
      </header>
      <Disclaimer text={PROCEDURE_DISCLAIMER} />
      <div className="procedure-index-grid">
        {procedures.map((p) => {
          return (
            <Link
              key={p.id}
              to={`/procedure/${p.id}`}
              className={`procedure-card accent-${p.accent}`}
            >
              <Icon name={p.iconKey} size={30} strokeWidth={1.7} />
              <span>
                <strong>{p.title}</strong>
                <EvidenceBadge strength={p.evidence} />
              </span>
              <Icon name="chevronRight" size={18} />
            </Link>
          )
        })}
      </div>
    </section>
  )
}
