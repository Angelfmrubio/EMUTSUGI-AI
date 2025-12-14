import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { TransformationProcess } from "@/components/TransformationProcess";
import { InteractiveEvaluationSteps } from "@/components/InteractiveEvaluationSteps";
import { SerotoninPower } from "@/components/SerotoninPower";
import { AutoCreatePower } from "@/components/AutoCreatePower";
import { InteligenciaEcuativa } from "@/components/InteligenciaEcuativa";
import { ProfileAuthor } from "@/components/ProfileAuthor";
import { NexusMusic } from "@/components/NexusMusic";
import { LandingHero } from "@/components/LandingHero";
import { ActitudPrevia } from "@/components/ActitudPrevia";
import { NexusMusicSection } from "@/components/NexusMusicSection";
import { CrisisButton } from "@/components/CrisisButton";
import { HaikuGallery } from "@/components/HaikuGallery";
import { AlquimistaVerbal } from "@/components/AlquimistaVerbal";
import { NexusMusicFloatingIndicator } from "@/components/NexusMusicFloatingIndicator";
import { useState } from "react";
import { Compass, Zap, Sparkles, Radio, BrainCircuit, BookOpen, Heart, Flame, Lightbulb, TrendingUp, Target } from "lucide-react";

const Index = () => {
  const [activeView, setActiveView] = useState<'overview' | 'serotonin' | 'autocreate' | 'evaluation' | 'ecuativa' | 'nexusmusic' | 'haikus' | 'alquimista'>('overview');
  
  return (
    <div className="min-h-screen bg-background">
      {/* Crisis Button - Always Available */}
      <CrisisButton />
      
      {/* NexusMusic Floating Indicator - Siempre Visible */}
      <NexusMusicFloatingIndicator />
      
      {/* Hero Section - Nueva Narrativa */}
      <LandingHero />
      
      {/* La Actitud Previa - Citas de Mentores */}
      <ActitudPrevia />
      
      {/* NexusMusic Section - Destacada */}
      <NexusMusicSection />

      {/* 4 Leyes / Pilares */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center mb-4 text-foreground">
            Los Cuatro Pilares
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Principios fundamentales que guían tu transformación hacia la coherencia.
          </p>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <PillarCard 
              icon={Lightbulb}
              title="Creatividad" 
              description="Imagina nuevos mundos desde tu soberanía interior."
              color="text-snc"
            />
            <PillarCard 
              icon={Sparkles}
              title="Innovación" 
              description="Transforma lo antiguo en posibilidad brillante."
              color="text-kintsugi"
            />
            <PillarCard 
              icon={TrendingUp}
              title="Superación" 
              description="Cada paso es evidencia de tu resiliencia."
              color="text-snic"
            />
            <PillarCard 
              icon={Target}
              title="Impacto" 
              description="Tu transformación inspira mundos enteros."
              color="text-sne"
            />
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-muted-foreground mb-6">Explora las herramientas de transformación:</p>
            <Tabs value={activeView} onValueChange={value => setActiveView(value as any)} className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-8 h-auto p-1 bg-card/80 backdrop-blur-sm border border-border/30 shadow-lg">
                <TabsTrigger value="overview" className="flex flex-col items-center gap-1 p-3 data-[state=active]:bg-kintsugi data-[state=active]:text-background transition-all duration-200">
                  <Compass className="h-4 w-4" />
                  <span className="text-xs font-medium">Visión</span>
                </TabsTrigger>
                <TabsTrigger value="serotonin" className="flex flex-col items-center gap-1 p-3 data-[state=active]:bg-sne data-[state=active]:text-background transition-all duration-200">
                  <Zap className="h-4 w-4" />
                  <span className="text-xs font-medium">Serotonina</span>
                </TabsTrigger>
                <TabsTrigger value="autocreate" className="flex flex-col items-center gap-1 p-3 data-[state=active]:bg-snc data-[state=active]:text-background transition-all duration-200">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-xs font-medium">Autocrear</span>
                </TabsTrigger>
                <TabsTrigger value="nexusmusic" className="flex flex-col items-center gap-1 p-3 data-[state=active]:bg-kintsugi data-[state=active]:text-background transition-all duration-200">
                  <Radio className="h-4 w-4" />
                  <span className="text-xs font-medium">NexusMusic</span>
                </TabsTrigger>
                <TabsTrigger value="evaluation" className="flex flex-col items-center gap-1 p-3 data-[state=active]:bg-snic data-[state=active]:text-background transition-all duration-200">
                  <BrainCircuit className="h-4 w-4" />
                  <span className="text-xs font-medium">Evaluación</span>
                </TabsTrigger>
                <TabsTrigger value="ecuativa" className="flex flex-col items-center gap-1 p-3 data-[state=active]:bg-snc data-[state=active]:text-background transition-all duration-200">
                  <BookOpen className="h-4 w-4" />
                  <span className="text-xs font-medium">Ecuativa</span>
                </TabsTrigger>
                <TabsTrigger value="haikus" className="flex flex-col items-center gap-1 p-3 data-[state=active]:bg-snic data-[state=active]:text-background transition-all duration-200">
                  <Heart className="h-4 w-4" />
                  <span className="text-xs font-medium">Haikus</span>
                </TabsTrigger>
                <TabsTrigger value="alquimista" className="flex flex-col items-center gap-1 p-3 data-[state=active]:bg-kintsugi data-[state=active]:text-background transition-all duration-200">
                  <Flame className="h-4 w-4" />
                  <span className="text-xs font-medium">Alquimista</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Dynamic Content Based on Active View */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {activeView === 'overview' && (
            <div className="max-w-6xl mx-auto space-y-12">
              <h3 className="font-serif text-2xl font-semibold text-center text-foreground">
                Los Poderes Fundamentales
              </h3>
              <div className="grid gap-8 lg:grid-cols-2">
                <SerotoninPower showDetailedView />
                <AutoCreatePower />
              </div>
            </div>
          )}
          
          {activeView === 'serotonin' && (
            <div className="max-w-4xl mx-auto">
              <h3 className="font-serif text-2xl font-semibold text-center mb-8 text-foreground">
                El Poder de la Serotonina
              </h3>
              <SerotoninPower showDetailedView />
            </div>
          )}
          
          {activeView === 'autocreate' && (
            <div className="max-w-4xl mx-auto">
              <h3 className="font-serif text-2xl font-semibold text-center mb-8 text-foreground">
                El Poder de Autocrear
              </h3>
              <AutoCreatePower />
            </div>
          )}
          
          {activeView === 'evaluation' && (
            <div className="max-w-4xl mx-auto">
              <h3 className="font-serif text-2xl font-semibold text-center mb-8 text-foreground">
                Evaluación Interactiva del Arquitecto
              </h3>
              <InteractiveEvaluationSteps />
            </div>
          )}
          
          {activeView === 'ecuativa' && (
            <div className="max-w-6xl mx-auto">
              <h3 className="font-serif text-2xl font-semibold text-center mb-8 text-foreground">
                Inteligencia Ecuativa
              </h3>
              <InteligenciaEcuativa />
            </div>
          )}
          
          {activeView === 'nexusmusic' && (
            <div className="max-w-6xl mx-auto">
              <h3 className="font-serif text-2xl font-semibold text-center mb-8 text-foreground">
                NexusMusic: Frecuencias de Sanación
              </h3>
              <NexusMusic />
            </div>
          )}
          
          {activeView === 'haikus' && <HaikuGallery />}
          
          {activeView === 'alquimista' && (
            <div className="max-w-4xl mx-auto">
              <h3 className="font-serif text-2xl font-semibold text-center mb-8 text-foreground">
                El Alquimista Verbal
              </h3>
              <AlquimistaVerbal />
            </div>
          )}
        </div>
      </section>

      {/* Transformation Process */}
      <TransformationProcess />

      {/* Profile Author */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <h3 className="font-serif text-2xl font-semibold text-center mb-8 text-foreground">
            El Autor del Método
          </h3>
          <ProfileAuthor />
        </div>
      </section>

      {/* Ethical Considerations */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <Card className="border-border/30 bg-card/50">
            <CardContent className="p-8">
              <h3 className="font-serif text-xl font-semibold mb-6 text-foreground text-center">
                Compromiso Ético
              </h3>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="text-center space-y-2">
                  <p className="font-semibold text-kintsugi">Privacidad Absoluta</p>
                  <p className="text-sm text-muted-foreground">Tus datos permanecen confidenciales y seguros.</p>
                </div>
                <div className="text-center space-y-2">
                  <p className="font-semibold text-snic">Complemento Terapéutico</p>
                  <p className="text-sm text-muted-foreground">Potencia los resultados de tu proceso personal.</p>
                </div>
                <div className="text-center space-y-2">
                  <p className="font-semibold text-snc">Autonomía Personal</p>
                  <p className="text-sm text-muted-foreground">Empodera tu capacidad de transformación.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

interface PillarCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

function PillarCard({ icon: Icon, title, description, color }: PillarCardProps) {
  return (
    <Card className="border-border/30 bg-card/50 backdrop-blur-sm hover:border-kintsugi/30 transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-6 text-center space-y-4">
        <div className={`w-14 h-14 mx-auto rounded-full bg-background/80 flex items-center justify-center`}>
          <Icon className={`h-7 w-7 ${color}`} />
        </div>
        <h3 className="font-semibold text-lg text-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}

export default Index;
