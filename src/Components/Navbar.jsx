import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-600 flex items-center">
          <span className="mr-2">🏠</span> DecorHome
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 font-medium">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 font-medium">About</Link>
          <Link to="/blogs" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 font-medium">Blogs</Link>
          <Link to="/contact" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 font-medium">Contact</Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-3">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 font-medium" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 font-medium" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/blogs" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 font-medium" onClick={() => setMobileMenuOpen(false)}>Blogs</Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;