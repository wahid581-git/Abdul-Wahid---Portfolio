import { useEffect, useState } from 'react'
import { Menu, X, Terminal } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#github', label: 'GitHub' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <nav
        className={`mx-auto max-w-6xl px-6 sm:px-8 flex items-center justify-between
          rounded-2xl transition-all duration-300 ${scrolled ? 'glass py-3 px-6' : ''}`}
      >
        <a href="#top" className="flex items-center gap-2 font-display font-semibold text-lg">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center">
            <Terminal size={16} className="text-white" />
          </span>
          <span className="gradient-text">AW</span>
        </a>

        <ul className="hidden md:flex items-center gap-7 font-mono text-sm text-text-muted">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-accent-blue transition-colors duration-200">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
        </div>

        <button
          className="md:hidden text-text-primary"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mx-4 mt-2 glass rounded-2xl p-6 flex flex-col gap-4 font-mono text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-text-muted hover:text-accent-blue transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-2">
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  )
}
