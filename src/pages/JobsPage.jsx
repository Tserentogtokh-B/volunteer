import { useState, useRef } from 'react'

const jobs = [
  {
    id: 'edu',
    filter: 'edu',
    tagClass: 'tag-edu',
    tag: 'Боловсрол',
    title: 'Хүүхдэд математик заах туслах багш',
    org: 'Дорноговь аймгийн боловсролын газар',
    time: '4 цаг/7 хоног',
    location: 'Улаанбаатар',
  },
  {
    id: 'env',
    filter: 'env',
    tagClass: 'tag-env',
    tag: 'Байгаль орчин',
    title: 'Улиас тарих — Ногоон Улаанбаатар',
    org: 'Ногоон Монгол ТББ',
    time: 'Амралтын өдрүүд',
    location: 'Сонгинохайрхан',
  },
  {
    id: 'health',
    filter: 'health',
    tagClass: 'tag-health',
    tag: 'Эрүүл мэнд',
    title: 'Ахмад настанд туслах',
    org: 'Нийгмийн халамжийн газар',
    time: '6 цаг/7 хоног',
    location: 'Баянзүрх',
  },
  {
    id: 'tech',
    filter: 'tech',
    tagClass: 'tag-tech',
    tag: 'Технологи',
    title: 'Цахим бичиг үсгийн сургалт — ахмадуудад',
    org: 'IT Mongolia Foundation',
    time: 'Амралтын өдрүүдэд',
    location: 'Онлайн',
  },
  {
    id: 'social',
    filter: 'social',
    tagClass: 'tag-social',
    tag: 'Нийгэм',
    title: 'Асрамжийн газарт туслах',
    org: 'Хүүхэд хамгаалах ТББ',
    time: '8 цаг/7 хоног',
    location: 'Чингэлтэй',
  },
  {
    id: 'comp-intro',
    filter: 'edu',
    tagClass: 'tag-edu',
    tag: 'Боловсрол',
    title: 'Байгууллагын танилцуулга (жишээ)',
    org: 'Дорноговь аймгийн боловсролын газар',
    time: 'Тодорхой',
    location: 'Улаанбаатар',
    description: 'Энд байгууллагын товч танилцуулга гарч ирнэ. Та эндээс байгууллагын зорилго, хүрээг уншиж болно.',
  },
]

export default function JobsPage() {
  const [filter, setFilter] = useState('all')
  const [expandedId, setExpandedId] = useState(null)
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

  const visibleJobs = jobs.filter((job) => filter === 'all' || job.filter === filter)

  return (
    <section className="section">
      <div className="section-label">Сайн дурын ажлууд</div>
      <div className="section-title">Нийгэмдээ оруулах <em>хувь нэмэр</em></div>

      <div className="filter-row">
        <button className={`filter-tab ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>Бүгд</button>
        <button className={`filter-tab ${filter === 'edu' ? 'active' : ''}`} onClick={() => setFilter('edu')}>📚 Боловсрол</button>
        <button className={`filter-tab ${filter === 'env' ? 'active' : ''}`} onClick={() => setFilter('env')}>🌱 Байгаль орчин</button>
        <button className={`filter-tab ${filter === 'health' ? 'active' : ''}`} onClick={() => setFilter('health')}>❤️ Эрүүл мэнд</button>
        <button className={`filter-tab ${filter === 'tech' ? 'active' : ''}`} onClick={() => setFilter('tech')}>💻 Технологи</button>
        <button className={`filter-tab ${filter === 'social' ? 'active' : ''}`} onClick={() => setFilter('social')}>🤝 Нийгэм</button>
      </div>

      <div className="jobs-grid">
        {visibleJobs.map((job) => (
          <div className="job-card" key={job.id} data-cat={job.filter}>
            <span className={`tag ${job.tagClass}`}>{job.tag}</span>
            <h3>{job.title}</h3>
            <div className="job-org">{job.org}</div>
            <div className="job-meta">
              <span className="meta-item">⏱ {job.time}</span>
              <span className="meta-item">📍 {job.location}</span>
            </div>

            {/* inline expand button */}
            <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
              <button
                className="btn"
                onClick={() => toggleExpand(job.id)}
                aria-expanded={expandedId === job.id}
              >
                {expandedId === job.id ? 'Хаах' : 'Дэлгэрэнгүй'}
              </button>
              <button className="apply-btn">Бүртгүүлэх</button>
            </div>

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
        ))}
      </div>
    </section>
  )
}