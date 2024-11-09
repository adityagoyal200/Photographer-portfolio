import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const images = [
    "https://res.cloudinary.com/dcv1oi1w3/image/upload/v1731072257/l5vuo69tm7zzn9hvgdiz.jpg",
    "https://res.cloudinary.com/dcv1oi1w3/image/upload/v1731072257/pl1iuadho6drqg7ewsff.jpg",
    "https://res.cloudinary.com/dcv1oi1w3/image/upload/v1731072257/kzvyi2lp5njju7jg9zeq.jpg",
    "https://res.cloudinary.com/dcv1oi1w3/image/upload/v1731072257/wonftamiz7o1cbganc3x.jpg",
    "https://res.cloudinary.com/dcv1oi1w3/image/upload/v1731072257/sjykbumdezd7sibsoejg.jpg",
    "https://res.cloudinary.com/dcv1oi1w3/image/upload/v1731072257/qnnhjqk1usgp4lfcben3.jpg"
  ];

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <section className="w-full py-20 px-6 sm:px-12 backdrop-blur-md overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0">
        <motion.div
          className="flex flex-col mr-4 sm:flex-row lg:flex-col xl:flex-row lg:w-1/2 w-full items-center justify-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
          transition={{ duration: 1.2, type: 'spring', stiffness: 100 }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative w-full sm:h-[200px] md:h-[250px] lg:h-[500px] h-[200px] overflow-hidden rounded-lg shadow-xl mr-2 hover: md:z-50"
              initial={{ opacity: 1 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{
                delay: index * 0.4,
                duration: 1,
                ease: "easeIn"
              }}
            >
              <motion.img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover rounded-lg hover:animate-pulse"
                loading="lazy" 
              />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="lg:w-1/2 w-full text-slate-300"
          ref={ref}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
          transition={{ duration: 1.2, type: 'spring', stiffness: 100 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-4 animate-pulse"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ delay: 0.5, duration: 1, type: 'spring', stiffness: 50 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg leading-relaxed font-mono"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{
              delay: 0.5,
              duration: 1,
              type: 'spring',
              stiffness: 100
            }}
          >
            Hey, I’m ....., your friendly neighborhood photographer, capturing life one click at a time. I’m here to make sure you look like a million bucks without the price tag. From candid shots to creative photoshoots, I turn moments into memories — with a side of flair and a dash of humor.
            I don’t just snap pictures; I tell stories — stories that make you look good, feel good, and maybe even laugh at yourself a little. Whether you're after a portrait that screams ‘I’ve got this’ or a photoshoot that'll make your Instagram pop, I’ve got you covered.
            Let's make your moments unforgettable, or at least Insta-worthy. (I promise no awkward posing... unless you want it, of course.)
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
