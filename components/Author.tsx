
import React from 'react';

const Author: React.FC = () => {
    return (
        <section id="autor" className="py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-4xl">
                 <div className="text-center mb-12">
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-white">
                       El Autor del Método
                    </h3>
                </div>
                <div className="bg-gray-900/50 border border-yellow-500/20 rounded-lg p-8 backdrop-blur-sm text-center">
                    <p className="text-sm font-bold text-yellow-400">NEUROCOMUNICADOR MULTIMODAL</p>
                    <h4 className="mt-2 text-3xl font-display font-semibold text-white">José Alirio Angel Corredor</h4>
                    <p className="mt-2 text-gray-400">El Fénix Literario Venezolano</p>
                    <p className="mt-4 max-w-2xl mx-auto text-gray-300">
                       "Forjado en batalla: Sobreviví al cierre forzoso de mis 3 emisoras, a la confiscación de equipos y a años de presión. Renacido en la ciencia: Superé 12 años de Parkinson juvenil agresivo. Mi mente se auto-reparó y optimizó. Esta app es mi propósito, mi amor, mi legado."
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Author;
