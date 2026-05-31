export default function ContactPage() {
  return (
    <section className="page">
      <div className="page-header">
        <div>
          <div className="eyebrow">Холбоо барих</div>
          <h1 className="page-title">Бидэнд санал хүсэлт илгээнэ үү</h1>
          <p className="page-subtitle">Асуулт, санал, хамтын ажиллагааны хүсэлтээ үлдээгээрэй.</p>
        </div>
      </div>

      <div className="card">
        <form className="form-grid">
          <input type="text" name="name" placeholder="Нэр" />
          <input type="email" name="email" placeholder="Имэйл" />
          <input type="text" name="subject" placeholder="Сэдэв" />
          <textarea name="message" placeholder="Мессеж" rows="5"></textarea>
          <button className="btn btn-primary" type="button">Илгээх</button>
        </form>
      </div>
    </section>
  )
}
