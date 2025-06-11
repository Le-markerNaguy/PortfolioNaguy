import type { Project } from "@/types"

export const projects: Project[] = [
  {
    id: 1,
    title: "API E-commerce Complète",
    category: "Fullstack",
    image: "/Capture d'écran 2025-06-10 171839.png",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    description: "API REST sécurisée avec authentification et paiements",
    demoUrl: "https://todo-liste-kui1.vercel.app/",
    codeUrl: "https://github.com/Le-markerNaguy/TodoListe.git",
    size: "large",
  },
  {
    id: 2,
    title: "Microservices Architecture",
    category: "Fullstack",
    image: "/Capture d'écran 2025-06-10 171630.png",
    tech: ["Node.js", "Docker", "Redis", "PostgreSQL"],
    description: "Architecture microservices scalable",
    demoUrl: "https://anniversaire-6xa3.vercel.app/",
    codeUrl: "https://github.com/Le-markerNaguy/anniversaire.git",
    size: "medium",
  },
  {
    id: 3,
    title: "Dashboard Admin React",
    category: "Frontend",
    image: "/Capture d'écran 2025-06-10 172904.png",
    tech: ["React", "Next.js", "Tailwind"],
    description: "Interface d'administration moderne",
    demoUrl: "https://gab-9.vercel.app/",
    codeUrl: "https://github.com/Le-markerNaguy/GAB9.git",
    size: "medium",
  },
  {
    id: 4,
    title: "API GraphQL",
    category: "Backend",
    image: "/placeholder.svg?height=320&width=300",
    tech: ["GraphQL", "Apollo", "Node.js", "Prisma"],
    description: "API GraphQL performante et flexible",
    demoUrl: "#",
    codeUrl: "#",
    size: "tall",
  }
]

export const categories = ["Tous", "Backend", "Frontend", "Fullstack"] as const
