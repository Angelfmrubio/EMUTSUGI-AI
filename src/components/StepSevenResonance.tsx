
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2, Network } from "lucide-react";
import { toast } from "sonner";

export const StepSevenResonance = () => {
  const handleShareAnonymously = () => {
    toast.success("Experiencia compartida anónimamente", {
      description: "Tu contribución inspira a otros en su camino de transformación"
    });
  };

  return (
    <div className="space-y-6">
      <Card className="overflow-hidden">
        <CardContent className="p-6">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-neutral-800 flex items-center gap-2">
              <Network className="w-5 h-5 text-gold-500" />
              Mapa de Resonancia
            </h3>
            <div className="w-full h-48 bg-neutral-100 rounded-lg flex items-center justify-center">
              <p className="text-neutral-500">Visualización de impacto personal</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <Button 
              variant="outline" 
              className="w-full"
              onClick={handleShareAnonymously}
            >
              <Share2 className="w-4 h-4 mr-2" />
              Compartir Anónimamente
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
