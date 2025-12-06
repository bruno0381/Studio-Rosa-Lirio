
import { useReveal } from "../hooks/useReveal";
import portfolioImg from "../assets/portfolio-top.png";
import Booking from "./Booking";

const Hero = () => {
  const { ref, show } = useReveal();

  return (
    <section ref={ref} className="w-full pt-32 pb-20 bg-pink-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Texto */}
        <div className={`${show ? "animate-slide-left" : "opacity-0"}`}>
          <h1 className="text-5xl font-bold text-pink-700 leading-tight">
            Studio Rosa Lírio
          </h1>

          <p className="mt-6 text-lg text-[#E277A7] font-medium">
            Alongamentos e designers exclusivos!
          </p>

           <Booking/>

        </div>

        {/* Imagem */}
        <div className={`${show ? "animate-slide-right" : "opacity-0"}`}>
          <img
            src={portfolioImg}
            className="w-full
             max-w-[260px] sm:max-w-sm md:max-w-md mx-auto rounded-3xl shadow-xl transition-all duration-500
             hover:scale-105"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;




