import { site } from '../data/content'
import Icon from './Icon'
import BrandIcon from './BrandIcon'

export default function Hero() {
  const initials = site.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)

  return (
    <section className="hero" id="top">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__inner">
        <div className="hero__photo">
          {site.photo ? <img src={site.photo} alt={site.name} /> : <span>{initials}</span>}
        </div>
        <p className="hero__hello">Hi, I’m</p>
        <h1 className="hero__name">{site.name}</h1>
        <p className="hero__title">{site.title}</p>
        <ul className="hero__socials">
          {site.socials.map((s) => (
            <li key={s.label}>
              <a href={s.url} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label}>
                <BrandIcon name={s.icon} size={22} />
              </a>
            </li>
          ))}
        </ul>
        <hr className="hero__rule" />
        <p className="hero__tagline">{site.tagline}</p>
        <div className="hero__actions">
          <a className="btn btn--primary" href={site.resumeUrl} target="_blank" rel="noreferrer">
            <Icon name="external" size={18} /> Resume
          </a>
          <a className="btn btn--ghost" href="#projects">
            View my work
          </a>
        </div>
      </div>
      <a className="hero__scroll" href="#about" aria-label="Scroll to About">
        <Icon name="arrowDown" size={32} />
      </a>
    </section>
  )
}
