import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../Components/AnimatedSection';

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        className="relative text-white py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/28389059/pexels-photo-28389059.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-3xl">
              Get in touch with our design team to start creating the home of your dreams.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {[
              { icon: '📍', title: 'Visit Us', text: '123 Decor Street\nDesign City, DC 12345' },
              { icon: '📞', title: 'Call Us', text: '(123) 456-7890\nMon-Fri 9am-6pm' },
              { icon: '✉️', title: 'Email Us', text: 'info@decorhome.com\nsupport@decorhome.com' },
            ].map((item, idx) => (
              <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: idx * 0.2 }}>
                <div className="bg-white p-6 md:p-8 rounded-lg shadow-md text-center">
                  <div className="bg-indigo-100 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 whitespace-pre-line">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-6 md:gap-12">
            {/* Contact Form */}
            <motion.div className="lg:w-1/2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {['name', 'email', 'phone', 'subject'].map((field) => (
                    <div key={field}>
                      <label className="block text-gray-700 font-medium mb-2 capitalize">{field}</label>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required={field !== 'phone'}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    ></textarea>
                  </div>
                  <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition">
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Map & Hours */}
            <motion.div className="lg:w-1/2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: 0.2 }}>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md h-full flex flex-col">
                <h2 className="text-2xl font-bold mb-6">Find Us</h2>
                <div className="rounded-lg overflow-hidden h-64 md:h-96 mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.0059413!3d40.7127837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuNCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="DecorHome Location"
                  ></iframe>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex justify-between"><span>Monday - Friday:</span><span>9:00 AM - 6:00 PM</span></li>
                    <li className="flex justify-between"><span>Saturday:</span><span>10:00 AM - 4:00 PM</span></li>
                    <li className="flex justify-between"><span>Sunday:</span><span>Closed</span></li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Find answers to common questions about our services and process.</p>
            </motion.div>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { q: 'What is your design process?', a: 'Our design process begins with a consultation to understand your needs and preferences. We then create a design concept, develop detailed plans, select materials and furnishings, and oversee the implementation of the design. Throughout the process, we maintain open communication to ensure your vision is realized.' },
              { q: 'How much do your services cost?', a: 'Our pricing varies depending on the scope and complexity of the project. We offer different service packages to accommodate various budgets. During the initial consultation, we provide a detailed quote based on your needs.' },
              { q: 'Do you work with clients outside of your local area?', a: 'Yes, we offer virtual design services for clients who are not in our immediate area. Through video consultations, digital mood boards, and detailed design plans, we can help you create a beautiful space regardless of location.' },
              { q: 'How long does a typical project take?', a: 'The timeline depends on size and complexity. Simple room refreshes take a few weeks; full home renovations may take months. We provide a detailed timeline during planning and keep you updated throughout.' },
            ].map((item, idx) => (
              <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: idx * 0.2 }}>
                <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2">{item.q}</h3>
                  <p className="text-gray-600">{item.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
