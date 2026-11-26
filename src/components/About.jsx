import { about } from '../data/content'
import Section from './Section'
import BrandIcon from './BrandIcon'

export default function About() {
  return (
    <Section
      id="about"
      title="About Me"
      banner={about.image}
      accent="neutral"
    >
      <div className="about">
        {about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <ul className="stats">
        {about.highlights.map((h) => (
          <li key={h.label}>
            {h.logo ? (
              <span className="stats__logo">
                <BrandIcon name={h.logo} size={34} />
              </span>
            ) : (
              <strong>{h.value}</strong>
            )}
            <span>{h.label}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
