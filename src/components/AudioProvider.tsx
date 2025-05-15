import React, { useState, useEffect, useRef } from 'react';
import { AudioContext } from '@/lib/audio';

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  // Start with isPlaying false to avoid autoplay errors
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    const audio = new Audio('/audio/Main.mp3');
    audio.loop = true;
    audio.volume = 0.2; // Reduced volume (20%)
    audioRef.current = audio;
    
    // Set initialized to true - don't try to play yet
    setIsInitialized(true);
    
    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);
  
  // Handle play/pause based on isPlaying state
  useEffect(() => {
    if (!audioRef.current || !isInitialized) return;
    
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log('Audio playback prevented:', error.message);
          setIsPlaying(false);
        });
      }
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, isInitialized]);
  
  const toggleAudio = () => {
    setIsPlaying(prev => !prev);
  };

  return (
    <AudioContext.Provider value={{ isPlaying, setIsPlaying, toggleAudio }}>
      {children}
    </AudioContext.Provider>
  );
}; 