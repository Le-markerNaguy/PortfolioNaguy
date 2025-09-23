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
    title: "Gestion de menue restaurant",
    category: "Backend",
    image: "/Capture d'écran 2025-06-10 172904.png",
    tech: ["Next.js", "React", "TypeScript"],
    description: "Application de gestion de menu pour restaurant avec fonctionnalités d'ajout, de modification et de suppression de plats. Interface utilisateur moderne et responsive.",
    demoUrl: "https://restau-frontend.vercel.app/",
    codeUrl: "https://github.com/Le-markerNaguy/restau_backend",
    size: "medium"
  },
  {
    id: 5,
    title: "Portfolio personnel",
    category: "Frontend",
    image: "/capture_Portefolio.png",
    tech: ["Next.js", "React", "TypeScript"],
    description: "Mon portfolio personnel avec présentation de mes projets, compétences et contact. Design moderne et responsive.",
    demoUrl: "https://portfolio-naguy.vercel.app/",
    codeUrl: "https://github.com/Le-markerNaguy/PortfolioNaguy.git",
    size: "medium"
  },
 {
  "id": 6,
  "title": "Application de gestion d'Université",
  "category": "Fullstack",
  "image": "/capture_gestion_Univ.png",
  "tech": [
    "Next.js 15",
    "TypeScript",
    "Tailwind CSS",
    "Zustand",
    "Express.js",
    "Prisma",
    "PostgreSQL",
    "JWT",
    "BCrypt",
    "Nodemailer",
    "Render",
    "Vercel",
    "Supabase"
  ],
  "description": "Plateforme full-stack pour gérer le parcours académique (L1–L3) : rôles (super admin, admin, prof, étudiant), création des formations (années, semestres, UE, modules), saisie/validation des notes, calculs automatiques des moyennes et accès étudiant sécurisé par code + JWT.",
  "demoUrl": "https://univ-frontend.vercel.app/",
  "codeUrl": "https://github.com/Le-markerNaguy/univ_backend",
  "size": "medium"
}
,
]

export const categories = [
  "Tous", 
  "Backend",
  "Fullstack",
  "Frontend"
] as const