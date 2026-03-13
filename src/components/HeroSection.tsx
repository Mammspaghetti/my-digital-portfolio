import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const codeLines = [
  { prefix: "const", keyword: " developer", op: " = {" },
  { prefix: "  name:", value: ' "Guillaume PITIS",' },
  { prefix: "  title:", value: ' "Développeur Full-Stack",' },
  { prefix: "  mail:", value: ' "gpitis@hotmail.fr",' },
  { prefix: "  passions:", value: ' ["code", "innovation", "open-source"],' },
  { prefix: "  available:", value: " true," },
  { prefix: "}", op: ";" },
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-grid">
      {/* Gradient orbs */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-6 pt-14">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <p className="font-mono text-sm text-primary text-glow">
              &gt; Bienvenue sur mon portfolio
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Je construis des
              <br />
              <span className="text-primary text-glow">expériences</span>
              <br />
              numériques.
            </h1>
            <p className="max-w-md text-lg text-muted-foreground">
              Développeur passionné, je crée des applications web modernes et performantes. Explorez mon CV et mes projets.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button asChild className="gap-2 border-glow">
                <Link to="/cv">
                  Voir mon CV <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild className="gap-2">
                <Link to="/projets">Mes projets</Link>
              </Button>
            </div>

            <div className="flex gap-4 pt-2">
              {[
                { icon: Github, href: "https://github.com/Mammspaghetti/my-digital-portfolio", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/guillaume-pitis-a49692188/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:gpitis@hotmail.fr", label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="rounded-md border border-border p-2 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Code block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="rounded-lg border border-border bg-card p-6 font-mono text-sm shadow-2xl">
              {/* Window dots */}
              <div className="mb-4 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-destructive/70" />
                <span className="h-3 w-3 rounded-full bg-terminal-yellow/70" />
                <span className="h-3 w-3 rounded-full bg-terminal-green/70" />
              </div>

              <div className="space-y-1">
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                    className="flex"
                  >
                    <span className="mr-4 select-none text-muted-foreground/50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="text-terminal-pink">{line.prefix}</span>
                      {line.keyword && <span className="text-terminal-blue">{line.keyword}</span>}
                      {line.value && <span className="text-terminal-green">{line.value}</span>}
                      {line.op && <span className="text-foreground">{line.op}</span>}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
