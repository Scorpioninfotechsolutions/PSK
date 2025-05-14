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
import { Link } from "react-router-dom";

// Projects data
export const projects = [
  // Original Projects Data
  {
    id: "kerala-kanyakumari-original",
    title: "Kerala to Kanyakumari Road Project",
    description: "Major highway construction project connecting Kerala and Kanyakumari",
    cost: "₹50 Crores",
    location: "Kerala - Tamil Nadu",
    status: "ongoing",
    imageUrl: "/images/projects/kerala.webp",
    variant: "purple",
    timeline: "Dec-2026",
    galleryImages: [
      "/images/projects/kerala.webp",
      "/images/projects/kerala.webp",
      "/images/projects/kerala.webp"
    ],
    keyFeatures: [
      "Total length: 120 kilometers",
      "6-lane highway with service roads",
      "10 major bridges and 24 underpasses",
      "Advanced drainage systems"
    ],
    developmentImpacts: [
      "Reduces travel time by 40%",
      "Connects 30+ rural communities",
      "Improves logistics for local businesses",
      "Creates 5000+ construction jobs"
    ]
  },
  {
    id: "delhi-airport-original",
    title: "Delhi International Airport Limited Project",
    description: "Airport infrastructure development and expansion project",
    cost: "₹34.33 Crores",
    location: "Delhi",
    status: "completed",
    imageUrl: "/images/projects/delhi.webp",
    variant: "blue",
    timeline: "Mar-2023",
    galleryImages: [
      "/images/projects/delhi.webp",
      "/images/projects/delhi.webp",
      "/images/projects/delhi.webp"
    ],
    keyFeatures: [
      "Terminal expansion of 150,000 sq meters",
      "Advanced passenger handling systems",
      "State-of-the-art security infrastructure",
      "Energy-efficient building design"
    ],
    developmentImpacts: [
      "Increased passenger capacity by 35%",
      "Reduced wait times by 25 minutes",
      "Created 3500+ permanent jobs",
      "Improved international connectivity"
    ]
  },
  {
    id: "ultratech-cement-original",
    title: "UltraTech Cement Railway Project",
    description: "Railway infrastructure development for cement transportation",
    cost: "₹7.5 Crores",
    location: "Tamil Nadu",
    status: "completed",
    imageUrl: "/images/projects/ultratech.webp",
    variant: "purple",
    timeline: "Aug-2022",
    galleryImages: [
      "/images/projects/ultratech.webp",
      "/images/projects/ultratech.webp",
      "/images/projects/ultratech.webp"
    ],
    keyFeatures: [
      "15 km dedicated railway line",
      "Loading/unloading terminals",
      "Signal and communication systems",
      "Railway bridges and culverts"
    ],
    developmentImpacts: [
      "Reduced road transportation by 70%",
      "Lowered carbon emissions",
      "Improved logistics efficiency",
      "Reduced transportation costs by 30%"
    ]
  },
  {
    id: "ola-cell-original",
    title: "Ola Cell Technologies Project",
    description: "Industrial infrastructure development project",
    cost: "₹10 Crores",
    location: "Tamil Nadu",
    status: "ongoing",
    imageUrl: "/images/projects/ola.webp",
    variant: "purple",
    timeline: "Jun-2025",
    galleryImages: [
      "/images/projects/ola.webp",
      "/images/projects/ola.webp",
      "/images/projects/ola.webp"
    ],
    keyFeatures: [
      "100,000 sq ft manufacturing facility",
      "Automated production lines",
      "Quality control labs",
      "R&D center"
    ],
    developmentImpacts: [
      "Creates 2000+ manufacturing jobs",
      "Boosts local economy",
      "Develops technical skill workforce",
      "Promotes clean energy technology"
    ]
  },
  {
    id: "bridge-construction",
    title: "Bridge Construction Project",
    description: "Design and construction of a cable-stayed bridge over the river",
    cost: "₹25 Crores",
    location: "Karnataka",
    status: "completed",
    imageUrl: "/images/projects/11.webp",
    variant: "blue",
    timeline: "Jan-2023",
    galleryImages: [
      "/images/projects/11.webp",
      "/images/projects/11.webp",
      "/images/projects/11.webp"
    ],
    keyFeatures: [
      "800-meter cable-stayed bridge",
      "6-lane capacity with pedestrian walkways",
      "Advanced earthquake resistance design",
      "LED lighting system with remote control"
    ],
    developmentImpacts: [
      "Connects previously isolated communities",
      "Reduces commute time by 45 minutes",
      "Facilitates economic growth in region",
      "Improves emergency response capabilities"
    ]
  },
  {
    id: "irrigation-canal",
    title: "Irrigation Canal Network",
    description: "Construction of irrigation canal network connecting rural agricultural lands",
    cost: "₹15 Crores",
    location: "Andhra Pradesh",
    status: "ongoing",
    imageUrl: "/images/projects/irrigation.webp",
    variant: "purple",
    timeline: "Dec-2026",
    galleryImages: [
      "/images/projects/irrigation.webp",
      "/images/projects/irrigation.webp",
      "/images/projects/irrigation.webp"
    ],
    keyFeatures: [
      "85 km of irrigation canals",
      "Water reservoir with 500 million liter capacity",
      "Solar-powered pumping stations",
      "Automated water distribution system"
    ],
    developmentImpacts: [
      "Increases agricultural productivity",
      "Reduces water scarcity",
      "Supports rural livelihoods",
      "Enhances agricultural sustainability"
    ]
  },
  
  // Completed Projects (from work-1.png)
  {
    id: "grasim-paint",
    title: "Site Grading, Roads (PQC) & Drainage Work and Reservoir",
    description: "Infrastructure development for Grasim Paint facility",
    cost: "₹16.00 Crores",
    location: "Kanchipuram, Tamil Nadu",
    status: "completed",
    imageUrl: "/images/projects/1.webp",
    variant: "blue",
    timeline: "2024",
    client: "GRASIM PAINT (ADITHYA BIRLA) / Larsen & Turbo",
    galleryImages: [
      "/images/projects/1.webp",
      "/images/projects/1.webp",
      "/images/projects/1.webp"
    ],
    keyFeatures: [
      "Site grading and leveling",
      "PQC road construction",
      "Advanced drainage systems",
      "Water reservoir construction"
    ],
    developmentImpacts: [
      "Improved infrastructure for manufacturing",
      "Enhanced water management",
      "Better transportation within facility",
      "Flood prevention measures"
    ]
  },
  {
    id: "delhi-airport-new",
    title: "Runway, Taxiway & Apron, Earthwork and Mix Transportation",
    description: "Airport infrastructure development and expansion project",
    cost: "₹34.33 Crores",
    location: "Delhi",
    status: "completed",
    imageUrl: "/images/projects/delhi.webp",
    variant: "blue",
    timeline: "2024",
    client: "DELHI INTERNATIONAL AIRPORT LIMITED / Larsen & Turbo",
    galleryImages: [
      "/images/projects/delhi.webp",
      "/images/projects/delhi.webp",
      "/images/projects/delhi.webp"
    ],
    keyFeatures: [
      "Runway construction and maintenance",
      "Taxiway development",
      "Apron extension",
      "Earth moving and transportation"
    ],
    developmentImpacts: [
      "Increased airport capacity",
      "Improved aircraft handling",
      "Enhanced operational efficiency",
      "Better ground transportation"
    ]
  },
  {
    id: "ultratech-cement-new",
    title: "Private Railway Sliding Work - Velliyanai Station to Factory",
    description: "Railway infrastructure development for cement transportation",
    cost: "₹6.00 Crores",
    location: "Velliyanai, Karur, Tamil Nadu",
    status: "completed",
    imageUrl: "/images/projects/ultratech.webp",
    variant: "blue",
    timeline: "2023",
    client: "UltraTech Cement Works / SumCon Infraventures",
    galleryImages: [
      "/images/projects/ultratech.webp",
      "/images/projects/ultratech.webp",
      "/images/projects/ultratech.webp"
    ],
    keyFeatures: [
      "Private railway sliding",
      "Connection from station to factory",
      "Signal and communication systems",
      "Loading/unloading facilities"
    ],
    developmentImpacts: [
      "Efficient material transportation",
      "Reduced road congestion",
      "Lower logistics costs",
      "Decreased carbon footprint"
    ]
  },
  {
    id: "kerala-kanyakumari-new",
    title: "Construction of 4 Lane Road Work",
    description: "Major highway construction project connecting Kerala and Kanyakumari",
    cost: "₹50.00 Crores",
    location: "Nagarcoil",
    status: "completed",
    imageUrl: "/images/projects/kerala.webp",
    variant: "blue",
    timeline: "2022",
    client: "TIIC - Kerala to Kanyakumari Road Project / Larsen & Turbo",
    galleryImages: [
      "/images/projects/kerala.webp",
      "/images/projects/kerala.webp",
      "/images/projects/kerala.webp"
    ],
    keyFeatures: [
      "4-lane highway construction",
      "Road safety infrastructure",
      "Drainage systems",
      "Bridge construction"
    ],
    developmentImpacts: [
      "Improved connectivity",
      "Reduced travel time",
      "Enhanced road safety",
      "Economic development of region"
    ]
  },
  {
    id: "ola-factory",
    title: "Site Grading & Road Work",
    description: "Site development and road infrastructure for future factory",
    cost: "₹13.00 Crores",
    location: "Tamil Nadu",
    status: "completed",
    imageUrl: "/images/projects/2.webp",
    variant: "blue",
    timeline: "2022",
    client: "OLA Future Factory / URC Constructions Pvt Ltd",
    galleryImages: [
      "/images/projects/2.webp",
      "/images/projects/2.webp",
      "/images/projects/2.webp"
    ],
    keyFeatures: [
      "Large-scale site grading",
      "Internal road network",
      "Industrial-grade infrastructure",
      "Preparation for factory construction"
    ],
    developmentImpacts: [
      "Ready platform for factory development",
      "Improved site accessibility",
      "Better water drainage management",
      "Foundation for industrial growth"
    ]
  },
  {
    id: "kauvery-hospital",
    title: "Earthwork Excavation",
    description: "Excavation work for hospital construction project",
    cost: "₹1.50 Crores",
    location: "Tamil Nadu",
    status: "completed",
    imageUrl: "/images/projects/3.webp",
    variant: "blue",
    timeline: "2022",
    client: "Kauvery Hospital / GMS Elegant Builders (I) Pvt Ltd",
    galleryImages: [
      "/images/projects/3.webp",
      "/images/projects/3.webp",
      "/images/projects/3.webp"
    ],
    keyFeatures: [
      "Precision excavation",
      "Foundation preparation",
      "Material handling",
      "Site clearing"
    ],
    developmentImpacts: [
      "Enabled healthcare infrastructure development",
      "Created foundation for hospital expansion",
      "Contributed to improved medical facilities",
      "Supported local employment"
    ]
  },
  {
    id: "madathukulam-pollachi",
    title: "Madathukulam to Pollachi Section Road Work",
    description: "Road construction and improvement project",
    cost: "₹10.00 Crores",
    location: "Tamil Nadu",
    status: "completed",
    imageUrl: "/images/projects/1.webp",
    variant: "blue",
    timeline: "2021",
    client: "NHAI / D P Jain Infra & CO PVT LTD",
    galleryImages: [
      "/images/projects/1.webp",
      "/images/projects/1.webp",
      "/images/projects/1.webp"
    ],
    keyFeatures: [
      "Road widening",
      "Surface improvements",
      "Drainage systems",
      "Traffic management infrastructure"
    ],
    developmentImpacts: [
      "Improved rural connectivity",
      "Reduced travel time",
      "Enhanced road safety",
      "Better access to markets and services"
    ]
  },
  {
    id: "valajabath-karaipettai",
    title: "Road Work - Valajabath to Karaipettai",
    description: "Road construction and improvement project",
    cost: "₹1.50 Crores",
    location: "Tamil Nadu",
    status: "completed",
    imageUrl: "/images/projects/2.webp",
    variant: "blue",
    timeline: "2021",
    client: "NHAI / SPK & CO",
    galleryImages: [
      "/images/projects/2.webp",
      "/images/projects/2.webp",
      "/images/projects/2.webp"
    ],
    keyFeatures: [
      "Road construction",
      "Drainage solutions",
      "Earthwork",
      "Safety features"
    ],
    developmentImpacts: [
      "Connected remote communities",
      "Facilitated transportation",
      "Stimulated economic activity",
      "Improved quality of life for residents"
    ]
  },
  
  // Ongoing Projects (from work-2.png)
  {
    id: "ultratech-compound",
    title: "Compound Wall, Non-plant Buildings, Road Work, Drain and Truck Parking Area",
    description: "Infrastructure development for cement manufacturing facility",
    cost: "₹9.00 Crores",
    location: "Velliyanai, Karur, Tamil Nadu",
    status: "ongoing",
    imageUrl: "/images/projects/ultratech.webp",
    variant: "purple",
    timeline: "Nov-2024",
    client: "UltraTech Cement Works",
    galleryImages: [
      "/images/projects/ultratech.webp",
      "/images/projects/ultratech.webp",
      "/images/projects/ultratech.webp"
    ],
    keyFeatures: [
      "Compound wall construction",
      "Non-plant building development",
      "Internal road network",
      "Truck parking facilities"
    ],
    developmentImpacts: [
      "Enhanced facility security",
      "Improved material flow",
      "Organized transport logistics",
      "Better operational efficiency"
    ]
  },
  {
    id: "adani-biogas",
    title: "Construction of PSA Project Civil Work & Structural Shed Work",
    description: "Civil and structural work for biogas plant",
    cost: "₹2.00 Crores",
    location: "Tamil Nadu",
    status: "ongoing",
    imageUrl: "/images/projects/4.webp",
    variant: "purple",
    timeline: "Oct-2024",
    client: "ADANI - IAV BIOGAS PLANT",
    galleryImages: [
      "/images/projects/4.webp",
      "/images/projects/4.webp",
      "/images/projects/4.webp"
    ],
    keyFeatures: [
      "PSA project civil construction",
      "Structural shed development",
      "Foundation work",
      "Infrastructure for biogas production"
    ],
    developmentImpacts: [
      "Renewable energy production",
      "Waste-to-energy conversion",
      "Reduced carbon emissions",
      "Sustainable energy infrastructure"
    ]
  },
  {
    id: "madras-ring-road",
    title: "Earth Work & Aggregate Transportation",
    description: "Earth moving and material transportation for ring road project",
    cost: "₹32.00 Crores",
    location: "Thiruvallur",
    status: "ongoing",
    imageUrl: "/images/projects/3.webp",
    variant: "purple",
    timeline: "Jun-2025",
    client: "Madras Peripheral Ring Road's-MPRRP / Larsen & Turbo",
    galleryImages: [
      "/images/projects/3.webp",
      "/images/projects/3.webp",
      "/images/projects/3.webp"
    ],
    keyFeatures: [
      "Large-scale earthwork",
      "Aggregate transportation",
      "Site preparation",
      "Material management"
    ],
    developmentImpacts: [
      "Improved urban connectivity",
      "Reduced traffic congestion",
      "Enhanced regional transportation",
      "Support for economic growth"
    ]
  },
  {
    id: "test-track",
    title: "Test Track Project",
    description: "Construction of testing track for automotive applications",
    cost: "₹9.60 Crores",
    location: "Perambalur",
    status: "ongoing",
    imageUrl: "/images/projects/5.webp",
    variant: "purple",
    timeline: "Oct-2024",
    client: "Madras Rubber Factory - MRF / Larsen & Turbo",
    galleryImages: [
      "/images/projects/5.webp",
      "/images/projects/5.webp",
      "/images/projects/5.webp"
    ],
    keyFeatures: [
      "Specialized test track construction",
      "Various surface types",
      "Performance testing zones",
      "Safety features"
    ],
    developmentImpacts: [
      "Advanced R&D capabilities",
      "Improved product development",
      "Enhanced testing facilities",
      "Support for automotive innovation"
    ]
  },
  {
    id: "megha-wide",
    title: "Site Grading, Mass Excavation and Filling",
    description: "Site preparation for airport development",
    cost: "₹22.00 Crores",
    location: "Bhogapuram",
    status: "ongoing",
    imageUrl: "/images/projects/6.webp",
    variant: "purple",
    timeline: "Apr-2025",
    client: "Megha Wide-Bhogapuram-MVIAL-Airport / Megawide Construction",
    galleryImages: [
      "/images/projects/6.webp",
      "/images/projects/6.webp",
      "/images/projects/6.webp"
    ],
    keyFeatures: [
      "Site grading",
      "Mass excavation",
      "Land filling",
      "Site preparation for construction"
    ],
    developmentImpacts: [
      "Foundation for airport infrastructure",
      "Improved regional connectivity",
      "Support for economic development",
      "Enhanced transportation network"
    ]
  },
  {
    id: "tata-electronics",
    title: "Earth Work Excavation, Blasting and Road Work",
    description: "Site development for electronics manufacturing facility",
    cost: "₹15.00 Crores",
    location: "Sulagiri",
    status: "ongoing",
    imageUrl: "/images/projects/7.webp",
    variant: "purple",
    timeline: "Jun-2025",
    client: "TATA Electronics / URC Constructions Pvt Ltd",
    galleryImages: [
      "/images/projects/7.webp",
      "/images/projects/7.webp",
      "/images/projects/7.webp"
    ],
    keyFeatures: [
      "Precision excavation",
      "Controlled blasting",
      "Road construction",
      "Industrial site preparation"
    ],
    developmentImpacts: [
      "Support for electronics manufacturing",
      "Industrial development",
      "Job creation",
      "Infrastructure improvement"
    ]
  },
  {
    id: "ola-cell-new",
    title: "Earthwork Excavation and Road Work",
    description: "Site development for battery manufacturing facility",
    cost: "₹5.62 Crores",
    location: "Pochampalli",
    status: "ongoing",
    imageUrl: "/images/projects/ola.webp",
    variant: "purple",
    timeline: "Sep-2024",
    client: "Ola Cell Technologies Private Limited / Ocean Life Science",
    galleryImages: [
      "/images/projects/ola.webp",
      "/images/projects/ola.webp",
      "/images/projects/ola.webp"
    ],
    keyFeatures: [
      "Earthwork excavation",
      "Road development",
      "Site preparation",
      "Infrastructure for manufacturing"
    ],
    developmentImpacts: [
      "Support for clean energy production",
      "Advanced manufacturing capabilities",
      "Job creation",
      "Sustainable transportation solutions"
    ]
  },
  {
    id: "flood-damage",
    title: "Emergency Flood Damage Culvert",
    description: "Repair and construction of flood-damaged infrastructure",
    cost: "₹1.70 Crores",
    location: "Tuticorin",
    status: "ongoing",
    imageUrl: "/images/projects/8.png",
    variant: "purple",
    timeline: "Jun-2025",
    client: "NHAI",
    galleryImages: [
      "/images/projects/8.png",
      "/images/projects/8.png",
      "/images/projects/8.png"
    ],
    keyFeatures: [
      "Emergency repairs",
      "Culvert reconstruction",
      "Flood mitigation measures",
      "Infrastructure resilience"
    ],
    developmentImpacts: [
      "Restored transportation routes",
      "Improved flood resistance",
      "Enhanced community safety",
      "Better disaster management"
    ]
  }
];

