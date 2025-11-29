import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Brain, Radio } from "lucide-react";

export const ProfileAuthor = () => {
  const logros = [
    {
      icono: <BookOpen className="h-5 w-5" />,
      titulo: "7 Libros Publicados",
      descripcion: "5 en español, 2 en inglés - Filosofía, Resiliencia, Neurocomunicación",
      link: "https://www.amazon.com/author/angel7fenix"
    },
    {
      icono: <Radio className="h-5 w-5" />,
      titulo: "Fundador de Medios",
      descripcion: "3 radios FM + 5 radios web activas con enfoque cultural y educativo"
    },
    {
      icono: <Brain className="h-5 w-5" />,
      titulo: "Mentor Transformacional", 
      descripcion: "100+ profesionales capacitados en comunicación y liderazgo"
    }
  ];

  return (
    <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-3">
            <Badge variant="outline" className="text-primary border-primary/30">
              Neurocomunicador Multimodal
            </Badge>
          </div>
          <h3 className="text-xl font-bold text-neutral-800 mb-2">
            José Alirio Ángel Corredor
          </h3>
          <p className="text-primary font-medium mb-1">
            El Fénix Literario Venezolano
          </p>
          <p className="text-sm text-neutral-600">
            Growth Partner • Escritor • Transformador de Realidades
          </p>
        </div>

        <div className="space-y-4 mb-6">
          {logros.map((logro, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="text-primary mt-1">
                {logro.icono}
              </div>
              <div>
                <h4 className="font-medium text-neutral-800">{logro.titulo}</h4>
                <p className="text-sm text-neutral-600">{logro.descripcion}</p>
                {logro.link && (
                  <Button 
                    variant="link" 
                    size="sm" 
                    className="h-auto p-0 text-primary"
                    onClick={() => window.open(logro.link, '_blank')}
                  >
                    Ver en Amazon <ExternalLink className="h-3 w-3 ml-1" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/60 rounded-lg p-4 mb-4">
          <p className="text-sm text-neutral-700 text-center italic">
            <strong>"Forjado en batalla:</strong> Sobreviví al cierre forzoso de mis 3 emisoras, 
            a la confiscación de equipos y a años de presión. <strong>Renacido en la ciencia:</strong> 
            Superé 12 años de Parkinson juvenil agresivo. Mi mente se auto-reparó y optimizó."
          </p>
        </div>

        <div className="text-center space-y-2">
          <div className="flex flex-wrap justify-center gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => window.open('https://emutsugi-golden-light-flow.lovable.app/', '_blank')}
            >
              App EMUTSUGI <ExternalLink className="h-3 w-3 ml-1" />
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open('https://angelstudio7.rdi.store/', '_blank')}
            >
              AngelStudio7 <ExternalLink className="h-3 w-3 ml-1" />
            </Button>
          </div>
          <p className="text-xs text-neutral-500">
            Validación neuropsicológica: MoCA 28/30 • 25+ años transformando realidades
          </p>
        </div>
      </CardContent>
    </Card>
  );
};