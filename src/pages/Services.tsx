import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTheme } from "@/lib/themes";
import { SEO } from '@/components/SEO';
import { Helmet } from "react-helmet";
import AnimatedGradientBackground from "@/components/AnimatedGradientBackground";
import ServiceCard from "@/components/ServiceCard";
import GradientDivider from "@/components/GradientDivider";

// Service data
const services = [
  {
    title: "Earthwork, Drilling and Blasting",
    description: "Specialized in ground preparation and excavation work with state-of-the-art equipment.",
    imageUrl: "/images/services/earth.webp",
    points: [
      "Site preparation",
      "Rock blasting",
      "Excavation",
      "Land development"
    ]
  },
  {
    title: "Civil Engineering Structures",
    description: "Expert construction of various civil engineering structures with precision and quality.",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop",
    points: [
      "Bridges",
      "Culverts",
      "Retaining walls",
      "Foundation works"
    ]
  },
  {
    title: "Roads Construction",
    description: "Comprehensive road construction services using modern techniques and materials.",
    imageUrl: "https://media.istockphoto.com/id/496119890/photo/new-road-construction.webp?a=1&b=1&s=612x612&w=0&k=20&c=erM6aqnqER-vwAebgVu0c9Uql4xcgE0wUKa7KD9GYcg=",
    points: [
      "Gravel roads",
      "Paving blocks",
      "Concrete roads",
      "Bitumen roads",
      "PQC roads"
    ]
  },
  {
    title: "Building Construction",
    description: "End-to-end building construction services with focus on quality and timely delivery.",
    imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
    points: [
      "Commercial buildings",
      "Industrial structures",
      "Institutional buildings"
    ]
  },
  {
    title: "Airport Works",
    description: "Specialized construction services for airport infrastructure development.",
    imageUrl: "/images/services/airport.webp",
    points: [
      "Runway construction",
      "Taxiway development",
      "Airport infrastructure"
    ]
  }
];

const Services = () => {
  const { theme } = useTheme();

  return (
    <>
      <SEO 
        title="Our Services | PSK Infra Projects"
        description="Explore our comprehensive range of IT solutions, including IT infrastructure, security systems, print management, and more."
        keywords="IT services, IT infrastructure, security systems, print management, technology solutions"
        ogUrl="/services"
        canonical="/services"
      />
      <Helmet>
        <title>Our Services | PSK Infra Projects</title>
      </Helmet>
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
                Our Services
              </h1>
              <p className="text-lg md:text-2xl text-[#5fa5f9] max-w-3xl mx-auto text-shadow-md" style={{
                color: theme === 'dark' ? '#5fa5f9' : 'white'
              }}>
                Comprehensive Infrastructure Solutions
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

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-center mb-2 md:mb-3 text-transparent"
                style={{
                  WebkitTextStroke: theme === 'dark' ? '2px white' : '2px black'
                }}
              >
                OUR INFRASTRUCTURE SERVICES
              </motion.h2>
              
              <GradientDivider animationDelay={0.3} />
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className={`text-sm md:text-base text-center ${
                  theme === 'dark' ? 'text-white/70' : 'text-black/80'
                } max-w-4xl mx-auto`}
              >
                We offer a comprehensive range of infrastructure development services tailored to meet your project requirements
              </motion.p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    imageUrl={service.imageUrl}
                    points={service.points}
                    variant={index % 2 === 0 ? 'purple' : 'blue'}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Services;
