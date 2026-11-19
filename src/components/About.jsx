import { about } from '../data/content'
import Section from './Section'

export default function About() {
  return (
    <Section
      id="about"
      title="About Me"
      banner={about.image}
      accent="software"
    >
      <div className="about">
        {about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <ul className="stats">
        {about.highlights.map((h) => (
          <li key={h.label}>
            <strong>{h.value}</strong>
            <span>{h.label}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
