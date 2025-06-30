
import React, { useState, useEffect } from 'react';
import { Github, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const text = 'Data Explorer , Insight Creator , Data Storyteller';

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(text.substring(0, currentText.length - 1));
      } else {
        setCurrentText(text.substring(0, currentText.length + 1));
      }
      
      if (!isDeleting && currentText === text) {
        setTimeout(() => setIsDeleting(true), 3000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
      }
    }, isDeleting ? 60 : 100);
    
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, text]);

  return (
    <section id="home" className="min-h-screen flex items-center hero-gradient relative overflow-hidden pt-20 md:pt-0">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Profile Image */}
          <div className="relative animate-scale-in flex-shrink-0">
            <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-full animate-pulse opacity-20"></div>
              <div className="absolute inset-4 bg-white rounded-full overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/345f97e9-82b4-4ed3-a690-98a9b0a18c76.png" 
                  alt="Rahul Sharma"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-white space-y-6 lg:space-y-8 animate-fade-in text-center lg:text-left">
            <div className="space-y-4 lg:space-y-6">
              <p className="text-base lg:text-lg font-light opacity-90">Namaste!</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight">
                I'm <span className="text-accent font-medium">Rahul Sharma</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light leading-tight">
                A <span className="text-accent font-medium">Data</span> <span className="text-accent font-medium">Analyst</span>
              </h2>
              <div className="text-lg sm:text-xl lg:text-2xl font-light h-8 flex items-center justify-center lg:justify-start">
                <span>{currentText}</span>
                <span className="animate-pulse ml-1 opacity-70">|</span>
              </div>
            </div>
            
            <p className="text-sm sm:text-base opacity-80 max-w-lg font-light leading-relaxed mx-auto lg:mx-0">
              I'm always trying to bring real value and define problems 
              with my designs. Welcome to my portfolio.
            </p>
            
            <div className="flex gap-4 pt-4 lg:pt-6 pb-8 md:pb-0 justify-center lg:justify-start">
              <Button 
                asChild
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-light p-3 rounded-full transition-all duration-300 hover:scale-105 hover:text-white hover:shadow-[0_0_16px_4px_#FFFFFF]"
              >
                <a href="https://www.instagram.com/rahultheanalyst/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
              <Button 
                asChild
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-light p-3 rounded-full transition-all duration-300 hover:scale-105 hover:text-white hover:shadow-[0_0_16px_4px_#ffffff]"
              >
                <a href="https://github.com/RahulSharmaAnalyst" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button 
                asChild
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-light p-3 rounded-full transition-all duration-300 hover:scale-105 hover:text-white hover:shadow-[0_0_16px_4px_#ffffff]"
              >
                <a href="https://www.linkedin.com/in/rahulsharma521/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
