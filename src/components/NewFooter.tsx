
// import React from 'react';
// import { Github, Instagram, Linkedin, Heart, Mail, MapPin, Phone } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const NewFooter = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-gradient-to-r from-primary via-primary to-accent/20 text-primary-foreground py-16">
//       <div className="container mx-auto px-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
//           {/* About Section */}
//           <div className="space-y-4">
//             <h3 className="text-xl font-semibold text-accent">Rishabh Mishra</h3>
//             <p className="text-sm opacity-80 leading-relaxed">
//               UX & Data Analyst passionate about bringing real value through thoughtful design and data-driven insights.
//             </p>
//             <div className="flex gap-3">
//               <Button 
//                 asChild
//                 size="sm"
//                 className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white p-2 rounded-full transition-all duration-300 hover:scale-105"
//               >
//                 <a href="https://www.instagram.com/rishabhnmishra/" target="_blank" rel="noopener noreferrer">
//                   <Instagram className="w-4 h-4" />
//                 </a>
//               </Button>
//               <Button 
//                 asChild
//                 size="sm"
//                 className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white p-2 rounded-full transition-all duration-300 hover:scale-105"
//               >
//                 <a href="https://github.com/rishabhnmishra" target="_blank" rel="noopener noreferrer">
//                   <Github className="w-4 h-4" />
//                 </a>
//               </Button>
//               <Button 
//                 asChild
//                 size="sm"
//                 className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white p-2 rounded-full transition-all duration-300 hover:scale-105"
//               >
//                 <a href="https://www.linkedin.com/in/rishabhnmishra/" target="_blank" rel="noopener noreferrer">
//                   <Linkedin className="w-4 h-4" />
//                 </a>
//               </Button>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold text-accent">Quick Links</h3>
//             <nav className="space-y-2">
//               {[
//                 { href: '#home', label: 'Home' },
//                 { href: '#about', label: 'About' },
//                 { href: '#resume', label: 'Resume' },
//                 { href: '#projects', label: 'Projects' },
//                 { href: '#contact', label: 'Contact' }
//               ].map((item) => (
//                 <a
//                   key={item.href}
//                   href={item.href}
//                   className="block text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all duration-300"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     const element = document.querySelector(item.href);
//                     if (element) {
//                       element.scrollIntoView({ behavior: 'smooth' });
//                     }
//                   }}
//                 >
//                   {item.label}
//                 </a>
//               ))}
//             </nav>
//           </div>

//           {/* Services */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold text-accent">Services</h3>
//             <div className="space-y-2">
//               <p className="text-sm opacity-80">UX Research & Design</p>
//               <p className="text-sm opacity-80">Data Analysis</p>
//               <p className="text-sm opacity-80">User Experience Consulting</p>
//               <p className="text-sm opacity-80">Digital Strategy</p>
//             </div>
//           </div>

//           {/* Contact Info */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold text-accent">Get In Touch</h3>
//             <div className="space-y-3">
//               <div className="flex items-center gap-3">
//                 <Mail className="w-4 h-4 text-accent" />
//                 <span className="text-sm opacity-80">contact@rishabhmishra.com</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Phone className="w-4 h-4 text-accent" />
//                 <span className="text-sm opacity-80">+91 XXX XXX XXXX</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <MapPin className="w-4 h-4 text-accent" />
//                 <span className="text-sm opacity-80">India</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="border-t border-white/20 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="flex items-center gap-2 text-sm opacity-80">
//               Copyright © {currentYear} Rishabh Mishra. All rights reserved.
//             </p>
//             <p className="flex items-center gap-2 text-sm opacity-80">
//               Made with{' '}
//               <Heart className="w-4 h-4 text-red-400 animate-pulse" />{' '}
//               by{' '}
//               <a 
//                 href="https://colorlib.com" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="text-accent hover:text-accent/80 transition-colors duration-300 font-medium"
//               >
//                 Colorlib
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default NewFooter;
