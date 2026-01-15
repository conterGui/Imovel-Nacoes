import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/i18n";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt");
  };

  const navItems = [
    { id: "about", label: t.nav.about },
    { id: "details", label: t.nav.details },
    { id: "gallery", label: t.nav.gallery },
    { id: "location", label: t.nav.location },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <>
      {/* Header fixo */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container-wide flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("hero");
            }}
            className={`font-display text-lg font-semibold tracking-tight transition-colors ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            <span className="text-primary">Sandra Semedo</span>
          </a>

          {/* Right side: Language + Hamburger */}
          <div className="flex items-center gap-6">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`text-sm font-medium tracking-wide transition-colors ${
                isOpen
                  ? "text-foreground"
                  : isScrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white hover:text-white"
              }`}
            >
              {language.toUpperCase()}
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`flex flex-col gap-1.5 p-2 transition-colors ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
              aria-label="Menu"
            >
              <span
                className={`hamburger-line ${
                  isOpen ? "rotate-45 translate-y-2 bg-foreground" : ""
                }`}
              />
              <span
                className={`hamburger-line ${
                  isOpen ? "opacity-0 bg-foreground" : ""
                }`}
              />
              <span
                className={`hamburger-line ${
                  isOpen ? "-rotate-45 -translate-y-2 bg-foreground" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="heading-secondary text-foreground hover:text-muted-foreground transition-colors"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: isOpen ? "fade-in 0.4s ease-out forwards" : "none",
                opacity: isOpen ? 1 : 0,
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navigation;
