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

  const current =
    languages.find((l) => l.code === i18n.language) || languages[0];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">

      <div className="container mx-auto flex h-16 items-center justify-between px-6">

        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-2 font-mono text-base sm:text-lg font-semibold text-primary text-glow hover:scale-105 transition-transform"
        >
          <Terminal className="h-5 w-5" />
          <span className="tracking-wide">~/portfolio</span>
        </Link>

        {/* NAV */}
        <div className="flex items-center gap-2 sm:gap-3">

          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  relative flex items-center gap-2 rounded-md px-4 py-2
                  font-mono text-sm sm:text-base transition-all
                  hover:text-primary hover:scale-[1.03]
                  ${
                    isActive
                      ? "text-primary bg-primary/10 border border-primary/30"
                      : "text-muted-foreground"
                  }
                `}
              >
                <item.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            );
          })}

          {/* LANGUE (PLUS PREMIUM) */}
          <div className="relative ml-2">

            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 rounded-full px-4 py-2
                         border border-border text-sm font-mono
                         text-muted-foreground hover:text-primary hover:border-primary/50
                         transition-all"
            >
              <Globe className="h-4 w-4" />
              <span className="hidden sm:inline">{current.flag}</span>
            </button>

            {open && (
              <ul className="absolute right-0 mt-2 w-44 rounded-lg border border-border bg-background shadow-xl overflow-hidden">
                {languages.map((lang) => (
                  <li key={lang.code}>
                    <button
                      onClick={() => changeLang(lang.code)}
                      className="flex items-center gap-2 w-full px-4 py-2 text-left
                                 hover:bg-primary/10 transition-colors"
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