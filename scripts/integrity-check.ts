/* eslint-disable @typescript-eslint/no-explicit-any */
// Comprehensive content-graph integrity check (dev tool).
// Run: node --experimental-strip-types scripts/integrity-check.ts
import { readFileSync, readdirSync } from 'node:fs'

const CDIR = 'src/content/conditions/'
const slugs = readdirSync(CDIR).filter((f) => f.endsWith('.ts') && f !== 'index.ts').map((f) => f.replace('.ts', ''))

const errors: string[] = []
const warns: string[] = []
const E = (m: string) => errors.push(m)
const W = (m: string) => warns.push(m)

const URGENCY = ['emergency', 'urgent', 'see-clinician']
const STRENGTH = ['strong', 'moderate', 'limited', 'mixed', 'emerging', 'expert-opinion']
const RELEVANCE = ['commonly-discussed', 'selected-cases', 'rarely', 'not-indicated']
const BASIS = [
  'evidence-supported',
  'consensus-common-protocol',
  'theoretical-biologic-rationale',
  'safety-driven-physician-decision',
  'insufficient-evidence-variable-practice',
]
const RECOVERY_BASIS = ['evidence-based', 'expert-informed', 'mixed']
const ytRe = /^[A-Za-z0-9_-]{11}$/

const { sharedCitations } = await import('../src/content/citations.ts')
const { procedures, procedureById } = await import('../src/content/procedures.ts')
const { executiveSummaries } = await import('../src/content/executiveSummaries.ts')
const { regionById, sportMeta } = await import('../src/content/regions.ts')
const { sportPathways } = await import('../src/content/pathways.ts')
const sportIds = new Set(sportMeta.map((s: any) => s.id))
const sharedCiteIds = new Set(sharedCitations.map((c: any) => c.id))

// Load all modules
const mods: Record<string, any> = {}
for (const s of slugs) {
  const m = await import(`../src/content/conditions/${s}.ts`)
  mods[s] = m.default
}
const conditionIds = new Set(slugs)

