import { useAffirmativeLanguage } from '@/contexts/AffirmativeLanguageContext';

interface AffirmativeTextProps {
  children: string;
  force?: boolean;
}

export const AffirmativeText = ({ children, force = false }: AffirmativeTextProps) => {
  const { isEmutsugMode, transformText } = useAffirmativeLanguage();

  if (isEmutsugMode || force) {
    return <>{transformText(children)}</>;
  }

  return <>{children}</>;
};
