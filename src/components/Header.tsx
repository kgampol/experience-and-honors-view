import { useState, useEffect, useRef } from "react";
import MobileMenu from "./MobileMenu";
import { scrollToSection } from "../utils/scrollUtils";
import { createPortal } from "react-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolledPastEducation, setScrolledPastEducation] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    console.log('Mobile menu toggled:', !mobileMenuOpen);
  };

  const openDropdown = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };
  const closeDropdown = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  // Handle scroll to show/hide header content
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isMobile = window.innerWidth < 768; // md breakpoint in Tailwind is 768px
      
      // For mobile: Show name and image after education section
      const educationSection = document.getElementById('education');
      if (educationSection) {
        const educationPosition = educationSection.getBoundingClientRect().top;
        setScrolledPastEducation(educationPosition < 100);
      }
      
      // Desktop behavior - hide header when scrolling down
      if (!isMobile) {
        // We're now specifically checking if it's not mobile
        if (currentScrollY > 100) {
          // Lower threshold to make it hide sooner
          setHeaderVisible(false);
        } else {
          // Only show at the very top of the page
          setHeaderVisible(true);
        }
      } else {
        // On mobile, always keep header visible
        setHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Handle resize events to check for mobile/desktop
    window.addEventListener('resize', handleScroll);
    
    // Run once on mount to set initial state
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Handle clicks outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node) &&
        linkRef.current && 
        !linkRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Determine classes based on current state
  const headerClasses = `w-full bg-white/90 backdrop-blur-sm shadow-sm fixed top-0 left-0 right-0 z-[9990] transition-transform duration-300 ${
    headerVisible ? 'translate-y-0' : '-translate-y-full md:-translate-y-full'
  }`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className={`flex items-center transition-opacity duration-300 ${scrolledPastEducation ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
          <div className="w-10 h-10 md:hidden rounded-full overflow-hidden border-2 border-portfolio-light shadow-md mr-3">
            <img 
              src="/Pics/1716181236423.jpg" 
              alt="Daniel Lewis" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-2xl md:text-4xl text-portfolio-dark font-bold">Daniel Lewis</div>
        </div>
        <nav className="hidden md:flex space-x-10 items-center text-lg md:text-xl">
          <div className="relative">
            <a
              ref={linkRef}
              href="#"
              className="text-portfolio-dark hover:text-portfolio-primary transition-colors font-normal px-2 focus:outline-none cursor-pointer"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
              style={{ fontWeight: 400 }} // Ensure not bold
            >
              Experience
            </a>
            {dropdownOpen && createPortal(
              <div
                ref={dropdownRef}
                className="absolute left-0 z-[9999] bg-white border rounded shadow-md min-w-[180px] py-1 force-pointer-events"
                style={{ 
                  top: `${linkRef.current?.getBoundingClientRect().bottom ?? 0}px`,
                  left: `${linkRef.current?.getBoundingClientRect().left ?? 0}px`,
                  position: 'absolute',
                  pointerEvents: "auto"
                }}
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <a
                  href="#work"
                  className="block w-full text-left px-4 py-3 text-portfolio-dark hover:bg-portfolio-light transition-colors cursor-pointer"
                  style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('work');
                    setDropdownOpen(false);
                  }}
                >
                  Work Experience
                </a>
                <a
                  href="#teachingExperiences"
                  className="block w-full text-left px-4 py-3 text-portfolio-dark hover:bg-portfolio-light transition-colors cursor-pointer"
                  style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('teaching');
                    setDropdownOpen(false);
                  }}
                >
                  Teaching Experience
                </a>
                <a
                  href="#research"
                  className="block w-full text-left px-4 py-3 text-portfolio-dark hover:bg-portfolio-light transition-colors cursor-pointer"
                  style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('research');
                    setDropdownOpen(false);
                  }}
                >
                  Research Experience
                </a>
              </div>,
              document.body
            )}
          </div>
          {/*
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
          */}
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
          className={`md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none ${mobileMenuOpen ? 'hamburger-active' : ''}`}
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
