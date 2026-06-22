/**
 * Aggregates all condition modules into the public content arrays/maps and runs
 * dev-time integrity assertions. Add a condition by importing its module and
 * appending it to `modules` below (filename === slug === condition.id).
 */
import type { Citation, Condition, ConditionModule } from '../types'
import { sharedCitations } from '../citations'
import { executiveSummaries } from '../executiveSummaries'

// --- condition modules (one import per file) ---------------------------------
import achillesTendinopathy from './achilles-tendinopathy'
import acJointSprain from './ac-joint-sprain'
import bicepsTendinopathy from './biceps-tendinopathy'
import cervicalRadiculopathy from './cervical-radiculopathy'
import cubitalTunnelSyndrome from './cubital-tunnel-syndrome'
import deQuervainTenosynovitis from './de-quervain-tenosynovitis'
import femoroacetabularImpingement from './femoroacetabular-impingement'
import frozenShoulder from './frozen-shoulder'
import glutealTendinopathy from './gluteal-tendinopathy'
import golfersElbow from './golfers-elbow'
import hipOsteoarthritis from './hip-osteoarthritis'
import itBandSyndrome from './it-band-syndrome'
import kneeOsteoarthritis from './knee-osteoarthritis'
import lateralAnkleSprain from './lateral-ankle-sprain'
import lowBackPain from './low-back-pain'
import lumbarRadiculopathy from './lumbar-radiculopathy'
import mclSprain from './mcl-sprain'
import mechanicalNeckPain from './mechanical-neck-pain'
import medialTibialStressSyndrome from './medial-tibial-stress-syndrome'
import patellarTendinopathy from './patellar-tendinopathy'
import patellofemoralPain from './patellofemoral-pain'
import plantarHeelPain from './plantar-heel-pain'
import proximalHamstringTendinopathy from './proximal-hamstring-tendinopathy'
import rotatorCuffTendinopathy from './rotator-cuff-tendinopathy'
import spondylolysis from './spondylolysis'
import tennisElbow from './tennis-elbow'
import triggerFinger from './trigger-finger'
import wristSprainTfcc from './wrist-sprain-tfcc'

const modules: ConditionModule[] = [
  achillesTendinopathy,
  acJointSprain,
  bicepsTendinopathy,
  cervicalRadiculopathy,
  cubitalTunnelSyndrome,
  deQuervainTenosynovitis,
  femoroacetabularImpingement,
  frozenShoulder,
  glutealTendinopathy,
  golfersElbow,
  hipOsteoarthritis,
  itBandSyndrome,
  kneeOsteoarthritis,
  lateralAnkleSprain,
  lowBackPain,
  lumbarRadiculopathy,
  mclSprain,
  mechanicalNeckPain,
  medialTibialStressSyndrome,
  patellarTendinopathy,
  patellofemoralPain,
  plantarHeelPain,
  proximalHamstringTendinopathy,
  rotatorCuffTendinopathy,
  spondylolysis,
  tennisElbow,
  triggerFinger,
  wristSprainTfcc,
]
// -----------------------------------------------------------------------------

export const conditions: Condition[] = modules.map((m) => m.condition)

// Merge in patient-facing executive summaries (kept in one file for easy review).
for (const c of conditions) {
  if (!c.executiveSummary && executiveSummaries[c.id]) {
    c.executiveSummary = executiveSummaries[c.id]
  }
}

export const conditionById = new Map<string, Condition>(
  conditions.map((c) => [c.id, c]),
)

/** Merged citation registry: shared + every condition's own citations. */
export const citationById = new Map<string, Citation>()
for (const c of sharedCitations) citationById.set(c.id, c)
for (const m of modules) {
  for (const c of m.citations ?? []) {
    if (!citationById.has(c.id)) citationById.set(c.id, c)
  }
}

// --- integrity checks --------------------------------------------------------
function checkIntegrity(): string[] {
  const problems: string[] = []
  const seen = new Set<string>()

  for (const c of conditions) {
    if (c.id !== c.slug) problems.push(`${c.id}: id !== slug (${c.slug})`)
    if (seen.has(c.id)) problems.push(`duplicate condition id: ${c.id}`)
    seen.add(c.id)

    if (c.redFlags.length === 0) problems.push(`${c.id}: no red flags`)
    if (c.evidence.whatsUncertain.length === 0)
      problems.push(`${c.id}: evidence.whatsUncertain is empty`)
    if (c.hep.phases.length === 0) problems.push(`${c.id}: no HEP phases`)

    for (const id of c.evidence.citationIds) {
      if (!citationById.has(id))
        problems.push(`${c.id}: missing citation "${id}"`)
    }
    for (const proc of c.procedures) {
      for (const id of proc.citationIds ?? []) {
        if (!citationById.has(id))
          problems.push(`${c.id}: missing procedure citation "${id}"`)
      }
    }
    for (const faq of c.faqs) {
      for (const id of faq.citationIds ?? []) {
        if (!citationById.has(id))
          problems.push(`${c.id}: missing FAQ citation "${id}"`)
      }
    }

    // physician-approved content may not carry unverified citations
    if (c.review.status === 'physician-approved') {
      for (const id of c.evidence.citationIds) {
        if (!citationById.get(id)?.verified)
          problems.push(`${c.id}: approved but citation "${id}" is unverified`)
      }
    }
  }
  return problems
}

const problems = checkIntegrity()
if (problems.length) {
  const msg = `[content integrity] ${problems.length} issue(s):\n - ${problems.join('\n - ')}`
  // Loud in all modes; hard failure in dev so issues are caught early.
  console.error(msg)
  if (import.meta.env.DEV) throw new Error(msg)
}
