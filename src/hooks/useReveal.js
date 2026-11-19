import { useEffect, useRef, useState } from 'react'

// Returns [ref, visible]. `visible` flips to true once the element scrolls into view.
export default function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  // Without IntersectionObserver support, just show everything.
  const [visible, setVisible] = useState(() => !('IntersectionObserver' in window))

  useEffect(() => {
    const el = ref.current
    if (!el || visible) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, visible])

  return [ref, visible]
}
