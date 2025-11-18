import { useState } from 'react';
import { Flame } from 'lucide-react';

const PSSA_PHASES = [
  { 
    icon: Flame, 
    title: "PENSAR - Observar la tormenta", 
    instruction: "Identifica el pensamiento. No lo juzgues. Solo nómbralo.",
    affirmation: "Tengo un pensamiento, no soy el pensamiento.",
    duration: 15000 
  },
  { 
    icon: Flame, 
    title: "SENTIR - Hacia el corazón", 
    instruction: "Lleva tu atención a tu pecho. Respira en esa sensación.",
    affirmation: "Mi SNIC (corazón) puede contener esto. Latiré con coherencia.",
    duration: 15000 
  },
  { 
    icon: Flame, 
    title: "SOLTAR - Cenizas doradas", 
    instruction: "Visualiza ese patrón quemándose. Convirtiéndose en luz.",
    affirmation: "Libero lo que ya no me sirve. Soy fénix.",
    duration: 15000 
  },
  { 
    icon: Flame, 
    title: "ACTUAR - Un paso", 
    instruction: "¿Qué acción pequeña y deliberada darás ahora?",
    affirmation: "Mi SNE (cuerpo) y SNC (mente) actúan juntos.",
    duration: 15000 
  },
];

export function CrisisButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [progress, setProgress] = useState(0);

  const startProtocol = () => {
    setIsActive(true);
    setCurrentPhase(0);
    setProgress(0);
    runPhase(0);
  };

  const runPhase = (phaseIndex: number) => {
    if (phaseIndex >= PSSA_PHASES.length) {
      completeProtocol();
      return;
    }

    const phase = PSSA_PHASES[phaseIndex];
    const interval = phase.duration / 100;
    let currentProgress = 0;

    const timer = setInterval(() => {
      currentProgress += 1;
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setCurrentPhase(phaseIndex + 1);
          runPhase(phaseIndex + 1);
        }, 500);
      }
    }, interval);
  };

  const completeProtocol = () => {
    setIsActive(false);
    setTimeout(() => {
      setIsOpen(false);
      setCurrentPhase(0);
      setProgress(0);
    }, 3000);
  };

  const phase = PSSA_PHASES[currentPhase] || PSSA_PHASES[PSSA_PHASES.length - 1];
  const PhaseIcon = phase.icon;

  return (
    <>
      {/* 🔥 BOTÓN DE CRISIS - SIEMPRE VISIBLE */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 
                   h-20 w-20 sm:h-20 sm:w-20 h-16 w-16 
                   rounded-full 
                   bg-gradient-to-br from-sne-500 to-snic-500 
                   shadow-[0_0_30px_rgba(244,114,182,0.3)] 
                   z-50 
                   animate-pulse-slow 
                   p-4 
                   hover:scale-110 
                   transition-transform
                   border-2 border-gold-500"
        aria-label="Protocolo de crisis inmediato"
        title="Protocolo P.S.S.A. - 60 segundos"
      >
        <Flame className="h-10 w-10 text-white" />
      </button>

      {/* MODAL DEL PROTOCOLO */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border-2 border-gold-500 rounded-2xl p-8 max-w-2xl w-full shadow-2xl">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-sne-500 to-snic-500 rounded-full flex items-center justify-center">
                <Flame className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gold-500 font-serif">El Incendio y el Fénix</h2>
              <p className="text-slate-400 mt-2">Protocolo P.S.S.A. - 60 segundos de coherencia</p>
            </div>

            {/* Contenido */}
            {!isActive ? (
              <div className="space-y-6">
                <p className="text-center text-xl text-slate-300 italic">
                  "El dolor es temporal. Tú eres eterno."
                </p>

                <div className="bg-slate-800 rounded-lg p-6">
                  <p className="text-slate-400 mb-4">
                    Este protocolo activará tu tridente neurológico en momentos críticos:
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    {PSSA_PHASES.map((p, i) => {
                      const Icon = p.icon;
                      return (
                        <div key={i} className="flex items-center gap-2 text-slate-300">
                          <Icon className="h-4 w-4 text-gold-500" />
                          <span>{p.title.split(' - ')[0]}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <button
                  onClick={startProtocol}
                  className="w-full py-4 bg-gradient-to-r from-sne-500 to-snic-500 text-white font-bold rounded-lg hover:shadow-lg transition-all"
                >
                  Iniciar Protocolo
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {currentPhase < PSSA_PHASES.length ? (
                  <>
                    {/* Fase actual */}
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-sne-500 to-snic-500 rounded-full flex items-center justify-center">
                        <PhaseIcon className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gold-500">{phase.title}</h3>
                    </div>

                    {/* Instrucción */}
                    <div className="bg-slate-800 rounded-lg p-6">
                      <p className="text-slate-300 text-lg mb-4">{phase.instruction}</p>
                      
                      {/* Barra de progreso */}
                      <div className="bg-slate-700 rounded-full h-2 overflow-hidden mb-4">
                        <div 
                          className="bg-gradient-to-r from-sne-500 to-snic-500 h-full transition-all duration-300"
                          style={{ width: `${progress}%` }}
                        />
                      </div>

                      {/* Afirmación */}
                      <p className="text-gold-400 text-center italic">
                        "{phase.affirmation}"
                      </p>
                    </div>

                    <p className="text-center text-slate-400 text-sm">
                      Fase {currentPhase + 1} de {PSSA_PHASES.length}
                    </p>
                  </>
                ) : (
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto bg-gold-500 rounded-full flex items-center justify-center">
                      ✨
                    </div>
                    <h3 className="text-2xl font-bold text-gold-500">Protocolo Completado</h3>
                    <p className="text-slate-300">
                      Tu tridente se recalibra. Has activado coherencia en tus tres cerebros.
                    </p>
                    <p className="text-gold-400 italic">
                      "El fénix emerge de sus propias cenizas doradas"
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}