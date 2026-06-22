import type { EvidenceStrength, ReviewMeta } from '../../content'
import { Icon } from './Icon'

const strengthLabel: Record<EvidenceStrength, string> = {
  strong: 'Strong evidence',
  moderate: 'Moderate evidence',
  limited: 'Limited evidence',
  mixed: 'Mixed evidence',
  emerging: 'Emerging evidence',
  'expert-opinion': 'Expert opinion',
}

/** Strength-of-evidence pill. */
export function EvidenceBadge({
  strength,
  className,
}: {
  strength: EvidenceStrength
  className?: string
}) {
  return (
    <span className={`evidence-badge strength-${strength} ${className ?? ''}`}>
      {strengthLabel[strength]}
    </span>
  )
}

/** Physician review status indicator. */
export function ReviewStatus({ review }: { review: ReviewMeta }) {
  const label =
    review.status === 'physician-approved'
      ? `Reviewed by ${review.reviewedBy ?? 'physician'}${
          review.lastReviewed ? ` · ${review.lastReviewed}` : ''
        }`
      : 'Physician-review pending'
  return (
    <span className={`review-status status-${review.status}`}>
      <Icon
        name={review.status === 'physician-approved' ? 'shield' : 'info'}
        size={15}
      />
      {label}
    </span>
  )
}
