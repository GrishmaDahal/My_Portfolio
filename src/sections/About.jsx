import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="reveal">
        <h2 className="about-title">Passion meets <em>purpose.</em></h2>
      </div>

      <div className="about-layout">
        {/* Left: image */}
        <div className="about-img-wrap reveal-left">
          <img src="/1.jpg" alt="Grishma Dahal" className="about-img" />
          <div className="about-img-decor" />
        </div>

        {/* Right: text */}
        <div className="about-content reveal-right">
          <p className="about-bio">
            I'm <strong>Grishma Dahal</strong>, an aspiring Computer Engineering student based in
            Kathmandu, Nepal. I have a strong passion for programming, software development,
            and system design. I love building things that are both functional and beautiful,
            and I'm always looking for new challenges to grow as a developer.
          </p>
          <p className="about-bio">
            Currently pursuing a <strong>B.E. in Computer Engineering</strong>, I bridge theoretical
            foundations with hands-on practice, exploring how front-end craft and back-end thinking
            come together to create meaningful digital experiences.
          </p>
          <div className="about-meta">
            <div className="about-meta-item">
              <div className="about-meta-label">Degree</div>
              <div className="about-meta-value">B.E. Computer Engineering</div>
            </div>
            <div className="about-meta-item">
              <div className="about-meta-label">Status</div>
              <div className="about-meta-value">Open to Opportunities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}