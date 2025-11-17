
import { EvaluationResults } from "@/components/EvaluationResults";
import { useEffect } from "react";
import { useEvaluation } from "@/contexts/EvaluationContext";
import { useNavigate } from "react-router-dom";

const ResultsPage = () => {
  const { currentSession } = useEvaluation();
  const navigate = useNavigate();
  
  useEffect(() => {
    // If no session or session not completed, redirect to evaluation
    if (!currentSession || !currentSession.completed) {
      navigate('/evaluation');
    }
  }, [currentSession, navigate]);
  
  if (!currentSession?.completed) {
    return null;
  }
  
  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="container mx-auto px-4">
        <EvaluationResults />
      </div>
    </div>
  );
};

export default ResultsPage;
