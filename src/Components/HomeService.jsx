import AnimatedSection from '../Components/AnimatedSection';

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We offer a comprehensive range of interior design services to meet all your home decor needs.</p>
          </AnimatedSection>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatedSection delay="100">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-indigo-600 text-3xl mb-4">🛋️</div>
              <h3 className="text-xl font-bold mb-2">Interior Design</h3>
              <p className="text-gray-600">Complete interior design solutions for every room in your home.</p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay="200">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-indigo-600 text-3xl mb-4">🏡</div>
              <h3 className="text-xl font-bold mb-2">Home Staging</h3>
              <p className="text-gray-600">Prepare your home for sale with our professional staging services.</p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay="300">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-indigo-600 text-3xl mb-4">🔨</div>
              <h3 className="text-xl font-bold mb-2">Renovation</h3>
              <p className="text-gray-600">Transform your space with our renovation and remodeling services.</p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay="400">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-indigo-600 text-3xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-2">Consultation</h3>
              <p className="text-gray-600">Get expert advice and guidance for your DIY decorating projects.</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;