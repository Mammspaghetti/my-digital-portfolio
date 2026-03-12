import { Link, useLocation } from "react-router-dom";
import { Terminal, FileText, Code2, FolderGit2 } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { path: "/", label: "Accueil", icon: Terminal },
  { path: "/cv", label: "CV", icon: FileText },
  { path: "/projets", label: "Projets", icon: FolderGit2 },
];

export function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-14 items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 font-mono text-sm font-semibold text-primary text-glow">
          <Code2 className="h-5 w-5" />
          <span>~/portfolio</span>
        </Link>

        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative flex items-center gap-2 rounded-md px-3 py-2 font-mono text-xs transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-md border border-primary/30 bg-primary/10"
                    transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
