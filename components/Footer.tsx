export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-[var(--muted)]">
            © {year} Jah-yee. Built with intent.
          </p>
          <p className="font-mono text-xs text-[var(--muted)]">
            Deployed on{' '}
            <a 
              href="https://vercel.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
            >
              Vercel
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}