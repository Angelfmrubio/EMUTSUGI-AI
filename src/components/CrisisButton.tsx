import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Flame, Sparkles, Heart, Brain, Footprints } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const PSSA_PHASES = [
  {
    id: 'pensar',
    icon: Brain,
    title: 'PENSAR - El Observador',
    instruction: 'Identifica el pensamiento. Obsérvalo con curiosidad.',
    affirmation: 'Mi mente reconoce patrones. Soy el testigo consciente de mis pensamientos.',
    color: 'from-gold-400 to-gold-600',
    duration: 15000,
  },
  {
    id: 'sentir',
    icon: Heart,
    title: 'SENTIR - El Corazón Maestro',
    instruction: 'Lleva tu atención al corazón. Respira en esa sensación.',
    affirmation: '40,000 neuronas cantan en mi corazón. Respiro coherencia en cada latido.',
    color: 'from-rose-400 to-rose-600',
    duration: 20000,
  },
  {
    id: 'soltar',
    icon: Sparkles,
    title: 'SOLTAR - La Alquimia Interna',
    instruction: 'Visualiza ese patrón transformándose en ceniza dorada.',
    affirmation: 'Cada final cultiva un nuevo comienzo. Mi energía se reorganiza con propósito.',
    color: 'from-amber-400 to-amber-600',
    duration: 15000,
  },
  {
    id: 'actuar',
    icon: Footprints,
    title: 'ACTUAR - El Paso Deliberado',
    instruction: 'Define tu próxima acción pequeña y concreta.',
    affirmation: 'Soy el arquitecto de mi próximo momento. Cada paso construye mi realidad.',
    color: 'from-emerald-400 to-emerald-600',
    duration: 10000,
  },
];

export const CrisisButton = () => {
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
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-2xl bg-gradient-to-br from-rose-500 to-orange-600 hover:from-rose-600 hover:to-orange-700 z-50 animate-pulse"
        title="Protocolo de Crisis"
      >
        <Flame className="w-8 h-8 text-white" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white border-gold-500/20">
          <DialogHeader>
            <DialogTitle className="text-3xl text-center bg-gradient-to-r from-gold-300 to-gold-100 bg-clip-text text-transparent">
              El Incendio y el Fénix
            </DialogTitle>
          </DialogHeader>

          {!isActive ? (
            <div className="space-y-6 py-6">
              <p className="text-xl text-center text-gold-200 italic">
                "El dolor es temporal. Tú eres eterno."
              </p>
              
              <Card className="bg-neutral-800/50 border-gold-500/30 p-6">
                <p className="text-lg text-center mb-6 text-neutral-200">
                  Este protocolo P.S.S.A. activará tu coherencia tricerebral en momentos críticos.
                  Cada fase construye sobre la anterior, transformando la intensidad en claridad.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {PSSA_PHASES.map((p, i) => {
                    const Icon = p.icon;
                    return (
                      <div key={p.id} className="flex items-center gap-3 p-3 bg-neutral-900/50 rounded-lg">
                        <Icon className="w-6 h-6 text-gold-400" />
                        <span className="text-sm text-neutral-300">{p.title.split(' - ')[0]}</span>
                      </div>
                    );
                  })}
                </div>

                <p className="text-center text-sm text-gold-300 mb-4">
                  Duración total: 60 segundos de coherencia guiada
                </p>
              </Card>

              <Button
                onClick={startProtocol}
                className="w-full py-6 text-lg bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700"
              >
                Iniciar Protocolo
              </Button>
            </div>
          ) : (
            <div className="space-y-6 py-6">
              {currentPhase < PSSA_PHASES.length ? (
                <>
                  <div className="flex flex-col items-center gap-4">
                    <div className={`p-6 rounded-full bg-gradient-to-br ${phase.color} shadow-2xl animate-pulse`}>
                      <PhaseIcon className="w-12 h-12 text-white" />
                    </div>
                    
                    <h3 className={`text-2xl font-bold text-center bg-gradient-to-r ${phase.color} bg-clip-text text-transparent`}>
                      {phase.title}
                    </h3>
                  </div>

                  <Card className="bg-neutral-800/50 border-gold-500/30 p-6 space-y-4">
                    <p className="text-xl text-center text-gold-200">
                      {phase.instruction}
                    </p>
                    
                    <div className="h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
                    
                    <p className="text-lg text-center italic text-neutral-300">
                      "{phase.affirmation}"
                    </p>
                  </Card>

                  <div className="space-y-2">
                    <Progress value={progress} className="h-2" />
                    <p className="text-xs text-center text-neutral-400">
                      Fase {currentPhase + 1} de {PSSA_PHASES.length}
                    </p>
                  </div>
                </>
              ) : (
                <Card className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/30 border-emerald-500/30 p-8">
                  <div className="text-center space-y-4">
                    <Sparkles className="w-16 h-16 mx-auto text-gold-400 animate-pulse" />
                    <h3 className="text-2xl font-bold text-gold-200">
                      Protocolo Completado
                    </h3>
                    <p className="text-lg text-neutral-200">
                      Tu tridente se recalibra. Has activado coherencia en tus tres cerebros.
                    </p>
                    <p className="text-sm italic text-gold-300">
                      "El fénix emerge de sus propias cenizas doradas"
                    </p>
                  </div>
                </Card>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
