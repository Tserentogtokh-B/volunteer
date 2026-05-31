const messages = [
  {
    id: 'msg-1',
    name: 'Ногоон Монгол ТББ',
    preview: 'Сайн байна уу? Багийн уулзалтад 10:00-д ирээрэй.',
    time: '2 цагийн өмнө',
  },
  {
    id: 'msg-2',
    name: 'IT Mongolia Foundation',
    preview: 'Сургалтын холбоосыг эндээс аваарай.',
    time: 'Өчигдөр',
  },
  {
    id: 'msg-3',
    name: 'Community Care',
    preview: 'Багц бэлтгэлийн хуваарь шинэчлэгдсэн.',
    time: '2 өдрийн өмнө',
  },
]

export default function MessagesPage() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="eyebrow">Зурвас</div>
          <h1 className="page-title">Харилцан яриа</h1>
          <p className="page-subtitle">Байгууллагуудтайгаа холбоотой байгаарай.</p>
        </div>
      </div>

      <div className="card">
        {messages.map((message) => (
          <div key={message.id} className="list-item">
            <div>
              <div className="list-title">{message.name}</div>
              <div className="list-meta">{message.preview}</div>
            </div>
            <div className="pill">{message.time}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
