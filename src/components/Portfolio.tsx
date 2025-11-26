import { useReveal } from "../hooks/useReveal";
// Importação manual das imagens
import img from '../assets/portfolio/foto.jpg'
import img1 from "../assets/portfolio/foto1.jpg";
import img2 from "../assets/portfolio/foto2.jpg";
import img3 from "../assets/portfolio/foto3.jpg";
import img4 from "../assets/portfolio/foto4.jpg";

const Portfolio = () => {
  const { ref, show } = useReveal();

  // Array com as imagens
  const images = [img, img1, img2, img3, img4];

  return (
    <section ref={ref} className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-pink-700 text-center">
        Portfólio
      </h2>

      <div className="grid md:grid-cols-4 gap-5 mt-12">
        {images.map((image, i) => (
          <div
            key={i}
            className={`${show ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            <img
              src={image}
              className="w-full h-64 object-cover rounded-2xl shadow-lg transition-all duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;


