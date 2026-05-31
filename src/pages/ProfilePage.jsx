import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function ProfilePage() {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return (
      <section className="section">
        <div className="job-card">
          <span className="tag tag-social">Нэвтрэх шаардлагатай</span>
          <h3>Тайлан зөвхөн нэвтэрсний дараа харагдана</h3>
          <p>Нэвтэрсний дараа таны сайн дурын түүх болон тайлан гарч ирнэ.</p>
          <div className="job-footer">
            <span className="cert-pill">Нэвтрээд мэдээллээ хараарай</span>
            <Link className="apply-btn" to="/signin">Нэвтрэх</Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <div className="profile-section" id="profile">
      <div className="profile-section-inner">
        <div className="section-label">тайлан</div>
        <div className="section-title">Таны <em>хувийн тайлан</em></div>

        <div className="profile-layout">
          <div className="profile-big-card">
            <div className="ph">
              <div className="av">БА</div>
              <div>
                <div className="name">Батаа Алтанцэцэг</div>
                <div className="sub">МУИС • Компьютерын ухаан • 3-р курс</div>
              </div>
            </div>

            <div className="prog-section">
              <div className="prog-row"><span>Нийт сайн дурын ажил хийсэн цаг</span><span>42 / 100 цаг</span></div>
              <div className="prog-track"><div className="prog-fill" style={{ width: '42%' }}></div></div>

              <div className="prog-row" style={{ marginTop: '14px' }}><span>Авсан сертификат</span><span>2 / 5</span></div>
              <div className="prog-track"><div className="prog-fill" style={{ width: '40%' }}></div></div>

              <div className="prog-row" style={{ marginTop: '14px' }}><span>Оролцсон байгууллага</span><span>2 / 3 зорилго</span></div>
              <div className="prog-track"><div className="prog-fill" style={{ width: '66%' }}></div></div>
            </div>

            <button className="apply-btn" style={{ width: '100%', padding: '13px', fontSize: '14px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              CV тайлан татах
            </button>
          </div>

          <div>
            <div className="activity-log">
              <div className="act">
                <div className="act-title">Математик заах туслах багш</div>
                <div className="act-meta">2025.01.10 — 2025.03.15 · 24 цаг · Дорноговь</div>
                <span className="act-cert">✓ Сертификат</span>
              </div>

              <div className="act">
                <div className="act-title">Улиас тарих ажил</div>
                <div className="act-meta">2025.04.05 — 2025.04.06 · 18 цаг · Сонгинохайрхан</div>
                <span className="act-cert">✓ Сертификат</span>
              </div>

              <div className="act" style={{ opacity: 0.5 }}>
                <div className="act-title" style={{ color: 'rgba(255,255,255,0.4)' }}>Дараагийн ажлаа сонго</div>
                <div className="act-meta">Бүртгүүлэхэд бэлэн</div>
                <span className="act-cert" style={{ opacity: 0.4 }}>Хүлээгдэж байна</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}