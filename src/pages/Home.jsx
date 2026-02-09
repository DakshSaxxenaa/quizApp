import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Typewriter from "../components/Typer";
const Home = () => {

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "QCG IIT Roorkee";
    if(localStorage.getItem("studentData") || localStorage.getItem("quizScore")){
      localStorage.removeItem("studentData");
      localStorage.removeItem("quizScore");
    }
  }, []);

  return (
    <div className="text-white pt-14 sm:pt-16 md:pt-20 lg:pt-24 overflow-x-hidden">
      <section className="top min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] flex flex-col justify-center px-4 sm:px-8 md:px-14 lg:px-20 my-4 sm:my-6 md:my-8 gap-2 sm:gap-3 md:gap-4">
        <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl">
          Hello, We are
        </p>
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
          QCG IIT Roorkee
        </p>
        <p className="flex flex-wrap items-center text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold">
          We work on Quantum <Typewriter />
        </p>
        <button 
        onClick={()=>{navigate("/form")}}
        className="px-3 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-linear-to-r from-[#c434b8] to-[#8b2fc9] text-white font-semibold text-xs sm:text-sm md:text-base rounded-lg sm:rounded-xl md:rounded-2xl hover:from-[#a82a9a] hover:to-[#7526a8] transition-all cursor-pointer w-fit mt-2 sm:mt-4">
          Apply Now
        </button>
      </section>

      <section className="about min-h-fit">
        <About />
      </section>

      <section className="about min-h-fit">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
