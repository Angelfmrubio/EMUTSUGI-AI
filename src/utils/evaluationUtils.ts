
import { EvaluacionPNL } from "@/types";

/**
 * Mock function that evaluates depression symptoms based on user text
 * In a real implementation, this would use NLP processing
 */
export function evaluarCasoDepresion(problema: string): EvaluacionPNL {
  // Simplified mock logic - would be replaced with actual NLP processing
  const words = problema.toLowerCase().split(/\s+/);
  
  // Check for depression indicators
  const negativeWords = ['triste', 'deprimido', 'cansado', 'solo', 'vacio', 'sin sentido', 'inútil', 'culpa', 'desesperanza'];
  const hitCount = words.filter(word => negativeWords.some(nw => word.includes(nw))).length;
  
  // Calculate depression level (0-10)
  const nivelDepresion = Math.min(hitCount * 1.5, 10);
  
  // Determine strategies based on severity
  let estrategias = [];
  let derivacion = false;
  
  if (nivelDepresion > 7) {
    estrategias = ['Intervención psiquiátrica', 'Terapia cognitiva', 'Acompañamiento psicológico'];
    derivacion = true;
  } else if (nivelDepresion > 4) {
    estrategias = ['Terapia cognitiva', 'Técnicas de activación conductual', 'Mindfulness'];
    derivacion = nivelDepresion > 6;
  } else {
    estrategias = ['Ejercicio físico', 'Mindfulness', 'Técnicas de relajación'];
    derivacion = false;
  }
  
  return {
    nivelDepresion,
    estrategiasRecomendadas: estrategias,
    derivacionProfesional: derivacion
  };
}

/**
 * Get evaluation questions for a specific level
 */
export function getQuestionsForLevel(level: number): string[] {
  const questions = {
    1: [
      "¿Cómo te has sentido durante las últimas semanas?",
      "¿Qué situaciones te generan mayor malestar?",
    ],
    2: [
      "Describe tus emociones predominantes en situaciones difíciles",
      "¿Qué palabras utilizarías para describir tu estado habitual?",
    ],
    3: [
      "¿Has notado patrones repetitivos en tus emociones?",
      "¿Cómo reaccionas típicamente ante el estrés?",
    ],
    4: [
      "¿Qué pensamientos surgen cuando te enfrentas a un desafío?",
      "¿Cómo describes tu proceso de toma de decisiones?",
    ],
    5: [
      "¿Qué aspectos de tu entorno contribuyen a tu bienestar?",
      "¿Cómo influyen las personas cercanas en tu estado emocional?",
    ],
    6: [
      "¿Qué estrategias has utilizado para afrontar situaciones difíciles?",
      "¿Qué recursos personales consideras más valiosos?",
    ],
    7: [
      "¿Has considerado buscar apoyo profesional?",
      "¿Qué expectativas tendrías sobre un proceso terapéutico?",
    ],
  };
  
  return questions[level as keyof typeof questions] || [];
}

/**
 * PNL techniques descriptions
 */
export const pnlTechniques = {
  anchoring: {
    name: "Anclaje",
    description: "Técnica que asocia un estímulo específico con un estado emocional deseado.",
    application: "Identificar y crear estímulos que evoquen estados positivos ante situaciones desafiantes."
  },
  reframing: {
    name: "Reencuadre",
    description: "Proceso de cambiar el marco de referencia a través del cual se percibe una situación.",
    application: "Transformar interpretaciones negativas en perspectivas constructivas y equilibradas."
  },
  pacing: {
    name: "Marcado del Paso",
    description: "Acompañamiento del ritmo y estado del interlocutor para establecer sintonía.",
    application: "Desarrollar conexión emocional para facilitar la transición hacia estados más positivos."
  }
};
