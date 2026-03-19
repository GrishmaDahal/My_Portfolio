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
    </section>
  )
}
