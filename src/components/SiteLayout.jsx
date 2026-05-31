import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

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
  const { isAuthenticated, role, signOut } = useAuth()
  const dashboardPath = role === 'organization' ? '/org/dashboard' : role === 'admin' ? '/admin/overview' : '/dashboard'

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
          <li><NavItem to="/orgs" onClick={() => setMenuOpen(false)}>Байгууллага</NavItem></li>
          <li><NavItem to="/about" onClick={() => setMenuOpen(false)}>Тухай</NavItem></li>
          <li><NavItem to="/faq" onClick={() => setMenuOpen(false)}>Тусламж</NavItem></li>
          {isAuthenticated && (
            <li><NavItem to={dashboardPath} onClick={() => setMenuOpen(false)} className="nav-cta">Dashboard</NavItem></li>
          )}
          {!isAuthenticated && (
            <>
              <li><NavItem to="/signup" onClick={() => setMenuOpen(false)} className="nav-cta">Бүртгүүлэх</NavItem></li>
              <li><NavItem to="/signin" onClick={() => setMenuOpen(false)} className="nav-signin">Нэвтрэх</NavItem></li>
            </>
          )}
          {isAuthenticated && (
            <li>
              <button className="nav-link nav-ghost" type="button" onClick={() => { signOut(); setMenuOpen(false) }}>
                Гарах
              </button>
            </li>
          )}
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
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="foot-logo">VolunteerMN</div>
            <p>Монгол оюутан, залуусд зориулсан сайн дурын ажлын платформ.</p>
          </div>
          <div className="footer-links">
            <div>
              <div className="footer-title">Платформ</div>
              <Link to="/jobs">Ажлууд</Link>
              <Link to="/orgs">Байгууллага</Link>
              <Link to="/about">Тухай</Link>
            </div>
            <div>
              <div className="footer-title">Тусламж</div>
              <Link to="/faq">FAQ</Link>
              <Link to="/contact">Холбоо барих</Link>
              <Link to="/signin">Нэвтрэх</Link>
            </div>
            <div>
              <div className="footer-title">Сүлжээ</div>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">© 2026 VolunteerMN. Бүх эрх хуулиар хамгаалагдсан.</div>
      </footer>
    </>
  )
}