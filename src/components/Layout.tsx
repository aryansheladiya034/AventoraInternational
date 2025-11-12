import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Linkedin, Instagram, Twitter, Facebook } from 'lucide-react';
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
  const navigate = useNavigate();
  const location = useLocation();

  // Check if announcement was closed in this session
  useEffect(() => {
    const announcementClosed = sessionStorage.getItem('announcementClosed');
    if (announcementClosed === 'true') {
      setShowAnnouncement(false);
    }
  }, []);

  const handleCloseAnnouncement = () => {
    setShowAnnouncement(false);
    sessionStorage.setItem('announcementClosed', 'true');
  };

  const menuItems = [
    { id: '/', label: 'Home' },
    { id: '/about', label: 'About' },
    { id: '/services', label: 'Services' },
    { id: '/products', label: 'Products', hasDropdown: true },
    { id: '/contact', label: 'Contact Us' },
  ];

  const productCategories = [
    { id: '/products/rice', label: 'Rice' },
    { id: '/products/spices', label: 'Spices' },
    { id: '/products/pulses', label: 'Pulses & Lentils' },
    { id: '/products/dehydrated', label: 'Dehydrated Products' },
    { id: '/products/oil-seeds', label: 'Oil Seeds' },
    { id: '/products/compostable-tableware', label: 'Compostable Tableware' },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
                    onMouseEnter={() => setProductsDropdownOpen(true)}
                    onMouseLeave={() => setProductsDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleNavigation(item.id)}
                      className={`text-base font-bold transition-colors flex items-center gap-1 ${
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
                    className={`text-base font-bold transition-colors ${
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
                    className={`block w-full text-left px-4 py-3 text-base font-bold ${
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
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavigation(item.id)}
                      className="text-sm text-gray-200 hover:text-[#FF6F4E] transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-200">
                <li>Email: info@aventorainternational.com</li>
                <li>Phone: +91 76981 07075</li>
                <li>Address: 123 Trade Center, Global City</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleNavigation('/privacy')}
                    className="text-sm text-gray-200 hover:text-[#FF6F4E] transition-colors"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation('/terms')}
                    className="text-sm text-gray-200 hover:text-[#FF6F4E] transition-colors"
                  >
                    Terms & Conditions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation('/faq')}
                    className="text-sm text-gray-200 hover:text-[#FF6F4E] transition-colors"
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
              <p className="text-sm text-gray-200">
                Connecting the world through trusted global trade solutions.
              </p>
              <br />
              
                 <div className="flex-1 flex items-center justify-start gap-3">
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

          <div className="border-t border-gray-600 mt-8 pt-2 text-center text-xl text-gray-300">
            <p className="text-orange-400">&copy; 2025 Aventora International. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <WhatsAppFloat />
    </div>
  );
};

export default Layout;
