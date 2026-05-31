const applicants = [
  {
    id: 'app-1',
    name: 'Батаа Алтанцэцэг',
    role: 'Сайн дурын ажилтан',
    status: 'Шинэ',
  },
  {
    id: 'app-2',
    name: 'Номин Даваасүрэн',
    role: 'Сайн дурын ажилтан',
    status: 'Баталгаажсан',
  },
  {
    id: 'app-3',
    name: 'Тэмүүлэн Цогт',
    role: 'Сайн дурын ажилтан',
    status: 'Хүлээгдэж буй',
  },
]

export default function OrgApplicantsPage() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="eyebrow">Оролцогчид</div>
          <h1 className="page-title">Хүсэлтүүд</h1>
          <p className="page-subtitle">Шинэ хүсэлтүүдийг баталгаажуулж, багтаа урина уу.</p>
        </div>
      </div>

      <div className="card">
        {applicants.map((applicant) => (
          <div key={applicant.id} className="list-item">
            <div>
              <div className="list-title">{applicant.name}</div>
              <div className="list-meta">{applicant.role}</div>
            </div>
            <div className="list-actions">
              <span className="pill">{applicant.status}</span>
              <button className="btn btn-ghost" type="button">Дэлгэрэнгүй</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
