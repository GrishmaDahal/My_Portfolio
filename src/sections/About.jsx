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
            I'm <strong>Grishma Dahal</strong>, an aspiring Computer Engineering student based in Kathmandu, 
            Nepal, with a strong passion for programming, software development, and system design. 
            I am driven by the pursuit of creating solutions that are not only functionally robust 
            but also visually engaging and user-centric.
          </p>
          <p className="about-bio">
            Currently pursuing <strong>Bachelor’s degree in Computer Engineering</strong>, I actively bridge 
            theoretical knowledge with practical application. I am particularly interested in how front-end 
            design and back-end architecture integrate to deliver seamless and meaningful digital experiences. 
            I continuously seek opportunities to challenge myself, expand my skill set, and grow as a developer 
            in an ever-evolving technological landscape.
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