import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="section">
      <div className="job-card">
        <span className="tag tag-social">404</span>
        <h3>Хуудас олдсонгүй</h3>
        <p>Таны оруулсан хаяг байхгүй байна. Нүүр хуудас руу буцаад дахин оролдоорой.</p>
        <div className="job-footer">
          <span className="cert-pill">Алдаа биш, зөв холбоос хэрэгтэй</span>
          <Link className="apply-btn" to="/">Нүүр хуудас</Link>
        </div>
      </div>
    </section>
  )
}