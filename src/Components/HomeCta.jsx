import { Link } from 'react-router-dom';
import AnimatedSection from '../Components/AnimatedSection';

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Home?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Get in touch with our design team today to schedule a consultation and start creating the home of your dreams.</p>
          <Link to="/contact" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300 inline-block">
            Contact Us Now
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;