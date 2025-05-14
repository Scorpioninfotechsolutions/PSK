import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import GradientDivider from "@/components/GradientDivider";
import Footer from "@/components/Footer";
import { useTheme } from "@/lib/themes";
import AnimatedGradientBackground from "@/components/AnimatedGradientBackground";
import ShineEffect from "@/components/ShineEffect";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "Mr.S.Muthusamy",
    image: "/images/Team/1.png"
  },
  {
    id: 2,
    name: "Mahendran",
    position: "Civil Engineer",
    image: "/images/Team/2.png"
  },
  {
    id: 3,
    name: "Mr.S.Muthusamy",
    position: "Safety Officer",
    image: "/images/Team/3.png"
  },
  {
    id: 4,
    name: "Kannadasan",
    position: "Machine Operator",
    image: "/images/Team/4.png"
  },
  {
    id: 5,
    name: "Senthil Kumar",
    position: "Construction Supervisor",
    image: "/images/Team/5.png"
  },
];

const Careers = () => {
  const { theme } = useTheme();
  const [api, setApi] = React.useState<any>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

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
              Careers at PSK Infra Projects
            </h1>
            <p className="text-lg md:text-2xl text-[#5fa5f9] max-w-3xl mx-auto text-shadow-md" style={{
              color: theme === 'dark' ? '#5fa5f9' : 'white'
            }}>
              Build Your Future with Us
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

      {/* Life at PSK Section */}
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
            LIFE AT PSK
          </motion.h2>
          <GradientDivider />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className={`shine-effect-container p-8 rounded-lg overflow-hidden ${
            theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200 hover:border-blue-200'
          } transition-all duration-300 relative`}>
            <ShineEffect variant="blue" />
            <p className={`text-base md:text-lg z-10 relative ${
              theme === 'dark' ? 'text-white/80' : 'text-black/80'
            }`}>
              At PSK, we don't just build structures — we build careers. From the first day on site to long-term leadership roles, 
              we are committed to supporting every member of our team with growth opportunities, a strong safety culture, 
              and a sense of purpose in every project we deliver.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Our People, Our Pride Section with Carousel */}
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
            OUR PEOPLE, OUR PRIDE
          </motion.h2>
          <GradientDivider />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-sm md:text-base text-center ${
              theme === 'dark' ? 'text-white/70' : 'text-black/80'
            } max-w-4xl mx-auto mt-4`}
          >
            Meet the heart of our company — our employees. Our diverse, skilled, and passionate team members bring dedication, 
            innovation, and teamwork to every job site. From engineers and project managers to machine operators and safety officers, 
            each person plays a vital role in our success.
          </motion.p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl" />
          
          <button 
            onClick={() => api?.scrollPrev()}
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
              theme === 'dark'
                ? 'bg-white/10 border-white/20 hover:bg-white/20'
                : 'bg-gradient-to-r from-purple-500 to-blue-500 border-transparent hover:opacity-90'
            } border`}
            aria-label="Previous slide"
          >
            <ChevronLeft className={`w-6 h-6 ${
              theme === 'dark' ? 'text-white' : 'text-white'
            }`} />
          </button>
          
          <button 
            onClick={() => api?.scrollNext()}
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
              theme === 'dark'
                ? 'bg-white/10 border-white/20 hover:bg-white/20'
                : 'bg-gradient-to-r from-purple-500 to-blue-500 border-transparent hover:opacity-90'
            } border`}
            aria-label="Next slide"
          >
            <ChevronRight className={`w-6 h-6 ${
              theme === 'dark' ? 'text-white' : 'text-white'
            }`} />
          </button>

          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="relative w-full overflow-visible py-4"
            setApi={setApi}
          >
            <div className="relative w-full h-full">
              <CarouselContent className="-ml-2 md:-ml-4">
                {teamMembers.map((member, index) => (
                  <CarouselItem 
                    key={index} 
                    className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 flex justify-center h-full"
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`relative w-full max-w-[300px] rounded-2xl overflow-hidden backdrop-blur-sm flex flex-col items-center p-8 h-full ${
                        member.id === 1 ?
                          'bg-gradient-to-br from-purple-600/30 via-blue-500/20 to-purple-500/30 border-purple-500/30 shadow-lg shadow-purple-500/20' :
                          theme === 'dark'
                            ? 'bg-white/5 border-white/10'
                            : 'bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-500/20'
                      } border`}
                    >
                      {/* Image Section */}
                      <div className={`w-28 h-28 rounded-full overflow-hidden mb-6 border-4 ${
                        member.id === 1 ?
                          'border-purple-500/40 shadow-lg shadow-purple-500/20' :
                          theme === 'dark' 
                            ? 'border-white/10' 
                            : 'border-purple-500/20'
                      }`}>
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          decoding="async"
                          width="112"
                          height="112"
                        />
                      </div>
                      
                      {/* Content Section */}
                      <div className="flex flex-col items-center w-full">
                        <h3 className={`text-xl font-bold ${
                          member.id === 1 ?
                            'bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-transparent' :
                            theme === 'dark' ? 'text-white' : 'text-black'
                        } mb-1`}>{member.name}</h3>
                        <p className={`${
                          member.id === 1 ?
                            theme === 'dark' ?
                              'text-purple-200 font-semibold' :
                              'bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-transparent font-semibold' :
                            theme === 'dark' ? 'text-white/80' : 'text-black/80'
                        } font-medium mb-2`}>{member.position}</p>
                        
                        {member.id === 1 && (
                          <span className={`inline-block px-3 rounded-full text-sm ${
                            theme === 'dark' ? 'bg-purple-900/30 text-purple-300' : 'bg-purple-100 text-purple-700'
                          } mb-1`}>
                            Founder & CEO
                          </span>
                        )}
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>
          </Carousel>

          <div className="flex justify-center gap-2 mt-8">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  current === index 
                    ? theme === 'dark' ? "bg-white" : "bg-purple-500"
                    : theme === 'dark' ? "bg-white/20" : "bg-purple-500/20"
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Committed to Safety Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`py-16 md:py-32 relative overflow-hidden ${
          theme === 'dark' ? 'bg-black/50' : ''
        }`}
      >
        <div className="container mx-auto px-4">
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
              COMMITTED TO SAFETY
            </motion.h2>
            <GradientDivider />
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className={`shine-effect-container p-8 rounded-lg overflow-hidden ${
              theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200 hover:border-purple-200'
            } transition-all duration-300 relative`}>
              <ShineEffect variant="purple" />
              <p className={`text-base md:text-lg z-10 relative ${
                theme === 'dark' ? 'text-white/80' : 'text-black/80'
              }`}>
                Safety is more than a policy — it's a core value. We invest in top-tier training, equipment, and systems to ensure 
                every team member returns home safely each day. Our safety-first culture is driven by accountability, awareness, and 
                continuous improvement.
                <br /><br />
                We are dedicated to preventing environmental pollution and promoting health by maintaining a safe, clean, and
                hygienic working environment at all our workplaces. We are committed to complying with all applicable statutory and
                regulatory requirements.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Join Our Team Section */}
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
            JOIN OUR TEAM
          </motion.h2>
          <GradientDivider />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className={`shine-effect-container p-8 rounded-lg overflow-hidden ${
            theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200 hover:border-blue-200'
          } transition-all duration-300 relative`}>
            <ShineEffect variant="blue" />
            <p className={`text-base md:text-lg z-10 relative ${
              theme === 'dark' ? 'text-white/80' : 'text-black/80'
            }`}>
              We're always looking for talented, driven individuals who are ready to make an impact. Whether you're a seasoned 
              professional or just starting out, we offer a variety of roles across disciplines. Explore current opportunities 
              and take the first step toward a rewarding career.
            </p>
          </div>
          <div className="flex justify-center mt-8">
              <Link to="/careers/apply">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-3 rounded-full transition-colors ${
                    theme === 'dark'
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white'
                      : 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white'
                  } font-medium shadow-lg`}
                >
                  Apply Now
                </motion.button>
              </Link>
            </div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
};

export default Careers; 