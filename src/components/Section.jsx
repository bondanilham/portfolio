import Media from './Media'
import Reveal from './Reveal'

// A TJ-style section: optional full-width banner image, a colored divider, then content.
// accent: 'software' | 'engineering' | 'neutral'
export default function Section({ id, title, subtitle, banner, bannerLabel, accent = 'software', children }) {
  return (
    <section id={id} className={`section section--${accent}`}>
      {banner && (
        <div className="section__banner">
          <Media src={banner} alt={`${title} banner`} label={bannerLabel} />
        </div>
      )}
      <div className="section__divider" />
      <Reveal className="section__inner">
        <h2 className="section__title">{title}</h2>
        {subtitle && <p className="section__subtitle">{subtitle}</p>}
        {children}
      </Reveal>
    </section>
  )
}
