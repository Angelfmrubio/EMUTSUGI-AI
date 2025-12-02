import { createContext, useContext, useState, useEffect, useRef, ReactNode } from 'react';

interface NexusMusicContextType {
  isActive: boolean;
  isPlaying: boolean;
  hasInteracted: boolean;
  audioRef: React.RefObject<HTMLAudioElement>;
  play: () => Promise<void>;
  pause: () => void;
  toggle: () => void;
}

const NexusMusicContext = createContext<NexusMusicContextType | null>(null);

export const useNexusMusic = () => {
  const context = useContext(NexusMusicContext);
  if (!context) {
    throw new Error('useNexusMusic must be used within NexusMusicProvider');
  }
  return context;
};

const STREAM_URL = "https://stream.zeno.fm/wapuwdpgzgruv";

export const NexusMusicProvider = ({ children }: { children: ReactNode }) => {
  const [isActive, setIsActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(() => {
    return localStorage.getItem('nexusmusic-interacted') === 'true';
  });
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Create audio element once
  useEffect(() => {
    if (!audioRef.current) {
      const audio = new Audio();
      audio.preload = 'auto';
      audioRef.current = audio;

      // Restore volume
      const savedVolume = localStorage.getItem('nexusmusic-volume');
      audio.volume = savedVolume ? parseInt(savedVolume) / 100 : 0.75;

      audio.addEventListener('play', () => {
        setIsPlaying(true);
        setIsActive(true);
      });

      audio.addEventListener('pause', () => {
        setIsPlaying(false);
      });

      audio.addEventListener('error', () => {
        setIsPlaying(false);
        console.log('NexusMusic: Stream recalibrating...');
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Auto-play on first interaction
  useEffect(() => {
    if (hasInteracted) return;

    const handleFirstInteraction = async () => {
      setHasInteracted(true);
      localStorage.setItem('nexusmusic-interacted', 'true');
      
      // Auto-start NexusMusic
      if (audioRef.current && !isPlaying) {
        try {
          const srcWithTs = `${STREAM_URL}?nocache=${Date.now()}`;
          audioRef.current.src = srcWithTs;
          audioRef.current.load();
          await audioRef.current.play();
          console.log('NexusMusic: Auto-started on first interaction');
        } catch (error) {
          console.log('NexusMusic: Autoplay blocked, user can manually start');
        }
      }
    };

    const events = ['click', 'touchstart', 'keydown', 'scroll'];
    events.forEach(event => {
      document.addEventListener(event, handleFirstInteraction, { once: true, passive: true });
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleFirstInteraction);
      });
    };
  }, [hasInteracted, isPlaying]);

  const play = async () => {
    if (!audioRef.current) return;
    try {
      const srcWithTs = `${STREAM_URL}?nocache=${Date.now()}`;
      audioRef.current.src = srcWithTs;
      audioRef.current.load();
      await audioRef.current.play();
    } catch (error) {
      console.error('NexusMusic: Play error', error);
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const toggle = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  return (
    <NexusMusicContext.Provider value={{
      isActive,
      isPlaying,
      hasInteracted,
      audioRef,
      play,
      pause,
      toggle,
    }}>
      {children}
    </NexusMusicContext.Provider>
  );
};
