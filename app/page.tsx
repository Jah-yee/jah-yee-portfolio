import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Philosophy from '@/components/Philosophy'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Nav />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Projects />
      <Philosophy />
      <Contact />
      <Footer />
    </main>
  )
}