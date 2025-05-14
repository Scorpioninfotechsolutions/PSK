import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTheme } from "@/lib/themes";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import GradientDivider from "@/components/GradientDivider";
const CareerForm = () => {
  const { theme } = useTheme();

  return (
    <main className={`min-h-screen ${
      theme === 'dark' ? 'bg-black' : 'bg-gray-50'
    }`}>
      <Navbar />

      <div className="container mx-auto px-4 pt-24 pb-32 flex flex-col items-center relative">
        {/* Go Back Button */}
        <Link 
          to="/careers" 
          className={`absolute left-4 top-24 md:top-28 flex items-center gap-1 py-2 px-3 rounded-md transition-colors ${
            theme === 'dark' 
              ? 'bg-white/10 hover:bg-white/20 text-white' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Go Back</span>
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-3xl md:text-4xl font-bold mb-10 text-center mt-10 ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}
        >
          Apply for a Position
        <GradientDivider className="mt-6"/>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`w-full max-w-4xl rounded-lg overflow-hidden shadow-lg ${
            theme === 'dark' ? 'bg-gray-900' : 'bg-white'
          }`}
        >
          <div className="p-1 md:p-2 lg:p-4 w-full flex justify-center">
            <div className="w-full" style={{ height: "1500px" }}>
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSd1bXDVjPs5bRM2mL_rO-JJNYHKyvDvYwh3eq04gWefS0ZQ9g/viewform?embedded=true" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                title="Career Application Form"
                className="mx-auto block"
                scrolling="no"
                style={{ 
                  overflow: "hidden",
                  pointerEvents: "auto"
                }}
              >
                Loading...
              </iframe>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
};

export default CareerForm; 