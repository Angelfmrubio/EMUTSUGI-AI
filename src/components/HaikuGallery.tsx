import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { HaikuCard } from './HaikuCard';
import { haikusByEmotion, haikusByNervousSystem, haikusByPhase } from '@/data/haikuLibrary';
import { Search } from 'lucide-react';
import { searchHaikus } from '@/utils/haikuSelector';

export const HaikuGallery = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const searchResults = searchQuery ? searchHaikus(searchQuery) : [];

  return (
    <div className="container mx-auto py-12 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[hsl(var(--sne))] via-[hsl(var(--snic))] to-[hsl(var(--snc))] bg-clip-text text-transparent">
          Galería de Haikus
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          120 haikus modernos organizados por emoción, sistema nervioso y fase del viaje
        </p>
      </div>

      <div className="max-w-xl mx-auto relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar por palabra clave o tag..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {searchQuery ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchResults.map(haiku => (
            <HaikuCard key={haiku.id} haiku={haiku} showMetadata />
          ))}
          {searchResults.length === 0 && (
            <div className="col-span-full text-center text-muted-foreground py-12">
              No se encontraron haikus con "{searchQuery}"
            </div>
          )}
        </div>
      ) : (
        <Tabs defaultValue="emotion" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
            <TabsTrigger value="emotion">Emoción</TabsTrigger>
            <TabsTrigger value="system">Sistema</TabsTrigger>
            <TabsTrigger value="phase">Fase</TabsTrigger>
          </TabsList>

          <TabsContent value="emotion" className="space-y-8 mt-8">
            {Object.entries(haikusByEmotion).map(([emotion, haikus]) => (
              <div key={emotion} className="space-y-4">
                <h2 className="text-2xl font-bold capitalize">{emotion} ({haikus.length})</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {haikus.map(haiku => (
                    <HaikuCard key={haiku.id} haiku={haiku} />
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="system" className="space-y-8 mt-8">
            {Object.entries(haikusByNervousSystem).map(([system, haikus]) => (
              <div key={system} className="space-y-4">
                <h2 className="text-2xl font-bold uppercase">{system} ({haikus.length})</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {haikus.map(haiku => (
                    <HaikuCard key={haiku.id} haiku={haiku} />
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="phase" className="space-y-8 mt-8">
            {Object.entries(haikusByPhase).map(([phase, haikus]) => (
              <div key={phase} className="space-y-4">
                <h2 className="text-2xl font-bold">Fase {phase} ({haikus.length})</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {haikus.map(haiku => (
                    <HaikuCard key={haiku.id} haiku={haiku} />
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
};
