import React from 'react';
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface AnnouncementBannerProps {
  onClose: () => void;
}

const AnnouncementBanner: React.FC<AnnouncementBannerProps> = () => {
  return (
    <div className="bg-gradient-to-r from-[#FF6F4E] to-[#ff8a6d] text-white announcement-banner">
      <div className="px-3 sm:px-4 py-2 sm:py-3">
        {/* Single row layout */}
        <div className="flex items-center justify-between">
          {/* Contact info */}
          <div className="flex items-center gap-3 sm:gap-6">
            {/* Phone */}
            <a 
              href="tel:+917698107075" 
              className="group relative flex items-center gap-1.5 sm:gap-2 hover:opacity-80 transition-opacity touch-manipulation"
              tabIndex={0}
            >
              <Phone className="h-4 w-4 sm:h-4 sm:w-4 lg:h-5 lg:w-5 flex-shrink-0" />
              <span className="hidden sm:inline text-xs sm:text-sm lg:text-base whitespace-nowrap">+91 76981 07075</span>
              
              {/* Mobile hover/touch tooltip */}
              <div className="sm:hidden absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black/90 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100 transition-all duration-300 pointer-events-none z-50 shadow-lg">
                +91 76981 07075
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-4 border-transparent border-t-black/90"></div>
              </div>
            </a>

            <span className="font-bold text-xs sm:text-sm">|</span>

            {/* Email */}
            <a 
              href="mailto:info@aventorainternational.com" 
              className="group relative flex items-center gap-1.5 sm:gap-2 hover:opacity-80 transition-opacity touch-manipulation"
              tabIndex={0}
            >
              <Mail className="h-4 w-4 sm:h-4 sm:w-4 lg:h-5 lg:w-5 flex-shrink-0" />
              <span className="hidden sm:inline text-xs sm:text-sm lg:text-base">
                <span className="hidden md:inline">info@aventorainternational.com</span>
                <span className="md:hidden">info@aventora...</span>
              </span>
              
              {/* Mobile hover/touch tooltip */}
              <div className="sm:hidden absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black/90 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100 transition-all duration-300 pointer-events-none z-50 shadow-lg">
                info@aventorainternational.com
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-4 border-transparent border-t-black/90"></div>
              </div>
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