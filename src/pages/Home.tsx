import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Ship, Users, Zap, DollarSign,  Globe, Shield, ChevronLeft, ChevronRight } from 'lucide-react';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = [
    '/images/Home page1.jpg',
    '/images/Home page2.jpg',
    '/images/Home page3.jpg',
  ];

  const heroContent = [
    {
      title: 'Empowering global connections through export and import excellence.',
      description: 'Our mission is to simplify international trade by offering efficient, reliable, and tailored import-export solutions for our global partners.'
    },
    {
      title: 'Sustainable Choices, Better Future.',
      description: 'Discover our wide range of eco-friendly, biodegradable products crafted to protect the environment. Each product is designed to reduce waste, conserve resources, and support a greener, cleaner tomorrow.'
    },
    {
      title: 'Bringing authentic flavors from our land to your table.',
      description: 'We take pride in exporting superior-grade spices and agro products known for their aroma, flavor, and freshness. Every shipment from Aventora International carries the rich heritage of taste to homes and restaurants worldwide.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
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
    <div className="bg-white">
      <section className="relative text-white overflow-hidden" style={{ minHeight: '600px' }}>
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
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {heroContent[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-100">
              {heroContent[currentSlide].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="bg-[#FF6F4E] hover:bg-[#e55d3d] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg shadow-lg text-center"
              >
                View Our Products
              </Link>
              <Link
                to="/contact"
                className="bg-white hover:bg-gray-100 text-[#2B58A0] font-semibold px-8 py-4 rounded-lg transition-colors text-lg shadow-lg text-center"
              >
                Contact Us
              </Link>
            </div>
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
              <h2 className="text-4xl md:text-6xl font-extrabold">
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
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600">Your success is our priority</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm">
                <Shield className="h-7 w-7 text-[#FF6F4E] flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-base">{reason}</p>
              </div>
            ))}
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

      {/* Certificates Section with Scrolling Animation */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Certifications</h2>
            <p className="text-lg text-gray-600">
              Trusted and certified by leading authorities
            </p>
          </div>

          {/* Scrolling Container */}
          <div className="relative">
            <div className="flex animate-scroll-certificates space-x-8">
              {/* First set of certificates */}
              <div className="flex space-x-8 flex-shrink-0">
                <div className="w-64 h-64 bg-white rounded-xl shadow-lg p-6 flex items-center justify-center hover:shadow-2xl transition-shadow">
                  <img 
                    src="/images/CErtificate/APEDA.png" 
                    alt="APEDA Certificate" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="w-64 h-64 bg-white rounded-xl shadow-lg p-6 flex items-center justify-center hover:shadow-2xl transition-shadow">
                  <img 
                    src="/images/CErtificate/msme.jpg" 
                    alt="MSME Certificate" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="w-64 h-64 bg-white rounded-xl shadow-lg p-6 flex items-center justify-center hover:shadow-2xl transition-shadow">
                  <img 
                    src="/images/CErtificate/dgft.jpg" 
                    alt="DGFT Certificate" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="w-64 h-64 bg-white rounded-xl shadow-lg p-6 flex items-center justify-center hover:shadow-2xl transition-shadow">
                  <img 
                    src="/images/CErtificate/FSSAI.png" 
                    alt="FSSAI Certificate" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="w-64 h-64 bg-white rounded-xl shadow-lg p-6 flex items-center justify-center hover:shadow-2xl transition-shadow">
                  <img 
                    src="/images/CErtificate/Make in India.jpg" 
                    alt="Make in India Certificate" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex space-x-8 flex-shrink-0">
                <div className="w-64 h-64 bg-white rounded-xl shadow-lg p-6 flex items-center justify-center hover:shadow-2xl transition-shadow">
                  <img 
                    src="/images/CErtificate/APEDA.png" 
                    alt="APEDA Certificate" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="w-64 h-64 bg-white rounded-xl shadow-lg p-6 flex items-center justify-center hover:shadow-2xl transition-shadow">
                  <img 
                    src="/images/CErtificate/msme.jpg" 
                    alt="MSME Certificate" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="w-64 h-64 bg-white rounded-xl shadow-lg p-6 flex items-center justify-center hover:shadow-2xl transition-shadow">
                  <img 
                    src="/images/CErtificate/dgft.jpg" 
                    alt="DGFT Certificate" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="w-64 h-64 bg-white rounded-xl shadow-lg p-6 flex items-center justify-center hover:shadow-2xl transition-shadow">
                  <img 
                    src="/images/CErtificate/FSSAI.png" 
                    alt="FSSAI Certificate" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="w-64 h-64 bg-white rounded-xl shadow-lg p-6 flex items-center justify-center hover:shadow-2xl transition-shadow">
                  <img 
                    src="/images/CErtificate/Make in India.jpg" 
                    alt="Make in India Certificate" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
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
