import { useEffect, useState } from "react";
import logo from "../assets/logo.png"; // ajuste para o seu logo

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detecta scroll para mudar cor do header
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* BACKDROP ESCURO DO MENU */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      <header
        className={`
          fixed top-0 w-full z-50 transition-all duration-300
          ${scrolled ? "bg-white shadow-lg" : "bg-transparent"}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <img src={logo} className="w-10 h-10" alt="Studio Rosa Lírio" />
            <span className="font-['Playfair_Display'] text-xl font-bold text-pink-600">
              Studio Rosa Lírio
            </span>
          </div>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center gap-10 font-medium">
            <a href="#inicio" className="hover:text-pink-500 transition">Início</a>
            <a href="#sobre" className="hover:text-pink-500 transition">Sobre</a>
            <a href="#servicos" className="hover:text-pink-500 transition">Serviços</a>
          </nav>

           
          {/* BOTÃO HAMBURGER */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden flex flex-col gap-1 z-50"
          >
            <span className="w-6 h-0.5 bg-pink-500"></span>
            <span className="w-6 h-0.5 bg-pink-500"></span>
            <span className="w-6 h-0.5 bg-pink-500"></span>
          </button>
        </div>
      </header>

      {/* MENU LATERAL PREMIUM */}
      <div
        className={`
          fixed top-0 right-0 h-full w-72 bg-white z-50
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="p-6 flex flex-col gap-6 font-medium text-center">

          <button
            onClick={() => setOpen(false)}
            className="self-end text-2xl"
          >
            ✖
          </button>

          <a onClick={() => setOpen(false)} href="#inicio">Início</a>
          <a onClick={() => setOpen(false)} href="#sobre">Sobre</a>
          <a onClick={() => setOpen(false)} href="#servicos">Serviços</a>

          <a
            onClick={() => setOpen(false)}
            href="https://wa.me/5571992223425?text=Olá,%20quero%20agendar%20um%20horário!"
            target="_blank"
            className="
              mt-6 bg-gradient-to-r from-pink-500 to-pink-600
              text-white px-6 py-3 rounded-full
              shadow-lg hover:scale-105 transition
              green-glow jump-animation
            "
          >
            Agendar Agora
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
