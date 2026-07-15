import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full glass flex items-center
        justify-center text-accent-blue hover:text-white hover:bg-gradient-to-r
        hover:from-accent-blue hover:to-accent-purple transition-all duration-300 hover:-translate-y-1 shadow-glow"
    >
      <ArrowUp size={18} />
    </button>
  )
}
