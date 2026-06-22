import { citationById, GLOBAL_DISCLAIMER } from '../content'
import { Disclaimer } from '../components/common/Disclaimer'
import { Icon } from '../components/common/Icon'

const typeLabel: Record<string, string> = {
  guideline: 'Guideline',
  'systematic-review': 'Systematic review',
  'meta-analysis': 'Meta-analysis',
  rct: 'RCT',
  cohort: 'Cohort',
  consensus: 'Consensus',
  'narrative-review': 'Review',
}

export function EvidenceRoute() {
  const cites = [...citationById.values()].sort((a, b) => b.year - a.year)

  return (
    <section className="page">
      <header className="page-head">
        <h1>Evidence Library</h1>
        <p>
          Every source cited across the app, with its type and a one-line takeaway.
          Links marked “unverified” are pending a final source check.
        </p>
      </header>

      <div className="evidence-table-wrap">
        <table className="evidence-table">
          <thead>
            <tr>
              <th>Source</th>
              <th>Type</th>
              <th>Takeaway</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {cites.map((c) => (
              <tr key={c.id}>
                <td>
                  <strong>{c.authorsOrOrg}</strong>
                  <small>
                    {c.source} · {c.year}
                  </small>
                </td>
                <td>{typeLabel[c.type] ?? c.type}</td>
                <td>{c.takeaway}</td>
                <td>
                  <a href={c.url} target="_blank" rel="noreferrer">
                    Open
                    <Icon name="external" size={14} />
                  </a>
                  {!c.verified && <span className="citation-unverified">unverified</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Disclaimer text={GLOBAL_DISCLAIMER} />
    </section>
  )
}
