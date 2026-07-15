import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { GitFork, Star, BookOpen } from 'lucide-react'
import { profile } from '../data/siteData'

type Repo = {
  id: number
  name: string
  html_url: string
  description: string | null
  stargazers_count: number
  forks_count: number
  language: string | null
}

export default function GithubStats() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [status, setStatus] = useState<'loading' | 'ok' | 'error'>('loading')

  useEffect(() => {
    fetch(`https://api.github.com/users/${profile.githubUsername}/repos?sort=updated&per_page=6`)
      .then((res) => {
        if (!res.ok) throw new Error('GitHub API error')
        return res.json()
      })
      .then((data) => {
        setRepos(Array.isArray(data) ? data : [])
        setStatus('ok')
      })
      .catch(() => setStatus('error'))
  }, [])

  return (
    <section id="github" className="container-section">
      <p className="section-eyebrow">$ curl api.github.com/users/{profile.githubUsername}</p>
      <h2 className="section-heading">GitHub Activity</h2>

      <div className="grid lg:grid-cols-2 gap-5 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-4 overflow-hidden"
        >
          <img
            loading="lazy"
            src={`https://github-readme-stats.vercel.app/api?username=${profile.githubUsername}&show_icons=true&theme=transparent&hide_border=true&title_color=A855F7&icon_color=3B82F6&text_color=8A93AB`}
            alt="GitHub stats"
            className="w-full h-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="glass-card p-4 overflow-hidden"
        >
          <img
            loading="lazy"
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${profile.githubUsername}&layout=compact&theme=transparent&hide_border=true&title_color=A855F7&text_color=8A93AB`}
            alt="Top languages"
            className="w-full h-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.14 }}
          className="glass-card p-4 overflow-hidden"
        >
          <img
            loading="lazy"
            src={`https://streak-stats.demolab.com?user=${profile.githubUsername}&theme=transparent&hide_border=true&ring=3B82F6&fire=A855F7&currStreakLabel=E8ECF7`}
            alt="GitHub streak stats"
            className="w-full h-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card p-4 overflow-hidden flex items-center justify-center"
        >
          <img
            loading="lazy"
            src={`https://ghchart.rshah.org/3B82F6/${profile.githubUsername}`}
            alt="GitHub contribution graph"
            className="w-full h-auto"
          />
        </motion.div>
      </div>

      <h3 className="font-display font-semibold text-xl mt-14 mb-6">Recent Repositories</h3>
      {status === 'error' && (
        <p className="text-text-dim text-sm font-mono">Couldn't load live repos right now — check back later.</p>
      )}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {repos.map((r, i) => (
          <motion.a
            key={r.id}
            href={r.html_url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="glass-card p-5 block"
          >
            <div className="flex items-center gap-2 text-accent-blue mb-2">
              <BookOpen size={15} />
              <span className="font-mono text-sm truncate">{r.name}</span>
            </div>
            <p className="text-text-dim text-sm line-clamp-2 h-10">
              {r.description || 'No description provided.'}
            </p>
            <div className="flex items-center gap-4 mt-4 text-text-dim text-xs font-mono">
              {r.language && <span>{r.language}</span>}
              <span className="flex items-center gap-1">
                <Star size={12} /> {r.stargazers_count}
              </span>
              <span className="flex items-center gap-1">
                <GitFork size={12} /> {r.forks_count}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
