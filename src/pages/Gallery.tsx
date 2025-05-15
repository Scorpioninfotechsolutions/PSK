import React from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTheme } from "@/lib/themes";
import AnimatedGradientBackground from "@/components/AnimatedGradientBackground";
import GradientDivider from "@/components/GradientDivider";

const categories = ["All","Airport Works", "Road Works", "Bridge Works", "Tunnel Works", "Building Works", "Other"];

// Sample awards data
const awardsData = [
  {
    id: 1,
    image: "/images/awards/1.webp",
    title: "BharatBenz Excellence Membership Award",
    description: "BharatBenz honors PSK Infra as an Excellence partner."
  },
  {
    id: 2,
    image: "/images/awards/2.webp",
    title: "Excellence in MSME Entrepreneurship",
    description: "Recognized by KVB for entrepreneurial impact and growth."
  },
  {
    id: 3,
    image: "/images/awards/3.webp",
    title: "Enduring Partnership Award ",
    description: "Appreciated by IAV Biogas for trusted long-term collaboration."
  },
  {
    id: 4,
    image: "/images/awards/4.webp",
    title: "Best Quality Contractor",
    description: "Awarded by L&T for quality excellence in the DIAL Phase 3A Project, Nov 2020."
  },
  {
    id: 5,
    image: "/images/awards/5.webp",
    title: "Best Transit Mixer Vendor ",
    description: "Honored by L&T in Feb 2022 for top vendor performance."
  },
  {
    id: 6,
    image: "/images/awards/6.webp",
    title: "Best Quality Conscious",
    description: "Recognized by L&T in 2021 for outstanding quality commitment."
  }
];

