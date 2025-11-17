
import React, { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { EvaluationSession, UserResponse, EvaluationResult } from "@/types";

interface EvaluationContextType {
  currentSession: EvaluationSession | null;
  startNewSession: () => void;
  addResponse: (question: string, answer: string, level: number) => void;
  completeEvaluation: () => void;
  getResults: () => EvaluationResult | undefined;
  clearSession: () => void;
}

const EvaluationContext = createContext<EvaluationContextType | undefined>(undefined);

export const useEvaluation = () => {
  const context = useContext(EvaluationContext);
  if (!context) {
    throw new Error("useEvaluation must be used within an EvaluationProvider");
  }
  return context;
};

export const EvaluationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentSession, setCurrentSession] = useState<EvaluationSession | null>(null);

  // Load from localStorage if available
  useEffect(() => {
    const savedSession = localStorage.getItem("evaluationSession");
    if (savedSession) {
      setCurrentSession(JSON.parse(savedSession));
    }
  }, []);

  // Save to localStorage when session changes
  useEffect(() => {
    if (currentSession) {
      localStorage.setItem("evaluationSession", JSON.stringify(currentSession));
    }
  }, [currentSession]);

  const startNewSession = () => {
    const newSession: EvaluationSession = {
      id: uuidv4(),
      responses: [],
      currentLevel: 1,
      completed: false,
    };
    setCurrentSession(newSession);
  };

  const addResponse = (question: string, answer: string, level: number) => {
    if (!currentSession) return;

    const newResponse: UserResponse = {
      id: uuidv4(),
      question,
      answer,
      level,
    };

    const updatedSession = {
      ...currentSession,
      responses: [...currentSession.responses, newResponse],
      currentLevel: level + 1,
    };

    setCurrentSession(updatedSession);
  };

  const completeEvaluation = () => {
    if (!currentSession) return;

    // This would typically call a more sophisticated algorithm
    // For now, we'll use a simple mock process
    const results: EvaluationResult = {
      level1: Math.random() * 10,
      level2: Math.random() * 10,
      level3: Math.random() * 10,
      level4: Math.random() * 10,
      level5: Math.random() * 10,
      level6: Math.random() * 10,
      level7: Math.random() * 10,
      strategies: [
        "Terapia cognitiva",
        "Acompañamiento psicológico",
        "Técnicas de relajación",
        "Mindfulness",
      ],
      requiresProfessional: Math.random() > 0.5,
    };

    const updatedSession = {
      ...currentSession,
      completed: true,
      results,
    };

    setCurrentSession(updatedSession);
  };

  const getResults = () => {
    return currentSession?.results;
  };

  const clearSession = () => {
    localStorage.removeItem("evaluationSession");
    setCurrentSession(null);
  };

  return (
    <EvaluationContext.Provider
      value={{
        currentSession,
        startNewSession,
        addResponse,
        completeEvaluation,
        getResults,
        clearSession,
      }}
    >
      {children}
    </EvaluationContext.Provider>
  );
};
