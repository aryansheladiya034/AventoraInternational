import React from 'react';
import { X } from 'lucide-react';

interface AnnouncementBannerProps {
  onClose: () => void;
}

const AnnouncementBanner: React.FC<AnnouncementBannerProps> = ({ onClose }) => {
  const announcements = [
    "🎉 BOGO OFFER: Buy One Get One Free on all Spice Blends - Limited Time!",
    "🚢 Free Global Shipping on orders above $1000",
    "⭐ New Product Alert: Premium Basmati Rice Collection now available",
    "💰 Special Discount: 20% off on bulk orders for exporters",
    "🌱 Certified Organic Products - Quality guaranteed from farm to table"
  ];

  return (
    <div className="bg-gradient-to-r from-[#FF6F4E] to-[#ff8a6d] text-white relative overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex-1 overflow-hidden">
          <div className="animate-scroll whitespace-nowrap">
            <span className="inline-block">
              {announcements.map((announcement, index) => (
                <span key={index} className="mx-8 text-sm font-medium">
                  {announcement}
                </span>
              ))}
              {/* Duplicate for seamless loop */}
              {announcements.map((announcement, index) => (
                <span key={`duplicate-${index}`} className="mx-8 text-sm font-medium">
                  {announcement}
                </span>
              ))}
            </span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="ml-4 p-1 hover:bg-white/20 rounded-full transition-colors flex-shrink-0"
          aria-label="Close announcement"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBanner;