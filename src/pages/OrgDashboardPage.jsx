export default function OrgDashboardPage() {
  const stats = [
    { label: 'Нээлттэй ажил', value: 6 },
    { label: 'Шинэ хүсэлт', value: 14 },
    { label: 'Баталгаажсан', value: 9 },
    { label: 'Идэвхтэй төсөл', value: 3 },
  ]

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="eyebrow">Байгууллага</div>
          <h1 className="page-title">Байгууллагын тойм</h1>
          <p className="page-subtitle">Ажил, оролцогчид, тайлангаа нэг дороос удирд.</p>
        </div>
      </div>

      <div className="metric-grid">
        {stats.map((item) => (
          <div key={item.label} className="metric-card">
            <div className="metric-value">{item.value}</div>
            <div className="metric-label">{item.label}</div>
          </div>
        ))}
      </div>

      <div className="card">
        <h3 className="card-title">Ойрын үйл ажиллагаа</h3>
        <div className="list-item">
          <div>
            <div className="list-title">Хотын ногоон бүсэд мод тарих өдөр</div>
            <div className="list-meta">2026.06.08 · 12 оролцогч баталгаажсан</div>
          </div>
          <span className="status-pill status-approved">Бэлэн</span>
        </div>
        <div className="list-item">
          <div>
            <div className="list-title">Голын эрэг цэвэрлэх өдөрлөг</div>
            <div className="list-meta">2026.06.22 · 8 хүсэлт хүлээгдэж байна</div>
          </div>
          <span className="status-pill status-applied">Хүлээгдэж буй</span>
        </div>
      </div>
    </div>
  )
}
