import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Hand, Quote } from 'lucide-react';
import { affirmativeTransforms } from '@/utils/affirmativeLanguage';

export const CertaintyWorkshop = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const phrases = affirmativeTransforms.certaintyWorkshop;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % phrases.length);
  };

  return (
    <Card className="bg-gradient-to-br from-gold-50 via-neutral-50 to-gold-50 dark:from-gold-950/10 dark:via-neutral-950 dark:to-gold-950/10 border-gold-200 dark:border-gold-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-gold-600 dark:text-gold-400">
          <Hand className="w-6 h-6" />
          Taller de Certeza
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="relative">
          <Quote className="absolute -top-2 -left-2 w-8 h-8 text-gold-300 dark:text-gold-700 opacity-50" />
          <div 
            key={currentIndex}
            className="min-h-[120px] flex items-center justify-center animate-fade-in"
          >
            <p className="text-lg md:text-xl italic text-center text-foreground px-8">
              "{phrases[currentIndex]}"
            </p>
          </div>
          <Quote className="absolute -bottom-2 -right-2 w-8 h-8 text-gold-300 dark:text-gold-700 opacity-50 rotate-180" />
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="flex gap-1">
            {phrases.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-gold-600 w-6'
                    : 'bg-gold-300 dark:bg-gold-700'
                }`}
              />
            ))}
          </div>
          
          <Button
            onClick={handleNext}
            variant="outline"
            className="gap-2 border-gold-300 text-gold-600 hover:bg-gold-50 dark:border-gold-700 dark:text-gold-400 dark:hover:bg-gold-950/20"
          >
            <Hand className="w-4 h-4" />
            Siguiente Frase
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
