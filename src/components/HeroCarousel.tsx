import React, { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "IT Solutions",
    image: "/desktop.png",
    description: "High performance desktops, laptops, workstation and servers"
  },
  {
    id: 2,
    title: "Print Solutions",
    image: "/printer.png",
    description: "Professional printing & scanning systems"
  },
  {
    id: 3,
    title: "Smart Security",
    image: "/security.png",
    description: "Advanced CCTV & surveillance systems"
  },
  {
    id: 4,
    title: "Access Control",
    image: "/access.png",
    description: "Biometric & Fingerprint Solutions"
  },
  {
    id: 5,
    title: "Safety Solutions",
    image: "/fire-safety.png",
    description: "Burglar alarms and Fire Safety Solutions"
  },
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
    dragFree: true
  });

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1024); // lg breakpoint in Tailwind is 1024px
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Modify auto-scroll effect to remove pause check
  useEffect(() => {
    const interval = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  // Preload next image
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % slides.length;
    const img = new Image();
    img.src = slides[nextIndex].image;
  }, [currentIndex]);

  return (
    <div 
      className="relative h-screen overflow-hidden"
    >
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 z-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[currentIndex].image})`,
              filter: isSmallScreen ? "brightness(1)" : "brightness(1)"
            }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative h-full z-10">
        <div className="container mx-auto h-full flex flex-col lg:flex-row px-4">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 h-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6 w-full lg:w-auto text-center bg-black/20 px-8 py-6 rounded-xl"
              style={{
                boxShadow: "0 0 30px rgba(0, 0, 0, 0.5)"
              }}
            >
              <h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-[8rem] font-bold text-white leading-none"
                style={{ 
                  textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 0 0 8px rgba(0,0,0,0.7)"
                }}
              >
                {slides[currentIndex].title.split(" ")[0]}
                <br />
                {slides[currentIndex].title.split(" ")[1]}
              </h1>
              <p 
                className="text-lg sm:text-xl md:text-xl lg:text-xl text-white"
                style={{ 
                  textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 0 0 5px rgba(0,0,0,0.7)"
                }}
              >
                {slides[currentIndex].description}
              </p>
            </motion.div>
          </div>

          {/* Right Carousel */}
          <div className="hidden lg:flex w-1/2 h-full items-center justify-end mt-8">
            <div className="w-[600px] mr-2 relative">
              <div className="embla overflow-hidden" ref={emblaRef}>
                <div className="embla__container flex">
                  {slides.map((slide, index) => (
                    <div 
                      key={slide.id} 
                      className="embla__slide min-w-full pl-4 relative group cursor-pointer"
                      onClick={() => emblaApi?.scrollTo(index)}
                    >
                      <div className="relative h-[550px] rounded-2xl overflow-hidden transition-all duration-300 border-4 border-gray-800/50">
                        <div 
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                          style={{ backgroundImage: `url(${slide.image})` }}
                        />
                        <div className="absolute inset-0 p-6 flex flex-col justify-between">
                          <div>
                            <h3 
                              className="text-white text-2xl font-bold transition-opacity"
                              style={{ 
                                textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 0 0 5px rgba(0,0,0,0.7)"
                              }}
                            >{slide.title}</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4 mt-8 justify-center">
                <button
                  onClick={scrollPrev}
                  className="w-12 h-12 rounded-full border-2 border-white/70 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors shadow-lg"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={scrollNext}
                  className="w-12 h-12 rounded-full border-2 border-white/70 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors shadow-lg"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Image Number */}
        <div className="absolute bottom-20 sm:bottom-8 left-8">
          <span className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white opacity-70 drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]">
            {String(currentIndex + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex justify-center space-x-4 absolute bottom-20 left-1/2 -translate-x-1/2">
          <button
            onClick={scrollPrev}
            className="w-10 h-10 rounded-full border-2 border-white/70 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="w-10 h-10 rounded-full border-2 border-white/70 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
