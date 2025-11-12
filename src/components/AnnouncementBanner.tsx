import React from 'react';
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface AnnouncementBannerProps {
  onClose: () => void;
}

const AnnouncementBanner: React.FC<AnnouncementBannerProps> = () => {
  return (
    <div className="bg-gradient-to-r from-[#FF6F4E] to-[#ff8a6d] text-white">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left spacer for balance */}
        <div className="flex-1"></div>
        
        {/* Center content - Contact info */}
        <div className="flex items-center justify-center gap-8">
          <a 
            href="tel:+917698107075" 
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Phone className="h-5 w-5 font-bold" />
            <span className="text-base font-bold">+91 76981 07075</span>
          </a>
          
          <a 
            href="mailto:info@aventorainternational.com" 
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Mail className="h-5 w-5 font-bold" />
            <span className="text-base font-bold">info@aventorainternational.com</span>
          </a>
        </div>
        
        {/* Right side - Social media icons */}
        <div className="flex-1 flex items-center justify-end gap-3">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/20 hover:bg-white hover:text-[#FF6F4E] transition-all duration-300"
            aria-label="Facebook"
          >
            <Facebook className="h-4 w-4" />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/20 hover:bg-white hover:text-[#FF6F4E] transition-all duration-300"
            aria-label="X (Twitter)"
          >
            <Twitter className="h-4 w-4" />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/20 hover:bg-white hover:text-[#FF6F4E] transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/20 hover:bg-white hover:text-[#FF6F4E] transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBanner;