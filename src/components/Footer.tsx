
import React from 'react';
import { Github, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Media Links */}
          <div className="flex gap-4">
            <Button 
              asChild
              variant="outline"
              size="icon"
              className="rounded-full hover:scale-105 transition-transform duration-300 border-slate-600 hover:border-[#FFF9C4] text-slate-300 hover:text-[#FFF9C4] bg-transparent hover:bg-slate-800 hover:shadow-[0_0_16px_4px_#FFD700]"
            >
              <a href="https://www.instagram.com/rahultheanalyst/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5" />
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="icon"
              className="rounded-full hover:scale-105 transition-transform duration-300 border-slate-600 hover:border-[#FFF9C4] text-slate-300 hover:text-[#FFF9C4] bg-transparent hover:bg-slate-800 hover:shadow-[0_0_16px_4px_#FFD700]"
            >
              <a href="https://github.com/RahulSharmaAnalyst" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="icon"
              className="rounded-full hover:scale-105 transition-transform duration-300 border-slate-600 hover:border-[#FFF9C4] text-slate-300 hover:text-[#FFF9C4] bg-transparent hover:bg-slate-800 hover:shadow-[0_0_16px_4px_#FFD700]"
            >
              <a href="https://www.linkedin.com/in/rahulsharma521/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-slate-300 text-sm">
              © {new Date().getFullYear()} Rahul Sharma. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
