import { motion } from "framer-motion";
import { ExternalLink, Github, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "API REST Python",
    description: "API complète avec Flask/Django, authentification JWT et base PostgreSQL.",
    tags: ["Python", "Flask", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    color: "terminal-yellow",
  },
  {
    title: "CLI Tool en Rust",
    description: "Outil en ligne de commande performant pour le traitement de fichiers.",
    tags: ["Rust", "CLI"],
    liveUrl: "#",
    githubUrl: "#",
    color: "terminal-pink",
  },
  {
    title: "App Mobile React Native",
    description: "Application mobile cross-platform avec navigation et state management.",
    tags: ["React Native", "TypeScript", "Expo"],
    liveUrl: "#",
    githubUrl: "#",
    color: "terminal-blue",
  },
  {
    title: "Dashboard Vue.js",
    description: "Tableau de bord interactif avec graphiques et données en temps réel.",
    tags: ["Vue.js", "D3.js", "WebSocket"],
    liveUrl: "#",
    githubUrl: "#",
    color: "terminal-green",
  },
  {
    title: "Microservices Go",
    description: "Architecture microservices avec Docker, gRPC et message queues.",
    tags: ["Go", "Docker", "gRPC"],
    liveUrl: "#",
    githubUrl: "#",
    color: "terminal-yellow",
  },
  {
    title: "Game Engine C++",
    description: "Petit moteur de jeu 2D avec rendu OpenGL et système ECS.",
    tags: ["C++", "OpenGL", "ECS"],
    liveUrl: "#",
    githubUrl: "#",
    color: "terminal-pink",
  },
];

const colorClasses: Record<string, string> = {
  "terminal-green": "border-terminal-green/30 hover:border-terminal-green/60",
  "terminal-yellow": "border-terminal-yellow/30 hover:border-terminal-yellow/60",
  "terminal-blue": "border-terminal-blue/30 hover:border-terminal-blue/60",
  "terminal-pink": "border-terminal-pink/30 hover:border-terminal-pink/60",
};

const dotColorClasses: Record<string, string> = {
  "terminal-green": "bg-terminal-green",
  "terminal-yellow": "bg-terminal-yellow",
  "terminal-blue": "bg-terminal-blue",
  "terminal-pink": "bg-terminal-pink",
};

export default function Projets() {
  return (
    <div className="min-h-screen bg-grid pt-20">
      <div className="container mx-auto max-w-5xl px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="font-mono text-sm text-primary text-glow">&gt; ls ./projets</p>
          <h1 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Mini-Projets
          </h1>
          <p className="mt-3 max-w-lg text-muted-foreground">
            Une sélection de projets dans différents langages et technologies. Cliquez pour voir les démos déployées.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className={`group rounded-lg border bg-card p-5 transition-all duration-300 ${colorClasses[project.color]}`}
            >
              <div className="mb-3 flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${dotColorClasses[project.color]}`} />
                <h3 className="font-mono text-sm font-semibold text-foreground">{project.title}</h3>
              </div>

              <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>

              <div className="mb-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-border bg-secondary px-1.5 py-0.5 font-mono text-[10px] text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild className="h-8 gap-1.5 text-xs">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Globe className="h-3 w-3" /> Demo
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild className="h-8 gap-1.5 text-xs">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-3 w-3" /> Code
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
