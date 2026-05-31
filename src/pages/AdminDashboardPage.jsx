export default function AdminDashboardPage() {
  const stats = [
    { label: 'Шинэ байгууллага', value: 5 },
    { label: 'Шинэ ажил', value: 18 },
    { label: 'Гомдол', value: 2 },
    { label: 'Идэвхтэй хэрэглэгч', value: '1.2k' },
  ]

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="eyebrow">Админ</div>
          <h1 className="page-title">Системийн хяналт</h1>
          <p className="page-subtitle">Нийт контент, хэрэглэгч, байгууллагын хяналт.</p>
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
    </div>
  )
}
