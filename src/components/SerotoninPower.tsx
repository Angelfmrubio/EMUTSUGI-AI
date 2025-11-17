import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Brain, Heart, Zap, Sun } from "lucide-react";
import { CoherenceIndicator } from "@/components/CoherenceIndicator";
import { ProtocolsPanel } from "@/components/ProtocolsPanel";

interface SerotoninAnalysis {
  sne: number; // Sistema Nervioso Entérico
  snc: number; // Sistema Nervioso Central (5%)
  stressImpact: number;
  anxietyLevel: number;
  depressionRisk: number;
}

interface SerotoninPowerProps {
  analysis?: SerotoninAnalysis;
  showDetailedView?: boolean;
}

export const SerotoninPower = ({ analysis, showDetailedView = false }: SerotoninPowerProps) => {
  const defaultAnalysis: SerotoninAnalysis = {
    sne: 75,
    snc: 60,
    stressImpact: 45,
    anxietyLevel: 35,
    depressionRisk: 25
  };

  const data = analysis || defaultAnalysis;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sun className="text-accent" />
          El Poder de la Serotonina
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          "El segundo cerebro del intestino" - 95% SNE + 5% SNC = Arquitectura de Bienestar
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Coherencia Tricerebral */}
        <CoherenceIndicator 
          percentage={Math.round((data.sne + data.snc) / 2)} 
          className="mb-4"
        />

        {/* SNE Analysis */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-primary" />
              <span className="font-medium">Sistema Nervioso Entérico (95%)</span>
            </div>
            <Badge variant={data.sne > 70 ? "default" : data.sne > 50 ? "secondary" : "destructive"}>
              {data.sne}%
            </Badge>
          </div>
          <Progress value={data.sne} className="h-2" />
          <p className="text-xs text-muted-foreground">
            Tu "segundo cerebro" intestinal construye el 95% de la serotonina corporal
          </p>
        </div>

        {/* SNC Analysis */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4 text-accent" />
              <span className="font-medium">Sistema Nervioso Central (5%)</span>
            </div>
            <Badge variant={data.snc > 70 ? "default" : data.snc > 50 ? "secondary" : "destructive"}>
              {data.snc}%
            </Badge>
          </div>
          <Progress value={data.snc} className="h-2" />
          <p className="text-xs text-muted-foreground">
            La serotonina cerebral regula humor, sueño y cognición
          </p>
        </div>

        {/* Impact Analysis */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t">
          <div className="text-center">
            <Zap className="w-6 h-6 mx-auto mb-2 text-blue-500" />
            <div className="text-2xl font-bold text-blue-500">{100 - data.stressImpact}%</div>
            <div className="text-xs text-muted-foreground">Energía Organizada</div>
          </div>
          <div className="text-center">
            <Brain className="w-6 h-6 mx-auto mb-2 text-green-500" />
            <div className="text-2xl font-bold text-green-500">{100 - data.anxietyLevel}%</div>
            <div className="text-xs text-muted-foreground">Expansión Territorial</div>
          </div>
          <div className="text-center">
            <Heart className="w-6 h-6 mx-auto mb-2 text-gold-500" />
            <div className="text-2xl font-bold text-gold-500">{100 - data.depressionRisk}%</div>
            <div className="text-xs text-muted-foreground">Construcción Interna</div>
          </div>
        </div>

        {showDetailedView && (
          <div className="pt-4 border-t space-y-4">
            <h4 className="font-semibold">Arquitecturas de Optimización</h4>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-muted/50">
                <h5 className="font-medium mb-1">Mario Alonso Puig: Lenguaje Sensorial</h5>
                <p className="text-sm text-muted-foreground">
                  "La risa construye claridad en la amígdala. Un abrazo consciente armoniza la corteza prefrontal."
                </p>
              </div>
              <div className="p-3 rounded-lg bg-muted/50">
                <h5 className="font-medium mb-1">Marian Rojas Estapé: Comprensión Sanadora</h5>
                <p className="text-sm text-muted-foreground">
                  "Cuando comprendemos qué cultivamos, expandimos bienestar."
                </p>
              </div>
            </div>
            
            {/* Protocolos de Reprogramación */}
            <div className="mt-6">
              <ProtocolsPanel />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};