const images = [
  {
    id: 1,
    url: "/images/projects/1.webp",
    category: "Airport Works",
    title: "Airport Works",
  },
  {
    id: 2,
    url: "/images/projects/2.webp",
    category: "Road Works",
    title: "Road Works",
  },
  {
    id: 3,
    url: "/images/projects/2.webp",
    category: "Bridge Works",
    title: "Bridge Works",
  },
  {
    id: 4,
    url: "/images/projects/2a.webp",
    category: "Tunnel Works",
    title: "Tunnel Works",
  },
  {
    id: 5,
    url: "/gallery/building-1.png",
    category: "Building Works",
    title: "Building Works",
  },
  {
    id: 6,
    url: "/gallery/other-1.png",
    category: "Other",
    title: "Other",
  },
  {
    id: 7,
    url: "/gallery/other-2.png",
    category: "Other",
    title: "Other",
  },
  {
    id: 8,
    url: "/gallery/other-3.png",
    category: "Other",
    title: "Other",
  },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const { theme } = useTheme();
  const [selectedImage, setSelectedImage] = React.useState<null | typeof images[0]>(null);
  const [currentGalleryPage, setCurrentGalleryPage] = React.useState(1);
  const [currentAwardsPage, setCurrentAwardsPage] = React.useState(1);
  const galleryItemsPerPage = 8; // Show 8 items per page for gallery
  const awardsItemsPerPage = 6; // Show 6 items per page for awards

  const filteredImages = React.useMemo(() => 
    images.filter((image) => selectedCategory === "All" || image.category === selectedCategory),
    [selectedCategory]
  );

  // Calculate total pages for gallery
  const totalGalleryPages = React.useMemo(() => {
    return Math.ceil(filteredImages.length / galleryItemsPerPage);
  }, [filteredImages.length, galleryItemsPerPage]);

  // Get current page items for gallery
  const currentGalleryItems = React.useMemo(() => {
    const indexOfLastItem = currentGalleryPage * galleryItemsPerPage;
    const indexOfFirstItem = indexOfLastItem - galleryItemsPerPage;
    return filteredImages.slice(indexOfFirstItem, indexOfLastItem);
  }, [currentGalleryPage, filteredImages, galleryItemsPerPage]);

  // Calculate total pages for awards
  const totalAwardsPages = React.useMemo(() => {
    return Math.ceil(awardsData.length / awardsItemsPerPage);
  }, [awardsItemsPerPage]);

  // Get current page items for awards
  const currentAwardsItems = React.useMemo(() => {
    const indexOfLastItem = currentAwardsPage * awardsItemsPerPage;
    const indexOfFirstItem = indexOfLastItem - awardsItemsPerPage;
    return awardsData.slice(indexOfFirstItem, indexOfLastItem);
  }, [currentAwardsPage, awardsItemsPerPage]);

  // Reset to page 1 when category changes
  React.useEffect(() => {
    setCurrentGalleryPage(1);
  }, [selectedCategory]);

  // Create glow effect directly in component
  React.useEffect(() => {
    // Add a global style for award card glow effects
    if (!document.getElementById('award-card-styles')) {
      const style = document.createElement('style');
      style.id = 'award-card-styles';
      style.innerHTML = `
        /* Prevent scaling on hover */
        .award-card-container .glow-container:hover {
          transform: none !important;
        }
        
        /* Show glow when hovering on entire card */
        .award-card-container:hover .glow-container .glow-effect {
          opacity: 1;
        }
        
        /* Glow effects - Dark Theme */
        .dark-theme .purple-glow-effect {
          position: absolute;
          inset: -10px;
          z-index: 1;
          opacity: 0;
          border-radius: inherit;
          background: radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.4), transparent 70%);
          transition: opacity 0.5s ease;
          pointer-events: none;
        }
        
        .dark-theme .blue-glow-effect {
          position: absolute;
          inset: -10px;
          z-index: 1;
          opacity: 0;
          border-radius: inherit;
          background: radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.4), transparent 70%);
          transition: opacity 0.5s ease;
          pointer-events: none;
        }

        /* Glow effects - Light Theme */
        .light-theme .purple-glow-effect {
          position: absolute;
          inset: -10px;
          z-index: 1;
          opacity: 0;
          border-radius: inherit;
          background: radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.25), rgba(139, 92, 246, 0.15) 30%, rgba(139, 92, 246, 0.05) 60%, transparent 80%);
          box-shadow: 0 0 15px 2px rgba(139, 92, 246, 0.2);
          transition: opacity 0.5s ease;
          pointer-events: none;
        }
        
        .light-theme .blue-glow-effect {
          position: absolute;
          inset: -10px;
          z-index: 1;
          opacity: 0;
          border-radius: inherit;
          background: radial-gradient(circle at 50% 50%, rgba(96, 165, 250, 0.25), rgba(96, 165, 250, 0.15) 30%, rgba(96, 165, 250, 0.05) 60%, transparent 80%);
          box-shadow: 0 0 15px 2px rgba(96, 165, 250, 0.2);
          transition: opacity 0.5s ease;
          pointer-events: none;
        }

        /* Title color transitions */
        .award-card-container:hover .purple-title {
          color: rgb(139, 92, 246);
        }
        
        .award-card-container:hover .blue-title {
          color: rgb(96, 165, 250);
        }

        /* Gallery image effects */
        .gallery-item {
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .gallery-item:hover .gallery-item-overlay {
          opacity: 1;
        }
        
        .gallery-item:hover img {
          transform: scale(1.05);
        }
        
        .gallery-item-overlay {
          opacity: 0;
          transition: opacity 0.3s ease;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <main className={`min-h-screen ${theme === 'dark' ? 'bg-black dark-theme' : 'bg-gray-50 light-theme'}`}>
        <Navbar />

        {/* Hero Section with Animated Background */}
        <AnimatedGradientBackground className="min-h-[70vh] flex items-center justify-center overflow-hidden relative">
          <div className="absolute inset-0 z-0"></div>
          <div className="container mx-auto px-4 py-20 z-10 relative">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 text-shadow-lg">
                Milestones & Memories
              </h1>
              <p className="text-lg md:text-2xl text-[#5fa5f9] max-w-3xl mx-auto text-shadow-md" style={{
                color: theme === 'dark' ? '#5fa5f9' : 'white'
              }}>
                A glimpse into our proudest achievements, events, and memorable moments
              </p>
            </m.div>
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

        {/* Awards Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            {/* Awards Title */}
            <div className="text-center max-w-3xl mx-auto mb-12 px-4">
              <m.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-center mb-2 md:mb-3 text-transparent"
                style={{
                  WebkitTextStroke: theme === 'dark' ? '2px white' : '2px black'
                }}
              >
                OUR AWARDS
              </m.h2>
              <GradientDivider animationDelay={0.3} />
              <m.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className={`text-sm md:text-base text-center ${
                  theme === 'dark' ? 'text-white/70' : 'text-black/80'
                } max-w-4xl mx-auto`}
              >
                Celebrating our recognition and achievements in the industry
              </m.p>
            </div>

            {/* Awards Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {currentAwardsItems.map((award, index) => (
                <m.div
                  key={award.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className={`award-card-container rounded-xl overflow-hidden backdrop-blur-md border ${
                    theme === 'dark' 
                      ? 'bg-white/5 border-white/10' 
                      : 'bg-white/90 border-purple-500/20 hover:border-purple-500/40'
                  } shadow-lg hover:shadow-xl transition-all duration-300 group`}
                >
                  {/* Award Image */}
                  <div className="aspect-auto min-h-[200px] relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-b ${
                      theme === 'dark' ? 'from-purple-500/30' : 'from-purple-500/10'
                    } to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder-award.png";
                        e.currentTarget.style.opacity = "0.7";
                      }}
                    />
                  </div>
                  
                  {/* Award Content with Glow Effect */}
                  <div className="glow-container relative overflow-hidden rounded-b-xl">
                    {/* Glow Effect */}
                    <div className={`glow-effect ${index % 2 === 0 ? 'purple-glow-effect' : 'blue-glow-effect'}`}></div>
                    
                    {/* Content */}
                    <div className="p-4 md:p-5 relative z-10">
                      <h3 className={`text-base font-bold mb-1.5 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      } transition-colors duration-300 text-center ${index % 2 === 0 ? 'purple-title' : 'blue-title'}`}>
                        {award.title}
                      </h3>
                      <p className={`text-xs ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      } text-center leading-tight`}>
                        {award.description}
                      </p>
                    </div>
                  </div>
                </m.div>
              ))}
            </div>

            {/* Awards Pagination */}
            {totalAwardsPages > 1 && (
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center space-x-2">
                  {/* Previous button */}
                  <button
                    onClick={() => setCurrentAwardsPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentAwardsPage === 1}
                    className={`px-3 py-1.5 rounded-md border text-sm ${
                      currentAwardsPage === 1 
                        ? 'border-gray-700/30 text-gray-500/50 cursor-not-allowed' 
                        : 'border-gray-700/50 bg-white/5 hover:bg-white/10 text-white'
                    }`}
                    aria-label="Previous page"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  {/* Page numbers */}
                  {[...Array(totalAwardsPages)].map((_, i) => {
                    const pageNumber = i + 1;
                    // Show first page, last page, current page, and pages 1 before and after current
                    const shouldShowPage = 
                      pageNumber === 1 || 
                      pageNumber === totalAwardsPages || 
                      Math.abs(pageNumber - currentAwardsPage) <= 1;
                    
                    // Add ellipsis
                    if (!shouldShowPage) {
                      // Show ellipsis for skipped pages (only once)
                      if (pageNumber === 2 && currentAwardsPage > 3) {
                        return <span key="ellipsis-start" className="px-3 py-1.5 text-gray-500">...</span>;
                      }
                      if (pageNumber === totalAwardsPages - 1 && currentAwardsPage < totalAwardsPages - 2) {
                        return <span key="ellipsis-end" className="px-3 py-1.5 text-gray-500">...</span>;
                      }
                      return null;
                    }
                    
                    return (
                      <button
                        key={pageNumber}
                        onClick={() => setCurrentAwardsPage(pageNumber)}
                        className={`px-3 py-1.5 rounded-md border text-sm ${
                          pageNumber === currentAwardsPage 
                            ? 'bg-[#1F1F2E] text-white border-[#1F1F2E]' 
                            : 'border-gray-700/50 bg-white/5 hover:bg-white/10 text-white'
                        }`}
                        aria-label={`Page ${pageNumber}`}
                        aria-current={pageNumber === currentAwardsPage ? 'page' : undefined}
                      >
                        {pageNumber}
                      </button>
                    );
                  }).filter(Boolean)}
                  
                  {/* Next button */}
                  <button
                    onClick={() => setCurrentAwardsPage(prev => Math.min(prev + 1, totalAwardsPages))}
                    disabled={currentAwardsPage === totalAwardsPages}
                    className={`px-3 py-1.5 rounded-md border text-sm ${
                      currentAwardsPage === totalAwardsPages 
                        ? 'border-gray-700/30 text-gray-500/50 cursor-not-allowed' 
                        : 'border-gray-700/50 bg-white/5 hover:bg-white/10 text-white'
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

        <div className="container mx-auto px-4 pt-24 md:pt-32 pb-16 relative">
          {/* Background Gradient */}
          <div className={`absolute inset-0`} />

          {/* Content wrapper with relative positioning */}
          <div className="relative">
            {/* Title and Description Section */}
            <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16 px-4">
              <m.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-center mb-2 md:mb-3 text-transparent"
                style={{
                  WebkitTextStroke: theme === 'dark' ? '2px white' : '2px black'
                }}
              >
                OUR GALLERY
              </m.h2>
              <GradientDivider />
              <p className={`text-base sm:text-lg ${
                theme === 'dark' ? 'text-white/60' : 'text-black/60'
              }`}>
                A showcase of our memorable projects, events, and the talented team behind our success.
              </p>
            </div>

            {/* Category Filter */}
            <div className="sticky top-16 sm:top-20 z-10 py-3 sm:py-4 backdrop-blur-sm bg-opacity-50 mb-6 sm:mb-8">
              <div className="flex flex-wrap justify-center gap-2 px-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm transition-all ${
                      selectedCategory === category
                        ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                        : theme === 'dark'
                          ? "bg-white/5 text-white/60 hover:bg-white/10 hover:shadow-lg hover:shadow-white/10"
                          : "bg-black/5 text-black/60 hover:bg-black/10 hover:shadow-lg hover:shadow-black/10"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto px-2 sm:px-4">
              {currentGalleryItems.map((image, index) => (
                <m.div
                  key={image.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedImage(image)}
                  className={`gallery-item group cursor-pointer rounded-lg overflow-hidden ${
                    theme === 'dark'
                      ? 'bg-white/5 hover:bg-white/10 shadow-lg shadow-white/5 hover:shadow-xl hover:shadow-white/10'
                      : 'bg-purple-500/5 hover:bg-purple-500/10 shadow-lg shadow-purple-500/10 hover:shadow-xl hover:shadow-purple-500/20'
                  } transition-all duration-300 transform hover:-translate-y-1 border ${
                    theme === 'dark' 
                      ? 'border-white/10' 
                      : 'border-purple-500/10'
                  } h-full flex flex-col`}
                >
                  <div className="relative w-full pt-[100%] overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
                      width={300}
                      height={300}
                    />
                    <div 
                      className={`gallery-item-overlay absolute inset-0 bg-gradient-to-t ${
                        theme === 'dark' 
                          ? index % 2 === 0 
                            ? 'from-purple-900/80 via-purple-800/50' 
                            : 'from-blue-900/80 via-blue-800/50'
                          : index % 2 === 0 
                            ? 'from-purple-700/60 via-purple-600/40' 
                            : 'from-blue-700/60 via-blue-600/40'
                      } to-transparent flex items-end p-3 sm:p-4`}
                    >
                      <div className="w-full">
                        <div className={`text-xs sm:text-sm ${
                          index % 2 === 0 ? 'text-purple-300' : 'text-blue-300'
                        } mb-1 text-center font-medium`}>
                          {image.category}
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-white text-center">{image.title}</h3>
                      </div>
                    </div>
                  </div>
                </m.div>
              ))}
            </div>

            {/* Pagination */}
            {totalGalleryPages > 1 && (
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center space-x-2">
                  {/* Previous button */}
                  <button
                    onClick={() => setCurrentGalleryPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentGalleryPage === 1}
                    className={`px-3 py-1.5 rounded-md border text-sm ${
                      currentGalleryPage === 1 
                        ? 'border-gray-700/30 text-gray-500/50 cursor-not-allowed' 
                        : 'border-gray-700/50 bg-white/5 hover:bg-white/10 text-white'
                    }`}
                    aria-label="Previous page"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  {/* Page numbers */}
                  {[...Array(totalGalleryPages)].map((_, i) => {
                    const pageNumber = i + 1;
                    // Show first page, last page, current page, and pages 1 before and after current
                    const shouldShowPage = 
                      pageNumber === 1 || 
                      pageNumber === totalGalleryPages || 
                      Math.abs(pageNumber - currentGalleryPage) <= 1;
                    
                    // Add ellipsis
                    if (!shouldShowPage) {
                      // Show ellipsis for skipped pages (only once)
                      if (pageNumber === 2 && currentGalleryPage > 3) {
                        return <span key="ellipsis-start" className="px-3 py-1.5 text-gray-500">...</span>;
                      }
                      if (pageNumber === totalGalleryPages - 1 && currentGalleryPage < totalGalleryPages - 2) {
                        return <span key="ellipsis-end" className="px-3 py-1.5 text-gray-500">...</span>;
                      }
                      return null;
                    }
                    
                    return (
                      <button
                        key={pageNumber}
                        onClick={() => setCurrentGalleryPage(pageNumber)}
                        className={`px-3 py-1.5 rounded-md border text-sm ${
                          pageNumber === currentGalleryPage 
                            ? 'bg-[#1F1F2E] text-white border-[#1F1F2E]' 
                            : 'border-gray-700/50 bg-white/5 hover:bg-white/10 text-white'
                        }`}
                        aria-label={`Page ${pageNumber}`}
                        aria-current={pageNumber === currentGalleryPage ? 'page' : undefined}
                      >
                        {pageNumber}
                      </button>
                    );
                  }).filter(Boolean)}
                  
                  {/* Next button */}
                  <button
                    onClick={() => setCurrentGalleryPage(prev => Math.min(prev + 1, totalGalleryPages))}
                    disabled={currentGalleryPage === totalGalleryPages}
                    className={`px-3 py-1.5 rounded-md border text-sm ${
                      currentGalleryPage === totalGalleryPages 
                        ? 'border-gray-700/30 text-gray-500/50 cursor-not-allowed' 
                        : 'border-gray-700/50 bg-white/5 hover:bg-white/10 text-white'
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
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 sm:p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center">
              <m.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-[85vh] rounded-lg shadow-2xl object-contain"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white/60 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

      </main>
      <Footer />
    </LazyMotion>
  );
};

export default Gallery;