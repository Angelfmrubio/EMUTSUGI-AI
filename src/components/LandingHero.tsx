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
          <p className="text-xs sm:text-sm uppercase tracking-[0.4em] mb-6 text-gold-200/70 drop-shadow-md font-light">
            UNIVERSO
          </p>

          <h1
            className="text-6xl sm:text-8xl font-bold mb-2 bg-gradient-to-r from-gold-300 via-yellow-100 to-gold-300 bg-clip-text text-transparent drop-shadow-2xl"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            EMUTSUGI
          </h1>

          <div className="h-px w-32 sm:w-48 mx-auto bg-gradient-to-r from-transparent via-gold-400/60 to-transparent mb-4"></div>

          <p
            className="text-sm sm:text-lg uppercase tracking-[0.3em] mb-10 text-gold-100/90 drop-shadow-lg font-medium"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            GRIETAS DORADAS CON PROPÓSITO
          </p>

          <div className="mb-10 space-y-2 text-lg sm:text-2xl text-white/95 drop-shadow-md font-light italic">
            <p>Transmuta tu sombra.</p>
            <p>Decodifica tu presente.</p>
            <p>Descifra tu legado dorado.</p>
          </div>

          <p className="text-lg sm:text-xl mb-12 max-w-3xl mx-auto text-white/80 drop-shadow-md leading-relaxed">
            Ven y descubre cómo <span className="text-gold-300 font-semibold">autocrear en mí</span> genera el poder de <span className="text-gold-300 font-semibold">creer en ti</span>:
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button
              size="lg"
              className="bg-gold-500 hover:bg-gold-600 text-white border border-gold-400/50 backdrop-blur-sm text-lg py-6 px-8 shadow-[0_0_15px_rgba(234,179,8,0.3)] transition-all duration-300 hover:scale-105"
              onClick={() => navigate('/evaluation')}
            >
              Comenzar Evaluación
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gold-300/50 text-gold-200 hover:bg-gold-500/10 hover:text-white backdrop-blur-sm text-lg py-6 px-8 shadow-2xl transition-all duration-300"
              onClick={() => navigate('/about')}
            >
              Conocer más
            </Button>
          </div>
        </div>

        {/* Philosophy section */}
        <div className="mt-32 grid gap-6 md:grid-cols-4">
          <FeatureCard
            title="Creatividad"
            description="Imagina nuevos mundos desde tu soberanía interior."
            iconClass="bg-snc-500/20 backdrop-blur-sm border-snc-500/30"
          />
          <FeatureCard
            title="Innovación"
            description="Transforma lo antiguo en posibilidad brillante."
            iconClass="bg-gold-100/20 backdrop-blur-sm border-gold-200/30"
          />
          <FeatureCard
            title="Superación"
            description="Cada paso es evidencia de tu resiliencia."
            iconClass="bg-snic-500/20 backdrop-blur-sm border-snic-500/30"
          />
          <FeatureCard
            title="Impacto"
            description="Tu transformación inspira mundos enteros."
            iconClass="bg-sne-500/20 backdrop-blur-sm border-sne-500/30"
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
    <div className="group flex flex-col items-center text-center p-6 rounded-xl border border-white/10 bg-black/20 backdrop-blur-md shadow-2xl hover:shadow-[0_0_20px_rgba(255,215,0,0.15)] transition-all duration-500 hover:bg-black/40 hover:-translate-y-1">
      <div className={`w-14 h-14 mb-4 rounded-full flex items-center justify-center border ${iconClass} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-180`}>
        <span className="text-gold-200 text-xl">✧</span>
      </div>
      <h3 className="text-xl font-serif font-semibold mb-2 text-gold-100 drop-shadow-md group-hover:text-white transition-colors">{title}</h3>
      <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors">{description}</p>
    </div>
  );
}