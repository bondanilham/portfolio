import { useState } from 'react'
import { projects, projectFilters } from '../data/content'
import Section from './Section'
import Media from './Media'
import Icon from './Icon'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? projects : projects.filter((p) => p.tags.includes(filter))

  return (
    <Section
      id="projects"
      title="My Projects"
      subtitle="Full-stack web and mobile apps — with real-time features, AI integrations and APIs I designed end to end."
      accent="neutral"
    >
      <div className="filters" role="tablist" aria-label="Filter projects">
        {['All', ...projectFilters].map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            className={`filter ${filter === f ? 'is-active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="cards">
        {shown.map((p) => (
          <article key={p.title} className={`card card--${p.kind}`}>
            <Media src={p.image} alt={`${p.title} screenshot`} label="Add a screenshot" className="card__media" />
            <div className="card__body">
              <span className="card__tag">
                {p.type} · {p.date}
              </span>
              <h3>{p.title}</h3>
              <p className="card__subtitle">{p.subtitle}</p>
              <p>{p.description}</p>
              <ul className="chips">
                {p.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              {(p.liveUrl || p.codeUrl) && (
                <div className="card__links">
                  {p.liveUrl && (
                    <a href={p.liveUrl} target="_blank" rel="noreferrer">
                      <Icon name="external" size={16} /> Live demo
                    </a>
                  )}
                  {p.codeUrl && (
                    <a href={p.codeUrl} target="_blank" rel="noreferrer">
                      <Icon name="github" size={16} /> Code
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
