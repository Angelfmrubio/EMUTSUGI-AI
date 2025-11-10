
import React, { useState } from 'react';
import { TreeIcon } from './Icons';

const Crucible: React.FC = () => {
    const [growth, setGrowth] = useState(0.5);

    const handleNurture = () => {
        setGrowth(prev => Math.min(prev + 0.1, 1));
    };

    return (
        <section id="crisol" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-white">
                        El Crisol: Cartografía del Alma
                    </h3>
                    <p className="mt-4 max-w-2xl mx-auto text-gray-400">
                        Tu progreso no es un número, es una narrativa viviente.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="p-8 bg-gray-900/50 border border-yellow-500/20 rounded-lg text-center backdrop-blur-sm">
                        <h4 className="text-2xl font-display font-semibold text-yellow-400">Tu Árbol de la Vida</h4>
                        <div className="my-8 flex justify-center">
                            <TreeIcon className="w-48 h-48 text-yellow-400 transition-all duration-1000" style={{ opacity: growth }}/>
                        </div>
                        <button onClick={handleNurture} className="px-6 py-2 bg-yellow-400 text-black font-bold rounded-md hover:bg-yellow-300 transition-all text-sm">
                          Nutrir el Árbol
                        </button>
                    </div>
                    <div className="space-y-4">
                        <div className="p-4 bg-gray-900/50 border-l-4 border-yellow-500 rounded-r-lg">
                            <h5 className="font-semibold text-white">Narrativa Límbica</h5>
                            <p className="text-gray-400 text-sm">"Tu jardín límbico ha florecido. Las malezas de la ansiedad han reducido su territorio esta semana."</p>
                        </div>
                        <div className="p-4 bg-gray-900/50 border-l-4 border-yellow-500 rounded-r-lg">
                            <h5 className="font-semibold text-white">Crónica del Guerrero</h5>
                            <p className="text-gray-400 text-sm">"Tu volcán interno ha encontrado calma. La coherencia entre corazón y cerebro se fortalece."</p>
                        </div>
                        <div className="p-4 bg-gray-900/50 border-l-4 border-yellow-500 rounded-r-lg">
                            <h5 className="font-semibold text-white">Insignia Obtenida</h5>
                            <p className="text-gray-400 text-sm font-bold text-yellow-300">"Guerrero del Umbral"</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Crucible;
