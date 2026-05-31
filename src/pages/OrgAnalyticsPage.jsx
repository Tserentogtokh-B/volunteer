const insights = [
  {
    id: 'ins-1',
    title: 'Сүүлийн 30 хоногт',
    value: '24 шинэ бүртгэл',
  },
  {
    id: 'ins-2',
    title: 'Дундаж оролцоо',
    value: '78% ирц',
  },
  {
    id: 'ins-3',
    title: 'Сайн дурын цаг',
    value: '356 цаг',
  },
]

export default function OrgAnalyticsPage() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="eyebrow">Аналитик</div>
          <h1 className="page-title">Үр дүнгийн тойм</h1>
          <p className="page-subtitle">Төслүүдийнхээ нөлөөллийг бодитоор хэмжээрэй.</p>
        </div>
      </div>

      <div className="card-grid">
        {insights.map((item) => (
          <div key={item.id} className="card">
            <div className="card-title">{item.title}</div>
            <div className="metric-value" style={{ marginTop: 12 }}>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
