import { FaHome, FaInfoCircle, FaServicestack, FaEnvelope } from "react-icons/fa";
import enzo from '../assets/images/enzo-symbol.jpg';

const Navbar = () => {
    return (
        <div className="relative z-2 flex justify-between items-center p-4 backdrop-blur-md rounded-lg shadow-lg">
            <img src={enzo} alt="enzo" width={60} height={60} className="rounded-full border-2 border-white shadow-md transition duration-300 transform hover:scale-110" />
            <nav className="flex justify-center w-full">
                <ul className="flex space-x-12">
                    <li className="navItem">
                        <FaHome size ={18} className="rounded-full bg-white/20 p-1"/><span>Home</span>
                    </li>
                    <li className="navItem">
                        <FaInfoCircle size ={18}  className="rounded-full bg-white/20 p-1" /> <span className="font-semibold">About</span>
                    </li>
                    <li className="navItem">
                        <FaServicestack size ={18} className="rounded-full bg-white/20 p-1" /> <span className="font-semibold">Services</span>
                    </li>
                    <li className="navItem">
                        <FaEnvelope size ={18}  className="rounded-full bg-white/20 p-1" /> <span className="font-semibold">Contact</span>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
