import { Routes, Route, Navigate } from 'react-router-dom'
import SiteLayout from './components/SiteLayout.jsx'
import DashboardLayout from './components/DashboardLayout.jsx'
import RequireAuth from './components/RequireAuth.jsx'
import RequireRole from './components/RequireRole.jsx'
import HomePage from './pages/HomePage.jsx'
import JobsPage from './pages/JobsPage.jsx'
import JobDetailPage from './pages/JobDetailPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import OrganizationsPage from './pages/OrganizationsPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import FaqPage from './pages/FaqPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import VolunteerDashboard from './pages/VolunteerDashboard.jsx'
import ApplicationsPage from './pages/ApplicationsPage.jsx'
import SavedJobsPage from './pages/SavedJobsPage.jsx'
import CalendarPage from './pages/CalendarPage.jsx'
import MessagesPage from './pages/MessagesPage.jsx'
import NotificationsPage from './pages/NotificationsPage.jsx'
import CertificatesPage from './pages/CertificatesPage.jsx'
import OrgDashboardPage from './pages/OrgDashboardPage.jsx'
import OrgJobsPage from './pages/OrgJobsPage.jsx'
import OrgApplicantsPage from './pages/OrgApplicantsPage.jsx'
import OrgAnalyticsPage from './pages/OrgAnalyticsPage.jsx'
import AdminDashboardPage from './pages/AdminDashboardPage.jsx'
import AdminModerationPage from './pages/AdminModerationPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import SignUp from './pages/SignUp.jsx'
import SignIn from './pages/SignIn.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="jobs" element={<JobsPage />} />
        <Route path="jobs/:jobId" element={<JobDetailPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="orgs" element={<OrganizationsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Route>

      <Route
        element={(
          <RequireAuth>
            <DashboardLayout role="volunteer" />
          </RequireAuth>
        )}
      >
        <Route path="dashboard" element={<VolunteerDashboard />} />
        <Route path="applications" element={<ApplicationsPage />} />
        <Route path="saved" element={<SavedJobsPage />} />
        <Route path="calendar" element={<CalendarPage />} />
        <Route path="messages" element={<MessagesPage />} />
        <Route path="notifications" element={<NotificationsPage />} />
        <Route path="certificates" element={<CertificatesPage />} />
      </Route>

      <Route
        element={(
          <RequireAuth>
            <RequireRole role="organization">
              <DashboardLayout role="organization" />
            </RequireRole>
          </RequireAuth>
        )}
      >
        <Route path="org/dashboard" element={<OrgDashboardPage />} />
        <Route path="org/jobs" element={<OrgJobsPage />} />
        <Route path="org/applicants" element={<OrgApplicantsPage />} />
        <Route path="org/analytics" element={<OrgAnalyticsPage />} />
      </Route>

      <Route
        element={(
          <RequireAuth>
            <RequireRole role="admin">
              <DashboardLayout role="admin" />
            </RequireRole>
          </RequireAuth>
        )}
      >
        <Route path="admin/overview" element={<AdminDashboardPage />} />
        <Route path="admin/moderation" element={<AdminModerationPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}