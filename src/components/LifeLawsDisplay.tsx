import { useState, useEffect } from 'react';
import { affirmativeTransforms } from '@/utils/affirmativeLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const LifeLawsDisplay = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const laws = affirmativeTransforms.lifeLaws;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % laws.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [laws.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + laws.length) % laws.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % laws.length);
  };

  return (
    <Card className="bg-gradient-to-br from-gold-50 to-neutral-50 dark:from-gold-950/20 dark:to-neutral-950 border-gold-200 dark:border-gold-800">
      <CardContent className="p-6 md:p-8">
        <div className="text-center space-y-4">
          <h3 className="text-lg font-semibold text-gold-600 dark:text-gold-400">
            Las 4 Leyes de Vida Funcional
          </h3>
          
          <div className="relative min-h-[100px] flex items-center justify-center">
            <p 
              key={currentIndex}
              className="text-xl md:text-2xl font-medium text-foreground animate-fade-in px-4"
            >
              "{laws[currentIndex]}"
            </p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="text-gold-600 hover:text-gold-700"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex gap-2">
              {laws.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-gold-600 w-8'
                      : 'bg-gold-300 dark:bg-gold-700'
                  }`}
                  aria-label={`Ir a ley ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="text-gold-600 hover:text-gold-700"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
