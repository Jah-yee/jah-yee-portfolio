'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Update active section
      const sections = navLinks.map(link => link.href.substring(1))
      const scrollPos = window.scrollY + 100

      for (const section of sections.reverse()) {
        const el = document.getElementById(section)
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="font-mono text-lg text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors duration-150"
          >
            &lt;Jah-yee /&gt;
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`font-mono text-sm transition-colors duration-150 relative group ${
                  activeSection === link.href.substring(1)
                    ? 'text-[var(--accent)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-[var(--accent)] transition-all duration-150 ${
                  activeSection === link.href.substring(1) ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[var(--text-primary)] p-2"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 bg-[var(--bg)]/95 backdrop-blur-lg transition-transform duration-300 md:hidden ${
        mobileOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="font-mono text-2xl text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}