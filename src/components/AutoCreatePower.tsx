import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Target, Lightbulb, Zap } from "lucide-react";
import { useState } from "react";
import { LifeLawsDisplay } from "@/components/LifeLawsDisplay";
import { CertaintyWorkshop } from "@/components/CertaintyWorkshop";

interface CreationSession {
  imagination: string;
  creativity: string;
  kaizen: string;
}

export const AutoCreatePower = () => {
  const [currentStep, setCurrentStep] = useState<'think' | 'feel' | 'release' | 'act'>('think');
  const [session, setSession] = useState<CreationSession>({
    imagination: '',
    creativity: '',
    kaizen: ''
  });

  const principles = [
    { id: 'think', icon: Lightbulb, label: 'Construir Pensamientos', description: 'Sistema Reticular Activador Ascendente' },
    { id: 'feel', icon: Target, label: 'Cultivar Sensaciones', description: 'Neuroplasticidad Consciente' },
    { id: 'release', icon: Zap, label: 'Expandir Espacios', description: 'Mutear el Ruido Mental' },
    { id: 'act', icon: Sparkles, label: 'Manifestar Coherencia', description: 'Presencia plena ante cada emoción' }
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="text-primary" />
          El Poder de AUTOCREAR
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          "Somos almas ocupando un cuerpo" - C.S. Lewis | "Cada quien puede ser escultor de su cerebro" - Ramón y Cajal
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* 4 Leyes de Vida Funcional */}
        <div className="space-y-3">
          <h4 className="font-semibold flex items-center gap-2">
            <Target className="w-4 h-4" />
            Las 4 Leyes de Vida Funcional
          </h4>
          <LifeLawsDisplay />
        </div>

        {/* 4 Principios de Actitud Previa */}
        <div className="space-y-3">
          <h4 className="font-semibold">Los 4 Principios desde la Actitud Previa</h4>
          <div className="grid grid-cols-4 gap-2">
            {principles.map((principle) => {
              const Icon = principle.icon;
              const isActive = currentStep === principle.id;
              return (
                <Button
                  key={principle.id}
                  variant={isActive ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentStep(principle.id as any)}
                  className="flex flex-col h-auto p-3"
                >
                  <Icon className="w-4 h-4 mb-1" />
                  <span className="text-xs">{principle.label}</span>
                </Button>
              );
            })}
          </div>
        </div>

        {/* Active Principle Details */}
        <div className="p-4 rounded-lg bg-muted/50">
          {(() => {
            const activePrinciple = principles.find(p => p.id === currentStep);
            return (
              <div>
                <h5 className="font-medium mb-2">{activePrinciple?.label}: {activePrinciple?.description}</h5>
                {currentStep === 'think' && (
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Activa conscientemente tu Sistema Reticular Activador Ascendente para construir claridad mental.
                    </p>
                    <Textarea 
                      placeholder="¿Cómo programas tu mente para enfocarte en construcciones expansivas?"
                      className="min-h-[80px]"
                    />
                  </div>
                )}
                {currentStep === 'feel' && (
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      "¿Se dobla la cuchara o es la mente?" - Matrix. El cerebro construye realidades desde la percepción.
                    </p>
                    <Textarea 
                      placeholder="Describe la sensación que cultivas en tu cuerpo y mente..."
                      className="min-h-[80px]"
                    />
                  </div>
                )}
                {currentStep === 'release' && (
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Cuando la mente se expande, crea espacios de libertad. La respiración abre territorios internos.
                    </p>
                    <Textarea 
                      placeholder="¿Qué espacios expandes para crear libertad mental?"
                      className="min-h-[80px]"
                    />
                  </div>
                )}
                {currentStep === 'act' && (
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      "La imaginación jugando con la creatividad es inteligencia" - Einstein. Manifestamos mejora continua.
                    </p>
                    <Textarea 
                      placeholder="Define tu próxima acción concreta de manifestación..."
                      className="min-h-[80px]"
                    />
                  </div>
                )}
              </div>
            );
          })()}
        </div>

        {/* Taller de Certeza */}
        <CertaintyWorkshop />

        {/* Oasis Quote */}
        <div className="text-center p-4 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10">
          <p className="italic text-muted-foreground">
            "Somos oasis de sombra en desiertos de luz"
          </p>
        </div>
      </CardContent>
    </Card>
  );
};