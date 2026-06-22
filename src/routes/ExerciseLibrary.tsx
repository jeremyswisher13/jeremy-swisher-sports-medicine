import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { conditions } from '../content'
import type { Condition, Exercise } from '../content'
import { ExerciseCard } from '../components/exercise/ExerciseCard'
import { Icon } from '../components/common/Icon'

interface LibEntry {
  exercise: Exercise
  condition: Condition
}

export function ExerciseLibraryRoute() {
  const [query, setQuery] = useState('')

  const all = useMemo<LibEntry[]>(() => {
    const seen = new Set<string>()
    const out: LibEntry[] = []
    for (const c of conditions) {
      for (const phase of c.hep.phases) {
        for (const ex of phase.exercises) {
          if (seen.has(ex.id)) continue
          seen.add(ex.id)
          out.push({ exercise: ex, condition: c })
        }
      }
    }
    return out.sort((a, b) => a.exercise.name.localeCompare(b.exercise.name))
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return all
    return all.filter(
      ({ exercise }) =>
        exercise.name.toLowerCase().includes(q) ||
        exercise.target.toLowerCase().includes(q) ||
        (exercise.aka ?? []).some((a) => a.toLowerCase().includes(q)),
    )
  }, [all, query])

  return (
    <section className="page">
      <header className="page-head">
        <h1>Exercise Library</h1>
        <p>{all.length} exercises across all programs. Each links back to its condition.</p>
      </header>

      <label className="search-field library-search">
        <Icon name="search" size={20} strokeWidth={1.9} />
        <input
          type="search"
          spellCheck={false}
          autoComplete="off"
          value={query}
          placeholder="Filter exercises…"
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Filter exercises"
        />
      </label>

      <div className="library-grid">
        {filtered.map(({ exercise, condition }) => (
          <div key={exercise.id} className="library-item">
            <ExerciseCard exercise={exercise} />
            <Link className="library-link" to={`/condition/${condition.id}`}>
              From: {condition.name}
            </Link>
          </div>
        ))}
        {filtered.length === 0 && <p className="empty-note">No exercises match “{query}”.</p>}
      </div>
    </section>
  )
}
