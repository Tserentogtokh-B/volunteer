const queue = [
  {
    id: 'mod-1',
    title: 'Ногоон бүсэд мод тарих өдөрлөг',
    type: 'Ажлын нийтлэл',
  },
  {
    id: 'mod-2',
    title: 'Community Care байгууллага',
    type: 'Байгууллага',
  },
]

export default function AdminModerationPage() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="eyebrow">Хяналт</div>
          <h1 className="page-title">Баталгаажуулах жагсаалт</h1>
          <p className="page-subtitle">Шинэ байгууллага, ажлуудыг баталгаажуулна.</p>
        </div>
      </div>

      <div className="card">
        {queue.map((item) => (
          <div key={item.id} className="list-item">
            <div>
              <div className="list-title">{item.title}</div>
              <div className="list-meta">{item.type}</div>
            </div>
            <div className="list-actions">
              <button className="btn btn-primary" type="button">Зөвшөөрөх</button>
              <button className="btn btn-ghost" type="button">Татгалзах</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
