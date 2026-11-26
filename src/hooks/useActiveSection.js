import { useEffect, useState } from 'react'

// Returns the id of the section currently on screen.
// A section counts as active once its top passes 40% down the viewport.
// At the very bottom of the page the last section wins, even if it's short.
export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  const key = ids.join(',')

  useEffect(() => {
    const sectionIds = key.split(',')
    let frame = 0

    const update = () => {
      frame = 0
      const line = window.innerHeight * 0.4
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      let current = sectionIds[0]
      if (atBottom) {
        current = sectionIds[sectionIds.length - 1]
      } else {
        for (const id of sectionIds) {
          const el = document.getElementById(id)
          if (el && el.getBoundingClientRect().top <= line) current = id
        }
      }
      setActive(current)
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [key])

  return active
}
