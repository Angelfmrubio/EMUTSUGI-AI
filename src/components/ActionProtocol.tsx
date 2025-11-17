
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Footprints, MessageSquare, Network, AlarmClock } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

interface ActionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ActionCard = ({ title, description, icon }: ActionCardProps) => {
  const [reminderSet, setReminderSet] = useState(false);
  
  const showExamples = () => {
    toast.info(`Ejemplos de ${title.toLowerCase()} mostrados`);
  };
  
  const setReminder = () => {
    setReminderSet(true);
    toast.success("Recordatorio configurado");
  };
  
  return (
    <Card className="border-gold-200">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          {icon}
          <h3 className="text-xl font-semibold text-neutral-800">{title}</h3>
        </div>
        <p className="text-neutral-700 mb-4">{description}</p>
        <div className="flex gap-2">
          <Button variant="outline" onClick={showExamples}>
            Ver ejemplos
          </Button>
          <Button 
            variant={reminderSet ? "default" : "outline"} 
            className={reminderSet ? "bg-gold-500 hover:bg-gold-600" : ""}
            onClick={setReminder}
          >
            {reminderSet ? (
              <>
                <AlarmClock className="w-4 h-4 mr-2" />
                Recordatorio activo
              </>
            ) : (
              "Recordatorio"
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export const ActionProtocol = () => {
  return (
    <div className="space-y-6">
      <ActionCard
        title="Acción Somática"
        description="Caminar en espiral construye arquitectura neural mientras sigues el ritmo de tu respiración"
        icon={<Footprints className="w-5 h-5 text-gold-500" />}
      />
      
      <ActionCard
        title="Acción Lingüística"
        description="Transformar narrativas en afirmaciones constructivas fortalece coherencia interna"
        icon={<MessageSquare className="w-5 h-5 text-gold-500" />}
      />
      
      <ActionCard
        title="Acción Sistémica"
        description="Reorganizar espacios genera nuevos significados y expande posibilidades"
        icon={<Network className="w-5 h-5 text-gold-500" />}
      />
    </div>
  );
};
