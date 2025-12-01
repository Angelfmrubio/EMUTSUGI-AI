
import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Volume2, VolumeX, BookOpen } from "lucide-react";
import { toast } from "sonner";
import { selectHaiku } from '@/utils/haikuSelector';
import { cn } from '@/lib/utils';

interface PoetrySectionProps {
  emotionalState?: string;
}

export const PoetrySection = ({ emotionalState = "neutral" }: PoetrySectionProps) => {
  const [selectedSoundscape, setSelectedSoundscape] = useState<string>("none");
  const currentHaiku = selectHaiku({
    emotion: emotionalState as any,
    isCrisis: false
  });
  const [currentPoetry, setCurrentPoetry] = useState<string>(currentHaiku.text);
  const [currentNervousSystem, setCurrentNervousSystem] = useState<string>(currentHaiku.nervousSystem);
  const [poetryType, setPoetryType] = useState<string>("Haiku");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  function generateHaiku(emotion: string): string {
    const haiku = selectHaiku({
      emotion: emotion as any,
      isCrisis: false
    });
    setCurrentNervousSystem(haiku.nervousSystem);
    return haiku.text;
  }

  function generatePareado(emotion: string): string {
    const pareados = {
      triste: "En la penumbra del alma encuentro luz,\ny en cada lágrima, mi propia cruz.",
      ansioso: "El viento calma mis inquietudes,\ny trae consigo nuevas actitudes.",
      neutral: "En el sendero de la vida voy,\nbuscando siempre quién realmente soy.",
      calmado: "La paz abraza mi corazón sereno,\ny en cada latido encuentro lo bueno."
    };
    return pareados[emotion as keyof typeof pareados] || pareados.neutral;
  }

  function generateCuarteta(emotion: string): string {
    const cuartetas = {
      triste: "En las sombras del dolor profundo,\nbrilla una luz que abraza el mundo,\ncada lágrima es un nuevo comienzo,\ny en el silencio hallo mi recompenso.",
      ansioso: "La energía me llama a expandirme,\nmi alma está lista para definirse,\nen cada respiro encuentro calma,\ny la paz florece dentro del alma.",
      neutral: "Camino por senderos desconocidos,\ncon pasos firmes y sentidos,\nla vida me enseña en cada momento,\nque soy dueño de mi propio cuento.",
      calmado: "La serenidad abraza mi ser,\ncomo el mar en su amanecer,\nen la quietud encuentro mi fuerza,\ny mi espíritu se refuerza."
    };
    return cuartetas[emotion as keyof typeof cuartetas] || cuartetas.neutral;
  }

  const showPoetryVariant = (type: string) => {
    setPoetryType(type);
    switch(type) {
      case "Pareado":
        setCurrentPoetry(generatePareado(emotionalState));
        break;
      case "Cuarteta":
        setCurrentPoetry(generateCuarteta(emotionalState));
        break;
      default:
        setCurrentPoetry(generateHaiku(emotionalState));
        setPoetryType("Haiku");
    }
  };

  const handleSoundscapeChange = (value: string) => {
    setSelectedSoundscape(value);
    
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
      setIsPlaying(false);
    }
    
    if (value !== "none") {
      const soundscapes: { [key: string]: string } = {
        'lluvia': '/sounds/rain-ambient.mp3',
        'olas': '/sounds/ocean-waves.mp3',
        'bosque': '/sounds/forest-birds.mp3',
        'meditacion': '/sounds/meditation-bells.mp3',
        'cristales': '/sounds/singing-bowls.mp3'
      };

      audioRef.current = new Audio(soundscapes[value]);
      audioRef.current.loop = true;
      audioRef.current.volume = volume;
      
      audioRef.current.addEventListener('error', () => {
        toast.error("Error al cargar el audio. Por favor, intenta con otro sonido.");
        setSelectedSoundscape("none");
      });
    }
  };

  const togglePlayPause = () => {
    if (!audioRef.current && selectedSoundscape !== "none") {
      handleSoundscapeChange(selectedSoundscape);
    }
    
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        toast.info("Sonido pausado");
      } else {
        audioRef.current.play().catch(error => {
          console.error("Error al reproducir audio:", error);
          toast.error("No se puede reproducir el audio en este momento");
        });
        toast.success("Reproduciendo sonido ambiental");
      }
      setIsPlaying(!isPlaying);
    } else {
      toast.info("Selecciona un paisaje sonoro primero");
    }
  };

  const handleVolumeChange = (value: number) => {
    setVolume(value);
    if (audioRef.current) {
      audioRef.current.volume = value;
    }
  };

  const systemColor = {
    sne: 'text-[hsl(var(--sne))]',
    snic: 'text-[hsl(var(--snic))]',
    snc: 'text-[hsl(var(--snc))]',
    triuno: 'text-[hsl(var(--kintsugi))]'
  }[currentNervousSystem as 'sne' | 'snic' | 'snc' | 'triuno'];

  return (
    <div className="space-y-6">
      <Card className="border-blue-200">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-gold-500" />
            <h3 className="text-xl font-semibold text-neutral-800">Poesía Reflejante ({poetryType})</h3>
          </div>
          <div className={cn("text-2xl font-serif leading-relaxed mb-4", systemColor)}>
            {currentPoetry.split('\n').map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => showPoetryVariant("Pareado")}>
              Mostrar Pareado
            </Button>
            <Button variant="outline" onClick={() => showPoetryVariant("Cuarteta")}>
              Mostrar Cuarteta
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-gold-200">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center gap-2 mb-4">
            {isPlaying ? (
              <Volume2 className="w-5 h-5 text-gold-500" />
            ) : (
              <VolumeX className="w-5 h-5 text-neutral-400" />
            )}
            <h3 className="text-xl font-semibold text-neutral-800">Paisaje Sonoro</h3>
          </div>
          
          <Select onValueChange={handleSoundscapeChange} value={selectedSoundscape}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecciona un sonido ambiental" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">Ninguno</SelectItem>
              <SelectItem value="lluvia">Lluvia suave</SelectItem>
              <SelectItem value="olas">Sonido de olas</SelectItem>
              <SelectItem value="bosque">Bosque tranquilo</SelectItem>
              <SelectItem value="meditacion">Campanas de meditación</SelectItem>
              <SelectItem value="cristales">Cuencos de cristal</SelectItem>
            </SelectContent>
          </Select>
          
          {selectedSoundscape !== "none" && (
            <div className="space-y-4">
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-center gap-2"
                onClick={togglePlayPause}
              >
                {isPlaying ? (
                  <>
                    <VolumeX className="w-5 h-5" />
                    <span>Pausar</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-5 h-5" />
                    <span>Reproducir</span>
                  </>
                )}
              </Button>
              
              <div className="flex items-center gap-2">
                <VolumeX className="w-4 h-4 text-neutral-400" />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer"
                />
                <Volume2 className="w-4 h-4 text-gold-500" />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
