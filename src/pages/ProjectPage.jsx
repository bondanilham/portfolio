import { useEffect } from 'react'
import { Link, useParams } from 'react-router'
import { projects, site } from '../data/content'
import Media from '../components/Media'
import Icon from '../components/Icon'
import BrandIcon from '../components/BrandIcon'
import NotFound from './NotFound'

export default function ProjectPage() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  const project = projects[index]

  useEffect(() => {
    window.scrollTo(0, 0)
    if (project) document.title = `${project.title} · ${site.name}`
  }, [project])

  if (!project) return <NotFound />

  const prev = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]
  const stack = project.stack || project.tech

  return (
    <article className={`project-page project-page--${project.kind}`}>
      <div className="project-page__inner">
        <Link className="project-page__back" to="/#projects">
          ← All projects
        </Link>

        <header className="project-page__header">
          <p className="project-page__meta">
            {project.type} · {project.date}
          </p>
          <h1>{project.title}</h1>
          <p className="project-page__subtitle">{project.subtitle}</p>
          <ul className="project-page__tags">
            {project.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          {(project.liveUrl || project.codeUrl) && (
            <div className="project-page__actions">
              {project.liveUrl && (
                <a className="btn btn--primary" href={project.liveUrl} target="_blank" rel="noreferrer">
                  <Icon name="external" size={18} /> Live demo
                </a>
              )}
              {project.codeUrl && (
                <a className="btn btn--ghost" href={project.codeUrl} target="_blank" rel="noreferrer">
                  <BrandIcon name="github" size={18} /> Source code
                </a>
              )}
            </div>
          )}
        </header>

        <figure className="project-page__shot">
          <Media src={project.image} alt={`${project.title} screenshot`} label="Add a screenshot" />
        </figure>

        <section className="project-page__block">
          <h2>Overview</h2>
          <p>{project.description}</p>
        </section>

        {project.highlights?.length > 0 && (
          <section className="project-page__block">
            <h2>What I built</h2>
            <ul className="project-page__list">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </section>
        )}

        <section className="project-page__block">
          <h2>Tech Stack</h2>
          <ul className="chips chips--lg">
            {stack.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>

        {project.gallery?.length > 0 && (
          <section className="project-page__block">
            <h2>Screenshots</h2>
            <div className="project-page__gallery">
              {project.gallery.map((g) => (
                <figure key={g.src}>
                  <Media src={g.src} alt={g.caption || project.title} />
                  {g.caption && <figcaption>{g.caption}</figcaption>}
                </figure>
              ))}
            </div>
          </section>
        )}

        <nav className="project-page__pager" aria-label="More projects">
          <Link to={`/projects/${prev.slug}`}>
            <span>← Previous</span>
            <strong>{prev.title}</strong>
          </Link>
          <Link to={`/projects/${next.slug}`} className="is-next">
            <span>Next →</span>
            <strong>{next.title}</strong>
          </Link>
        </nav>
      </div>
    </article>
  )
}
