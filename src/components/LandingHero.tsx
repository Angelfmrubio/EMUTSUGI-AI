import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useNexusMusic } from "@/contexts/NexusMusicContext";
// FINAL: Usando el alias original y el nombre de archivo confirmado
import portadaImage from "@/assets/portada-emutsugi.jpg"; 

export function LandingHero() {
  const navigate = useNavigate();
  const {
    toggle,
    isPlaying
  } = useNexusMusic();

  return ( 
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${portadaImage})`
      }}>
        {/* Overlay Oscuro/Gradiente: Asegura buen contraste */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/80"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center min-h-screen max-w-4xl mx-auto px-6 py-24">
        <div className="text-center space-y-8">
          {/* Main Title Block */}
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] font-medium font-sans bg-gray-100/[0.07] text-secondary-foreground">UNIVERSO</p>
            <h1 style={{
              // Sombra doble (Negro para contraste, Dorado para aura)
              textShadow: '0 0 10px rgb(0 0 0 / 0.8), 0 0 60px hsl(var(--kintsugi) / 0.6)'
            }} className="text-5xl sm:text-6xl font-bold text-foreground md:text-8xl">
              EMUTSUGI
            </h1>
            
            {/* Subtítulo */}
            <p className="text-lg sm:text-xl tracking-[0.3em] uppercase font-semibold font-sans text-foreground/90">
              TUS GRIETAS DORADAS TIENEN PROPÓSITO
            </p>
          </div>

          {/* Slogan Principal */}
          <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-foreground italic leading-relaxed max-w-3xl mx-auto py-8">
            "Respeto Fuente de Arquitectura Creativa"
          </blockquote>

          {/* Subtítulo inferior */}
          <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-sans text-foreground/90">
            Decodifica tu presente. Transmuta tu sombra. Descifra tu legado dorado.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
            <Button 
              size="lg" 
              // Estilo negro sólido
              className="bg-black hover:bg-neutral-800 text-white text-lg py-6 px-10 font-semibold font-sans" 
              onClick={() => navigate('/evaluation')}
            >
              Comentar Evaluación
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              // Estilo blanco/claro
              className={`border-white bg-white hover:bg-neutral-100 text-black text-lg py-6 px-10 shadow-xl font-sans ${isPlaying ? 'bg-neutral-200' : ''}`} 
              onClick={toggle}
            >
              🎧 Escuchar NexusMusic
            </Button>
          </div>
        </div>
      </div>
    </div>
  ); 
}