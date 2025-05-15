import React from 'react';
import { useAudio } from '@/lib/audio';
import { useTheme } from '@/lib/themes';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const MusicOnIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="18" 
    height="18" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 18V5l12-2v13"></path>
    <circle cx="6" cy="18" r="3"></circle>
    <circle cx="18" cy="16" r="3"></circle>
  </svg>
);

const MusicOffIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="18" 
    height="18" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="m2 2 20 20"></path>
    <path d="M9 18V5l12-2v10"></path>
    <circle cx="6" cy="18" r="3"></circle>
  </svg>
);

const MusicToggle: React.FC = () => {
  const { isPlaying, toggleAudio } = useAudio();
  const { theme } = useTheme();
  
  const textColorClass = theme === 'dark' 
    ? 'text-white hover:text-blue-400' 
    : 'text-black hover:text-blue-600';

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={toggleAudio}
            className={`p-1 rounded-full transition-colors ml-2 ${textColorClass}`}
            aria-label={`${isPlaying ? 'Pause' : 'Play'} background music`}
          >
            {isPlaying ? <MusicOnIcon /> : <MusicOffIcon />}
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{isPlaying ? 'Pause background music' : 'Play background music'}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default MusicToggle; 