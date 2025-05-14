import React from "react";
import '@/styles/animatedGradient.css';

interface AnimatedGradientBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedGradientBackground: React.FC<AnimatedGradientBackgroundProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`animated-gradient-background ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedGradientBackground; 