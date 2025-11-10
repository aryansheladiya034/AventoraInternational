import React from 'react';
import { Link } from 'react-router-dom';
import { Ship, Users, Zap, DollarSign, Package, Globe, Shield } from 'lucide-react';

const Home: React.FC = () => {
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

  const productCategories = [
    { title: 'Agriculture', description: 'Fresh produce, grains, and agricultural commodities' },
    { title: 'Textiles', description: 'Fabrics, garments, and textile materials' },
    { title: 'Machinery', description: 'Industrial equipment and machinery parts' },
    { title: 'Electronics', description: 'Consumer electronics and tech components' },
    { title: 'FMCG', description: 'Fast-moving consumer goods and packaged products' },
    { title: 'Raw Materials', description: 'Metals, minerals, and industrial raw materials' },
  ];

  const whyChooseUs = [
    'Over 18 years of experience in global trade',
    'Comprehensive customs clearance and documentation support',
    'Real-time shipment tracking and transparency',
    '24/7 customer support across all time zones',
    'Flexible payment terms and competitive financing options',
    'Certified and compliant with international trade regulations',
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-[#2B58A0] to-[#1e3f70] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Connecting the World Through Trade
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-100">
              Global Import and Export Solutions You Can Trust
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quote"
                className="bg-[#FF6F4E] hover:bg-[#e55d3d] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg shadow-lg text-center"
              >
                Get a Quote
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
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section className="py-16 bg-gray-50">
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

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Product Categories</h2>
            <p className="text-lg text-gray-600">
              We facilitate trade across diverse industries and product lines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <Link
                key={index}
                to="/products"
                className="border border-gray-200 rounded-xl p-6 hover:border-[#2B58A0] hover:shadow-lg transition-all cursor-pointer group block"
              >
                <div className="flex items-start space-x-4">
                  <Package className="h-8 w-8 text-[#FF6F4E] flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#2B58A0]">
                      {category.title}
                    </h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/products"
              className="bg-[#2B58A0] hover:bg-[#1e3f70] text-white font-semibold px-8 py-3 rounded-lg transition-colors inline-block"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

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

      <section className="py-16 bg-gradient-to-br from-[#2B58A0] to-[#1e3f70] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Globe className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Expand Your Global Reach?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Let's discuss how we can support your import and export needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-[#FF6F4E] hover:bg-[#e55d3d] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg text-center"
            >
              Contact Us Today
            </Link>
            <Link
              to="/services"
              className="bg-white hover:bg-gray-100 text-[#2B58A0] font-semibold px-8 py-4 rounded-lg transition-colors text-lg text-center"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
