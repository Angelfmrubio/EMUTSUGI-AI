import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Play, Pause, Volume2, Radio, Brain, Heart, Moon, Sun, Loader2 } from "lucide-react";
import { getAudioStateMessage } from "@/utils/affirmativeLanguage";
import { CoherenceIndicator } from "@/components/CoherenceIndicator";

interface NeuroChannel {
  id: string;
  name: string;
  description: string;
  targetArea: string;
  frequency: string;
  benefits: string[];
  color: string;
  icon: React.ReactNode;
}

const NEURO_CHANNELS: NeuroChannel[] = [
  {
    id: "amygdala-calm",
    name: "Serenidad Amigdalar",
    description: "Frecuencias específicas construyen calma en la amígdala y cultivan equilibrio emocional",
    targetArea: "Amígdala",
    frequency: "40-60 Hz + Ondas Alfa",
    benefits: ["Cultiva serenidad", "Construye equilibrio emocional", "Expande respuesta adaptativa"],
    color: "from-blue-500 to-cyan-400",
    icon: <Brain className="h-5 w-5" />
  },
  {
    id: "circadian-sync",
    name: "Sincronización Circadiana",
    description: "Armonización del núcleo supraquiasmático (NSQ) construye equilibrio en ritmos biológicos",
    targetArea: "Núcleo Supraquiasmático (NSQ)",
    frequency: "0.1-4 Hz + Ritmos Naturales",
    benefits: ["Optimiza descanso", "Equilibra hormonas", "Sincroniza ritmos corporales"],
    color: "from-purple-500 to-indigo-400",
    icon: <Moon className="h-5 w-5" />
  },
  {
    id: "coherence-cardiac",
    name: "Coherencia Cardíaca",
    description: "Sincronización corazón-cerebro optimiza la variabilidad cardíaca y construye coherencia",
    targetArea: "Sistema Nervioso Autónomo",
    frequency: "0.1 Hz + Variabilidad HRV",
    benefits: ["Cultiva serenidad", "Expande enfoque", "Construye coherencia psicofisiológica"],
    color: "from-red-500 to-pink-400",
    icon: <Heart className="h-5 w-5" />
  },
  {
    id: "alertness-gamma",
    name: "Alerta Consciente",
    description: "Ondas gamma cultivan estados de hiperconciencia y claridad mental expandida",
    targetArea: "Corteza Prefrontal",
    frequency: "30-100 Hz + Ondas Gamma",
    benefits: ["Expande concentración", "Cultiva claridad mental", "Construye estados de flow"],
    color: "from-orange-500 to-yellow-400",
    icon: <Sun className="h-5 w-5" />
  }
];

