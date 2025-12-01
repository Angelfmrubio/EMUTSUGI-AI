export interface Haiku {
  id: string;
  text: string;
  author: string;
  emotion: 'crisis' | 'triste' | 'ansioso' | 'neutral' | 'calmado' | 'expansivo';
  nervousSystem: 'sne' | 'snic' | 'snc' | 'triuno';
  neurochemical: 'serotonina' | 'dopamina' | 'oxitocina' | 'endorfinas';
  phase?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  tags: string[];
  useCase: 'crisis' | 'diario' | 'transformacion' | 'reflexion';
  viewCount?: number;
}

export interface HaikuContext {
  emotion?: 'crisis' | 'triste' | 'ansioso' | 'neutral' | 'calmado' | 'expansivo';
  activeNervousSystem?: 'sne' | 'snic' | 'snc' | 'triuno';
  currentPhase?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  isCrisis?: boolean;
}

export interface HaikuLibrary {
  version: string;
  totalHaikus: number;
  library: Haiku[];
}
