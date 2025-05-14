import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTheme } from "@/lib/themes";
import { Helmet } from "react-helmet";

const NotFound = () => {
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | PSK Infra Projects</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="The page you're looking for doesn't exist or has been moved." />
        <link rel="canonical" href="https://pskinfraprojects.com/404" />
      </Helmet>
      <main className={`min-h-screen ${
        theme === 'dark' ? 'bg-black' : 'bg-gray-50'
      }`}>
        <Navbar />
        
        <div className="container mx-auto px-4 pt-32 pb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`max-w-3xl mx-auto text-center ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}
          >
            <div className="relative mb-8 mx-auto w-64 h-64">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className={`absolute inset-0 rounded-full ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-r from-purple-500/30 to-blue-500/30' 
                    : 'bg-gradient-to-r from-purple-500/10 to-blue-500/10'
                } blur-3xl`} 
              />
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="relative z-10 flex items-center justify-center h-full"
              >
                <h1 className={`text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${
                  theme === 'dark' 
                    ? 'from-purple-400 via-pink-300 to-purple-400' 
                    : 'from-purple-600 via-pink-500 to-purple-600'
                }`}>
                  404
                </h1>
              </motion.div>
            </div>
            
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Page Not Found
            </motion.h2>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className={`text-lg mb-8 ${
                theme === 'dark' ? 'text-white/60' : 'text-black/70'
              }`}
            >
              We couldn't find the page you're looking for. It might have been removed, 
              renamed, or is temporarily unavailable.
            </motion.p>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                to="/" 
                className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600'
                    : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                } transform hover:scale-105 shadow-lg`}
              >
                Return Home
              </Link>
              <Link 
                to="/contact" 
                className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white'
                    : 'bg-black/10 backdrop-blur-sm border border-black/20 hover:bg-black/20 text-black'
                } transform hover:scale-105`}
              >
                Contact Support
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        <Footer />
      </main>
    </>
  );
};

export default NotFound;
