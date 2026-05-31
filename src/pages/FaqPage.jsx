const faqs = [
  {
    question: 'Сайн дурын ажилд хэрхэн бүртгүүлэх вэ?',
    answer: 'Ажил хайх хэсэгт орж, тохирох ажлыг сонгоод "Бүртгүүлэх" дээр дарна.',
  },
  {
    question: 'Цуцлах хугацаа хэрхэн тооцогдох вэ?',
    answer: 'Ажил эхлэхээс 2 өдрийн өмнө хүртэл цуцлах боломжтой.',
  },
  {
    question: 'Сертификат яаж авдаг вэ?',
    answer: 'Ажил дууссаны дараа тайлан баталгаажмагц сертификат автоматаар үүснэ.',
  },
]

export default function FaqPage() {
  return (
    <section className="page">
      <div className="page-header">
        <div>
          <div className="eyebrow">Түгээмэл асуулт</div>
          <h1 className="page-title">Асуух зүйл байна уу?</h1>
          <p className="page-subtitle">Хамгийн их асуудаг асуултуудын хариулт.</p>
        </div>
      </div>

      <div className="card-grid">
        {faqs.map((item) => (
          <div key={item.question} className="card">
            <h3 className="card-title">{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
