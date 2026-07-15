import { motion } from 'framer-motion'
import { Award, Clock } from 'lucide-react'
import { certifications } from '../data/siteData'

export default function Certifications() {
  return (
    <section id="certifications" className="container-section">
      <p className="section-eyebrow">$ ls certs/</p>
      <h2 className="section-heading">Certifications</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {certifications.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className={`glass-card p-6 ${c.status === 'planned' ? 'opacity-60' : ''}`}
          >
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                c.status === 'earned'
                  ? 'bg-gradient-to-br from-accent-blue to-accent-purple'
                  : 'glass'
              }`}
            >
              {c.status === 'earned' ? (
                <Award size={18} className="text-white" />
              ) : (
                <Clock size={18} className="text-text-dim" />
              )}
            </div>
            <h3 className="font-display font-semibold leading-snug">{c.name}</h3>
            <p className="text-text-dim text-sm mt-1">{c.issuer}</p>
            <span
              className={`inline-block mt-4 text-xs font-mono px-2.5 py-1 rounded-full ${
                c.status === 'earned'
                  ? 'text-accent-green bg-accent-green/10'
                  : 'text-text-dim bg-white/5'
              }`}
            >
              {c.status === 'earned' ? 'Earned' : 'Planned'}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
