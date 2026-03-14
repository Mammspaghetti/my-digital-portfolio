import { motion } from "framer-motion";
import { Download, Github, Globe, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Portfolio SpaghettiSite (React)",
    description:
      "Portfolio interactif présentant mes mini-projets et applis, développé avec React, Tailwind et Framer Motion.",
    tags: ["React", "TypeScript", "TailwindCSS", "Framer Motion", "Portfolio"],
    linkUrl: "https://mammspaghetti.github.io/my-digital-portfolio/",
    githubUrl: "https://github.com/Mammspaghetti/my-digital-portfolio",
    info: 'Création d\'un portfolio avec React. Design généré avec <a href="https://lovable.dev/" target="_blank">Lovable</a>.',
    color: "terminal-green",
  },
  {
    title: "Pacific Sound System (Java)",
    description:
      "Lecteur de playlists de musiques/sons prédéfinis dans un dossier assets avec Java Swing.",
    tags: ["Java (21)", "JRE-21", "Swing", "Eclipse"],
    downloadUrl: "/downloads/PacificSoundSystem.jar",
    githubUrl: "https://github.com/Mammspaghetti/GPSoundSystem",
    info: "Application desktop Java Swing capable de lire des fichiers WAV stockés dans un dossier assets.",
    color: "terminal-yellow",
  },
  {
    title: "API REST (NodeJS)",
    description: "Créer une API qui centralise et expose des informations provenant d’une API publique, afin de les rendre facilement accessibles et manipulables.",
    tags: ["NodeJS", "NestJS", "Swagger", "Render (hébergement)", "TypeScript"],
    githubUrl: "https://github.com/Mammspaghetti/SpaghettiCountries", // ton repo
    linkUrl: "https://spaghetticountries.onrender.com/api", // lien direct vers Swagger / API
    info: "Projet en cours de développement, exposé sur Render.",
    color: "terminal-pink",
  },
  {
    title: "TODO (Python)",
    description: "API complète avec Flask/Django, authentification JWT et base PostgreSQL.",
    tags: ["Python", "Flask", "PostgreSQL"],
    // liveUrl: "#",
    // githubUrl: "#",
    color: "terminal-blue",
  },
  {
    title: "Module de traduction pour SpaghettiSite (Work in Progress)",
    description: "Développement d'un module de traduction Anglais/Français/Italien pour ce site en React",
    tags: ["React", "Node"],
    // liveUrl: "#",
    // githubUrl: "#",
    info : '',
    color: "terminal-green",
  },
  {
    title: "CatFight (Work in Progress)",
    description: "Phase de Combat en tour par tour (Pokémon Like)",
    tags: ["Java (11)", "JavaX", "AWT"],
    downloadUrl: "",
    githubUrl: "https://github.com/Mammspaghetti/CatFight",
    info: "",
    color: "terminal-yellow",
  },
  {
    title: "SpaghettiCountries Map Interractive (NodeJS)",
    description: "Réutilise API REST SpaghettiCountries pour afficher une carte avec les pays chargé par le back ci-dessus",
    tags: ['React', 'Leaflet', 'NodeJS'],
    githubUrl: "", // ton repo
    linkUrl: "#/map", // lien direct vers Swagger / API
    info: "Phase de combat tour par tour entre 2 chats",
    color: "terminal-pink",
  },
  // {
  //   title: "CLI Tool en Rust",
  //   description: "Outil en ligne de commande performant pour le traitement de fichiers.",
  //   tags: ["Rust", "CLI"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   color: "terminal-pink",
  // },
  // {
  //   title: "App Mobile React Native",
  //   description: "Application mobile cross-platform avec navigation et state management.",
  //   tags: ["React Native", "TypeScript", "Expo"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   color: "terminal-blue",
  // },
  // {
  //   title: "Dashboard Vue.js",
  //   description: "Tableau de bord interactif avec graphiques et données en temps réel.",
  //   tags: ["Vue.js", "D3.js", "WebSocket"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   color: "terminal-green",
  // },
  // {
  //   title: "Microservices Go",
  //   description: "Architecture microservices avec Docker, gRPC et message queues.",
  //   tags: ["Go", "Docker", "gRPC"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   color: "terminal-yellow",
  // },
  // {
  //   title: "Game Engine C++",
  //   description: "Petit moteur de jeu 2D avec rendu OpenGL et système ECS.",
  //   tags: ["C++", "OpenGL", "ECS"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   color: "terminal-pink",
  // },
];

const colorClasses = {
  "terminal-green": "border-terminal-green/30 hover:border-terminal-green/60",
  "terminal-yellow": "border-terminal-yellow/30 hover:border-terminal-yellow/60",
  "terminal-blue": "border-terminal-blue/30 hover:border-terminal-blue/60",
  "terminal-pink": "border-terminal-pink/30 hover:border-terminal-pink/60",
};

const dotColorClasses = {
  "terminal-green": "bg-terminal-green",
  "terminal-yellow": "bg-terminal-yellow",
  "terminal-blue": "bg-terminal-blue",
  "terminal-pink": "bg-terminal-pink",
};

export default function Projets() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <div className="min-h-screen bg-grid pt-20">
      <div className="container mx-auto max-w-1xl px-3 py-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="font-mono text-sm text-primary text-glow">
            &gt; ls ./projets
          </p>

          <h1 className="mt-2 font-display text-3xl font-bold">
            Mini-Projets
          </h1>

          <p className="mt-3 max-w-lg text-muted-foreground">
            Une sélection de projets dans différents langages et technologies.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-4">

          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className={`rounded-lg border bg-card p-5 flex flex-col ${colorClasses[project.color]}`}
            >
              {/* Header + title */}
              <div className="mb-3 flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${dotColorClasses[project.color]}`} />
                <h3 className="font-mono text-sm font-semibold">{project.title}</h3>
              </div>

              {/* Description */}
              <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>

              {/* Tags */}
              <div className="mb-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded border px-1.5 py-0.5 text-[10px]">
                    {tag}
                  </span>
                ))}
              </div>

              {/* BOUTONS - toujours en bas */}
              <div className="mt-auto flex gap-2">
                {project.linkUrl && (
                  <Button size="sm" variant="outline" asChild>
                    {project.linkUrl.startsWith("http") ? (
                      <a href={project.linkUrl} target="_blank" className="flex items-center gap-1">
                        <Globe className="h-3 w-3" />
                        Lien
                      </a>
                    ) : (
                      <Link to={project.linkUrl} className="flex items-center gap-1">
                        <Globe className="h-3 w-3" />
                        Lien
                      </Link>
                    )}
                  </Button>
                )}
                {project.downloadUrl && (
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.downloadUrl} target="_blank" className="flex items-center gap-1">
                      <Download className="h-3 w-3" />
                      Download
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" className="flex items-center gap-1">
                      <Github className="h-3 w-3" />
                      Code
                    </a>
                  </Button>
                )}
                {project.info && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1"
                  >
                    <Info className="h-4 w-4" />
                    Info
                  </Button>
                )}
              </div>
            </motion.div>
          ))}

        </div>

        {/* POPUP INFO */}
        {selectedProject && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
            <div className="bg-card p-6 rounded-lg max-w-md relative">
              <button
                className="absolute top-2 right-2"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>
              <h3 className="text-lg font-bold mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-sm mb-2">
                {selectedProject.description}
              </p>
              <p className="text-xs mb-3">
                Tags: {selectedProject.tags.join(", ")}
              </p>
              {selectedProject.info && (
                <div
                  className="text-xs"
                  dangerouslySetInnerHTML={{
                    __html: selectedProject.info,
                  }}
                />
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}