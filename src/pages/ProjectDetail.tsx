import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTheme } from "@/lib/themes";
import { SEO } from '@/components/SEO';
import { Helmet } from "react-helmet";
import AnimatedGradientBackground from "@/components/AnimatedGradientBackground";
import GradientDivider from "@/components/GradientDivider";

// Import the projects data
import { projects } from "./Projects";

// Define project type
type Project = {
  id: string;
  title: string;
  description: string;
  cost: string;
  location: string;
  status: string;
  imageUrl: string;
  variant: string;
  timeline?: string;
  galleryImages?: string[];
  keyFeatures?: string[];
  developmentImpacts?: string[];
};

// Image Modal Component
const ImageModal = ({ 
  isOpen, 
  onClose, 
  imageSrc, 
  imageAlt 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  imageSrc: string; 
  imageAlt: string 
}) => {
  if (!isOpen) return null;
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-6xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={onClose}
              className="absolute -top-12 right-0 text-white bg-black/50 hover:bg-black/70 p-2 rounded-full transition-all"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={imageSrc} 
              alt={imageAlt} 
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const { theme } = useTheme();
  const [project, setProject] = useState<Project | null>(null);
  const [modalImage, setModalImage] = useState<string | null>(null);
  
  useEffect(() => {
    // Find the project by ID
    if (projectId) {
      const foundProject = projects.find(p => p.id === projectId);
      setProject(foundProject || null);
    }
  }, [projectId]);

  const handleImageClick = (imageSrc: string) => {
    setModalImage(imageSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Loading project details...</p>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={`${project.title} | PSK Infra Projects`}
        description={project.description}
        keywords="infrastructure project, construction project, civil engineering"
        ogUrl={`/projects/${projectId}`}
        canonical={`/projects/${projectId}`}
      />
      <Helmet>
        <title>{project.title} | PSK Infra Projects</title>
      </Helmet>
      <main className={`min-h-screen ${
        theme === 'dark' ? 'bg-black' : 'bg-gray-50'
      }`}>
        <Navbar />

        {/* Image Modal */}
        <ImageModal 
          isOpen={!!modalImage} 
          onClose={closeModal} 
          imageSrc={modalImage || ''} 
          imageAlt={`${project.title} Gallery Image`} 
        />

        {/* Hero Section with Project Image */}
        <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden mt-16">
          <div className="absolute inset-0 z-0">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40"
              style={{ 
                background: theme === 'light' 
                  ? 'linear-gradient(to top, white, rgba(255,255,255,0.7), rgba(255,255,255,0.4))' 
                  : 'linear-gradient(to top, black, rgba(0,0,0,0.7), rgba(0,0,0,0.4))' 
              }}
            ></div>
          </div>
          
          <div className="container mx-auto px-4 py-20 z-10 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <h1 className={`text-3xl md:text-5xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                {project.title}
              </h1>
              <p className={`text-lg md:text-2xl mb-6 font-semibold ${
                theme === 'dark' ? 'text-[#BD72E3]' : 'text-purple-700'
              }`}>
                Project Value: {project.cost}
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className={`backdrop-blur-md px-4 py-2 rounded-lg border ${
                  theme === 'dark' ? 'bg-white/10 border-white/20' : 'bg-black/5 border-black/10'
                }`}>
                  <span className={`text-sm ${
                    theme === 'dark' ? 'text-white/70' : 'text-black/70'
                  }`}>Location</span>
                  <p className={`font-medium ${
                    theme === 'dark' ? 'text-white' : 'text-black'
                  }`}>{project.location}</p>
                </div>
                <div className={`backdrop-blur-md px-4 py-2 rounded-lg border ${
                  theme === 'dark' ? 'bg-white/10 border-white/20' : 'bg-black/5 border-black/10'
                }`}>
                  <span className={`text-sm ${
                    theme === 'dark' ? 'text-white/70' : 'text-black/70'
                  }`}>Status</span>
                  <p className={`font-medium ${
                    project.status === "ongoing" 
                      ? theme === 'dark' ? "text-purple-400" : "text-purple-700"
                      : theme === 'dark' ? "text-blue-400" : "text-blue-700"
                  }`}>
                    {project.status === "ongoing" ? "Ongoing" : "Completed"}
                  </p>
                </div>
                {project.timeline && (
                  <div className={`backdrop-blur-md px-4 py-2 rounded-lg border ${
                    theme === 'dark' ? 'bg-white/10 border-white/20' : 'bg-black/5 border-black/10'
                  }`}>
                    <span className={`text-sm ${
                      theme === 'dark' ? 'text-white/70' : 'text-black/70'
                    }`}>Timeline</span>
                    <p className={`font-medium ${
                      theme === 'dark' ? 'text-white' : 'text-black'
                    }`}>{project.timeline}</p>
                  </div>
                )}
              </div>
              <p className={`text-lg max-w-3xl ${
                theme === 'dark' ? 'text-white/90' : 'text-black/90'
              }`}>
                {project.description}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Project Details Section */}
        <section >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              {/* Back to Projects button - moved above title */}
              <div className="flex justify-start mb-8">
                <Link to="/projects" className={`inline-flex items-center px-4 py-2 rounded-full backdrop-blur-md border transition-all ${
                  theme === 'dark' 
                    ? 'text-white bg-black/30 hover:bg-black/50 border-white/20' 
                    : 'text-black bg-white/70 hover:bg-white/90 border-black/10'
                }`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Projects
                </Link>
              </div>
              
              {project.galleryImages && project.galleryImages.length > 0 && (
                <>
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
                    PROJECT GALLERY
                  </motion.h2>
                  
                  <GradientDivider animationDelay={0.3} />
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className={`text-sm md:text-base text-center ${
                      theme === 'dark' ? 'text-white/70' : 'text-black/80'
                    } max-w-4xl mx-auto mb-12`}
                  >
                    Explore visual highlights from our {project.title} project
                  </motion.p>
                  
                  {/* Gallery Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {project.galleryImages.map((img, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="rounded-xl overflow-hidden shadow-lg relative group cursor-pointer"
                        onClick={() => handleImageClick(img)}
                      >
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10"></div>
                        <img
                          src={img}
                          alt={`${project.title} Gallery Image ${index + 1}`}
                          className="w-full h-64 object-cover transition-all duration-700 ease-in-out group-hover:scale-110 transform-gpu"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                          <div className="bg-white/20 backdrop-blur-md p-3 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </>
              )}
              
              {/* Project Specifications - Only show if either keyFeatures or developmentImpacts exists */}
              {(project.keyFeatures || project.developmentImpacts) && (
                <div className="mt-20">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className={`text-2xl md:text-3xl font-bold mb-8 ${
                      theme === 'dark' ? 'text-white' : 'text-black'
                    }`}
                  >
                    Project Specifications
                  </motion.h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {project.keyFeatures && project.keyFeatures.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className={`backdrop-blur-md border rounded-xl p-6 ${
                          theme === 'dark' ? 'bg-white/5 border-white/20' : 'bg-black/5 border-black/10'
                        }`}
                      >
                        <h4 className={`text-xl font-bold mb-4 ${
                          theme === 'dark' ? 'text-white' : 'text-black'
                        }`}>Key Features</h4>
                        <ul className="space-y-3">
                          {project.keyFeatures.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <div className="text-purple-500 mr-2">•</div>
                              <span className={`${
                                theme === 'dark' ? 'text-white/80' : 'text-black/80'
                              }`}>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                    
                    {project.developmentImpacts && project.developmentImpacts.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className={`backdrop-blur-md border rounded-xl p-6 ${
                          theme === 'dark' ? 'bg-white/5 border-white/20' : 'bg-black/5 border-black/10'
                        }`}
                      >
                        <h4 className={`text-xl font-bold mb-4 ${
                          theme === 'dark' ? 'text-white' : 'text-black'
                        }`}>Development Impact</h4>
                        <ul className="space-y-3">
                          {project.developmentImpacts.map((impact, index) => (
                            <li key={index} className="flex items-start">
                              <div className="text-blue-500 mr-2">•</div>
                              <span className={`${
                                theme === 'dark' ? 'text-white/80' : 'text-black/80'
                              }`}>{impact}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default ProjectDetail; 