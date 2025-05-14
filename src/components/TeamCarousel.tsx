// import React, { useRef } from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
//   type CarouselApi,
// } from "@/components/ui/carousel";
// import { motion } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const teamMembers = [
//   {
//     name: "Team Head",
//     position: "Founder & CEO",
//     image: "/team.png",
//     whatsapp: "919566685555"
//   },
//   {
//     name: "team-1",
//     position: "",
//     image: "/team-1.png",
//     whatsapp: "918973289009"
//   },
//   {
//     name: "team-2",
//     position: "",
//     image: "/team-2.png",
//     whatsapp: "919843478969"
//   },
//   {
//     name: "team-3",
//     position: "",
//     image: "/team-3.png",
//     whatsapp: "919843478969"
//   },
//   {
//     name: "team-4",
//     position: "",
//     image: "/team-4.png",
//     whatsapp: "919843478969"
//   },
// ];

// interface TeamCarouselProps {
//   theme?: 'dark' | 'light';
// }

// const TeamCarousel = ({ theme = 'dark' }: TeamCarouselProps) => {
//   const [api, setApi] = React.useState<CarouselApi>();
//   const [current, setCurrent] = React.useState(0);

//   React.useEffect(() => {
//     if (!api) {
//       return;
//     }

//     api.on("select", () => {
//       setCurrent(api.selectedScrollSnap());
//     });
//   }, [api]);

//   const scrollPrev = () => {
//     api?.scrollPrev();
//   };

//   const scrollNext = () => {
//     api?.scrollNext();
//   };

//   const handleConnect = (whatsapp: string) => {
//     const message = encodeURIComponent("Hi, I would like to connect with you.");
//     const whatsappUrl = `https://wa.me/${whatsapp}?text=${message}`;
//     window.open(whatsappUrl, '_blank');
//   };

//   return (
//     <div className="relative">
//       <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl" />
      
//       <button 
//         onClick={scrollPrev}
//         className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
//           theme === 'dark'
//             ? 'bg-white/10 border-white/20 hover:bg-white/20'
//             : 'bg-gradient-to-r from-purple-500 to-blue-500 border-transparent hover:opacity-90'
//         } border`}
//         aria-label="Previous slide"
//       >
//         <ChevronLeft className={`w-6 h-6 ${
//           theme === 'dark' ? 'text-white' : 'text-white'
//         }`} />
//       </button>
      
//       <button 
//         onClick={scrollNext}
//         className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
//           theme === 'dark'
//             ? 'bg-white/10 border-white/20 hover:bg-white/20'
//             : 'bg-gradient-to-r from-purple-500 to-blue-500 border-transparent hover:opacity-90'
//         } border`}
//         aria-label="Next slide"
//       >
//         <ChevronRight className={`w-6 h-6 ${
//           theme === 'dark' ? 'text-white' : 'text-white'
//         }`} />
//       </button>

//       <Carousel
//         opts={{
//           align: "center",
//           loop: true,
//         }}
//         className="relative w-full overflow-visible py-4"
//         setApi={setApi}
//       >
//         <CarouselContent className="-ml-2 md:-ml-4">
//           {teamMembers.map((member, index) => (
//             <CarouselItem 
//               key={index} 
//               className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 flex justify-center h-full"
//             >
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className={`relative w-full max-w-[300px] rounded-2xl overflow-hidden backdrop-blur-sm flex flex-col items-center p-8 h-full ${
//                   index === 0 ?
//                     'bg-gradient-to-br from-purple-600/30 via-blue-500/20 to-purple-500/30 border-purple-500/30 shadow-lg shadow-purple-500/20' :
//                     theme === 'dark'
//                       ? 'bg-white/5 border-white/10'
//                       : 'bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-500/20'
//                 } border`}
//               >
//                 {/* Image Section */}
//                 <div className={`w-28 h-28 rounded-full overflow-hidden mb-6 border-4 ${
//                   index === 0 ?
//                     'border-purple-500/40 shadow-lg shadow-purple-500/20' :
//                     theme === 'dark' 
//                       ? 'border-white/10' 
//                       : 'border-purple-500/20'
//                 }`}>
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-full h-full object-cover"
//                     loading="lazy"
//                     decoding="async"
//                     width="112"
//                     height="112"
//                   />
//                 </div>
                
//                 {/* Content Section */}
//                 <div className="flex flex-col items-center w-full">
//                   <h3 className={`text-xl font-bold ${
//                     index === 0 ?
//                       'bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-transparent' :
//                       theme === 'dark' ? 'text-white' : 'text-black'
//                   } mb-1`}>{member.name}</h3>
//                   <p className={`${
//                     index === 0 ?
//                       theme === 'dark' ?
//                         'text-purple-200 font-semibold' :
//                         'bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-transparent font-semibold' :
//                       theme === 'dark' ? 'text-white/80' : 'text-black/80'
//                   } font-medium mb-6`}>{member.position}</p>
//                   <button 
//                     onClick={() => handleConnect(member.whatsapp)}
//                     className={`w-full max-w-[160px] py-2.5 ${
//                       index === 0 ?
//                         'bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 text-white border-transparent' :
//                         theme === 'dark' 
//                           ? 'bg-white/10 hover:bg-white/20 text-white border-white/20' 
//                           : 'bg-transparent hover:bg-black/5 text-black border border-violet-500'
//                     } text-sm font-medium rounded-full transition-all hover:scale-105 flex items-center justify-center gap-2`}
//                   >
//                     <svg 
//                       viewBox="0 0 24 24" 
//                       className={`w-4 h-4 fill-current ${
//                         index === 0 || theme === 'dark' ? 'text-white' : 'text-black'
//                       }`}
//                     >
//                       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
//                     </svg>
//                     Connect
//                   </button>
//                 </div>
//               </motion.div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//       </Carousel>

//       <div className="flex justify-center gap-2 mt-8">
//         {teamMembers.map((_, index) => (
//           <button
//             key={index}
//             className={`w-2 h-2 rounded-full transition-colors ${
//               current === index 
//                 ? theme === 'dark' ? "bg-white" : "bg-purple-500"
//                 : theme === 'dark' ? "bg-white/20" : "bg-purple-500/20"
//             }`}
//             onClick={() => api?.scrollTo(index)}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TeamCarousel; 