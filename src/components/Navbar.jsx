import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { site } from '../data/content'
import useActiveSection from '../hooks/useActiveSection'

// Keep this in the same order as the sections in App.jsx.
const links = [
  { id: 'top', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]
const sectionIds = links.map((l) => l.id)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const sectionOnScreen = useActiveSection(sectionIds)
  // On a project detail page, highlight "Projects"; elsewhere follow the scroll position.
  const active = pathname.startsWith('/projects/') ? 'projects' : pathname === '/' ? sectionOnScreen : null

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const linkProps = (l) => ({
    to: l.id === 'top' ? '/' : `/#${l.id}`,
    className: active === l.id ? 'is-active' : undefined,
    'aria-current': active === l.id ? 'location' : undefined,
  })

  return (
    <>
      <header className="topbar">
        <button
          className={`menu-btn ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="side-menu"
        >
          <span />
          <span />
          <span />
        </button>
        <Link className="topbar__title" to="/">
          {site.name}
        </Link>
        <nav className="topbar__links" aria-label="Primary">
          {links.slice(1).map((l) => (
            <Link key={l.id} {...linkProps(l)}>
              {l.label}
            </Link>
          ))}
        </nav>
      </header>

      <div className={`scrim ${open ? 'is-open' : ''}`} onClick={() => setOpen(false)} />
      <nav id="side-menu" className={`side-menu ${open ? 'is-open' : ''}`} aria-label="Menu">
        <p className="side-menu__name">{site.name}</p>
        <p className="side-menu__role">{site.title}</p>
        {links.map((l) => (
          <Link key={l.id} {...linkProps(l)} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
            {l.label}
          </Link>
        ))}
      </nav>
    </>
  )
}
