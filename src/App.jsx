import { useState } from 'react';
import './index.css';

export default function App() {
  const [filter, setFilter] = useState('all');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav>
        <a href="#" className="logo">
          <div className="logo-mark">
            <svg viewBox="0 0 24 24"><path d="M12 21C12 21 4 14 4 9a8 8 0 0 1 16 0c0 5-8 12-8 12z"/></svg>
          </div>
          VolunteerMN
        </a>
        <ul className="nav-links" style={{ display: menuOpen ? 'flex' : '' }}>
          <li><a href="#jobs">Ажлууд</a></li>
          <li><a href="#profile">Тайлан</a></li>
          <li><a href="#orgs">Байгууллага</a></li>
          <li><a href="#" className="nav-cta">Бүртгүүлэх</a></li>
        </ul>
        <button className="hamburger" aria-label="Цэс" onClick={() => setMenuOpen(!menuOpen)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </nav>

      <section>
        <div className="hero">
          <div className="hero-text">
            <div className="hero-badge">
              <span></span>
              Та сайн дурын ажил хийхээр хайж байна уу? Тэгвэл эндээс эхэл
            </div>
            <h1>Нийгэмдээ <br/><em>эерэг өөрчлөлтийг</em> бүтээцгээе</h1>
            <p>Тэтгэлэг авах, CV-ээ сайжруулах, нийгэмд хувь нэмэр оруулах — шаардлагатай бүх боломжийг нэг дороос олоорой.</p>
            <div className="hero-actions">
              <a href="#jobs" className="btn btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                Ажил хайх
              </a>
              <a href="#orgs" className="btn btn-ghost">Байгууллага бол →</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="stat-cards">
              <div className="stat-card">
                <div className="num">1,240</div>
                <div className="label">Бүртгэлтэй оюутан</div>
              </div>
              <div className="stat-card">
                <div className="num">380</div>
                <div className="label">Нээлттэй ажил</div>
              </div>
              <div className="stat-card">
                <div className="num">95</div>
                <div className="label">Байгууллага</div>
              </div>
              <div className="stat-card">
                <div className="num">4.6k</div>
                <div className="label">Олгосон сертификат</div>
              </div>
            </div>

            <div className="profile-mini">
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

      <section className="section" id="jobs">
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

        <div className="jobs-grid" id="jobsGrid">

          {(filter === 'all' || filter === 'edu') && (
            <div className="job-card" data-cat="edu">
              <span className="tag tag-edu">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                Боловсрол
              </span>
              <h3>Хүүхдэд математик заах туслах багш</h3>
              <div className="job-org">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                Дорноговь аймгийн боловсролын газар
              </div>
              <div className="job-meta">
                <span className="meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  4 цаг/7 хоног
                </span>
                <span className="meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  Улаанбаатар
                </span>
              </div>
              <div className="job-footer">
                <span className="cert-pill">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
                  Сертификат
                </span>
                <button className="apply-btn">Бүртгүүлэх</button>
              </div>
            </div>
          )}

          {(filter === 'all' || filter === 'env') && (
            <div className="job-card" data-cat="env">
              <span className="tag tag-env">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17 8C8 10 5.9 16.17 3.82 22"/><path d="M9.5 11.5C7.23 11.5 5 13 5 15.5c0 2.5 3.5 5 7 5 2.5 0 4.5-1 6-2.5"/><path d="M21 8c-3 1-5.5 2.5-7 4.5"/></svg>
                Байгаль орчин
              </span>
              <h3>Улиас тарих — Ногоон Улаанбаатар</h3>
              <div className="job-org">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                Ногоон Монгол ТББ
              </div>
              <div className="job-meta">
                <span className="meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  Амралтын өдрүүд
                </span>
                <span className="meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  Сонгинохайрхан
                </span>
              </div>
              <div className="job-footer">
                <span className="cert-pill">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
                  Сертификат
                </span>
                <button className="apply-btn">Бүртгүүлэх</button>
              </div>
            </div>
          )}

          {(filter === 'all' || filter === 'health') && (
            <div className="job-card" data-cat="health">
              <span className="tag tag-health">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                Эрүүл мэнд
              </span>
              <h3>Ахмад настанд туслах</h3>
              <div className="job-org">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                Нийгмийн халамжийн газар
              </div>
              <div className="job-meta">
                <span className="meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  6 цаг/7 хоног
                </span>
                <span className="meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  Баянзүрх
                </span>
              </div>
              <div className="job-footer">
                <span className="cert-pill">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
                  Сертификат
                </span>
                <button className="apply-btn">Бүртгүүлэх</button>
              </div>
            </div>
          )}

          {(filter === 'all' || filter === 'tech') && (
             <div className="job-card" data-cat="tech">
              <span className="tag tag-tech">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                Технологи
              </span>
              <h3>цахим бичиг үсгийн сургалт — ахмадуудад</h3>
              <div className="job-org">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                IT Mongolia Foundation
              </div>
              <div className="job-meta">
                <span className="meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  Амралтын өдрүүдэд
                </span>
                <span className="meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  Онлайн
                </span>
              </div>
              <div className="job-footer">
                <span className="cert-pill">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
                  Сертификат
                </span>
                <button className="apply-btn">Бүртгүүлэх</button>
              </div>
            </div>
          )}

          {(filter === 'all' || filter === 'social') && (
            <div className="job-card" data-cat="social">
              <span className="tag tag-social">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                Нийгэм
              </span>
              <h3>Асрамжийн газарт туслах</h3>
              <div className="job-org">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                Хүүхэд хамгаалах ТББ
              </div>
              <div className="job-meta">
                <span className="meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  8 цаг/7 хоног
                </span>
                <span className="meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  Чингэлтэй
                </span>
              </div>
              <div className="job-footer">
                <span className="cert-pill">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
                  Сертификат
                </span>
                <button className="apply-btn">Бүртгүүлэх</button>
              </div>
            </div>
          )}

        </div>
      </section>

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
                <div className="prog-row">
                  <span>Нийт сайн дурын ажил хийсэн цаг</span>
                  <span>42 / 100 цаг</span>
                </div>
                <div className="prog-track"><div className="prog-fill" style={{ width: '42%' }}></div></div>

                <div className="prog-row" style={{ marginTop: '14px' }}>
                  <span>Авсан сертификат</span>
                  <span>2 / 5</span>
                </div>
                <div className="prog-track"><div className="prog-fill" style={{ width: '40%' }}></div></div>

                <div className="prog-row" style={{ marginTop: '14px' }}>
                  <span>Оролцсон байгууллага</span>
                  <span>2 / 3 зорилго</span>
                </div>
                <div className="prog-track"><div className="prog-fill" style={{ width: '66%' }}></div></div>
              </div>

              <button className="apply-btn" style={{ width: '100%', padding: '13px', fontSize: '14px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                CV тайлан татах
              </button>
            </div>

            <div>
              <div className="activity-log">
                <div className="act">
                  <div className="act-icon" style={{ background: 'rgba(42,107,232,0.15)' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#2a6be8" strokeWidth="2" strokeLinecap="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/></svg>
                  </div>
                  <div>
                    <div className="act-title">Математик заах туслах багш</div>
                    <div className="act-meta">2025.01.10 — 2025.03.15 · 24 цаг · Дорноговь</div>
                  </div>
                  <span className="act-cert">✓ Сертификат</span>
                </div>

                <div className="act">
                  <div className="act-icon" style={{ background: 'rgba(61,107,79,0.2)' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#5a8f6a" strokeWidth="2" strokeLinecap="round"><path d="M17 8C8 10 5.9 16.17 3.82 22"/><path d="M9.5 11.5C7.23 11.5 5 13 5 15.5"/></svg>
                  </div>
                  <div>
                    <div className="act-title">Улиас тарих ажил</div>
                    <div className="act-meta">2025.04.05 — 2025.04.06 · 18 цаг · Сонгинохайрхан</div>
                  </div>
                  <span className="act-cert">✓ Сертификат</span>
                </div>

                <div className="act" style={{ opacity: 0.5 }}>
                  <div className="act-icon" style={{ background: 'rgba(255,255,255,0.08)' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  </div>
                  <div>
                    <div className="act-title" style={{ color: 'rgba(255,255,255,0.4)' }}>Дараагийн ажлаа сонго</div>
                    <div className="act-meta">Бүртгүүлэхэд бэлэн</div>
                  </div>
                  <span className="act-cert" style={{ opacity: 0.4 }}>Хүлээгдэж байна</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="org-cta" id="orgs">
        <div className="org-cta-inner">
          <div>
            <div className="section-label">Байгууллагуудад</div>
            <h2>Идэвхтэй оюутан, залуустай<br/>холбогдоорой</h2>
            <p>Сайн дурын ажлаа VolunteerMN-д нийтэлж, мянга гаруй оюутны дунд сонирхогчдыг олж, байгууллагынхаа үйл ажиллагааг цааш тэлээрэй.</p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button className="btn btn-primary">Байгууллага бүртгэх</button>
              <button className="btn btn-ghost">Ажил нийтлэх →</button>
            </div>
          </div>
          <div className="feature-list">
            <div className="feature">
              <div className="feature-dot"></div>
              <div>
                <h4>Хялбар бүртгэл</h4>
                <p>Сайн дурын ажлаа хэдхэн минутад нийтлэх боломжтой.</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-dot"></div>
              <div>
                <h4>Автомат сертификат</h4>
                <p>Оролцогч бүрт цахим сертификат автоматаар илгээгдэнэ.</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-dot"></div>
              <div>
                <h4>Тайлан, статистик</h4>
                <p>Хэдэн оюутан, хэдэн цаг оролцсоныг цагийг харна.</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-dot"></div>
              <div>
                <h4>Сонирхлоор шүүх</h4>
                <p>Мэргэжил, сонирхлоороо таарч буй оюутан залуусыг олно.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="foot-logo">VolunteerMN</div>
        <p>© 2025 VolunteerMN · Монгол оюутан, залуусд зориулсан сайн дурын ажлын платформ</p>
      </footer>
    </>
  );
}