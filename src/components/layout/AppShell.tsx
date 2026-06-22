import { useCallback, useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { TopBar } from './TopBar'
import { SearchModal } from '../search/SearchModal'
import { useHotkey } from '../../hooks/useHotkey'

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

  // Scroll to top on navigation. (The search modal closes itself on navigate.)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="app-shell">
      <Sidebar />
      <main className="workspace" aria-label="Jeremy Swisher MD Sports Medicine">
        <TopBar onOpenSearch={openSearch} />
        <Outlet />
      </main>
      {searchOpen && <SearchModal onClose={closeSearch} />}
    </div>
  )
}
