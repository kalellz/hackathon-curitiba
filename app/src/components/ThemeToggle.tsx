"use client";

import { useCallback, useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

const STORAGE_KEY = "escola-theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  const applyTheme = useCallback((value: Theme) => {
    if (typeof window === "undefined") return;
    const root = window.document.documentElement;
    if (value === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored ?? (prefersDark ? "dark" : "light");
    setTheme(initial);
    applyTheme(initial);
    setMounted(true);
  }, [applyTheme]);

  const toggleTheme = () => {
    if (!mounted) return;
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    if (typeof window !== "undefined") {
      applyTheme(next);
      window.localStorage.setItem(STORAGE_KEY, next);
    }
  };

  const iconClass = "h-4 w-4";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-foreground shadow-sm transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      aria-label="Alternar tema"
      title="Alternar tema"
    >
      {theme === "dark" ? <Sun className={iconClass} /> : <Moon className={iconClass} />}
      <span>{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}