export const NexusMusic = () => {
  const [selectedChannel, setSelectedChannel] = useState<NeuroChannel>(NEURO_CHANNELS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLive, setIsLive] = useState(false);
  const [volume, setVolume] = useState(() => {
    const saved = localStorage.getItem('nexusmusic-volume');
    return saved ? [parseInt(saved)] : [75];
  });
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { toast } = useToast();
  
  const STREAM_URL = "https://stream.zeno.fm/wapuwdpgzgruv";

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleCanPlay = () => {
      setIsLoading(false);
      setIsLive(true);
      console.log('NexusMusic: Stream ready to play');
    };

    const handleWaiting = () => {
      setIsLoading(true);
      console.log('NexusMusic: Buffering...');
    };

    const handleError = (e: Event) => {
      setIsLoading(false);
      setIsPlaying(false);
      setIsLive(false);
      console.error('NexusMusic: Stream recalibrating', e);
      toast({
        title: "Recalibración de Frecuencia",
        description: getAudioStateMessage('error'),
      });
      
      // Auto-retry after 3 seconds
      setTimeout(() => {
        if (audio) {
          audio.load();
        }
      }, 3000);
    };

    const handleLoadStart = () => {
      setIsLoading(true);
      console.log('NexusMusic: Loading stream...');
    };

    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('waiting', handleWaiting);
    audio.addEventListener('error', handleError);
    audio.addEventListener('loadstart', handleLoadStart);

    return () => {
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('waiting', handleWaiting);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('loadstart', handleLoadStart);
    };
  }, [toast]);

  useEffect(() => {
    // Save volume to localStorage
    localStorage.setItem('nexusmusic-volume', volume[0].toString());
    
    // Update audio volume
    if (audioRef.current) {
      audioRef.current.volume = volume[0] / 100;
    }
  }, [volume]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
        setIsLive(false);
        console.log(`NexusMusic: Paused ${selectedChannel.name}`);
      } else {
        setIsLoading(true);
        // Bust cache and (re)set src right before playing to improve compatibility with some streams
        const srcWithTs = `${STREAM_URL}?nocache=${Date.now()}`;
        if (audio.src !== srcWithTs) {
          audio.src = srcWithTs;
        }
        // Ensure volume is applied
        audio.volume = (volume?.[0] ?? 75) / 100;
        // Load explicitly, then play
        audio.load();
        await audio.play();
        setIsPlaying(true);
        console.log(`NexusMusic: Playing ${selectedChannel.name} - Stream Live`);
        toast({
          title: "🔴 EN VIVO",
          description: getAudioStateMessage('playing'),
        });
      }
    } catch (error) {
      setIsLoading(false);
      setIsPlaying(false);
      console.error('NexusMusic: Play recalibrating:', error);
      toast({
        title: "Recalibración",
        description: getAudioStateMessage('error'),
      });
    }
  };


  const handleChannelChange = (channelId: string) => {
    const channel = NEURO_CHANNELS.find(c => c.id === channelId);
    if (channel) {
      setSelectedChannel(channel);
      if (audioRef.current && isPlaying) {
        audioRef.current.pause();
        // Clear src to force full reload on next play for better compatibility
        audioRef.current.src = '';
        setIsPlaying(false);
        setIsLive(false);
      }
      console.log(`NexusMusic: Channel changed to ${channel.name}`);
    }
  };

  return (
    <div className="space-y-6">
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        preload="auto"
        playsInline
      />
      
      {/* Main Radio Interface */}
      <Card className="border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5 shadow-lg">
        <CardHeader className="text-center pb-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Radio className="h-6 w-6 text-primary" />
            <CardTitle className="text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              NexusMusic
            </CardTitle>
          </div>
          <p className="text-sm text-muted-foreground">
            Neurofrecuencia Digital del Alma - Coherencia en Tiempo Real
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Channel Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Canal Neurofrecuencial</label>
            <Select value={selectedChannel.id} onValueChange={handleChannelChange}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {NEURO_CHANNELS.map((channel) => (
                  <SelectItem key={channel.id} value={channel.id}>
                    <div className="flex items-center gap-2">
                      {channel.icon}
                      {channel.name}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Current Channel Info */}
          <div className={`p-4 rounded-lg bg-gradient-to-r ${selectedChannel.color} text-white`}>
            <div className="flex items-center gap-2 mb-2">
              {selectedChannel.icon}
              <h3 className="font-semibold">{selectedChannel.name}</h3>
            </div>
            <p className="text-sm opacity-90 mb-2">{selectedChannel.description}</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-white/20 text-white">
                {selectedChannel.targetArea}
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                {selectedChannel.frequency}
              </Badge>
            </div>
          </div>

          {/* Audio Controls */}
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-4">
              <Button
                onClick={togglePlay}
                size="lg"
                disabled={isLoading}
                className="rounded-full w-20 h-20 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                {isLoading ? (
                  <Loader2 className="h-6 w-6 animate-spin" />
                ) : isPlaying ? (
                  <Pause className="h-6 w-6" />
                ) : (
                  <Play className="h-6 w-6 ml-1" />
                )}
              </Button>
            </div>

            {/* Live Status */}
            {isLive && isPlaying && (
              <div className="text-center">
                <Badge variant="destructive" className="animate-pulse">
                  🔴 EN VIVO
                </Badge>
              </div>
            )}

            {/* Stream Status */}
            <div className="space-y-2">
              <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                <div className={`h-2 rounded-full transition-all duration-500 ${
                  isLive && isPlaying 
                    ? 'bg-gradient-to-r from-red-500 to-primary animate-pulse w-full' 
                    : 'bg-muted w-0'
                }`} />
              </div>
              <div className="text-center text-sm text-muted-foreground">
                {isLoading ? "Frecuencia sincronizando..." : isLive && isPlaying ? "Coherencia transmitiéndose" : "Frecuencia preparada"}
              </div>
            </div>

            {/* Coherencia durante reproducción */}
            {isLive && isPlaying && (
              <div className="pt-4">
                <CoherenceIndicator 
                  percentage={75} 
                  className="animate-pulse"
                />
                <p className="text-xs text-center text-muted-foreground mt-2">
                  Frecuencia sincronizando tu arquitectura interna
                </p>
              </div>
            )}

            {/* Volume Control */}
            <div className="flex items-center gap-3">
              <Volume2 className="h-4 w-4 text-muted-foreground" />
              <Slider
                value={volume}
                onValueChange={setVolume}
                max={100}
                step={1}
                className="flex-1"
              />
              <span className="text-sm text-muted-foreground w-8">{volume[0]}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Benefits & Science */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              Beneficios Neurocientíficos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {selectedChannel.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {benefit}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Mecanismo de Acción</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-2">
            <p>
              <strong>Área Objetivo:</strong> {selectedChannel.targetArea}
            </p>
            <p>
              <strong>Rango Frecuencial:</strong> {selectedChannel.frequency}
            </p>
            <p className="text-muted-foreground">
              Las neurofrecuencias utilizan el principio de arrastre neuronal (entrainment) 
              para sincronizar las ondas cerebrales con frecuencias específicas que construyen 
              arquitecturas optimizadas en áreas cerebrales clave.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* All Channels Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Biblioteca de Canales Neurofrecuenciales</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {NEURO_CHANNELS.map((channel) => (
              <div
                key={channel.id}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedChannel.id === channel.id 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border hover:border-primary/50'
                }`}
                onClick={() => handleChannelChange(channel.id)}
              >
                <div className="flex items-center gap-2 mb-2">
                  {channel.icon}
                  <h3 className="font-medium">{channel.name}</h3>
                </div>
                <p className="text-xs text-muted-foreground mb-2">
                  {channel.description}
                </p>
                <Badge variant="secondary" className="text-xs">
                  {channel.targetArea}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};