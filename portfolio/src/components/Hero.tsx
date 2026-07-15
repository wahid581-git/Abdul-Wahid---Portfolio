import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/siteData'
import TerminalWindow from './TerminalWindow'

function useTypedTaglines(taglines: string[]) {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = taglines[index % taglines.length]
    const speed = deleting ? 35 : 65
    const t = setTimeout(() => {
      if (!deleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1))
        } else {
          setTimeout(() => setDeleting(true), 1200)
        }
      } else {
        if (text.length > 0) {
          setText(current.slice(0, text.length - 1))
        } else {
          setDeleting(false)
          setIndex((i) => i + 1)
        }
      }
    }, speed)
    return () => clearTimeout(t)
  }, [text, deleting, index, taglines])

  return text
}

export default function Hero() {
  const typed = useTypedTaglines(profile.taglines)

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16"
    >
      {/* Background: grid + floating network nodes */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,black,transparent)]" />
      <div className="absolute top-24 left-[8%] w-2 h-2 rounded-full bg-accent-blue animate-float" />
      <div className="absolute top-1/2 right-[12%] w-3 h-3 rounded-full bg-accent-purple animate-float-delayed" />
      <div className="absolute bottom-24 left-[20%] w-1.5 h-1.5 rounded-full bg-accent-cyan animate-float" />
      <div className="absolute top-1/3 right-[30%] w-1.5 h-1.5 rounded-full bg-accent-blue/70 animate-float-delayed" />
      <div className="absolute -top-40 -right-40 w-[32rem] h-[32rem] rounded-full bg-accent-purple/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[32rem] h-[32rem] rounded-full bg-accent-blue/10 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6 sm:px-8 relative grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-eyebrow">$ whoami</p>
          <h1 className="text-4xl sm:text-6xl font-display font-semibold mt-3 leading-tight">
            {profile.name}
          </h1>
          <div className="h-8 mt-3">
            <p className="font-mono text-lg sm:text-xl text-accent-blue">
              {typed}
              <span className="inline-block w-2 h-5 bg-accent-purple ml-1 animate-blink align-middle" />
            </p>
          </div>
          <p className="mt-6 text-text-muted text-lg max-w-xl leading-relaxed">
            {profile.intro}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href={profile.resumeUrl} download className="btn-primary">
              <Download size={17} /> Download Resume
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn-secondary">
              <Github size={17} /> View GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-secondary">
              <Linkedin size={17} /> LinkedIn
            </a>
            <a href="#contact" className="btn-secondary">
              <Mail size={17} /> Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <TerminalWindow />
        </motion.div>
      </div>
    </section>
  )
}
