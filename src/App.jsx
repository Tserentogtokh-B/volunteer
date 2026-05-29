import { Routes, Route, Navigate } from 'react-router-dom'
import SiteLayout from './components/SiteLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import JobsPage from './pages/JobsPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import OrganizationsPage from './pages/OrganizationsPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import SignUp from './pages/SignUp.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="jobs" element={<JobsPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="orgs" element={<OrganizationsPage />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}