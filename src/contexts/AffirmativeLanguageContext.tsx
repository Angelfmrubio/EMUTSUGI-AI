import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { 
  affirmativeTransforms, 
  getCoherenceState as getCoherenceStateUtil,
  getAudioStateMessage,
  transformToAffirmative 
} from '@/utils/affirmativeLanguage';

interface Protocol {
  name: string;
  description: string;
  effect: string;
}

interface AffirmativeLanguageContextType {
  isEmutsugMode: boolean;
  toggleEmutsugMode: () => void;
  transformText: (text: string) => string;
  getCoherenceState: (percentage: number) => string;
  getProtocol: (name: keyof typeof affirmativeTransforms.protocols) => Protocol;
  getLifeLaw: (index: number) => string;
  getAudioState: (state: keyof typeof affirmativeTransforms.audioStates) => string;
}

const AffirmativeLanguageContext = createContext<AffirmativeLanguageContextType | undefined>(undefined);

export const AffirmativeLanguageProvider = ({ children }: { children: ReactNode }) => {
  const [isEmutsugMode, setIsEmutsugMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('emutsugi_mode');
    return saved === 'true';
  });

  useEffect(() => {
    localStorage.setItem('emutsugi_mode', isEmutsugMode.toString());
  }, [isEmutsugMode]);

  const toggleEmutsugMode = () => {
    setIsEmutsugMode(prev => !prev);
  };

  const transformText = (text: string): string => {
    if (!isEmutsugMode) return text;
    return transformToAffirmative(text);
  };

  const getCoherenceState = (percentage: number): string => {
    return getCoherenceStateUtil(percentage);
  };

  const getProtocol = (name: keyof typeof affirmativeTransforms.protocols): Protocol => {
    return affirmativeTransforms.protocols[name];
  };

  const getLifeLaw = (index: number): string => {
    return affirmativeTransforms.lifeLaws[index] || affirmativeTransforms.lifeLaws[0];
  };

  const getAudioState = (state: keyof typeof affirmativeTransforms.audioStates): string => {
    return getAudioStateMessage(state);
  };

  return (
    <AffirmativeLanguageContext.Provider
      value={{
        isEmutsugMode,
        toggleEmutsugMode,
        transformText,
        getCoherenceState,
        getProtocol,
        getLifeLaw,
        getAudioState,
      }}
    >
      {children}
    </AffirmativeLanguageContext.Provider>
  );
};

export const useAffirmativeLanguage = () => {
  const context = useContext(AffirmativeLanguageContext);
  if (context === undefined) {
    throw new Error('useAffirmativeLanguage must be used within an AffirmativeLanguageProvider');
  }
  return context;
};
