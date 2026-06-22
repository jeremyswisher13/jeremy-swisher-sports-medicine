import { useNavigate } from 'react-router-dom'
import { Icon } from '../common/Icon'

export function TopBar({ onOpenSearch }: { onOpenSearch: () => void }) {
  const navigate = useNavigate()

  return (
    <header className="topbar no-print">
      <button
        type="button"
        className="search-field search-trigger"
        onClick={onOpenSearch}
        aria-label="Search injuries, exercises, procedures, evidence"
      >
        <Icon name="search" size={20} strokeWidth={1.9} />
        <span className="search-placeholder">
          Search injuries, exercises, procedures, evidence…
        </span>
        <kbd>⌘ K</kbd>
      </button>
      <div className="top-actions">
        <button
          className="ghost-action"
          type="button"
          onClick={() => navigate('/program')}
        >
          <Icon name="file" size={21} />
          My Programs
        </button>
        <button
          className="primary-action"
          type="button"
          onClick={() => navigate('/regions')}
        >
          <Icon name="plus" size={22} />
          Start a Program
        </button>
      </div>
    </header>
  )
}
