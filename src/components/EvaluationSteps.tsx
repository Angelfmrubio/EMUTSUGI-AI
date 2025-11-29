
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpenText, Music, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Step } from './Step';
import { EmotionalStateSelector } from './EmotionalStateSelector';
import { AudioInput } from './AudioInput';
import { PoetrySection } from "@/components/PoetrySection";
import { ActionProtocol } from "@/components/ActionProtocol";
import { StepSixImplementation } from "./StepSixImplementation";
import { StepSevenResonance } from "./StepSevenResonance";

interface EvaluationStepsProps {
  language?: string;
}

export const EvaluationSteps = ({ language = "es" }: EvaluationStepsProps) => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [emotionalState, setEmotionalState] = useState<string | null>(null);
  const [problem, setProblem] = useState("");
  const [generatedMetaphor, setGeneratedMetaphor] = useState("");
  const [actionLevel, setActionLevel] = useState<string>("medio");
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioFile, setAudioFile] = useState<File | null>(null);

  const nextStep = () => {
    if (currentStep === 0 && !emotionalState) {
      toast.error("Por favor selecciona cómo te sientes");
      return;
    }
    
    if (currentStep === 0 && !problem && !audioBlob && !audioFile) {
      toast.error("Por favor describe tu problema o sube un audio");
      return;
    }
    
    if (currentStep === 2 && !generatedMetaphor) {
      const metaphors = [
        "Un jardín de pensamientos donde las flores son decisiones",
        "Un río de posibilidades con corrientes de oportunidad",
        "Una llave dorada que abre puertas invisibles",
        "La danza de las sombras en el amanecer de la consciencia"
      ];
      setGeneratedMetaphor(metaphors[Math.floor(Math.random() * metaphors.length)]);
    }
    
    setCurrentStep((prev) => Math.min(prev + 1, 6));
  };

  return (
    <div className="max-w-2xl mx-auto px-4">
      <Step 
        isActive={currentStep === 0} 
        onNext={nextStep} 
        title="PASO 1: DESCRIBE TU SITUACIÓN"
        description="Este es el inicio de tu camino de transformación. Describe tu situación actual con tus propias palabras."
      >
        <div className="space-y-4">
          <EmotionalStateSelector 
            emotionalState={emotionalState} 
            setEmotionalState={setEmotionalState} 
          />
          <Textarea
            placeholder="Describe tu situación actual. ¿Qué deseas transformar en este momento?"
            className="min-h-[120px] text-neutral-800 resize-none border-neutral-300 focus:border-gold-400 focus:ring-gold-400"
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
          />
          <AudioInput 
            onAudioRecorded={setAudioBlob}
            onAudioFileSelected={setAudioFile}
          />
        </div>
      </Step>

      <Step 
        isActive={currentStep === 1} 
        onNext={nextStep} 
        title="PASO 2: ANÁLISIS DE GRIETAS"
        description="Exploramos los patrones de rigidez emocional para encontrar oportunidades de transformación."
      >
        <div className="space-y-4">
          <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
            <div className="h-full bg-gold-500 w-[70%] transition-all duration-1000"></div>
          </div>
          
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-4">
              <h3 className="font-medium text-blue-700 mb-2 flex items-center">
                <BookOpenText className="w-4 h-4 mr-2" />
                Análisis Neuropoético
              </h3>
              <p className="text-sm text-neutral-700">
                Se detecta un patrón de {emotionalState === "triste" ? "retrospección circular" : 
                  emotionalState === "ansioso" ? "anticipación limitante" : 
                  emotionalState === "reflexivo" ? "estructura cognitiva difusa" : 
                  "procesamiento emocional equilibrado"} que puede transformarse mediante metáforas de {emotionalState === "triste" ? "expansión" : 
                  emotionalState === "ansioso" ? "anclaje presente" : 
                  emotionalState === "reflexivo" ? "cristalización" : "flujo natural"}.
              </p>
            </CardContent>
          </Card>
          
          <Button variant="outline" className="w-full"
            onClick={() => toast.info("Glosario de discinesias mostrado", {
              description: "Patrones de rigidez emocional y sus manifestaciones somáticas"
            })}>
            Glosario de 'Discinesias del Alma'
          </Button>
        </div>
      </Step>

      <Step 
        isActive={currentStep === 2} 
        onNext={nextStep} 
        title="PASO 3: GENERADOR DE PARTITURAS"
        description="Transformamos tu situación en una partitura de luz, una metáfora generativa para guiar tu cambio."
      >
        <div className="space-y-4">
          <Card className="bg-gold-50 border-gold-200 overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-center mb-3">
                <Sparkles className="text-gold-500 w-5 h-5 mr-2" />
                <h3 className="font-semibold text-neutral-800">Metáfora Generativa</h3>
              </div>
              <p className="italic text-neutral-700">
                {generatedMetaphor || "Generando metáfora personalizada..."}
              </p>
              {!generatedMetaphor && (
                <div className="w-full h-1 bg-neutral-200 mt-4 overflow-hidden">
                  <div className="h-full bg-gold-500 animate-pulse w-full"></div>
                </div>
              )}
            </CardContent>
          </Card>
          
          <div className="space-y-2">
            <span className="block text-sm text-neutral-700">Intensidad de las acciones:</span>
            <div className="flex gap-2">
              {["suave", "medio", "fuerte"].map((level) => (
                <Button 
                  key={level}
                  variant={actionLevel === level ? "default" : "outline"}
                  className={actionLevel === level ? "bg-gold-500 hover:bg-gold-600" : ""}
                  onClick={() => setActionLevel(level)}
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </Step>
      
      <Step 
        isActive={currentStep === 3} 
        onNext={nextStep} 
        title="PASO 4: ESPACIO DE ACEPTACIÓN"
        description="Un espacio de reflexión consciente donde la poesía y el sonido guían tu experiencia."
      >
        <PoetrySection emotionalState={emotionalState || undefined} />
      </Step>

      <Step 
        isActive={currentStep === 4} 
        onNext={nextStep} 
        title="PASO 5: PROTOCOLO DE 3 ACCIONES"
        description="Tres acciones concretas para implementar el cambio en diferentes niveles."
      >
        <ActionProtocol />
      </Step>

      <Step 
        isActive={currentStep === 5} 
        onNext={nextStep} 
        title="PASO 6: IMPLEMENTA Y REGISTRA"
        description="Lleva a cabo las acciones y registra tus experiencias."
      >
        <StepSixImplementation />
      </Step>

      <Step 
        isActive={currentStep === 6} 
        onNext={() => {
          setCurrentStep(0);
          navigate("/");
          toast.success("¡Proceso completado! Comienza una nueva transformación cuando lo necesites.");
        }} 
        title="PASO 7: ECO SISTÉMICO"
        description="Observa el impacto de tu transformación en tu entorno y en otros."
      >
        <StepSevenResonance />
      </Step>
    </div>
  );
};
