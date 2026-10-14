import { useEffect, useState } from "react";
import Navbar from "./components/Navbar"
import Hero from "./section/Hero"
import Skills from "./components/ٍskillst";
import Contact from "./section/Contact";
export type Theme = "dark" | "light";

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "dark" || savedTheme === "light") {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-[#09090f] dark:text-white">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero />
          <Skills />
          <Contact/>
      </main>
    </div>
  );
}

export default App;