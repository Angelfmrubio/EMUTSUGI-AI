import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Sparkles, 
  Brain, 
  Heart, 
  Zap,
  Music,
  Target,
  Compass
} from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { EmotionalStateSelector } from './EmotionalStateSelector';
import { AudioInput } from './AudioInput';
import { cn } from '@/lib/utils';

interface StepConfig {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
}

const STEPS: StepConfig[] = [
  { id: 1, title: 'Situación', subtitle: 'Describe tu momento actual', icon: <Compass className="h-5 w-5" />, color: 'text-sne' },
  { id: 2, title: 'Análisis', subtitle: 'Patrones de grietas', icon: <Brain className="h-5 w-5" />, color: 'text-snc' },
  { id: 3, title: 'Metáfora', subtitle: 'Partitura generativa', icon: <Sparkles className="h-5 w-5" />, color: 'text-kintsugi' },
  { id: 4, title: 'Aceptación', subtitle: 'Espacio poético', icon: <Heart className="h-5 w-5" />, color: 'text-snic' },
  { id: 5, title: 'Acción', subtitle: 'Protocolo trimodal', icon: <Target className="h-5 w-5" />, color: 'text-snc' },
  { id: 6, title: 'Registro', subtitle: 'Implementación', icon: <Zap className="h-5 w-5" />, color: 'text-kintsugi' },
  { id: 7, title: 'Resonancia', subtitle: 'Eco sistémico', icon: <Music className="h-5 w-5" />, color: 'text-snic' },
];

