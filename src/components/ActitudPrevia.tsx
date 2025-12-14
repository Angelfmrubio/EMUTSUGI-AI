import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface MentorQuoteProps {
  author: string;
  quote: string;
  interpretation: string;
  color: string;
}

function MentorQuote({ author, quote, interpretation, color }: MentorQuoteProps) {
  return (
    <Card className="border-border/30 bg-card/50 backdrop-blur-sm">
      <CardContent className="p-8 space-y-4">
        <Quote className={`h-8 w-8 ${color} opacity-60`} />
        <blockquote className="font-serif text-xl sm:text-2xl text-foreground/90 italic leading-relaxed">
          "{quote}"
        </blockquote>
        <p className={`text-sm font-semibold ${color} uppercase tracking-wider`}>
          — {author}
        </p>
        <div className="pt-4 border-t border-border/20">
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-kintsugi font-medium">Interpretación EMUTSUGI:</span> {interpretation}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export function ActitudPrevia() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
            La Actitud Previa
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto font-sans">
            Antes de transformar, cultivamos la disposición interior. Estas voces nos guían.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          <MentorQuote
            author="Mario Alonso Puig"
            quote="La risa construye claridad en la amígdala. Un abrazo consciente armoniza la corteza prefrontal."
            interpretation="Cada sonrisa genuina es medicina neuronal. Cada abrazo consciente recalibra nuestros tres cerebros hacia la coherencia."
            color="text-snic"
          />
          
          <MentorQuote
            author="Marian Rojas Estapé"
            quote="Cuando comprendemos qué cultivamos, expandimos bienestar."
            interpretation="La comprensión precede a la transformación. Cultivar consciencia es sembrar bienestar en el jardín de nuestras neuronas."
            color="text-snc"
          />
        </div>
        
        <div className="mt-12 text-center">
          <p className="font-serif text-xl text-kintsugi italic">
            "Ven y descubre cómo autocrear en mí genera el poder de creer en ti."
          </p>
        </div>
      </div>
    </section>
  );
}
