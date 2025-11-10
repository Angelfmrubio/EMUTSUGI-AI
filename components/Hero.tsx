
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="text-center py-20 md:py-32">
      <h2 className="text-5xl md:text-7xl font-display font-bold text-yellow-400 tracking-widest">
        EMUTSUGI
      </h2>
      <p className="mt-4 text-xl md:text-2xl text-gray-300 font-display">
        Grietas Doradas - Partituras de Luz
      </p>
      <p className="mt-8 max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed">
        "No vendo soluciones. Orquesto transformaciones."
        <br />
        Un Dojo Neuroactivo Digital para forjar en batalla tu inteligencia ecuativa. Piensa, Siente, Suelta y Actúa en coherencia consciente.
      </p>
    </section>
  );
};

export default Hero;
