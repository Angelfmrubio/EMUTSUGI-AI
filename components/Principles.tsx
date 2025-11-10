
import React from 'react';
import { BrainIcon, HeartIcon, ZapIcon } from './Icons';

const principles = [
  {
    icon: <ZapIcon className="w-10 h-10 text-yellow-400" />,
    title: "El Guerrero (SNE)",
    description: "Tu sistema nervioso entérico, el 'cerebro reptiliano'. Responde al peligro y la supervivencia. Aprende a calmar su volcán latente.",
  },
  {
    icon: <HeartIcon className="w-10 h-10 text-yellow-400" />,
    title: "El Poeta (SNIC)",
    description: "Tu sistema nervioso cardíaco, el 'corazón límbico'. Un coro de 40,000 neuronas que cantan tu estado emocional. Cultiva su jardín.",
  },
  {
    icon: <BrainIcon className="w-10 h-10 text-yellow-400" />,
    title: "El Arquitecto (SNC)",
    description: "Tu sistema nervioso central, el 'neocórtex'. Diseña tus patrones mentales. Repara sus grietas para construir nuevas realidades.",
  },
];

const Principles: React.FC = () => {
  return (
    <section id="principios" className="py-16 md:py-24">
      <div className="text-center mb-12">
        <h3 className="text-4xl md:text-5xl font-display font-bold text-white">
          El Tridente de tu Ser
        </h3>
        <p className="mt-4 max-w-2xl mx-auto text-gray-400">
          Comprende tu ecosistema interno para convertirte en el Neuro-Orquestador de tu vida.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {principles.map((p, index) => (
          <div key={index} className="bg-gray-900/50 border border-yellow-500/20 rounded-lg p-8 text-center backdrop-blur-sm transition-all hover:border-yellow-500/50 hover:scale-105">
            <div className="flex justify-center mb-4">{p.icon}</div>
            <h4 className="text-2xl font-display font-semibold text-yellow-400">{p.title}</h4>
            <p className="mt-2 text-gray-400 text-sm leading-relaxed">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Principles;
