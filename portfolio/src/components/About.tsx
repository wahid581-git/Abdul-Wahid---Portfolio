import { motion } from 'framer-motion'
import { profile } from '../data/siteData'
import AnimatedCounter from './AnimatedCounter'

const stats = [
  { value: 3, suffix: '', label: 'Months DevOps Training' },
  { value: 12, suffix: '+', label: 'Tools & Technologies' },
  { value: 3, suffix: '', label: 'Cloud Projects Built' },
  { value: 2028, suffix: '', label: 'Expected Graduation' },
]

export default function About() {
  return (
    <section id="about" className="container-section">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-eyebrow"
      >
        $ cat about.md
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="section-heading"
      >
        About Me
      </motion.h2>

      <div className="grid lg:grid-cols-5 gap-12 mt-8 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-3 space-y-5"
        >
          {profile.about.map((para, i) => (
            <p key={i} className="text-text-muted leading-relaxed text-lg">
              {para}
            </p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 grid grid-cols-2 gap-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="glass-card p-6 text-center">
              <AnimatedCounter value={s.value} suffix={s.suffix} />
              <p className="text-text-dim text-xs font-mono mt-2 leading-snug">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
