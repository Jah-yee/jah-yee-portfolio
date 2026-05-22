import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jah-yee — Full-Stack Developer & AI Tool Builder',
  description: 'Building at the edge of intent. Full-stack developer specializing in AI tools, hackathon projects, and rapid prototyping.',
  keywords: ['developer', 'full-stack', 'AI', 'Python', 'React', 'Node.js', 'hackathon'],
  authors: [{ name: 'Jah-yee' }],
  openGraph: {
    title: 'Jah-yee — Full-Stack Developer & AI Tool Builder',
    description: 'Building at the edge of intent.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}