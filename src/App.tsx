import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Services from "./components/Services"; 
import Contact from "./components/ContactUs"; 
import my from '../src/assets/images/Hero.jpg';
import { Element } from 'react-scroll'; 

const App = () => {
  return (
    <div className="bg-zinc-900 min-h-screen text-white relative w-full">
      {/* Background Image with opacity */}
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-fixed opacity-10"
        style={{ backgroundImage: `url(${my})` }} ></div>
      
      {/* Navbar */}
      <div className="relative z-10">
        <Navbar />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10">
        <Element name="home">
          <Hero />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="services">
          <Services />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </div>
    </div>
  );
};

export default App;
