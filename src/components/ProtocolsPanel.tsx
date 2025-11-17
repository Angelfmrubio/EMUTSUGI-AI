import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Heart, Brain, Zap } from 'lucide-react';
import { affirmativeTransforms } from '@/utils/affirmativeLanguage';
import { toast } from 'sonner';

export const ProtocolsPanel = () => {
  const protocols = [
    {
      key: 'radiance',
      icon: Sparkles,
      color: 'text-gold-600',
      bgColor: 'bg-gold-50 dark:bg-gold-950/20',
      borderColor: 'border-gold-200 dark:border-gold-800',
    },
    {
      key: 'serenity',
      icon: Heart,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
    },
    {
      key: 'clarity',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/20',
      borderColor: 'border-purple-200 dark:border-purple-800',
    },
    {
      key: 'vitality',
      icon: Zap,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-950/20',
      borderColor: 'border-green-200 dark:border-green-800',
    },
  ] as const;

  const handleActivate = (protocolKey: keyof typeof affirmativeTransforms.protocols) => {
    const protocol = affirmativeTransforms.protocols[protocolKey];
    toast.success(`${protocol.name} activada`, {
      description: protocol.effect,
    });
  };

  return (
    <div className="space-y-4">
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-gold-600 to-gold-400 bg-clip-text text-transparent">
          Protocolos de Reprogramación
        </h3>
        <p className="text-muted-foreground">
          Activa las 4 potencias para calibrar tus sistemas internos
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {protocols.map(({ key, icon: Icon, color, bgColor, borderColor }) => {
          const protocol = affirmativeTransforms.protocols[key];
          return (
            <Card 
              key={key} 
              className={`${borderColor} transition-all hover:scale-105 hover:shadow-lg`}
            >
              <CardHeader className={bgColor}>
                <div className="flex items-center justify-between">
                  <Icon className={`w-8 h-8 ${color}`} />
                  <Badge variant="outline" className={color}>
                    {key.toUpperCase()}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{protocol.name}</CardTitle>
                <CardDescription>{protocol.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm font-mono text-muted-foreground bg-muted p-2 rounded">
                  {protocol.effect}
                </div>
                <Button
                  onClick={() => handleActivate(key)}
                  className="w-full animate-pulse hover:animate-none"
                  variant="default"
                >
                  Activar Protocolo
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
