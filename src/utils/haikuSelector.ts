import { Haiku, HaikuContext } from '@/types/haiku';
import { haikuLibrary, haikusByEmotion, haikusByNervousSystem, haikusByPhase } from '@/data/haikuLibrary';

function selectRandom<T>(array: T[]): T {
  if (array.length === 0) {
    return haikuLibrary[Math.floor(Math.random() * haikuLibrary.length)] as T;
  }
  return array[Math.floor(Math.random() * array.length)];
}

export function selectHaiku(context: HaikuContext): Haiku {
  // 1. Prioridad Crisis
  if (context.isCrisis) {
    return selectRandom(haikusByEmotion.crisis);
  }
  
  // 2. Por Sistema Nervioso Activo + Emoción
  if (context.activeNervousSystem && context.emotion) {
    const candidates = haikusByNervousSystem[context.activeNervousSystem]
      .filter(h => h.emotion === context.emotion);
    if (candidates.length > 0) {
      return selectRandom(candidates);
    }
  }
  
  // 3. Por Fase del Viaje + Emoción
  if (context.currentPhase && context.emotion) {
    const candidates = haikusByPhase[context.currentPhase]
      .filter(h => h.emotion === context.emotion);
    if (candidates.length > 0) {
      return selectRandom(candidates);
    }
  }
  
  // 4. Solo por Sistema Nervioso
  if (context.activeNervousSystem) {
    return selectRandom(haikusByNervousSystem[context.activeNervousSystem]);
  }
  
  // 5. Solo por Emoción
  if (context.emotion) {
    return selectRandom(haikusByEmotion[context.emotion]);
  }
  
  // 6. Fallback: Aleatorio
  return selectRandom(haikuLibrary);
}

export function selectDailyHaiku(date: Date): Haiku {
  const dayOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000);
  const index = dayOfYear % haikuLibrary.length;
  return haikuLibrary[index];
}

export function searchHaikus(query: string): Haiku[] {
  const lowerQuery = query.toLowerCase();
  return haikuLibrary.filter(haiku => 
    haiku.text.toLowerCase().includes(lowerQuery) ||
    haiku.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

export function getFavoriteHaikus(): Haiku[] {
  const favorites = localStorage.getItem('favoriteHaikus');
  if (!favorites) return [];
  
  const ids: string[] = JSON.parse(favorites);
  return haikuLibrary.filter(h => ids.includes(h.id));
}

export function toggleFavorite(haikuId: string): void {
  const favorites = localStorage.getItem('favoriteHaikus');
  let ids: string[] = favorites ? JSON.parse(favorites) : [];
  
  if (ids.includes(haikuId)) {
    ids = ids.filter(id => id !== haikuId);
  } else {
    ids.push(haikuId);
  }
  
  localStorage.setItem('favoriteHaikus', JSON.stringify(ids));
}
