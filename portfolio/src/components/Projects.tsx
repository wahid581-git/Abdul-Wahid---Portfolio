import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, LayoutGrid } from 'lucide-react'
import { projects } from '../data/siteData'

const FILTERS = ['All', 'AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform']

function matchesFilter(techs: string[], filter: string) {
  if (filter === 'All') return true
  if (filter === 'CI/CD') {
    return techs.some((t) => /CodeBuild|CodePipeline|Jenkins|CI\/CD/i.test(t))
  }
  return techs.some((t) => t.toLowerCase().includes(filter.toLowerCase()))
}

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const filtered = useMemo(
    () => projects.filter((p) => matchesFilter(p.tech, filter)),
    [filter],
  )

  return (
    <section id="projects" className="container-section">
      <p className="section-eyebrow">$ ls -la projects/</p>
      <h2 className="section-heading">Featured Projects</h2>

      <div className="flex flex-wrap gap-2 mt-6 mb-10">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm font-mono transition-all duration-200 border ${
              filter === f
                ? 'bg-gradient-to-r from-accent-blue to-accent-purple text-white border-transparent'
                : 'glass text-text-muted border-border-glass hover:text-accent-blue'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.article
              key={p.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass-card p-6 flex flex-col"
            >
              <h3 className="font-display font-semibold text-lg leading-snug">{p.title}</h3>
              <p className="text-text-muted text-sm mt-3 leading-relaxed">{p.summary}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>

              <ul className="mt-4 space-y-1.5 text-sm text-text-muted flex-1">
                {p.bullets.slice(0, 3).map((b, bi) => (
                  <li key={bi} className="flex gap-2">
                    <span className="text-accent-blue mt-1">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-3 mt-6 pt-4 border-t border-border-glass">
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-sm font-mono text-text-muted hover:text-accent-blue transition-colors"
                >
                  <Github size={15} /> Repo
                </a>
                <a
                  href="#architecture"
                  className="flex items-center gap-1.5 text-sm font-mono text-text-muted hover:text-accent-purple transition-colors"
                >
                  <LayoutGrid size={15} /> Architecture
                </a>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}
