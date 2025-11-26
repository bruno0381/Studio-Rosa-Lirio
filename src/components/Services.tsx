

import { useReveal } from "../hooks/useReveal";

const Services = () => {
  const { ref, show } = useReveal();

  return (
    <section ref={ref} className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-pink-700 text-center">
        Nossos Serviços
      </h2>

      <div className="grid md:grid-cols-3 gap-10 mt-12">
        {["Alongamento em Fibra", "Esmaltação em Gel", "Design Exclusivo"].map((serv, i) => (
          <div
            key={serv}
            className={`
              bg-white p-6 rounded-2xl shadow-lg transition-all duration-500
              hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.03]
              ${show ? "animate-fade-up" : "opacity-0"}
            `}
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            <h3 className="text-xl font-semibold text-pink-700">{serv}</h3>
            <p className="text-gray-600 mt-2">Resultado impecável para realçar sua beleza.</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;


