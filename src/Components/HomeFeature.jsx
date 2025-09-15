import AnimatedSection from '../Components/AnimatedSection';

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose DecorHome</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to helping you create the home of your dreams with our expert design services and inspiration.
            </p>
          </AnimatedSection>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <AnimatedSection delay="100">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Designers</h3>
              <p className="text-gray-600">Our team of experienced designers will help you bring your vision to life.</p>
            </div>
          </AnimatedSection>
          
          {/* Card 2 */}
          <AnimatedSection delay="200">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Affordable Solutions</h3>
              <p className="text-gray-600">Quality design services that fit within your budget without compromising style.</p>
            </div>
          </AnimatedSection>
          
          {/* Card 3 */}
          <AnimatedSection delay="300">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Award Winning</h3>
              <p className="text-gray-600">Recognized for excellence in interior design and customer satisfaction.</p>
            </div>
          </AnimatedSection>

          {/* Card 4 */}
          <AnimatedSection delay="400">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Turnaround</h3>
              <p className="text-gray-600">We deliver projects quickly without compromising on quality and detail.</p>
            </div>
          </AnimatedSection>

          {/* Card 5 */}
          <AnimatedSection delay="500">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Eco-Friendly Designs</h3>
              <p className="text-gray-600">Sustainable and eco-conscious design solutions for a greener future.</p>
            </div>
          </AnimatedSection>

          {/* Card 6 */}
          <AnimatedSection delay="600">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Customer Support</h3>
              <p className="text-gray-600">We’re here to guide you every step of the way, even after project completion.</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
