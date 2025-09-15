import HeroSection from "../Components/HomeHero";
import FeaturesSection from "../Components/HomeFeature";
import TextWithImageSection from "../Components/HomeAbout";
import ServicesSection from "../Components/HomeService";
import TestimonialsSection from "../Components/HomeTestimonial";
import CTASection from "../Components/HomeCta";

const Home = () => {
  return (
    <div className="pt-16">
      <HeroSection />

      <FeaturesSection />

      <TextWithImageSection
        title="Creating Spaces That Inspire"
        description1="At DecorHome, we believe that your home should be a reflection of your personality and lifestyle. Our team of talented designers works closely with you to understand your vision and transform it into reality."
        description2="From concept to completion, we handle every aspect of the design process, ensuring a seamless and stress-free experience. Whether you're looking to refresh a single room or redesign your entire home, we have the expertise to bring your dreams to life."
        buttonText="Learn More About Us"
        buttonLink="/about"
        imageUrl="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        imageAlt="Modern Living Room"
      />

      <TextWithImageSection
        title="Designs Tailored Just for You"
        description1="Every home tells a story, and we make sure yours reflects your individuality. From custom layouts to hand-picked decor elements, our solutions are made for you."
        description2="Our approach combines creativity, functionality, and innovation to ensure your spaces are not only beautiful but also practical for daily living."
        buttonText="Get Started"
        buttonLink="/services"
        imageUrl="https://images.pexels.com/photos/6782578/pexels-photo-6782578.jpeg"
        imageAlt="Cozy Interior Design"
        reverse
      />

      <ServicesSection />

      <TextWithImageSection
        title="Your Dream Home Awaits"
        description1="With over a decade of experience in the interior design industry, we have helped hundreds of homeowners create spaces that they love. Our approach is collaborative, creative, and tailored to your unique needs."
        description2="We stay up-to-date with the latest trends and techniques in home decor, ensuring that your space is both stylish and functional. From color consultation to furniture selection, we handle every detail with precision and care."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
        imageUrl="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        imageAlt="Modern Bedroom"
        reverse={true}
      />

      <TestimonialsSection />

      <CTASection />
    </div>
  );
};

export default Home;