// Citation registry format
for (const c of sharedCitations) {
  if (!/^https?:\/\//.test(c.url)) E(`shared citation ${c.id}: bad url "${c.url}"`)
  if (typeof c.verified !== 'boolean') W(`shared citation ${c.id}: verified not boolean`)
}

// Procedure education + citation integrity
for (const p of procedures) {
  const at = (f: string) => `procedure ${p.id} :: ${f}`
  if (!p.summary?.trim()) E(at('empty summary'))
  if (!p.bestFit?.length) E(at('bestFit empty'))
  if (!p.questions?.length) E(at('questions empty'))
  if (!p.education?.decisionPoint?.trim()) E(at('education.decisionPoint empty'))
  for (const key of ['whatHappens', 'notFor', 'aftercare', 'callClinician']) {
    const items = p.education?.[key]
    if (!Array.isArray(items) || items.length === 0) E(at(`education.${key} empty`))
    for (const [i, item] of (items || []).entries()) {
      if (!item?.trim()) E(at(`education.${key}[${i}] empty`))
    }
  }
  for (const id of (p.citationIds || [])) {
    if (!sharedCiteIds.has(id)) E(at(`citationIds "${id}" unresolved`))
  }
  if (p.id === 'prp' && !p.periProcedure) E(at('PRP missing periProcedure plan'))
  if (p.periProcedure) {
    const plan = p.periProcedure
    if (!plan.title?.trim()) E(at('periProcedure.title empty'))
    if (!plan.intro?.trim()) E(at('periProcedure.intro empty'))
    if (!plan.preChecklist?.length) E(at('periProcedure.preChecklist empty'))
    if (!plan.medicationGuidance?.length) E(at('periProcedure.medicationGuidance empty'))
    if (!plan.recoveryClusters?.length) E(at('periProcedure.recoveryClusters empty'))
    if (!plan.warningSigns?.length) E(at('periProcedure.warningSigns empty'))
    if (!plan.clinicianCaveats?.length) E(at('periProcedure.clinicianCaveats empty'))
    for (const [i, item] of (plan.preChecklist || []).entries()) {
      if (!item.title?.trim()) E(at(`periProcedure.preChecklist[${i}].title empty`))
      if (!item.detail?.trim()) E(at(`periProcedure.preChecklist[${i}].detail empty`))
      if (!BASIS.includes(item.basis)) E(at(`periProcedure.preChecklist[${i}].basis invalid "${item.basis}"`))
    }
    for (const [i, item] of (plan.medicationGuidance || []).entries()) {
      if (!item.item?.trim()) E(at(`periProcedure.medicationGuidance[${i}].item empty`))
      if (!item.recommendation?.trim()) E(at(`periProcedure.medicationGuidance[${i}].recommendation empty`))
      if (!item.patientText?.trim()) E(at(`periProcedure.medicationGuidance[${i}].patientText empty`))
      if (!BASIS.includes(item.basis)) E(at(`periProcedure.medicationGuidance[${i}].basis invalid "${item.basis}"`))
    }
    const neverStopItems = (plan.medicationGuidance || []).filter((item: any) =>
      /aspirin|anticoagulant|antiplatelet|blood thinner/i.test(item.item + ' ' + item.patientText),
    )
    for (const item of neverStopItems) {
      if (!item.neverStopWithoutApproval) E(at(`periProcedure medication "${item.item}" should have neverStopWithoutApproval`))
      if (!/do not stop|never stop|coordinate|approval|prescribing clinician/i.test(item.patientText)) {
        E(at(`periProcedure medication "${item.item}" missing patient safety stop/approval language`))
      }
    }
    for (const [ci, cluster] of (plan.recoveryClusters || []).entries()) {
      if (!cluster.title?.trim()) E(at(`periProcedure.recoveryClusters[${ci}].title empty`))
      if (!cluster.overview?.trim()) E(at(`periProcedure.recoveryClusters[${ci}].overview empty`))
      if (!cluster.appliesTo?.length) E(at(`periProcedure.recoveryClusters[${ci}].appliesTo empty`))
      if (!cluster.stages?.length) E(at(`periProcedure.recoveryClusters[${ci}].stages empty`))
      for (const [si, stage] of (cluster.stages || []).entries()) {
        if (!stage.title?.trim()) E(at(`periProcedure.recoveryClusters[${ci}].stages[${si}].title empty`))
        if (!stage.timing?.trim()) E(at(`periProcedure.recoveryClusters[${ci}].stages[${si}].timing empty`))
        if (!stage.patientGoal?.trim()) E(at(`periProcedure.recoveryClusters[${ci}].stages[${si}].patientGoal empty`))
        if (!stage.loadingGuidance?.trim()) E(at(`periProcedure.recoveryClusters[${ci}].stages[${si}].loadingGuidance empty`))
        if (!RECOVERY_BASIS.includes(stage.basis)) E(at(`periProcedure.recoveryClusters[${ci}].stages[${si}].basis invalid "${stage.basis}"`))
      }
    }
    for (const id of (plan.citationIds || [])) {
      if (!sharedCiteIds.has(id)) E(at(`periProcedure.citationIds "${id}" unresolved`))
    }
  }
}

for (const s of slugs) {
  const mod = mods[s]
  const c = mod.condition
  const local = mod.citations || []
  const citeIds = new Set<string>([...sharedCiteIds, ...local.map((x: any) => x.id)])
  const at = (f: string) => `${s} :: ${f}`

  // identity
  if (c.id !== s) E(at(`id "${c.id}" !== filename "${s}"`))
  if (c.slug !== s) E(at(`slug "${c.slug}" !== filename "${s}"`))
  if (!c.oneLiner?.trim()) E(at('empty oneLiner'))
  if (!c.overview?.trim()) E(at('empty overview'))
  if (!regionById.get(c.region)) E(at(`region "${c.region}" not in regionById`))

  // local citation format
  for (const lc of local) {
    if (!/^https?:\/\//.test(lc.url)) E(at(`local citation ${lc.id} bad url "${lc.url}"`))
    if (sharedCiteIds.has(lc.id)) W(at(`local citation ${lc.id} shadows a shared id`))
  }

  // related conditions
  for (const r of (c.relatedConditionIds || [])) {
    if (r === s) E(at(`relatedConditionIds includes self`))
    else if (!conditionIds.has(r)) E(at(`relatedConditionIds "${r}" does not resolve`))
  }

  // sport tags
  for (const t of (c.sportTags || [])) if (!sportIds.has(t)) W(at(`sportTag "${t}" not in sportMeta`))

  // red flags
  if (!c.redFlags?.length) E(at('no redFlags'))
  for (const rf of (c.redFlags || [])) {
    if (!URGENCY.includes(rf.urgency)) E(at(`redFlag urgency "${rf.urgency}" invalid`))
    if (!rf.text?.trim()) E(at('empty redFlag text'))

    const redFlagText = rf.text.toLowerCase()
    const hotFebrileJoint =
      /fever/.test(redFlagText) &&
      /hot|red|swollen|severely painful/.test(redFlagText) &&
      /joint|knee|hip|wrist|elbow|shoulder/.test(redFlagText)
    const septicJoint = /septic|joint infection/.test(redFlagText)
    if ((hotFebrileJoint || septicJoint) && rf.urgency !== 'emergency') {
      E(at(`redFlag likely septic joint/infection should be emergency: "${rf.text}"`))
    }

    const caudaEquina =
      /cauda|saddle|bladder|bowel/.test(redFlagText)
    if (caudaEquina && rf.urgency !== 'emergency') {
      E(at(`redFlag cauda-equina/spinal emergency wording should be emergency: "${rf.text}"`))
    }

    const limbThreat =
      /cold|pale|blue|dusky|pulseless|compartment|blood-vessel|blood-flow/.test(redFlagText)
    if (limbThreat && rf.urgency !== 'emergency') {
      E(at(`redFlag limb-threat wording should be emergency: "${rf.text}"`))
    }
  }

  // evidence
  if (!STRENGTH.includes(c.evidence?.strength)) E(at(`evidence.strength "${c.evidence?.strength}" invalid`))
  for (const id of (c.evidence?.citationIds || [])) if (!citeIds.has(id)) E(at(`evidence.citationIds "${id}" unresolved`))
  if (!c.evidence?.whatsUncertain?.length) W(at('evidence.whatsUncertain empty'))

  // faqs
  for (const [i, fq] of (c.faqs || []).entries())
    for (const id of (fq.citationIds || [])) if (!citeIds.has(id)) E(at(`faqs[${i}].citationIds "${id}" unresolved`))

  // procedures
  for (const [i, pr] of (c.procedures || []).entries()) {
    if (!procedureById.get(pr.procedureId)) E(at(`procedures[${i}].procedureId "${pr.procedureId}" unresolved`))
    if (!RELEVANCE.includes(pr.relevance)) E(at(`procedures[${i}].relevance "${pr.relevance}" invalid`))
    for (const id of (pr.citationIds || [])) if (!citeIds.has(id)) E(at(`procedures[${i}].citationIds "${id}" unresolved`))
  }

  // condition video
  if (c.video) {
    if (!ytRe.test(c.video.videoId)) E(at(`video.videoId "${c.video.videoId}" not 11-char yt id`))
    if (typeof c.video.approved !== 'boolean') E(at('video.approved not boolean'))
  }

  // HEP
  const phaseIds = new Set<string>()
  const exIds = new Set<string>()
  ;(c.hep?.phases || []).forEach((ph: any, pi: number) => {
    if (ph.order !== pi + 1) E(at(`phase ${ph.id} order ${ph.order} !== ${pi + 1}`))
    if (phaseIds.has(ph.id)) E(at(`duplicate phase id ${ph.id}`)); phaseIds.add(ph.id)
    if (!ph.exercises?.length) E(at(`phase ${ph.id} has no exercises`))
    for (const ex of (ph.exercises || [])) {
      if (exIds.has(ex.id)) E(at(`duplicate exercise id ${ex.id}`)); exIds.add(ex.id)
      if (!ex.name?.trim()) E(at(`exercise ${ex.id} empty name`))
      if (!ex.dose) E(at(`exercise ${ex.id} no dose`))
      if (ex.dose?.holdSeconds != null && typeof ex.dose.holdSeconds !== 'number') E(at(`exercise ${ex.id} holdSeconds not number`))
      if (typeof ex.dose?.reps === 'string' && /\bsec\b/i.test(ex.dose.reps)) E(at(`exercise ${ex.id} reps contains a duration: "${ex.dose.reps}"`))
      if (ex.video && !ytRe.test(ex.video.videoId)) E(at(`exercise ${ex.id} video.videoId invalid`))
    }
  })

  // returnToActivity
  if (!c.returnToActivity?.criteria?.length) W(at('returnToActivity.criteria empty'))
}

// exec summaries keys
for (const k of Object.keys(executiveSummaries)) if (!conditionIds.has(k)) E(`executiveSummaries key "${k}" is not a condition`)
for (const s of slugs) if (!executiveSummaries[s]) W(`condition ${s} has no executive summary`)

// pathways
for (const p of sportPathways) {
  for (const cid of (p.commonConditionIds || [])) if (!conditionIds.has(cid)) E(`pathway ${p.id} commonConditionIds "${cid}" unresolved`)
  if (!p.overview?.trim()) E(`pathway ${p.id} empty overview`)
}

// raw text scans
for (const s of slugs) {
  const txt = readFileSync(CDIR + s + '.ts', 'utf8')
  if (/Default:/.test(txt)) E(`${s}: patient-facing "Default:" prefix leaked into content`)
  if (/[Pp]ain rule: default/.test(txt)) E(`${s}: leftover "pain rule: default"`)
  if (/E3 Rehab \/ Rehab Science/.test(txt)) E(`${s}: leftover "E3 Rehab / Rehab Science"`)
}

console.log(`Conditions: ${slugs.length} | shared citations: ${sharedCitations.length} | procedures: ${[...procedureById.keys()].length} | pathways: ${sportPathways.length}`)
console.log(`\nERRORS (${errors.length}):`)
errors.forEach((e) => console.log('  ✗ ' + e))
console.log(`\nWARNINGS (${warns.length}):`)
warns.forEach((w) => console.log('  • ' + w))
if (errors.length) process.exitCode = 1
else console.log('\n✓ content graph integrity: PASS')
