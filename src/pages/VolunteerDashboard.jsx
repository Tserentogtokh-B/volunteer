import { Link } from 'react-router-dom'
import { useVolunteer } from '../context/VolunteerContext.jsx'
import { formatShortDate } from '../utils/date.js'

export default function VolunteerDashboard() {
  const { appliedJobs, savedJobs } = useVolunteer()

  const highlights = [
    { label: 'Идэвхтэй бүртгэл', value: appliedJobs.length },
    { label: 'Хадгалсан ажил', value: savedJobs.length },
    { label: 'Нийт цаг', value: 42 },
    { label: 'Сертификат', value: 2 },
  ]

  const upcoming = appliedJobs.slice(0, 3)

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="eyebrow">Тойм</div>
          <h1 className="page-title">Таны сайн дурын төв самбар</h1>
          <p className="page-subtitle">Бүртгэл, ахиц, шинэ боломжуудыг нэг дороос хянаарай.</p>
        </div>
        <div className="page-actions">
          <Link className="btn btn-primary" to="/jobs">Ажил хайх</Link>
          <Link className="btn btn-ghost" to="/saved">Хадгалсан</Link>
        </div>
      </div>

      <div className="metric-grid">
        {highlights.map((item) => (
          <div key={item.label} className="metric-card">
            <div className="metric-value">{item.value}</div>
            <div className="metric-label">{item.label}</div>
          </div>
        ))}
      </div>

      <div className="split-grid">
        <div className="card">
          <div className="card-row">
            <h3 className="card-title">Дараагийн уулзалтууд</h3>
            <Link className="text-link" to="/calendar">Календарь</Link>
          </div>
          {upcoming.length === 0 && <p className="hint">Одоогоор товлогдсон уулзалт алга.</p>}
          {upcoming.map((item) => (
            <div key={item.job.id} className="list-item">
              <div>
                <div className="list-title">{item.job.title}</div>
                <div className="list-meta">{item.job.org} · {formatShortDate(item.job.startDate)}</div>
              </div>
              <span className="status-pill status-applied">{item.status}</span>
            </div>
          ))}
        </div>

        <div className="card">
          <div className="card-row">
            <h3 className="card-title">Шинэ боломжууд</h3>
            <Link className="text-link" to="/jobs">Бүгдийг үзэх</Link>
          </div>
          <div className="list-item">
            <div>
              <div className="list-title">Цахим бичиг үсгийн сургалт</div>
              <div className="list-meta">IT Mongolia Foundation · Онлайн</div>
            </div>
            <span className="pill">Онлайн</span>
          </div>
          <div className="list-item">
            <div>
              <div className="list-title">Хотын ногоон бүсэд мод тарих өдөр</div>
              <div className="list-meta">Ногоон Монгол ТББ · Сонгинохайрхан</div>
            </div>
            <span className="pill">1 өдөр</span>
          </div>
          <div className="notice-card">Шинэ ажлууд нэмэгдэх бүрт мэдэгдэл очно.</div>
        </div>
      </div>
    </div>
  )
}
