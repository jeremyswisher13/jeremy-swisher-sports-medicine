import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  conditionsByRegion,
  getRegion,
  sportMeta,
  type SportTag,
} from '../content'
import { Icon } from '../components/common/Icon'
import { EvidenceBadge, ReviewStatus } from '../components/common/badges'
import { NotFound } from './NotFound'

export function RegionRoute() {
  const { regionId } = useParams()
  const region = regionId ? getRegion(regionId) : undefined
  const [sport, setSport] = useState<SportTag | 'all'>('all')

  const conditions = useMemo(
    () => (region ? conditionsByRegion(region.id) : []),
    [region],
  )

  const availableSports = useMemo(() => {
    const set = new Set<SportTag>()
    conditions.forEach((c) => c.sportTags.forEach((s) => set.add(s)))
    return sportMeta.filter((s) => set.has(s.id))
  }, [conditions])

  if (!region) return <NotFound />

  const filtered =
    sport === 'all'
      ? conditions
      : conditions.filter((c) => c.sportTags.includes(sport))

  return (
    <section className="page">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/regions">Regions</Link>
        <Icon name="chevronRight" size={15} />
        <span>{region.name}</span>
      </nav>
      <header className="page-head">
        <h1>{region.name}</h1>
        <p>{region.blurb}</p>
      </header>

      {availableSports.length > 0 && (
        <div className="filter-chips" role="group" aria-label="Filter by sport">
          <button
            type="button"
            className={`chip ${sport === 'all' ? 'active' : ''}`}
            aria-pressed={sport === 'all'}
            onClick={() => setSport('all')}
          >
            All
          </button>
          {availableSports.map((s) => (
            <button
              key={s.id}
              type="button"
              className={`chip ${sport === s.id ? 'active' : ''}`}
              aria-pressed={sport === s.id}
              onClick={() => setSport(s.id)}
            >
              {s.name}
            </button>
          ))}
        </div>
      )}

      <div className="condition-grid">
        {filtered.map((c) => (
          <Link key={c.id} to={`/condition/${c.id}`} className="condition-card">
            <div className="condition-card-head">
              <strong>{c.name}</strong>
              <EvidenceBadge strength={c.evidence.strength} />
            </div>
            <p>{c.oneLiner}</p>
            <div className="condition-card-foot">
              <ReviewStatus review={c.review} />
              <Icon name="chevronRight" size={18} />
            </div>
          </Link>
        ))}
        {filtered.length === 0 && (
          <p className="empty-note">No conditions match that sport yet.</p>
        )}
      </div>
    </section>
  )
}
