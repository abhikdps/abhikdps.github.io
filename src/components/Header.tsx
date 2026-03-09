import { useEffect, useState } from "react";
import "./Header.css";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container header-content">
        <a href="#" className="logo">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">abhikdps</span>
          <span className="logo-bracket">/&gt;</span>
        </a>

        <nav className={`nav ${isMobileMenuOpen ? "open" : ""}`}>
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-item"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="nav-number">0{index + 1}.</span>
              {item.label}
            </a>
          ))}
          <a
            href="/Abhinav's-Resume-2024.pdf"
            className="btn btn-outline nav-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </nav>

        <button
          className={`mobile-toggle ${isMobileMenuOpen ? "active" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
