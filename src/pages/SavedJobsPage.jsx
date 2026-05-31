import { Link } from 'react-router-dom'
import { useVolunteer } from '../context/VolunteerContext.jsx'

export default function SavedJobsPage() {
  const { savedJobs, toggleSave, apply, applications } = useVolunteer()

  const appliedIds = new Set(applications.map((item) => item.jobId))

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="eyebrow">Хадгалсан</div>
          <h1 className="page-title">Хадгалсан ажлууд</h1>
          <p className="page-subtitle">Дараа нь эргэн харахаар хадгалсан боломжууд.</p>
        </div>
        <div className="page-actions">
          <Link className="btn btn-primary" to="/jobs">Ажил хайх</Link>
        </div>
      </div>

      <div className="card">
        {savedJobs.length === 0 && <p className="hint">Та одоогоор ажил хадгалаагүй байна.</p>}
        {savedJobs.map((job) => (
          <div key={job.id} className="list-item">
            <div>
              <div className="list-title">{job.title}</div>
              <div className="list-meta">{job.org} · {job.location}</div>
            </div>
            <div className="list-actions">
              {!appliedIds.has(job.id) && (
                <button className="btn btn-primary" type="button" onClick={() => apply(job.id)}>
                  Бүртгүүлэх
                </button>
              )}
              <button className="btn btn-ghost" type="button" onClick={() => toggleSave(job.id)}>
                Хасах
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
