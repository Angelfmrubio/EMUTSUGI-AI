export function LandingHero() {
  return (
    {/* HERO MINIMALISTA - SOLO DORADO, NEGRO, BLANCO */}
    <div className="min-h-screen bg-white flex flex-col justify-center items-center px-6 py-20">
      
      {/* TÍTULO CENTRAL con aire poético */}
      <div className="text-center space-y-8 mb-16">
        <h1 className="text-7xl md:text-9xl font-black text-black leading-none tracking-tighter">
          EMUTSUGI
        </h1>
        <div className="h-1 w-24 mx-auto bg-yellow-500"></div>
        <p className="text-2xl md:text-3xl font-light text-black tracking-wide">
          GRIETAS DORADAS CON PROPOSITO
        </p>
      </div>

      {/* DESCRIPCIÓN CON ESPACIO Y LENGUAJE AFIRMATIVO */}
      <div className="max-w-2xl text-center mb-20">
        <p className="text-lg text-black leading-relaxed">
          Transmuta tu sombra, decodifica tu presente, hereda tu legado dorado. Brilla
        </p>
      </div>

      {/* BOTONES CON LENGUAJE DE POSIBILIDAD */}
      <div className="flex flex-col sm:flex-row gap-6">
        <button className="px-12 py-4 bg-yellow-500 text-black font-bold text-lg rounded-md hover:bg-yellow-400 transition-colors">
          Iniciar Transformación
        </button>
        <button className="px-12 py-4 border-2 border-black text-black font-bold text-lg rounded-md hover:bg-black hover:text-yellow-500 transition-colors">
          Explorar Principios
        </button>
      </div>

    </div>
  );
}