export function LandingHero() {
  return (
    <div className="min-h-screen relative flex items-center justify-center bg-[#0F3A2F] overflow-hidden">
      
      {/* IMAGEN DE FONDO - OCUPA TODA LA PANTALLA */}
      <img
        src="/assets/hero/respirar.jpg"
        alt="Respirar con entendimiento"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* BOTONES - CENTRADOS EN LA PARTE INFERIOR */}
      <div className="relative z-10 flex flex-col sm:flex-row gap-8 absolute bottom-20">
        <button className="px-16 py-5 font-black text-lg rounded-md bg-[#D9A400] text-[#07181D] shadow-lg hover:scale-105 transition-transform">
          INICIAR TRANSFORMACIÓN
        </button>
        <button className="px-16 py-5 font-black text-lg rounded-md border-2 border-[#FFD95A] text-[#FFD95A] shadow-lg hover:scale-105 transition-transform">
          EXPLORAR PRINCIPIOS
        </button>
      </div>

    </div>
  );
}