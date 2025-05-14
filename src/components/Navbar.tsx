import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/lib/themes";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Projects", path: "/projects" },
    { label: "Machineries", path: "/machineries" },
    { label: "Gallery", path: "/gallery" },
    { label: "Careers", path: "/careers" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const navBackgroundClass = theme === 'dark' 
    ? 'bg-black/10 border-white/10' 
    : 'bg-white/30 border-black/10 backdrop-blur-md';
  
  const navItemClass = theme === 'dark'
    ? 'text-white/80 hover:text-blue-400'
    : 'text-black/80 hover:text-blue-600';
  
  const activeNavItemClass = theme === 'dark'
    ? 'text-blue-400 font-medium'
    : 'text-blue-600 font-medium';
  
  const mobileActiveClass = theme === 'dark'
    ? 'bg-white/10'
    : 'bg-black/10';
  
  const logoClass = theme === 'dark'
    ? 'text-white hover:text-blue-400'
    : 'text-black hover:text-blue-600';

  const mobileMenuBgClass = theme === 'dark'
    ? 'bg-black/90'
    : 'bg-white/90';

  return (
    <nav className={`fixed top-0 w-full z-50 backdrop-blur-lg border-b ${navBackgroundClass}`}>
      <div className="container mx-auto px-4">
        <div className="h-20 flex items-center justify-between">
          <Link to="/" className={`flex items-center gap-2 ${logoClass} transition-all transform hover:scale-105 duration-300`}>
            <img src="/images/logo.png" alt="PSK Logo" className="h-14 md:h-16 w-auto rounded-full" />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg md:text-2xl font-bold">
                PSK Infra Projects
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors ${
                  isActive(item.path) ? activeNavItemClass : navItemClass
                }`}
              >
                {item.label}
              </Link>
            ))}
            <ThemeSwitcher />
          </div>

          {/* Mobile Menu Button and ThemeSwitcher for mobile */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeSwitcher />
            <Button
              variant="ghost"
              size="icon"
              className={`${navItemClass} hover:bg-gray-500/10`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden py-4 border-t ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} ${mobileMenuBgClass}`}>
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`transition-colors px-4 py-2 rounded-lg ${
                    isActive(item.path) ? `${activeNavItemClass} ${mobileActiveClass}` : navItemClass
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
