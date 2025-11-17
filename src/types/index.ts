
export interface EvaluacionPNL {
  nivelDepresion: number;
  estrategiasRecomendadas: string[];
  derivacionProfesional: boolean;
}

export interface EvaluationResult {
  level1: number; // Initial
  level2: number; // Semantic
  level3: number; // Emotional
  level4: number; // Cognitive
  level5: number; // Contextual
  level6: number; // Propositional
  level7: number; // Derivation
  strategies: string[];
  requiresProfessional: boolean;
}

export interface UserResponse {
  id: string;
  question: string;
  answer: string;
  level: number;
}

export interface EvaluationSession {
  id: string;
  responses: UserResponse[];
  currentLevel: number;
  completed: boolean;
  results?: EvaluationResult;
}
