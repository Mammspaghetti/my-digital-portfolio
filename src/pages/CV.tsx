import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const experience = [
    {
    period: "2025 — ",
    title: "Techlead et Pilote de projet (Angular/ PHP Laravel)",
    company: "Abylsen Sud",
    description: "Responsable et Techlead des sites de recrutements / cooptation & dossier de compétences pour l'ensemble des marques du groupe HOUSEOFABY",
  },
  {
    period: "2023 — 2025",
    title: "Développeur Full-Stack (Angular / PHP)",
    company: "Abylsen Sud",
    description: "Reprises et développement de du site de recrutement et de l'pplication de dossier de compétences d'Abylsen",
  },
  {
    period: "2021 — 2023",
    title: "Développeur Front-End (Angular)",
    company: "Abylsen Sud",
    description: "Développement d'applications web avec Angular pour l'affichage de données liés au domaine électrique.",
  },
  {
    period: "2020 — 2021",
    title: "Stage en Développement logiciel",
    company: "ThermoFischer",
    description: "Création et développement d'un logiciel de gestion de licences",
  },
];

const education = [
  {
    period: "2020 — 2021",
    title: "Maîtrise en génie électrique",
    school: "Université de Sherbrooke (CANADA)",
    description: "Spécialisation en développement logiciel Java et en web sécurité",
  },
  {
    period: "2015 — 2021",
    title: "Diplôme d'Ingénieur",
    school: "ISEN Toulon (FRANCE)",
    description: "Spécialisation en Domotique et Smart Energy",
  },
];

const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "ViewJS"] },
  { category: "Backend", items: ["Node.js","Express", "Java", "SpringBoot", "PHP", "Django"] },
  { category: "Base de données", items: ["PostgreSQL", "MySQL"] },
  { category: "Outils", items: ["Git", "Docker", "CI/CD", "Linux"] },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function CV() {
  return (
    <div className="min-h-screen bg-grid pt-20">
      <div className="container mx-auto max-w-4xl px-6 py-12">
        {/* Header */}
        <motion.div {...fadeUp} className="mb-12 flex items-center justify-between">
          <div>
            <p className="font-mono text-sm text-primary text-glow">&gt; curriculum_vitae</p>
            <h1 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Mon Parcours
            </h1>
          </div>
          <a href="/CV-Pitis.pdf" download>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Télécharger PDF</span>
            </Button>
          </a>
        </motion.div>

        {/* Experience */}
        <motion.section {...fadeUp} className="mb-12">
          <div className="mb-6 flex items-center gap-2 font-mono text-sm text-primary">
            <Briefcase className="h-4 w-4" />
            <span>Expériences</span>
          </div>
          <div className="space-y-6 border-l-2 border-border pl-6">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-primary bg-background" />
                <p className="font-mono text-xs text-muted-foreground">{exp.period}</p>
                <h3 className="mt-1 font-display text-lg font-semibold text-foreground">{exp.title}</h3>
                <p className="text-sm text-primary">{exp.company}</p>
                <p className="mt-2 text-sm text-muted-foreground">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section {...fadeUp} className="mb-12">
          <div className="mb-6 flex items-center gap-2 font-mono text-sm text-primary">
            <GraduationCap className="h-4 w-4" />
            <span>Formations</span>
          </div>
          <div className="space-y-6 border-l-2 border-border pl-6">
            {education.map((edu, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-accent bg-background" />
                <p className="font-mono text-xs text-muted-foreground">{edu.period}</p>
                <h3 className="mt-1 font-display text-lg font-semibold text-foreground">{edu.title}</h3>
                <p className="text-sm text-accent">{edu.school}</p>
                <p className="mt-2 text-sm text-muted-foreground">{edu.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section {...fadeUp}>
          <div className="mb-6 flex items-center gap-2 font-mono text-sm text-primary">
            <Code className="h-4 w-4" />
            <span>Compétences</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((group) => (
              <div key={group.category} className="rounded-lg border border-border bg-card p-4">
                <h3 className="mb-3 font-mono text-xs font-semibold text-primary">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border bg-secondary px-2 py-1 font-mono text-xs text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
