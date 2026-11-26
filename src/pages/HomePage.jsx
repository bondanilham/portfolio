import { useEffect } from 'react'
import { useLocation } from 'react-router'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import { site } from '../data/content'

export default function HomePage() {
  const { hash, key } = useLocation()

  useEffect(() => {
    document.title = `${site.name} · ${site.title}`
  }, [])

  // Scroll to #section when arriving from another page (e.g. "All projects"),
  // or to the top when there's no hash.
  useEffect(() => {
    const id = hash.slice(1)
    if (!id) {
      window.scrollTo(0, 0)
      return
    }
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [hash, key])

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  )
}
