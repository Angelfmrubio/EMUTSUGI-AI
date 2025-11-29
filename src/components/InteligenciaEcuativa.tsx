import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Heart, Wind, Zap } from "lucide-react";

export const InteligenciaEcuativa = () => {
  const cuatroFases = [
    {
      fase: "PENSAR",
      icono: <Brain className="h-6 w-6" />,
      descripcion: "Con claridad neuroplástica, iluminados por la neurociencia",
      detalles: "Santiago Ramón y Cajal: 'Cada quien puede ser escultor de su cerebro'",
      color: "bg-primary/10 text-primary"
    },
    {
      fase: "SENTIR", 
      icono: <Heart className="h-6 w-6" />,
      descripcion: "Con conciencia, reconociendo las emociones como brújula vital",
      detalles: "Marian Rojas Estapé: 'Cuando entendemos qué nos pasa, nos aliviamos'",
      color: "bg-accent/10 text-accent"
    },
    {
      fase: "SOLTAR",
      icono: <Wind className="h-6 w-6" />,
      descripcion: "Con valentía, liberándonos de lo que nos detiene",
      detalles: "El ego como cerrajero: puede abrir caminos o encerrarnos",
      color: "bg-secondary/10 text-secondary"
    },
    {
      fase: "ACTUAR",
      icono: <Zap className="h-6 w-6" />,
      descripcion: "Con propósito, uniendo disciplina, resiliencia y servicio",
      detalles: "Presencia plena ante cada emoción: somos oasis de sombra en desiertos de luz",
      color: "bg-primary/10 text-primary"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header con credenciales */}
      <Card className="border-gold-200 bg-gradient-to-br from-gold-50 to-amber-50">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Badge variant="outline" className="text-gold-700 border-gold-300">
              Neurocomunicador Multimodal | Growth Partner
            </Badge>
          </div>
          <CardTitle className="text-2xl font-bold text-gold-800">
            Inteligencia Ecuativa
          </CardTitle>
          <p className="text-gold-700 font-medium">
            José Alirio Ángel Corredor - El Fénix Literario Venezolano
          </p>
          <p className="text-sm text-gold-600 mt-2">
            Validado neuropsicológicamente: MoCA 28/30 tras superación de Parkinson juvenil
          </p>
        </CardHeader>
        <CardContent>
          <p className="text-center text-neutral-700 leading-relaxed">
            <strong>"La verdadera revolución habita en lograr coherencia, 
            entre lo que pensamos, lo que sentimos y lo que hacemos."</strong>
          </p>
        </CardContent>
      </Card>

      {/* Las 4 Fases */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {cuatroFases.map((fase, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow border-neutral-200">
            <CardHeader className="text-center">
              <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center ${fase.color} mb-3`}>
                {fase.icono}
              </div>
              <CardTitle className="text-lg font-bold text-neutral-800">
                {index + 1}. {fase.fase}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-neutral-600 mb-3 font-medium">
                {fase.descripcion}
              </p>
              <p className="text-xs text-neutral-500 italic">
                {fase.detalles}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Fundamento Científico */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="text-xl text-center text-neutral-800">
            Fundamento Científico & Experiencial
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold text-primary mb-3">Neuroplasticidad Validada</h4>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>• Superación documentada de Parkinson juvenil agresivo (12 años)</li>
                <li>• Evaluación MoCA: 28/30 - Función cognitiva óptima</li>
                <li>• Autoregeneración neurológica: mente que se auto-reparó y optimizó</li>
                <li>• Evidencia práctica de que podemos rediseñar nuestra realidad</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-accent mb-3">Experiencia Forjada en Batalla</h4>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>• Supervivencia al cierre forzoso de 3 emisoras FM</li>
                <li>• Resistencia a confiscación de equipos y años de presión</li>
                <li>• 25+ años transformando ideas en realidades</li>
                <li>• Mentor de 100+ profesionales en comunicación y liderazgo</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* El Modelo Divergente */}
      <Card className="bg-gradient-to-br from-neutral-50 to-blue-50 border-neutral-200">
        <CardHeader>
          <CardTitle className="text-xl text-center text-neutral-800">
            El Divergente: Oasis de Sombra en Desiertos de Luz
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <p className="text-neutral-700 leading-relaxed">
              <strong>"Orquesto transformaciones. Cada alma cultiva su coherencia."</strong>
            </p>
            <p className="text-neutral-600">
              Soy el puente entre el laboratorio y el escenario, entre la estrategia B2B y el alma de una marca. 
              En un mercado saturado de ruido, ayudo a fundadores y líderes a encontrar su voz inquebrantable.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <Badge variant="secondary">Refugio de Titanes</Badge>
              <Badge variant="secondary">Neuroplasticidad Espiritual</Badge>
              <Badge variant="secondary">Resonancia Emocional</Badge>
              <Badge variant="secondary">Servicio Vivo</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <div className="text-center">
        <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white">
          Evaluar con Inteligencia Ecuativa
        </Button>
        <p className="text-xs text-neutral-500 mt-2">
          Método validado neuropsicológicamente • Experiencia forjada en adversidad extrema
        </p>
      </div>
    </div>
  );
};