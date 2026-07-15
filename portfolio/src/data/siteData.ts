// ────────────────────────────────────────────────────────────
// Single source of truth for all portfolio content.
// Edit this file to update copy across the whole site.
// ────────────────────────────────────────────────────────────

export const profile = {
  name: 'Abdul Wahid',
  title: 'DevOps Engineer',
  taglines: [
    'DevOps Engineer Intern',
    'Cloud Enthusiast',
    'B.Tech AI Student',
  ],
  intro:
    'I build scalable cloud infrastructure, automate deployments, and develop cloud-native applications using AWS, Docker, Kubernetes, and Terraform.',
  about: [
    'I am Abdul Wahid, currently pursuing B.Tech Computer Science and Engineering (Artificial Intelligence) at Vels University, Chennai (Expected Graduation: 2028).',
    'I completed a 3-month DevOps training program at HCL GUVI where I gained practical experience with AWS, Docker, Kubernetes, Jenkins, Terraform, Linux, Git, and CI/CD automation.',
    'I enjoy building cloud-native applications, automating deployments, managing cloud infrastructure, and continuously learning modern DevOps practices.',
  ],
  location: 'Chennai, Tamil Nadu, India',
  email: 'wahid05250@gmail.com',
  phone: '+91 7200315862',
  github: 'https://github.com/wahid581-git',
  githubUsername: 'wahid581-git',
  linkedin: 'https://www.linkedin.com/in/abdul-wahid-0a0473379/',
  resumeUrl: `${import.meta.env.BASE_URL}resume.pdf`,
}

export type SkillCategory = {
  category: string
  eyebrow: string // terminal-style command tag
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  { category: 'Cloud', eyebrow: '$ aws configure', skills: ['EC2', 'IAM', 'VPC', 'ECR', 'EKS', 'CloudWatch'] },
  { category: 'Containers', eyebrow: '$ docker build', skills: ['Docker'] },
  { category: 'Orchestration', eyebrow: '$ kubectl apply', skills: ['Kubernetes'] },
  { category: 'CI/CD', eyebrow: '$ pipeline run', skills: ['Jenkins', 'AWS CodeBuild', 'AWS CodePipeline'] },
  { category: 'Infrastructure as Code', eyebrow: '$ terraform apply', skills: ['Terraform'] },
  { category: 'Monitoring', eyebrow: '$ tail -f metrics', skills: ['CloudWatch', 'Prometheus', 'Grafana'] },
  { category: 'Version Control', eyebrow: '$ git push', skills: ['Git', 'GitHub'] },
  { category: 'Operating Systems', eyebrow: '$ uname -a', skills: ['Linux', 'Windows'] },
  { category: 'Scripting', eyebrow: '$ bash deploy.sh', skills: ['Bash'] },
]

export type Project = {
  id: string
  title: string
  summary: string
  tech: string[]
  bullets: string[]
  githubUrl: string
  architectureKey: string
}

export const projects: Project[] = [
  {
    id: 'eks-deployment',
    title: 'Cloud Native Application Deployment using AWS EKS',
    summary:
      'Provisioned an Amazon EKS cluster to deploy a containerized React application with full observability.',
    tech: ['AWS', 'Docker', 'Kubernetes', 'Amazon EKS', 'Amazon ECR', 'CloudWatch'],
    bullets: [
      'Provisioned an Amazon EKS cluster for deploying a containerized React application',
      'Containerized the application using Docker',
      'Managed container images using Amazon ECR',
      'Configured Kubernetes Deployments and Services',
      'Exposed the application using a LoadBalancer',
      'Integrated CloudWatch monitoring',
    ],
    githubUrl: 'https://github.com/wahid581-git',
    architectureKey: 'eks',
  },
  {
    id: 'cicd-pipeline',
    title: 'CI/CD Pipeline Automation',
    summary:
      'Built an automated CI/CD pipeline that builds, pushes and deploys container images on every commit.',
    tech: ['AWS CodeBuild', 'AWS CodePipeline', 'Docker', 'GitHub', 'Kubernetes'],
    bullets: [
      'Built an automated CI/CD pipeline using AWS CodeBuild and CodePipeline',
      'Integrated GitHub for source control',
      'Automated Docker image build',
      'Pushed images to Amazon ECR',
      'Automated Kubernetes deployment',
    ],
    githubUrl: 'https://github.com/wahid581-git',
    architectureKey: 'cicd',
  },
  {
    id: 'terraform-infra',
    title: 'Infrastructure Provisioning using Terraform',
    summary:
      'Provisioned AWS infrastructure as reusable, version-controlled Terraform modules.',
    tech: ['Terraform', 'AWS'],
    bullets: [
      'Provisioned AWS infrastructure using Infrastructure as Code',
      'Created reusable Terraform modules',
      'Configured VPC, security groups and networking resources',
      'Implemented Infrastructure as Code best practices',
    ],
    githubUrl: 'https://github.com/wahid581-git',
    architectureKey: 'terraform',
  },
]

export const experience = [
  {
    org: 'HCL GUVI',
    role: 'DevOps Training',
    duration: '3 Months',
    type: 'training' as const,
    topics: [
      'Linux', 'Git', 'Docker', 'Kubernetes', 'Jenkins', 'AWS', 'Terraform', 'CI/CD', 'Prometheus', 'Grafana', 'Shell Scripting',
    ],
  },
  {
    org: 'Vels University',
    role: 'B.Tech, Computer Science & Engineering (Artificial Intelligence)',
    duration: 'Expected Graduation 2028',
    type: 'education' as const,
    topics: [],
  },
]

export type Certification = {
  name: string
  issuer: string
  status: 'earned' | 'planned'
}

export const certifications: Certification[] = [
  { name: 'DevOps Training Certificate', issuer: 'HCL GUVI', status: 'earned' },
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', status: 'planned' },
  { name: 'AWS Solutions Architect Associate', issuer: 'Amazon Web Services', status: 'planned' },
  { name: 'Certified Kubernetes Administrator (CKA)', issuer: 'CNCF / Linux Foundation', status: 'planned' },
  { name: 'Terraform Associate', issuer: 'HashiCorp', status: 'planned' },
]

export const architectureDiagrams = [
  { key: 'docker', title: 'Docker Workflow', description: 'Build → tag → push → run container lifecycle.' },
  { key: 'eks', title: 'AWS EKS Architecture', description: 'React app containerized and served via EKS + LoadBalancer.' },
  { key: 'cicd', title: 'CI/CD Pipeline', description: 'GitHub → CodeBuild → ECR → CodePipeline → Kubernetes.' },
  { key: 'terraform', title: 'Terraform Infrastructure', description: 'IaC modules provisioning VPC, subnets and security groups.' },
]
