import type { Project } from "@/types"

export const projects: Project[] = [
  {
    id: 1,
    title: "Gestion de tâches",
    category: "Fullstack",
    image: "/Capture d'écran 2025-06-10 171839.png",
    tech: ["Next.js"],
    description: "Application de todo-list avec authentification sécurisée (JWT, bcrypt). Permet l'inscription, la connexion et la gestion des tâches utilisateur. Stack: Next.js 14, Prisma, PostgreSQL, Tailwind CSS.",
    demoUrl: "https://todo-liste-kui1.vercel.app/",
    codeUrl: "https://github.com/Le-markerNaguy/TodoListe.git",
    size: "medium"
  },
  {
    id: 4,
    title: "Gestion de menue restaurant",
    category: "Fullstack",
    image: "/RestauOpti.png",
    tech: ["Next.js", "React", "TypeScript","Express"],
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
  "category": "Backend",
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
},
 {
    id: 7,
    title: "Portfolio personnel",
    category: "Frontend",
    image: "/dashboard.png",
    tech: ["Next.js", "React", "TypeScript"],
    description: "Mon portfolio personnel avec présentation de mes projets, compétences et contact. Design moderne et responsive.",
    demoUrl: "https://dashboard-t-six.vercel.app/auth/login",
    codeUrl: "https://github.com/Le-markerNaguy/DashboardT.git",
    size: "medium"
  },

]

export const categories = [
  "Tous", 
  "Backend",
  "Fullstack",
  "Frontend"
] as const
