
import { Card, CardContent } from "@/components/ui/card";

const PrinciplesPage = () => {
  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-gold-600 to-gold-400 bg-clip-text text-transparent">
          Principios Fundamentales
        </h1>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-neutral-600 text-center mb-10">
            EMUTSUGI se rige por principios éticos rigurosos que garantizan la integridad del proceso evaluativo.
          </p>
          
          <div className="grid gap-6 md:grid-cols-2 mb-12">
            {PRINCIPLES.map((principle) => (
              <Card key={principle.title} className="overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-gold-400 to-gold-600"></div>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-3 text-neutral-800">{principle.title}</h2>
                  <p className="text-neutral-600">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="mb-12">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4 text-center text-neutral-800">Compromiso Ético</h2>
              <p className="text-neutral-600 mb-6">
                Nuestra plataforma está diseñada con un profundo compromiso ético, priorizando el bienestar 
                de los usuarios y la integridad profesional. Nos adherimos a estos principios fundamentales:
              </p>
              
              <div className="space-y-4">
                {ETHICAL_PRINCIPLES.map((principle, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-gold-500 mr-2 mt-1">✧</span>
                    <p>{principle}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4 text-center text-neutral-800">Diferencial Tecnológico</h2>
              <p className="text-neutral-600 mb-6">
                EMUTSUGI integra tecnologías avanzadas para ofrecer una evaluación psicológica de alta precisión:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {TECH_DIFFERENTIALS.map((tech) => (
                  <div key={tech.title} className="p-4 rounded-lg border border-neutral-200 bg-white">
                    <h3 className="font-semibold mb-2 text-gold-700">{tech.title}</h3>
                    <p className="text-sm text-neutral-600">{tech.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const PRINCIPLES = [
  {
    title: "Anonimato Garantizado",
    description: "Todas las evaluaciones se realizan de forma anónima, sin almacenamiento de datos personales identificables, garantizando la privacidad y confidencialidad del usuario."
  },
  {
    title: "Evaluación Profesional",
    description: "El sistema se basa en métodos de evaluación psicológica validados científicamente, adaptados para su aplicación mediante algoritmos de procesamiento semántico avanzado."
  },
  {
    title: "Orientación Profesional",
    description: "Los resultados constituyen una orientación basada en patrones identificados durante la evaluación multimodal, diseñada para guiarte hacia el crecimiento."
  },
  {
    title: "Derivación Especializada",
    description: "Cuando se identifican patrones que sugieren la necesidad de atención profesional, el sistema recomienda explícitamente la consulta con especialistas cualificados."
  }
];

const ETHICAL_PRINCIPLES = [
  "Transparencia en todos los procesos de evaluación y análisis.",
  "Protección total de información sensible del usuario.",
  "Claridad sobre el alcance de la evaluación automatizada.",
  "Guía para el uso apropiado de resultados como orientación profesional.",
  "Actualización continua basada en investigación científica reciente.",
  "Accesibilidad para diversos perfiles de usuarios."
];

const TECH_DIFFERENTIALS = [
  {
    title: "PNL de Tercera Ola",
    description: "Integramos técnicas avanzadas de Programación Neurolingüística con modelos computacionales de análisis semántico."
  },
  {
    title: "Semántica Avanzada",
    description: "Procesamiento multinivel del lenguaje para identificar patrones, significados implícitos y estructuras cognitivas subyacentes."
  },
  {
    title: "Algoritmos Conscientes",
    description: "Desarrollo responsable de algoritmos que priorizan el bienestar del usuario y cultivan claridad interpretativa."
  },
  {
    title: "Intervención Temprana",
    description: "Diseño orientado a la identificación temprana de patrones que podrían beneficiarse de atención profesional."
  }
];

export default PrinciplesPage;
