import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';

// ==========================================
// COMPONENTE DE SCROLL OBLIGATORIO
// ==========================================
// Este componente se asegura de que la vista siempre empiece arriba 
// cuando el hash (la parte #/ruta) de la URL cambia.
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Si la ruta o el hash cambian, forzamos el scroll al tope.
    // Usamos el 'behavior: "instant"' para que no se vea el "salto" del scroll.
    window.scrollTo({ top: 0, behavior: "instant" }); 
  }, [pathname, hash]);

  return null;
};

// ==========================================
// COMPONENTES VISUALES
// ==========================================

const Header = () => {
  const navItems = [
    { name: "INICIO", path: "/" },
    { name: "HISTORIA", path: "/historia" },
    { name: "PRINCIPIOS", path: "/principios" },
    { name: "CONTACTO", path: "/contacto" },
  ];
  
  // useLocation() nos permite saber en qué ruta estamos para marcar el botón activo
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/5">
      <nav className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center h-auto md:h-24 px-6 py-4 md:py-0">
        {/* Logo/Título (ahora usa Link para volver al inicio) */}
        <Link 
          to="/"
          className="text-2xl font-bold tracking-widest hover:opacity-80 transition-opacity mb-4 md:mb-0 opacity-0 md:opacity-0"
          style={{ fontFamily: 'Cinzel, serif', color: '#eebc2f' }}
        >
          EMUTSUGI
        </Link>
        <div className="flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-xs font-bold uppercase tracking-widest transition-all duration-300 py-2 px-4 rounded text-shadow
                ${location.pathname === item.path 
                  ? 'text-yellow-400 border-b-2 border-yellow-500' 
                  : 'text-gray-300 hover:text-yellow-200'
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

// ==========================================
// PÁGINAS
// ==========================================

// 1. HOME (MIN-H-SCREEN para centrar el contenido en la vista inicial)
// Ahora los botones usan Link para cambiar la URL
const HomePage = () => (
  <div className="flex flex-col items-center justify-end min-h-screen pb-32 text-center px-4 animate-fade-in">
    
    {/* IMPORTANTE: Espacio flexible para empujar los botones abajo. */}
    <div className="flex-grow"></div> 

    {/* Botones de Acción */}
    <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl justify-center mt-auto">
      <Link 
        to="/principios"
        className="btn-primary px-12 py-5 text-sm md:text-base rounded shadow-[0_0_40px_rgba(238,188,47,0.3)] w-full md:w-auto transform hover:scale-105 transition-all duration-300 font-bold tracking-widest border border-yellow-400/20"
      >
        INICIAR TRANSFORMACIÓN
      </Link>
      
      <Link 
        to="/historia"
        className="btn-outline px-12 py-5 text-sm md:text-base rounded shadow-lg w-full md:w-auto border border-yellow-600 text-yellow-500 uppercase font-bold tracking-widest hover:bg-yellow-900/40 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
      >
        EXPLORAR PRINCIPIOS
      </Link>
    </div>
  </div>
);

// 2. HISTORIA (Añadimos min-h para forzar la altura debajo del header)
const HistoriaPage = () => (
  <div className="p-8 max-w-4xl mx-auto text-center animate-fade-in min-h-[calc(100vh-8rem)] flex items-start justify-center w-full">
    <div className="bg-black/70 p-12 rounded-xl border border-yellow-900/50 backdrop-blur-md shadow-2xl w-full max-w-lg mt-8">
        <h1 className="text-5xl mb-8 text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-600 font-cinzel drop-shadow-lg">
            GÉNESIS
        </h1>
        <p className="text-xl text-gray-300 italic mb-8 leading-relaxed font-light">
            "Mi travesía comenzó en 2013 con el primer terremoto: la pérdida brutal de mi legado profesional. Este camino forjó mi propósito..."
        </p>
        <div className="w-24 h-1 bg-yellow-800/50 mx-auto rounded-full"></div>
    </div>
  </div>
);

// 3. PRINCIPIOS (Añadimos min-h para forzar la altura debajo del header)
const PrincipiosPage = () => (
  <div className="p-8 max-w-6xl mx-auto animate-fade-in min-h-[calc(100vh-8rem)]">
    <h1 className="text-5xl mb-16 text-center text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-600 font-cinzel drop-shadow-lg mt-8">
        LOS PRINCIPIOS
    </h1>
    <div className="grid md:grid-cols-3 gap-8">
        {[
            { title: "Ataraxia", desc: "Serenidad imperturbable en el caos, la base para la toma de decisiones." },
            { title: "Emunah", desc: "Fe inquebrantable en la visión a largo plazo, sin importar el desafío actual." },
            { title: "Kaizen", desc: "Mejora continua, el camino constante hacia la maestría y la adaptación." }
        ].map((item, i) => (
            <div key={i} className="bg-black/60 p-10 rounded-xl min-h-[250px] flex flex-col items-center justify-center border border-yellow-800/30 hover:border-yellow-500/60 transition-all duration-500 backdrop-blur-md group hover:-translate-y-2 shadow-xl">
                <div className="text-4xl mb-4 text-yellow-800 group-hover:text-yellow-500 transition-colors">❖</div>
                <h3 className="text-2xl text-yellow-100 font-cinzel mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm uppercase tracking-widest font-light text-center">{item.desc}</p>
            </div>
        ))}
    </div>
  </div>
);

// 4. CONTACTO (Añadimos min-h para forzar la altura debajo del header)
const ContactoPage = () => (
  <div className="p-8 max-w-lg mx-auto text-center animate-fade-in min-h-[calc(100vh-8rem)] flex items-start justify-center w-full">
    <div className="bg-black/70 p-10 rounded-xl border border-yellow-900/50 backdrop-blur-md shadow-2xl w-full mt-8">
        <h1 className="text-4xl mb-2 text-yellow-100 font-cinzel">CONECTAR</h1>
        <p className="text-yellow-600/80 text-sm uppercase tracking-widest mb-8">Establece tu Frecuencia</p>
        <form className="space-y-6">
            <input type="text" placeholder="Tu Nombre" className="w-full p-4 rounded bg-black/50 border border-yellow-900/30 text-yellow-100 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/50 outline-none transition-all placeholder-gray-600" />
            <textarea rows="4" placeholder="Tu Mensaje" className="w-full p-4 rounded bg-black/50 border border-yellow-900/30 text-yellow-100 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/50 outline-none transition-all placeholder-gray-600"></textarea>
            <button className="w-full py-4 rounded font-bold bg-gradient-to-r from-yellow-700 to-yellow-600 hover:from-yellow-600 hover:to-yellow-500 text-black transition-all uppercase tracking-widest shadow-lg transform hover:-translate-y-1">
                ENVIAR
            </button>
        </form>
    </div>
  </div>
);

// ==========================================
// APP PRINCIPAL (Usando HashRouter)
// ==========================================

const AppContent = () => {
    return (
        // El wrapper asegura que el fondo se vea en toda la pantalla
        <div className="nexus-content-wrapper font-sans overflow-x-hidden flex flex-col min-h-screen">
          <ScrollToTop /> {/* Agregamos el componente que fuerza el scroll al tope */}
          <Header />
          {/* El padding superior (pt-32 = 8rem) garantiza espacio bajo el header */}
          <main className="flex-grow w-full pt-32"> 
            <Routes>
              {/* Rutas de la aplicación */}
              <Route path="/" element={<HomePage />} />
              <Route path="/historia" element={<HistoriaPage />} />
              <Route path="/principios" element={<PrincipiosPage />} />
              <Route path="/contacto" element={<ContactoPage />} />
              {/* Ruta de fallback si no encuentra nada */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
        </div>
      );
}

const App = () => (
    <HashRouter>
        <AppContent />
    </HashRouter>
)

export default App;