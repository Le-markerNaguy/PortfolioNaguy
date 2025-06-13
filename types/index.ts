export interface Project {
  id: number
  title: string
  category: "Backend" | "Fullstack" | "Frontend"
  image: string
  tech: string[]
  description: string
  demoUrl: string
  codeUrl: string
  size: "medium"
}

export interface Skill {
  name: string
  description: string
  details: string[]
  level: string
}

export interface SkillCategory {
  title: string
  icon: string
  color: string
  textColor: string
  skills: Skill[]
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
