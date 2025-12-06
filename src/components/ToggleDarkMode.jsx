import { useEffect, useState } from "react";

export default function DarkModeUtility() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) setTheme(localTheme);
    else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    )
      setTheme("dark");
    else setTheme("light");
  }, []);

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") element.classList.add("dark");
    else element.classList.remove("dark");
  }, [theme]);

  const handleThemeMode = () => {
    const element = document.documentElement;
    element.classList.toggle("dark");

    if (
      window.localStorage.getItem("theme") === null ||
      window.localStorage.getItem("theme") === "dark"
    )
      window.localStorage.setItem("theme", "light", {
        sameSite: "strict",
        secure: true,
      });
    else
      window.localStorage.setItem("theme", "dark", {
        sameSite: "strict",
        secure: true,
      });
    window.dispatchEvent(new Event("storage"));
    setTheme(window.localStorage.getItem("theme"));
    window.dispatchEvent(new Event("themechange"));
  };

  return (
    <button
      className="relative p-2 rounded-lg bg-secondary dark:bg-dk-secondary hover:bg-border dark:hover:bg-dk-border transition-all duration-300 group"
      onClick={handleThemeMode}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {/* Sun Icon - Light Mode */}
      <svg
        className={`w-5 h-5 text-text-secondary dark:text-dk-text-secondary transition-all duration-300 ${
          theme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>

      {/* Moon Icon - Dark Mode */}
      <svg
        className={`absolute top-2 left-2 w-5 h-5 text-text-secondary dark:text-dk-text-secondary transition-all duration-300 ${
          theme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </button>
  );
}
