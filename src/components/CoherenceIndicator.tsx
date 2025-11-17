import { Brain, Sparkles, Zap } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useAffirmativeLanguage } from '@/contexts/AffirmativeLanguageContext';
import { cn } from '@/lib/utils';

interface CoherenceIndicatorProps {
  percentage: number;
  className?: string;
}

export const CoherenceIndicator = ({ percentage, className }: CoherenceIndicatorProps) => {
  const { getCoherenceState } = useAffirmativeLanguage();
  const state = getCoherenceState(percentage);

  const getIcon = () => {
    if (percentage >= 71) return <Zap className="w-5 h-5 text-gold-600" />;
    if (percentage >= 31) return <Sparkles className="w-5 h-5 text-gold-400" />;
    return <Brain className="w-5 h-5 text-neutral-400" />;
  };

  const getColorClass = () => {
    if (percentage >= 71) return 'bg-gold-600';
    if (percentage >= 31) return 'bg-gold-400';
    return 'bg-neutral-400';
  };

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {getIcon()}
          <span className="text-sm font-medium text-foreground">{state}</span>
        </div>
        <span className="text-sm text-muted-foreground">{percentage}%</span>
      </div>
      <Progress 
        value={percentage} 
        className={cn("h-2", getColorClass())}
      />
    </div>
  );
};
