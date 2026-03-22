import './Projects.css'

const PROJECTS = [
  {
    tag: 'Python', title: 'Ant Simulation',
    desc: 'Models ant colony behavior and movement patterns using Python simulation techniques.',
    github: 'https://github.com/GrishmaDahal/Ant_Simulation_Project',
    image: '/ant.png',
    tagBg: '#fef3c7', tagColor: '#92400e',
  },
  {
    tag: 'C', title: 'Contact Management',
    desc: 'Command-line contact management system for storing and managing contact records efficiently.',
    github: 'https://github.com/GrishmaDahal/Contact_Management_System',
    image: '/contact.png',
    tagBg: '#dbeafe', tagColor: '#1e40af',
  },
  {
    tag: 'C++', title: 'Quiz Application',
    desc: 'Interactive quiz app with multiple choice questions and score tracking built in C++.',
    github: 'https://github.com/GrishmaDahal/Quiz',
    image: '/Quiz.png',
    tagBg: '#f3e8ff', tagColor: '#7e22ce',
  },
  {
    tag: 'HTML & CSS', title: 'University Website',
    desc: 'Fully responsive university website designed and built using pure HTML and CSS.',
    github: 'https://github.com/GrishmaDahal/University_Website_Project',
    image: '/university.png',
    tagBg: '#fce7f3', tagColor: '#9d174d',
  },
  {
    tag: 'Python · ML', title: 'Lung Cancer Prediction',
    desc: 'Machine learning model predicting lung cancer risk using Python and data analysis.',
    github: 'https://github.com/GrishmaDahal/Lung_Cancer_Prediction',
    image: '/lung.png',
    tagBg: '#dcfce7', tagColor: '#166534',
  },
  {
    tag: 'Django', title: 'Django LMS',
    desc: 'A full-featured Learning Management System prototype with Django & MySQL.',
    github: 'https://github.com/GrishmaDahal/Django-Project-LMS',
    image: '/lms.png',
    tagBg: '#e0f2fe', tagColor: '#075985',
  },
  {
    tag: 'Full Stack', title: 'Sticky Notes App',
    desc: 'Full stack sticky notes application with frontend and backend integration.',
    github: 'https://github.com/GrishmaDahal/Sticky_Notes_App',
    image: '/stickynotes.png',
    tagBg: '#fff7ed', tagColor: '#9a3412',
  },
  {
    tag: 'Python · Data', title: 'Book Data Pipeline',
    desc: 'Advanced data pipeline for scraping, processing and analyzing book data at scale.',
    github: 'https://github.com/GrishmaDahal/Book_Data_Pipeline',
    image: '/bookdata.png',
    tagBg: '#fdf4ff', tagColor: '#86198f',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="reveal">
        <h2 className="projects-title">Project & <em>contributions.</em></h2>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <a
            key={p.title}
            href={p.github}
            target="_blank"
            rel="noreferrer"
            className={`project-card reveal delay-${(i % 4) + 1}`}
          >
            {/* Thumbnail */}
            <div className="project-thumb">
              <img
                src={p.image}
                alt={p.title}
                className="project-thumb-img"
              />
              {/* Hover overlay */}
              <div className="project-overlay">
                <span className="project-overlay-label">View on GitHub →</span>
              </div>
            </div>

            {/* Card footer */}
            <div className="project-info">
              <div className="project-info-top">
                <h3 className="project-name">{p.title}</h3>
                <span
                  className="project-tag"
                  style={{ background: p.tagBg, color: p.tagColor }}
                >
                  {p.tag}
                </span>
              </div>
              <p className="project-desc">{p.desc}</p>
            </div>
          </a>
        ))}
      </div>

      {/* View More CTA */}
      <div className="projects-more reveal">
        <p className="projects-more-text">Want to see more?</p>
        <a
          href="https://github.com/GrishmaDahal"
          target="_blank"
          rel="noreferrer"
          className="projects-more-btn"
        >
          <svg className="projects-more-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
          </svg>
          View all projects on GitHub
          <span className="projects-more-arrow">→</span>
        </a>
      </div>
    </section>
  )
}
