import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

function NavItem({ to, children, end = false, onClick, className = '' }) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onClick}
      className={({ isActive }) => `nav-link ${className} ${isActive ? 'active' : ''}`.trim()}
    >
      {children}
    </NavLink>
  )
}

export default function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav>
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <div className="logo-mark">
            <svg viewBox="0 0 24 24"><path d="M12 21C12 21 4 14 4 9a8 8 0 0 1 16 0c0 5-8 12-8 12z" /></svg>
          </div>
          VolunteerMN
        </Link>

        <ul className="nav-links" style={{ display: menuOpen ? 'flex' : '' }}>
          <li><NavItem to="/" end onClick={() => setMenuOpen(false)}>Нүүр</NavItem></li>
          <li><NavItem to="/jobs" onClick={() => setMenuOpen(false)}>Ажлууд</NavItem></li>
          <li><NavItem to="/profile" onClick={() => setMenuOpen(false)}>Тайлан</NavItem></li>
          <li><NavItem to="/orgs" onClick={() => setMenuOpen(false)}>Байгууллага</NavItem></li>
          <li><NavItem to="/signup" onClick={() => setMenuOpen(false)} className="nav-cta">Бүртгүүлэх</NavItem></li>
        </ul>

        <button className="hamburger" aria-label="Цэс" onClick={() => setMenuOpen((open) => !open)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer>
        <div className="foot-logo">VolunteerMN</div>
        <p>© 2025 VolunteerMN · Монгол оюутан, залуусд зориулсан сайн дурын ажлын платформ</p>
      </footer>
    </>
  )
}