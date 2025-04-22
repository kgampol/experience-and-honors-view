
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { scrollToSection } from "../utils/scrollUtils";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleExperienceClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection('work');
    setDropdownOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl text-portfolio-dark font-bold">Interactive Portfolio</div>
        <nav className="hidden md:flex space-x-8 items-center">
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <a
              href="#work"
              className="text-portfolio-dark hover:text-portfolio-primary transition-colors font-normal px-2 focus:outline-none"
              onClick={handleExperienceClick}
              style={{ fontWeight: 400 }} // Ensure not bold
            >
              Experience
            </a>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 z-50 bg-white border rounded shadow-md min-w-[180px]">
                <button
                  className="block w-full text-left px-4 py-2 text-portfolio-dark hover:bg-portfolio-light"
                  onClick={() => {
                    scrollToSection('work');
                    setDropdownOpen(false);
                  }}
                >
                  Work Experience
                </button>
                <button
                  className="block w-full text-left px-4 py-2 text-portfolio-dark hover:bg-portfolio-light"
                  onClick={() => {
                    scrollToSection('teaching');
                    setDropdownOpen(false);
                  }}
                >
                  Teaching Experience
                </button>
                <button
                  className="block w-full text-left px-4 py-2 text-portfolio-dark hover:bg-portfolio-light"
                  onClick={() => {
                    scrollToSection('research');
                    setDropdownOpen(false);
                  }}
                >
                  Research Experience
                </button>
              </div>
            )}
          </div>
          <a
            href="#honors"
            className="text-portfolio-dark hover:text-portfolio-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('honors');
            }}
          >
            Honors & Awards
          </a>
          <a
            href="#projects"
            className="text-portfolio-dark hover:text-portfolio-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
          >
            Personal Projects
          </a>
          <a
            href="#contact"
            className="text-portfolio-dark hover:text-portfolio-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            Contact
          </a>
        </nav>
        <button
          className={`md:hidden flex flex-col justify-center items-center space-y-1.5 focus:outline-none ${mobileMenuOpen ? 'hamburger-active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
};

export default Header;
