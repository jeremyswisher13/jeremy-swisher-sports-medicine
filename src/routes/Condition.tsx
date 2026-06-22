import { Link, useParams } from 'react-router-dom'
import {
  conditionById,
  getRegion,
  procedureById,
  GLOBAL_DISCLAIMER,
  PROCEDURE_DISCLAIMER,
} from '../content'
import { CarePathway } from '../components/pathway/CarePathway'
import { HomeExerciseProgram } from '../components/exercise/HomeExerciseProgram'
import { SafetyBox, RedFlagBanner } from '../components/common/RedFlags'
import { EvidenceBadge, ReviewStatus } from '../components/common/badges'
import { CitationList } from '../components/common/Citations'
import { Disclaimer } from '../components/common/Disclaimer'
import { AddToProgram } from '../components/program/AddToProgram'
import { Icon } from '../components/common/Icon'
import { NotFound } from './NotFound'

const relevanceLabel: Record<string, string> = {
  'commonly-discussed': 'Commonly discussed',
  'selected-cases': 'Selected cases',
  rarely: 'Rarely',
  'not-indicated': 'Not indicated',
}

export function ConditionRoute() {
  const { conditionId } = useParams()
  const condition = conditionId ? conditionById.get(conditionId) : undefined
  if (!condition) return <NotFound />

  const region = getRegion(condition.region)

  return (
    <section className="content-grid">
      <div className="main-column">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/regions">Regions</Link>
          <Icon name="chevronRight" size={15} />
          {region && <Link to={`/region/${region.id}`}>{region.name}</Link>}
          <Icon name="chevronRight" size={15} />
          <span>{condition.name}</span>
        </nav>

        <RedFlagBanner redFlags={condition.redFlags} />

        <section className="panel condition-header">
          <div className="condition-header-top">
            <div>
              <h1>{condition.name}</h1>
              <p className="condition-oneliner">{condition.oneLiner}</p>
              <div className="condition-tags">
                {condition.aka.slice(0, 3).map((a) => (
                  <span key={a} className="tag">
                    {a}
                  </span>
                ))}
              </div>
            </div>
            <div className="condition-header-actions">
              <ReviewStatus review={condition.review} />
              <AddToProgram condition={condition} />
            </div>
          </div>
          <div className="condition-overview">
            {condition.overview.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="condition-facts">
            <div>
              <strong>Causes</strong>
              <ul>
                {condition.causes.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
            <div>
              <strong>Symptoms</strong>
              <ul>
                {condition.symptoms.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <strong>What to expect</strong>
              <p>{condition.prognosis.summary}</p>
              <p className="prognosis-timeline">{condition.prognosis.typicalTimeline}</p>
            </div>
          </div>
        </section>

        <CarePathway condition={condition} />
        <HomeExerciseProgram condition={condition} />

        {condition.procedures.length > 0 && (
          <section className="panel procedure-relevance">
            <div className="panel-title-row">
              <h2>Procedure options</h2>
            </div>
            <div className="relevance-list">
              {condition.procedures.map((rel) => {
                const proc = procedureById.get(rel.procedureId)
                if (!proc) return null
                return (
                  <Link
                    key={rel.procedureId}
                    to={`/procedure/${proc.id}`}
                    className="relevance-row"
                  >
                    <span className="relevance-head">
                      <strong>{proc.title}</strong>
                      <EvidenceBadge strength={proc.evidence} />
                    </span>
                    <span className="relevance-note">{rel.evidenceNote}</span>
                    <span className={`relevance-level level-${rel.relevance}`}>
                      {relevanceLabel[rel.relevance]}
                    </span>
                  </Link>
                )
              })}
            </div>
            <div className="panel-pad">
              <Disclaimer text={PROCEDURE_DISCLAIMER} compact />
            </div>
          </section>
        )}

        {condition.faqs.length > 0 && (
          <section className="panel faq-panel">
            <div className="panel-title-row">
              <h2>Common questions</h2>
            </div>
            <div className="faq-list">
              {condition.faqs.map((faq) => (
                <details key={faq.q} className="faq-item">
                  <summary>{faq.q}</summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        <section className="panel return-panel">
          <div className="panel-title-row">
            <h2>Returning to activity</h2>
          </div>
          <div className="return-body">
            <div>
              <strong>You’re ready when</strong>
              <ul>
                {condition.returnToActivity.criteria.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
            <div>
              <strong>Staying healthy</strong>
              <ul>
                {condition.returnToActivity.reinjuryPrevention.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="panel-pad">
            <p className="return-timeline">{condition.returnToActivity.timelineGuidance}</p>
          </div>
        </section>
      </div>

      <aside className="right-rail" aria-label="Evidence and safety">
        <section className="panel evidence-panel">
          <div className="rail-header">
            <h2>Evidence</h2>
            <Icon name="evidence" size={22} />
          </div>
          <div className="evidence-summary">
            <EvidenceBadge strength={condition.evidence.strength} />
            <p>{condition.evidence.bottomLine}</p>
            <div className="evidence-cols">
              <div>
                <strong>What helps</strong>
                <ul>
                  {condition.evidence.whatHelps.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
              </div>
              <div>
                <strong>What’s uncertain</strong>
                <ul>
                  {condition.evidence.whatsUncertain.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
              </div>
            </div>
            <CitationList ids={condition.evidence.citationIds} />
          </div>
        </section>

        <SafetyBox redFlags={condition.redFlags} note={GLOBAL_DISCLAIMER} />

        <section className="panel selfcare-box">
          <div className="rail-header">
            <h2>Self-care</h2>
          </div>
          <div className="selfcare-body">
            <div className="selfcare-do">
              <strong>Do</strong>
              <ul>
                {condition.selfCare.dos.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
            <div className="selfcare-dont">
              <strong>Avoid</strong>
              <ul>
                {condition.selfCare.donts.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </aside>
    </section>
  )
}
