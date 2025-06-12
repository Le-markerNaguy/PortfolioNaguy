import type { Project } from "@/types"

export const projects: Project[] = [
  {
    id: 1,
    title: "Gestion de tache",
    category: "Backend",
    image: "/Capture d'écran 2025-06-10 171839.png",
    tech: ["Node.js", "Express"],
    description:
     "Site de gestion des tâches.Système d'authentification complet avec JWT (JSON Web Tokens). Fonctionnalités d'inscription et connexion sécurisées, hashage des mots de passe avec bcrypt et gestion des sessions utilisateur avec stockage sécurisé des tokens." ,
    demoUrl: "https://todo-liste-kui1.vercel.app/",
    codeUrl: "https://github.com/Le-markerNaguy/TodoListe.git",
    size: "medium",
  },
  {
    id: 2,
    title: "Inscription anniversaire",
    category: "Backend",
    image: "/Capture d'écran 2025-06-10 171630.png",
    tech: ["Node.js", "Express", "Prisma", "PostgreSQL"],
    description:
      "Site d'inscription à un anniversaire avec envoie d'email de participation ,API moderne utilisant Prisma ORM pour la gestion de base de données PostgreSQL.",
    demoUrl: "https://anniversaire-6xa3.vercel.app/",
    codeUrl: "https://github.com/Le-markerNaguy/anniversaire.git",
    size: "medium",
  },
  {
    id: 4,
    title: "Landing page Gabon",
    category: "Frontend",
    image: "/Capture d'écran 2025-06-10 172904.png",
    tech: ["Node.js", "Express", "Multer", "MongoDB"],
    description:
      "Landing page d'une Révolution politique",
    demoUrl: "https://projet-gabon-9.vercel.app/",
    codeUrl: "https://github.com/Le-markerNaguy/projetGABON9.git",
    size: "medium",
  }
]

export const categories = ["Tous", "Backend", "Fullstack", "Frontend"] as const
