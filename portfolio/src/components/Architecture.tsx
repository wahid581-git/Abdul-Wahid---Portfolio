import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Maximize2 } from 'lucide-react'
import { architectureDiagrams } from '../data/siteData'
import { diagramComponents } from './ArchitectureDiagrams'

export default function Architecture() {
  const [active, setActive] = useState<string | null>(null)
  const activeDiagram = architectureDiagrams.find((d) => d.key === active)
  const ActiveComponent = active ? diagramComponents[active] : null

  return (
    <section id="architecture" className="container-section">
      <p className="section-eyebrow">$ terraform graph</p>
      <h2 className="section-heading">Architecture Diagrams</h2>
      <p className="text-text-muted max-w-2xl">
        Visual breakdown of the systems behind each project. Click any diagram to expand.
      </p>

      <div className="grid sm:grid-cols-2 gap-6 mt-10">
        {architectureDiagrams.map((d, i) => {
          const Diagram = diagramComponents[d.key]
          return (
            <motion.button
              key={d.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              onClick={() => setActive(d.key)}
              className="glass-card p-5 text-left group relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-text-dim group-hover:text-accent-blue transition-colors">
                <Maximize2 size={16} />
              </div>
              <div className="bg-black/20 rounded-xl p-4 mb-4">
                <Diagram />
              </div>
              <h3 className="font-display font-semibold">{d.title}</h3>
              <p className="text-text-dim text-sm mt-1">{d.description}</p>
            </motion.button>
          )
        })}
      </div>

      <AnimatePresence>
        {active && ActiveComponent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/70 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card max-w-3xl w-full p-8 relative"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute top-5 right-5 text-text-muted hover:text-accent-blue"
              >
                <X size={20} />
              </button>
              <h3 className="font-display font-semibold text-xl mb-1">{activeDiagram?.title}</h3>
              <p className="text-text-dim text-sm mb-6">{activeDiagram?.description}</p>
              <div className="bg-black/20 rounded-xl p-6">
                <ActiveComponent />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
