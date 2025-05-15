import React, { lazy, Suspense, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/lib/themes";
import ReactPlayer from "react-player/lazy";
import useEmblaCarousel from "embla-carousel-react";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "@/styles/embla.css";

// Lazy load the animated background for better LCP
const AnimatedGradientBackground = lazy(() => import("@/components/AnimatedGradientBackground"));

// Simple placeholder that appears immediately
const BackgroundPlaceholder = ({ className }: { className?: string }) => (
  <div className={`bg-gradient-to-r from-purple-900 to-blue-900 ${className || ""}`} />
);

// Video data for carousel
const VIDEOS = [
  {
    id: 1,
    url: "https://www.youtube.com/watch?v=IjlYXtI2-GU", // Construction video
    title: "Infrastructure Excellence"
  },
  {
    id: 2,
    url: "https://www.youtube.com/watch?v=4BzjUq921Y4", // Construction video
    title: "Building The Future"
  },
  {
    id: 3,
    url: "https://www.youtube.com/watch?v=nwLQ3s3Fwtk", // Construction video
    title: "Innovation in Construction"
  }
];

// Custom video player wrapper with styling to hide YouTube branding
const CustomVideoPlayer = ({ url, isPlaying, onEnded, playerRef }: { 
  url: string; 
  isPlaying: boolean; 
  onEnded: () => void;
  playerRef: (player: ReactPlayer | null) => void;
}) => {
  // Apply CSS to hide YouTube elements through inline styles and container sizing
  const containerStyles = {
    position: 'relative' as 'relative',
    overflow: 'hidden',
    width: '100%',
    height: '100%'
  };
  
  // Use a larger player that we'll crop to hide UI elements
  const playerStyles = {
    pointerEvents: 'none' as 'none',
    position: 'absolute' as 'absolute',
    top: '-60px',  // Move player up to hide top UI
    left: '0',
    width: '100%',
    height: 'calc(100% + 120px)' // Make player taller to compensate for top/bottom cropping
  };
  
  // Overlay to block all interactions
  const overlayStyles = {
    position: 'absolute' as 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
    cursor: 'default',
    backgroundColor: 'transparent'
  };
  
  return (
    <div style={containerStyles}>
      <div className="relative w-full h-full">
        <ReactPlayer
          ref={playerRef}
          url={url}
          width="100%"
          height="100%"
          playing={isPlaying}
          onEnded={onEnded}
          config={{
            youtube: {
              playerVars: {
                showinfo: 0,
                controls: 0,
                modestbranding: 1,
                rel: 0,
                iv_load_policy: 3,
                disablekb: 1,
                fs: 0,
                playsinline: 1,
                origin: typeof window !== 'undefined' ? window.location.origin : '',
                enablejsapi: 1
              }
            }
          }}
          light={false}
          volume={0.5}
          muted={true}
          style={playerStyles}
        />
        {/* This div prevents interaction with the YouTube player */}
        <div style={overlayStyles} />
      </div>
    </div>
  );
};

const HeroSection = () => {
  const { theme } = useTheme();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [videoEnded, setVideoEnded] = useState(false);
  
  // Setup player refs to control video playback
  const playerRefs = React.useRef<Array<ReactPlayer | null>>([]);
  
  // Initialize player refs
  useEffect(() => {
    playerRefs.current = playerRefs.current.slice(0, VIDEOS.length);
  }, []);
  
  // Handle video end
  const handleVideoEnd = useCallback(() => {
    setVideoEnded(true);
    // Auto-play next video when current one ends
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);
  
  // Track carousel changes
  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => {
      setCurrentVideoIndex(emblaApi.selectedScrollSnap());
      setVideoEnded(false);
    };
    
    emblaApi.on("select", onSelect);
    
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);
  
  // Navigation controls
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <Suspense fallback={<BackgroundPlaceholder className="relative h-screen overflow-hidden pt-20" />}>
      <AnimatedGradientBackground className="relative h-screen overflow-hidden">
        {/* Add top padding to account for fixed navbar height */}
        <div className="relative h-full z-10 pt-20">
          <div className="container mx-auto h-full flex flex-col xxl:flex-row items-center justify-center px-4 py-4 xxl:py-8">
            {/* Left side - All text content (not split) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="w-full xxl:w-1/2 text-center xxl:text-left space-y-3 xxl:space-y-4 mb-16 xxl:mb-0"
            >
              <h1 
                className="text-2xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-shadow-lg whitespace-nowrap"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                We Construct Your Dream
              </h1>
              
              <p 
                className="text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-shadow-md"
                style={{ 
                  color: "#5fa5f9",
                  fontFamily: 'Poppins, sans-serif'
                }}
              >
                For Better Tomorrow
              </p>
              
              <p 
                className="text-sm xs:text-sm sm:text-base md:text-lg text-white mt-1 xxl:mt-2 text-shadow-md"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Building Excellence in Infrastructure Since 2017
              </p>
              
              <div className="flex flex-row justify-center xxl:justify-start xxl:w-3/4 mt-3 xxl:mt-6">
                <Link to="/about">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="px-4 sm:px-5 me-8 md:px-6 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm md:text-base rounded-full bg-blue-700 hover:bg-blue-600 text-white font-medium shadow-lg transition-colors mt-4 xxl:mt-6"
                  >
                    Get Started
                  </motion.button>
                </Link>
                
                <Link to="/services">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm md:text-base rounded-full border-2 border-white/30 bg-white/0 backdrop-blur-sm hover:bg-white/20 text-white font-medium shadow-lg transition-colors mt-4 xxl:mt-6"
                  >
                    Our Services
                  </motion.button>
                </Link>
              </div>
            </motion.div>
            
            {/* Right side - Video Carousel with Glassmorphism effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="w-full xxl:w-1/2 lg:w-9/12 xxl:w-5/12 z-20 xxl:pl-4 max-h-[40vh] xxl:max-h-none"
            >
              <div className="relative overflow-hidden rounded-xl h-full">
                {/* Glassmorphism container */}
                <div className="relative rounded-xl overflow-hidden 
                  backdrop-blur-md bg-white/10 border border-white/20 shadow-xl h-full">
                  
                  {/* Carousel */}
                  <div className="embla overflow-hidden h-full" ref={emblaRef}>
                    <div className="embla__container flex h-full">
                      {VIDEOS.map((video, index) => (
                        <div key={video.id} className="embla__slide min-w-full relative">
                          <div className="relative w-full pb-[56.25%]">
                            <div className="absolute inset-0">
                              <CustomVideoPlayer
                                url={video.url}
                                isPlaying={index === currentVideoIndex && !videoEnded}
                                onEnded={handleVideoEnd}
                                playerRef={(player) => playerRefs.current[index] = player}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Controls */}
                  <div className="absolute top-1/2 transform -translate-y-1/2 left-1 xxl:left-2 z-10">
                    <button
                      onClick={scrollPrev}
                      className="p-1 xxl:p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
                      aria-label="Previous video"
                    >
                      <IoChevronBackOutline size={16} className="xxl:hidden" />
                      <IoChevronBackOutline size={20} className="hidden xxl:block" />
                    </button>
                  </div>
                  <div className="absolute top-1/2 transform -translate-y-1/2 right-1 xxl:right-2 z-10">
                    <button
                      onClick={scrollNext}
                      className="p-1 xxl:p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
                      aria-label="Next video"
                    >
                      <IoChevronForwardOutline size={16} className="xxl:hidden" />
                      <IoChevronForwardOutline size={20} className="hidden xxl:block" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedGradientBackground>
    </Suspense>
  );
};

export default HeroSection; 