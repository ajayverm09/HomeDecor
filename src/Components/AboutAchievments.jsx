import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import AnimatedSection from "../Components/AnimatedSection";


const Achievements = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Achievements
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Recognition for our commitment to excellence in interior design.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <AnimatedSection delay="100">
            <div
              ref={ref1}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {inView1 && <CountUp end={500} duration={2} suffix="+" />}
              </div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay="200">
            <div
              ref={ref2}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {inView2 && <CountUp end={12} duration={2} />}
              </div>
              <p className="text-gray-600">Years of Experience</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay="300">
            <div
              ref={ref3}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {inView3 && <CountUp end={15} duration={2} />}
              </div>
              <p className="text-gray-600">Design Awards</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay="400">
            <div
              ref={ref4}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {inView4 && <CountUp end={98} duration={2} suffix="%" />}
              </div>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Achievements;