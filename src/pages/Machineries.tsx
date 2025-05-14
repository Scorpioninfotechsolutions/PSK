import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTheme } from "@/lib/themes";
import { SEO } from '@/components/SEO';
import { Helmet } from "react-helmet";
import AnimatedGradientBackground from "@/components/AnimatedGradientBackground";
import GradientDivider from "@/components/GradientDivider";

// Machinery data from the table
const machineryData = [
  { 
    id: 1, 
    name: "Hydraulic Excavator with Rock Breaker", 
    count: 4, 
    image: "/images/projects/1.webp",
    description: "Powerful excavators with specialized rock breaking capabilities for challenging terrain" 
  },
  { 
    id: 2, 
    name: "Excavator - 380", 
    count: 3, 
    image: "/images/projects/1.webp",
    description: "Heavy-duty excavators for large-scale earthmoving and construction operations" 
  },
  { 
    id: 3, 
    name: "Excavator - 220", 
    count: 11, 
    image: "/images/projects/1.webp",
    description: "Versatile mid-sized excavators for precision digging and earthwork projects" 
  },
  { 
    id: 4, 
    name: "Backhoe Loader", 
    count: 5, 
    image: "/images/projects/1.webp",
    description: "Multi-purpose equipment combining loading, digging and material handling capabilities" 
  },
  { 
    id: 5, 
    name: "Motor Grader – 12ft", 
    count: 5, 
    image: "/images/projects/1.webp",
    description: "Precision grading machinery essential for creating level surfaces in road construction" 
  },
  { 
    id: 6, 
    name: "Roller", 
    count: 7, 
    image: "/images/projects/1.webp",
    description: "Compaction equipment for soil and asphalt to ensure stable, durable foundations" 
  },
  { 
    id: 7, 
    name: "Dozer", 
    count: 2, 
    image: "/images/projects/1.webp",
    description: "Powerful earthmoving machines for clearing, leveling and moving large volumes of material" 
  },
  { 
    id: 8, 
    name: "Portable Light Mask", 
    count: 2, 
    image: "/images/projects/1.webp",
    description: "Mobile lighting systems enabling safe and efficient night-time construction operations" 
  },
  { 
    id: 9, 
    name: "Diesel Tanker (3KL & 12KL)", 
    count: 2, 
    image: "/images/projects/1.webp",
    description: "Fuel transport systems ensuring continuous operation of machinery across project sites" 
  },
  { 
    id: 10, 
    name: "Water Tanker – 12KL", 
    count: 6, 
    image: "/images/projects/1.webp",
    description: "Large capacity water supply vehicles for dust suppression and construction needs" 
  },
  { 
    id: 11, 
    name: "Dumper (10 Wheelers & 12 Wheelers)", 
    count: "78+30", 
    image: "/images/projects/1.webp",
    description: "High-capacity hauling trucks for efficient transportation of materials on major projects" 
  },
  { 
    id: 12, 
    name: "Miller", 
    count: 8, 
    image: "/images/projects/1.webp",
    description: "Specialized pavement milling machines for road rehabilitation and resurfacing projects" 
  },
  { 
    id: 13, 
    name: "Vogele sensor paver -Super 1400i", 
    count: 1, 
    image: "/images/projects/1.webp",
    description: "Advanced paving system with precision sensors for superior road surface quality" 
  },
  { 
    id: 14, 
    name: "Tandem Roller", 
    count: 2, 
    image: "/images/projects/1.webp",
    description: "Dual drum compaction equipment for creating smooth, dense asphalt surfaces" 
  },
];

