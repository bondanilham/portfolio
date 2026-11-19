import { useEffect, useState } from 'react'
import { site } from '../data/content'

const links = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

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
        <a className="topbar__title" href="#top">
          {site.name}
        </a>
        <nav className="topbar__links" aria-label="Primary">
          {links.slice(1).map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
      </header>

      <div className={`scrim ${open ? 'is-open' : ''}`} onClick={() => setOpen(false)} />
      <nav id="side-menu" className={`side-menu ${open ? 'is-open' : ''}`} aria-label="Menu">
        <p className="side-menu__name">{site.name}</p>
        <p className="side-menu__role">{site.title}</p>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
            {l.label}
          </a>
        ))}
      </nav>
    </>
  )
}
