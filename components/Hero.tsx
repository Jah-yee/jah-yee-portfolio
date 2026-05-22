'use client'

import { useEffect, useRef, useState } from 'react'
import { profile } from '@/lib/data'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const taglineRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden grid-bg scanlines">
      <div className="max-w-6xl mx-auto px-6 py-32 relative z-10">
        {/* Status badge */}
        <div className={`flex items-center gap-2 mb-8 transition-all duration-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="w-2 h-2 rounded-full bg-[var(--accent)] pulse-dot" />
          <span className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-widest">
            Status: {profile.status}
          </span>
        </div>

        {/* Name */}
        <h1 className={`font-mono font-bold text-6xl md:text-8xl lg:text-9xl text-[var(--text-primary)] tracking-tight mb-4 transition-all duration-700 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '100ms' }}>
          {profile.name}
        </h1>

        {/* Title */}
        <div className={`font-mono text-xl md:text-2xl text-[var(--accent)] mb-6 transition-all duration-700 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '200ms' }}>
          {profile.title} · {profile.subtitle}
        </div>

        {/* Tagline */}
        <p className={`text-lg text-[var(--text-secondary)] max-w-xl mb-8 transition-all duration-700 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '300ms' }}>
          <span ref={taglineRef} className="italic">
            {profile.tagline}
          </span>
        </p>

        {/* Location */}
        <div className={`flex items-center gap-2 font-mono text-sm text-[var(--muted)] transition-all duration-700 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '400ms' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>{profile.location}</span>
          <span className="mx-2">·</span>
          <span>{profile.university}</span>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-700 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`} style={{ transitionDelay: '600ms' }}>
          <div className="flex flex-col items-center gap-2 text-[var(--muted)]">
            <span className="font-mono text-xs uppercase tracking-widest">scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--muted)] to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}