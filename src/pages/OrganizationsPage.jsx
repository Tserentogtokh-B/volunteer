import { Link } from 'react-router-dom'
import { organizations } from '../data/orgs.js'

export default function OrganizationsPage() {
  return (
    <>
      <div className="org-cta" id="orgs">
        <div className="org-cta-inner">
          <div>
            <div className="section-label">Байгууллагуудад</div>
            <h2>Идэвхтэй оюутан, залуустай<br />холбогдоорой</h2>
            <p>Сайн дурын ажлаа VolunteerMN-д нийтэлж, мянга гаруй оюутны дунд сонирхогчдыг олж, байгууллагынхаа үйл ажиллагааг цааш тэлээрэй.</p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link className="btn btn-primary" to="/signup">Байгууллага бүртгэх</Link>
              <Link className="btn btn-ghost" to="/org/jobs">Ажил нийтлэх →</Link>
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
                <p>Хэдэн оюутан, хэдэн цаг оролцсоныг харна.</p>
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

      <section className="section">
        <div className="section-label">Байгууллагын сан</div>
        <div className="section-title">Идэвхтэй <em>хамтрагч байгууллагууд</em></div>
        <div className="org-grid">
          {organizations.map((org) => (
            <div key={org.id} className="card">
              <div className="pill">{org.focus}</div>
              <h3 className="card-title">{org.name}</h3>
              <p>{org.description}</p>
              <div className="list-meta">{org.location} · Нээлттэй ажил: {org.openRoles}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}