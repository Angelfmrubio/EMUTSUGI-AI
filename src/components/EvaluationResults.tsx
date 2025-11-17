
import { useEvaluation } from "@/contexts/EvaluationContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { pnlTechniques } from "@/utils/evaluationUtils";
import { Brain, Heart, Sparkles, Globe, Target, UserCheck, FileText } from "lucide-react";
import { CoherenceIndicator } from "@/components/CoherenceIndicator";
import { ProtocolsPanel } from "@/components/ProtocolsPanel";

export function EvaluationResults() {
  const { currentSession, getResults, clearSession } = useEvaluation();
  const navigate = useNavigate();
  const results = getResults();
  
  if (!currentSession?.completed || !results) {
    navigate("/evaluation");
    return null;
  }
  
  const handleStartNew = () => {
    clearSession();
    navigate("/");
  };
  
  const requiresAttention = results.level3 > 7 || results.level4 > 7;
  
  const calculateOverallCoherence = (): number => {
    const levels = [
      results.level1, results.level2, results.level3, results.level4,
      results.level5, results.level6, results.level7
    ];
    const avgIntensity = levels.reduce((acc, val) => acc + val, 0) / levels.length;
    return Math.round((10 - avgIntensity) * 10);
  };
  
  const getLevelIcon = (level: number) => {
    switch(level) {
      case 1: return <FileText className="text-gold-500" />;
      case 2: return <Sparkles className="text-gold-500" />;
      case 3: return <Heart className="text-gold-500" />;
      case 4: return <Brain className="text-gold-500" />;
      case 5: return <Globe className="text-gold-500" />;
      case 6: return <Target className="text-gold-500" />;
      case 7: return <UserCheck className="text-gold-500" />;
      default: return <Sparkles className="text-gold-500" />;
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-gold-600 to-gold-400 bg-clip-text text-transparent">
          Evaluación Completada
        </h1>
        <p className="text-lg text-neutral-600">
          Análisis multimodal de 7 niveles
        </p>
      </div>
      
      {/* Coherencia Tricerebral */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Coherencia Tricerebral General</h3>
          <CoherenceIndicator percentage={calculateOverallCoherence()} />
          <p className="text-sm text-muted-foreground mt-3">
            Este indicador refleja el equilibrio general de tus arquitecturas cerebrales basado en la evaluación multimodal.
          </p>
        </CardContent>
      </Card>
      
      {/* Results summary card */}
      <Card className="mb-10 overflow-hidden">
        <div className="bg-gradient-to-r from-gold-500/20 to-gold-300/20 p-6">
          <CardTitle className="text-2xl text-neutral-800">
            Resumen de Resultados
          </CardTitle>
          <p className="text-neutral-600 mt-2">
            El análisis indica {requiresAttention 
              ? "áreas que requieren atención profesional" 
              : "patrones que sugieren estrategias de autogestión"}.
          </p>
        </div>
        <CardContent className="pt-6">
          {/* Level indicators */}
          <div className="grid gap-4 md:grid-cols-2 mb-8">
            {Array.from({ length: 7 }).map((_, i) => {
              const level = i + 1;
              const value = results[`level${level}` as keyof typeof results] as number;
              const intensity = Math.min(Math.round((value / 10) * 100), 100);
              
              return (
                <div key={level} className="flex items-center gap-3 p-3 rounded-lg border border-neutral-200">
                  <div className="p-2 rounded-full bg-gold-50">
                    {getLevelIcon(level)}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-neutral-700">
                        {getLevelName(level)}
                      </span>
                      <span className="text-sm text-neutral-500">
                        {intensity}%
                      </span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${getIntensityColor(intensity)}`}
                        style={{ width: `${intensity}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Recommended strategies */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-neutral-800">Estrategias Recomendadas</h3>
            <ul className="space-y-2">
              {results.strategies.map((strategy, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-gold-500 mr-2">✧</span>
                  <span>{strategy}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* PNL Techniques */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-neutral-800">Técnicas PNL Sugeridas</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <TechniqueTile 
                title={pnlTechniques.anchoring.name}
                description={pnlTechniques.anchoring.application}
              />
              <TechniqueTile 
                title={pnlTechniques.reframing.name}
                description={pnlTechniques.reframing.application}
              />
              <TechniqueTile 
                title={pnlTechniques.pacing.name}
                description={pnlTechniques.pacing.application}
              />
            </div>
          </div>
          
          {/* Protocolos de Coherencia */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-neutral-800">
              Protocolos de Coherencia Recomendados
            </h3>
            <ProtocolsPanel />
          </div>
          
          {results.requiresProfessional && (
            <div className="mt-8 p-4 bg-gold-50 border border-gold-200 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-gold-700">Recomendación de Derivación</h3>
              <p className="text-neutral-700">
                Los resultados sugieren que podría beneficiarse de una consulta con un profesional especializado.
                Esta recomendación se basa en patrones identificados en la evaluación multimodal.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
      
      <div className="flex justify-center">
        <Button 
          onClick={handleStartNew}
          className="bg-gold-500 hover:bg-gold-600 text-white"
        >
          Finalizar y Volver al Inicio
        </Button>
      </div>
    </div>
  );
}

function getLevelName(level: number): string {
  const levels = {
    1: "Registro Inicial",
    2: "Análisis Semántico",
    3: "Patrón Emocional",
    4: "Estructura Cognitiva",
    5: "Influencia Contextual",
    6: "Estrategias Propositivas",
    7: "Recomendación Profesional"
  };
  
  return levels[level as keyof typeof levels] || "";
}

function getIntensityColor(intensity: number): string {
  if (intensity > 80) return "bg-red-500";
  if (intensity > 60) return "bg-amber-500";
  if (intensity > 40) return "bg-gold-500";
  return "bg-green-500";
}

interface TechniqueTileProps {
  title: string;
  description: string;
}

function TechniqueTile({ title, description }: TechniqueTileProps) {
  return (
    <div className="p-4 rounded-lg border border-neutral-200 bg-white">
      <h4 className="font-semibold mb-2 text-gold-700">{title}</h4>
      <p className="text-sm text-neutral-600">{description}</p>
    </div>
  );
}
