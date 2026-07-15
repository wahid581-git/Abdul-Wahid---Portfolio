import { motion } from 'framer-motion'
import { skillCategories } from '../data/siteData'

export default function Skills() {
  return (
    <section id="skills" className="container-section">
      <p className="section-eyebrow">$ cat skills.yaml</p>
      <h2 className="section-heading">Skills</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="glass-card p-6"
          >
            <p className="font-mono text-xs text-accent-green">{cat.eyebrow}</p>
            <h3 className="font-display font-semibold text-lg mt-2 mb-4">{cat.category}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
