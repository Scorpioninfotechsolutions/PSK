import { createContext, useContext } from 'react';

export type AudioState = {
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  toggleAudio: () => void;
};

export const AudioContext = createContext<AudioState>({
  isPlaying: true,
  setIsPlaying: () => null,
  toggleAudio: () => null,
});

export const useAudio = () => useContext(AudioContext); 