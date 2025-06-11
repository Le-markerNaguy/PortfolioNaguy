import type { Project } from "@/types"

export const projects: Project[] = [
  {
    id: 1,
    title: "API REST avec MongoDB",
    category: "Backend",
    image: "/Capture d'écran 2025-06-10 171839.png",
    tech: ["Node.js", "Express"],
    description:
     "" ,
    demoUrl: "https://todo-liste-kui1.vercel.app/",
    codeUrl: "https://github.com/Le-markerNaguy/TodoListe.git",

    size: "medium",
  },
  {
    id: 2,
    title: "API avec Prisma ORM",
    category: "Backend",
    image: "/Capture d'écran 2025-06-10 171630.png",
    tech: ["Node.js", "Express", "Prisma", "PostgreSQL"],
    description:
      "API moderne utilisant Prisma ORM pour la gestion de base de données PostgreSQL. Type-safety complète avec TypeScript, migrations automatiques, requêtes optimisées et interface d'administration Prisma Studio intégrée. Modélisation avancée des relations entre entités.",
    demoUrl: "https://anniversaire-6xa3.vercel.app/",
    codeUrl: "https://github.com/Le-markerNaguy/anniversaire.git",
    size: "medium",
  },
  {
    id: 3,
    title: "API d'Authentification JWT",
    category: "Fullstack",
    image: "/Capture d'écran 2025-06-10 172904.png",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "bcrypt"],
    description:
      "Système d'authentification complet avec JWT (JSON Web Tokens). Fonctionnalités d'inscription et connexion sécurisées, protection des routes avec middleware d'authentification, hashage des mots de passe avec bcrypt et gestion des sessions utilisateur avec stockage sécurisé des tokens.",

    demoUrl: "https://gab-9.vercel.app/",
    codeUrl: "https://github.com/Le-markerNaguy/GAB9.git",
    size: "medium",
  },
  {
    id: 4,
    title: "Système de Gestion de Fichiers",
    category: "Backend",
    image: "/placeholder.svg?height=300&width=300",
    tech: ["Node.js", "Express", "Multer", "MongoDB"],
    description:
      "Serveur backend spécialisé dans l'upload et la gestion de fichiers avec stockage des métadonnées en base MongoDB. Validation des types de fichiers, limitation de taille configurable, organisation en collections et système de récupération optimisée avec gestion des permissions.",
    demoUrl: "https://file-manager-naguy.herokuapp.com",
    codeUrl: "https://github.com/naguy/file-manager",
    size: "medium",
  }
]

export const categories = ["Tous", "Backend", "Fullstack", "Frontend"] as const
