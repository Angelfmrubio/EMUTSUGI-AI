import { Haiku } from '@/types/haiku';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { toggleFavorite, getFavoriteHaikus } from '@/utils/haikuSelector';
import { useState } from 'react';
import { toast } from 'sonner';

interface HaikuCardProps {
  haiku: Haiku;
  showMetadata?: boolean;
}

export const HaikuCard = ({ haiku, showMetadata = false }: HaikuCardProps) => {
  const [isFavorite, setIsFavorite] = useState(
    getFavoriteHaikus().some(h => h.id === haiku.id)
  );

  const handleFavorite = () => {
    toggleFavorite(haiku.id);
    setIsFavorite(!isFavorite);
    toast.success(isFavorite ? 'Eliminado de favoritos' : 'Añadido a favoritos');
  };

  const handleShare = async () => {
    const text = `${haiku.text}\n\n— ${haiku.author}`;
    
    if (navigator.share) {
      try {
        await navigator.share({ text });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      await navigator.clipboard.writeText(text);
      toast.success('Haiku copiado al portapapeles');
    }
  };

  const systemColor = {
    sne: 'text-[hsl(var(--sne))]',
    snic: 'text-[hsl(var(--snic))]',
    snc: 'text-[hsl(var(--snc))]',
    triuno: 'text-[hsl(var(--kintsugi))]'
  }[haiku.nervousSystem];

  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-300 border-border/50">
      <div className="space-y-4">
        <div className={cn("text-2xl font-serif leading-relaxed", systemColor)}>
          {haiku.text.split('\n').map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>

        <div className="text-sm text-muted-foreground text-right">
          — {haiku.author}
        </div>

        {showMetadata && (
          <div className="flex flex-wrap gap-2 pt-4 border-t border-border/30">
            <Badge variant="outline" className="capitalize">
              {haiku.emotion}
            </Badge>
            <Badge variant="outline" className="uppercase">
              {haiku.nervousSystem}
            </Badge>
            {haiku.phase && (
              <Badge variant="outline">
                Fase {haiku.phase}
              </Badge>
            )}
          </div>
        )}

        <div className="flex justify-end gap-2 pt-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleFavorite}
            className={cn(isFavorite && "text-red-500")}
          >
            <Heart className={cn("h-4 w-4", isFavorite && "fill-current")} />
          </Button>
          <Button variant="ghost" size="icon" onClick={handleShare}>
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};
