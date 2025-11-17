
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Eye, Headphones, Hand } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export type LearningStyle = 'visual' | 'auditory' | 'kinesthetic';

export const UserProfile = () => {
  const [learningStyle, setLearningStyle] = useState<LearningStyle>(() => {
    return (localStorage.getItem('learningStyle') as LearningStyle) || 'visual';
  });
  const { toast } = useToast();

  const handleSavePreference = () => {
    localStorage.setItem('learningStyle', learningStyle);
    toast({
      title: "Preferencias guardadas",
      description: "Tu estilo de aprendizaje ha sido actualizado.",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Eye className="h-4 w-4" />
          Perfil de Aprendizaje
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Estilo de Aprendizaje</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <RadioGroup
            value={learningStyle}
            onValueChange={(value: LearningStyle) => setLearningStyle(value)}
            className="grid grid-cols-1 gap-4"
          >
            <div className="flex items-center space-x-4 rounded-lg border p-4 hover:bg-neutral-50">
              <RadioGroupItem value="visual" id="visual" />
              <Label htmlFor="visual" className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                Visual
              </Label>
            </div>
            <div className="flex items-center space-x-4 rounded-lg border p-4 hover:bg-neutral-50">
              <RadioGroupItem value="auditory" id="auditory" />
              <Label htmlFor="auditory" className="flex items-center gap-2">
                <Headphones className="h-4 w-4" />
                Auditivo
              </Label>
            </div>
            <div className="flex items-center space-x-4 rounded-lg border p-4 hover:bg-neutral-50">
              <RadioGroupItem value="kinesthetic" id="kinesthetic" />
              <Label htmlFor="kinesthetic" className="flex items-center gap-2">
                <Hand className="h-4 w-4" />
                Kinestésico
              </Label>
            </div>
          </RadioGroup>
          <Button onClick={handleSavePreference} className="w-full">
            Guardar Preferencias
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
