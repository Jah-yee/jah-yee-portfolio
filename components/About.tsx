'use client'

import { useEffect, useRef } from 'react'
import { MapPin, GraduationCap, Target, Code, Layers, Compass } from 'lucide-react'
import { about } from '@/lib/data'

const iconMap: Record<string, React.ReactNode> = {
  MapPin: <MapPin size={14} />,
  GraduationCap: <GraduationCap size={14} />,
  Target: <Target size={14} />,
  Code: <Code size={14} />,
  Layers: <Layers size={14} />,
  Compass: <Compass size={14} />,
}

export default function About() {
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
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr,320px] gap-12 md:gap-16">
          {/* Bio */}
          <div>
            <div className="flex items-center gap-3 mb-8 animate-on-scroll">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">01</span>
              <h2 className="font-mono text-2xl font-semibold tracking-tight">About</h2>
              <div className="h-[1px] flex-1 bg-[var(--border)]" />
            </div>

            <div className="space-y-6 stagger-children">
              {about.bio.map((paragraph, i) => (
                <p key={i} className="text-[var(--text-secondary)] leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Quick facts */}
          <div className="animate-on-scroll" style={{ transitionDelay: '200ms' }}>
            <div className="bg-[var(--surface)] border border-[var(--border)] p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-6">Quick Facts</h3>
              <div className="space-y-4">
                {about.quickFacts.map((fact, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-[var(--muted)] mt-0.5">
                      {iconMap[Object.keys(iconMap)[i % Object.keys(iconMap).length]]}
                    </span>
                    <div>
                      <div className="font-mono text-xs text-[var(--muted)] uppercase tracking-wider">{fact.label}</div>
                      <div className="font-mono text-sm text-[var(--text-primary)]">{fact.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}