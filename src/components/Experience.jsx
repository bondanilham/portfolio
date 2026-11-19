import { experience } from '../data/content'
import Section from './Section'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="From mechanical engineering to full-stack development."
      banner={null}
      accent="engineering"
    >
      <ol className="timeline">
        {experience.map((e) => (
          <Reveal as="li" key={`${e.role}-${e.period}`} className={`timeline__item timeline__item--${e.type}`}>
            <span className="timeline__period">{e.period}</span>
            <h3>{e.role}</h3>
            <p className="timeline__company">{e.company}</p>
            <ul>
              {e.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
      <p className="legend">
        <span className="legend__dot legend__dot--software" /> Software
        <span className="legend__dot legend__dot--engineering" /> Engineering
      </p>
    </Section>
  )
}
