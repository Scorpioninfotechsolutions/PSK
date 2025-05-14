import React from 'react';
import { motion } from 'framer-motion';

interface GradientDividerProps {
  width?: string;
  height?: string;
  colors?: string;
  animationDuration?: number;
  animationDelay?: number;
  className?: string;
  glow?: boolean;
  once?: boolean;
}

const GradientDivider: React.FC<GradientDividerProps> = ({
  width = '150px',
  height = 'h-1',
  colors = 'from-purple-600 via-pink-500 to-blue-500',
  animationDuration = 1,
  animationDelay = 0,
  className = '',
  glow = true,
  once = true,
}) => {
  return (
    <motion.div 
      initial={{ width: 0, opacity: 0 }}
      whileInView={{ width, opacity: 0.8 }}
      transition={{ duration: animationDuration, delay: animationDelay }}
      viewport={{ once, margin: "-100px" }}
      className={`
        ${height} 
        bg-gradient-to-r ${colors} 
        mx-auto 
        mb-8 
        rounded-full 
        ${glow ? 'shadow-[0_0_15px_rgba(168,85,247,0.5)]' : ''}
        ${className}
      `}
    />
  );
};

export default GradientDivider; 