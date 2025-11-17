/**
 * EMUTSUGI - DICCIONARIO DE TRANSFORMACIÓN LÉXICA
 * Arquitectura Cajal: Codificación Afirmativa Pura
 */

export const affirmativeTransforms = {
  // Estados de Coherencia Tricerebral
  coherenceStates: {
    low: "Coherencia Emergente - Sistemas estableciendo diálogo",
    medium: "Coherencia Expansiva - Señales sincronizando frecuencias",
    high: "Coherencia Armónica - Tres cerebros en resonancia perfecta"
  },
  
  // Estados de Audio/Radio
  audioStates: {
    playing: "Frecuencia Kintsunah activa - Coherencia transmitiéndose",
    paused: "Frecuencia se recalibra - Tu coherencia interior permanece",
    loading: "Frecuencia preparando transmisión óptima",
    buffering: "Frecuencia optimizando flujo de coherencia",
    error: "Frecuencia en recalibración armónica"
  },
  
  // Protocolos de Reprogramación
  protocols: {
    radiance: {
      name: "POTENCIA RADIANTE",
      description: "Activa luminosidad interior y claridad mental",
      effect: "snic_coherencia += 25%"
    },
    serenity: {
      name: "SERENIDAD ACTIVA", 
      description: "Activa fluidez digestiva y estabilidad visceral",
      effect: "sne_actividad = 85%"
    },
    clarity: {
      name: "CLARIDAD EXPANSIVA",
      description: "Activa perspectivas múltiples y pensamiento flexible",
      effect: "snc_claridad += 30%"
    },
    vitality: {
      name: "VITALIDAD INTEGRADA",
      description: "Activa todos los sistemas en resonancia",
      effect: "Todos los sistemas al 70%"
    }
  },
  
  // Las 4 Leyes de Vida Funcional - Versión Constructiva
  lifeLaws: [
    "La vida ofrece oportunidades únicas de coherencia",
    "Cada experiencia expande mi arquitectura interna",
    "Cada camino cultiva su propia sabiduría",
    "Los ciclos perfeccionan la obra en progreso"
  ],
  
  // Principios de Actitud Previa - Versión Constructiva
  principles: {
    think: {
      label: "Construir Pensamientos",
      description: "Sistema Reticular Activador Ascendente",
      prompt: "¿Cómo programas tu mente para enfocarte en construcciones?"
    },
    feel: {
      label: "Cultivar Sensaciones",
      description: "Neuroplasticidad Consciente",
      prompt: "Describe la sensación que cultivas en tu cuerpo y mente..."
    },
    release: {
      label: "Expandir Espacios",
      description: "Mutear el Ruido Mental",
      prompt: "¿Qué espacios expandes para crear libertad mental?"
    },
    act: {
      label: "Manifestar Coherencia",
      description: "Sin Miedo al Miedo",
      prompt: "Define tu próxima acción concreta de manifestación..."
    }
  },
  
  // Frases del Taller de Certeza
  certaintyWorkshop: [
    "Las manos que dan forma al barro, le dan forma a la certeza",
    "La fe es el eco de tu propia obra, resonando de vuelta hacia ti",
    "Cada creación es una semilla de convicción que plantas en el mundo",
    "El hacer repetido construye la arquitectura de la certeza",
    "Tus obras son los cimientos sobre los que se edifica tu fe",
    "La duda se disuelve en la acción consciente y repetida",
    "Cada gesto creativo es un acto de fe materializado",
    "El artesano encuentra la verdad en sus manos, no en su mente",
    "La certeza nace del hacer, no del pensar sobre el hacer",
    "Tu obra es tu oración, tu creación es tu respuesta"
  ],
  
  // Transformaciones Léxicas Generales
  lexicon: {
    problem: "oportunidad de coherencia",
    error: "exploración de patrones",
    failure: "recalibración necesaria",
    stress: "energía en reorganización",
    anxiety: "expansión hacia nuevos territorios",
    depression: "pausa para construcción interna",
    avoid: "cultivar",
    notWorking: "se recalibra con propósito",
    cannotDo: "desarrollando capacidad para",
    difficult: "desafiante y constructivo"
  }
};

/**
 * Obtiene el estado de coherencia basado en un porcentaje
 */
export function getCoherenceState(percentage: number): string {
  if (percentage >= 71) return affirmativeTransforms.coherenceStates.high;
  if (percentage >= 31) return affirmativeTransforms.coherenceStates.medium;
  return affirmativeTransforms.coherenceStates.low;
}

/**
 * Obtiene descripción afirmativa para un estado de audio
 */
export function getAudioStateMessage(state: keyof typeof affirmativeTransforms.audioStates): string {
  return affirmativeTransforms.audioStates[state] || affirmativeTransforms.audioStates.error;
}

/**
 * Transforma un texto usando el diccionario léxico afirmativo
 */
export function transformToAffirmative(text: string): string {
  let transformed = text;
  Object.entries(affirmativeTransforms.lexicon).forEach(([negative, positive]) => {
    const regex = new RegExp(negative, 'gi');
    transformed = transformed.replace(regex, positive);
  });
  return transformed;
}
