import { Link } from 'react-router-dom'
import { jobs } from '../data/jobs.js'
import { organizations } from '../data/orgs.js'
import { formatShortDate } from '../utils/date.js'

const steps = [
  {
    title: 'Хайлт хийж тохирох ажлаа сонго',
    detail: 'Сонирхол, байршил, цагийн боломжоо шүүж тохирох боломжоо олно.',
  },
  {
    title: 'Хялбар бүртгэл илгээ',
    detail: 'Нэг товшилтоор бүртгүүлж, байгууллагын хариуг хүлээнэ.',
  },
  {
    title: 'Цаг, сертификатаа баталгаажуул',
    detail: 'Ажил дууссаны дараа тайлан баталгаажиж, сертификат үүснэ.',
  },
]

export default function HomePage() {
  const featuredJobs = jobs.slice(0, 3)
  const featuredOrgs = organizations.slice(0, 3)

  return (
    <>
      <section className="hero-section">
        <div className="hero">
          <div className="hero-text">
            <div className="hero-badge">
              <span></span>
              Нийгмийн өөрчлөлтөд оролцох хамгийн хурдан зам
            </div>
            <h1>Сайн дурын <br /><em>боломжуудыг</em> нэг дороос</h1>
            <p>Сонирхолдоо тохирсон ажлаа олж, цагийн баталгаатай тайлангаар CV-ээ баяжуулаарай.</p>
            <div className="hero-actions">
              <Link to="/jobs" className="btn btn-primary">Ажил хайх</Link>
              <Link to="/orgs" className="btn btn-ghost">Байгууллага бол →</Link>
            </div>
            <div className="hero-search">
              <input type="text" placeholder="Ажил, ур чадвар, байгууллага" />
              <input type="text" placeholder="Байршил" />
              <Link to="/jobs" className="btn btn-primary">Хайлт</Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="stat-cards">
              <div className="stat-card"><div className="num">1,240</div><div className="label">Идэвхтэй оюутан</div></div>
              <div className="stat-card"><div className="num">380</div><div className="label">Нээлттэй ажил</div></div>
              <div className="stat-card"><div className="num">95</div><div className="label">Байгууллага</div></div>
              <div className="stat-card"><div className="num">4.6k</div><div className="label">Олгосон сертификат</div></div>
            </div>
            <div className="hero-highlight">
              <div className="hero-highlight-title">Өнөөдрийн онцлох боломж</div>
              <div className="hero-highlight-card">
                <div className="pill">Онлайн</div>
                <h3>Цахим бичиг үсгийн сургалт</h3>
                <p>Ахмадуудад технологийн хэрэглээг энгийнээр тайлбарлах сайн дурын ажил.</p>
                <Link to="/jobs" className="text-link">Дэлгэрэнгүй →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="stats-bar">
        <div className="stats-bar-inner">
          <div className="stat-item"><div className="big">15k+</div><div className="small">Нийт ажилласан цаг</div></div>
          <div className="stat-item"><div className="big">380+</div><div className="small">Хэрэгжсэн төсөл</div></div>
          <div className="stat-item"><div className="big">4.6k</div><div className="small">Олгогдсон сертификат</div></div>
          <div className="stat-item"><div className="big">1,240</div><div className="small">Идэвхтэй оюутан</div></div>
        </div>
      </div>

      <section className="section">
        <div className="section-label">Яаж ажилладаг вэ?</div>
        <div className="section-title">3 алхамтайгаар <em>сайн дурын ажилд</em> оролц</div>
        <div className="card-grid">
          {steps.map((step) => (
            <div key={step.title} className="card">
              <h3 className="card-title">{step.title}</h3>
              <p>{step.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-label">Онцлох ажлууд</div>
        <div className="section-title">Шинээр нэмэгдсэн <em>боломжууд</em></div>
        <div className="jobs-grid">
          {featuredJobs.map((job) => (
            <div className="job-card" key={job.id}>
              <span className={`tag ${job.tagClass}`}>{job.tag}</span>
              <h3>
                <Link className="job-link" to={`/jobs/${job.id}`}>{job.title}</Link>
              </h3>
              <div className="job-org">{job.org}</div>
              <div className="job-meta">
                <span className="meta-item">⏱ {job.time}</span>
                <span className="meta-item">📍 {job.location}</span>
                <span className="meta-item">🗓 {formatShortDate(job.startDate)}</span>
              </div>
              <Link className="btn btn-ghost" to={`/jobs/${job.id}`}>Дэлгэрэнгүй</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-label">Байгууллагууд</div>
        <div className="section-title">Идэвхтэй <em>хамтрагч байгууллага</em></div>
        <div className="org-grid">
          {featuredOrgs.map((org) => (
            <div key={org.id} className="card">
              <div className="pill">{org.focus}</div>
              <h3 className="card-title">{org.name}</h3>
              <p>{org.description}</p>
              <div className="list-meta">{org.location} · Нээлттэй: {org.openRoles}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}