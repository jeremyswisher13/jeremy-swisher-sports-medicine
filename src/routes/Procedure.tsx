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
import type { Procedure, ProcedurePeriProcedurePlan } from '../content'

const basisLabel: Record<string, string> = {
  'evidence-supported': 'Evidence-supported',
  'consensus-common-protocol': 'Common protocol',
  'theoretical-biologic-rationale': 'Theoretical',
  'safety-driven-physician-decision': 'Safety decision',
  'insufficient-evidence-variable-practice': 'Variable practice',
  'evidence-based': 'Evidence-based',
  'expert-informed': 'Expert-informed',
  mixed: 'Mixed',
}

function BasisTag({ basis }: { basis: string }) {
  return <span className={`basis-tag basis-${basis}`}>{basisLabel[basis] ?? basis}</span>
}

function ProcedureEducationBlock({
  title,
  icon,
  items,
  tone,
}: {
  title: string
  icon: string
  items: string[]
  tone?: 'caution'
}) {
  return (
    <div className={`procedure-education-card ${tone ?? ''}`}>
      <h2>
        <Icon name={icon} size={20} />
        {title}
      </h2>
      <ul className="bullet-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

function ProcedureDecisionModule({ procedure }: { procedure: Procedure }) {
  const { education } = procedure
  return (
    <section className="panel procedure-decision">
      <div className="panel-title-row">
        <h2>
          <Icon name="evidence" size={22} />
          High-yield decision module
        </h2>
      </div>
      <div className="procedure-decision-body">
        <div className="procedure-decision-point">
          <strong>Bottom line</strong>
          <p>{education.decisionPoint}</p>
        </div>
        <div className="procedure-education-grid">
          <ProcedureEducationBlock
            title="What happens"
            icon="check"
            items={education.whatHappens}
          />
          <ProcedureEducationBlock
            title="Not for"
            icon="shield"
            items={education.notFor}
            tone="caution"
          />
          <ProcedureEducationBlock
            title="Aftercare"
            icon="exercises"
            items={education.aftercare}
          />
          <ProcedureEducationBlock
            title="Call clinician"
            icon="alert"
            items={education.callClinician}
            tone="caution"
          />
        </div>
      </div>
    </section>
  )
}

function PeriProcedureModule({ plan }: { plan: ProcedurePeriProcedurePlan }) {
  return (
    <section className="panel peri-procedure">
      <div className="panel-title-row">
        <h2>
          <Icon name="prp" size={22} />
          {plan.title}
        </h2>
      </div>
      <div className="peri-body">
        <p className="peri-intro">{plan.intro}</p>

        <section className="peri-section">
          <h3>Before PRP</h3>
          <div className="peri-checklist-grid">
            {plan.preChecklist.map((item) => (
              <div key={item.title} className="peri-check-item">
                <div className="peri-check-head">
                  <strong>{item.title}</strong>
                  <BasisTag basis={item.basis} />
                </div>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="peri-section">
          <h3>Medication & supplement guidance</h3>
          <div className="med-guidance-table" role="table" aria-label="Medication and supplement guidance">
            <div className="med-guidance-row med-guidance-head" role="row">
              <span role="columnheader">Item</span>
              <span role="columnheader">Guidance</span>
              <span role="columnheader">Basis</span>
            </div>
            {plan.medicationGuidance.map((item) => (
              <div
                key={item.item}
                className={`med-guidance-row ${item.neverStopWithoutApproval ? 'critical' : ''}`}
                role="row"
              >
                <span className="med-item" role="cell">
                  <strong>{item.item}</strong>
                  {item.neverStopWithoutApproval && <em>Do not stop without approval</em>}
                </span>
                <span role="cell">
                  <strong>{item.recommendation}</strong>
                  <small>{item.patientText}</small>
                </span>
                <span role="cell">
                  <BasisTag basis={item.basis} />
                  {item.clinicianNote && <small>{item.clinicianNote}</small>}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="peri-section">
          <h3>Recovery by condition cluster</h3>
          <div className="recovery-cluster-list">
            {plan.recoveryClusters.map((cluster) => (
              <article key={cluster.id} className="recovery-cluster">
                <div className="recovery-cluster-head">
                  <div>
                    <h4>{cluster.title}</h4>
                    <p>{cluster.overview}</p>
                  </div>
                  <div className="applies-list" aria-label={`${cluster.title} applies to`}>
                    {cluster.appliesTo.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
                <div className="recovery-stage-list">
                  {cluster.stages.map((stage) => (
                    <div key={`${cluster.id}-${stage.title}`} className="recovery-stage">
                      <div className="recovery-stage-head">
                        <strong>{stage.title}</strong>
                        <BasisTag basis={stage.basis} />
                      </div>
                      <small>{stage.timing}</small>
                      <p>{stage.patientGoal}</p>
                      <em>{stage.loadingGuidance}</em>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="peri-safety-grid">
          <section className="peri-section warning">
            <h3>Call urgently after PRP</h3>
            <ul className="bullet-list">
              {plan.warningSigns.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section className="peri-section caveat">
            <h3>Clinician caveats</h3>
            <ul className="bullet-list">
              {plan.clinicianCaveats.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>

        <section className="peri-section">
          <h3>Sources for this plan</h3>
          <CitationList ids={plan.citationIds} />
        </section>
      </div>
    </section>
  )
}

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

      <ProcedureDecisionModule procedure={procedure} />

      {procedure.periProcedure && <PeriProcedureModule plan={procedure.periProcedure} />}

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
