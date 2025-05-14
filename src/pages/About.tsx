import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import GradientDivider from "@/components/GradientDivider";
import Footer from "@/components/Footer";
import { useTheme } from "@/lib/themes";
import AnimatedGradientBackground from "@/components/AnimatedGradientBackground";
import ShineEffect, { ShineEffectContainer, withShineEffect } from "@/components/ShineEffect";

const About = () => {
  const { theme } = useTheme();

  // Custom component for journey cards that only have glow effect without shine
  const GlowEffect = ({ variant = 'purple' }) => {
    const themePrefix = theme === 'dark' ? 'dark' : 'light';
    const variantClass = `${themePrefix}-${variant}`;
    
    return (
      <div className={`${variantClass}-glow`} data-variant={variantClass}></div>
    );
  };

  return (
    <main className={`min-h-screen ${
      theme === 'dark' ? 'bg-black' : 'bg-gray-50'
    }`}>
      <Navbar />

      {/* Hero Section with Animated Background */}
      <AnimatedGradientBackground className="min-h-[70vh] flex items-center justify-center overflow-hidden relative">
        <div className="absolute inset-0 z-0"></div>
        <div className="container mx-auto px-4 py-20 z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 text-shadow-lg">
              About PSK Infra Projects
            </h1>
            <p className="text-lg md:text-2xl text-[#5fa5f9] max-w-3xl mx-auto text-shadow-md" style={{
              color: theme === 'dark' ? '#5fa5f9' : 'white'
            }}>
              Building Excellence Since 2017
            </p>
          </motion.div>
        </div>
        {/* Gradient fade overlay for smooth transition */}
        <div className="absolute bottom-[-15px] left-[-10px] right-[-10px] h-32 bg-gradient-to-t from-black from-10% via-black/60 via-30% via-black/30 via-60% to-transparent to-90% z-10 pointer-events-none blur"
            style={{ 
              background: theme === 'light' 
                ? 'linear-gradient(to top, white, rgba(255,255,255,0.7), transparent)' 
                : 'linear-gradient(to top, black, rgba(0,0,0,0.7), transparent)' 
            }}
        ></div>
      </AnimatedGradientBackground>

      {/* Vision & Mission Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-16 md:py-32 relative overflow-hidden"
      >
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center mb-2 md:mb-3 text-transparent"
            style={{
              WebkitTextStroke: theme === 'dark' ? '2px white' : '2px black'
            }}
          >
            OUR VISION & MISSION
          </motion.h2>
          <GradientDivider />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-sm md:text-base text-center ${
              theme === 'dark' ? 'text-white/70' : 'text-black/80'
            } max-w-4xl mx-auto`}
          >
            At PSK Infra Projects, we strive to be the leading infrastructure development
            company, delivering exceptional quality and innovative solutions while maintaining
            the highest standards of safety and sustainability.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className={`shine-effect-container p-8 rounded-lg overflow-hidden ${
            theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-white border border-black-200 hover:border-purple-200'
          } transition-all duration-300 relative`}>
            <ShineEffect variant="purple" />
            <h3 className={`text-xl md:text-2xl font-bold mb-4 z-10 relative ${
              theme === 'dark' ? 'text-purple-400' : 'text-purple-500'
            }`}>Vision</h3>
            <p className={`text-sm md:text-base z-10 relative ${
              theme === 'dark' ? 'text-white/70' : 'text-black/80'
            }`}>
              To be the most trusted name in infrastructure development, known for
              excellence, innovation, and sustainable practices.
            </p>
          </div>
          
          <div className={`shine-effect-container p-8 rounded-lg overflow-hidden ${
            theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200 hover:border-blue-200'
          } transition-all duration-300 relative`}>
            <ShineEffect variant="blue" />
            <h3 className={`text-xl md:text-2xl font-bold mb-4 z-10 relative ${
              theme === 'dark' ? 'text-blue-400' : 'text-blue-500'
            }`}>Mission</h3>
            <p className={`text-sm md:text-base z-10 relative ${
              theme === 'dark' ? 'text-white/70' : 'text-black/80'
            }`}>
              To deliver high-quality infrastructure projects that contribute to national
              development while ensuring customer satisfaction and employee growth.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Leadership Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-16 md:py-32 relative overflow-hidden"
      >
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center mb-2 md:mb-3 text-transparent"
            style={{
              WebkitTextStroke: theme === 'dark' ? '2px white' : '2px black'
            }}
          >
            LEADERSHIP
          </motion.h2>
          <GradientDivider />
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className={`shine-effect-container p-8 rounded-lg text-center overflow-hidden ${
            theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200 hover:border-blue-200'
          } transition-all duration-300 relative`}>
            <ShineEffect variant="blue" />
            <h3 className={`text-xl md:text-2xl font-bold mb-2 z-10 relative ${
              theme === 'dark' ? 'text-white' : 'text-blue-700'
            }`}>Mr. S. Muthusamy</h3>
            <p className={`inline-block px-3 py-1 rounded-full mb-4 z-10 relative ${
              theme === 'dark' ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-700'
            }`}>Proprietor</p>
            
            <p className={`text-sm md:text-base z-10 relative ${
              theme === 'dark' ? 'text-white/70' : 'text-black/80'
            }`}>
              With over 15 years of experience in the infrastructure sector, Mr. S. Muthusamy has led
              PSK Infra Projects to become one of the leading infrastructure development companies
              in Karur, Tamil Nadu.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Our Strengths Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-16 md:py-32 relative overflow-hidden"
      >
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center mb-2 md:mb-3 text-transparent"
            style={{
              WebkitTextStroke: theme === 'dark' ? '2px white' : '2px black'
            }}
          >
            OUR STRENGTHS
          </motion.h2>
          <GradientDivider />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className={`shine-effect-container p-8 rounded-lg text-center overflow-hidden ${
            theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200 hover:border-purple-200'
          } transition-all duration-300 relative`}>
            <ShineEffect variant="purple" />
            <h3 className={`text-lg font-bold mb-4 uppercase z-10 relative ${
              theme === 'dark' ? 'text-purple-400' : 'text-purple-500'
            }`}>WORK EXPERTISE</h3>
            <p className={`text-sm md:text-base z-10 relative ${
              theme === 'dark' ? 'text-white/70' : 'text-black/80'
            }`}>
              Proven track record in delivering complex infrastructure projects.
            </p>
          </div>
          
          <div className={`shine-effect-container p-8 rounded-lg text-center overflow-hidden ${
            theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200 hover:border-blue-200'
          } transition-all duration-300 relative`}>
            <ShineEffect variant="blue" />
            <h3 className={`text-lg font-bold mb-4 uppercase z-10 relative ${
              theme === 'dark' ? 'text-blue-400' : 'text-blue-500'
            }`}>EXPERIENCE</h3>
            <p className={`text-sm md:text-base z-10 relative ${
              theme === 'dark' ? 'text-white/70' : 'text-black/80'
            }`}>
              15+ years of industry experience in various infrastructure domains.
            </p>
          </div>
          
          <div className={`shine-effect-container p-8 rounded-lg text-center overflow-hidden ${
            theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200 hover:border-purple-200'
          } transition-all duration-300 relative`}>
            <ShineEffect variant="purple" />
            <h3 className={`text-lg font-bold mb-4 uppercase z-10 relative ${
              theme === 'dark' ? 'text-purple-400' : 'text-purple-500'
            }`}>KNOWLEDGE</h3>
            <p className={`text-sm md:text-base z-10 relative ${
              theme === 'dark' ? 'text-white/70' : 'text-black/80'
            }`}>
              Deep understanding of construction methodologies and best practices.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      {/* <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-32 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl" />
        <div className="relative text-center mb-16">
          <h2 className={`text-5xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-black'
          } mb-6`}>Our Team</h2>
          <p className={`${
            theme === 'dark' ? 'text-white/60' : 'text-black/60'
          } text-xl`}>Driven by innovation and excellence</p>
        </div>
        <TeamCarousel theme={theme} />
      </motion.section> */}

      {/* Vision Section */}
      {/* <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-32"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <h2 className={`text-5xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>Our Vision</h2>
            <p className={`${
              theme === 'dark' ? 'text-white/60' : 'text-black/60'
            } text-xl`}>
            To be the leading Infrastructure solutions provider, delivering excellence through comprehensive infrastructure services and innovative solutions across the nation.
            </p>
            <div className="space-y-4">
              {[
                { 
                  icon: <Rocket className="w-6 h-6" />, 
                  text: "Strategic Presence",
                  description: "Convenient infrastructure solutions for all our clients, ensuring quick response and comprehensive coverage across major cities, reaching even the nooks and corners of the nation."
                },
                { 
                  icon: <Award className="w-6 h-6" />, 
                  text: "Competitive Excellence",
                  description: "Offering top-quality infrastructure solutions at competitive prices, backed by highly trained professionals delivering efficient solutions."
                },
                { 
                  icon: <Users className="w-6 h-6" />, 
                  text: "Expert Team",
                  description: "Our skilled technicians provide quick solutions and top-notch service at affordable rates, ensuring customer satisfaction."
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center space-x-4  select-none ${
                    theme === 'dark' ? 'text-white' : 'text-black'
                  }`}
                >
                  <div className="text-purple-500">{item.icon}</div>
                  <div>
                    <div className="font-semibold">{item.text}</div>
                    <div className={`${
                      theme === 'dark' ? 'text-white/60' : 'text-black/60'
                    } text-sm mt-1 hover:text-purple-500`}>{item.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl" />
            <TiltCard>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="/about-2.png"
                  alt="Vision"
                  className="w-full h-full object-cover"
                />
              </div>
            </TiltCard>
          </div>
        </div>
      </motion.section> */}

      {/* Timeline Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-16 md:py-32 relative overflow-hidden"
      >
        <div className="absolute inset-0 " />
        <div className="relative">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center mb-6 md:mb-10 text-transparent"
            style={{
              WebkitTextStroke: theme === 'dark' ? '2px white' : '2px black'
            }}
          >
            OUR JOURNEY
            <div className="mt-4">
              <GradientDivider/>
            </div>
          </motion.h2>
          <div className="space-y-16 md:space-y-32 relative pl-8 md:pl-0">
            {[
              {
                year: 2017,
                title: "Company Founded",
                description: "Successfully launched our construction venture specializing in roads, excavation, mining, and transport projects."
              },
              {
                year: 2019,
                title: "Annual Turnover: ₹24 CR",
                description: "Achieved significant growth with annual turnover reaching ₹24 CR through successful execution of multiple infrastructure projects."
              },
              {
                year: 2021,
                title: "Annual Turnover: ₹32 CR",
                description: "Expanded our project portfolio and team of certified experts, resulting in annual turnover increasing to ₹32 CR."
              },
              {
                year: 2023,
                title: "Annual Turnover: ₹61 CR",
                description: "Remarkable business expansion with 50+ major projects completed, resulting in annual turnover of ₹61 CR."
              },
              {
                year: 2025,
                title: "Annual Turnover: ₹100 CR",
                description: "Achieved a milestone turnover of ₹100 CR by expanding operations across new regions, adopting advanced technologies, and executing high-value infrastructure projects."
              }
            ].map((milestone, index, array) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20, x: -20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                className="flex items-start relative flex-col md:flex-row"
              >
                {/* Connecting Line */}
                {index < array.length - 1 && (
                  <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: 256 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.2 + 0.5,
                      ease: "easeOut"
                    }}
                    viewport={{ once: true }}
                    style={{
                      position: 'absolute',
                      top: '22px',
                      left: '116.5px',
                      width: '3px',
                      transformOrigin: 'top',
                      background: 'linear-gradient(to bottom, #A855F7 0%, #3B82F6 100%)',
                      opacity: 0.5,
                      boxShadow: '0 0 8px rgba(168, 85, 247, 0.3)'
                    }}
                    className="hidden md:block"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-500 to-blue-500 blur-sm" />
                  </motion.div>
                )}

                {/* Year Box and Dot Container */}
                <div className="flex items-center mb-3 md:mb-0">
                  {/* Year Box */}
                  <div className="w-[80px] md:w-[100px] flex-shrink-0 relative z-10">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 + 0.2 }}
                      viewport={{ once: true }}
                      className={`text-xl md:text-2xl font-bold ${
                        theme === 'dark' ? 'text-white' : 'text-black'
                      } bg-purple-500/10 p-2 rounded-lg backdrop-blur-sm border border-purple-500/20 text-center`}
                    >
                      {milestone.year}
                    </motion.div>
                  </div>

                  {/* Timeline Dot with Pulse Effect */}
                  <div className="hidden md:block absolute left-[108px] top-[12px] z-20">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ 
                        delay: index * 0.2 + 0.3,
                        type: "spring",
                        stiffness: 200,
                        damping: 10
                      }}
                      viewport={{ once: true }}
                      className="w-[20px] h-[20px] rounded-full bg-gradient-to-r from-purple-500 to-blue-500 border-4 border-black shadow-lg shadow-purple-500/20 relative"
                    >
                      <div className="absolute inset-[2px] rounded-full bg-black" />
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1.5, opacity: 0 }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 2,
                          delay: index * 0.2 + 0.3
                        }}
                        viewport={{ once: true }}
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-20"
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Content Box */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + 0.4 }}
                  viewport={{ once: true }}
                  className={`glow-only-container flex-grow md:ml-12 overflow-hidden ${
                    theme === 'dark' ? 'bg-white/5 border-white/10' : 'border-black/10'
                  } p-4 md:p-8 rounded-lg backdrop-blur-sm ${
                    index % 2 === 0
                      ? 'hover:border-purple-500/50'
                      : 'hover:border-blue-500/50'
                  } transition-all duration-300 border hover:border-0.5 ${
                    theme === 'dark' ? 'shadow-lg shadow-black/20' : ''
                  } w-full relative hover:transform hover:scale-102`}
                >
                  <GlowEffect variant={index % 2 === 0 ? "purple" : "blue"} />
                  <h3 className={`text-xl md:text-2xl font-bold mb-2 md:mb-4 z-10 relative ${
                    index % 2 === 0 
                      ? (theme === 'dark' ? 'text-purple-400' : 'text-purple-700')
                      : (theme === 'dark' ? 'text-blue-400' : 'text-blue-700')
                  }`}>
                    {milestone.title}
                  </h3>
                  <p className={`text-sm md:text-base z-10 relative ${
                    theme === 'dark' ? 'text-white/70' : 'text-black/80'
                  }`}>
                    {milestone.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
};

export default About;
