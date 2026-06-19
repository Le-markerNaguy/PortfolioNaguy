import type { Project } from "@/types"

export const projects: Project[] = [
  {
    id: 2,
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
    id: 3,
    title: "Application de gestion d'Université",
    category: "Backend",
    image: "/capture_gestion_Univ.png",
    tech: [
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
    description: "Plateforme full-stack pour gérer le parcours académique (L1–L3) : rôles (super admin, admin, prof, étudiant), création des formations (années, semestres, UE, modules), saisie/validation des notes, calculs automatiques des moyennes et accès étudiant sécurisé par code + JWT.",
    demoUrl: "https://univ-frontend.vercel.app/",
    codeUrl: "https://github.com/Le-markerNaguy/univ_backend",
    size: "medium"
  },
  {
    id: 4,
    title: "Dashboard",
    category: "Frontend",
    image: "/dashboard.png",
    tech: ["Next.js", "React", "TypeScript"],
    description: "Application dashboard avec authentification et interface d'administration.",
    demoUrl: "https://dashboard-t-six.vercel.app/auth/login",
    codeUrl: "https://github.com/Le-markerNaguy/DashboardT.git",
    size: "medium"
  },
  {
    id: 7,
    title: "Presse Républicaine News",
    category: "Fullstack",
    image: "/lapresserepublicainenews.png",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    description: "Média digital panafricain indépendant couvrant l'actualité du Gabon, d'Afrique et du monde. Plateforme d'information avec catégories (Politique, Environnement, Énergie, Culture, Sport), système de newsletter et interface responsive.",
    demoUrl: "https://www.lapresserepublicainenews.com/",
    codeUrl: "",
    size: "medium"
  },
]

export const categories = [
  "Tous", 
  "Backend",
  "Fullstack",
  "Frontend"
] as const
