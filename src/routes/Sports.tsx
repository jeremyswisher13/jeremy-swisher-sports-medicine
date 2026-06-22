import { Link } from 'react-router-dom'
import { sportPathways, conditionsBySport } from '../content'
import { Icon } from '../components/common/Icon'

export function SportsIndexRoute() {
  return (
    <section className="page">
      <header className="page-head">
        <h1>Sport Pathways</h1>
        <p>
          Sport-specific hubs — the common injuries for your sport, plus warm-up,
          prevention, and return-to-play guidance.
        </p>
      </header>
      <div className="sport-grid">
        {sportPathways.map((p) => {
          const count = conditionsBySport(p.sportTag).length
          return (
            <Link key={p.id} to={`/sport/${p.id}`} className="sport-pathway-card">
              <div className="sport-pathway-icon">
                <Icon name={p.iconKey} size={30} strokeWidth={1.7} />
              </div>
              <div className="sport-pathway-body">
                <strong>{p.name}</strong>
                <span>{p.tagline}</span>
                <em>{count} related conditions</em>
              </div>
              <Icon name="arrowRight" size={20} />
            </Link>
          )
        })}
      </div>
    </section>
  )
}
