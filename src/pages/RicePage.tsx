import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, Home, ChevronRight, Star } from 'lucide-react';
import { riceData } from '../data/riceData';

const RicePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#2B58A0] transition-colors">
              <Home className="h-4 w-4" />
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/products" className="hover:text-[#2B58A0] transition-colors">
              Products
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900 font-medium">Rice</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2B58A0] to-[#1e3f70] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <span className="text-8xl mr-6">🌾</span>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Premium Rice Varieties
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
                World-class Basmati and Non-Basmati rice varieties from India, 
                renowned for their aroma, texture, and exceptional quality
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Star className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-100">Export-grade rice with authentic aroma and long grains</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Package className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Multiple Varieties</h3>
              <p className="text-gray-100">Basmati and Non-Basmati varieties for different markets</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <svg className="h-12 w-12 text-blue-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Certified Processing</h3>
              <p className="text-gray-100">FDA approved and international quality standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rice Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {riceData.sections.map((section, sectionIndex) => (
            <div key={section.id} className={`mb-20 ${sectionIndex > 0 ? 'pt-20 border-t border-gray-200' : ''}`}>
              {/* Section Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {section.name}
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {section.description}
                </p>
              </div>

              {/* Rice Varieties */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {section.varieties.map((variety) => (
                  <div
                    key={variety.id}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
                  >
                    <div className="bg-gradient-to-r from-[#2B58A0] to-[#1e3f70] text-white p-6">
                      <h3 className="text-2xl font-bold mb-2">{variety.name}</h3>
                      <p className="text-gray-100">{variety.description}</p>
                    </div>
                    
                    <div className="p-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {variety.products.map((product) => (
                          <Link
                            key={product.id}
                            to={`/products/rice/${product.slug}`}
                            className="group flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                          >
                            <div className="flex items-center">
                              <div className="w-10 h-10 bg-[#FF6F4E] rounded-lg flex items-center justify-center mr-3">
                                <Package className="h-5 w-5 text-white" />
                              </div>
                              <div>
                                <p className="font-medium text-gray-900 text-sm group-hover:text-[#2B58A0] transition-colors">
                                  {product.name}
                                </p>
                              </div>
                            </div>
                            <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-[#FF6F4E] transition-colors" />
                          </Link>
                        ))}
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">
                            {variety.products.length} varieties available
                          </span>
                          <span className="text-[#2B58A0] font-medium">
                            View All Products →
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Rice Processing Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Rice Processing
            </h2>
            <p className="text-xl text-gray-600">
              Understanding the different processing methods for superior quality rice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🌾</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">RAW Rice</h3>
              <p className="text-gray-600 text-sm">
                Natural milling without parboiling, retains original texture and cooking properties
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">♨️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">STEAM Rice</h3>
              <p className="text-gray-600 text-sm">
                Steam-processed for enhanced nutritional value and improved shelf life
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">GOLDEN SELLA</h3>
              <p className="text-gray-600 text-sm">
                Parboiled with golden color, retains nutrients and has longer cooking time
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">⚪</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">WHITE SELLA</h3>
              <p className="text-gray-600 text-sm">
                Parboiled and polished for white appearance with enhanced durability
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Quality Assurance
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our rice undergoes stringent quality checks at every stage, from sourcing to packaging, 
                ensuring only the finest grains reach international markets.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Laboratory Testing</h4>
                    <p className="text-gray-600">Comprehensive analysis for purity, moisture content, and grain quality</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">International Standards</h4>
                    <p className="text-gray-600">Compliance with FDA, EU, and other international food safety standards</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Traceability</h4>
                    <p className="text-gray-600">Complete supply chain tracking from farm to export</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/api/placeholder/600/400"
                alt="Rice Quality Testing"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#2B58A0] to-[#1e3f70] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Import Premium Indian Rice
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Get competitive pricing for bulk orders and explore our complete rice portfolio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quote"
              className="bg-[#FF6F4E] hover:bg-[#e55d3d] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg text-center"
            >
              Request Rice Quote
            </Link>
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-[#2B58A0] font-semibold px-8 py-4 rounded-lg transition-colors text-lg text-center"
            >
              Contact Rice Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RicePage;