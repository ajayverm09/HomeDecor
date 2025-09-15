import AnimatedSection from '../Components/AnimatedSection';

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Don't just take our word for it - hear from homeowners who have transformed their spaces with DecorHome.</p>
          </AnimatedSection>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedSection delay="100">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400">
                  {'★'.repeat(5)}
                </div>
              </div>
              <p className="text-gray-600 mb-4">"Working with DecorHome was an absolute pleasure. They transformed our outdated living room into a modern, functional space that we absolutely love."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                  <span className="text-indigo-600 font-bold">JD</span>
                </div>
                <div>
                  <h4 className="font-bold">Jane Doe</h4>
                  <p className="text-gray-500 text-sm">New York</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay="200">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400">
                  {'★'.repeat(5)}
                </div>
              </div>
              <p className="text-gray-600 mb-4">"The team at DecorHome has an incredible eye for detail. They helped us create a cohesive design throughout our home that perfectly reflects our style."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                  <span className="text-indigo-600 font-bold">MS</span>
                </div>
                <div>
                  <h4 className="font-bold">Michael Smith</h4>
                  <p className="text-gray-500 text-sm">Los Angeles</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay="300">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400">
                  {'★'.repeat(5)}
                </div>
              </div>
              <p className="text-gray-600 mb-4">"I was overwhelmed with the idea of decorating my new home, but DecorHome made the process seamless and enjoyable. I couldn't be happier with the results!"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                  <span className="text-indigo-600 font-bold">EJ</span>
                </div>
                <div>
                  <h4 className="font-bold">Emily Johnson</h4>
                  <p className="text-gray-500 text-sm">Chicago</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;