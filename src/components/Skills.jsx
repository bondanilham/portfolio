import { skills } from '../data/content'
import Section from './Section'
import Icon from './Icon'

export default function Skills() {
  return (
    <Section id="skills" title="My Skills" subtitle="The tools I reach for." accent="software">
      {skills.map((g) => (
        <div key={g.group} className={`skill-group skill-group--${g.type}`}>
          <h3 className="skill-group__title">{g.group}</h3>
          <div className="skills">
            {g.items.map((s) => (
              <div key={s.name} className="skill">
                <div className="skill__icon">
                  <Icon name={s.icon} size={34} />
                </div>
                <h4>{s.name}</h4>
                <p>{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Section>
  )
}
