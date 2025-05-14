import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import GradientDivider from "@/components/GradientDivider";
import ShineEffect from "@/components/ShineEffect";
import {
  ArrowRight,
  Laptop2,
  Shield,
  Printer,
  Server,
  Fingerprint,
  Truck,
  Hammer,
  Building,
  Mountain,
  Construction,
  GraduationCap,
  Award,
  Briefcase,
  HardHat,
  Clock,
  Brain,
  BookOpen,
  Library,
  Lightbulb,
  FileText,
  ChevronLeft,
  ChevronRight,
  Circle,
} from "lucide-react";
import { useState, useEffect, useRef } from 'react';
import '@/styles/scroll.css';
import { useCountUp } from "@/hooks/useCountUp";
import { useTheme } from "@/lib/themes";

const features = [
  {
    icon: <Laptop2 className="w-12 h-12" />,
    title: "Enterprise Solutions",
    description: "High-performance workstations & servers designed for enterprise-level operations.",
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Smart Security",
    description: "Advanced CCTV & surveillance systems for comprehensive security coverage.",
  },
  {
    icon: <Printer className="w-12 h-12" />,
    title: "Print Solutions",
    description: "Professional printing & scanning systems for efficient document management.",
  },
  {
    icon: <Server className="w-12 h-12" />,
    title: "IT Solutions",
    description: "Comprehensive IT infrastructure and support services.",
  },
  {
    icon: <Fingerprint className="w-12 h-12" />,
    title: "Access Control",
    description: "Advanced biometric security solutions for access control.",
  },
];

const stats = [
  { number: 15, label: "Years Leadership Experience", suffix: "+" },
  { number: 100, label: "Annual Turnover", suffix: "Cr" },
  { number: 8, label: "Years in Business", suffix: "+" },
  { number: 50, label: "Major Projects", suffix: "+" },
];

const clients = Array(13).fill(null).map((_, i) => i + 1);

