import { Link, useParams } from 'react-router-dom'
import {
  procedureById,
  conditions,
  PROCEDURE_DISCLAIMER,
} from '../content'
import { EvidenceBadge } from '../components/common/badges'
import { CitationList } from '../components/common/Citations'
import { Disclaimer } from '../components/common/Disclaimer'
import { Icon } from '../components/common/Icon'
import { NotFound } from './NotFound'

export function ProcedureRoute() {
  const { procedureId } = useParams()
  const procedure = procedureId ? procedureById.get(procedureId) : undefined
  if (!procedure) return <NotFound />

  // Conditions that reference this procedure, with their notes.
  const related = conditions
    .map((c) => ({ c, rel: c.procedures.find((p) => p.procedureId === procedure.id) }))
    .filter((x) => x.rel != null)

  return (
    <section className="page">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/procedures">Procedures</Link>
        <Icon name="chevronRight" size={15} />
        <span>{procedure.title}</span>
      </nav>

      <section className={`panel procedure-hero accent-${procedure.accent}`}>
        <div className="procedure-hero-head">
          <Icon name={procedure.iconKey} size={34} strokeWidth={1.6} />
          <div>
            <h1>{procedure.title}</h1>
            <EvidenceBadge strength={procedure.evidence} />
          </div>
        </div>
        <p>{procedure.summary}</p>
      </section>

      <div className="procedure-detail-grid">
        <section className="panel panel-pad">
          <h2>Who it may fit</h2>
          <ul className="bullet-list">
            {procedure.bestFit.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </section>
        <section className="panel panel-pad">
          <h2>Questions to ask</h2>
          <ul className="bullet-list">
            {procedure.questions.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ul>
        </section>
      </div>

      {procedure.citationIds && procedure.citationIds.length > 0 && (
        <section className="panel panel-pad">
          <h2>Evidence</h2>
          <CitationList ids={procedure.citationIds} />
        </section>
      )}

      {related.length > 0 && (
        <section className="panel panel-pad">
          <h2>How it’s used by condition</h2>
          <div className="relevance-list">
            {related.map(({ c, rel }) => (
              <Link key={c.id} to={`/condition/${c.id}`} className="relevance-row">
                <span className="relevance-head">
                  <strong>{c.name}</strong>
                </span>
                <span className="relevance-note">{rel!.evidenceNote}</span>
                <Icon name="chevronRight" size={16} />
              </Link>
            ))}
          </div>
        </section>
      )}

      <Disclaimer text={PROCEDURE_DISCLAIMER} />
    </section>
  )
}
