
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface EmotionalState {
  somatic: string;
  linguistic: string;
  systemic: string;
}

export const StepSixImplementation = () => {
  const [completedActions, setCompletedActions] = useState({
    somatic: false,
    linguistic: false,
    systemic: false,
  });
  
  const [emotionalStates, setEmotionalStates] = useState<EmotionalState>({
    somatic: 'neutral',
    linguistic: 'neutral',
    systemic: 'neutral',
  });

  const handleActionComplete = (action: keyof typeof completedActions) => {
    setCompletedActions(prev => ({
      ...prev,
      [action]: !prev[action]
    }));
    
    if (!completedActions[action]) {
      toast.success("¡Acción completada!", {
        description: "Has desbloqueado una nota dorada",
      });
    }
  };

  const getEmotionalColor = (state: string) => {
    switch (state) {
      case 'positive': return 'bg-green-200';
      case 'neutral': return 'bg-yellow-200';
      case 'negative': return 'bg-red-200';
      default: return 'bg-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6 space-y-4">
          {Object.entries({
            somatic: "Acción Somática",
            linguistic: "Acción Lingüística",
            systemic: "Acción Sistémica"
          }).map(([key, label]) => (
            <div key={key} className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Checkbox 
                  checked={completedActions[key as keyof typeof completedActions]}
                  onCheckedChange={() => handleActionComplete(key as keyof typeof completedActions)}
                  className="border-gold-500"
                />
                <span className="text-neutral-700">{label}</span>
              </div>
              <div 
                className={cn(
                  "w-4 h-4 rounded-full transition-colors",
                  getEmotionalColor(emotionalStates[key as keyof EmotionalState])
                )}
              />
              {completedActions[key as keyof typeof completedActions] && (
                <Star className="w-4 h-4 text-gold-500" />
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
