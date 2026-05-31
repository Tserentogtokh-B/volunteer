export default function AboutPage() {
  return (
    <section className="page">
      <div className="page-header">
        <div>
          <div className="eyebrow">Бидний тухай</div>
          <h1 className="page-title">Сайн дурын боломжийг нэгтгэсэн платформ</h1>
          <p className="page-subtitle">VolunteerMN нь оюутан, залуусыг бодит боломжуудтай холбоход чиглэсэн нээлттэй экосистем юм.</p>
        </div>
      </div>

      <div className="card-grid">
        <div className="card">
          <h3 className="card-title">Эрхэм зорилго</h3>
          <p>Нийгмийн хэрэгцээтэй ажлуудыг залуусын ур чадвартай холбож, бодит нөлөөлөл бий болгох.</p>
        </div>
        <div className="card">
          <h3 className="card-title">Үнэт зүйлс</h3>
          <p>Нээлттэй байдал, итгэлцэл, хэмжигдэхүйц үр дүн, хамтын ажиллагаа.</p>
        </div>
        <div className="card">
          <h3 className="card-title">Нөлөөлөл</h3>
          <p>Сайн дурын цагийг баталгаатай тайлан болгон хувиргаж, CV болон тэтгэлэгт ашиглах боломж олгоно.</p>
        </div>
      </div>
    </section>
  )
}
