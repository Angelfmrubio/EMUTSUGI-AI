import { Radio, Volume2, VolumeX } from 'lucide-react';
import { useNexusMusic } from '@/contexts/NexusMusicContext';
import { cn } from '@/lib/utils';

export const NexusMusicFloatingIndicator = () => {
  const { isPlaying, isActive, toggle } = useNexusMusic();

  if (!isActive) return null;

  return (
    <button
      onClick={toggle}
      className={cn(
        "fixed bottom-24 right-4 z-40 flex items-center gap-2 px-3 py-2 rounded-full",
        "backdrop-blur-md border shadow-lg transition-all duration-300",
        "hover:scale-105 active:scale-95",
        isPlaying 
          ? "bg-destructive/90 border-destructive text-destructive-foreground animate-pulse" 
          : "bg-card/90 border-border text-muted-foreground hover:text-foreground"
      )}
      aria-label={isPlaying ? "Pausar NexusMusic" : "Reproducir NexusMusic"}
    >
      <Radio className="h-4 w-4" />
      {isPlaying ? (
        <>
          <span className="text-xs font-medium">🔴 EN VIVO</span>
          <Volume2 className="h-3 w-3" />
        </>
      ) : (
        <>
          <span className="text-xs font-medium">NexusMusic</span>
          <VolumeX className="h-3 w-3" />
        </>
      )}
    </button>
  );
};
