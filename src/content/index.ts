/** Public content API. Import from '../content' everywhere in the app. */
import type { BodyRegion, Condition, SportTag } from './types'
import { conditions, conditionById, citationById } from './conditions'
import { regions, regionById } from './regions'

export * from './types'
export { regions, regionById, sportMeta, sportMetaById } from './regions'
export { procedures, procedureById } from './procedures'
export {
  GLOBAL_DISCLAIMER,
  HEP_DISCLAIMER,
  PROCEDURE_DISCLAIMER,
  PAIN_GUIDANCE,
  REVIEW_PENDING_NOTE,
} from './disclaimers'
export { getIcon, icons } from './icons'
export { conditions, conditionById, citationById }

/** Conditions in a region, in stable order. */
export function conditionsByRegion(region: BodyRegion): Condition[] {
  return conditions.filter((c) => c.region === region)
}

/** Conditions carrying a given sport tag. */
export function conditionsBySport(sport: SportTag): Condition[] {
  return conditions.filter((c) => c.sportTags.includes(sport))
}

/** Regions that currently have at least one condition, in display order. */
export function populatedRegions() {
  return regions
    .filter((r) => conditions.some((c) => c.region === r.id))
    .sort((a, b) => a.order - b.order)
}

export function getCitation(id: string) {
  return citationById.get(id)
}

export function getRegion(id: string) {
  return regionById.get(id as BodyRegion)
}
