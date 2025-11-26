
import logo from "../assets/logo.png"; // coloque o arquivo dentro de src/assets

const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 bg-white/80 backdrop-blur shadow-sm z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

        <img src={logo} alt="Logo Studio Rosa Lírio" className="h-14" />

        <ul className="hidden md:flex gap-8 font-['Poppins'] text-[#4A4A4A]">
          <li className="hover:text-[#E277A7] cursor-pointer">Início</li>
          <li className="hover:text-[#E277A7] cursor-pointer">Sobre</li>
          <li className="hover:text-[#E277A7] cursor-pointer">Serviços</li>
          <li className="hover:text-[#E277A7] cursor-pointer">Agendamento</li>
        </ul>

      </nav>
    </header>
  );
};

export default Header;

