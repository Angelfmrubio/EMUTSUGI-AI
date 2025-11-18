import { useState } from 'react';
import { Flame } from 'lucide-react';

const WELLBEING_PROTOCOL = [
  { 
    icon: Flame, 
    title: "Claridad - Observar con calma", 
    instruction: "Identifica el pensamiento con curiosidad amable. Nómbralo sin juzgar.",
    affirmation: "Yo soy el observador consciente de mis pensamientos.",
    duration: 15000 
  },
  { 
    icon: Flame, 
    title: "Conexión - Escuchar el corazón", 
    instruction: "Lleva tu atención a tu pecho. Respira con suavidad en esa sensación.",
    affirmation: "Mi corazón contiene toda la fuerza que necesito ahora.",
    duration: 15000 
  },
  { 
    icon: Flame, 
    title: "Liberar - Transformar en luz", 
    instruction: "Visualiza ese patrón transformándose en energía útil.",
    affirmation: "Transformo lo que ya no me sirve en sabiduría interior.",
    duration: 15000 
  },
  { 
    icon: Flame, 
    title: "Potencia - Primer paso consciente", 
    instruction: "Elige una acción pequeña que alinee con tu bienestar.",
    affirmation: "Mi mente, corazón y cuerpo actúan en armonía ahora.",
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
    if (phaseIndex >= WELLBEING_PROTOCOL.length) {
      completeProtocol();
      return;
    }

    const phase = WELLBEING_PROTOCOL[phaseIndex];
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

  const phase = WELLBEING_PROTOCOL[currentPhase] || WELLBEING_PROTOCOL[WELLBEING_PROTOCOL.length - 1];
  const PhaseIcon = phase.icon;

  return (
    <>
      {/* BOTÓN DE BIENESTAR INMEDIATO */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 h-18 w-18 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 shadow-[0_0_30px_rgba(245,158,11,0.3)] z-50 hover:scale-110 transition-transform border-2 border-amber-300"
        aria-label="Activar bienestar inmediato"
        title="Protocolo de Coherencia - 60 segundos"
      >
        <Flame className="h-10 w-10 text-white" />
      </button>

      {/* MODAL */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-amber-500 rounded-2xl p-8 max-w-2xl w-full shadow-2xl">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                <Flame className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-amber-500 font-serif">Protocolo de Coherencia</h2>
              <p className="text-slate-400 mt-2">60 segundos para tu bienestar integral</p>
            </div>

            {/* Contenido */}
            {!isActive ? (
              <div className="space-y-6">
                <p className="text-center text-xl text-slate-300 italic">
                  "Cada momento es una nueva oportunidad."
                </p>

                <div className="bg-slate-800 rounded-lg p-6">
                  <p className="text-slate-400 mb-4">
                    Este protocolo activa tu tridente neurológico:
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    {WELLBEING_PROTOCOL.map((p, i) => {
                      const Icon = p.icon;
                      return (
                        <div key={i} className="flex items-center gap-2 text-slate-300">
                          <Icon className="h-4 w-4 text-amber-500" />
                          <span>{p.title.split(' - ')[0]}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <button
                  onClick={startProtocol}
                  className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-lg hover:shadow-lg transition-all"
                >
                  Iniciar
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {currentPhase < WELLBEING_PROTOCOL.length ? (
                  <>
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                        <PhaseIcon className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-amber-500">{phase.title}</h3>
                    </div>

                    <div className="bg-slate-800 rounded-lg p-6">
                      <p className="text-slate-300 text-lg mb-4">{phase.instruction}</p>
                      
                      <div className="bg-slate-700 rounded-full h-2 overflow-hidden mb-4">
                        <div 
                          className="bg-gradient-to-r from-amber-500 to-orange-500 h-full transition-all duration-300"
                          style={{ width: `${progress}%` }}
                        />
                      </div>

                      <p className="text-amber-400 text-center italic">
                        "{phase.affirmation}"
                      </p>
                    </div>

                    <p className="text-center text-slate-400 text-sm">
                      Fase {currentPhase + 1} de {WELLBEING_PROTOCOL.length}
                    </p>
                  </>
                ) : (
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto bg-amber-500 rounded-full flex items-center justify-center">
                      ✨
                    </div>
                    <h3 className="text-2xl font-bold text-amber-500">Protocolo Completado</h3>
                    <p className="text-slate-300">
                      Tu tridente neurológico está en coherencia. Has activado tu bienestar integral.
                    </p>
                    <p className="text-amber-400 italic">
                      "El fénix surge de su propia transformación"
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