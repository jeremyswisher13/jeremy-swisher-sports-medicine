import { NavLink } from 'react-router-dom'
import { Icon } from '../common/Icon'

const navItems = [
  { label: 'Dashboard', iconKey: 'dashboard', to: '/', end: true },
  { label: 'Body Regions', iconKey: 'regions', to: '/regions', end: false },
  { label: 'Exercise Library', iconKey: 'exercises', to: '/exercises', end: false },
  { label: 'Procedures', iconKey: 'procedures', to: '/procedures', end: false },
  { label: 'My Program', iconKey: 'program', to: '/program', end: false },
  { label: 'Evidence', iconKey: 'evidence', to: '/evidence', end: false },
]

export function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Primary navigation">
      <div>
        <NavLink className="brand" to="/" aria-label="Jeremy Swisher MD Sports Medicine home">
          <span>Jeremy Swisher MD</span>
          <small>Sports Medicine</small>
        </NavLink>
        <nav className="nav-list" aria-label="Product sections">
          {navItems.map((item) => {
            return (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.end}
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              >
                <Icon name={item.iconKey} size={22} strokeWidth={1.9} />
                <span>{item.label}</span>
              </NavLink>
            )
          })}
        </nav>
      </div>
      <div className="profile-block">
        <div className="physician-card">
          <span className="avatar">JS</span>
          <div>
            <strong>Jeremy Swisher, MD</strong>
            <span>Sports Medicine</span>
            <span>Fellowship Trained</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
