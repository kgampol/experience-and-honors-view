import { FC } from 'react';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  // Scroll smoothly to the top of the page
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-portfolio-dark text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <button
            onClick={handleBackToTop}
            className="px-6 py-2 bg-portfolio-primary text-white rounded-md hover:bg-portfolio-secondary transition-colors shadow-md"
            aria-label="Back to top"
          >
            ↑ Back to Top
          </button>
          
          <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400 w-full">
            <p>© {currentYear} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
