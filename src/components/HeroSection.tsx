import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/lib/themes";

// Lazy load the animated background for better LCP
const AnimatedGradientBackground = lazy(() => import("@/components/AnimatedGradientBackground"));

// Simple placeholder that appears immediately
const BackgroundPlaceholder = ({ className }: { className?: string }) => (
  <div className={`bg-gradient-to-r from-purple-900 to-blue-900 ${className || ""}`} />
);

const HeroSection = () => {
  const { theme } = useTheme();

  return (
    <Suspense fallback={<BackgroundPlaceholder className="relative h-screen overflow-hidden" />}>
      <AnimatedGradientBackground className="relative h-screen overflow-hidden">
        <div className="relative h-full z-10">
          <div className="container mx-auto h-full flex flex-col items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-6 w-full text-center md:px-8 py-10 rounded-xl"
            >
              <h1 
                className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-white leading-tight text-shadow-lg"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <span className="inline-block md:inline">We Construct Your Dream</span>
              </h1>
              <p 
                className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-shadow-md"
                style={{ 
                  color: "#5fa5f9",
                  marginTop: "2px",
                  fontFamily: 'Poppins, sans-serif'
                }}
              >
                <span className="inline-block md:inline">For Better Tomorrow</span>
              </p>
              
              <p 
                className="text-lg sm:text-xl md:text-2xl text-white mt-6 text-shadow-md"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Building Excellence in Infrastructure Since 2017
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full bg-blue-700 hover:bg-blue-600 text-white font-medium shadow-lg transition-colors"
                >
                  Get Started
                </motion.button>
                
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full border-2 border-white/30 bg-white/0 backdrop-blur-sm hover:bg-white/20 text-white font-medium shadow-lg transition-colors"
                >
                  Our Services
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedGradientBackground>
    </Suspense>
  );
};

export default HeroSection; 