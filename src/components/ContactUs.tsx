import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaInstagram} from 'react-icons/fa';  
import Aditya from '../assets/images/Aditya.jfif';  

const ContactUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const user = {
    name: 'Aditya Goyal',
    email: 'goyaladitya3815@gmail.com', 
    phone: '+918580556658',
  };

  return (
    <section 
      className="z-10 w-full py-16 px-6 sm:px-8 md:px-12 backdrop-blur-md overflow-x-hidden font-mono"
      style={{
        backgroundImage: `url(${Aditya})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'top', 
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="max-w-screen-xl mx-auto flex flex-col items-center relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
          transition={{ duration: 1, type: 'spring', stiffness: 50 }}
          className="bg-transparent p-6 rounded-lg shadow-lg w-full sm:w-2/3 md:w-1/2 lg:w-1/3"
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-white">Contact Details</h2>

          <div className="space-y-4 mb-6">
            <div className="text-lg font-medium text-white">
              <p><strong>Name: </strong> {user.name}</p>
            </div>
            <div className="text-lg font-medium text-white">
              <p><strong>Email: </strong> {user.email}</p>
            </div>
            <div className="text-lg font-medium text-white">
              <p><strong>Phone Number: </strong> {user.phone}</p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-lg font-medium text-white">Follow me on Instagram:</p>
            <a 
              href="https://www.instagram.com/__.adityagoyal/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center text-red-500 mt-2 hover:text-blue-600"
            >
              <FaInstagram size={30} className="mr-2" />
              <span className="text-xl">Instagram</span>
            </a>
          </div>
        </motion.div>
      </div>
      <footer className="w-full text-white items-center py-6 mt-24">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row">
          <p className="text-sm animate-pulse">&copy; {new Date().getFullYear()} Aditya Goyal. All Rights Reserved.</p>
        </div>
      </footer>
    </section>
  );
};

export default ContactUs;
