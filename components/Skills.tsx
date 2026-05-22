'use client'

import { useEffect, useRef, useState } from 'react'
import { Code2, Layers, Wrench, Compass } from 'lucide-react'
import { skillCategories } from '@/lib/data'

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={16} />,
  Layers: <Layers size={16} />,
  Wrench: <Wrench size={16} />,
  Compass: <Compass size={16} />,
}

function SkillBar({ name, proficiency }: { name: string; proficiency: number }) {
  const [width, setWidth] = useState(0)
  const barRef = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.5 }
    )

    if (barRef.current) observer.observe(barRef.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    const timeout = setTimeout(() => setWidth(proficiency), 100)
    return () => clearTimeout(timeout)
  }, [started, proficiency])

  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between mb-2">
        <span className="font-mono text-sm text-[var(--text-primary)]">{name}</span>
        <span className="font-mono text-xs text-[var(--muted)]">{proficiency}%</span>
      </div>
      <div ref={barRef} className="proficiency-bar">
        <div 
          className="h-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-alt)]"
          style={{ width: `${width}%`, transition: 'width 1s ease-out' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [openCategory, setOpenCategory] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.animate-on-scroll').forEach((el) => {
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
    <section id="skills" ref={sectionRef} className="py-24 md:py-32 bg-[var(--surface)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-12 animate-on-scroll">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">02</span>
          <h2 className="font-mono text-2xl font-semibold tracking-tight">Skills</h2>
          <div className="h-[1px] flex-1 bg-[var(--border)]" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, i) => (
            <div 
              key={category.name}
              className="border border-[var(--border)] bg-[var(--bg)] animate-on-scroll"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <button
                onClick={() => setOpenCategory(openCategory === category.name ? null : category.name)}
                className="w-full p-5 flex items-center justify-between text-left hover:bg-[var(--surface)] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[var(--accent)]">{iconMap[category.icon]}</span>
                  <span className="font-mono text-sm font-medium">{category.name}</span>
                </div>
                <span className="font-mono text-xs text-[var(--muted)]">
                  {openCategory === category.name ? '−' : '+'}
                </span>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${openCategory === category.name ? 'max-h-96' : 'max-h-0'}`}>
                <div className="px-5 pb-5 border-t border-[var(--border)] pt-4">
                  {category.skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} proficiency={skill.proficiency} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}