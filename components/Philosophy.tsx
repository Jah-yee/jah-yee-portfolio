'use client'

import { useEffect, useRef } from 'react'
import { philosophyQuote } from '@/lib/data'

export default function Philosophy() {
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
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-[var(--surface)] border-y border-[var(--border)]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="animate-on-scroll">
          <div className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-8">
            Philosophy
          </div>
          
          <blockquote className="font-mono text-2xl md:text-3xl lg:text-4xl text-[var(--text-primary)] tracking-tight leading-relaxed mb-8 italic">
            &ldquo;{philosophyQuote.text}&rdquo;
          </blockquote>
          
          <p className="text-[var(--text-secondary)] text-sm">
            — {philosophyQuote.context}
          </p>
        </div>
      </div>
    </section>
  )
}