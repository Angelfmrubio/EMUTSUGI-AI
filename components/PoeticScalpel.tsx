
import React, { useState } from 'react';
import { generateHaiku } from '../services/geminiService';
import { PhoenixIcon, WandIcon } from './Icons';

const PoeticScalpel: React.FC = () => {
  const [belief, setBelief] = useState('');
  const [haiku, setHaiku] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateHaiku = async () => {
    if (!belief.trim()) return;
    setIsLoading(true);
    setHaiku('');
    const result = await generateHaiku(belief);
    setHaiku(result);
    setIsLoading(false);
  };

  return (
    <section id="herramientas" className="py-16 md:py-24">
      <div className="text-center mb-12">
        <h3 className="text-4xl md:text-5xl font-display font-bold text-white">
          El Bisturí Poético
        </h3>
        <p className="mt-4 max-w-2xl mx-auto text-gray-400">
          Herramientas forjadas para esculpir tu realidad interna.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Crisis Button */}
        <div className="bg-gray-900/50 border border-yellow-500/20 rounded-lg p-8 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <PhoenixIcon className="w-10 h-10 text-yellow-400" />
            <h4 className="text-2xl font-display font-semibold text-yellow-400">El Incendio y el Fénix</h4>
          </div>
          <p className="mt-4 text-gray-400">Protocolo de crisis P.S.S.A para transformar el caos en calma.</p>
          <p className="mt-4 text-sm text-gray-500 italic">"El dolor es temporal. Tú eres eterno. ¿Procedemos?"</p>
          <button className="mt-6 w-full py-3 bg-red-600 text-white font-bold rounded-md hover:bg-red-500 transition-all flex items-center justify-center gap-2">
            <PhoenixIcon className="w-5 h-5"/>
            Activar Protocolo de Crisis
          </button>
        </div>

        {/* Haiku Laboratory */}
        <div className="bg-gray-900/50 border border-yellow-500/20 rounded-lg p-8 backdrop-blur-sm">
          <div className="flex items-center gap-4">
             <WandIcon className="w-10 h-10 text-yellow-400" />
             <h4 className="text-2xl font-display font-semibold text-yellow-400">Laboratorio de Haikus</h4>
          </div>
          <p className="mt-4 text-gray-400">Introduce una creencia negativa. La IA la transformará en un haiku neuroplástico.</p>
          <textarea
            value={belief}
            onChange={(e) => setBelief(e.target.value)}
            placeholder="Ej: 'Soy un fracaso...'"
            className="mt-4 w-full p-2 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none text-white"
            rows={3}
          />
          <button 
            onClick={handleGenerateHaiku}
            disabled={isLoading}
            className="mt-4 w-full py-3 bg-yellow-400 text-black font-bold rounded-md hover:bg-yellow-300 transition-all disabled:bg-gray-600 disabled:cursor-not-allowed flex items-center justify-center gap-2">
            <WandIcon className="w-5 h-5"/>
            {isLoading ? 'Forjando Poesía...' : 'Transformar Creencia'}
          </button>
          
          {haiku && (
            <div className="mt-6 p-4 border-t border-yellow-500/20 text-center">
              <p className="text-lg font-display whitespace-pre-wrap text-yellow-300">{haiku}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PoeticScalpel;

