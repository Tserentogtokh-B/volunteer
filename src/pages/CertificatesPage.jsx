const certificates = [
  {
    id: 'cert-1',
    title: 'Улиас тарих өдөрлөг',
    hours: 6,
    date: '2026.04.06',
  },
  {
    id: 'cert-2',
    title: 'Математикийн дэмжлэгийн багш',
    hours: 24,
    date: '2026.03.15',
  },
]

export default function CertificatesPage() {
  const totalHours = certificates.reduce((sum, item) => sum + item.hours, 0)

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="eyebrow">Сертификат</div>
          <h1 className="page-title">Сайн дурын тайлан</h1>
          <p className="page-subtitle">Нийт цаг: {totalHours} цаг</p>
        </div>
      </div>

      <div className="card">
        {certificates.map((item) => (
          <div key={item.id} className="list-item">
            <div>
              <div className="list-title">{item.title}</div>
              <div className="list-meta">{item.date} · {item.hours} цаг</div>
            </div>
            <button className="btn btn-ghost" type="button">PDF татах</button>
          </div>
        ))}
      </div>
    </div>
  )
}
