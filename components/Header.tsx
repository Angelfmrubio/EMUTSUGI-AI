
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-4 px-4 md:px-8 border-b border-yellow-500/20 sticky top-0 bg-black/80 backdrop-blur-sm z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-display font-bold text-yellow-400 tracking-wider">
          EMUTSUGI
        </h1>
        <nav className="hidden md:flex items-center space-x-6 text-sm text-gray-300">
          <a href="#principios" className="hover:text-yellow-400 transition-colors">Principios</a>
          <a href="#herramientas" className="hover:text-yellow-400 transition-colors">Herramientas</a>
          <a href="#crisol" className="hover:text-yellow-400 transition-colors">El Crisol</a>
          <a href="#autor" className="hover:text-yellow-400 transition-colors">El Autor</a>
        </nav>
        <button className="px-4 py-2 bg-yellow-400 text-black font-bold rounded-md hover:bg-yellow-300 transition-all text-sm">
          Comenzar Transformación
        </button>
      </div>
    </header>
  );
};

export default Header;
