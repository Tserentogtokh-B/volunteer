import { createContext, useContext, useMemo, useState } from 'react'
import { jobsById } from '../data/jobs.js'
import { daysUntil } from '../utils/date.js'

const VolunteerContext = createContext(null)
const CANCEL_WINDOW_DAYS = 2

const seedApplications = [
  { jobId: 'edu-math-mentor', status: 'Applied', appliedAt: '2026-05-20' },
  { jobId: 'env-urban-tree', status: 'Approved', appliedAt: '2026-05-12' },
]

const seedSaved = ['health-senior-care', 'tech-digital-literacy']

export function VolunteerProvider({ children }) {
  const [savedIds, setSavedIds] = useState(seedSaved)
  const [applications, setApplications] = useState(seedApplications)

  function toggleSave(jobId) {
    setSavedIds((prev) => (prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]))
  }

  function apply(jobId) {
    setApplications((prev) => {
      if (prev.some((item) => item.jobId === jobId)) return prev
      return [...prev, { jobId, status: 'Applied', appliedAt: new Date().toISOString() }]
    })
  }

  function cancel(jobId) {
    setApplications((prev) => prev.filter((item) => item.jobId !== jobId))
  }

  function canCancel(jobId) {
    const job = jobsById[jobId]
    if (!job) return false
    const daysLeft = daysUntil(job.startDate)
    return daysLeft !== null && daysLeft >= CANCEL_WINDOW_DAYS
  }

  const value = useMemo(() => {
    const savedJobs = savedIds.map((id) => jobsById[id]).filter(Boolean)
    const appliedJobs = applications
      .map((item) => ({ ...item, job: jobsById[item.jobId] }))
      .filter((item) => item.job)
    return {
      savedIds,
      savedJobs,
      applications,
      appliedJobs,
      toggleSave,
      apply,
      cancel,
      canCancel,
      cancelWindowDays: CANCEL_WINDOW_DAYS,
    }
  }, [savedIds, applications])

  return (
    <VolunteerContext.Provider value={value}>
      {children}
    </VolunteerContext.Provider>
  )
}

export function useVolunteer() {
  const value = useContext(VolunteerContext)
  if (!value) {
    throw new Error('useVolunteer must be used within VolunteerProvider')
  }
  return value
}
