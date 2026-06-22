import { getCitation } from '../../content'
import { Icon } from './Icon'

const typeLabel: Record<string, string> = {
  guideline: 'Guideline',
  'systematic-review': 'Systematic review',
  'meta-analysis': 'Meta-analysis',
  rct: 'RCT',
  cohort: 'Cohort',
  consensus: 'Consensus',
  'narrative-review': 'Review',
}

export function CitationList({ ids }: { ids: string[] }) {
  const cites = ids.map(getCitation).filter((c) => c != null)
  if (cites.length === 0) return null
  return (
    <ul className="citation-list">
      {cites.map((c) => (
        <li key={c!.id} className="citation-item">
          <a href={c!.url} target="_blank" rel="noreferrer">
            <span className="citation-tag">{typeLabel[c!.type] ?? c!.type}</span>
            <span className="citation-body">
              <strong>
                {c!.authorsOrOrg} ({c!.year})
              </strong>
              <small>{c!.takeaway}</small>
              <em>
                {c!.source}
                {!c!.verified && <span className="citation-unverified"> · link unverified</span>}
              </em>
            </span>
            <Icon name="external" size={15} />
          </a>
        </li>
      ))}
    </ul>
  )
}
