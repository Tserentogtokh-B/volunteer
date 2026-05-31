import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

const roleLabel = {
  volunteer: 'Сайн дурын ажилтан',
  organization: 'Байгууллага',
  admin: 'Админ',
}

export default function RequireRole({ role, children }) {
  const { user, isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return (
      <section className="section">
        <div className="job-card">
          <span className="tag tag-social">Нэвтрэх шаардлагатай</span>
          <h3>Энэ хэсэгт нэвтэрсний дараа орно</h3>
          <p>Нэвтэрч байж тухайн хэсгийг ашиглах боломжтой.</p>
          <div className="job-footer">
            <span className="cert-pill">Нэвтрээд үргэлжлүүлээрэй</span>
            <Link className="apply-btn" to="/signin">Нэвтрэх</Link>
          </div>
        </div>
      </section>
    )
  }

  if (user?.role !== role) {
    return (
      <section className="section">
        <div className="job-card">
          <span className="tag tag-edu">Хандалтын эрх</span>
          <h3>Энэ хэсэг нь {roleLabel[role] || 'тусгай'} хэрэглэгчдэд зориулагдсан</h3>
          <p>Та өөрийн эрхийн түвшинд тохирох хэсгийг ашиглана уу.</p>
          <div className="job-footer">
            <span className="cert-pill">Одоогийн эрх: {roleLabel[user?.role] || 'Тодорхойгүй'}</span>
            <Link className="apply-btn" to="/signin">Өөр эрхээр нэвтрэх</Link>
          </div>
        </div>
      </section>
    )
  }

  return children
}
