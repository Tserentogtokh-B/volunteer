import { useVolunteer } from '../context/VolunteerContext.jsx'
import { formatLongDate } from '../utils/date.js'

export default function CalendarPage() {
  const { appliedJobs } = useVolunteer()

  const events = appliedJobs
    .map((item) => ({
      id: item.job.id,
      title: item.job.title,
      date: item.job.startDate,
      org: item.job.org,
    }))
    .sort((a, b) => new Date(a.date) - new Date(b.date))

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="eyebrow">Календарь</div>
          <h1 className="page-title">Товлогдсон үйл ажиллагаа</h1>
          <p className="page-subtitle">Таны ойрын үйл ажиллагаануудын тойм.</p>
        </div>
      </div>

      <div className="card">
        {events.length === 0 && <p className="hint">Одоогоор товлогдсон ажил алга.</p>}
        {events.map((event) => (
          <div key={event.id} className="list-item">
            <div>
              <div className="list-title">{event.title}</div>
              <div className="list-meta">{event.org}</div>
            </div>
            <div className="pill">{formatLongDate(event.date)}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
