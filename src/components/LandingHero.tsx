export function LandingHero() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 py-20 relative overflow-hidden bg-[#0F3A2F]">
      
      {/* IMAGEN DE FONDO RESPONSIVA */}
      <img
        src="/assets/hero/emutsugi-1200.jpg"
        srcSet="/assets/hero/emutsugi-400.jpg 400w, /assets/hero/emutsugi-600.jpg 600w, /assets/hero/emutsugi-800.jpg 800w, /assets/hero/emutsugi-1200.jpg 1200w"
        sizes="(max-width: 600px) 90vw, (max-width: 1200px) 70vw, 1200px"
        alt="Manos sosteniendo vasija kintsugi"
        className="absolute inset-0 w-full h-full object-cover opacity-90"
        loading="eager"
      />

      {/* Superposición sutil para que el texto resalte */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F3A2F]/30 via-[#0E2A3A]/50 to-[#07181D]/70" />

      {/* TÍTULO */}
      <div className="text-center space-y-4 mb-16 relative z-10">
        <h1 className="text-8xl md:text-9xl font-black text-white tracking-tighter"
          style={{ textShadow: '0 0 30px rgba(217, 164, 0, 0.5)' }}
        >
          EMUTSUGI
        </h1>
        <p className="text-3xl md:text-4xl font-light text-[#FFD95A] uppercase tracking-widest"
          style={{ textShadow: '0 0 15px rgba(255, 217, 90, 0.4)' }}
        >
          GRIETAS DORADAS CON PROPÓSITO
        </p>
      </div>

      {/* DESCRIPCIÓN */}
      <div className="max-w-3xl text-center mb-20 relative z-10">
        <p className="text-xl text-[#E5E5E5] leading-relaxed">
          Transmuta tu sombra, decodifica tu presente, hereda tu legado dorado. Brilla.
        </p>
      </div>

      {/* BOTONES */}
      <div className="flex flex-col sm:flex-row gap-8 relative z-10">
        <button className="px-16 py-5 font-black text-lg rounded-md"
          style={{
            backgroundColor: '#D9A400',
            color: '#07181D',
            boxShadow: '0 0 25px rgba(217, 164, 0, 0.5)',
          }}
        >
          INICIAR TRANSFORMACIÓN
        </button>
        <button className="px-16 py-5 font-black text-lg rounded-md border-2"
          style={{
            backgroundColor: 'transparent',
            color: '#FFD95A',
            borderColor: '#FFD95A',
            boxShadow: '0 0 15px rgba(255, 217, 90, 0.3)',
          }}
        >
          EXPLORAR PRINCIPIOS
        </button>
      </div>

    </div>
  );
}