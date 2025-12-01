import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { TransformationProcess } from "@/components/TransformationProcess";
import { UserProfile } from "@/components/UserProfile";
import { EvaluationSteps } from "@/components/EvaluationSteps";
import { SerotoninPower } from "@/components/SerotoninPower";
import { AutoCreatePower } from "@/components/AutoCreatePower";
import { NeuropoeticEvaluation } from "@/components/NeuropoeticEvaluation";
import { InteligenciaEcuativa } from "@/components/InteligenciaEcuativa";
import { ProfileAuthor } from "@/components/ProfileAuthor";
import { NexusMusic } from "@/components/NexusMusic";
import { LandingHero } from "@/components/LandingHero";
import { LifeLawsDisplay } from "@/components/LifeLawsDisplay";
import { ProtocolsPanel } from "@/components/ProtocolsPanel";
import { CrisisButton } from "@/components/CrisisButton";
import { HaikuGallery } from "@/components/HaikuGallery";
import { useState } from "react";
import { Compass, Zap, Sparkles, Radio, BrainCircuit, BookOpen, Heart } from "lucide-react";
const Index = () => {
  const [activeView, setActiveView] = useState<'overview' | 'serotonin' | 'autocreate' | 'evaluation' | 'ecuativa' | 'nexusmusic' | 'haikus'>('overview');
  return <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-blue-50">
      {/* Crisis Button - Always Available */}
      <CrisisButton />
      
      {/* Hero Section (Portada) */}
      <LandingHero />

      {/* Life Laws Display - EMUTSUGI */}
      <section className="container mx-auto px-4 -mt-4 mb-8">
        <div className="max-w-4xl mx-auto">
          <LifeLawsDisplay />
        </div>
      </section>

      {/* Premium Navigation Tabs */}
      <section className="-mt-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs value={activeView} onValueChange={value => setActiveView(value as any)} className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 h-auto p-1 bg-white/50 backdrop-blur-sm border border-primary/20 shadow-lg">
                <TabsTrigger value="overview" className="flex flex-col items-center gap-1 p-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-200 hover:scale-105">
                  <Compass className="h-4 w-4" />
                  <span className="text-xs font-medium">Visión General</span>
                </TabsTrigger>
                <TabsTrigger value="serotonin" className="flex flex-col items-center gap-1 p-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-200 hover:scale-105">
                  <Zap className="h-4 w-4" />
                  <span className="text-xs font-medium">Serotonina</span>
                </TabsTrigger>
                <TabsTrigger value="autocreate" className="flex flex-col items-center gap-1 p-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-200 hover:scale-105">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-xs font-medium">Autocrear</span>
                </TabsTrigger>
                <TabsTrigger value="nexusmusic" className="flex flex-col items-center gap-1 p-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-200 hover:scale-105">
                  <Radio className="h-4 w-4" />
                  <span className="text-xs font-medium">NexusMusic</span>
                </TabsTrigger>
                <TabsTrigger value="evaluation" className="flex flex-col items-center gap-1 p-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-200 hover:scale-105">
                  <BrainCircuit className="h-4 w-4" />
                  <span className="text-xs font-medium">Evaluación</span>
                </TabsTrigger>
                <TabsTrigger value="ecuativa" className="flex flex-col items-center gap-1 p-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-200 hover:scale-105">
                  <BookOpen className="h-4 w-4" />
                  <span className="text-xs font-medium">Ecuativa</span>
                </TabsTrigger>
                <TabsTrigger value="haikus" className="flex flex-col items-center gap-1 p-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-200 hover:scale-105">
                  <Heart className="h-4 w-4" />
                  <span className="text-xs font-medium">Haikus</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Dynamic Content Based on Active View */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {activeView === 'overview' && <>
              <h3 className="text-2xl font-semibold text-center mb-8 text-neutral-800">Los Tres Poderes Fundamentales</h3>
              <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
                <SerotoninPower showDetailedView />
                <AutoCreatePower />
              </div>
              
              {/* Protocolos EMUTSUGI */}
              <div className="mt-12 max-w-6xl mx-auto">
                <ProtocolsPanel />
              </div>
            </>}
          
          {activeView === 'serotonin' && <>
              <h3 className="text-2xl font-semibold text-center mb-8 text-neutral-800">
                El Poder de la Serotonina: SNE + SNC
              </h3>
              <div className="max-w-4xl mx-auto">
                <SerotoninPower showDetailedView />
              </div>
            </>}
          
          {activeView === 'autocreate' && <>
              <h3 className="text-2xl font-semibold text-center mb-8 text-neutral-800">
                El Poder de AUTOCREAR antes de Creer
              </h3>
              <div className="max-w-4xl mx-auto">
                <AutoCreatePower />
              </div>
            </>}
          
          {activeView === 'evaluation' && <>
              <h3 className="text-2xl font-semibold text-center mb-8 text-neutral-800">
                Evaluación Neuropoética Avanzada
              </h3>
              <div className="max-w-4xl mx-auto">
                <NeuropoeticEvaluation />
              </div>
            </>}
          
          {activeView === 'ecuativa' && <>
              <h3 className="text-2xl font-semibold text-center mb-8 text-neutral-800">
                Inteligencia Ecuativa: El Método del Fénix
              </h3>
              <InteligenciaEcuativa />
            </>}
          
          {activeView === 'nexusmusic' && <>
              <h3 className="text-2xl font-semibold text-center mb-8 text-neutral-800">
                NexusMusic: La Neurofrecuencia Digital del Alma
              </h3>
              <div className="max-w-6xl mx-auto">
                <NexusMusic />
              </div>
            </>}
          
          {activeView === 'haikus' && <HaikuGallery />}
        </div>
      </section>

      {/* Transformation Process */}
      <TransformationProcess />

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold text-center mb-12 text-neutral-800">
            Enfoque Multimodal de Transformación
          </h3>
          
          <div className="grid gap-8 md:grid-cols-3">
            <FeatureCard title="Análisis Neuropoético" description="Detección de patrones de rigidez emocional a través de procesamiento de lenguaje natural avanzado." iconClass="bg-primary/10" iconText="✧" />
            <FeatureCard title="Partituras de Solución" description="Transformación de problemas en metáforas personalizadas que generan nuevas posibilidades." iconClass="bg-accent/10" iconText="♪" />
            <FeatureCard title="Acción Trimodal" description="Protocolos específicos de cambio a nivel somático, lingüístico y sistémico." iconClass="bg-primary/10" iconText="⟳" />
          </div>
        </div>
      </section>

      {/* Profile Author */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-2xl font-semibold text-center mb-8 text-neutral-800">
            El Autor del Método
          </h3>
          <ProfileAuthor />
        </div>
      </section>

      {/* Ethical Considerations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-primary/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-medium mb-4 text-neutral-800">Consideraciones Éticas</h3>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4">
                  <p className="font-medium text-primary mb-2">Privacidad Absoluta</p>
                  <p className="text-sm text-neutral-600">Tus datos permanecen confidenciales y seguros, sin almacenamiento a largo plazo.</p>
                </div>
                <div className="p-4">
                  <p className="font-medium text-primary mb-2">Complemento Terapéutico</p>
                  <p className="text-sm text-neutral-600">No reemplaza la intervención profesional, pero puede potenciar sus resultados.</p>
                </div>
                <div className="p-4">
                  <p className="font-medium text-primary mb-2">Autonomía Personal</p>
                  <p className="text-sm text-neutral-600">Diseñado para empoderar tu capacidad de transformación sin dependencias.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>;
};
interface FeatureCardProps {
  title: string;
  description: string;
  iconClass: string;
  iconText: string;
}
function FeatureCard({
  title,
  description,
  iconClass,
  iconText
}: FeatureCardProps) {
  return <div className="flex flex-col items-center text-center p-6 rounded-lg border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className={`w-12 h-12 mb-4 rounded-full flex items-center justify-center ${iconClass}`}>
        <span className="text-primary text-lg">{iconText}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-neutral-800">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </div>;
}
export default Index;