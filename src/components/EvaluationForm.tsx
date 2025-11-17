
import { useState } from "react";
import { useEvaluation } from "@/contexts/EvaluationContext";
import { getQuestionsForLevel } from "@/utils/evaluationUtils";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export function EvaluationForm() {
  const { currentSession, addResponse, completeEvaluation } = useEvaluation();
  const navigate = useNavigate();
  const [answer, setAnswer] = useState("");
  
  if (!currentSession) {
    return <div>No hay una sesión activa</div>;
  }
  
  const currentLevel = currentSession.currentLevel;
  const questions = getQuestionsForLevel(currentLevel);
  const currentQuestion = questions[0] || "No hay más preguntas para este nivel";
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (answer.trim()) {
      addResponse(currentQuestion, answer, currentLevel);
      setAnswer("");
      
      // If we've reached the end, complete evaluation and go to results
      if (currentLevel >= 7) {
        completeEvaluation();
        navigate("/results");
      }
    }
  };
  
  // UI element that shows progress through golden cracks
  const LevelIndicator = () => {
    return (
      <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden mb-6">
        <div 
          className="h-full bg-gradient-to-r from-gold-400 to-gold-600"
          style={{ width: `${(currentLevel / 7) * 100}%` }}
        ></div>
      </div>
    );
  };
  
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center">
          <h2 className="text-2xl font-semibold text-neutral-800">Nivel {currentLevel} de 7</h2>
          <p className="text-sm text-neutral-500 mt-1">
            {getLevelName(currentLevel)}
          </p>
        </CardTitle>
        <LevelIndicator />
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-lg mb-2 text-neutral-700">{currentQuestion}</label>
            <Textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Escribe tu respuesta aquí..."
              className="min-h-[150px] border-neutral-300 focus:border-gold-400 focus:ring-gold-400"
              required
            />
          </div>
          <div className="flex justify-center">
            <Button 
              type="submit"
              className="bg-gold-500 hover:bg-gold-600 text-white min-w-[180px]"
            >
              {currentLevel >= 7 ? "Finalizar Evaluación" : "Continuar"}
            </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className="text-center text-sm text-neutral-500 border-t pt-4">
        <p className="w-full">Sus respuestas son anónimas y serán analizadas mediante algoritmos éticos.</p>
      </CardFooter>
    </Card>
  );
}

function getLevelName(level: number): string {
  const levels = {
    1: "Nivel Inicial - Registro anónimo",
    2: "Nivel Semántico - Análisis de lenguaje",
    3: "Nivel Emocional - Detección de patrones",
    4: "Nivel Cognitivo - Mapeo de pensamiento",
    5: "Nivel Contextual - Entorno y circunstancias",
    6: "Nivel Propositivo - Generación de estrategias",
    7: "Nivel de Derivación - Recomendación profesional"
  };
  
  return levels[level as keyof typeof levels] || "";
}
