import React, { useEffect } from 'react';
import { useTheme } from "@/lib/themes";

interface ShineEffectProps {
  className?: string;
  variant?: 'purple' | 'blue';
}

const ShineEffect: React.FC<ShineEffectProps> = ({ className = '', variant = 'purple' }) => {
  const { theme } = useTheme();
  // Apply theme-specific class directly to the component
  const themePrefix = theme === 'dark' ? 'dark' : 'light';
  const variantClass = `${themePrefix}-${variant}`;

  // Add the CSS class to the parent element
  useEffect(() => {
    // Find the parent shine-effect-container
    const parent = document.querySelectorAll('.shine-effect-container, .glow-only-container');
    if (parent) {
      parent.forEach(el => {
        // Check if this shine effect is inside this container
        if (el.contains(document.querySelector(`.${variantClass}-glow`))) {
          // Add the variant background class
          el.classList.add(`${variantClass}-bg`);
        }
      });
    }
  }, [variantClass]);

  useEffect(() => {
    // Inject the CSS only once when the component mounts
    if (!document.getElementById('shine-effect-styles')) {
      const styleSheet = document.createElement('style');
      styleSheet.id = 'shine-effect-styles';
      styleSheet.innerHTML = `
        .shine-effect {
          position: absolute;
          top: 0;
          left: -150%;
          height: 100%;
          width: 50%;
          transform: skewX(-20deg);
          background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.4) 100%);
          z-index: 5;
          pointer-events: none;
        }
        
        .shine-effect-container:hover .shine-effect {
          animation: shine 0.8s ease-in-out forwards;
        }
        
        .shine-effect-container {
          transition: transform 0.2s, box-shadow 0.3s, background-color 0.3s, backdrop-filter 0.3s;
          will-change: transform, opacity;
          isolation: isolate;
          position: relative;
          overflow: hidden;
        }
        
        .shine-effect-container:hover {
          transform: scale(1.02);
        }
        
        /* Glow-only container without shine effect */
        .glow-only-container {
          transition: transform 0.2s, box-shadow 0.3s, background-color 0.3s, backdrop-filter 0.3s;
          will-change: transform, opacity;
          isolation: isolate;
          position: relative;
          overflow: hidden;
        }
        
        .glow-only-container:hover {
          transform: scale(1.02);
        }
        
        /* Multi-colored glow effects - Dark Theme */
        .dark-purple-glow {
          position: absolute;
          inset: -10px;
          z-index: 1;
          opacity: 0;
          border-radius: inherit;
          background: radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.4), transparent 70%);
          transition: opacity 0.5s ease;
          pointer-events: none;
        }
        
        .dark-blue-glow {
          position: absolute;
          inset: -10px;
          z-index: 1;
          opacity: 0;
          border-radius: inherit;
          background: radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.4), transparent 70%);
          transition: opacity 0.5s ease;
          pointer-events: none;
        }
        
        /* Modified glow effects for Light Theme - softer colors */
        .light-purple-glow {
          position: absolute;
          inset: -10px;
          z-index: 1;
          opacity: 0;
          border-radius: inherit;
          background: radial-gradient(circle at 50% 50%, rgba(167, 139, 250, 0.3), transparent 70%);
          transition: opacity 0.5s ease;
          pointer-events: none;
        }
        
        .light-blue-glow {
          position: absolute;
          inset: -10px;
          z-index: 1;
          opacity: 0;
          border-radius: inherit;
          background: radial-gradient(circle at 50% 50%, rgba(147, 197, 253, 0.3), transparent 70%);
          transition: opacity 0.5s ease;
          pointer-events: none;
        }
        
        .shine-effect-container:hover .dark-purple-glow,
        .shine-effect-container:hover .dark-blue-glow,
        .shine-effect-container:hover .light-purple-glow,
        .shine-effect-container:hover .light-blue-glow,
        .glow-only-container:hover .dark-purple-glow,
        .glow-only-container:hover .dark-blue-glow,
        .glow-only-container:hover .light-purple-glow,
        .glow-only-container:hover .light-blue-glow {
          opacity: 1;
        }
        
        @keyframes shine {
          0% {
            left: -150%;
          }
          100% {
            left: 150%;
          }
        }
      `;
      document.head.appendChild(styleSheet);
    }
  }, []);

  return (
    <>
      <div className={`shine-effect ${className}`}></div>
      <div className={`${variantClass}-glow`} data-variant={variantClass}></div>
    </>
  );
};

// This component wraps its children with shine effect capability
export const ShineEffectContainer = ({ 
  children, 
  variant = 'purple' 
}: { 
  children: React.ReactNode;
  variant?: 'purple' | 'blue';
}) => {
  const { theme } = useTheme();
  const themePrefix = theme === 'dark' ? 'dark' : 'light';
  const variantClass = `${themePrefix}-${variant}`;
  
  return (
    <div className={`shine-effect-container ${variantClass}-bg relative overflow-hidden`}>
      <ShineEffect variant={variant} />
      {children}
    </div>
  );
};

// Keep the HOC for backward compatibility but mark it as deprecated
// This approach is more compatible with Fast Refresh
export const withShineEffect = <P extends object>(Component: React.ComponentType<P>): React.FC<P & { variant?: 'purple' | 'blue' }> => {
  // Use displayName to help with debugging
  const displayName = Component.displayName || Component.name || 'Component';
  
  const WithShine: React.FC<P & { variant?: 'purple' | 'blue' }> = (props) => {
    const variant = props.variant || 'purple';
    
    return (
      <ShineEffectContainer variant={variant}>
        <Component {...props} />
      </ShineEffectContainer>
    );
  };
  
  WithShine.displayName = `withShineEffect(${displayName})`;
  
  return WithShine;
};

export default ShineEffect; 