const Index = () => {
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState(0);
  const autoScrollIntervalRef = useRef(null);
  const sections = ['WORK', 'EXPERIENCE', 'KNOWLEDGE'];
  
  // Start auto-scrolling when component mounts
  useEffect(() => {
    autoScrollIntervalRef.current = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % sections.length);
    }, 5000); // Change section every 5 seconds
    
    // Clear interval on unmount
    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, []);
  
  // Reset timer when manually changing section
  const handleSectionChange = (index) => {
    setActiveSection(index);
    
    // Reset timer
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }
    
    autoScrollIntervalRef.current = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % sections.length);
    }, 5000);
  };

  return (
    <main className={`min-h-screen ${
      theme === 'dark' ? 'bg-black' : 'bg-gray-50'
    }`}>
      <Navbar />
      <div className="relative">
        <HeroSection />
        {/* Gradient fade overlay for smooth transition */}
        {/* <div className="absolute bottom-[-10px] left-[-10px] right-[-10px] h-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10 pointer-events-none blur-sm" */}
        <div className="absolute bottom-[-5px] left-[-5px] right-[-5px] h-8 bg-gradient-to-t from-black via-black/70 to-transparent z-10 pointer-events-none blur-sm"    
            style={{ 
              background: theme === 'light' 
                ? 'linear-gradient(to top, white, rgba(255,255,255,0.7), transparent)' 
                : 'linear-gradient(to top, black, rgba(0,0,0,0.7), transparent)' 
            }}
        ></div>
      </div>
      
      {/* Strength Title Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-4 py-8 md:py-12 text-center mt-8 md:mt-12 motion-section"
      >
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-2 md:mb-3 text-transparent"
          style={{
            WebkitTextStroke: theme === 'dark' ? '2px white' : '2px black',
            // textShadow: theme === 'light' ? '0 4px 8px rgba(95,165,248,0.4)' : 'none'
          }}
        >
          OUR STRENGTH
        </motion.h2>
          <GradientDivider />
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-lg md:text-xl max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-white/80' : 'text-black/80'
          }`}
        >
          We Believe In, and Promote Quality Delivery
        </motion.p>
      </motion.section>
      
      {/* Carousel for Work, Experience, and Knowledge Sections */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-8 md:py-20 relative motion-section"
      >
        <div className={`absolute inset-0 ${
          theme === 'dark'
            ? 'bg-black'
            : 'bg-gradient-to-r from-purple-500/20 to-blue-500/20'
        } blur-3xl`} />
        
        <div className="relative p-6 md:p-8 rounded-xl min-h-[400px]">
          {/* Carousel Content */}
          <div className="overflow-hidden relative">
            <div 
              className="transition-all duration-700 ease-in-out flex"
              style={{ transform: `translateX(-${activeSection * 100}%)` }}
            >
              {/* WORK Section */}
              <div className="min-w-full">
                <div className="space-y-3">
                  <motion.h2 
                    className={`text-xl md:text-2xl font-extrabold text-center ${
                      theme === 'dark' ? 'text-white' : 'text-black'
                    }`}
                  >
                    WORK
                  </motion.h2>
                  <p className={`text-sm md:text-base text-center ${
                    theme === 'dark' ? 'text-white/70' : 'text-black/80'
                  }`}>
                    Our key expertise lies in road construction, mass excavation,
                    mining, and transportation work.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                    <motion.div 
                      className={`group relative flex flex-col items-center justify-center p-5 rounded-lg backdrop-blur-md overflow-hidden ${
                        theme === 'dark' 
                          ? 'bg-white/5 border border-white/10 shadow-lg' 
                          : 'bg-white/30 border border-white/50 shadow-md'
                      } h-32 shine-effect-container`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      <ShineEffect variant="purple" />
                      
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                        theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'
                      }`}>
                        <Construction className={`w-6 h-6 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`} />
                      </div>
                      <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Road Construction</span>
                    </motion.div>
                    
                    <motion.div 
                      className={`group relative flex flex-col items-center justify-center p-5 rounded-lg backdrop-blur-md overflow-hidden ${
                        theme === 'dark' 
                          ? 'bg-white/5 border border-white/10 shadow-lg' 
                          : 'bg-white/30 border border-white/50 shadow-md'
                      } h-32 shine-effect-container`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      <ShineEffect variant="blue" />
                      
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                        theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'
                      }`}>
                        <Mountain className={`w-6 h-6 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
                      </div>
                      <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Mass Excavation</span>
                    </motion.div>
                    
                    <motion.div 
                      className={`group relative flex flex-col items-center justify-center p-5 rounded-lg backdrop-blur-md overflow-hidden ${
                        theme === 'dark' 
                          ? 'bg-white/5 border border-white/10 shadow-lg' 
                          : 'bg-white/30 border border-white/50 shadow-md'
                      } h-32 shine-effect-container`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
                      <ShineEffect variant="purple" />
                      
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                        theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'
                      }`}>
                        <Hammer className={`w-6 h-6 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`} />
                      </div>
                      <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Mining</span>
                    </motion.div>
                    
                    <motion.div 
                      className={`group relative flex flex-col items-center justify-center p-5 rounded-lg backdrop-blur-md overflow-hidden ${
                        theme === 'dark' 
                          ? 'bg-white/5 border border-white/10 shadow-lg' 
                          : 'bg-white/30 border border-white/50 shadow-md'
                      } h-32 shine-effect-container`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                    >
                      <ShineEffect variant="blue" />
                      
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                        theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'
                      }`}>
                        <Truck className={`w-6 h-6 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
                      </div>
                      <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Transportation</span>
                    </motion.div>
                  </div>
                </div>
              </div>
              
              {/* EXPERIENCE Section */}
              <div className="min-w-full">
                <div className="space-y-3">
                  <motion.h2 
                    className={`text-xl md:text-2xl font-extrabold text-center ${
                      theme === 'dark' ? 'text-white' : 'text-black'
                    }`}
                  >
                    EXPERIENCE
                  </motion.h2>
                  <p className={`text-sm md:text-base text-center ${
                    theme === 'dark' ? 'text-white/70' : 'text-black/80'
                  }`}>
                    Professionally managed by qualified civil engineers with over 15
                    years of diverse experience.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                    <motion.div 
                      className={`group relative flex flex-col items-center justify-center p-5 rounded-lg backdrop-blur-md overflow-hidden ${
                        theme === 'dark' 
                          ? 'bg-white/5 border border-white/10 shadow-lg' 
                          : 'bg-white/30 border border-white/50 shadow-md'
                      } h-32 shine-effect-container`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      <ShineEffect variant="purple" />
                      
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                        theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'
                      }`}>
                        <HardHat className={`w-6 h-6 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`} />
                      </div>
                      <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Civil Engineering</span>
                    </motion.div>
                    
                    <motion.div 
                      className={`group relative flex flex-col items-center justify-center p-5 rounded-lg backdrop-blur-md overflow-hidden ${
                        theme === 'dark' 
                          ? 'bg-white/5 border border-white/10 shadow-lg' 
                          : 'bg-white/30 border border-white/50 shadow-md'
                      } h-32 shine-effect-container`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      <ShineEffect variant="blue" />
                      
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                        theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'
                      }`}>
                        <Briefcase className={`w-6 h-6 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
                      </div>
                      <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Project Management</span>
                    </motion.div>
                    
                    <motion.div 
                      className={`group relative flex flex-col items-center justify-center p-5 rounded-lg backdrop-blur-md overflow-hidden ${
                        theme === 'dark' 
                          ? 'bg-white/5 border border-white/10 shadow-lg' 
                          : 'bg-white/30 border border-white/50 shadow-md'
                      } h-32 shine-effect-container`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
                      <ShineEffect variant="purple" />
                      
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                        theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'
                      }`}>
                        <Clock className={`w-6 h-6 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`} />
                      </div>
                      <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>15+ Years</span>
                    </motion.div>
                    
                    <motion.div 
                      className={`group relative flex flex-col items-center justify-center p-5 rounded-lg backdrop-blur-md overflow-hidden ${
                        theme === 'dark' 
                          ? 'bg-white/5 border border-white/10 shadow-lg' 
                          : 'bg-white/30 border border-white/50 shadow-md'
                      } h-32 shine-effect-container`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                    >
                      <ShineEffect variant="blue" />
                      
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                        theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'
                      }`}>
                        <Award className={`w-6 h-6 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
                      </div>
                      <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Certified Experts</span>
                    </motion.div>
                  </div>
                </div>
              </div>
              
              {/* KNOWLEDGE Section */}
              <div className="min-w-full">
                <div className="space-y-3">
                  <motion.h2 
                    className={`text-xl md:text-2xl font-extrabold text-center ${
                      theme === 'dark' ? 'text-white' : 'text-black'
                    }`}
                  >
                    KNOWLEDGE
                  </motion.h2>
                  <p className={`text-sm md:text-base text-center ${
                    theme === 'dark' ? 'text-white/70' : 'text-black/80'
                  }`}>
                    Possessing in-depth knowledge and expertise in managing complex
                    projects.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                    <motion.div 
                      className={`group relative flex flex-col items-center justify-center p-5 rounded-lg backdrop-blur-md overflow-hidden ${
                        theme === 'dark' 
                          ? 'bg-white/5 border border-white/10 shadow-lg' 
                          : 'bg-white/30 border border-white/50 shadow-md'
                      } h-32 shine-effect-container`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      <ShineEffect variant="purple" />
                      
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                        theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'
                      }`}>
                        <Brain className={`w-6 h-6 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`} />
                      </div>
                      <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Technical Expertise</span>
                    </motion.div>
                    
                    <motion.div 
                      className={`group relative flex flex-col items-center justify-center p-5 rounded-lg backdrop-blur-md overflow-hidden ${
                        theme === 'dark' 
                          ? 'bg-white/5 border border-white/10 shadow-lg' 
                          : 'bg-white/30 border border-white/50 shadow-md'
                      } h-32 shine-effect-container`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      <ShineEffect variant="blue" />
                      
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                        theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'
                      }`}>
                        <BookOpen className={`w-6 h-6 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
                      </div>
                      <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Industry Standards</span>
                    </motion.div>
                    
                    <motion.div 
                      className={`group relative flex flex-col items-center justify-center p-5 rounded-lg backdrop-blur-md overflow-hidden ${
                        theme === 'dark' 
                          ? 'bg-white/5 border border-white/10 shadow-lg' 
                          : 'bg-white/30 border border-white/50 shadow-md'
                      } h-32 shine-effect-container`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
                      <ShineEffect variant="purple" />
                      
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                        theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'
                      }`}>
                        <Lightbulb className={`w-6 h-6 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`} />
                      </div>
                      <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Innovative Solutions</span>
                    </motion.div>
                    
                    <motion.div 
                      className={`group relative flex flex-col items-center justify-center p-5 rounded-lg backdrop-blur-md overflow-hidden ${
                        theme === 'dark' 
                          ? 'bg-white/5 border border-white/10 shadow-lg' 
                          : 'bg-white/30 border border-white/50 shadow-md'
                      } h-32 shine-effect-container`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                    >
                      <ShineEffect variant="blue" />
                      
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                        theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'
                      }`}>
                        <FileText className={`w-6 h-6 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
                      </div>
                      <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Compliance</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Carousel Navigation */}
          <div className="flex items-center justify-center mt-8">
            <button 
              onClick={() => handleSectionChange((activeSection - 1 + sections.length) % sections.length)}
              className={`p-2 rounded-full mr-2 ${theme === 'dark' ? 'text-white hover:bg-white/10' : 'text-black hover:bg-black/10'}`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex space-x-2">
              {sections.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => handleSectionChange(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeSection === index 
                      ? theme === 'dark' ? 'bg-white' : 'bg-black' 
                      : theme === 'dark' ? 'bg-white/30' : 'bg-black/30'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={() => handleSectionChange((activeSection + 1) % sections.length)}
              className={`p-2 rounded-full ml-2 ${theme === 'dark' ? 'text-white hover:bg-white/10' : 'text-black hover:bg-black/10'}`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.section>

      {/* Clients Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-4 py-16 md:py-24 relative overflow-hidden motion-section"
      >
        <div className={`absolute inset-0 ${
          theme === 'dark'
            ? 'bg-black'
            : 'bg-white'
        } blur-3xl`} />
        <div className="relative">
          <h2 
            className="text-4xl md:text-5xl font-bold text-center mb-2 md:mb-3 text-transparent"
            style={{
              WebkitTextStroke: theme === 'dark' ? '2px white' : '2px black'
            }}
          >OUR CLIENTS</h2>
            <GradientDivider />
          <div className={`logo-scroll-container ${
            theme === 'dark' ? 'dark-theme-fade' : 'light-theme-fade'
          }`}>
            <div className="flex overflow-hidden">
              <div className="flex animate-scroll">
                {clients.map((client) => (
                  <div key={`client-${client}`} className={`${
                    theme === 'dark'
                      ? 'bg-white/90'
                      : 'bg-gradient-to-r from-purple-500/20 to-blue-500/20'
                  } p-4 rounded-lg min-w-[200px]`}>
                    <div className="h-24 flex items-center justify-center">
                      <img 
                        src={`/clients/${client}.png`}
                        alt={`Client ${client}`} 
                        className="max-w-[180px] max-h-[120px] w-auto h-auto object-contain"
                        onError={(e) => {
                          console.log(`Failed to load client image ${client}`);
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {clients.map((client) => (
                  <div key={`client-duplicate-${client}`} className={`${
                    theme === 'dark'
                      ? 'bg-white/90'
                      : 'bg-gradient-to-r from-purple-500/20 to-blue-500/20'
                  } p-4 rounded-lg min-w-[200px]`}>
                    <div className="h-24 flex items-center justify-center">
                      <img 
                        src={`/clients/${client}.png`}
                        alt={`Client ${client}`} 
                        className="max-w-[180px] max-h-[120px] w-auto h-auto object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        id="stats-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-4 py-20 md:py-32 relative motion-section"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl" />
        <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => {
            const count = useCountUp({
              end: stat.number,
              duration: 2000,
              delay: index * 200,
            });

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4"
              >
                <div className={`text-3xl md:text-5xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>
                  {count}
                  {stat.suffix}
                </div>
                <div className={`text-sm md:text-base ${
                  theme === 'dark' ? 'text-white/60' : 'text-black/80'
                }`}>
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      <Footer />
    </main>
  );
};

export default Index;
