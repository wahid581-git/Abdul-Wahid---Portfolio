import { Github, Linkedin, Mail, Terminal } from 'lucide-react'
import { profile } from '../data/siteData'

const quickLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border-glass mt-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 py-12 grid sm:grid-cols-3 gap-10">
        <div>
          <a href="#top" className="flex items-center gap-2 font-display font-semibold text-lg">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center">
              <Terminal size={16} className="text-white" />
            </span>
            <span className="gradient-text">{profile.name}</span>
          </a>
          <p className="text-text-dim text-sm mt-3 max-w-xs leading-relaxed">{profile.intro}</p>
        </div>

        <div>
          <p className="font-mono text-xs text-text-dim mb-3">Quick Links</p>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-text-muted text-sm hover:text-accent-blue transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs text-text-dim mb-3">Elsewhere</p>
          <div className="flex gap-3">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-text-muted hover:text-accent-blue transition-colors">
              <Github size={16} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-text-muted hover:text-accent-blue transition-colors">
              <Linkedin size={16} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-text-muted hover:text-accent-blue transition-colors">
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border-glass py-6 text-center">
        <p className="text-text-dim text-xs font-mono">
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
