import { useEffect, useState } from 'react'

type Line = { prompt: string; output?: string; color?: string }

const SCRIPT: Line[] = [
  { prompt: 'docker build -t react-app:latest .', output: '✔ Image built successfully' },
  { prompt: 'docker tag react-app:latest $ECR_URI/react-app', output: '✔ Tagged for Amazon ECR' },
  { prompt: 'eksctl create cluster --name prod-cluster', output: '✔ EKS cluster provisioned' },
  { prompt: 'kubectl apply -f deployment.yaml', output: 'deployment.apps/react-app created' },
  { prompt: 'kubectl apply -f service.yaml', output: 'service/react-app-lb created' },
  { prompt: 'terraform apply -auto-approve', output: '✔ Apply complete! 12 resources added' },
  { prompt: 'kubectl get pods -n production', output: 'react-app-7d4f  1/1  Running' },
]

const TYPE_SPEED = 32
const LINE_PAUSE = 550
const CYCLE_PAUSE = 2200

export default function TerminalWindow() {
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [phase, setPhase] = useState<'typing' | 'output' | 'pause'>('typing')
  const [history, setHistory] = useState<Line[]>([])

  useEffect(() => {
    const current = SCRIPT[lineIndex]

    if (phase === 'typing') {
      if (charIndex < current.prompt.length) {
        const t = setTimeout(() => setCharIndex((c) => c + 1), TYPE_SPEED)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => setPhase('output'), LINE_PAUSE)
      return () => clearTimeout(t)
    }

    if (phase === 'output') {
      const t = setTimeout(() => {
        setHistory((h) => [...h, current])
        setPhase('pause')
      }, 400)
      return () => clearTimeout(t)
    }

    if (phase === 'pause') {
      const isLast = lineIndex === SCRIPT.length - 1
      const t = setTimeout(
        () => {
          if (isLast) {
            setHistory([])
            setLineIndex(0)
          } else {
            setLineIndex((i) => i + 1)
          }
          setCharIndex(0)
          setPhase('typing')
        },
        isLast ? CYCLE_PAUSE : 250,
      )
      return () => clearTimeout(t)
    }
  }, [phase, charIndex, lineIndex])

  const currentPrompt = SCRIPT[lineIndex].prompt.slice(0, charIndex)

  return (
    <div className="glass-card w-full max-w-lg font-mono text-sm overflow-hidden shadow-2xl">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border-glass bg-white/[0.02]">
        <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
        <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
        <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
        <span className="ml-3 text-text-dim text-xs">deploy.sh — zsh</span>
      </div>
      <div className="p-5 h-64 overflow-hidden flex flex-col justify-end gap-1.5">
        {history.map((l, i) => (
          <div key={i}>
            <p className="text-text-muted">
              <span className="text-accent-green">➜</span> <span className="text-accent-cyan">~</span> {l.prompt}
            </p>
            {l.output && <p className="text-text-dim pl-4">{l.output}</p>}
          </div>
        ))}
        <p className="text-text-muted">
          <span className="text-accent-green">➜</span> <span className="text-accent-cyan">~</span>{' '}
          {currentPrompt}
          <span className="inline-block w-2 h-4 bg-accent-blue ml-0.5 animate-blink align-middle" />
        </p>
      </div>
    </div>
  )
}
