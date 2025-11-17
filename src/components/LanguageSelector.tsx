
import React from 'react';
import { Check, Globe, Brain } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { useAffirmativeLanguage } from '@/contexts/AffirmativeLanguageContext';

interface LanguageSelectorProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

const languages = [
  { code: 'es', name: 'Español' },
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'it', name: 'Italiano' },
  { code: 'pt', name: 'Português' },
  { code: 'zh', name: '中文' },
];

export const LanguageSelector = ({ currentLanguage, onLanguageChange }: LanguageSelectorProps) => {
  const { isEmutsugMode, toggleEmutsugMode } = useAffirmativeLanguage();

  const handleLanguageChange = (languageCode: string) => {
    onLanguageChange(languageCode);
    toast.success(`Idioma cambiado a ${languages.find(lang => lang.code === languageCode)?.name}`);
  };

  const handleEmutsugToggle = () => {
    toggleEmutsugMode();
    toast.success(
      !isEmutsugMode 
        ? '✨ Modo EMUTSUGI activado - Lenguaje afirmativo activo'
        : 'Modo EMUTSUGI desactivado'
    );
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 relative">
          <Globe className="w-4 h-4" />
          <span>{languages.find(lang => lang.code === currentLanguage)?.name || 'Español'}</span>
          {isEmutsugMode && (
            <Badge 
              variant="secondary" 
              className="absolute -top-1 -right-1 h-2 w-2 p-0 bg-gold-500 animate-pulse"
            />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[240px]">
        <div className="px-2 py-2">
          <div className="flex items-center justify-between gap-3 mb-1">
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4 text-gold-600" />
              <span className="text-sm font-medium">Modo EMUTSUGI</span>
            </div>
            <Switch
              checked={isEmutsugMode}
              onCheckedChange={handleEmutsugToggle}
            />
          </div>
          {isEmutsugMode && (
            <p className="text-xs text-muted-foreground mt-1">
              Lenguaje de coherencia activo
            </p>
          )}
        </div>
        
        <DropdownMenuSeparator />
        
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className="cursor-pointer gap-2"
          >
            {currentLanguage === language.code && <Check className="w-4 h-4" />}
            <span>{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
