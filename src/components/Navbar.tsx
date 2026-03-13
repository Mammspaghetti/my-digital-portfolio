import { Link, useLocation } from "react-router-dom";
import { Terminal, FileText, FolderGit2, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export function Navbar() {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const languages = [
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "it", name: "Italiano", flag: "🇮🇹" },
  ];

  const navItems = [
    { path: "/", label: t("navbar.home"), icon: Terminal },
    { path: "/cv", label: t("navbar.cv"), icon: FileText },
    { path: "/projets", label: t("navbar.projects"), icon: FolderGit2 },
  ];

  const changeLang = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem("lang", code);
    setOpen(false);
  };

  const current = languages.find((l) => l.code === i18n.language) || languages[0];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-14 items-center justify-between px-6">
        <Link
          to="/"
          className="flex items-center gap-2 font-mono text-sm font-semibold text-primary text-glow"
        >
          <Terminal className="h-5 w-5" />
          <span>~/portfolio</span>
        </Link>

        <div className="flex items-center gap-3 relative">
          {/* Nav Items */}
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative flex items-center gap-2 rounded-md px-3 py-2 font-mono text-xs transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
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

          {/* Sélecteur de langue comme nav item */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="relative flex items-center gap-1 rounded-md px-3 py-2 font-mono text-xs border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
            >
              <Globe className="h-4 w-4" />
              <span className="hidden sm:inline">{t("navbar.language")}</span>
              <span className="ml-1">{current.flag}</span>
            </button>

            {open && (
              <ul className="absolute right-0 mt-1 w-36 rounded border border-border bg-background shadow-lg z-50">
                {languages.map((lang) => (
                  <li key={lang.code}>
                    <button
                      onClick={() => changeLang(lang.code)}
                      className="flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-primary/10"
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}