const Machineries = () => {
  const { theme } = useTheme();
  const [viewMode, setViewMode] = React.useState("card"); // card, list
  const [currentPage, setCurrentPage] = React.useState(1);

  const itemsPerPage = React.useMemo(() => {
    return viewMode === "card" ? 6 : 10;
  }, [viewMode]);

  // Calculate total pages
  const totalPages = React.useMemo(() => {
    return Math.ceil(machineryData.length / itemsPerPage);
  }, [itemsPerPage]);

  // Get current items
  const currentItems = React.useMemo(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return machineryData.slice(indexOfFirstItem, indexOfLastItem);
  }, [currentPage, itemsPerPage]);

  // Reset to page 1 when view mode changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [viewMode]);

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
        
        /* Dark Theme Glow effects */
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
        
        /* Light Theme Glow effects */
        .light-purple-glow-effect {
          position: absolute;
          inset: -10px;
          z-index: 1;
          opacity: 0;
          border-radius: inherit;
          background: radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.2), transparent 70%);
          transition: opacity 0.5s ease;
          pointer-events: none;
          box-shadow: 0 0 20px 5px rgba(124, 58, 237, 0.15);
        }
        
        .light-blue-glow-effect {
          position: absolute;
          inset: -10px;
          z-index: 1;
          opacity: 0;
          border-radius: inherit;
          background: radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2), transparent 70%);
          transition: opacity 0.5s ease;
          pointer-events: none;
          box-shadow: 0 0 20px 5px rgba(59, 130, 246, 0.15);
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <>
      <SEO 
        title="Our Machinery | PSK Infra Projects"
        description="Explore our state-of-the-art machinery fleet powering infrastructure projects across India."
        keywords="construction machinery, infrastructure equipment, heavy machinery, construction fleet"
        ogUrl="/machineries"
        canonical="/machineries"
      />
      <Helmet>
        <title>Our Machinery | PSK Infra Projects</title>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
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
                Our Machinery
              </h1>
              <p className={`text-lg md:text-2xl text-[#5fa5f9] max-w-3xl mx-auto text-shadow-md ${
                theme === 'dark' ? 'text-[#5fa5f9]' : 'text-white'
              }`}>
                State-of-the-art Machinery Fleet
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

        {/* Machinery Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
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
                OUR MACHINERY
              </motion.h2>
              
              <GradientDivider animationDelay={0.3} />
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className={`text-sm md:text-base text-center ${
                  theme === 'dark' ? 'text-white/70' : 'text-black/80'
                } max-w-4xl mx-auto mb-8`}
              >
                Our advanced machinery fleet enables us to deliver exceptional infrastructure projects efficiently and safely
              </motion.p>

              {/* View Toggle */}
              <div className="flex justify-center items-center mt-4 mb-8">
                <div className={`flex rounded-full p-1 ${theme === 'dark' ? 'bg-gray-800/40' : 'bg-gray-200/70'}`}>
                  <button 
                    onClick={() => setViewMode("card")}
                    className={`p-2 rounded-full transition-all ${
                      viewMode === "card" 
                        ? "bg-[#1F1F2E] text-white" 
                        : theme === 'dark'
                          ? "text-gray-300 hover:bg-gray-800/20"
                          : "text-gray-700 hover:bg-gray-300/50"
                    }`}
                    aria-label="Card view"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button 
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-full transition-all ${
                      viewMode === "list" 
                        ? "bg-[#1F1F2E] text-white" 
                        : theme === 'dark'
                          ? "text-gray-300 hover:bg-gray-800/20"
                          : "text-gray-700 hover:bg-gray-300/50"
                    }`}
                    aria-label="List view"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Machinery List Table - List View */}
            {viewMode === "list" && (
              <div className="overflow-x-auto mb-16">
                <table className={`min-w-full border-collapse bg-transparent ${
                  theme === 'dark' ? '' : 'border-gray-300'
                }`}>
                  <thead>
                    <tr className={`${
                      theme === 'dark' ? 'bg-blue-900/50 text-white' : 'bg-blue-700/20 text-black'
                    }`}>
                      <th className={`py-3 px-4 text-left font-bold border ${
                        theme === 'dark' ? 'border-gray-700' : 'border-gray-300'
                      }`}>S.NO</th>
                      <th className={`py-3 px-4 text-left font-bold border ${
                        theme === 'dark' ? 'border-gray-700' : 'border-gray-300'
                      }`}>LIST OF MACHINERY</th>
                      <th className={`py-3 px-4 text-left font-bold border ${
                        theme === 'dark' ? 'border-gray-700' : 'border-gray-300'
                      }`}>NOS</th>
                      <th className={`py-3 px-4 text-left font-bold border ${
                        theme === 'dark' ? 'border-gray-700' : 'border-gray-300'
                      }`}>DESCRIPTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.map((item) => (
                      <tr key={item.id} className={`hover:bg-blue-900/20 transition-colors ${
                        theme === 'dark' ? '' : 'hover:bg-blue-700/10'
                      }`}>
                        <td className={`py-3 px-4 border ${
                          theme === 'dark' ? 'border-gray-700 text-blue-200' : 'border-gray-300 text-blue-700'
                        }`}>{item.id}</td>
                        <td className={`py-3 px-4 border font-medium ${
                          theme === 'dark' ? 'border-gray-700 text-white' : 'border-gray-300 text-black'
                        }`}>{item.name}</td>
                        <td className={`py-3 px-4 border text-center ${
                          theme === 'dark' ? 'border-gray-700 text-blue-200' : 'border-gray-300 text-blue-700'
                        }`}>{item.count}</td>
                        <td className={`py-3 px-4 border ${
                          theme === 'dark' ? 'border-gray-700 text-gray-300' : 'border-gray-300 text-gray-700'
                        }`}>{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Machinery Cards - Card View */}
            {viewMode === "card" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {currentItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="service-card-container rounded-xl overflow-hidden backdrop-blur-md border bg-white/5 border-white/20 shadow-lg transition-all duration-300 flex flex-col group h-full"
                  >
                    {/* Image Container */}
                    <div className="h-48 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10"></div>
                      <img
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 transform-gpu"
                        onError={(e) => {
                          e.currentTarget.style.opacity = '0.5';
                          e.currentTarget.style.backgroundColor = '#1e3a8a';
                        }}
                      />
                    </div>
                    
                    {/* Text Container with Glow Effect */}
                    <div className="glow-container relative overflow-hidden flex-grow">
                      {/* Glow Effect */}
                      <div className={`glow-effect ${
                        theme === 'dark' 
                          ? index % 2 === 0 ? 'dark-purple-glow-effect' : 'dark-blue-glow-effect'
                          : index % 2 === 0 ? 'light-purple-glow-effect' : 'light-blue-glow-effect'
                      }`}></div>
                      
                      {/* Content */}
                      <div className="p-5 flex flex-col flex-grow relative z-10">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className={`text-lg md:text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{item.name}</h3>
                        </div>
                        
                        <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
                          {item.description}
                        </p>
                        
                        <div className="mt-auto flex items-center justify-between">
                          <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                            Quantity: <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{item.count} Units</span>
                          </span>
                          <span className={`${index % 2 === 0 ? (theme === 'dark' ? 'bg-purple-700/50' : 'bg-purple-700/30') : (theme === 'dark' ? 'bg-blue-700/50' : 'bg-blue-700/30')} ${theme === 'dark' ? 'text-white' : 'text-white'} text-xs py-1 px-2 rounded-md`}>
                            {typeof item.count === 'number' && item.count > 1 ? 'Multiple Units' : 'Single Unit'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center space-x-2">
                  {/* Previous button */}
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className={`px-3 py-1.5 rounded-md border text-sm ${
                      currentPage === 1 
                        ? theme === 'dark'
                          ? 'border-gray-700/30 text-gray-500/50 cursor-not-allowed'
                          : 'border-gray-300/50 text-gray-400 cursor-not-allowed'
                        : theme === 'dark'
                          ? 'border-gray-700/50 bg-white/5 hover:bg-white/10 text-white'
                          : 'border-gray-400 bg-black/5 hover:bg-black/10 text-black'
                    }`}
                    aria-label="Previous page"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  {/* Page numbers */}
                  {[...Array(totalPages)].map((_, i) => {
                    const pageNumber = i + 1;
                    // Show first page, last page, current page, and pages 1 before and after current
                    const shouldShowPage = 
                      pageNumber === 1 || 
                      pageNumber === totalPages || 
                      Math.abs(pageNumber - currentPage) <= 1;
                    
                    // Add ellipsis
                    if (!shouldShowPage) {
                      // Show ellipsis for skipped pages (only once)
                      if (pageNumber === 2 && currentPage > 3) {
                        return <span key="ellipsis-start" className="px-3 py-1.5 text-gray-500">...</span>;
                      }
                      if (pageNumber === totalPages - 1 && currentPage < totalPages - 2) {
                        return <span key="ellipsis-end" className="px-3 py-1.5 text-gray-500">...</span>;
                      }
                      return null;
                    }
                    
                    return (
                      <button
                        key={pageNumber}
                        onClick={() => setCurrentPage(pageNumber)}
                        className={`px-3 py-1.5 rounded-md border text-sm ${
                          pageNumber === currentPage 
                            ? 'bg-[#1F1F2E] text-white border-[#1F1F2E]' 
                            : theme === 'dark'
                              ? 'border-gray-700/50 bg-white/5 hover:bg-white/10 text-white'
                              : 'border-gray-400 bg-black/5 hover:bg-black/10 text-black'
                        }`}
                        aria-label={`Page ${pageNumber}`}
                        aria-current={pageNumber === currentPage ? 'page' : undefined}
                      >
                        {pageNumber}
                      </button>
                    );
                  }).filter(Boolean)}
                  
                  {/* Next button */}
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1.5 rounded-md border text-sm ${
                      currentPage === totalPages 
                        ? theme === 'dark'
                          ? 'border-gray-700/30 text-gray-500/50 cursor-not-allowed'
                          : 'border-gray-300/50 text-gray-400 cursor-not-allowed'
                        : theme === 'dark'
                          ? 'border-gray-700/50 bg-white/5 hover:bg-white/10 text-white'
                          : 'border-gray-400 bg-black/5 hover:bg-black/10 text-black'
                    }`}
                    aria-label="Next page"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </nav>
              </div>
            )}
          </div>
        </section>
        
        <Footer />
      </main>
    </>
  );
};

export default Machineries; 