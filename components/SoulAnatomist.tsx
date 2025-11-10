
import React from 'react';

const SoulAnatomist: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-900/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-white">
                        El Anatomista del Alma
                    </h3>
                    <p className="mt-4 max-w-2xl mx-auto text-gray-400">
                        Visualiza y comprende la maquinaria poética de tu ser.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto space-y-6">
                    <div className="p-6 bg-black/30 border border-yellow-500/20 rounded-lg">
                        <h4 className="text-xl font-display font-semibold text-yellow-400">El Coro del Corazón (SNIC)</h4>
                        <p className="mt-2 text-gray-400">
                            "El corazón no es una bomba, es un maestro. Sus 40,000 neuronas son un coro que canta tu estado emocional al cerebro. Aprende a dirigir su sinfonía."
                        </p>
                    </div>
                     <div className="p-6 bg-black/30 border border-yellow-500/20 rounded-lg">
                        <h4 className="text-xl font-display font-semibold text-yellow-400">Estudio de Caso: El Fénix del Parkinson</h4>
                        <p className="mt-2 text-gray-400">
                           "Cómo silencié mi Parkinson rediseñando mi cerebro. Una crónica de la batalla donde la neuroplasticidad y la voluntad forjaron una nueva realidad."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SoulAnatomist;
