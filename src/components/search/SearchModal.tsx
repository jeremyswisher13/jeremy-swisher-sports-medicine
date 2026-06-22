import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { search } from '../../search/searchIndex'
import type { SearchRecordType } from '../../content'
import { Icon } from '../common/Icon'

const typeLabel: Record<SearchRecordType, string> = {
  condition: 'Condition',
  exercise: 'Exercise',
  procedure: 'Procedure',
  region: 'Region',
}

const typeIconKey: Record<SearchRecordType, string> = {
  condition: 'conditions',
  exercise: 'exercises',
  procedure: 'procedures',
  region: 'regions',
}

export function SearchModal({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  const results = useMemo(() => search(query), [query])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  function onQueryChange(value: string) {
    setQuery(value)
    setActive(0)
  }

  function go(route: string) {
    navigate(route)
    onClose()
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') {
      onClose()
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActive((a) => Math.min(a + 1, Math.max(results.length - 1, 0)))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((a) => Math.max(a - 1, 0))
    } else if (e.key === 'Enter' && results[active]) {
      e.preventDefault()
      go(results[active].route)
    }
  }

  return (
    <>
      <button className="drawer-scrim" type="button" aria-label="Close search" onClick={onClose} />
      <div className="search-modal" role="dialog" aria-modal="true" aria-label="Search">
        <div className="search-modal-input">
          <Icon name="search" size={20} strokeWidth={1.9} />
          <input
            ref={inputRef}
            type="search"
            value={query}
            placeholder="Search conditions, exercises, procedures…"
            onChange={(e) => onQueryChange(e.target.value)}
            onKeyDown={onKeyDown}
            aria-label="Search query"
          />
          <kbd>Esc</kbd>
        </div>
        <div className="search-results" role="listbox">
          {query.trim() === '' && (
            <p className="search-hint">Start typing to search across the app.</p>
          )}
          {query.trim() !== '' && results.length === 0 && (
            <p className="search-hint">No results for “{query}”.</p>
          )}
          {results.map((r, i) => {
            return (
              <button
                key={`${r.type}:${r.id}`}
                type="button"
                role="option"
                aria-selected={i === active}
                className={`search-result-row ${i === active ? 'active' : ''}`}
                onMouseEnter={() => setActive(i)}
                onClick={() => go(r.route)}
              >
                <Icon name={typeIconKey[r.type]} size={18} />
                <span>
                  <strong>{r.title}</strong>
                  <small>{r.subtitle}</small>
                </span>
                <em>{typeLabel[r.type]}</em>
              </button>
            )
          })}
        </div>
      </div>
    </>
  )
}
