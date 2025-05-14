import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useTheme } from "@/lib/themes";

const WhatsAppButton = () => {
  const { theme } = useTheme();
  const whatsappNumber = "919566685555"; // Default to CEO's number
  const message = encodeURIComponent("Hi, I'm interested in your services!");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }}
      className="fixed bottom-4 right-4 z-50"
    >
      <motion.a
        href={`https://wa.me/${whatsappNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
          theme === 'dark'
            ? 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm'
            : 'hover:bg-black/10 text-black backdrop-blur-sm'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative">
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-400 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <div className="relative bg-[#25D366] p-1.5 rounded-full">
            <MessageCircle className="w-4 h-4 text-white" />
          </div>
        </div>
        <span className={`hidden sm:inline ${theme === 'dark' ? 'text-white' : 'text-black'} font-medium text-xs pr-0.5`}>Chat with us</span>
      </motion.a>
    </motion.div>
  );
};

export default WhatsAppButton; 