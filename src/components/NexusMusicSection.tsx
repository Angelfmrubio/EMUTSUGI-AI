import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNexusMusic } from "@/contexts/NexusMusicContext";
import { Radio, Volume2, Heart, Brain, Sparkles } from "lucide-react";

export function NexusMusicSection() {
  const { toggle, isPlaying } = useNexusMusic();
  
  const benefits = [
    {
      icon: Brain,
      title: "Silencia el ruido mental",
      description: "Las frecuencias guían tu mente hacia la calma profunda.",
      color: "text-snc"
    },
    {
      icon: Heart,
      title: "Repara las grietas",
      description: "El sonido terapéutico armoniza tus tres sistemas nerviosos.",
      color: "text-snic"
    },
    {
      icon: Sparkles,
      title: "Eleva tu espíritu",
      description: "Cada frecuencia es un puente hacia tu bienestar interior.",
      color: "text-kintsugi"
    }
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12 space-y-6">
          <div className="flex items-center justify-center gap-3">
            <Radio className="h-8 w-8 text-kintsugi" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
              NexusMusic
            </h2>
          </div>
          <p className="text-lg text-muted-foreground font-sans">
            Estación Radial de Sanación
          </p>
          <blockquote className="font-serif text-2xl text-foreground/80 italic max-w-2xl mx-auto">
            "Es arquitectura sonora, cuando las palabras alcanzan su límite."
          </blockquote>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-border/30 bg-background/50 backdrop-blur-sm hover:border-kintsugi/30 transition-colors">
              <CardContent className="p-6 text-center space-y-4">
                <benefit.icon className={`h-10 w-10 mx-auto ${benefit.color}`} />
                <h3 className="font-sans font-semibold text-lg text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm font-sans">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button
            size="lg"
            onClick={toggle}
            className={`text-lg py-6 px-12 shadow-xl transition-all duration-300 ${
              isPlaying 
                ? 'bg-kintsugi hover:bg-kintsugi/90 text-background' 
                : 'bg-card border-2 border-kintsugi text-kintsugi hover:bg-kintsugi hover:text-background'
            }`}
          >
            {isPlaying ? (
              <>
                <Volume2 className="mr-2 h-5 w-5" />
                🔴 Transmitiendo EN VIVO
              </>
            ) : (
              <>
                <Radio className="mr-2 h-5 w-5" />
                Activar NexusMusic
              </>
            )}
          </Button>
          {isPlaying && (
            <p className="mt-4 text-sm text-kintsugi animate-pulse">
              Frecuencias terapéuticas fluyendo hacia tu bienestar...
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
