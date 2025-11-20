export function LandingHero() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0F3A2F 0%, #0E2A3A 50%, #07181D 100%)',
      }}
    >
      {/* Glow sutil desde el centro */}
      <div className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(22, 60, 70, 0.3) 0%, transparent 60%)',
        }}
      />

      {/* Grieta dorada vertical central (efecto kintsugi) */}
      <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5"
        style={{
          background: 'linear-gradient(to bottom, transparent, #D9A400, transparent)',
          boxShadow: '0 0 20px #FFD95A, 0 0 40px #D9A400',
          opacity: 0.6,
        }}
      />

      {/* TÍTULO PRINCIPAL */}
      <div className="text-center space-y-4 mb-16 relative z-10">
        <h1 className="text-8xl md:text-9xl font-black tracking-tighter"
          style={{
            color: '#E7E9EA',
            textShadow: '0 0 30px rgba(217, 164, 0, 0.5), 0 2px 4px rgba(0,0,0,0.8)',
            letterSpacing: '-0.02em',
          }}
        >
          EMUTSUGI
        </h1>
      </div>

      {/* SUBTÍTULO */}
      <div className="text-center mb-12 relative z-10">
        <p className="text-3xl md:text-4xl font-light tracking-wide uppercase"
          style={{
            color: '#FFD95A',
            textShadow: '0 0 15px rgba(255, 217, 90, 0.4)',
            letterSpacing: '0.15em',
          }}
        >
          GRIETAS DORADAS CON PROPÓSITO
        </p>
      </div>

      {/* LÍNEA KINTSUGI DIVISORIA */}
      <div className="w-64 h-0.5 mb-16 relative z-10"
        style={{
          background: 'linear-gradient(90deg, transparent, #D9A400, transparent)',
          boxShadow: '0 0 10px #FFD95A',
        }}
      />

      {/* DESCRIPCIÓN */}
      <div className="max-w-3xl text-center mb-20 relative z-10">
        <p className="text-xl md:text-2xl leading-relaxed"
          style={{
            color: '#E5E5E5',
            textShadow: '0 1px 2px rgba(7, 24, 29, 0.7)',
          }}
        >
          Transmuta tu sombra, decodifica tu presente, hereda tu legado dorado. Brilla.
        </p>
      </div>

      {/* BOTONES */}
      <div className="flex flex-col sm:flex-row gap-8 relative z-10">
        <button className="px-16 py-5 font-black text-lg uppercase tracking-wide rounded-md transition-all duration-300"
          style={{
            backgroundColor: '#D9A400',
            color: '#07181D',
            boxShadow: '0 0 25px rgba(217, 164, 0, 0.5)',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.boxShadow = '0 0 35px rgba(217, 164, 0, 0.7)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.boxShadow = '0 0 25px rgba(217, 164, 0, 0.5)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          INICIAR TRANSFORMACIÓN
        </button>
        
        <button className="px-16 py-5 font-black text-lg uppercase tracking-wide rounded-md border-2 transition-all duration-300"
          style={{
            backgroundColor: 'transparent',
            color: '#FFD95A',
            borderColor: '#FFD95A',
            boxShadow: '0 0 15px rgba(255, 217, 90, 0.3)',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#FFD95A';
            e.currentTarget.style.color = '#07181D';
            e.currentTarget.style.boxShadow = '0 0 25px rgba(255, 217, 90, 0.5)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#FFD95A';
            e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 217, 90, 0.3)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          EXPLORAR PRINCIPIOS
        </button>
      </div>

    </div>
  );
}