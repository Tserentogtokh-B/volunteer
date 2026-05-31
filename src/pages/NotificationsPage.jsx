const notifications = [
  {
    id: 'not-1',
    title: 'Таны бүртгэл баталгаажлаа',
    detail: 'Хотын ногоон бүсэд мод тарих өдөрлөгт таны бүртгэл батлагдлаа.',
    time: 'Өнөөдөр',
  },
  {
    id: 'not-2',
    title: 'Шинэ боломж нэмэгдлээ',
    detail: 'Цахим бичиг үсгийн сургалтын сайн дурын ажил нэмэгдсэн.',
    time: 'Өчигдөр',
  },
  {
    id: 'not-3',
    title: 'Сертификат бэлэн боллоо',
    detail: 'Улиас тарих өдрийн сертификатыг татаж аваарай.',
    time: '2 өдрийн өмнө',
  },
]

export default function NotificationsPage() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="eyebrow">Мэдэгдэл</div>
          <h1 className="page-title">Шинэ мэдээлэл</h1>
          <p className="page-subtitle">Таны үйл ажиллагааны мэдэгдлүүд.</p>
        </div>
      </div>

      <div className="card">
        {notifications.map((item) => (
          <div key={item.id} className="list-item">
            <div>
              <div className="list-title">{item.title}</div>
              <div className="list-meta">{item.detail}</div>
            </div>
            <div className="pill">{item.time}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
