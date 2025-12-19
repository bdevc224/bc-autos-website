import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import FadeSlideUnderlineLink from "./FadeSlideUnderlineLink";
import DarkModeToggle from "./DarkModeToggle";
import useDarkMode from "../Hooks/useDarkMode";

interface NavLink {
  to: string;
  label: string;
}

const Navbar: React.FC = () => {
  const [theme] = useDarkMode();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isDark, setIsDark] = useState<boolean>(false);

  // Determine if dark mode is active
  useEffect(() => {
    const checkDarkMode = () => {
      const root = document.documentElement;
      setIsDark(root.classList.contains("dark"));
    };

    checkDarkMode();
    
    // Listen for class changes on the root element
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          checkDarkMode();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    
    return () => observer.disconnect();
  }, [theme]);

  // close mobile menu on scroll or resize
  useEffect(() => {
    const handleScrollOrResize = () => setMenuOpen(false);
    
    window.addEventListener("scroll", handleScrollOrResize);
    window.addEventListener("resize", handleScrollOrResize);
    
    return () => {
      window.removeEventListener("scroll", handleScrollOrResize);
      window.removeEventListener("resize", handleScrollOrResize);
    };
  }, []);

  const links: NavLink[] = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "services", label: "Services" },
    { to: "contact", label: "Contact" },
  ];

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (to: string) => {
    setActiveSection(to);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-3xl font-heading font-extrabold tracking-wide text-blue-600 dark:text-blue-600">
          BC Autos
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 font-body">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              spy={true}
              smooth={true}
              duration={600}
              offset={-80}
              onSetActive={() => setActiveSection(to)}
            >
              <FadeSlideUnderlineLink
                color={isDark ? "white" : "black"}
                hoverColor="red"
                center
                active={activeSection === to}
                className="text-lg font-medium"
              >
                {label}
              </FadeSlideUnderlineLink>
            </Link>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-4">
          <DarkModeToggle />
          
          <button
            className="md:hidden text-black cursor-pointer dark:text-white text-2xl p-2"
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-white dark:bg-gray-900 shadow-lg">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              spy={true}
              smooth={true}
              duration={600}
              offset={-80}
              onSetActive={() => setActiveSection(to)}
              onClick={() => handleLinkClick(to)}
            >
              <FadeSlideUnderlineLink
                color={isDark ? "white" : "black"}
                hoverColor="red"
                center
                active={activeSection === to}
                className="text-lg font-semibold"
              >
                {label}
              </FadeSlideUnderlineLink>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;