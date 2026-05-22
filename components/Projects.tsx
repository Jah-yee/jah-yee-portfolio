'use client'

import { useEffect, useRef } from 'react'
import { Github, ExternalLink } from 'lucide-react'
import { projects } from '@/lib/data'

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.animate-on-scroll, .stagger-children').forEach((el) => {
            el.classList.add('visible')
          })
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-12 animate-on-scroll">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">03</span>
          <h2 className="font-mono text-2xl font-semibold tracking-tight">Projects</h2>
          <div className="h-[1px] flex-1 bg-[var(--border)]" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 stagger-children">
          {projects.map((project, i) => (
            <div 
              key={project.title}
              className="project-card border border-[var(--border)] bg-[var(--surface)] p-6 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-mono text-lg font-semibold text-[var(--text-primary)]">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={16} />
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="font-mono text-xs px-2 py-1 bg-[var(--bg)] border border-[var(--border)] text-[var(--text-secondary)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}