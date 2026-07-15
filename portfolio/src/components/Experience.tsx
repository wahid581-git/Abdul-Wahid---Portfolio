import { motion } from 'framer-motion'
import { GraduationCap, Terminal } from 'lucide-react'
import { experience } from '../data/siteData'

export default function Experience() {
  return (
    <section id="experience" className="container-section">
      <p className="section-eyebrow">$ git log --oneline</p>
      <h2 className="section-heading">Experience &amp; Education</h2>

      <div className="relative mt-12 pl-8 sm:pl-10">
        <div className="absolute left-[9px] sm:left-[13px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-blue via-accent-purple to-transparent" />

        <div className="space-y-10">
          {experience.map((item, i) => (
            <motion.div
              key={item.org}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-8 sm:-left-10 top-1 w-5 h-5 rounded-full bg-bg border-2 border-accent-blue flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-accent-blue" />
              </span>

              <div className="glass-card p-6">
                <div className="flex items-center gap-2 mb-1">
                  {item.type === 'education' ? (
                    <GraduationCap size={16} className="text-accent-purple" />
                  ) : (
                    <Terminal size={16} className="text-accent-blue" />
                  )}
                  <span className="font-mono text-xs text-text-dim">{item.duration}</span>
                </div>
                <h3 className="font-display font-semibold text-lg">{item.org}</h3>
                <p className="text-text-muted text-sm mt-1">{item.role}</p>
                {item.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.topics.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
