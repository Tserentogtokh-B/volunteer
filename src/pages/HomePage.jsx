import { useState } from 'react'
import { Link } from 'react-router-dom'

const infoCards = [
  {
    id: 'intro',
    tagClass: 'tag-edu',
    tag: 'Танилцуулга',
    title: 'Ерөнхий танилцуулга',
    summary: 'Энд эхний утга, товч танилцуулга, гол товчлуурууд байна.',
    details: 'VolunteerMN платформ нь оюутан залуусыг сайн дурын ажлын боломжтой холбоход зориулагдсан. Та өөрийн сонирхол, байршлаар ажлаа сонгож, хийсэн цагаа бүртгэж, CV-дээ ашиглах сертификат авах боломжтой.',
    to: '/jobs',
  },
  {
    id: 'jobs',
    tagClass: 'tag-env',
    tag: 'Ажлууд',
    title: 'Шүүлттэй жагсаалт',
    summary: 'State ашиглаж, category-гаар шүүхийг эндээс харж болно.',
    details: 'Ажлын хэсэг дээр та боловсрол, байгаль орчин, эрүүл мэнд, технологи зэрэг ангиллаар шүүж болно. Энэ нь хэрэгтэй ажлаа хурдан олоход тусалдаг.',
    to: '/jobs',
  },
  {
    id: 'profile',
    tagClass: 'tag-social',
    tag: 'Тайлан',
    title: 'Profile / CV тайлан',
    summary: 'Хувийн мэдээлэл, ахиц, хийсэн ажлын түүхийг харуулна.',
    details: 'Тайлан хэсэгт таны нийт цаг, авсан сертификат, оролцсон байгууллагын мэдээлэл харагдана. Энэ нь тэтгэлэг болон ажлын анкет дээр бодит туршлагаа харуулахад хэрэгтэй.',
    to: '/profile',
  },
]

export default function HomePage() {
  const [expandedId, setExpandedId] = useState(null)

  function toggleExpand(id) {
    setExpandedId((prev) => (prev === id ? null : id))
  }

  return (
    <>
      <section>
        <div className="hero">
          <div className="hero-text">
            <div className="hero-badge">
              <span></span>
              Та сайн дурын ажил хийхээр хайж байна уу? Тэгвэл эндээс эхэл
            </div>
            <h1>Нийгэмдээ <br /><em>эерэг өөрчлөлтийг</em> бүтээцгээе</h1>
            <p>Тэтгэлэг авах, CV-ээ сайжруулах, нийгэмд хувь нэмэр оруулах боломжуудыг нэг дороос олоорой.</p>
            <div className="hero-actions">
              <Link to="/jobs" className="btn btn-primary">Ажил хайх</Link>
              <Link to="/orgs" className="btn btn-ghost">Байгууллага бол →</Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="stat-cards">
              <div className="stat-card"><div className="num">1,240</div><div className="label">Бүртгэлтэй оюутан</div></div>
              <div className="stat-card"><div className="num">380</div><div className="label">Нээлттэй ажил</div></div>
              <div className="stat-card"><div className="num">95</div><div className="label">Байгууллага</div></div>
              <div className="stat-card"><div className="num">4.6k</div><div className="label">Олгосон сертификат</div></div>
            </div>

            {/* <div className="profile-mini">
              <div className="avatar-ring">БА</div>
              <div style={{ flex: 1 }}>
                <div className="profile-mini-info">
                  <h4>Батаа Алтанцэцэг</h4>
                  <p>МУИС • Компьютерын ухаан</p>
                </div>
                <div className="progress-wrap">
                  <div className="progress-label">
                    <span style={{ fontSize: '11px', color: 'var(--ink-light)' }}>Нийт цаг: 42/100</span>
                    <span style={{ fontSize: '11px', color: 'var(--sage)', fontWeight: 600 }}>42%</span>
                  </div>
                  <div className="progress-track"><div className="progress-fill"></div></div>
                </div>
              </div>
            </div> */}
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
        <div className="section-label">Системийн талаар ойлголтоо нэмэгдүүлээрэй</div>
        <div className="section-title">Та хэрвээ шинээр элсэж байгаа бол доорх 3-н мэдээллийг <em>заавал уншаарай</em></div>

        <div className="jobs-grid">
          {infoCards.map((card) => (
            <div className="job-card" key={card.id}>
              <span className={`tag ${card.tagClass}`}>{card.tag}</span>
              <h3>{card.title}</h3>
              <p>{card.summary}</p>

              <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                <button
                  className="btn"
                  onClick={() => toggleExpand(card.id)}
                  aria-expanded={expandedId === card.id}
                >
                  {expandedId === card.id ? 'Хаах' : 'Дэлгэрэнгүй'}
                </button>
              </div>

              {expandedId === card.id && (
                <div className="inline-details">
                  <p>{card.details}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}