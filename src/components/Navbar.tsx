import { FaHome, FaInfoCircle, FaServicestack, FaEnvelope } from "react-icons/fa";
import enzo from '../assets/images/enzo-symbol.jpg';
import { Link } from 'react-scroll';
import { GiGraveFlowers } from "react-icons/gi";
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative z-2 flex justify-between items-center p-4 backdrop-blur-md rounded-lg shadow-lg">
      <img
        src={enzo}
        alt="enzo"
        width={50}
        height={50}
        className="rounded-full border-2 border-white shadow-md transition duration-300 transform hover:scale-110"
      />

      <nav className="hidden md:flex justify-center w-full font-mono">
        <ul className="flex space-x-12">
          <li className="navItem flex items-center"> 
            <Link to="home" smooth={true} duration={500} className="flex items-center space-x-1">
              <FaHome size={18} className="rounded-full bg-white/20 p-1" />
              <span>Home</span>
            </Link>
          </li>
          <li className="navItem flex items-center"> 
            <Link to="about" smooth={true} duration={500} className="flex items-center space-x-1">
              <FaInfoCircle size={18} className="rounded-full bg-white/20 p-1" />
              <span>About</span>
            </Link>
          </li>
          <li className="navItem flex items-center"> 
            <Link to="services" smooth={true} duration={500} className="flex items-center space-x-1">
              <FaServicestack size={18} className="rounded-full bg-white/20 p-1" />
              <span>Services</span>
            </Link>
          </li>
          <li className="navItem flex items-center"> 
            <Link to="contact" smooth={true} duration={500} className="flex items-center space-x-1">
              <FaEnvelope size={18} className="rounded-full bg-white/20 p-1" />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-zinc-900 text-white rounded-lg shadow-lg p-4">
          <ul className="space-y-4">
            <li className="navItem flex items-center">
              <Link to="home" smooth={true} duration={500} className="flex items-center space-x-1">
                <FaHome size={18} className="rounded-full bg-white/20 p-1" />
                <span>Home</span>
              </Link>
            </li>
            <li className="navItem flex items-center">
              <Link to="about" smooth={true} duration={500} className="flex items-center space-x-1">
                <FaInfoCircle size={18} className="rounded-full bg-white/20 p-1" />
                <span>About</span>
              </Link>
            </li>
            <li className="navItem flex items-center">
              <Link to="services" smooth={true} duration={500} className="flex items-center space-x-1">
                <FaServicestack size={18} className="rounded-full bg-white/20 p-1" />
                <span>Services</span>
              </Link>
            </li>
            <li className="navItem flex items-center">
              <Link to="contact" smooth={true} duration={500} className="flex items-center space-x-1">
                <FaEnvelope size={18} className="rounded-full bg-white/20 p-1" />
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      )}

      <GiGraveFlowers size={30} className="mr-5 hidden md:block" />
    </div>
  );
};

export default Navbar;
