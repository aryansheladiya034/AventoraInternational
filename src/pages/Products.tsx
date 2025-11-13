import React, { useState } from 'react';
import { Wheat, Shirt, Cog, Smartphone, ShoppingBag, Gem, X } from 'lucide-react';

interface ProductsProps {
  onNavigate: (page: string) => void;
}

interface ProductDetail {
  title: string;
  description: string;
  subcategories: string[];
  origins: string[];
  destinations: string[];
}

const Products: React.FC<ProductsProps> = ({ onNavigate }) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(null);

  const productCategories = [
    {
      icon: <Wheat className="h-12 w-12" />,
      title: 'Agriculture',
      shortDescription: 'Fresh produce, grains, and agricultural commodities',
      detail: {
        title: 'Agriculture',
        description:
          'We facilitate trade in a wide range of agricultural products, ensuring quality and freshness throughout the supply chain. Our expertise includes temperature-controlled logistics and compliance with phytosanitary regulations.',
        subcategories: [
          'Fresh Fruits and Vegetables',
          'Grains and Cereals',
          'Spices and Herbs',
          'Coffee and Tea',
          'Nuts and Seeds',
        ],
        origins: ['India', 'Brazil', 'USA', 'Vietnam', 'Argentina'],
        destinations: ['Europe', 'Middle East', 'Asia', 'North America'],
      },
    },
    {
      icon: <Shirt className="h-12 w-12" />,
      title: 'Textiles',
      shortDescription: 'Fabrics, garments, and textile materials',
      detail: {
        title: 'Textiles',
        description:
          'From raw materials to finished garments, we handle textile trade with attention to quality standards and compliance with international textile regulations.',
        subcategories: [
          'Cotton and Fabric',
          'Ready-made Garments',
          'Home Textiles',
          'Technical Textiles',
          'Yarn and Thread',
        ],
        origins: ['Bangladesh', 'India', 'China', 'Turkey', 'Pakistan'],
        destinations: ['USA', 'Europe', 'Australia', 'Middle East'],
      },
    },
    {
      icon: <Cog className="h-12 w-12" />,
      title: 'Machinery',
      shortDescription: 'Industrial equipment and machinery parts',
      detail: {
        title: 'Machinery',
        description:
          'Specialized handling of heavy machinery and industrial equipment. We provide custom crating, insurance, and installation coordination for complex machinery shipments.',
        subcategories: [
          'Manufacturing Equipment',
          'Agricultural Machinery',
          'Construction Equipment',
          'Spare Parts and Components',
          'Industrial Tools',
        ],
        origins: ['Germany', 'Japan', 'USA', 'South Korea', 'Italy'],
        destinations: ['Global Markets', 'Emerging Economies', 'Industrial Zones'],
      },
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: 'Electronics',
      shortDescription: 'Consumer electronics and tech components',
      detail: {
        title: 'Electronics',
        description:
          'Secure and efficient trade in electronics with proper handling, insurance, and compliance with international electronic standards and certifications.',
        subcategories: [
          'Consumer Electronics',
          'Computer Components',
          'Telecommunications Equipment',
          'Electronic Accessories',
          'Industrial Electronics',
        ],
        origins: ['China', 'Taiwan', 'South Korea', 'Japan', 'USA'],
        destinations: ['Global Markets', 'Retail Chains', 'Distributors'],
      },
    },
    {
      icon: <ShoppingBag className="h-12 w-12" />,
      title: 'FMCG',
      shortDescription: 'Fast-moving consumer goods and packaged products',
      detail: {
        title: 'Fast-Moving Consumer Goods',
        description:
          'Efficient supply chain management for FMCG products with focus on shelf-life management, proper storage, and timely delivery to retail and distribution networks.',
        subcategories: [
          'Food and Beverages',
          'Personal Care Products',
          'Household Items',
          'Packaged Foods',
          'Health and Beauty',
        ],
        origins: ['Global Manufacturers', 'Brand Authorized Sources'],
        destinations: ['Retail Chains', 'Distributors', 'E-commerce Platforms'],
      },
    },
    {
      icon: <Gem className="h-12 w-12" />,
      title: 'Raw Materials',
      shortDescription: 'Metals, minerals, and industrial raw materials',
      detail: {
        title: 'Raw Materials',
        description:
          'Bulk handling and trading of raw materials with expertise in commodity markets, quality verification, and compliance with international trade standards.',
        subcategories: [
          'Metals and Alloys',
          'Minerals and Ores',
          'Chemicals',
          'Plastics and Polymers',
          'Building Materials',
        ],
        origins: ['Australia', 'Chile', 'South Africa', 'Canada', 'Russia'],
        destinations: ['Manufacturing Hubs', 'Industrial Centers', 'Construction Markets'],
      },
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section with Background Image */}
      
      <section className="relative text-white overflow-hidden" style={{ minHeight: '400px' }}>
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/Baki na pages ma.jfif')` }}
        >
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Our Products</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Trade facilitation across diverse industries and product categories
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#2B58A0] hover:shadow-xl transition-all cursor-pointer group"
                onClick={() => setSelectedProduct(category.detail)}
              >
                <div className="text-[#FF6F4E] mb-4 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#2B58A0]">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">{category.shortDescription}</p>
                <button className="text-[#2B58A0] font-semibold hover:text-[#FF6F4E] transition-colors">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h2 className="text-3xl font-bold text-gray-900">{selectedProduct.title}</h2>
              <button
                onClick={() => setSelectedProduct(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            <div className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {selectedProduct.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Subcategories</h3>
                  <ul className="space-y-2">
                    {selectedProduct.subcategories.map((sub, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-[#FF6F4E] mt-1">•</span>
                        <span className="text-gray-700">{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Origins</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedProduct.origins.map((origin, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-[#FF6F4E] mt-1">•</span>
                        <span className="text-gray-700">{origin}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Destination Markets
                  </h3>
                  <ul className="space-y-2">
                    {selectedProduct.destinations.map((dest, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-[#FF6F4E] mt-1">•</span>
                        <span className="text-gray-700">{dest}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <p className="text-gray-700 mb-4">
                  Interested in trading {selectedProduct.title.toLowerCase()} products?
                </p>
                <button
                  onClick={() => {
                    setSelectedProduct(null);
                    onNavigate('quote');
                  }}
                  className="bg-[#2B58A0] hover:bg-[#1e3f70] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                >
                  Request a Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Don't See Your Product?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            We handle a wide variety of products beyond these categories. Contact us to discuss your
            specific trade requirements.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-[#2B58A0] hover:bg-[#1e3f70] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Products;
