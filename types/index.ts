export interface Project {
  id: number
  title: string
  category: "Backend" | "Frontend" | "Fullstack"
  image: string
  tech: string[]
  description: string
  demoUrl: string
  codeUrl: string
  size: "large" | "medium" | "small" | "tall"
}

export interface Skill {
  name: string
  category: "Backend" | "Frontend" | "DevOps"
}

export interface TimelineItem {
  year: string
  title: string
  description: string
}

export interface SocialLink {
  icon: any
  href: string
  color: string
}
