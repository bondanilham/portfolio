import { site } from '../data/content'
import Section from './Section'
import Icon from './Icon'

export default function Contact() {
  return (
    <Section id="contact" title="Contact Me" accent="neutral">
      <p className="contact__text">{site.contactText}</p>
      <p className="contact__location">Based in {site.location}</p>
      <a className="btn btn--primary contact__email" href={`mailto:${site.email}`}>
        <Icon name="mail" size={18} /> {site.email}
      </a>
      <ul className="socials">
        {site.socials.map((s) => (
          <li key={s.label}>
            <a href={s.url} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