const Projects = () => {
  const { theme } = useTheme();
  const [filter, setFilter] = React.useState("all"); // all, completed, ongoing
  const [viewMode, setViewMode] = React.useState("card"); // card, list
  const [currentPage, setCurrentPage] = React.useState(1);

  const itemsPerPage = React.useMemo(() => {
    return viewMode === "card" ? 6 : 10;
  }, [viewMode]);

  const filteredProjects = React.useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter(project => project.status === filter);
  }, [filter]);

  // Reset to page 1 when filter or view mode changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [filter, viewMode]);

  // Calculate total pages
  const totalPages = React.useMemo(() => {
    return Math.ceil(filteredProjects.length / itemsPerPage);
  }, [filteredProjects, itemsPerPage]);

  // Get current items
  const currentItems = React.useMemo(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return filteredProjects.slice(indexOfFirstItem, indexOfLastItem);
  }, [filteredProjects, currentPage, itemsPerPage]);

  // Create glow effect directly in component
  React.useEffect(() => {
    // Add a global style for no-scale and hover propagation if it doesn't exist
    if (!document.getElementById('project-card-styles')) {
      const style = document.createElement('style');
      style.id = 'project-card-styles';
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
        title="Our Projects | PSK Infra Projects"
        description="Explore our portfolio of completed and ongoing infrastructure projects across India."
        keywords="infrastructure projects, construction projects, civil engineering, building projects"
        ogUrl="/projects"
        canonical="/projects"
      />
      <Helmet>
        <title>Our Projects | PSK Infra Projects</title>
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
              <h1 className={`text-3xl md:text-5xl font-bold mb-6 text-shadow-lg ${
                theme === 'dark' ? 'text-white' : 'text-white'
              }`}>
                Our Projects
              </h1>
              <p className={`text-lg md:text-2xl max-w-3xl mx-auto text-shadow-md ${
                theme === 'dark' ? 'text-[#5fa5f9]' : 'text-white'
              }`}>
                Building Excellence Across India
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

        {/* Projects Section */}
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
                OUR PROJECTS
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
                We take pride in our track record of successfully delivered projects across various sectors of infrastructure
              </motion.p>

              {/* Project Filters and View Toggle */}
              <div className="flex flex-col md:flex-row md:items-center justify-center gap-4 mb-10">
                <div className="flex justify-center gap-4">
                  <button 
                    onClick={() => setFilter("all")}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                      filter === "all" 
                        ? "bg-[#1F1F2E] text-white" 
                        : theme === 'dark' 
                          ? "bg-gray-800/40 text-gray-300 hover:bg-gray-800/60"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    All Projects
                  </button>
                  <button 
                    onClick={() => setFilter("completed")}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                      filter === "completed" 
                        ? "bg-[#1F1F2E] text-white" 
                        : theme === 'dark' 
                          ? "bg-gray-800/40 text-gray-300 hover:bg-gray-800/60"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    Completed
                  </button>
                  <button 
                    onClick={() => setFilter("ongoing")}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                      filter === "ongoing" 
                        ? "bg-[#1F1F2E] text-white" 
                        : theme === 'dark' 
                          ? "bg-gray-800/40 text-gray-300 hover:bg-gray-800/60"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    Ongoing
                  </button>
                </div>

                {/* View toggle */}
                <div className="flex items-center justify-center mt-4 md:mt-0 md:ml-auto">
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
              </div>
            </motion.div>
            
            {/* Card View */}
            {viewMode === "card" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {currentItems.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="service-card-container rounded-xl overflow-hidden backdrop-blur-md border bg-white/5 border-white/20 shadow-lg transition-all duration-300 flex flex-col group"
                  >
                    {/* Image Container */}
                    <div className="h-48 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10"></div>
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 transform-gpu"
                      />
                      {/* Status Badge with Glassmorphism */}
                      <div 
                        className={`absolute top-3 right-3 z-20 px-4 py-1.5 rounded-full text-sm font-medium 
                        backdrop-blur-md border shadow-lg flex items-center space-x-1.5 transition-all duration-300
                        ${
                          project.status === "ongoing" 
                            ? "bg-purple-600/40 text-white border-purple-500/30 shadow-purple-500/20" 
                            : "bg-blue-600/40 text-white border-blue-500/30 shadow-blue-500/20"
                        }`}
                      >
                        <span className={`h-2 w-2 rounded-full ${
                          project.status === "ongoing" 
                            ? "bg-purple-300 animate-pulse" 
                            : "bg-blue-300"
                        }`}></span>
                        <span>{project.status === "ongoing" ? "Ongoing" : "Completed"}</span>
                      </div>
                    </div>
                    
                    {/* Text Container with Glow Effect */}
                    <div className="glow-container relative overflow-hidden flex-grow flex flex-col">
                      {/* Glow Effect */}
                      <div className={`glow-effect ${
                        theme === 'dark' 
                          ? project.variant === 'purple' ? 'dark-purple-glow-effect' : 'dark-blue-glow-effect'
                          : project.variant === 'purple' ? 'light-purple-glow-effect' : 'light-blue-glow-effect'
                      }`}></div>
                      
                      {/* Content */}
                      <div className="p-6 flex flex-col h-full relative z-10">
                        <div className="flex-grow">
                          <h3 className={`text-lg font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{project.title}</h3>
                          <p className={`text-md font-medium mb-4 ${theme === 'dark' ? 'text-[#5fa5f9]' : 'text-blue-700'}`}>{project.cost}</p>
                          <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{project.description}</p>
                        </div>
                        <div className="mt-auto pt-6">
                          <p className={`text-xs mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                            <span className="font-medium">Location:</span> {project.location}
                          </p>
                          <Link 
                            to={`/projects/${project.id}`} 
                            className={`block w-full py-3 px-6 border rounded-lg transition-all duration-300 text-sm backdrop-blur-sm text-center ${
                              theme === 'dark' 
                                ? 'border-white/30 bg-white/5 hover:bg-white/10 text-white' 
                                : 'border-black/20 bg-black/5 hover:bg-black/10 text-black'
                            }`}
                          >
                            View Gallery
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* List View */}
            {viewMode === "list" && (
              <div className="space-y-4">
                {currentItems.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className={`rounded-xl overflow-hidden backdrop-blur-md border bg-white/5 ${
                      theme === 'dark' 
                        ? 'border-white/20 shadow-lg' 
                        : 'border-gray-300'
                    } transition-all duration-300 group`}
                  >
                    {/* Content */}
                    <div className="p-4 flex flex-col md:flex-row md:items-center relative">
                      {/* Status Badge (Mobile) */}
                      <div 
                        className={`mb-3 inline-flex md:hidden px-2 py-0.5 rounded-full text-xs font-medium 
                        backdrop-blur-md border shadow-sm items-center space-x-1 transition-all duration-300
                        ${
                          project.status === "ongoing" 
                            ? "bg-purple-600/40 text-white border-purple-500/30 shadow-purple-500/20" 
                            : "bg-blue-600/40 text-white border-blue-500/30 shadow-blue-500/20"
                        }`}
                      >
                        <span className={`h-1 w-1 rounded-full ${
                          project.status === "ongoing" 
                            ? "bg-purple-300 animate-pulse" 
                            : "bg-blue-300"
                        }`}></span>
                        <span className="text-[10px]">{project.status === "ongoing" ? "Ongoing" : "Completed"}</span>
                      </div>
                      
                      {/* Project Title */}
                      <h3 className={`text-sm font-medium md:w-1/3 pr-3 truncate ${
                        theme === 'dark' ? 'text-white' : 'text-black'
                      }`}>{project.title}</h3>
                      
                      <div className="flex flex-col md:flex-row md:w-1/2">
                        {/* Cost */}
                        <p className={`text-sm font-medium mb-2 md:mb-0 md:w-1/3 md:px-2 ${
                          theme === 'dark' ? 'text-[#BD72E3]' : 'text-purple-700'
                        }`}>{project.cost}</p>
                        
                        {/* Location */}
                        <p className={`text-xs mb-2 md:mb-0 md:w-1/3 md:px-2 ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
                        }`}>
                          <span className="font-medium">Location:</span> {project.location}
                        </p>

                        {/* Timeline */}
                        <p className={`text-xs mb-4 md:mb-0 md:w-1/3 md:px-2 ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
                        }`}>
                          <span className="font-medium">Timeline:</span> {project.timeline}
                        </p>
                      </div>
                      
                      <div className="md:ml-auto flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                        {/* Status Badge (Desktop) */}
                        <div 
                          className={`hidden md:inline-flex px-2 py-0.5 rounded-full text-xs font-medium 
                          backdrop-blur-md border shadow-sm items-center space-x-1 transition-all duration-300
                          ${
                            project.status === "ongoing" 
                              ? "bg-purple-600/40 text-white border-purple-500/30 shadow-purple-500/20" 
                              : "bg-blue-600/40 text-white border-blue-500/30 shadow-blue-500/20"
                          }`}
                        >
                          <span className={`h-1 w-1 rounded-full ${
                            project.status === "ongoing" 
                              ? "bg-purple-300 animate-pulse" 
                              : "bg-blue-300"
                          }`}></span>
                          <span className="text-[10px]">{project.status === "ongoing" ? "Ongoing" : "Completed"}</span>
                        </div>
                        
                        {/* Button */}
                        <Link 
                          to={`/projects/${project.id}`} 
                          className={`inline-block py-1 px-3 border rounded-lg transition-all duration-300 text-xs backdrop-blur-sm text-center ${
                            theme === 'dark' 
                              ? 'border-white/30 bg-white/5 hover:bg-white/10 text-white' 
                              : 'border-black/20 bg-black/5 hover:bg-black/10 text-black'
                          }`}
                        >
                          View Gallery
                        </Link>
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

export default Projects; 