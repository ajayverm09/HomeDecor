import { Link } from 'react-router-dom';
import AnimatedSection from '../Components/AnimatedSection';

const HeroSection = () => {
  return (
    <section className="relative text-white py-20 md:py-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg"
          alt="Home Interior"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/80 to-purple-600/40 z-0"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Home into a Beautiful Sanctuary
            </h1>
            <p className="text-xl mb-8">
              Discover the latest trends in home decor and interior design to create a space that reflects your unique style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/blogs"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300 text-center"
              >
                Explore Our Blog
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-indigo-600 transition-colors duration-300 text-center"
              >
                Get a Consultation
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
