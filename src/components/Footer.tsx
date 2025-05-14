import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Globe } from "lucide-react";
import { useTheme } from "@/lib/themes";

const Footer = () => {
  const { theme } = useTheme();

  // Define all navigation links
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Machineries", path: "/machineries" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" }
  ];

  // Split links into two arrays - first 4 and remaining 3
  const leftColumnLinks = quickLinks.slice(0, 4);
  const rightColumnLinks = quickLinks.slice(4);

  const bgColorClass = theme === 'dark' ? 'bg-black/50' : 'bg-white/50';
  const borderColorClass = theme === 'dark' ? 'border-white/10' : 'border-black/10';
  const textColorClass = theme === 'dark' ? 'text-white' : 'text-black';
  const textMutedClass = theme === 'dark' ? 'text-white/60' : 'text-black/50';
  const hoverColorClass = theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600';

  return (
    <footer className={`${bgColorClass} ${borderColorClass} backdrop-blur-lg border-t`}>
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className={`text-xl font-bold ${textColorClass}`}>
              PSK Infra Projects
            </h3>
            <p className={textMutedClass}>
              Building Excellence Since 2017. We Construct Your Dream For Better Tomorrow.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/PSK.Infra.Projects/" 
                className={`${textMutedClass} ${hoverColorClass} transition-colors`} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/" 
                className={`${textMutedClass} ${hoverColorClass} transition-colors`}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://in.linkedin.com/" 
                className={`${textMutedClass} ${hoverColorClass} transition-colors`}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links - Split into two columns */}
          <div className="space-y-4">
            <h3 className={`text-xl font-bold ${textColorClass}`}>Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-4">
              {/* Left Column Links */}
              <ul className="space-y-2">
                {leftColumnLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className={`${textMutedClass} ${hoverColorClass} transition-colors`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Right Column Links */}
              <ul className="space-y-2">
                {rightColumnLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className={`${textMutedClass} ${hoverColorClass} transition-colors`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className={`text-xl font-bold ${textColorClass}`}>Our Services</h3>
            <ul className="space-y-2">
              {[
                "Earthwork, Drilling and Blasting",
                "Civil Engineering Structures",
                "Roads Construction",
                "Building Construction",
                "Airport Works"
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className={`${textMutedClass} ${hoverColorClass} transition-colors`}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className={`text-xl font-bold ${textColorClass}`}>Contact Us</h3>
            <ul className="space-y-3">
              <li className={`${textMutedClass} flex items-start`}>
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>Jawahar Bazaar, Karur — 639002</span>
              </li>
              <li className={`${textMutedClass} flex items-center group cursor-pointer`}>
                <Phone className="w-5 h-5 mr-2" />
                <a 
                  href="tel:+919566685555"
                  className={`${textMutedClass} group-hover:${hoverColorClass.replace('hover:', '')} transition-colors`}
                >
                  +91 95666 85555
                </a>
              </li>
              <li className={`${textMutedClass} flex items-center group cursor-pointer`}>
                <Phone className="w-5 h-5 mr-2" />
                <a 
                  href="tel:+919524885555"
                  className={`${textMutedClass} group-hover:${hoverColorClass.replace('hover:', '')} transition-colors`}
                >
                  +91 95248 85555
                </a>
              </li>
              <li className={`${textMutedClass} flex items-center group cursor-pointer`}>
                <Mail className="w-5 h-5 mr-2" />
                <a 
                  href="mailto:pskinfraprojectskrr@gmail.com"
                  className={`${textMutedClass} group-hover:${hoverColorClass.replace('hover:', '')} transition-colors`}
                >
                  pskinfraprojectskrr@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={`mt-12 pt-8 border-t text-center ${borderColorClass} ${textMutedClass}`}>
          <p>
            © {new Date().getFullYear()} PSK Infra Projects. All rights reserved
            <span className="mx-2">|</span>
            Crafted by
            <a 
              href="https://www.scorpioninfotechsolutions.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`ml-1 ${theme === 'dark' ? 'text-blue-400 hover:text-purple-300' : 'text-blue-600 hover:text-purple-500'}`}
            >
              Scorpion Infotech Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
