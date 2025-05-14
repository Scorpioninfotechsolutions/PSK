import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Footer from "@/components/Footer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Map from "@/components/Map";
import Navbar from "@/components/Navbar";
import { Mail, Phone, MapPin, MessageCircle, HeadphonesIcon, ArrowRight, Globe, X } from "lucide-react";
import { useTheme } from "@/lib/themes";
import { SEO } from '@/components/SEO';
import AnimatedGradientBackground from "@/components/AnimatedGradientBackground";
import GradientDivider from "@/components/GradientDivider";

const services = [
  "Earthwork, Drilling and Blasting",
  "Civil Engineering Structures",
  "Roads Construction",
  "Building Construction",
  "Airport Works",
  "Other Services",
];

type Address = {
  title: string;
  address: string;
  coordinates: [number, number]; // Explicitly typing as tuple
};

const addresses: Address[] = [
  {
    title: "Karur Office",
    address: "227 A, Jawahar Bazaar, Karur — 639002",
    coordinates: [10.9595, 78.0772] as [number, number], // Updated coordinates for Leaflet: [latitude, longitude]
  }
];

// Add type for form data
type FormData = {
  name: string;
  email: string;
  phone: string;
  service?: string;
  message?: string;
  company?: string;
  projectDetails?: string;
};

// Custom component for background glow effect without shine
const GlowEffect = ({ variant = 'blue' }) => {
  const { theme } = useTheme();
  const themePrefix = theme === 'dark' ? 'dark' : 'light';
  const variantClass = `${themePrefix}-${variant}`;
  
  return (
    <div className={`${variantClass}-glow`} data-variant={variantClass}></div>
  );
};

