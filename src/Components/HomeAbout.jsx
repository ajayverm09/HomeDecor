import { Link } from 'react-router-dom';
import AnimatedSection from '../Components/AnimatedSection';

const TextWithImageSection = ({ 
  title, 
  description1, 
  description2, 
  buttonText, 
  buttonLink, 
  imageUrl, 
  imageAlt, 
  reverse = false 
}) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
          
          {/* Image Side */}
          <AnimatedSection className="md:w-1/2 w-full">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src={imageUrl} 
                alt={imageAlt} 
                className="w-full h-80 md:h-[450px] object-cover"
              />
            </div>
          </AnimatedSection>
          
          {/* Text Side */}
          <AnimatedSection className="md:w-1/2 w-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600 mb-4">{description1}</p>
            <p className="text-gray-600 mb-6">{description2}</p>
            <Link 
              to={buttonLink} 
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-300 inline-block"
            >
              {buttonText}
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default TextWithImageSection;
