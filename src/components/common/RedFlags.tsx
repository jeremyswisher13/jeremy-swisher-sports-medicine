import type { RedFlag, RedFlagUrgency } from '../../content'
import { Icon } from './Icon'

const urgencyRank: Record<RedFlagUrgency, number> = {
  emergency: 0,
  urgent: 1,
  'see-clinician': 2,
}

const urgencyLabel: Record<RedFlagUrgency, string> = {
  emergency: 'Emergency',
  urgent: 'Urgent',
  'see-clinician': 'See a clinician',
}

/**
 * Highest-urgency banner shown above the program; the full list lives in the
 * SafetyBox. Returns null when there is nothing emergent.
 */
export function RedFlagBanner({ redFlags }: { redFlags: RedFlag[] }) {
  const top = [...redFlags].sort(
    (a, b) => urgencyRank[a.urgency] - urgencyRank[b.urgency],
  )[0]
  if (!top || top.urgency === 'see-clinician') return null
  return (
    <div className={`red-flag-banner urgency-${top.urgency}`} role="alert">
      <Icon name="warning" size={20} />
      <div>
        <strong>{urgencyLabel[top.urgency]}: seek care first</strong>
        <span>{top.text}</span>
      </div>
    </div>
  )
}

export function SafetyBox({
  redFlags,
  note,
}: {
  redFlags: RedFlag[]
  note: string
}) {
  const sorted = [...redFlags].sort(
    (a, b) => urgencyRank[a.urgency] - urgencyRank[b.urgency],
  )
  return (
    <section className="safety-box" aria-labelledby="safety-title">
      <h2 id="safety-title">
        <Icon name="warning" size={21} />
        When to see a clinician
      </h2>
      <p>Seek timely medical care if you have:</p>
      <ul>
        {sorted.map((flag) => (
          <li key={flag.text} className={`flag-${flag.urgency}`}>
            <span className="flag-tag">{urgencyLabel[flag.urgency]}</span>
            {flag.text}
          </li>
        ))}
      </ul>
      <p className="medical-note">{note}</p>
    </section>
  )
}
