'use client'

import { useState, useEffect, useRef } from 'react'
import { Mail, Github, Twitter, Linkedin, Copy, Check } from 'lucide-react'
import { profile } from '@/lib/data'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [toastVisible, setToastVisible] = useState(false)
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

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('hello@placeholder.dev')
      setCopied(true)
      setToastVisible(true)
      setTimeout(() => {
        setCopied(false)
        setToastVisible(false)
      }, 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const socials = [
    { icon: Github, href: profile.github, label: 'GitHub' },
    { icon: Twitter, href: profile.twitter, label: 'Twitter' },
    { icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' },
  ]

  return (
    <>
      <section id="contact" ref={sectionRef} className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12 animate-on-scroll">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">04</span>
            <h2 className="font-mono text-2xl font-semibold tracking-tight">Contact</h2>
            <div className="h-[1px] flex-1 bg-[var(--border)]" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-on-scroll" style={{ transitionDelay: '100ms' }}>
              <h3 className="font-mono text-lg text-[var(--text-primary)] mb-4">
                Let&apos;s build something.
              </h3>
              <p className="text-[var(--text-secondary)] mb-8">
                Open to collaboration on AI tools, developer utilities, and anything that makes 
                computers more useful. If you have a problem worth solving, let&apos;s talk.
              </p>

              <div className="flex items-center gap-4">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-3 px-4 py-3 bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] transition-colors group"
                >
                  <Mail size={16} className="text-[var(--accent)]" />
                  <span className="font-mono text-sm text-[var(--text-primary)]">
                    {profile.email}
                  </span>
                  <span className="text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors">
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                  </span>
                </button>
              </div>
            </div>

            <div className="animate-on-scroll" style={{ transitionDelay: '200ms' }}>
              <div className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-4">
                Find me elsewhere
              </div>
              <div className="flex gap-4">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center border border-[var(--border)] text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toast */}
      <div className={`toast ${toastVisible ? 'show' : ''}`}>
        {copied ? 'Copied to clipboard' : ''}
      </div>
    </>
  )
}