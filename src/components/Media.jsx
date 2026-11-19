// Shows an image, or a labelled placeholder when no image is set yet.
export default function Media({ src, alt, label, className = '' }) {
  if (src) {
    return <img className={`media ${className}`} src={src} alt={alt} loading="lazy" />
  }
  return (
    <div className={`media media--placeholder ${className}`} role="img" aria-label={alt}>
      <span>{label || 'Add an image'}</span>
    </div>
  )
}