const Contact = () => {
  const { theme } = useTheme();
  const { toast } = useToast();
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<FormData>();
  const [visibleMaps, setVisibleMaps] = useState<Record<string, boolean>>({
    "Karur Office": false // Don't show map by default
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleMap = (locationTitle: string) => {
    setVisibleMaps(prev => ({
      ...prev,
      [locationTitle]: !prev[locationTitle]
    }));
  };

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      console.log('Form submitted with data:', data);
      
      // Get access key from environment variable with fallback
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '';
      
      // Check if access key is available
      if (!accessKey) {
        console.error('Web3Forms access key is not set in environment variables');
        throw new Error('Configuration error: Web3Forms access key is missing');
      }
      
      console.log('Using Web3Forms access key:', accessKey);
      
      // Prepare the form data for Web3Forms
      const formData = {
        access_key: accessKey, // Using environment variable instead of hardcoded value
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company || 'Not specified',
        service: data.service || 'Not specified',
        project_details: data.projectDetails || 'Not specified',
        message: data.message || 'No message provided',
        subject: `New inquiry from ${data.name}`,
      };

      // Send data to Web3Forms API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      console.log('Web3Forms Response:', result);

      if (response.status === 200) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you as soon as possible.",
        });
        reset();
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error sending form:', error);
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO 
        title="Contact PSK Infra Projects | Infrastructure Solutions"
        description="Get in touch with PSK Infra Projects for professional infrastructure development, construction services, and project consultation."
        keywords="contact PSK, infrastructure projects, construction services, Karur"
        ogUrl="/contact"
        canonical="/contact"
      />

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
                Get in Touch With Us
              </h1>
              <p className="text-lg md:text-2xl text-[#5fa5f9] max-w-3xl mx-auto text-shadow-md" style={{
                color: theme === 'dark' ? '#5fa5f9' : 'white'
              }}>
                Comprehensive infrastructure and construction solutions tailored to meet your project requirements
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <a 
                  href="#contact-form" 
                  className={`px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${
                    theme === 'dark'
                      ? 'bg-white text-black hover:bg-white/90'
                      : ' from-purple-600 to-blue-600 text-white hover:shadow-lg hover:shadow-purple-500/20'
                  }`}
                >
                  <MessageCircle className="w-5 h-5" />
                  Contact Us
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
                <a 
                  href="tel:9566685555" 
                  className={`px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 ${
                    theme === 'dark'
                      ? 'bg-white/10 text-white hover:bg-white/20'
                      : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                  }`}
                >
                  <HeadphonesIcon className="w-5 h-5" />
                  Call Us
                </a>
              </div>
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

        {/* Contact Form and Info Section */}
        <motion.section
          id="contact-form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="container mx-auto px-4 py-12 relative"
        >
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-center mb-2 md:mb-3 text-transparent"
              style={{
                WebkitTextStroke: theme === 'dark' ? '2px white' : '2px black'
              }}
            >
              CONTACT US
            </motion.h2>
            <GradientDivider />
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`text-sm md:text-base text-center ${
                theme === 'dark' ? 'text-white/70' : 'text-black/80'
              } max-w-4xl mx-auto`}
            >
              Reach out to discuss your infrastructure project requirements. We're here to help.
            </motion.p>
          </div>

          <div className="absolute inset-0  from-purple-500/20 to-blue-500/20 blur-3xl" />
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto relative">
            {/* Contact Form */}
            <div className={`${
              theme === 'dark' 
                ? 'bg-white/5 border-white/10' 
                : ' from-purple-500/10 to-blue-500/10 border-gray-200'
              } p-8 rounded-lg backdrop-blur-sm border relative overflow-hidden`}>
              
              <div className={`absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-purple-500/5 z-0 pointer-events-none`}></div>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                {/* Web3Forms requires botcheck for spam prevention */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                
                <h3 className={`text-xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                  Project Inquiry Form
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label className={theme === 'dark' ? 'text-white' : 'text-black'}>
                      Name *
                    </Label>
                    <Input
                      id="name"
                      {...register("name", { required: "Name is required" })}
                      className={`${
                        theme === 'dark' 
                          ? 'bg-white/10 border-white/20 text-white' 
                          : 'bg-white border-gray-200 text-black'
                      } ${errors.name ? 'border-red-500' : ''}`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  
                  {/* Company Field */}
                  <div className="space-y-2">
                    <Label className={theme === 'dark' ? 'text-white' : 'text-black'}>
                      Company/Organization
                    </Label>
                    <Input
                      id="company"
                      {...register("company")}
                      className={`${
                        theme === 'dark' 
                          ? 'bg-white/10 border-white/20 text-white' 
                          : 'bg-white border-gray-200 text-black'
                      }`}
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label className={theme === 'dark' ? 'text-white' : 'text-black'}>
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email", { 
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                      className={`${
                        theme === 'dark' 
                          ? 'bg-white/10 border-white/20 text-white' 
                          : 'bg-white border-gray-200 text-black'
                      } ${errors.email ? 'border-red-500' : ''}`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Phone Number Field */}
                  <div className="space-y-2">
                    <Label className={theme === 'dark' ? 'text-white' : 'text-black'}>
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register("phone", { 
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9-+()]*$/,
                          message: "Please enter a valid phone number"
                        }
                      })}
                      className={`${
                        theme === 'dark' 
                          ? 'bg-white/10 border-white/20 text-white' 
                          : 'bg-white border-gray-200 text-black'
                      } ${errors.phone ? 'border-red-500' : ''}`}
                      placeholder="Your phone number"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                {/* Service Interest Field */}
                <div className="space-y-2">
                  <Label className={theme === 'dark' ? 'text-white' : 'text-black'}>
                    Service of Interest
                  </Label>
                  <Select 
                    onValueChange={(value) => {
                      setValue('service', value);
                    }}
                  >
                    <SelectTrigger 
                      className={`${
                        theme === 'dark' 
                          ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' 
                          : 'bg-white/80 border-blue-100 hover:border-blue-300'
                      } h-12 transition-all duration-200 backdrop-blur-sm`}
                    >
                      <SelectValue 
                        placeholder="Select a service" 
                        className={theme === 'dark' ? 'text-white/60' : 'text-black/60'}
                      />
                    </SelectTrigger>
                    <SelectContent 
                      className={`${
                        theme === 'dark'
                          ? 'bg-gray-900/90 border-white/10 text-white'
                          : 'bg-white/90 border-blue-100'
                      } backdrop-blur-lg shadow-lg animate-in fade-in-80 zoom-in-95 max-h-[1000px] !overflow-visible`}
                    >
                      <div className={`${
                        theme === 'dark' ? 'bg-white/5' : 'bg-blue-50/50'
                      } px-3 py-2 mb-1`}>
                        <p className={`text-xs font-medium ${
                          theme === 'dark' ? 'text-white/80' : 'text-blue-600'
                        }`}>
                          Choose a service
                        </p>
                      </div>
                      {services.map((service) => (
                        <div key={service}>
                          <SelectItem 
                            value={service}
                            className={`${
                              theme === 'dark'
                                ? 'text-white hover:text-white focus:text-white hover:bg-white/20 focus:bg-white/20 data-[state=checked]:bg-white/30 data-[state=checked]:text-white'
                                : 'text-black/80 hover:bg-blue-50 focus:bg-blue-50 data-[state=checked]:bg-blue-100'
                            } cursor-pointer transition-colors py-2`}
                          >
                            {service}
                          </SelectItem>
                        </div>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Project Details Field */}
                <div className="space-y-2">
                  <Label className={theme === 'dark' ? 'text-white' : 'text-black'}>
                    Project Details
                  </Label>
                  <Textarea
                    id="projectDetails"
                    {...register("projectDetails")}
                    className={`${
                      theme === 'dark' 
                        ? 'bg-white/10 border-white/20 text-white' 
                        : 'bg-white border-gray-200 text-black'
                    } min-h-[80px]`}
                    placeholder="Brief description of your project requirements"
                  />
                </div>

                {/* Additional Message Field */}
                <div className="space-y-2">
                  <Label className={theme === 'dark' ? 'text-white' : 'text-black'}>
                    Additional Message
                  </Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    className={`${
                      theme === 'dark' 
                        ? 'bg-white/10 border-white/20 text-white' 
                        : 'bg-white border-gray-200 text-black'
                    } min-h-[80px]`}
                    placeholder="Any additional information you'd like to share"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full ${
                    theme === 'dark' 
                      ? 'bg-white text-black hover:bg-white/90' 
                      : 'bg-white text-gray-800 border-2 border-gray-300 hover:border-gray-500'
                  } py-3 rounded-md transition-colors font-medium ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                </button>
              </form>
            </div>

            {/* Updated Contact Information Section */}
            <div className="space-y-8">
              <div className={`glow-only-container ${
                theme === 'dark' 
                  ? 'bg-white/5 border-white/10' 
                  : ' from-purple-500/10 to-blue-500/10 border-gray-200 hover:border-blue-200'
                } p-8 rounded-lg backdrop-blur-sm border relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1] group`}>
                
                <GlowEffect variant="blue" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Location/Address Section */}
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <div className={`p-2 rounded-lg ${
                    theme === 'dark' 
                      ? 'bg-white/10' 
                      : 'bg-gradient-to-br from-blue-500/10 to-blue-500/20'
                  }`}>
                    <MapPin className={`w-5 h-5 ${
                      theme === 'dark' ? 'text-white' : 'text-blue-600'
                    }`} />
                  </div>
                  <div>
                    <a 
                      href="https://maps.google.com/?q=227A,Jawahar+Bazaar,Karur,639002"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm md:text-base font-medium ${
                        theme === 'dark' ? 'text-white' : 'text-black'
                      } hover:text-blue-600 transition-colors`}
                    >
                      227 A, Jawahar Bazaar, Karur — 639002.
                    </a>
                  </div>
                </div>
                
                {/* Phone Numbers Section */}
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <div className={`p-2 rounded-lg ${
                    theme === 'dark' 
                      ? 'bg-white/10' 
                      : 'bg-gradient-to-br from-blue-500/10 to-blue-500/20'
                  }`}>
                    <Phone className={`w-5 h-5 ${
                      theme === 'dark' ? 'text-white' : 'text-blue-600'
                    }`} />
                  </div>
                  <div>
                    <a 
                      href="tel:9566685555"
                      className={`text-sm md:text-base font-medium ${
                        theme === 'dark' ? 'text-white' : 'text-black'
                      } hover:text-blue-600 transition-colors block`}
                    >
                      +91 9566685555
                    </a> 
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <div className={`p-2 rounded-lg ${
                    theme === 'dark' 
                      ? 'bg-white/10' 
                      : 'bg-gradient-to-br from-blue-500/10 to-blue-500/20'
                  }`}>
                    <Phone className={`w-5 h-5 ${
                      theme === 'dark' ? 'text-white' : 'text-blue-600'
                    }`} />
                  </div>
                  <div>
                    <a 
                      href="tel:9524885555"
                      className={`text-sm md:text-base font-medium ${
                        theme === 'dark' ? 'text-white' : 'text-black'
                      } hover:text-blue-600 transition-colors block`}
                    >
                      +91 9524885555
                    </a> 
                  </div>
                </div>
                {/* Email Section */}
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <div className={`p-2 rounded-lg ${
                    theme === 'dark' 
                      ? 'bg-white/10' 
                      : 'bg-gradient-to-br from-blue-500/10 to-blue-500/20'
                  }`}>
                    <Mail className={`w-5 h-5 ${
                      theme === 'dark' ? 'text-white' : 'text-blue-600'
                    }`} />
                  </div>
                  <div>
                    <a 
                      href="mailto:pskinfraprojectskrr@gmail.com"
                      className={`text-sm md:text-base font-medium ${
                        theme === 'dark' ? 'text-white' : 'text-black'
                      } hover:text-blue-600 transition-colors`}
                    >
                      pskinfraprojectskrr@gmail.com
                    </a>
                  </div>
                </div>
                
                {/* Website Section */}
                <div className="flex items-center gap-3 relative z-10">
                  <div className={`p-2 rounded-lg ${
                    theme === 'dark' 
                      ? 'bg-white/10' 
                      : 'bg-gradient-to-br from-blue-500/10 to-blue-500/20'
                  }`}>
                    <Globe className={`w-5 h-5 ${
                      theme === 'dark' ? 'text-white' : 'text-blue-600'
                    }`} />
                  </div>
                  <div>
                    <a 
                      href="https://www.pskinfraprojects.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm md:text-base font-medium ${
                        theme === 'dark' ? 'text-white' : 'text-black'
                      } hover:text-blue-600 transition-colors`}
                    >
                      www.pskinfraprojects.com
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Map Section - Centered */}
              <div className={`glow-only-container ${
                theme === 'dark' 
                  ? 'bg-white/5 border-white/10' 
                  : ' from-purple-500/10 to-blue-500/10 border-gray-200 hover:border-purple-200'
                } p-4 rounded-lg backdrop-blur-sm border relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-1] group`}>
                
                <GlowEffect variant="purple" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="h-[350px] rounded-lg overflow-hidden relative mx-auto flex flex-col justify-center items-center z-10">
                  {visibleMaps["Karur Office"] ? (
                    <div className="absolute inset-0 z-10">
                      <div className="relative h-full w-full">
                        <Map coordinates={addresses[0].coordinates} />
                        <button
                          onClick={() => toggleMap("Karur Office")}
                          className={`absolute top-3 right-3 p-2 rounded-full z-20 ${
                            theme === 'dark' 
                              ? 'bg-black/70 text-white hover:bg-black/90' 
                              : 'bg-white/70 text-gray-800 hover:bg-white/90'
                          } transition-all`}
                          aria-label="Close map"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => toggleMap("Karur Office")}
                      className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium ${
                        theme === 'dark' 
                          ? 'bg-white text-black hover:bg-white/90' 
                          : 'bg-white text-gray-800 border-2 border-gray-300 hover:border-gray-500'
                      } transition-all duration-300 shadow-sm hover:shadow-md`}
                    >
                      <MapPin className="w-5 h-5" />
                      View Map
                    </button>
                  )}
                  
                  {!visibleMaps["Karur Office"] && (
                    <div className={`mt-4 text-center ${
                      theme === 'dark' ? 'text-white/70' : 'text-gray-600'
                    }`}>
                      {/* <p>227 A, Jawahar Bazaar, Karur — 639002</p> */}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <Footer />
      </main>
    </>
  );
};

export default Contact;
