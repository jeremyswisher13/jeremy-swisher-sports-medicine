import Fuse from 'fuse.js'
import {
  conditions,
  procedures,
  regions,
  type SearchRecord,
} from '../content'

/** Flatten all content into a single searchable list (built once). */
function buildRecords(): SearchRecord[] {
  const records: SearchRecord[] = []

  for (const r of regions) {
    if (!conditions.some((c) => c.region === r.id)) continue
    records.push({
      type: 'region',
      id: r.id,
      title: r.name,
      subtitle: 'Body region',
      route: `/region/${r.id}`,
      keywords: [r.name, r.blurb],
    })
  }

  for (const c of conditions) {
    records.push({
      type: 'condition',
      id: c.id,
      title: c.name,
      subtitle: regions.find((r) => r.id === c.region)?.name ?? 'Condition',
      route: `/condition/${c.id}`,
      keywords: [c.name, c.shortName, ...c.aka, ...c.symptoms, ...c.sportTags],
    })

    for (const phase of c.hep.phases) {
      for (const ex of phase.exercises) {
        records.push({
          type: 'exercise',
          id: `${c.id}:${ex.id}`,
          title: ex.name,
          subtitle: `${c.shortName} · ${ex.target}`,
          route: `/condition/${c.id}`,
          keywords: [ex.name, ...(ex.aka ?? []), ex.target, c.name],
        })
      }
    }
  }

  for (const p of procedures) {
    records.push({
      type: 'procedure',
      id: p.id,
      title: p.title,
      subtitle: 'Procedure',
      route: `/procedure/${p.id}`,
      keywords: [p.title, p.tag, p.summary],
    })
  }

  return records
}

export const searchRecords: SearchRecord[] = buildRecords()

export const fuse = new Fuse(searchRecords, {
  keys: [
    { name: 'title', weight: 0.6 },
    { name: 'keywords', weight: 0.3 },
    { name: 'subtitle', weight: 0.1 },
  ],
  threshold: 0.35,
  ignoreLocation: true,
  minMatchCharLength: 2,
})

export function search(query: string, limit = 12): SearchRecord[] {
  const q = query.trim()
  if (!q) return []
  return fuse.search(q, { limit }).map((r) => r.item)
}
