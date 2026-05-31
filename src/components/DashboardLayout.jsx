import { NavLink, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

const navItems = {
  volunteer: [
    { to: '/dashboard', label: 'Тойм', icon: '🏠' },
    { to: '/applications', label: 'Миний бүртгэл', icon: '🧾' },
    { to: '/saved', label: 'Хадгалсан', icon: '⭐' },
    { to: '/calendar', label: 'Календарь', icon: '🗓️' },
    { to: '/messages', label: 'Зурвас', icon: '💬' },
    { to: '/notifications', label: 'Мэдэгдэл', icon: '🔔' },
    { to: '/certificates', label: 'Сертификат', icon: '🏅' },
  ],
  organization: [
    { to: '/org/dashboard', label: 'Тойм', icon: '🏠' },
    { to: '/org/jobs', label: 'Нийтэлсэн ажил', icon: '📌' },
    { to: '/org/applicants', label: 'Оролцогчид', icon: '👥' },
    { to: '/org/analytics', label: 'Аналитик', icon: '📊' },
  ],
  admin: [
    { to: '/admin/overview', label: 'Тойм', icon: '🧭' },
    { to: '/admin/moderation', label: 'Хяналт', icon: '🛡️' },
  ],
}

const roleTitle = {
  volunteer: 'Volunteer Dashboard',
  organization: 'Organization Studio',
  admin: 'Admin Control',
}

const roleLabel = {
  volunteer: 'Сайн дурын ажилтан',
  organization: 'Байгууллага',
  admin: 'Админ',
}

const actionLinks = {
  volunteer: [
    { to: '/jobs', label: 'Ажил хайх', variant: 'primary' },
    { to: '/profile', label: 'Тайлан', variant: 'ghost' },
  ],
  organization: [
    { to: '/org/jobs', label: 'Ажил нийтлэх', variant: 'primary' },
    { to: '/org/analytics', label: 'Тайлан', variant: 'ghost' },
  ],
  admin: [
    { to: '/admin/moderation', label: 'Хяналт эхлүүлэх', variant: 'primary' },
    { to: '/', label: 'Нүүр', variant: 'ghost' },
  ],
}

export default function DashboardLayout({ role = 'volunteer' }) {
  const { user, signOut } = useAuth()
  const items = navItems[role] || []
  const actions = actionLinks[role] || []

  return (
    <div className="dashboard-shell">
      <aside className="dashboard-nav">
        <div className="dashboard-brand">
          <div className="logo-mark">
            <svg viewBox="0 0 24 24"><path d="M12 21C12 21 4 14 4 9a8 8 0 0 1 16 0c0 5-8 12-8 12z" /></svg>
          </div>
          <div>
            <div className="brand-name">VolunteerMN</div>
            <div className="brand-subtitle">{roleTitle[role] || 'Dashboard'}</div>
          </div>
        </div>

        <div className="dashboard-user">
          <div className="avatar">VM</div>
          <div>
            <div className="user-name">{user?.email || 'demo@volunteer.mn'}</div>
            <div className="user-role">{roleLabel[role] || 'Гишүүн'}</div>
          </div>
        </div>

        <nav className="dashboard-links">
          {items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `dashboard-link ${isActive ? 'active' : ''}`.trim()}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button className="btn btn-ghost dashboard-logout" type="button" onClick={signOut}>
          Гарах
        </button>
      </aside>

      <div className="dashboard-main">
        <div className="dashboard-top">
          <div>
            <div className="eyebrow">{roleLabel[role] || 'Dashboard'}</div>
            <div className="dashboard-title">{roleTitle[role] || 'Dashboard'}</div>
          </div>
          <div className="dashboard-actions">
            {actions.map((action) => (
              <NavLink
                key={action.to}
                to={action.to}
                className={`btn ${action.variant === 'primary' ? 'btn-primary' : 'btn-ghost'}`}
              >
                {action.label}
              </NavLink>
            ))}
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  )
}
