import React from 'react';
import { OptimizedImage } from './OptimizedImage';
import { useTheme } from '@/lib/themes';

interface ServicePointProps {
  text: string;
  variant?: 'purple' | 'blue';
}

const ServicePoint: React.FC<ServicePointProps> = ({ text, variant = 'purple' }) => {
  const { theme } = useTheme();
  
  return (
    <li className="flex items-center mb-1.5">
      <div className={`mr-2 flex-shrink-0 ${
        variant === 'purple' 
          ? 'text-purple-400 drop-shadow-[0_0_3px_rgba(192,132,252,0.7)]' 
          : 'text-blue-400 drop-shadow-[0_0_3px_rgba(96,165,250,0.7)]'
      }`}>•</div>
      <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-black/80'}`}>{text}</span>
    </li>
  );
};

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  points: string[];
  variant?: 'purple' | 'blue';
}

const ServiceCard: React.FC<ServiceCardProps> = (props) => {
  const { title, imageUrl, description, points, variant = 'purple' } = props;
  const { theme } = useTheme();
  
  // Create glow effect directly in component
  React.useEffect(() => {
    // Add a global style for no-scale and hover propagation if it doesn't exist
    if (!document.getElementById('service-card-styles')) {
      const style = document.createElement('style');
      style.id = 'service-card-styles';
      style.innerHTML = `
        /* Prevent scaling on hover */
        .service-card-container .glow-container:hover {
          transform: none !important;
        }
        
        /* Show glow when hovering on entire card */
        .service-card-container:hover .glow-effect {
          opacity: 1;
        }
        
        /* Dark theme glow effects */
        .dark-purple-glow-effect {
          position: absolute;
          inset: -10px;
          z-index: 1;
          opacity: 0;
          border-radius: inherit;
          background: radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.4), transparent 70%);
          transition: opacity 0.5s ease;
          pointer-events: none;
        }
        
        .dark-blue-glow-effect {
          position: absolute;
          inset: -10px;
          z-index: 1;
          opacity: 0;
          border-radius: inherit;
          background: radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.4), transparent 70%);
          transition: opacity 0.5s ease;
          pointer-events: none;
        }
        
        /* Light theme glow effects - softer colors */
        .light-purple-glow-effect {
          position: absolute;
          inset: -10px;
          z-index: 1;
          opacity: 0;
          border-radius: inherit;
          background: radial-gradient(circle at 50% 50%, rgba(167, 139, 250, 0.3), transparent 70%);
          transition: opacity 0.5s ease;
          pointer-events: none;
        }
        
        .light-blue-glow-effect {
          position: absolute;
          inset: -10px;
          z-index: 1;
          opacity: 0;
          border-radius: inherit;
          background: radial-gradient(circle at 50% 50%, rgba(147, 197, 253, 0.3), transparent 70%);
          transition: opacity 0.5s ease;
          pointer-events: none;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);
  
  // Determine the theme-specific glow class
  const themePrefix = theme === 'dark' ? 'dark' : 'light';
  const glowClass = `${themePrefix}-${variant}-glow-effect`;
  
  return (
    <div className={`service-card-container rounded-xl overflow-hidden backdrop-blur-md border shadow-lg transition-all duration-300 flex flex-col group ${
      theme === 'dark' ? 'bg-white/5 border-white/20' : 'bg-white border-gray-200'
    }`}>
      {/* Image Container */}
      <div className="h-48 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10"></div>
        <OptimizedImage
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 transform-gpu"
        />
      </div>
      
      {/* Text Container with Glow Effect */}
      <div className="glow-container relative overflow-hidden flex-grow">
        {/* Glow Effect */}
        <div className={`glow-effect ${glowClass}`}></div>
        
        {/* Content */}
        <div className="p-5 flex flex-col flex-grow relative z-10">
          <h3 className={`text-lg md:text-xl font-bold mb-3 ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>{title}</h3>
          <p className={`text-sm mb-4 ${
            theme === 'dark' ? 'text-gray-300' : 'text-black/70'
          }`}>{description}</p>
          
          {points.length <= 4 ? (
            // Single column list for 4 or fewer points
            <ul className={theme === 'dark' ? 'text-gray-300' : 'text-black/80'}>
              {points.map((point, index) => (
                <ServicePoint key={index} text={point} variant={variant} />
              ))}
            </ul>
          ) : (
            // Two-column layout for more than 4 points
            <div className="flex flex-row gap-3 mt-2">
              {/* Left column - first 4 points */}
              <ul className={theme === 'dark' ? 'text-gray-300' : 'text-black/80'}>
                {points.slice(0, 4).map((point, index) => (
                  <ServicePoint key={index} text={point} variant={variant} />
                ))}
              </ul>
              
              {/* Right column - any points beyond 4 */}
              <ul className={theme === 'dark' ? 'text-gray-300' : 'text-black/80'}>
                {points.slice(4).map((point, index) => (
                  <ServicePoint 
                    key={index + 4} 
                    text={point} 
                    variant={variant}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard; 