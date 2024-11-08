import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import wed from '../assets/Icons/wedding.svg';
import movie from '../assets/Icons/Movie.svg';
import event from '../assets/Icons/Events.svg';
import potrait from '../assets/Icons/Potraits.svg';

const services = [
  {
    title: 'Weddings',
    description: 'Capture the special moments on your wedding day, from the ceremony to the reception.',
    icon: wed,
  },
  {
    title: 'Portraits',
    description: 'Professional portrait photography for individuals, families, or groups.',
    icon: potrait,
  },
  {
    title: 'Events',
    description: 'Document your corporate or social events with high-quality, candid shots.',
    icon: event,
  },
  {
    title: 'Short-Movies',
    description: 'Create stunning, high-quality short films that capture the essence of your story or brand.',
    icon: movie,
  }
];

const Services = () => {
  const [inView, setInView] = useState(false); // Track whether the section is in view
  const sectionRef = useRef(null); // Reference to the section

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true); // Trigger animation when the section is in view
        } else {
          setInView(false); // Reset animation if the section is out of view
        }
      },
      { threshold: 0.5 } // Trigger animation when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 px-6 sm:px-12 backdrop-blur-md bg-opacity-30 bg-black font-mono relative"
    >
      <div className="max-w-screen-xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl font-bold text-white mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
          transition={{ duration: 1 }}
        >
          My Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: inView ? 1 : 0,
                y: inView ? 0 : 50,
              }}
              transition={{
                duration: 0.8, 
                delay: index * 0.2,
              }}
            >
              <div className="w-16 h-16 mx-auto mb-6">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/dcv1oi1w3/image/upload/v1731072257/l5vuo69tm7zzn9hvgdiz.jpg" 
          alt="Photoshoot Background"
          className="w-full h-full object-cover opacity-30" 
        />
      </div>
    </section>
  );
};

export default Services;

