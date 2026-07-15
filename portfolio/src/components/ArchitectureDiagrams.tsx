// Lightweight original SVG diagrams — no external images needed.
// Each returns a self-contained diagram themed to the design tokens.

const nodeStyle = 'fill-[#10152A] stroke-[#3B82F6] stroke-[1.5]'
const labelStyle = 'fill-[#E8ECF7] text-[11px] font-mono'
const arrowStyle = 'stroke-accent-purple stroke-2 fill-none'

function Arrow({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} className={arrowStyle} markerEnd="url(#arrowhead)" />
    </g>
  )
}

function Defs() {
  return (
    <defs>
      <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
        <path d="M0,0 L8,4 L0,8 Z" fill="#A855F7" />
      </marker>
    </defs>
  )
}

function Node({ x, y, w, h, label, sub }: { x: number; y: number; w: number; h: number; label: string; sub?: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={12} className={nodeStyle} />
      <text x={x + w / 2} y={y + h / 2 - (sub ? 6 : 0)} textAnchor="middle" className={labelStyle} fontWeight={600}>
        {label}
      </text>
      {sub && (
        <text x={x + w / 2} y={y + h / 2 + 12} textAnchor="middle" className="fill-[#8A93AB] text-[9px] font-mono">
          {sub}
        </text>
      )}
    </g>
  )
}

export function DockerDiagram() {
  return (
    <svg viewBox="0 0 720 260" className="w-full h-auto">
      <Defs />
      <Node x={20} y={100} w={140} h={60} label="Dockerfile" sub="source" />
      <Arrow x1={160} y1={130} x2={230} y2={130} />
      <Node x={230} y={100} w={140} h={60} label="docker build" sub="image layer" />
      <Arrow x1={370} y1={130} x2={440} y2={130} />
      <Node x={440} y={100} w={140} h={60} label="docker tag" sub="react-app:latest" />
      <Arrow x1={580} y1={130} x2={640} y2={130} />
      <Node x={620} y={100} w={80} h={60} label="Push" sub="→ ECR" />
      <Arrow x1={90} y1={100} x2={90} y2={40} />
      <Node x={20} y={0} w={140} h={40} label="Local Dev" sub="React app" />
      <Arrow x1={660} y1={100} x2={660} y2={200} />
      <Node x={590} y={200} w={140} h={40} label="docker run" sub="container" />
    </svg>
  )
}

export function EksDiagram() {
  return (
    <svg viewBox="0 0 720 300" className="w-full h-auto">
      <Defs />
      <Node x={20} y={20} w={150} h={50} label="React App" sub="containerized" />
      <Arrow x1={170} y1={45} x2={240} y2={45} />
      <Node x={240} y={20} w={150} h={50} label="Amazon ECR" sub="image registry" />
      <Arrow x1={315} y1={70} x2={315} y2={120} />
      <Node x={170} y={120} w={280} h={70} label="Amazon EKS Cluster" sub="managed control plane" />
      <Arrow x1={200} y1={190} x2={200} y2={230} />
      <Arrow x1={440} y1={190} x2={440} y2={230} />
      <Node x={120} y={230} w={140} h={50} label="Pod" sub="Deployment" />
      <Node x={370} y={230} w={140} h={50} label="Pod" sub="Deployment" />
      <Arrow x1={520} y1={155} x2={620} y2={155} />
      <Node x={560} y={20} w={140} h={50} label="CloudWatch" sub="monitoring" />
      <Arrow x1={630} y1={70} x2={630} y2={130} />
      <Node x={560} y={130} w={140} h={60} label="LoadBalancer" sub="public endpoint" />
    </svg>
  )
}

export function CicdDiagram() {
  return (
    <svg viewBox="0 0 760 160" className="w-full h-auto">
      <Defs />
      <Node x={10} y={50} w={130} h={60} label="GitHub" sub="source push" />
      <Arrow x1={140} y1={80} x2={200} y2={80} />
      <Node x={200} y={50} w={130} h={60} label="CodePipeline" sub="orchestration" />
      <Arrow x1={330} y1={80} x2={390} y2={80} />
      <Node x={390} y={50} w={130} h={60} label="CodeBuild" sub="docker build" />
      <Arrow x1={520} y1={80} x2={580} y2={80} />
      <Node x={580} y={50} w={90} h={60} label="ECR" sub="registry" />
      <Arrow x1={670} y1={80} x2={730} y2={80} />
      <Node x={700} y={50} w={50} h={60} label="EKS" sub="" />
    </svg>
  )
}

export function TerraformDiagram() {
  return (
    <svg viewBox="0 0 720 220" className="w-full h-auto">
      <Defs />
      <Node x={20} y={80} w={140} h={60} label="main.tf" sub="root module" />
      <Arrow x1={160} y1={110} x2={230} y2={60} />
      <Arrow x1={160} y1={110} x2={230} y2={110} />
      <Arrow x1={160} y1={110} x2={230} y2={160} />
      <Node x={230} y={30} w={140} h={50} label="VPC Module" sub="networking" />
      <Node x={230} y={90} w={140} h={50} label="Security Groups" sub="firewall rules" />
      <Node x={230} y={150} w={140} h={50} label="Compute Module" sub="EC2 / EKS nodes" />
      <Arrow x1={370} y1={55} x2={440} y2={110} />
      <Arrow x1={370} y1={115} x2={440} y2={110} />
      <Arrow x1={370} y1={175} x2={440} y2={110} />
      <Node x={440} y={80} w={160} h={60} label="terraform apply" sub="AWS infrastructure" />
    </svg>
  )
}

export const diagramComponents: Record<string, () => JSX.Element> = {
  docker: DockerDiagram,
  eks: EksDiagram,
  cicd: CicdDiagram,
  terraform: TerraformDiagram,
}
