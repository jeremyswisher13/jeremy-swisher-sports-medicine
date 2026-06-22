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
const ytRe = /^[A-Za-z0-9_-]{11}$/

const { sharedCitations } = await import('../src/content/citations.ts')
const { procedureById } = await import('../src/content/procedures.ts')
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
