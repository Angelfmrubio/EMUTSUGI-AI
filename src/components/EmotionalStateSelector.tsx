
import { cn } from "@/lib/utils";

interface EmotionColor {
  color: string;
  emotion: string;
  description: string;
}

interface EmotionalStateSelectorProps {
  emotionalState: string | null;
  setEmotionalState: (state: string) => void;
}

export const EmotionalStateSelector = ({ emotionalState, setEmotionalState }: EmotionalStateSelectorProps) => {
  const emotionColors: EmotionColor[] = [
    { color: "bg-red-500", emotion: "construccion", description: "Construcción Interna" },
    { color: "bg-yellow-500", emotion: "expansion", description: "Expansión Territorial" },
    { color: "bg-green-500", emotion: "coherencia", description: "Coherencia Plena" },
    { color: "bg-blue-500", emotion: "contemplacion", description: "Contemplación Activa" }
  ];

  return (
    <div>
      <span className="block mb-2 text-neutral-700">¿Qué estado cultivas en este momento?</span>
      <div className="flex gap-4">
        {emotionColors.map(({ color, emotion, description }) => (
          <button
            key={emotion}
            onClick={() => setEmotionalState(emotion)}
            className={cn(
              "flex flex-col items-center gap-2 transition-transform hover:scale-110",
              emotionalState === emotion ? "ring-2 ring-offset-2 ring-gold-500" : ""
            )}
            aria-label={emotion}
          >
            <div className={cn(
              "w-8 h-8 rounded-full",
              color
            )} />
            <span className="text-xs text-neutral-600">{description}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
