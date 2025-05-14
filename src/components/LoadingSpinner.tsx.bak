import React from 'react';
import { useTheme } from '@/lib/themes';

const LoadingSpinner: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className={`w-8 h-8 border-4 ${theme === 'dark' ? 'border-purple-500' : 'border-blue-600'} border-t-transparent rounded-full animate-spin`}></div>
    </div>
  );
};

export default LoadingSpinner; 