
import { Card, CardContent } from "@/components/ui/card";
import { CoherenceIndicator } from "@/components/CoherenceIndicator";

export function TransformationProcess() {
  const steps = [
    {
      number: "01",
      title: "Reconocimiento de Arquitecturas",
      description: "Identificamos patrones de pensamiento y cultivamos flexibilidad emocional mediante procesamiento de lenguaje natural.",
      color: "from-gold-400 to-gold-600",
      coherence: 30
    },
    {
      number: "02",
      title: "Construcción de Metáforas",
      description: "Generamos metáforas personalizadas y partituras de expansión basadas en tu narrativa única.",
      color: "from-blue-400 to-blue-600",
      coherence: 60
    },
    {
      number: "03",
      title: "Manifestación Trimodal",
      description: "Activamos protocolos específicos de coherencia a nivel somático, lingüístico y sistémico.",
      color: "from-gold-400 to-gold-600",
      coherence: 90
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-12 text-neutral-800">
          Proceso de Transformación <span className="text-gold-600">Simplificado</span>
        </h2>
        
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className={`text-3xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                  {step.number}
                </div>
                <h3 className="text-xl font-medium text-neutral-800">{step.title}</h3>
                
                {/* Indicador de Coherencia */}
                <CoherenceIndicator percentage={step.coherence} />
                
                <p className="text-neutral-600 text-sm">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 text-gold-300 text-4xl">
                    →
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-neutral-500 text-sm max-w-2xl mx-auto">
            El proceso completo cultiva transformación en menos de tres minutos,
            con construcciones tangibles que se experimentan desde la primera sesión.
          </p>
        </div>
      </div>
    </section>
  );
}
