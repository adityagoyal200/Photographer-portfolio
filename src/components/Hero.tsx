import { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import debounce from 'lodash.debounce';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const handleScroll = debounce(() => {
      setScrollY(window.scrollY);
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (scrollY < 200) {
      controls.start({ opacity: 1, x: 0 });
    } else if (scrollY >= 250 && scrollY < 500) {
      controls.start({ opacity: 0.5, x: 50 });
    } else {
      controls.start({ opacity: 0, x: 100 });
    }
  }, [scrollY, controls]);

  useEffect(() => {
    const typingTimer = setTimeout(() => setIsTyping(true), 500);
    return () => clearTimeout(typingTimer);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-x-hidden">
      <motion.div
        className="absolute left-0 top-0 w-full sm:w-[50%] md:w-[50%] lg:w-[50%] xl:w-[45%] h-full flex items-center justify-center"
        initial={{ opacity: 0, x: -100 }}
        animate={controls}
        transition={{ duration: 2 }}
      >
        <div className="relative w-full h-full rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105">
          <div className="absolute p-4 inset-0 w-full h-full overflow-hidden rounded-md">
            <video
              ref={videoRef}
              className="w-full h-full object-cover rounded-lg brightness-[0.7]"
              muted
              loop
              autoPlay
              playsInline
              onLoadedData={() => videoRef.current?.play()}
            >
              <source
                src="https://res.cloudinary.com/dcv1oi1w3/video/upload/v1731070605/k4mbzrqetnjgbjppguil.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute right-0 top-0 w-full sm:w-[40%] md:w-[50%] lg:w-[60%] xl:w-[65%] h-full flex items-center justify-center px-6"
        initial={{ opacity: 0, x: 100 }}
        animate={controls}
        transition={{ duration: 1 }}
      >
        <div className="w-full h-[80%] flex flex-col justify-center text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-mono mb-4">
            <span className={`inline-block ${isTyping ? 'typing' : ''} text-shadow-lg`}>
              Hello, I'm .....
            </span>
          </h1>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
