import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { haikuLibrary } from '@/data/haikuLibrary';
import { Download, Upload, Plus } from 'lucide-react';
import { Haiku } from '@/types/haiku';

export const HaikuCurator = () => {
  const [bulkInput, setBulkInput] = useState('');
  const [stats, setStats] = useState({
    total: haikuLibrary.length,
    bySNE: haikuLibrary.filter(h => h.nervousSystem === 'sne').length,
    bySNIC: haikuLibrary.filter(h => h.nervousSystem === 'snic').length,
    bySNC: haikuLibrary.filter(h => h.nervousSystem === 'snc').length,
    byTriuno: haikuLibrary.filter(h => h.nervousSystem === 'triuno').length
  });

  const handleBulkLoad = () => {
    const lines = bulkInput.split('\n').filter(line => line.trim());
    const haikus: Partial<Haiku>[] = [];
    
    for (let i = 0; i < lines.length; i += 3) {
      if (i + 2 < lines.length) {
        const text = `${lines[i]}\n${lines[i + 1]}\n${lines[i + 2]}`;
        haikus.push({
          text,
          author: 'EMUTSUGI',
          emotion: 'neutral',
          nervousSystem: 'sne',
          neurochemical: 'serotonina',
          tags: [],
          useCase: 'diario'
        });
      }
    }
    
    toast.success(`${haikus.length} haikus parseados. Revisa y ajusta categorías.`);
    console.log('Haikus parseados:', haikus);
  };

  const handleExport = () => {
    const data = {
      version: '1.0',
      totalHaikus: haikuLibrary.length,
      library: haikuLibrary
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'haiku-library.json';
    a.click();
    toast.success('Biblioteca exportada');
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target?.result as string);
        console.log('Biblioteca importada:', data);
        toast.success(`${data.totalHaikus} haikus importados`);
      } catch (err) {
        toast.error('Error al importar biblioteca');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="container mx-auto py-12 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Curador de Haikus</h1>
        <p className="text-muted-foreground">Panel de administración para gestionar los 120 haikus</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Card className="p-4 text-center">
          <div className="text-3xl font-bold text-primary">{stats.total}</div>
          <div className="text-sm text-muted-foreground">Total</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-3xl font-bold text-[hsl(var(--sne))]">{stats.bySNE}</div>
          <div className="text-sm text-muted-foreground">SNE</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-3xl font-bold text-[hsl(var(--snic))]">{stats.bySNIC}</div>
          <div className="text-sm text-muted-foreground">SNIC</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-3xl font-bold text-[hsl(var(--snc))]">{stats.bySNC}</div>
          <div className="text-sm text-muted-foreground">SNC</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-3xl font-bold text-[hsl(var(--kintsugi))]">{stats.byTriuno}</div>
          <div className="text-sm text-muted-foreground">Triuno</div>
        </Card>
      </div>

      <Card className="p-6 space-y-4">
        <h2 className="text-2xl font-bold">Carga Masiva</h2>
        <p className="text-sm text-muted-foreground">
          Pega tus haikus aquí (3 líneas por haiku, separados por saltos de línea)
        </p>
        <Textarea
          placeholder="Línea 1&#10;Línea 2&#10;Línea 3&#10;&#10;Línea 1&#10;Línea 2&#10;Línea 3"
          value={bulkInput}
          onChange={(e) => setBulkInput(e.target.value)}
          className="min-h-[200px] font-mono"
        />
        <Button onClick={handleBulkLoad} className="w-full">
          <Plus className="h-4 w-4 mr-2" />
          Parsear Haikus
        </Button>
      </Card>

      <Card className="p-6 space-y-4">
        <h2 className="text-2xl font-bold">Exportar/Importar</h2>
        <div className="flex gap-4">
          <Button onClick={handleExport} variant="outline" className="flex-1">
            <Download className="h-4 w-4 mr-2" />
            Exportar Biblioteca
          </Button>
          <Label htmlFor="import" className="flex-1">
            <Button variant="outline" className="w-full" asChild>
              <span>
                <Upload className="h-4 w-4 mr-2" />
                Importar Biblioteca
              </span>
            </Button>
            <Input
              id="import"
              type="file"
              accept=".json"
              onChange={handleImport}
              className="hidden"
            />
          </Label>
        </div>
      </Card>

      <Card className="p-6 space-y-4">
        <h2 className="text-2xl font-bold">Biblioteca Actual</h2>
        <div className="space-y-4 max-h-[500px] overflow-y-auto">
          {haikuLibrary.map((haiku) => (
            <Card key={haiku.id} className="p-4">
              <div className="text-sm text-muted-foreground mb-2">{haiku.id}</div>
              <div className="text-lg font-serif whitespace-pre-line mb-3">{haiku.text}</div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-primary/10 rounded">{haiku.emotion}</span>
                <span className="px-2 py-1 bg-secondary/10 rounded">{haiku.nervousSystem}</span>
                {haiku.phase && <span className="px-2 py-1 bg-accent/10 rounded">Fase {haiku.phase}</span>}
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
};
