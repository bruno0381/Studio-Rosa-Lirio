const Booking = () => {
  return (
    <section id="agendamento" className="py-2 text-center px-2">
      <h3 className="text-2xl font-['Playfair Display'] font-bold text-[#E277A7]">
        Agende Seu Horário
      </h3>

      <a
        href="https://wa.me/5571992223425"
        target="_blank"
        className="
          inline-block mt-4 px-6 py-4 
          bg-gradient-to-r from-[#E277A7] to-[#C45284]
          text-white rounded-full font-semibold shadow-xl
          hover:scale-105 transition
          jump-animation
          green-glow
        "
      >
        Agendar no WhatsApp
      </a>
    </section>
  );
};

export default Booking;


