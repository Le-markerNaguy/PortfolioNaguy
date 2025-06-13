import type { Project } from "@/types"

export const projects: Project[] = [
  {
    id: 1,
    title: "Gestion de tâches",
    category: "Backend",
    image: "/Capture d'écran 2025-06-10 171839.png",
    tech: ["Node.js", "Express"],
    description: "Application de todo-list avec authentification sécurisée (JWT, bcrypt). Permet l'inscription, la connexion et la gestion des tâches utilisateur. Stack: Next.js 14, Prisma, PostgreSQL, Tailwind CSS.",
    demoUrl: "https://todo-liste-kui1.vercel.app/",
    codeUrl: "https://github.com/Le-markerNaguy/TodoListe.git",
    size: "medium"
  },
  {
    id: 2,
    title: "Inscription anniversaire",
    category: "Backend",
    image: "/Capture d'écran 2025-06-10 171630.png",
    tech: ["Node.js", "Express", "Prisma", "PostgreSQL"],
    description: "Inscription anniversaire et reception d'email de confirmation avec code de participation. Features: formulaire de demande, notifications email, dashboard admin (validation des demandes, stats), sécurisé avec JWT et bcrypt. Stack: Next.js 14, Prisma, PostgreSQL, Tailwind CSS.",
    demoUrl: "https://anniversaire-6xa3.vercel.app/",
    codeUrl: "https://github.com/Le-markerNaguy/anniversaire.git",
    size: "medium"
  },
  {
    id: 4,
    title: "Landing page politique",
    category: "Frontend",
    image: "/Capture d'écran 2025-06-10 172904.png",
    tech: ["Next.js", "React", "TypeScript"],
    description: "Site vitrine politique responsive avec design moderne. Optimisé SEO et gestion de contenu dynamique pour mobilisation citoyenne.",
    demoUrl: "https://projet-gabon-9.vercel.app/",
    codeUrl: "https://github.com/Le-markerNaguy/projetGABON9.git",
    size: "medium"
  }
]

export const categories = [
  "Tous", 
  "Backend",
  "Fullstack",
  "Frontend"
] as const