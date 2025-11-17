import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "@/components/Quote";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-gold-600 to-gold-400 bg-clip-text text-transparent">
          EMUTSUGI - Reparar con Fe Dorada
        </h1>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-neutral-600 text-center mb-6">
            Una plataforma que integra la neurociencia moderna con la sabiduría ancestral
            para la transformación personal profunda.
          </p>

          <Quote 
            text="Los pensamientos son las sombras de nuestros sentimientos, siempre más oscuros, más vacíos, más simples."
            author="Friedrich Nietzsche"
            className="mb-10"
          />
          
          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4 text-neutral-800">La Filosofía</h2>
              <p className="text-neutral-600 mb-4">
                EMUTSUGI combina conceptos fundamentales de transformación personal:
              </p>
              <div className="space-y-4">
                {PHILOSOPHY_CONCEPTS.map((concept) => (
                  <div key={concept.title} className="p-4 border rounded-lg bg-white">
                    <h3 className="text-lg font-medium mb-1 text-gold-700">
                      {concept.title}
                    </h3>
                    <p className="text-neutral-600">{concept.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4 text-neutral-800">Fundamentos Científicos</h2>
              <Quote 
                text="El cerebro no aprende a través del dolor. Aprende a través de la curiosidad, el asombro y la diversión."
                author="Dr. Marian Rojas Estapé"
                className="mb-6"
              />
              <div className="space-y-4">
                {SCIENTIFIC_FOUNDATIONS.map((foundation) => (
                  <div key={foundation.title} className="p-4 border rounded-lg bg-white">
                    <h3 className="text-lg font-medium mb-1 text-gold-700">{foundation.title}</h3>
                    <p className="text-neutral-600">{foundation.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4 text-neutral-800">Los 7 Niveles de Análisis</h2>
              
              <div className="space-y-4">
                {LEVELS.map((level) => (
                  <div key={level.number} className="p-4 border rounded-lg bg-white">
                    <h3 className="text-lg font-medium mb-1 text-gold-700">
                      Nivel {level.number}: {level.name}
                    </h3>
                    <p className="text-neutral-600">{level.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4 text-neutral-800">Tecnología PNL</h2>
              <p className="text-neutral-600 mb-4">
                Utilizamos técnicas avanzadas de Programación Neurolingüística, incluyendo:
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <TechniqueTile 
                  title="Anclaje"
                  description="Asociación de estímulos específicos con estados emocionales positivos."
                />
                <TechniqueTile 
                  title="Reencuadre"
                  description="Transformación de marcos de referencia para percibir situaciones desde nuevas perspectivas."
                />
                <TechniqueTile 
                  title="Marcado del Paso"
                  description="Establecimiento de sintonía emocional para facilitar transiciones hacia estados más positivos."
                />
              </div>
              
              <p className="text-neutral-600">
                Estas técnicas se integran con algoritmos éticos de procesamiento de lenguaje natural 
                para ofrecer una evaluación profesional y recomendaciones personalizadas.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const PHILOSOPHY_CONCEPTS = [
  {
    title: "Kintsunah - La Fe que Repara",
    description: "Uniendo la resiliencia del Kintsukuroi japonés con la certeza espiritual del Emunah judío."
  },
  {
    title: "Wabiheim - El Hogar Interior",
    description: "La aceptación de la imperfección como camino hacia la autenticidad y el crecimiento."
  },
  {
    title: "Kaizenmai - Mejora Sagrada",
    description: "La transformación continua como práctica espiritual y camino de desarrollo."
  },
  {
    title: "Heimkai - Evolución Sistémica",
    description: "El crecimiento personal como catalizador del cambio familiar y social."
  }
];

const SCIENTIFIC_FOUNDATIONS = [
  {
    title: "Neuroplasticidad Emocional",
    description: "Basado en los descubrimientos del Dr. Joe Dispenza sobre la capacidad del cerebro para crear nuevos patrones."
  },
  {
    title: "Psicología Profunda",
    description: "Incorporando los arquetipos y el inconsciente colectivo de Carl Jung en el proceso de transformación."
  },
  {
    title: "Medicina Mente-Cuerpo",
    description: "Integrando los principios de Deepak Chopra sobre la conexión entre pensamiento y bienestar físico."
  },
  {
    title: "Poética Terapéutica",
    description: "Utilizando la potencia metafórica de Pablo Neruda para la expresión y sanación emocional."
  }
];

interface TechniqueTileProps {
  title: string;
  description: string;
}

function TechniqueTile({ title, description }: TechniqueTileProps) {
  return (
    <div className="p-4 rounded-lg border border-neutral-200 bg-neutral-50">
      <h4 className="font-semibold mb-2 text-gold-700">{title}</h4>
      <p className="text-sm text-neutral-600">{description}</p>
    </div>
  );
}

const LEVELS = [
  {
    number: 1,
    name: "Registro Inicial",
    description: "Evaluación preliminar anónima para establecer una línea base."
  },
  {
    number: 2,
    name: "Análisis Semántico",
    description: "Procesamiento profundo del lenguaje para identificar patrones significativos."
  },
  {
    number: 3,
    name: "Detección Emocional",
    description: "Identificación de patrones emocionales recurrentes y su influencia."
  },
  {
    number: 4,
    name: "Mapeo Cognitivo",
    description: "Análisis de estructuras de pensamiento y procesos de toma de decisiones."
  },
  {
    number: 5,
    name: "Análisis Contextual",
    description: "Evaluación del entorno y circunstancias que influyen en el estado actual."
  },
  {
    number: 6,
    name: "Generación de Estrategias",
    description: "Desarrollo de recomendaciones personalizadas basadas en los niveles anteriores."
  },
  {
    number: 7,
    name: "Recomendación Profesional",
    description: "Valoración de la necesidad de derivación a profesionales especializados."
  }
];

export default AboutPage;
