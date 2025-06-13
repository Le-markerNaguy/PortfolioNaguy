export const skillsData = {
  frontend: {
    title: "Développement Frontend",
    icon: "FE",
    color: "from-[#BEE0FD] to-[#A0C8F8]",
    textColor: "text-[#BEE0FD]",
    skills: [
      {
        name: "Création d'Interfaces Utilisateur (UI)",
        description: "Je conçois des interfaces utilisateur intuitives et réactives, en mettant l'accent sur l'expérience utilisateur (UX) et l'accessibilité. Mes compétences incluent :",
        details: [
          "Design Responsive : Utilisation de CSS Flexbox et Grid pour créer des mises en page adaptatives",
          "Animations Fluides : Application de transitions CSS et d'animations JavaScript",
          "Thématisation Dynamique : Mise en place de systèmes de thèmes personnalisables"
        ],
        projects: [
          "Application de gestion de tâches",
          "Site web de portfolio",
          "Tableau de bord d'administration"
        ]
      },
      {
        name: "Intégration d'APIs REST",
        description: "Je connecte les interfaces utilisateur aux services backend via des APIs REST.",
        details: [
          "Requêtes HTTP : Utilisation de Fetch API pour les requêtes GET, POST, PUT, DELETE",
          "Gestion des Erreurs : Traitement des réponses d'erreur (404, 500)",
          "Optimisation : Mise en cache et pagination pour améliorer les performances"
        ],
        projects: [
          "Application de gestion de tâches",
          "Plateforme d'inscription anniversaire"
        ]
      }
    ]
  },
  backend: {
    title: "Développement Backend",
    icon: "BE",
    color: "from-[#FED4BE] to-[#F8B8A0]",
    textColor: "text-[#FED4BE]",
    skills: [
      {
        name: "Développement d'APIs REST",
        description: "Je conçois et bâtis des APIs REST robustes et performantes, agissant comme le cœur de la communication entre les applications. Mon expertise inclut :",
        details: [
          "Gestion Complète du Cycle de Vie des Données : Maîtrise des opérations CRUD (Créer, Lire, Mettre à jour, Supprimer) pour une manipulation efficace et sécurisée des informations.",
          "Fiabilité et Résilience : Implémentation d'une gestion avancée des erreurs (404, 500, validation des données) pour garantir la stabilité et la disponibilité de l'API.",
          "Évolutivité : Mise en place de versioning d'API (ex: v1/, v2/) pour permettre des évolutions sans impacter les applications existantes."
        ],
        projects: [
          "Système de gestion de tâches",
          "Plateforme d'inscription anniversaire"
        ]
      },
      {
        name: "Gestion de Bases de Données (NoSQL & MySQL)",
        description: "Je suis spécialisé dans la conception et l'implémentation de solutions de stockage de données fiables et optimisées, essentielles à toute application moderne.",
        details: [
          "Conception de Bases de Données Relationnelles (MySQL) : Je modélise des schémas normalisés, définis des tables, des clés primaires/étrangères et des index, tout en assurant l'intégrité des données par des contraintes rigoureuses."
        ]
      },
      {
        name: "Authentification et Sécurité",
        description: "Je construis des systèmes d'authentification et d'accès hautement sécurisés, garantissant la protection des données utilisateurs et la résilience face aux menaces.",
        details: [
          "Tokens JWT Sécurisés : Implémentation de l'authentification par JWT (JSON Web Tokens) avec des 'refresh tokens' pour une gestion sécurisée et fluide des sessions utilisateurs.",
          "Protection des Mots de Passe : Utilisation de l'algorithme de hachage bcrypt (salt rounds: 12) pour stocker les mots de passe de manière irréversible et prévenir les fuites de données sensibles."
        ]
      }
    ]
  }
}