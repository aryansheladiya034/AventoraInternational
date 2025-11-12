import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Linkedin, Instagram, Twitter, Facebook, ChevronRight, Mail, Phone, MapPin, FileText } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import AnnouncementBanner from './AnnouncementBanner';
import Logo from './Logo';
import WhatsAppFloat from './WhatsAppFloat';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if announcement was closed in this session
  useEffect(() => {
    const announcementClosed = sessionStorage.getItem('announcementClosed');
    if (announcementClosed === 'true') {
      setShowAnnouncement(false);
    }
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleCloseAnnouncement = () => {
    setShowAnnouncement(false);
    sessionStorage.setItem('announcementClosed', 'true');
  };

  const menuItems = [
    { id: '/', label: 'Home' },
    { id: '/about', label: 'About' },
    { id: '/products', label: 'Products', hasDropdown: true },
    { id: '/contact', label: 'Contact Us' },
  ];

  const productCategories = [
    { id: '/products/rice', label: 'Rice' },
    { id: '/products/spices', label: 'Spices' },
    { id: '/products/pulses-lentils', label: 'Pulses & Lentils' },
    { id: '/products/dehydrated-products', label: 'Dehydrated Products' },
    { id: '/products/oil-seeds', label: 'Oil Seeds' },
    { id: '/products/compostable-tableware', label: 'Compostable Tableware' },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const handleMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setProductsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setProductsDropdownOpen(false);
    }, 3000); // 3 seconds delay before closing
    setDropdownTimeout(timeout);
  };

  return (
      <div className="min-h-screen flex flex-col">
      {showAnnouncement && (
        <AnnouncementBanner onClose={handleCloseAnnouncement} />
      )}
      
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => handleNavigation('/')}
            >
              <Logo />
            </div>

            <div className="hidden md:flex space-x-10 items-center">
              {menuItems.map((item) => (
                item.hasDropdown ? (
                  <div 
                    key={item.id} 
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      onClick={() => handleNavigation(item.id)}
                      className={`text-base font-bold transition-colors flex items-center gap-1 uppercase ${
                        location.pathname.startsWith('/products')
                          ? 'text-[#2B58A0] border-b-2 border-[#FF6F4E]'
                          : 'text-gray-700 hover:text-[#2B58A0]'
                      } pb-1`}
                    >
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    
                    {productsDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                        {productCategories.map((category) => (
                          <button
                            key={category.id}
                            onClick={() => handleNavigation(category.id)}
                            className="block w-full text-left px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#2B58A0] transition-colors"
                          >
                            {category.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.id)}
                    className={`text-base font-bold transition-colors uppercase ${
                      location.pathname === item.id
                        ? 'text-[#2B58A0] border-b-2 border-[#FF6F4E]'
                        : 'text-gray-700 hover:text-[#2B58A0]'
                    } pb-1`}
                  >
                    {item.label}
                  </button>
                )
              ))}
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {menuItems.map((item) => (
                <div key={item.id}>
                  <button
                    onClick={() => {
                      if (item.hasDropdown) {
                        setProductsDropdownOpen(!productsDropdownOpen);
                      } else {
                        handleNavigation(item.id);
                      }
                    }}
                    className={`block w-full text-left px-4 py-3 text-base font-bold uppercase ${
                      location.pathname === item.id || (item.hasDropdown && location.pathname.startsWith('/products'))
                        ? 'bg-[#2B58A0] text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </button>
                  
                  {item.hasDropdown && productsDropdownOpen && (
                    <div className="bg-gray-50 py-2">
                      {productCategories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => handleNavigation(category.id)}
                          className="block w-full text-left px-8 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-100 hover:text-[#2B58A0]"
                        >
                          {category.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </nav>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-[#2B58A0] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            

            <div>
              <h4 className="text-2xl font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {menuItems.map((item) => (
                  <li key={item.id} className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-[#FF6F4E] flex-shrink-0" />
                    <button
                      onClick={() => handleNavigation(item.id)}
                      className="text-base text-gray-200 hover:text-[#FF6F4E] transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-2xl font-bold mb-6">Contact</h4>
              <ul className="space-y-3 text-base text-gray-200">
                <li className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 text-[#FF6F4E] flex-shrink-0 mt-0.5" />
                  <span>info@aventorainternational.com</span>
                </li>
                <li className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 text-[#FF6F4E] flex-shrink-0 mt-0.5" />
                  <span>+91 76981 07075</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-[#FF6F4E] flex-shrink-0 mt-0.5" />
                  <span>123 Trade Center, Global City</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-2xl font-bold mb-6">Legal</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <FileText className="h-4 w-4 mr-2 text-[#FF6F4E] flex-shrink-0" />
                  <button
                    onClick={() => handleNavigation('/privacy')}
                    className="text-base text-gray-200 hover:text-[#FF6F4E] transition-colors"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li className="flex items-center">
                  <FileText className="h-4 w-4 mr-2 text-[#FF6F4E] flex-shrink-0" />
                  <button
                    onClick={() => handleNavigation('/terms')}
                    className="text-base text-gray-200 hover:text-[#FF6F4E] transition-colors"
                  >
                    Terms & Conditions
                  </button>
                </li>
                <li className="flex items-center">
                  <FileText className="h-4 w-4 mr-2 text-[#FF6F4E] flex-shrink-0" />
                  <button
                    onClick={() => handleNavigation('/faq')}
                    className="text-base text-gray-200 hover:text-[#FF6F4E] transition-colors"
                  >
                    FAQ
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Logo size="small" variant="white" />
              </div>
              <p className="text-base text-gray-200">
                Connecting the world through trusted global trade solutions.
              </p>
              <br />
              
                 <div className="flex-1 flex items-center justify-start gap-4">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/20 hover:bg-white hover:text-[#FF6F4E] transition-all duration-300"
            aria-label="Facebook"
          >
            <Facebook className="h-6 w-6" />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/20 hover:bg-white hover:text-[#FF6F4E] transition-all duration-300"
            aria-label="X (Twitter)"
          >
            <Twitter className="h-6 w-6" />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/20 hover:bg-white hover:text-[#FF6F4E] transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/20 hover:bg-white hover:text-[#FF6F4E] transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
            </div>
          </div>
        </div>
        
        <div className="bg-[#FF6F4E] py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm text-white">&copy; 2025 Aventora International. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <WhatsAppFloat />
    </div>
  );
};

export default Layout;
