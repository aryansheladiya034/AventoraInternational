import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package } from 'lucide-react';
import { productData } from '../data/products';

const ProductsOverview: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      
      <section className="relative text-white overflow-hidden" style={{ minHeight: '400px' }}>
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/All page photo2.jpg')` }}
        >
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Premium quality agricultural products, spices, and eco-friendly solutions 
              sourced globally and delivered with excellence
            </p>
            <div className="flex justify-center">
              <Package className="h-16 w-16 text-[#FF6F4E] animate-bounce" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
      </section>

      {/* Products Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productData.categories.map((category) => (
              <Link
                key={category.id}
                to={`/products/${category.slug}`}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-[#FF6F4E]"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-[#2B58A0] to-[#1e3f70] relative">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="text-4xl">{category.icon}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#2B58A0] transition-colors">
                      {category.name}
                    </h3>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-[#FF6F4E] transition-colors" />
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {category.subCategories.length} subcategories
                    </span>
                    <span className="text-sm font-medium text-[#2B58A0]">
                      View Products →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
            
            {/* Special Rice Card */}
            <Link
              to="/products/rice"
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-[#FF6F4E]"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-[#2B58A0] to-[#1e3f70] relative">
                <img
                  src="/images/Rice Profile.jpg"
                  alt="Rice"
                  className="w-full h-48 object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-[#FF6F4E] text-white px-2 py-1 rounded-full text-xs font-medium">
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#2B58A0] transition-colors">
                    Rice
                  </h3>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-[#FF6F4E] transition-colors" />
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  Premium Basmati and Non-Basmati rice varieties from India, 
                  including aromatic long-grain varieties perfect for export markets.
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Basmati & Non-Basmati varieties
                  </span>
                  <span className="text-sm font-medium text-[#2B58A0]">
                    Explore Rice →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Products?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#2B58A0] rounded-full flex items-center justify-center">
                <Package className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                All products undergo rigorous quality checks and meet international standards
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#FF6F4E] rounded-full flex items-center justify-center">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified & Compliant</h3>
              <p className="text-gray-600">
                FDA approved, organic certified, and compliant with international trade regulations
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#2B58A0] rounded-full flex items-center justify-center">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Competitive Pricing</h3>
              <p className="text-gray-600">
                Direct sourcing and efficient supply chain ensure competitive market prices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#2B58A0] to-[#1e3f70] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Place an Order?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Contact our team for custom quotes, bulk orders, or detailed product specifications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quote"
              className="bg-[#FF6F4E] hover:bg-[#e55d3d] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg text-center"
            >
              Request Quote
            </Link>
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-[#2B58A0] font-semibold px-8 py-4 rounded-lg transition-colors text-lg text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsOverview;