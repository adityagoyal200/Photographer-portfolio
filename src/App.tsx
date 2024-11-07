import Navbar from "./components/Navbar";
import About from "./components/About"; 
import Hero from "./components/Hero";
import my from '../src/assets/images/my.jpg';

const App = () => {
  return (
    <div className="bg-zinc-900 min-h-screen text-white relative">
      <img 
        src={my} 
        alt="logo" 
        className="absolute top-0 left-0 w-full min-h-screen object-cover opacity-20" 
      />
      <div className="relative z-10">
        <Navbar />
      </div>
      <Hero />
      <About/>
    </div>
  );
};

export default App;
