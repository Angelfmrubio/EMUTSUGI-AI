
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import portadaImage from "@/assets/portada-emutsugi.jpg";

export function LandingHero() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${portadaImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
      </div>
      
      <div className="relative z-10 flex flex-col justify-center min-h-screen max-w-5xl mx-auto px-4 py-20">
        <div className="text-center text-white">
          <h1 className="text-6xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-gold-300 to-gold-100 bg-clip-text text-transparent drop-shadow-2xl">
            EMUTSUGI
          </h1>
          <h2 className="text-3xl sm:text-4xl font-medium mb-6 text-gold-100 drop-shadow-lg">
            Reparar con Fe Dorada
          </h2>
          <p className="text-xl mb-6 italic text-gold-200 drop-shadow-md max-w-2xl mx-auto">
            "Orquestamos transformaciones. Cada alma cultiva su propia coherencia."
          </p>
          <p className="text-lg sm:text-xl mb-10 max-w-3xl mx-auto text-white/90 drop-shadow-md leading-relaxed">
            Una plataforma que une la sabiduría ancestral del Kintsukuroi con la profunda fe del Emunah, 
            construyendo un espacio sagrado para la transformación y el crecimiento personal a través del análisis 
            semántico profundo y la neuroplasticidad consciente.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button 
              size="lg" 
              className="bg-gold-500/90 hover:bg-gold-600 text-white border-gold-300 backdrop-blur-sm text-lg py-6 px-8 shadow-2xl"
              onClick={() => navigate('/evaluation')}
            >
              Comenzar Evaluación
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gold-300 text-gold-200 hover:bg-gold-200/20 backdrop-blur-sm text-lg py-6 px-8 shadow-2xl"
              onClick={() => navigate('/about')}
            >
              Conocer más
            </Button>
          </div>
        </div>
        
        {/* Philosophy section */}
        <div className="mt-32 grid gap-8 md:grid-cols-3">
          <FeatureCard 
            title="Kintsunah" 
            description="La fe que repara con oro - Uniendo la resiliencia japonesa con la certeza espiritual."
            iconClass="bg-gold-100/20 backdrop-blur-sm"
          />
          <FeatureCard 
            title="Wabiheim" 
            description="El hogar imperfecto que nos contiene - Un espacio para el autodescubrimiento."
            iconClass="bg-gold-100/20 backdrop-blur-sm"
          />
          <FeatureCard 
            title="Kaizenmai" 
            description="La mejora continua como territorio sagrado - El camino del desarrollo consciente."
            iconClass="bg-gold-100/20 backdrop-blur-sm"
          />
        </div>
      </div>
    </div>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  iconClass: string;
}

function FeatureCard({ title, description, iconClass }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-lg border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl hover:shadow-3xl transition-all duration-300 hover:bg-white/20">
      <div className={`w-12 h-12 mb-4 rounded-full flex items-center justify-center ${iconClass}`}>
        <span className="text-gold-300 text-lg">✧</span>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white drop-shadow-md">{title}</h3>
      <p className="text-white/90 drop-shadow-sm">{description}</p>
    </div>
  );
}
