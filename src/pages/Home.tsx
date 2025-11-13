import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Ship, Users, Zap, DollarSign,  Globe, Shield, ChevronLeft, ChevronRight } from 'lucide-react';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentCertificateSlide, setCurrentCertificateSlide] = useState(0);
  const [certificatesPerView, setCertificatesPerView] = useState(1);
  
  const heroImages = [
    '/images/home1.jpg',
    '/images/Home page2.jpg',
    '/images/home2 compostable.png',
  ];

  const certificates = [
    { src: "/images/CErtificate/FIEO-Logo.webp", alt: "FIEO Certificate" },
    { src: "/images/CErtificate/Apeda-Logo.webp", alt: "APEDA Certificate" },
    { src: "/images/CErtificate/DGFT LOGO.jfif", alt: "DGFT Certificate" },
    { src: "/images/certi/fssai.jpg", alt: "FSSAI Certificate" },
    { src: "/images/certi/g20.jpg", alt: "G20 Certificate" },
    { src: "/images/certi/make-in-india-logo-hd.png", alt: "Make in India Certificate" },
    { src: "/images/certi/msme.webp", alt: "MSME Certificate" },
    { src: "/images/certi/Spices_Board_of_India_Logo.png", alt: "Spices Board of India Certificate" }
  ];

  // Calculate certificates per view based on screen size
  useEffect(() => {
    const updateCertificatesPerView = () => {
      const width = window.innerWidth;
      if (width >= 1024) setCertificatesPerView(4); // lg
      else if (width >= 768) setCertificatesPerView(3); // md
      else if (width >= 640) setCertificatesPerView(2); // sm
      else setCertificatesPerView(1); // mobile
    };

    updateCertificatesPerView();
    window.addEventListener('resize', updateCertificatesPerView);
    return () => window.removeEventListener('resize', updateCertificatesPerView);
  }, []);

  const heroContent = [
    {
      title: 'Empowering global connections through export and import excellence.',
      description: 'Our mission is to simplify international trade by offering efficient, reliable, and tailored import-export solutions for our global partners.'
    },
    {
      title: 'Bringing authentic flavors from our land to your table.',
      description: 'We take pride in exporting superior-grade spices and agro products known for their aroma, flavor, and freshness. Every shipment from Aventora International carries the rich heritage of taste to homes and restaurants worldwide.'
    },
    {
      title: 'Sustainable Choices, Better Future.',
      description: 'Discover our wide range of eco-friendly, biodegradable products crafted to protect the environment. Each product is designed to reduce waste, conserve resources, and support a greener, cleaner tomorrow.'
    }
    
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const maxSlides = Math.ceil(certificates.length / certificatesPerView);
      setCurrentCertificateSlide((prev) => (prev + 1) % maxSlides);
    }, 4000); // Change certificate slide every 4 seconds

    return () => clearInterval(timer);
  }, [certificates.length, certificatesPerView]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const nextCertificateSlide = () => {
    const maxSlides = Math.ceil(certificates.length / certificatesPerView);
    setCurrentCertificateSlide((prev) => (prev + 1) % maxSlides);
  };

  const prevCertificateSlide = () => {
    const maxSlides = Math.ceil(certificates.length / certificatesPerView);
    setCurrentCertificateSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  };
  const keyServices = [
    {
      icon: <Ship className="h-12 w-12 text-[#2B58A0]" />,
      title: 'Global Shipping',
      description: 'Seamless logistics across air, sea, and land routes worldwide',
    },
    {
      icon: <Users className="h-12 w-12 text-[#2B58A0]" />,
      title: 'Trusted Network',
      description: 'Partnered with verified suppliers and buyers globally',
    },
    {
      icon: <Zap className="h-12 w-12 text-[#2B58A0]" />,
      title: 'Fast & Reliable',
      description: 'Efficient processing and on-time delivery guaranteed',
    },
    {
      icon: <DollarSign className="h-12 w-12 text-[#2B58A0]" />,
      title: 'Competitive Pricing',
      description: 'Best market rates with transparent cost structures',
    },
  ];

  

  const whyChooseUs = [
    'Over 7 years of experience in global trade',
    'Comprehensive customs clearance and documentation support',
    'Real-time shipment tracking and transparency',
    '24/7 customer support across all time zones',
    'Flexible payment terms and competitive financing options',
    'Certified and compliant with international trade regulations',
  ];

  return (
    <div className="bg-white w-full overflow-x-hidden">
      <section className="relative text-white overflow-hidden w-full" style={{ minHeight: '600px' }}>
        {/* Slideshow Images */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url('${image}')` }}
          >
            {/* Dark overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
            {/* Left side - Content */}
            <div className="text-left">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 leading-tight text-white">
                {heroContent[currentSlide].title}
              </h1>
              <p className="text-sm md:text-base lg:text-lg text-red-400">
                {heroContent[currentSlide].description}
              </p>
            </div>
            
            {/* Right side - Empty space for image visibility */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold">
                <span className="text-[#2B58A0]">Welcome to</span>{' '}
                <span className="text-[#FF6F4E]">Aventora International</span>
              </h2>
              <p className="text-xl text-gray-700 font-semibold italic">
                Where excellence meets global trade.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are a trusted exporter of premium spices, Pluses, and compostable items, delivering quality and sustainability across global markets. At Aventora International, we believe in ethical sourcing, reliable service, and long-term partnerships that bring the essence of Indian excellence to the world.
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <img
                src="/images/welcome ni baju ma.jpg"
                alt="Aventora International"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600">Your success is our priority</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="flex items-start space-x-3 bg-white p-6 rounded-lg shadow-sm">
                <Shield className="h-6 w-6 text-[#FF6F4E] flex-shrink-0 mt-1" />
                <p className="text-gray-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Featured Products</h2>
            <p className="text-lg text-gray-600">Premium quality products for global markets</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Spices Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative overflow-hidden">
                <img 
                  src="/images/Spices Profile.jpg" 
                  alt="Premium Spices" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Spices</h3>
                <p className="text-gray-600 mb-4">
                  Authentic Indian spices known for their rich aroma, vibrant color, and exceptional quality. 
                  From ground spices to whole spices and spice blends.
                </p>
                <Link 
                  to="/products/spices" 
                  className="text-[#2B58A0] hover:text-[#FF6F4E] font-semibold inline-flex items-center transition-colors"
                >
                  Explore Spices →
                </Link>
              </div>
            </div>

            {/* Rice Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative overflow-hidden">
                <img 
                  src="/images/Rice Profile.jpg" 
                  alt="Premium Rice" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Rice</h3>
                <p className="text-gray-600 mb-4">
                  Premium Basmati and Non-Basmati rice varieties sourced from the finest paddy fields. 
                  Long grain, aromatic, and perfect for global cuisine.
                </p>
                <Link 
                  to="/products/rice" 
                  className="text-[#2B58A0] hover:text-[#FF6F4E] font-semibold inline-flex items-center transition-colors"
                >
                  Explore Rice →
                </Link>
              </div>
            </div>

            {/* Compostable Tableware Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative overflow-hidden">
                <img 
                  src="/images/CompostableTablewareProfile.png" 
                  alt="Compostable Tableware" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Compostable Tableware</h3>
                <p className="text-gray-600 mb-4">
                  Eco-friendly, biodegradable tableware made from sustainable materials. 
                  Perfect for environmentally conscious businesses and consumers.
                </p>
                <Link 
                  to="/products/compostable-tableware" 
                  className="text-[#2B58A0] hover:text-[#FF6F4E] font-semibold inline-flex items-center transition-colors"
                >
                  Explore Tableware →
                </Link>
              </div>
            </div>
          </div>

          {/* Show More Button */}
          <div className="text-center">
            <Link
              to="/products"
              className="bg-[#2B58A0] hover:bg-[#1e3f70] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg inline-block"
            >
              Show More Products
            </Link>
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              Aventora International is your trusted partner in global trade, specializing in seamless
              import and export solutions. With a commitment to excellence, we bridge markets across
              continents, ensuring your products reach their destination efficiently and reliably.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow text-center"
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section with Button Navigation */}
      <section className="py-16 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Certifications</h2>
            <p className="text-lg text-gray-600">
              Trusted and certified by leading authorities
            </p>
          </div>

          {/* Button-controlled carousel for all devices */}
          <div className="relative">
            {/* Navigation arrows */}
            <button
              onClick={prevCertificateSlide}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 md:p-3 rounded-full transition-all"
              aria-label="Previous certificate"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
            </button>
            <button
              onClick={nextCertificateSlide}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 md:p-3 rounded-full transition-all"
              aria-label="Next certificate"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
            </button>

            {/* Certificate display - responsive */}
            <div className="overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentCertificateSlide * (100 / certificatesPerView)}%)` }}
              >
                {certificates.map((cert, index) => (
                  <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-2 md:px-4">
                    <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 mx-auto h-48 md:h-64 flex items-center justify-center hover:shadow-xl transition-shadow">
                      <img 
                        src={cert.src}
                        alt={cert.alt}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: Math.ceil(certificates.length / certificatesPerView) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCertificateSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentCertificateSlide ? 'bg-[#FF6F4E] w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to certificate slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#2B58A0] to-[#1e3f70] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Globe className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Expand Your Global Reach?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Let's discuss how we can support your import and export needs
          </p>
          <div className="flex justify-center">
            <Link
              to="/contact"
              className="bg-[#FF6F4E] hover:bg-[#e55d3d] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg text-center"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