export const InteractiveEvaluationSteps = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [emotionalState, setEmotionalState] = useState<string | null>(null);
  const [problem, setProblem] = useState('');
  const [metaphor, setMetaphor] = useState('');
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const progress = (currentStep / STEPS.length) * 100;

  const canProceed = () => {
    if (currentStep === 1) {
      return emotionalState && (problem.trim() || audioBlob || audioFile);
    }
    return true;
  };

  const generateMetaphor = () => {
    const metaphors = [
      "Un jardín de pensamientos donde las flores son decisiones",
      "Un río de posibilidades con corrientes de oportunidad",
      "La danza de las sombras en el amanecer de la consciencia",
      "Un faro interior que guía a través de la niebla",
      "Semillas de oro que germinan en tierra fértil"
    ];
    return metaphors[Math.floor(Math.random() * metaphors.length)];
  };

  const handleNext = () => {
    if (!canProceed()) {
      toast.error('Completa este paso antes de continuar');
      return;
    }

    if (currentStep === 2 && !metaphor) {
      setMetaphor(generateMetaphor());
    }

    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }

    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1);
    } else {
      toast.success('¡Proceso completado! Tu transformación está en marcha.');
      navigate('/');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <EmotionalStateSelector 
              emotionalState={emotionalState} 
              setEmotionalState={setEmotionalState} 
            />
            <Textarea
              placeholder="Describe tu situación actual. ¿Qué deseas transformar?"
              className="min-h-[120px] bg-card border-border focus:border-kintsugi resize-none"
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
            />
            <AudioInput 
              onAudioRecorded={setAudioBlob}
              onAudioFileSelected={setAudioFile}
            />
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-snc to-kintsugi w-[70%] transition-all duration-1000" />
            </div>
            <Card className="bg-snc/10 border-snc/30">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Brain className="h-5 w-5 text-snc" />
                  <h3 className="font-medium text-snc">Análisis Neuropoético</h3>
                </div>
                <p className="text-sm text-foreground/80">
                  Se detecta un patrón de {emotionalState === "construccion" ? "construcción interna activa" : 
                    emotionalState === "expansion" ? "expansión territorial emergente" : 
                    emotionalState === "coherencia" ? "coherencia plena establecida" : 
                    "contemplación activa"} que puede potenciarse mediante metáforas de transformación.
                </p>
              </CardContent>
            </Card>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-sne text-sne">SNE Activo</Badge>
              <Badge variant="outline" className="border-snic text-snic">SNIC Receptivo</Badge>
              <Badge variant="outline" className="border-snc text-snc">SNC Integrado</Badge>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-kintsugi/10 to-snic/10 border-kintsugi/30 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="h-5 w-5 text-kintsugi animate-pulse" />
                  <h3 className="font-medium text-kintsugi">Metáfora Generativa</h3>
                </div>
                <p className="font-poetry text-lg text-foreground italic text-center">
                  {metaphor || "Generando tu partitura de luz..."}
                </p>
              </CardContent>
            </Card>
            <div className="flex gap-2 justify-center">
              {['suave', 'medio', 'fuerte'].map((level) => (
                <Button key={level} variant="outline" size="sm" className="border-kintsugi/50">
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </Button>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6 text-center">
            <Heart className="h-16 w-16 mx-auto text-snic animate-pulse" />
            <p className="font-poetry text-lg text-foreground/80 max-w-md mx-auto">
              "En el silencio del corazón<br/>
              toda grieta se convierte<br/>
              en camino de oro."
            </p>
            <p className="text-sm text-muted-foreground">
              Respira profundamente. Acepta este momento.
            </p>
          </div>
        );

      case 5:
        return (
          <div className="space-y-4">
            {['Acción Somática', 'Acción Lingüística', 'Acción Sistémica'].map((action, i) => (
              <Card key={action} className="bg-card border-border hover:border-kintsugi/50 transition-colors">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center",
                    i === 0 && "bg-sne/20 text-sne",
                    i === 1 && "bg-snc/20 text-snc",
                    i === 2 && "bg-snic/20 text-snic"
                  )}>
                    <Target className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{action}</h4>
                    <p className="text-sm text-muted-foreground">
                      {i === 0 && "Movimiento consciente del cuerpo"}
                      {i === 1 && "Reformulación del lenguaje interno"}
                      {i === 2 && "Acción en tu entorno"}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <Textarea
              placeholder="Registra tu experiencia y aprendizajes..."
              className="min-h-[150px] bg-card border-border focus:border-kintsugi resize-none"
            />
            <div className="flex gap-2 flex-wrap">
              <Badge className="bg-sne/20 text-sne border-sne">Cuerpo</Badge>
              <Badge className="bg-snc/20 text-snc border-snc">Mente</Badge>
              <Badge className="bg-snic/20 text-snic border-snic">Corazón</Badge>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6 text-center">
            <div className="relative">
              <Music className="h-20 w-20 mx-auto text-kintsugi" />
              <div className="absolute inset-0 h-20 w-20 mx-auto rounded-full bg-kintsugi/20 animate-ping" />
            </div>
            <h3 className="font-serif text-xl text-kintsugi">Eco Sistémico Activado</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Tu transformación genera ondas que impactan tu entorno. 
              Observa cómo el cambio interno se refleja en el mundo exterior.
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 space-y-8">
      {/* Progress Header */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Paso {currentStep} de {STEPS.length}</span>
          <span className="text-kintsugi font-medium">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2 bg-muted" />
        
        {/* Step Indicators */}
        <div className="flex justify-between">
          {STEPS.map((step) => (
            <button
              key={step.id}
              onClick={() => completedSteps.includes(step.id) && setCurrentStep(step.id)}
              className={cn(
                "flex flex-col items-center gap-1 transition-all",
                currentStep === step.id && "scale-110",
                completedSteps.includes(step.id) && "cursor-pointer",
                !completedSteps.includes(step.id) && currentStep !== step.id && "opacity-40"
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors",
                currentStep === step.id && "border-kintsugi bg-kintsugi/20",
                completedSteps.includes(step.id) && currentStep !== step.id && "border-green-500 bg-green-500/20",
                !completedSteps.includes(step.id) && currentStep !== step.id && "border-muted bg-muted/20"
              )}>
                {completedSteps.includes(step.id) && currentStep !== step.id ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <span className={step.color}>{step.icon}</span>
                )}
              </div>
              <span className="text-[10px] text-muted-foreground hidden md:block">{step.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Current Step Card */}
      <Card className="border-2 border-kintsugi/20 bg-gradient-to-br from-background to-kintsugi/5">
        <CardContent className="p-6 space-y-6">
          <div className="text-center">
            <h2 className="font-serif text-2xl text-foreground mb-1">
              {STEPS[currentStep - 1].title}
            </h2>
            <p className="text-sm text-muted-foreground">
              {STEPS[currentStep - 1].subtitle}
            </p>
          </div>

          {renderStepContent()}
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between gap-4">
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={currentStep === 1}
          className="flex-1"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Anterior
        </Button>
        <Button
          onClick={handleNext}
          className="flex-1 bg-gradient-to-r from-kintsugi to-snic hover:from-kintsugi/90 hover:to-snic/90"
        >
          {currentStep === STEPS.length ? (
            <>
              Completar
              <Check className="h-4 w-4 ml-2" />
            </>
          ) : (
            <>
              Siguiente
              <ArrowRight className="h-4 w-4 ml-2" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
};
