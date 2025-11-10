
import React from 'react';

const victories = [
    {
        author: "Guerrero Anónimo",
        text: "Hoy mi reptiliano quería gritar. Respiré, solté y actué con calma. Mi corazón late en coherencia."
    },
    {
        author: "Poeta Resiliente",
        text: "Transformé mi 'no puedo' en un haiku de poder. La palabra crea mundos, y hoy, el mío es más fuerte."
    },
    {
        author: "Arquitecta de Sueños",
        text: "Vi un viejo patrón de pensamiento emerger, lo observé sin juicio y elegí una nueva respuesta. Estoy reconstruyendo mi mente, viga a viga."
    }
]

const Community: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-900/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-white">
                        El Muro de los Oasis
                    </h3>
                    <p className="mt-4 max-w-2xl mx-auto text-gray-400">
                        Un espacio para compartir Poemas de Victoria, no problemas.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto space-y-6">
                    {victories.map((victory, index) => (
                        <div key={index} className="p-6 bg-black/30 border border-yellow-500/20 rounded-lg shadow-lg">
                            <p className="text-gray-300 italic">"{victory.text}"</p>
                            <p className="text-right mt-4 font-semibold text-yellow-400">- {victory.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Community;
