"use client";

import { useSyncExternalStore } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

type Theme = "light" | "dark";

const subscribe = (callback: () => void) => {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
};

const getSnapshot = (): Theme =>
  document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";

const getServerSnapshot = (): Theme => "dark";

const ThemeToggle = ({ className = "" }: { className?: string }) => {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    if (next === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    try {
      localStorage.setItem("theme", next);
    } catch {
      // localStorage unavailable (private browsing, etc.) — theme just won't persist
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      className={`flex h-9 w-9 items-center justify-center rounded-md border border-hairline text-lo transition-colors duration-200 hover:border-copper hover:text-copper ${className}`}
    >
      {theme === "light" ? <FiMoon size={16} /> : <FiSun size={16} />}
    </button>
  );
};

export default ThemeToggle;
