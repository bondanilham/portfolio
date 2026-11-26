import { useEffect } from 'react'
import { Link } from 'react-router'
import { site } from '../data/content'

export default function NotFound() {
  useEffect(() => {
    document.title = `Page not found · ${site.name}`
  }, [])

  return (
    <section className="not-found">
      <p className="not-found__code">404</p>
      <h1>Page not found</h1>
      <p>That page doesn’t exist — it may have moved.</p>
      <Link className="btn btn--primary" to="/">
        Back to home
      </Link>
    </section>
  )
}
