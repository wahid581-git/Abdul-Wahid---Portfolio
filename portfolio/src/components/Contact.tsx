import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Send, Loader2, CheckCircle2 } from 'lucide-react'
import { profile } from '../data/siteData'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    // Wire this up to EmailJS: https://www.emailjs.com/docs/sdk/send/
    // 1. npm install @emailjs/browser
    // 2. import emailjs from '@emailjs/browser'
    // 3. emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, PUBLIC_KEY)
    try {
      await new Promise((res) => setTimeout(res, 900)) // placeholder — replace with real EmailJS call
      setStatus('sent')
      e.currentTarget.reset()
    } catch {
      setStatus('error')
    }
  }

  const info = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: MapPin, label: 'Location', value: profile.location, href: undefined },
  ]

  return (
    <section id="contact" className="container-section">
      <p className="section-eyebrow">$ mail -s "hello" abdul</p>
      <h2 className="section-heading">Let's Connect</h2>
      <p className="text-text-muted max-w-xl">
        Open to DevOps internship opportunities and collaborations. Reach out — I usually reply within a day.
      </p>

      <div className="grid lg:grid-cols-5 gap-8 mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-4"
        >
          {info.map((item) => {
            const Icon = item.icon
            const content = (
              <div className="glass-card p-5 flex items-center gap-4">
                <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center text-accent-blue shrink-0">
                  <Icon size={17} />
                </span>
                <div className="min-w-0">
                  <p className="text-text-dim text-xs font-mono">{item.label}</p>
                  <p className="text-text-primary text-sm truncate">{item.value}</p>
                </div>
              </div>
            )
            return item.href ? (
              <a key={item.label} href={item.href}>
                {content}
              </a>
            ) : (
              <div key={item.label}>{content}</div>
            )
          })}

          <div className="flex gap-3 pt-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-11 h-11 rounded-xl glass flex items-center justify-center text-text-muted hover:text-accent-blue transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 rounded-xl glass flex items-center justify-center text-text-muted hover:text-accent-blue transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          onSubmit={handleSubmit}
          className="lg:col-span-3 glass-card p-7 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="text-xs font-mono text-text-dim">
                Name
              </label>
              <input
                id="name"
                name="user_name"
                required
                className="w-full mt-1.5 bg-white/[0.03] border border-border-glass rounded-lg px-4 py-2.5 text-sm outline-none focus:border-accent-blue transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs font-mono text-text-dim">
                Email
              </label>
              <input
                id="email"
                name="user_email"
                type="email"
                required
                className="w-full mt-1.5 bg-white/[0.03] border border-border-glass rounded-lg px-4 py-2.5 text-sm outline-none focus:border-accent-blue transition-colors"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="text-xs font-mono text-text-dim">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              required
              className="w-full mt-1.5 bg-white/[0.03] border border-border-glass rounded-lg px-4 py-2.5 text-sm outline-none focus:border-accent-blue transition-colors"
              placeholder="Internship opportunity"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-xs font-mono text-text-dim">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full mt-1.5 bg-white/[0.03] border border-border-glass rounded-lg px-4 py-2.5 text-sm outline-none focus:border-accent-blue transition-colors resize-none"
              placeholder="Tell me a bit about the opportunity..."
            />
          </div>
          <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center disabled:opacity-60">
            {status === 'sending' && <Loader2 size={16} className="animate-spin" />}
            {status === 'sent' && <CheckCircle2 size={16} />}
            {status === 'idle' && <Send size={16} />}
            {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Message Sent' : 'Send Message'}
          </button>
          {status === 'error' && (
            <p className="text-red-400 text-xs font-mono">Something went wrong — try again shortly.</p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
