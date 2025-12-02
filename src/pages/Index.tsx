import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { TransformationProcess } from "@/components/TransformationProcess";
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
  const [activeView, setActiveView] = useState<
    'overview' | 'serotonin' | 'autocreate' | 'evaluation' | 'ecuativa' | 'nexusmusic' | 'haikus'
  >('evaluation');

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-blue-50">
      <CrisisButton />
      <LandingHero />

      <div className="flex justify-center mt-6">
        <Button
          onClick={() => setActiveView("evaluation")}
          className="bg-primary text-white px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
        >
          Comenzar transformación
        </Button>
      </div>

      <section className="container mx-auto px-4 -mt-4 mb-8">
        <div className="max-w-4xl mx-auto">
          <LifeLawsDisplay />
        </div>
      </section>

      <section className="-mt-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs value={activeView} onValueChange={value => setActiveView(value as any)} className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 h-auto p-1 bg-white/50 backdrop-blur-sm border border-primary/20 shadow-lg">
                <TabsTrigger value="overview"><Compass className="h-4 w-4" /><span>Visión General</span></TabsTrigger>
                <TabsTrigger value="serotonin"><Zap className="h-4 w-4" /><span>Serotonina</span></TabsTrigger>
                <TabsTrigger value="autocreate"><Sparkles className="h-4 w-4" /><span>Autocrear</span></TabsTrigger>
                <TabsTrigger value="nexusmusic"><Radio className="h-4 w-4" /><span>NexusMusic</span></TabsTrigger>
                <TabsTrigger value="evaluation"><BrainCircuit className="h-4 w-4" /><span>Evaluación</span></TabsTrigger>
                <TabsTrigger value="ecuativa"><BookOpen className="h-4 w-4" /><span>Ecuativa</span></TabsTrigger>
                <TabsTrigger value="haikus"><Heart className="h-4 w-4" /><span>Haikus</span></TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {activeView === 'overview' && (
            <>
              <h3 className="text-2xl font-semibold text-center mb-8">Los Tres Poderes Fundamentales</h3>
              <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
                <SerotoninPower showDetailedView />
                <AutoCreatePower />
              </div>
              <div className="mt-12 max-w-6xl mx-auto"><ProtocolsPanel /></div>
            </>
          )}
          {activeView === 'serotonin' && <SerotoninPower showDetailedView />}
          {activeView === 'autocreate' && <AutoCreatePower />}
          {activeView === 'evaluation' && <NeuropoeticEvaluation />}
          {activeView === 'ecuativa' && <InteligenciaEcuativa />}
          {activeView === 'nexusmusic' && <NexusMusic />}
          {activeView === 'haikus' && <HaikuGallery />}
        </div>
      </section>

      <TransformationProcess />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold text-center mb-12">Enfoque Multimodal de Transformación</h3>
          <div className="grid gap-8 md:grid-cols-3">
            <FeatureCard title="Análisis Neuropoético" description="Detección de patrones de rigidez emocional." iconClass="bg-primary/10" iconText="✧" />
            <FeatureCard title="Partituras de Solución" description="Transformación de problemas en metáforas." iconClass="bg-accent/10" iconText="♪" />
            <FeatureCard title="Acción Trimodal" description="Protocolos de cambio somático, lingüístico y sistémico." iconClass="bg-primary/10" iconText="⟳" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-2xl font-semibold text-center mb-8">El Autor del Método</h3>
          <ProfileAuthor />
        </div>
      </section>

      <section className="py-16 bg-white">