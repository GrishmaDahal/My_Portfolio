import { useState, useEffect } from 'react'
import './Navbar.css'

const NAV_LINKS = ['Home', 'About', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
    setMenuOpen(false)
  }

  useEffect(() => {
    const onScroll = () => {
      let cur = 'home'
      NAV_LINKS.forEach(n => {
        const el = document.getElementById(n.toLowerCase())
        if (el && el.getBoundingClientRect().top <= 100) cur = n.toLowerCase()
      })
      setActiveSection(cur)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="navbar">
  <div className="navbar-brand">
    <img src="/1.png" alt="Grishma Dahal" className="nav-logo" />
    <span className="nav-name">Grishma Dahal</span>
  </div>

      <button className={`nav-hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
        <span /><span /><span />
      </button>

      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map(name => (
          <button key={name} className={`nav-link ${activeSection === name.toLowerCase() ? 'active' : ''}`}
            onClick={() => scrollToSection(name.toLowerCase())}>{name}</button>
        ))}
      </div>
    </nav>
  )
}
