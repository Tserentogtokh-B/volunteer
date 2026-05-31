import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { jobsById } from '../data/jobs.js'
import { formatLongDate, daysUntil } from '../utils/date.js'
import { useVolunteer } from '../context/VolunteerContext.jsx'
import { useAuth } from '../context/AuthContext.jsx'

export default function JobDetailPage() {
  const { jobId } = useParams()
  const job = jobsById[jobId]
  const { isAuthenticated } = useAuth()
  const { apply, cancel, canCancel, toggleSave, savedIds, applications, cancelWindowDays } = useVolunteer()
  const [notice, setNotice] = useState(null)

  if (!job) {
    return (
      <section className="section">
        <div className="job-card">
          <span className="tag tag-social">Олдсонгүй</span>
          <h3>Сайн дурын ажил олдсонгүй</h3>
          <p>Таны хайсан ажлын мэдээлэл байхгүй байна.</p>
          <div className="job-footer">
            <span className="cert-pill">Өөр боломжуудыг үзээрэй</span>
            <Link className="apply-btn" to="/jobs">Ажлууд</Link>
          </div>
        </div>
      </section>
    )
  }

  const isApplied = applications.some((item) => item.jobId === job.id)
  const isSaved = savedIds.includes(job.id)
  const daysLeftRaw = daysUntil(job.startDate)
  const daysLeft = daysLeftRaw === null ? null : Math.max(0, daysLeftRaw)

  function handleApply() {
    if (!isAuthenticated) {
      setNotice({ type: 'error', message: 'Бүртгүүлэхийн тулд нэвтэрнэ үү.' })
      return
    }
    apply(job.id)
    setNotice({ type: 'info', message: 'Бүртгэл амжилттай боллоо.' })
  }

  function handleCancel() {
    if (!isAuthenticated) {
      setNotice({ type: 'error', message: 'Цуцлахын тулд нэвтэрнэ үү.' })
      return
    }
    if (!canCancel(job.id)) {
      setNotice({ type: 'error', message: `Цуцлах боломж: эхлэхээс ${cancelWindowDays} өдрийн өмнө.` })
      return
    }
    cancel(job.id)
    setNotice({ type: 'info', message: 'Бүртгэл цуцлагдлаа.' })
  }

  return (
    <section className="page">
      <div className="page-header">
        <div>
          <div className="eyebrow">Сайн дурын ажил</div>
          <h1 className="page-title">{job.title}</h1>
          <p className="page-subtitle">{job.org} · {job.location} · {job.mode}</p>
        </div>
        <div className="page-actions">
          <Link className="btn btn-ghost" to="/jobs">Бүх ажлууд</Link>
          {!isSaved && (
            <button className="btn" type="button" onClick={() => toggleSave(job.id)}>
              Хадгалах
            </button>
          )}
          {isSaved && (
            <button className="btn btn-ghost" type="button" onClick={() => toggleSave(job.id)}>
              Хадгалснаас хасах
            </button>
          )}
        </div>
      </div>

      {notice && (
        <div className={`status-banner ${notice.type}`}>
          <span>{notice.message}</span>
        </div>
      )}

      <div className="job-detail-grid">
        <div className="card">
          <h3 className="card-title">Товч мэдээлэл</h3>
          <p>{job.description}</p>
          <div className="detail-list">
            <div>
              <span>Эхлэх огноо</span>
              <strong>{formatLongDate(job.startDate)}</strong>
            </div>
            <div>
              <span>Дуусах огноо</span>
              <strong>{formatLongDate(job.endDate)}</strong>
            </div>
            <div>
              <span>Үргэлжлэх хугацаа</span>
              <strong>{job.time}</strong>
            </div>
            <div>
              <span>Оролцогчдын тоо</span>
              <strong>{job.slots} хүн</strong>
            </div>
            {daysLeft !== null && (
              <div>
                <span>Эхлэх хүртэл</span>
                <strong>{daysLeft} өдөр</strong>
              </div>
            )}
          </div>
        </div>

        <div className="card">
          <h3 className="card-title">Шаардлага</h3>
          <ul className="bullet-list">
            {job.requirements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3 className="card-title" style={{ marginTop: 20 }}>Ур чадвар</h3>
          <div className="pill-row">
            {job.skills.map((item) => (
              <span key={item} className="pill">{item}</span>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="card-title">Давуу тал</h3>
          <ul className="bullet-list">
            {job.benefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="notice-card">
            Цуцлах боломж: эхлэхээс {cancelWindowDays} өдрийн өмнө.
          </div>
        </div>

        <div className="card job-detail-actions">
          <h3 className="card-title">Бүртгэл</h3>
          {!isApplied && (
            <button className="btn btn-primary" type="button" onClick={handleApply}>Бүртгүүлэх</button>
          )}
          {isApplied && (
            <button className="btn btn-ghost" type="button" onClick={handleCancel} disabled={!canCancel(job.id)}>
              Цуцлах
            </button>
          )}
          {isApplied && <span className="status-pill status-applied">Бүртгэлтэй</span>}
          {!isAuthenticated && <p className="hint">Нэвтэрч байж бүртгэл хийх боломжтой.</p>}
        </div>
      </div>
    </section>
  )
}
