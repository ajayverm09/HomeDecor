import Achievements from "../Components/AboutAchievments";
import AboutStory from "../Components/AboutStory";
import AnimatedSection from "../Components/AnimatedSection";

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/28389059/pexels-photo-28389059.jpeg')",
          }}
        ></div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About DecorHome
            </h1>
            <p className="text-xl max-w-3xl">
              Creating beautiful, functional spaces that reflect your unique
              style and personality.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story Section */}
      <AboutStory/>

      {/* Mission & Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Mission & Values
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do at DecorHome.
              </p>
            </AnimatedSection>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <AnimatedSection delay="100">
              <div className="bg-white p-8 rounded-lg shadow-md text-center h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To transform houses into homes by creating beautiful,
                  functional spaces that reflect our clients' unique
                  personalities and lifestyles.
                </p>
              </div>
            </AnimatedSection>

            {/* Card 2 */}
            <AnimatedSection delay="200">
              <div className="bg-white p-8 rounded-lg shadow-md text-center h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👁️</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  To be the most trusted and innovative interior design firm,
                  known for creating spaces that inspire and delight.
                </p>
              </div>
            </AnimatedSection>

            {/* Card 3 */}
            <AnimatedSection delay="300">
              <div className="bg-white p-8 rounded-lg shadow-md text-center h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💎</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Our Values</h3>
                <p className="text-gray-600">
                  Creativity, integrity, collaboration, and excellence in
                  everything we do.
                </p>
              </div>
            </AnimatedSection>

            {/* Card 4 */}
            <AnimatedSection delay="400">
              <div className="bg-white p-8 rounded-lg shadow-md text-center h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Collaboration</h3>
                <p className="text-gray-600">
                  We work hand-in-hand with clients, contractors, and suppliers
                  to achieve the best outcomes.
                </p>
              </div>
            </AnimatedSection>

            {/* Card 5 */}
            <AnimatedSection delay="500">
              <div className="bg-white p-8 rounded-lg shadow-md text-center h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Sustainability</h3>
                <p className="text-gray-600">
                  Eco-friendly materials and sustainable design choices are at
                  the heart of our work.
                </p>
              </div>
            </AnimatedSection>

            {/* Card 6 */}
            <AnimatedSection delay="600">
              <div className="bg-white p-8 rounded-lg shadow-md text-center h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We constantly push boundaries with fresh ideas and creative
                  solutions.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Section */}

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet Our Team
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The talented individuals who make DecorHome exceptional.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Members */}
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & Lead Designer",
                desc: "With over 15 years of experience, Sarah brings creativity and expertise to every project.",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
              },
              {
                name: "Michael Chen",
                role: "Senior Designer",
                desc: "Michael specializes in modern and minimalist designs with a focus on functionality.",
                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80",
              },
              {
                name: "Emma Rodriguez",
                role: "Interior Stylist",
                desc: "Emma has a keen eye for detail and a talent for creating inviting, comfortable spaces.",
                img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80",
              },
              {
                name: "David Wilson",
                role: "Project Manager",
                desc: "David ensures that every project runs smoothly from concept to completion.",
                img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80",
              },
            ].map((member, idx) => (
              <AnimatedSection key={idx} delay={`${(idx + 1) * 100}`}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md transition transform duration-300 hover:scale-105 hover:shadow-xl group relative">
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition duration-300">
                      {/* LinkedIn */}
                      <a
                        href="#"
                        className="bg-white p-2 rounded-full text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4"
                        >
                          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 24h4V7h-4v17zM7.5 7h3.84v2.17h.05c.53-1 1.83-2.17 3.77-2.17 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.62c0-1.82-.03-4.15-2.53-4.15-2.54 0-2.93 1.98-2.93 4.02V24h-4V7z" />
                        </svg>
                      </a>
                      {/* Twitter */}
                      <a
                        href="#"
                        className="bg-white p-2 rounded-full text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4"
                        >
                          <path d="M24 4.557a9.93 9.93 0 01-2.828.775A4.932 4.932 0 0023.337 3.1a9.864 9.864 0 01-3.127 1.195A4.924 4.924 0 0016.616 3c-2.733 0-4.946 2.215-4.946 4.946 0 .388.043.765.127 1.125A14.01 14.01 0 011.671 3.149a4.94 4.94 0 00-.668 2.484c0 1.713.872 3.228 2.197 4.117a4.904 4.904 0 01-2.24-.618v.062c0 2.396 1.704 4.392 3.96 4.845a4.935 4.935 0 01-2.234.085c.63 1.966 2.457 3.396 4.618 3.438A9.876 9.876 0 010 19.54 13.905 13.905 0 007.548 21c9.142 0 14.307-7.721 14.307-14.416 0-.22-.005-.439-.015-.657A10.278 10.278 0 0024 4.557z" />
                        </svg>
                      </a>
                      {/* Instagram */}
                      <a
                        href="#"
                        className="bg-white p-2 rounded-full text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.246 2.427.415a4.92 4.92 0 011.675 1.085 4.92 4.92 0 011.085 1.675c.169.457.359 1.256.415 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.246 1.97-.415 2.427a4.92 4.92 0 01-1.085 1.675 4.92 4.92 0 01-1.675 1.085c-.457.169-1.256.359-2.427.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.246-2.427-.415a4.92 4.92 0 01-1.675-1.085 4.92 4.92 0 01-1.085-1.675c-.169-.457-.359-1.256-.415-2.427C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.056-1.17.246-1.97.415-2.427a4.92 4.92 0 011.085-1.675 4.92 4.92 0 011.675-1.085c.457-.169 1.256-.359 2.427-.415C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.78.127 4.85.306 4.042.627a6.937 6.937 0 00-2.512 1.637A6.937 6.937 0 00.627 4.042c-.321.808-.5 1.738-.557 3.01C.012 8.332 0 8.741 0 12s.012 3.668.07 4.948c.057 1.272.236 2.202.557 3.01a6.937 6.937 0 001.637 2.512 6.937 6.937 0 002.512 1.637c.808.321 1.738.5 3.01.557C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.272-.057 2.202-.236 3.01-.557a6.937 6.937 0 002.512-1.637 6.937 6.937 0 001.637-2.512c.321-.808.5-1.738.557-3.01.058-1.28.07-1.689.07-4.948s-.012-3.668-.07-4.948c-.057-1.272-.236-2.202-.557-3.01a6.937 6.937 0 00-1.637-2.512 6.937 6.937 0 00-2.512-1.637c-.808-.321-1.738-.5-3.01-.557C15.668.012 15.259 0 12 0z" />
                          <circle cx="12" cy="12" r="3.5" />
                          <circle cx="18.406" cy="5.594" r="1.44" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-indigo-600 mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <Achievements />
    </div>
  );
};

export default About;
