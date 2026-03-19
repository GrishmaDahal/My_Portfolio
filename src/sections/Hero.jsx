import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <p className="hero-eyebrow">Computer Engineer · Nepal</p>
        <h1 className="hero-title">
          <em>Grishma</em>
          <span className="name-line">Dahal</span>
        </h1>
        <p className="hero-desc">
          Computer Engineering student driven to integrate UI and backend logic to build scalable applications.
        </p>


        <div className="hero-actions">
          <a href="/Grishma_Dahal_Resume.pdf" download className="btn-download">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M19 9h-4V3H9v6H5l7 7 7-7zm-8 2V5h2v6h1.17L12 13.17 9.83 11H11zm-6 8h14v2H5z"/>
            </svg>
            <span>Download Resume</span>
          </a>
        </div>
      </div>

      <div className="hero-photo">
        <div className="hero-img-wrap">
          <img src="/11.png" alt="Grishma Dahal" className="hero-img" />
        </div>
      </div>
    </section>
  )
}