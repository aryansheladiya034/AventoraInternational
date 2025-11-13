import React from 'react';
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface AnnouncementBannerProps {
  onClose: () => void;
}

const AnnouncementBanner: React.FC<AnnouncementBannerProps> = () => {
  return (
    <div className="bg-gradient-to-r from-[#FF6F4E] to-[#ff8a6d] text-white">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left side - Contact info */}
        <div className="flex items-center gap-8">
          <a 
            href="tel:+917698107075" 
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Phone className="h-5 w-5 ml-4" />
            <span className="text-base ">+91 76981 07075</span>
          </a>
          <span className="font-bold">|</span>
          <a 
            href="mailto:info@aventorainternational.com" 
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Mail className="h-5 w-5 ml-1" />
            <span className="text-base ">info@aventorainternational.com</span>
          </a>
        </div>
        
        {/* Right side - Social media icons */}
        <div className="flex items-center gap-3">
          <a 
            href="https://www.facebook.com/share/1CpizuzXR7/" 
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
            href="https://www.instagram.com/aventora_international?igsh=dDd0d2ttbjU4ejVi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/20 hover:bg-white hover:text-[#FF6F4E] transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a 
            href="https://www.linkedin.com/company/aventora-international/" 
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