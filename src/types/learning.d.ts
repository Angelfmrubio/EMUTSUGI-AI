
export type LearningStyle = 'visual' | 'auditory' | 'kinesthetic';

export interface LearningPreferences {
  style: LearningStyle;
  lastUpdated: string;
}
