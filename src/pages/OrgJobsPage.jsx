const jobs = [
  {
    id: 'org-job-1',
    title: 'Хотын ногоон бүсэд мод тарих өдөр',
    applicants: 22,
    status: 'Идэвхтэй',
  },
  {
    id: 'org-job-2',
    title: 'Голын эрэг цэвэрлэх өдөрлөг',
    applicants: 8,
    status: 'Хүлээгдэж буй',
  },
]

export default function OrgJobsPage() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="eyebrow">Ажлууд</div>
          <h1 className="page-title">Нийтэлсэн ажлууд</h1>
          <p className="page-subtitle">Нийтэлсэн ажлуудаа хянаж, шинэ боломж нэмээрэй.</p>
        </div>
        <div className="page-actions">
          <button className="btn btn-primary" type="button">Шинэ ажил нэмэх</button>
        </div>
      </div>

      <div className="card">
        {jobs.map((job) => (
          <div key={job.id} className="list-item">
            <div>
              <div className="list-title">{job.title}</div>
              <div className="list-meta">Оролцогчид: {job.applicants}</div>
            </div>
            <span className="pill">{job.status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
