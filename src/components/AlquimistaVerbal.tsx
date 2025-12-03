import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Flame, ArrowRight, Save, Trash2 } from 'lucide-react';
import { useAffirmativeLanguage } from '@/contexts/AffirmativeLanguageContext';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

interface SavedHaiku {
  id: string;
  original: string;
  transformed: string;
  timestamp: number;
}

export const AlquimistaVerbal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isTransforming, setIsTransforming] = useState(false);
  const [savedHaikus, setSavedHaikus] = useState<SavedHaiku[]>([]);
  const [activeNeurotransmitters, setActiveNeurotransmitters] = useState<string[]>([]);
  const { transformText } = useAffirmativeLanguage();

  // Load saved haikus from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('alquimista-haikus');
    if (saved) {
      setSavedHaikus(JSON.parse(saved));
    }
  }, []);

  // Save haikus to localStorage
  const saveToStorage = (haikus: SavedHaiku[]) => {
    localStorage.setItem('alquimista-haikus', JSON.stringify(haikus));
    setSavedHaikus(haikus);
  };

  const generateHaiku = (text: string): string => {
    const words = text.split(/\s+/).filter(w => w.length > 2);
    const transformed = transformText(text);
    
    // Create a 3-line haiku structure
    const lines = transformed.split(/[.,;!?]/).filter(l => l.trim());
    if (lines.length >= 3) {
      return lines.slice(0, 3).map(l => l.trim()).join('\n');
    }
    
    // Generate poetic structure from transformed text
    const poetic = [
      transformed.slice(0, 25).trim() || "La luz interior",
      transformed.slice(25, 55).trim() || "transforma cada sombra en oro",
      transformed.slice(55, 80).trim() || "renace el ser"
    ];
    
    return poetic.join('\n');
  };

  const detectNeurotransmitters = (text: string): string[] => {
    const neuros: string[] = [];
    const lower = text.toLowerCase();
    
    if (lower.includes('calma') || lower.includes('paz') || lower.includes('seren')) {
      neuros.push('Serotonina');
    }
    if (lower.includes('alegr') || lower.includes('motiv') || lower.includes('energ')) {
      neuros.push('Dopamina');
    }
    if (lower.includes('amor') || lower.includes('conex') || lower.includes('compa')) {
      neuros.push('Oxitocina');
    }
    if (lower.includes('fuerza') || lower.includes('poder') || lower.includes('valent')) {
      neuros.push('Norepinefrina');
    }
    
    return neuros.length > 0 ? neuros : ['Serotonina'];
  };

  const handleTransform = async () => {
    if (!input.trim()) {
      toast.error('Ingresa un pensamiento para transmutar');
      return;
    }

    setIsTransforming(true);
    setOutput('');
    setActiveNeurotransmitters([]);

    // Simulate transformation animation
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const haiku = generateHaiku(input);
    const neuros = detectNeurotransmitters(haiku);
    
    // Typewriter effect
    let currentText = '';
    for (let i = 0; i < haiku.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 30));
      currentText += haiku[i];
      setOutput(currentText);
    }

    setActiveNeurotransmitters(neuros);
    setIsTransforming(false);
  };

  const handleSave = () => {
    if (!output) return;
    
    const newHaiku: SavedHaiku = {
      id: Date.now().toString(),
      original: input,
      transformed: output,
      timestamp: Date.now()
    };
    
    saveToStorage([newHaiku, ...savedHaikus].slice(0, 10));
    toast.success('Haiku guardado en tu galería personal');
  };

  const handleDelete = (id: string) => {
    saveToStorage(savedHaikus.filter(h => h.id !== id));
    toast.info('Haiku eliminado');
  };

  return (
    <div className="space-y-6">
      {/* Main Transformation Card */}
      <Card className="border-2 border-kintsugi/30 bg-gradient-to-br from-background to-kintsugi/5 overflow-hidden">
        <CardHeader className="text-center pb-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Flame className="h-6 w-6 text-kintsugi" />
            <CardTitle className="font-serif text-2xl bg-gradient-to-r from-kintsugi to-snic bg-clip-text text-transparent">
              El Alquimista Verbal
            </CardTitle>
          </div>
          <p className="text-sm text-muted-foreground">
            Transmuta pensamientos limitantes en haikus neuroplásticos
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Input Zone - "Cold Ashes" */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-muted" />
              Cenizas Frías (pensamiento original)
            </label>
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe aquí el pensamiento que deseas transmutar..."
              className="min-h-[100px] bg-muted/50 border-muted text-muted-foreground placeholder:text-muted-foreground/50 resize-none"
            />
          </div>

          {/* Transform Button */}
          <div className="flex justify-center">
            <Button
              onClick={handleTransform}
              disabled={isTransforming || !input.trim()}
              size="lg"
              className="bg-gradient-to-r from-kintsugi to-snic hover:from-kintsugi/90 hover:to-snic/90 text-background font-medium gap-2"
            >
              {isTransforming ? (
                <>
                  <Sparkles className="h-5 w-5 animate-spin" />
                  Transmutando...
                </>
              ) : (
                <>
                  <Flame className="h-5 w-5" />
                  Transmutar
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </Button>
          </div>

          {/* Output Zone - "Golden Haiku" */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-kintsugi flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-kintsugi animate-pulse" />
              Oro Neuroplástico (haiku transmutado)
            </label>
            <div className={cn(
              "min-h-[120px] p-6 rounded-lg border-2 transition-all duration-500",
              output 
                ? "bg-gradient-to-br from-kintsugi/10 to-snic/10 border-kintsugi/50" 
                : "bg-muted/20 border-dashed border-muted"
            )}>
              {output ? (
                <div className="space-y-4">
                  <p className="font-poetry text-xl text-center text-foreground whitespace-pre-line leading-relaxed">
                    {output}
                  </p>
                  <div className="flex justify-center">
                    <Button
                      onClick={handleSave}
                      variant="outline"
                      size="sm"
                      className="border-kintsugi/50 text-kintsugi hover:bg-kintsugi/10"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Guardar en galería
                    </Button>
                  </div>
                </div>
              ) : (
                <p className="text-center text-muted-foreground/50 italic">
                  Tu haiku aparecerá aquí...
                </p>
              )}
            </div>
          </div>

          {/* Neurotransmitter Panel */}
          {activeNeurotransmitters.length > 0 && (
            <div className="p-4 rounded-lg bg-card border border-border">
              <p className="text-sm font-medium mb-3 text-center">Activación Neuroquímica</p>
              <div className="flex flex-wrap justify-center gap-2">
                {activeNeurotransmitters.map((neuro) => (
                  <Badge 
                    key={neuro}
                    className={cn(
                      "animate-pulse",
                      neuro === 'Serotonina' && "bg-sne/20 text-sne border-sne",
                      neuro === 'Dopamina' && "bg-kintsugi/20 text-kintsugi border-kintsugi",
                      neuro === 'Oxitocina' && "bg-snic/20 text-snic border-snic",
                      neuro === 'Norepinefrina' && "bg-snc/20 text-snc border-snc"
                    )}
                  >
                    {neuro} ✨
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Saved Haikus Gallery */}
      {savedHaikus.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-kintsugi" />
              Tu Galería de Transmutaciones
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {savedHaikus.map((haiku) => (
                <div
                  key={haiku.id}
                  className="p-4 rounded-lg bg-muted/30 border border-border hover:border-kintsugi/30 transition-colors group"
                >
                  <p className="font-poetry text-sm text-foreground whitespace-pre-line mb-2">
                    {haiku.transformed}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {new Date(haiku.timestamp).toLocaleDateString('es-ES')}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(haiku.id)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
