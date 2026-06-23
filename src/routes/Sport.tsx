import { Link, useParams } from 'react-router-dom'
import {
  sportPathwayById,
  conditionById,
  GLOBAL_DISCLAIMER,
} from '../content'
import { EvidenceBadge } from '../components/common/badges'
import { Disclaimer } from '../components/common/Disclaimer'
import { Icon } from '../components/common/Icon'
import { NotFound } from './NotFound'

export function SportRoute() {
  const { sportId } = useParams()
  const pathway = sportId ? sportPathwayById.get(sportId) : undefined
  if (!pathway) return <NotFound />

  const conditions = pathway.commonConditionIds
    .map((id) => conditionById.get(id))
    .filter((c) => c != null)

  return (
    <section className="page sport-page">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/sports">Sport Pathways</Link>
        <Icon name="chevronRight" size={15} />
        <span>{pathway.name}</span>
      </nav>

      <header className="sport-hero">
        <div className="sport-hero-mark">
          <Icon name={pathway.iconKey} size={40} strokeWidth={1.6} />
        </div>
        <div>
          <p className="sport-eyebrow">Sport Pathway</p>
          <h1>{pathway.name}</h1>
          <p className="sport-tagline">{pathway.tagline}</p>
          <p className="sport-overview">{pathway.overview}</p>
        </div>
      </header>

      <section className="sport-section-block">
        <h2 className="section-title">Common injuries in this sport</h2>
        <div className="condition-grid">
          {conditions.map((c) => (
            <Link key={c!.id} to={`/condition/${c!.id}`} className="condition-card">
              <div className="condition-card-head">
                <EvidenceBadge strength={c!.evidence.strength} />
                <strong>{c!.name}</strong>
              </div>
              <p>{c!.oneLiner}</p>
              <div className="condition-card-foot">
                <span className="condition-card-region">{c!.shortName}</span>
                <Icon name="chevronRight" size={18} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="sport-guidance-grid">
        <section className="panel panel-pad sport-guidance">
          <h2>
            <Icon name="heart" size={20} />
            Warm-up
          </h2>
          <ul className="bullet-list">
            {pathway.warmup.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </section>
        <section className="panel panel-pad sport-guidance">
          <h2>
            <Icon name="shield" size={20} />
            Staying healthy
          </h2>
          <ul className="bullet-list">
            {pathway.prevention.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </section>
        <section className="panel panel-pad sport-guidance">
          <h2>
            <Icon name="arrowRight" size={20} />
            Returning to play
          </h2>
          <ul className="bullet-list">
            {pathway.returnToPlay.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </section>
      </div>

      <Disclaimer text={GLOBAL_DISCLAIMER} />
    </section>
  )
}
