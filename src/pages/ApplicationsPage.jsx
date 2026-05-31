import { Link } from 'react-router-dom'
import { useVolunteer } from '../context/VolunteerContext.jsx'
import { formatShortDate } from '../utils/date.js'

const statusClass = {
  Applied: 'status-applied',
  Approved: 'status-approved',
  Rejected: 'status-rejected',
  Completed: 'status-completed',
}

export default function ApplicationsPage() {
  const { appliedJobs, cancel, canCancel } = useVolunteer()

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="eyebrow">Миний бүртгэл</div>
          <h1 className="page-title">Бүртгэлийн төлөв</h1>
          <p className="page-subtitle">Та бүртгүүлсэн ажлуудаа эндээс удирдана.</p>
        </div>
        <div className="page-actions">
          <Link className="btn btn-primary" to="/jobs">Шинэ ажил хайх</Link>
        </div>
      </div>

      <div className="card">
        {appliedJobs.length === 0 && <p className="hint">Одоогоор бүртгэл алга.</p>}
        {appliedJobs.map((item) => (
          <div key={item.job.id} className="list-item">
            <div>
              <div className="list-title">{item.job.title}</div>
              <div className="list-meta">{item.job.org} · Эхлэх: {formatShortDate(item.job.startDate)}</div>
            </div>
            <div className="list-actions">
              <span className={`status-pill ${statusClass[item.status] || 'status-applied'}`}>{item.status}</span>
              <button
                className="btn btn-ghost"
                type="button"
                onClick={() => cancel(item.job.id)}
                disabled={!canCancel(item.job.id)}
              >
                Цуцлах
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
