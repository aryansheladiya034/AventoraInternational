import React from 'react';
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface AnnouncementBannerProps {
  onClose: () => void;
}

const AnnouncementBanner: React.FC<AnnouncementBannerProps> = () => {
  return (
    <div className="bg-gradient-to-r from-[#FF6F4E] to-[#ff8a6d] text-white announcement-banner">
      <div className="px-3 sm:px-4 py-2 sm:py-3">
        {/* Mobile: Stack vertically, Desktop: Side by side */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-8">
          {/* Contact info */}
          <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-4 sm:gap-6">
            <a 
              href="tel:+917698107075" 
              className="flex items-center gap-1.5 sm:gap-2 hover:opacity-80 transition-opacity"
            >
              <Phone className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 flex-shrink-0" />
              <span className="text-xs sm:text-sm lg:text-base whitespace-nowrap">+91 76981 07075</span>
            </a>
            <span className="hidden xs:block font-bold text-xs sm:text-sm">|</span>
            <a 
              href="mailto:info@aventorainternational.com" 
              className="flex items-center gap-1.5 sm:gap-2 hover:opacity-80 transition-opacity"
            >
              <Mail className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 flex-shrink-0" />
              <span className="text-xs sm:text-sm lg:text-base">
                <span className="hidden sm:inline">info@aventorainternational.com</span>
                <span className="sm:hidden">info@aventora...</span>
              </span>
            </a>
          </div>
          
          {/* Social media icons */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3">
            <a 
              href="https://www.facebook.com/share/1CpizuzXR7/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-1 sm:p-1.5 lg:p-2 rounded-full bg-white/20 hover:bg-white hover:text-[#FF6F4E] transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="h-3 w-3 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-1 sm:p-1.5 lg:p-2 rounded-full bg-white/20 hover:bg-white hover:text-[#FF6F4E] transition-all duration-300"
              aria-label="X (Twitter)"
            >
              <Twitter className="h-3 w-3 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4" />
            </a>
            <a 
              href="https://www.instagram.com/aventora_international?igsh=dDd0d2ttbjU4ejVi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-1 sm:p-1.5 lg:p-2 rounded-full bg-white/20 hover:bg-white hover:text-[#FF6F4E] transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="h-3 w-3 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4" />
            </a>
            <a 
              href="https://www.linkedin.com/company/aventora-international/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-1 sm:p-1.5 lg:p-2 rounded-full bg-white/20 hover:bg-white hover:text-[#FF6F4E] transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-3 w-3 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBanner;