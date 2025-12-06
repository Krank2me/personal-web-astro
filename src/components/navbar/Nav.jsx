import { useState } from "react";
import { info } from "../../data/info";
import ToggleDarkMode from "../ToggleDarkMode";
import Hamburger from "./Hamburger";

export default function Nav({ posts }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Tech Community", href: "/#tech" },
    { name: "Blog", href: "/#blog" },
    { name: "Contact", href: "/#contact" },
  ];

  const extractInitials = (name) => {
    const names = name.split(" ");
    let initials = "";
    names.forEach((name) => {
      initials += name.charAt(0);
    });
    return initials;
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/80 dark:bg-dk-surface/80 backdrop-blur-md border-b border-border dark:border-dk-border">
        <div className="container mx-auto">
          <div className="flex justify-between items-center h-16">
            <a
              className="font-bold text-xl lg:text-2xl text-text dark:text-dk-text hover:text-accent dark:hover:text-dk-accent transition-colors"
              href="/#"
            >
              Frank Betancur
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <ul className="flex text-text-secondary dark:text-dk-text-secondary text-base font-medium">
                {navLinks.map((link, index) => (
                  <li
                    key={`nav-desktop-${link.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    <a
                      href={link.href}
                      className="px-4 py-2 hover:text-accent dark:hover:text-dk-accent transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <ToggleDarkMode />
              <a
                href={info.cv}
                download
                className="btn btn-secondary flex items-center gap-2"
              >
                <i className="fas fa-download text-sm"></i>
                <span className="font-medium">Download CV</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-4">
              <a
                href={info.cv}
                download
                className="btn btn-secondary sm:hidden flex items-center gap-2"
              >
                <i className="fas fa-download text-sm"></i>
              </a>
              <Hamburger
                onClick={() => setIsNavOpen(!isNavOpen)}
                isNavOpen={isNavOpen}
              />
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`${
            !isNavOpen ? "hidden" : "block"
          } bg-surface/95 dark:bg-dk-surface/95 backdrop-blur-md border-b border-border dark:border-dk-border lg:hidden`}
        >
          <ul className="container mx-auto py-4 text-text-secondary dark:text-dk-text-secondary text-base font-medium">
            {navLinks.map((link, index) => (
              <li
                key={`nav-mobile-${link.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="py-3"
              >
                <a
                  href={link.href}
                  onClick={() => setIsNavOpen(false)}
                  className="block hover:text-accent dark:hover:text-dk-accent transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="py-3 flex items-center justify-between">
              <span>Theme</span>
              <ToggleDarkMode />
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isNavOpen && (
        <div
          className="fixed inset-0 bg-black/20 dark:bg-black/40 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsNavOpen(false)}
        ></div>
      )}
    </>
  );
}
