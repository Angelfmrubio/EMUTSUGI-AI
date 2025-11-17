import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Brain, Heart, Sparkles, Zap } from "lucide-react";

interface NeuropoeticMetrics {
  rigidezEmocional: number;
  capacidadCreativa: number;
  nivelSerotonina: number;
  potencialTransformacion: number;
}

export const NeuropoeticEvaluation = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState<string[]>([]);
  const [currentResponse, setCurrentResponse] = useState("");
  const [metrics, setMetrics] = useState<NeuropoeticMetrics | null>(null);

  const questions = [
    {
      category: "Análisis Neuropoético",
      question: "Describe una situación reciente donde cultivaste expansión mental. ¿Qué arquitecturas de pensamiento construyes?",
      icon: Brain,
      focus: "Detección de flexibilidad emocional"
    },
    {
      category: "Poder de Serotonina",
      question: "¿Cómo se manifiesta tu 'segundo cerebro' (intestino) cuando construyes equilibrio? ¿Qué conexión cultivas entre tu estado digestivo y emocional?",
      icon: Heart,
      focus: "Conexión SNE-SNC"
    },
    {
      category: "Capacidad de Autocreación", 
      question: "Imagina que 'esculpes tu cerebro' como decía Ramón y Cajal. ¿Qué arquitectura fortaleces primero y cómo la visualizas?",
      icon: Sparkles,
      focus: "Neuroplasticidad consciente"
    },
    {
      category: "Sistema Reticular Activador",
      question: "¿En qué tipo de construcciones se enfoca automáticamente tu mente? ¿Cómo programas tu atención hacia expansiones?",
      icon: Zap,
      focus: "Programación consciente"
    }
  ];

  const analyzeResponse = (allResponses: string[]) => {
    // Análisis simplificado basado en palabras clave y patrones
    const joinedText = allResponses.join(' ').toLowerCase();
    
    // Detección de flexibilidad emocional
    const flexibilityWords = ['puedo', 'construyo', 'cultivo', 'expando', 'creo', 'desarrollo'];
    const flexibilityScore = flexibilityWords.filter(word => joinedText.includes(word)).length;
    
    // Capacidad creativa
    const creativityWords = ['imagino', 'podría', 'crear', 'nuevo', 'diferente', 'posible'];
    const creativityScore = creativityWords.filter(word => joinedText.includes(word)).length;
    
    // Nivel de serotonina (basado en indicadores de bienestar)
    const wellnessWords = ['bien', 'tranquilo', 'relajado', 'feliz', 'equilibrio', 'coherencia'];
    const wellnessScore = wellnessWords.filter(word => joinedText.includes(word)).length;
    
    return {
      rigidezEmocional: Math.max(0, Math.min(100, 100 - (flexibilityScore * 15))),
      capacidadCreativa: Math.min(100, creativityScore * 20 + 30),
      nivelSerotonina: Math.min(100, wellnessScore * 18 + 40),
      potencialTransformacion: Math.min(100, (creativityScore * 10) + (flexibilityScore * 15) + 20)
    };
  };

  const handleNext = () => {
    const newResponses = [...responses, currentResponse];
    setResponses(newResponses);
    setCurrentResponse("");

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Análisis final
      const finalMetrics = analyzeResponse(newResponses);
      setMetrics(finalMetrics);
    }
  };

  const resetEvaluation = () => {
    setCurrentQuestion(0);
    setResponses([]);
    setCurrentResponse("");
    setMetrics(null);
  };

  if (metrics) {
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center">
            Análisis Neuropoético Completado
          </CardTitle>
          <p className="text-center text-muted-foreground">
            Partituras de Luz - Arquitecturas Doradas Identificadas
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Flexibilidad Emocional</span>
                  <span className="text-sm text-muted-foreground">{100 - metrics.rigidezEmocional}%</span>
                </div>
                <Progress value={100 - metrics.rigidezEmocional} />
                <p className="text-xs text-muted-foreground">
                  Nivel de patrones de pensamiento expansivos cultivados
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Capacidad Creativa</span>
                  <span className="text-sm text-muted-foreground">{metrics.capacidadCreativa}%</span>
                </div>
                <Progress value={metrics.capacidadCreativa} />
                <p className="text-xs text-muted-foreground">
                  Potencial para generar soluciones creativas
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Nivel Serotonina</span>
                  <span className="text-sm text-muted-foreground">{metrics.nivelSerotonina}%</span>
                </div>
                <Progress value={metrics.nivelSerotonina} />
                <p className="text-xs text-muted-foreground">
                  Equilibrio del sistema SNE-SNC detectado
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Potencial Transformación</span>
                  <span className="text-sm text-muted-foreground">{metrics.potencialTransformacion}%</span>
                </div>
                <Progress value={metrics.potencialTransformacion} />
                <p className="text-xs text-muted-foreground">
                  Capacidad de implementar cambios positivos
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10">
            <h4 className="font-semibold mb-2">Tu Partitura de Construcción Personalizada</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Basada en tu análisis neuropoético, estas son tus "arquitecturas doradas" - puntos de expansión:
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-3 rounded bg-background">
                <h5 className="font-medium text-sm">Acción Somática</h5>
                <p className="text-xs text-muted-foreground mt-1">
                  {metrics.nivelSerotonina < 50 ? 
                    "Técnicas de respiración y activación del nervio vago construyen estabilidad" :
                    "Mantener rutinas que nutren tu segundo cerebro expande bienestar"
                  }
                </p>
              </div>
              <div className="p-3 rounded bg-background">
                <h5 className="font-medium text-sm">Acción Lingüística</h5>
                <p className="text-xs text-muted-foreground mt-1">
                  {metrics.rigidezEmocional > 50 ?
                    "Transformar narrativas en metáforas expansivas cultiva flexibilidad" :
                    "Potenciar tu lenguaje generativo actual fortalece arquitecturas"
                  }
                </p>
              </div>
              <div className="p-3 rounded bg-background">
                <h5 className="font-medium text-sm">Acción Sistémica</h5>
                <p className="text-xs text-muted-foreground mt-1">
                  {metrics.potencialTransformacion > 70 ?
                    "Implementar construcciones graduales (Kaizen) manifiesta coherencia" :
                    "Fortalecer recursos internos cultiva bases sólidas para actuar"
                  }
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Button onClick={resetEvaluation} variant="outline">
              Nueva Evaluación
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const currentQ = questions[currentQuestion];
  const Icon = currentQ.icon;

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon className="text-primary" />
            <CardTitle>{currentQ.category}</CardTitle>
          </div>
          <span className="text-sm text-muted-foreground">
            {currentQuestion + 1} de {questions.length}
          </span>
        </div>
        <Progress value={(currentQuestion / questions.length) * 100} className="mt-2" />
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <p className="text-sm text-muted-foreground mb-2">{currentQ.focus}</p>
          <h3 className="text-lg font-medium mb-4">{currentQ.question}</h3>
          <Textarea
            value={currentResponse}
            onChange={(e) => setCurrentResponse(e.target.value)}
            placeholder="Reflexiona profundamente y cultiva tu experiencia..."
            className="min-h-[120px]"
          />
        </div>
        
        <div className="flex justify-end">
          <Button 
            onClick={handleNext}
            disabled={!currentResponse.trim()}
          >
            {currentQuestion < questions.length - 1 ? "Continuar" : "Completar Análisis"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};