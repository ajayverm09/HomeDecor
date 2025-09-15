import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="mr-2">🏠</span> DecorHome
            </h3>
            <p className="text-gray-400">Transforming spaces into beautiful homes since 2010.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300">About</Link></li>
              <li><Link to="/blogs" className="text-gray-400 hover:text-white transition-colors duration-300">Blogs</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Interior Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Home Staging</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Renovation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Consultation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <span className="mr-2">📍</span> 123 Decor Street, Design City
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span> (123) 456-7890
              </li>
              <li className="flex items-center">
                <span className="mr-2">✉️</span> info@decorhome.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DecorHome. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;