import { Suspense, useCallback, useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { TopBar } from './TopBar'
import { SearchModal } from '../search/SearchModal'
import { useHotkey } from '../../hooks/useHotkey'
import {
  conditionById,
  procedureById,
  sportPathwayById,
  getRegion,
} from '../../content'

const BASE_TITLE = 'Jeremy Swisher MD — Sports Medicine'

/** Map the current hash path to a human page title. */
function titleForPath(path: string): string {
  const seg = path.split('/').filter(Boolean)
  switch (seg[0]) {
    case undefined:
      return 'Dashboard'
    case 'condition':
      return conditionById.get(seg[1] ?? '')?.name ?? 'Condition'
    case 'sport':
      return sportPathwayById.get(seg[1] ?? '')?.name ?? 'Sport Pathway'
    case 'region':
      return getRegion(seg[1] ?? '')?.name ?? 'Body Region'
    case 'procedure':
      return procedureById.get(seg[1] ?? '')?.title ?? 'Procedure'
    case 'regions':
      return 'Body Regions'
    case 'sports':
      return 'Sport Pathways'
    case 'procedures':
      return 'Procedures'
    case 'exercises':
      return 'Exercise Library'
    case 'program':
      return 'My Program'
    case 'evidence':
      return 'Evidence'
    default:
      return ''
  }
}

export function AppShell() {
  const [searchOpen, setSearchOpen] = useState(false)
  const location = useLocation()

  const openSearch = useCallback(() => setSearchOpen(true), [])
  const closeSearch = useCallback(() => setSearchOpen(false), [])

  useHotkey(
    'mod+k',
    useCallback((e: KeyboardEvent) => {
      e.preventDefault()
      setSearchOpen((o) => !o)
    }, []),
  )

  // Scroll to top + set the document title on navigation.
  // (The search modal closes itself on navigate.)
  useEffect(() => {
    window.scrollTo(0, 0)
    const t = titleForPath(location.pathname)
    document.title = t ? `${t} · ${BASE_TITLE}` : BASE_TITLE
  }, [location.pathname])

  return (
    <div className="app-shell">
      <Sidebar />
      <main className="workspace" aria-label="Jeremy Swisher MD Sports Medicine">
        <TopBar onOpenSearch={openSearch} />
        <Suspense fallback={<div className="route-loading">Loading…</div>}>
          <Outlet />
        </Suspense>
      </main>
      {searchOpen && <SearchModal onClose={closeSearch} />}
    </div>
  )
}
