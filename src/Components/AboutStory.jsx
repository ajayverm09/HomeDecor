import React from "react";
import AnimatedSection from "../Components/AnimatedSection";

const AboutStory = () => {
  return (
    <div>
      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Image on left */}
            <AnimatedSection className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-xl h-96">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                  alt="Our Mission"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>

            {/* Text on right */}
            <AnimatedSection className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-4">
                At DecorHome, our mission is to transform ordinary spaces into
                extraordinary experiences. We focus on design that is both
                functional and inspiring.
              </p>
              <p className="text-gray-600 mb-4">
                We work closely with each client to understand their needs,
                style, and vision, ensuring that every project reflects their
                personality and enhances their lifestyle.
              </p>
              <p className="text-gray-600">
                Our team combines creativity, expertise, and passion to deliver
                spaces that are not only beautiful but also comfortable and
                practical.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vision Section (Zigzag) */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            {/* Image on right */}
            <AnimatedSection className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-xl h-96">
                <img
                  src="https://images.pexels.com/photos/28389060/pexels-photo-28389060.jpeg"
                  alt="Our Vision"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>

            {/* Text on left */}
            <AnimatedSection className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600 mb-4">
                We envision a world where every home is a reflection of its
                owner’s personality and taste. Our designs aim to balance
                aesthetics with functionality.
              </p>
              <p className="text-gray-600 mb-4">
                By combining modern design trends with timeless elements, we
                create spaces that remain stylish and relevant for years to
                come.
              </p>
              <p className="text-gray-600">
                Our commitment to excellence drives us to constantly innovate
                and push the boundaries of interior design.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutStory;
