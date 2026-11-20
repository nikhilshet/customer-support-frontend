const navItems = [
  { id: 'dashboard', label: 'Dashboard', active: true },
  { id: 'tickets', label: 'Tickets', active: false },
  { id: 'customers', label: 'Customers', active: false },
  { id: 'settings', label: 'Settings', active: false },
]

export function Sidebar() {
  return (
    <aside className="sidebar">
      <span className="sidebar__brand">Support Admin</span>
      <nav className="sidebar__nav">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`sidebar__link${item.active ? ' sidebar__link--active' : ''}`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  )
}