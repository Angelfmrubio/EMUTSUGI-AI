
import { EvaluationForm } from "@/components/EvaluationForm";
import { LifeLawsDisplay } from "@/components/LifeLawsDisplay";
import { useEffect } from "react";
import { useEvaluation } from "@/contexts/EvaluationContext";
import { useNavigate } from "react-router-dom";

const EvaluationPage = () => {
  const { currentSession, startNewSession } = useEvaluation();
  const navigate = useNavigate();
  
  useEffect(() => {
    // If session is completed, redirect to results
    if (currentSession?.completed) {
      navigate('/results');
      return;
    }
    
    // If no active session, start one
    if (!currentSession) {
      startNewSession();
    }
  }, [currentSession, startNewSession, navigate]);
  
  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-gold-600 to-gold-400 bg-clip-text text-transparent">
          Evaluación Multimodal
        </h1>
        
        <div className="max-w-2xl mx-auto mb-8 text-center">
          <p className="text-neutral-600 mb-6">
            Esta evaluación consta de 7 niveles de análisis. Sus respuestas serán procesadas 
            de forma anónima y confidencial para ofrecer recomendaciones basadas en evidencia.
          </p>
          
          <div className="p-4 rounded-lg bg-gold-50 border border-gold-200 mb-8">
            <h3 className="font-medium text-gold-700 mb-2">Principios de Evaluación</h3>
            <ul className="text-sm text-neutral-700 space-y-1 text-left">
              <li>• Anonimato garantizado en todo el proceso</li>
              <li>• Análisis semántico mediante algoritmos éticos</li>
              <li>• No constituye un autodiagnóstico definitivo</li>
              <li>• Recomendaciones basadas en evidencia científica</li>
            </ul>
          </div>
        </div>
        
        {/* Leyes de Vida */}
        <div className="max-w-2xl mx-auto mb-8">
          <LifeLawsDisplay />
        </div>
        
        <EvaluationForm />
      </div>
    </div>
  );
};

export default EvaluationPage;
