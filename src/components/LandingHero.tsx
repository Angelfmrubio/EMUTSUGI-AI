import { useNavigate } from "react-router-dom";

export function LandingHero() {
  const navigate = useNavigate(); // ← ESTA ES LA BRÚJULA MÁGICA

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-[#0F3A2F] overflow-hidden">
      
      {/* IMAGEN DE FONDO */}
      <img
        src="/assets/hero/respirar.jpg"
        alt="Respirar con entendimiento"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* BOTONES - AHORA ACTIVADOS */}
      <div className="relative z-10 flex flex-col sm:flex-row gap-8 absolute bottom-20">
        
        {/* BOTÓN 1: VA A LA PÁGINA DE INGRESO */}
        <button 
          onClick={() => navigate('/auth')}
          className="px-16 py-5 font-black text-lg rounded-md bg-[#D9A400] text-[#07181D] shadow-lg hover:scale-105 transition-transform cursor-pointer"
        >
          INICIAR TRANSFORMACIÓN
        </button>

        {/* BOTÓN 2: VA A LA PÁGINA DE PRINCIPIOS */}
        <button 
          onClick={() => navigate('/principles')}
          className="px-16 py-5 font-black text-lg rounded-md border-2 border-[#FFD95A] text-[#FFD95A] shadow-lg hover:scale-105 transition-transform cursor-pointer"
        >
          EXPLORAR PRINCIPIOS
        </button>
      
      </div>

    </div>
  );
}