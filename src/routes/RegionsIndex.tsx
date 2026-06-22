import { Link } from 'react-router-dom'
import { conditionsByRegion, regions, GLOBAL_DISCLAIMER } from '../content'
import { Disclaimer } from '../components/common/Disclaimer'
import { Icon } from '../components/common/Icon'

export function RegionsIndexRoute() {
  return (
    <section className="page">
      <header className="page-head">
        <h1>Body Regions</h1>
        <p>Choose the area that’s bothering you to see common conditions and programs.</p>
      </header>
      <div className="region-grid">
        {regions.map((region) => {
          const count = conditionsByRegion(region.id).length
          return (
            <Link key={region.id} to={`/region/${region.id}`} className="region-card">
              <Icon name={region.iconKey} size={30} strokeWidth={1.7} />
              <span className="region-card-body">
                <strong>{region.name}</strong>
                <small>{region.blurb}</small>
                <em>{count} condition{count === 1 ? '' : 's'}</em>
              </span>
              <Icon name="chevronRight" size={18} />
            </Link>
          )
        })}
      </div>
      <Disclaimer text={GLOBAL_DISCLAIMER} />
    </section>
  )
}
