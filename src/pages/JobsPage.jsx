import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { useVolunteer } from '../context/VolunteerContext.jsx'
import { jobs, jobCategories } from '../data/jobs.js'
import { formatShortDate, daysUntil } from '../utils/date.js'

export default function JobsPage() {
  const { isAuthenticated } = useAuth()
  const { apply, cancel, canCancel, toggleSave, savedIds, applications, cancelWindowDays } = useVolunteer()
  const [filter, setFilter] = useState('all')
  const [expandedId, setExpandedId] = useState(null)
  const [notice, setNotice] = useState(null)
  const detailsRefs = useRef({})

  function toggleExpand(id) {
    const container = detailsRefs.current[id]
    if (!container) return
    const inner = container.firstElementChild
    if (expandedId === id) {
      // collapse: set explicit height then animate to 0
      container.style.height = inner.scrollHeight + 'px'
      // force reflow
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      container.offsetHeight
      container.style.transition = 'height 320ms ease'
      container.style.height = '0px'
      const handle = () => {
        container.style.transition = ''
        container.removeEventListener('transitionend', handle)
      }
      container.addEventListener('transitionend', handle)
      setExpandedId(null)
    } else {
      // expand: from current 0 to inner height, then set to auto
      const height = inner.scrollHeight
      container.style.transition = 'height 320ms ease'
      container.style.height = height + 'px'
      const handle = () => {
        container.style.height = 'auto'
        container.style.transition = ''
        container.removeEventListener('transitionend', handle)
      }
      container.addEventListener('transitionend', handle)
      setExpandedId(id)
    }
  }

  function handleApply(job) {
    if (!isAuthenticated) {
      setNotice({
        type: 'error',
        message: 'Бүртгүүлэхийн тулд нэвтэрнэ үү.',
        link: { to: '/signin', label: 'Нэвтрэх' },
      })
      return
    }
    apply(job.id)
    setNotice({ type: 'info', message: 'Бүртгэл амжилттай боллоо.' })
  }

  function handleCancel(job) {
    if (!isAuthenticated) {
      setNotice({
        type: 'error',
        message: 'Цуцлахын тулд нэвтэрнэ үү.',
        link: { to: '/signin', label: 'Нэвтрэх' },
      })
      return
    }
    if (!canCancel(job.id)) {
      setNotice({
        type: 'error',
        message: `Цуцлах боломж: эхлэхээс ${cancelWindowDays} өдрийн өмнө.`,
      })
      return
    }
    cancel(job.id)
    setNotice({ type: 'info', message: 'Бүртгэл цуцлагдлаа.' })
  }

  function handleSave(job) {
    toggleSave(job.id)
    setNotice({ type: 'info', message: savedIds.includes(job.id) ? 'Хадгалснаас хаслаа.' : 'Ажил хадгаллаа.' })
  }

  const visibleJobs = jobs.filter((job) => filter === 'all' || job.filter === filter)

  return (
    <section className="section">
      <div className="section-label">Сайн дурын ажлууд</div>
      <div className="section-title">Нийгэмдээ оруулах <em>хувь нэмэр</em></div>

      {notice && (
        <div className={`status-banner ${notice.type}`}>
          <span>{notice.message}</span>
          {notice.link && <Link to={notice.link.to}>{notice.link.label}</Link>}
        </div>
      )}

      <div className="filter-row">
        {jobCategories.map((category) => (
          <button
            key={category.id}
            className={`filter-tab ${filter === category.id ? 'active' : ''}`}
            onClick={() => setFilter(category.id)}
          >
            {category.icon ? `${category.icon} ` : ''}{category.label}
          </button>
        ))}
      </div>

      <div className="jobs-grid">
        {visibleJobs.map((job) => {
          const rawDaysLeft = daysUntil(job.startDate)
          const daysLeft = rawDaysLeft === null ? null : Math.max(0, rawDaysLeft)
          const isApplied = applications.some((item) => item.jobId === job.id)
          const isSaved = savedIds.includes(job.id)
          const canCancelJob = canCancel(job.id)
          const cancelHint = rawDaysLeft !== null && rawDaysLeft < cancelWindowDays
            ? 'Цуцлах хугацаа дууссан.'
            : `Цуцлах боломж: эхлэхээс ${cancelWindowDays} өдрийн өмнө.`

          return (
            <div className="job-card" key={job.id} data-cat={job.filter}>
              <span className={`tag ${job.tagClass}`}>{job.tag}</span>
              <h3>
                <Link className="job-link" to={`/jobs/${job.id}`}>{job.title}</Link>
              </h3>
              <div className="job-org">{job.org}</div>
              <p className="job-summary">{job.summary}</p>
              <div className="job-meta">
                <span className="meta-item">⏱ {job.time}</span>
                <span className="meta-item">📍 {job.location}</span>
                <span className="meta-item">🗓 {formatShortDate(job.startDate)}</span>
                {daysLeft !== null && <span className="meta-item">⏳ {daysLeft} өдөр үлдлээ</span>}
              </div>

              {/* inline expand button */}
              <div className="card-actions">
                <button
                  className="btn"
                  onClick={() => toggleExpand(job.id)}
                  aria-expanded={expandedId === job.id}
                >
                  {expandedId === job.id ? 'Хаах' : 'Дэлгэрэнгүй'}
                </button>
                <Link className="btn btn-ghost" to={`/jobs/${job.id}`}>Дэлгэрэнгүй хуудас</Link>
                <button className={`btn ${isSaved ? 'btn-ghost' : ''}`} type="button" onClick={() => handleSave(job)}>
                  {isSaved ? 'Хадгалснаас хасах' : 'Хадгалах'}
                </button>
                {!isApplied && (
                  <button className="apply-btn" onClick={() => handleApply(job)}>Бүртгүүлэх</button>
                )}
                {isApplied && (
                  <button
                    className="btn btn-ghost"
                    type="button"
                    onClick={() => handleCancel(job)}
                    disabled={!canCancelJob}
                    title={!canCancelJob ? `Цуцлах боломж: эхлэхээс ${cancelWindowDays} өдрийн өмнө.` : undefined}
                  >
                    Цуцлах
                  </button>
                )}
                {isApplied && <span className="cert-pill">Бүртгэлтэй</span>}
              </div>

              <div className="job-hint">{cancelHint}</div>

              {job.description && (
                <div
                  className="job-details"
                  ref={(el) => {
                    if (el) {
                      // ensure initial collapsed state
                      if (!detailsRefs.current[job.id]) {
                        el.style.height = '0px'
                      }
                      detailsRefs.current[job.id] = el
                    }
                  }}
                >
                  <div className="job-details-inner">
                    <p style={{ margin: 0 }}>{job.description}</p>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}