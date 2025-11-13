import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Award, Users, Globe, TrendingUp, Package, Smile, Calendar } from 'lucide-react';

const About: React.FC = () => {
  const coreValues = [
    {
      icon: <Award className="h-10 w-10 text-[#FF6F4E]" />,
      title: 'Excellence',
      description: 'We strive for excellence in every transaction and relationship',
    },
    {
      icon: <Users className="h-10 w-10 text-[#FF6F4E]" />,
      title: 'Partnership',
      description: 'Building long-term relationships based on trust and mutual success',
    },
    {
      icon: <Globe className="h-10 w-10 text-[#FF6F4E]" />,
      title: 'Global Perspective',
      description: 'Understanding diverse markets and cultural nuances worldwide',
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-[#FF6F4E]" />,
      title: 'Innovation',
      description: 'Leveraging technology and innovation to streamline trade processes',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative text-white overflow-hidden" style={{ minHeight: '400px' }}>
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/Baki na pages ma.jpg')` }}
        >
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">About Us</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Your trusted partner in global trade since 2019
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Increase your international business with us — Aventora International is proudly recognized by our valued global customers as a trusted and reputed international trading company known for its quality, integrity, and reliability.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Established in 2019 in Surat, Gujarat (India), Aventora International is a leading exporter and supplier of premium spices, pulses, rice, and eco-friendly compostable items. With a strong commitment to excellence, we ensure that every product we deliver meets global quality standards and aligns perfectly with our clients' expectations across international markets.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our operations are built on ethical sourcing, efficient logistics, and long-term partnerships. We continuously strive to expand our reach by offering consistent quality, sustainable solutions, and personalized service.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We aim to strengthen our position in the global marketplace and contribute to sustainable international trade, connecting India's finest products with the world.
              </p>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/animation_lkkr6r5o_medium.gif" 
                  alt="Team Collaboration and Business Growth" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-center space-x-4 mb-6">
                <Target className="h-12 w-12 text-[#2B58A0]" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To facilitate seamless international trade by providing reliable, efficient, and
                customer-focused import and export solutions that empower businesses to thrive in the
                global marketplace.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-center space-x-4 mb-6">
                <Eye className="h-12 w-12 text-[#2B58A0]" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the world's most trusted and innovative trade partner, recognized for excellence
                in connecting markets, fostering sustainable growth, and creating lasting value for our
                clients and partners worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">
              Principles that guide every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="text-center bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Achievements</h2>
            <p className="text-lg text-black">
              Delivering excellence in global trade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#2B58A0] rounded-xl p-8 text-center shadow-xl hover:shadow-2xl transition-shadow transform hover:-translate-y-1 duration-300 text-white">
              <div className="flex justify-center mb-4">
                <Package className="h-16 w-16 text-[#FF6F4E]" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">120+</h3>
              <p className="text-xl font-semibold text-white mb-2">Consignments</p>
              <p className="text-white">Successfully delivered worldwide</p>
            </div>

            <div className="bg-[#2B58A0] rounded-xl p-8 text-center shadow-xl hover:shadow-2xl transition-shadow transform hover:-translate-y-1 duration-300 text-white ">
              <div className="flex justify-center mb-4">
                <Smile className="h-16 w-16 text-[#FF6F4E]" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">40+</h3>
              <p className="text-xl font-semibold text-white mb-2">Happy Buyers</p>
              <p className="text-white">Trusted partners globally</p>
            </div>

            <div className="bg-[#2B58A0] rounded-xl p-8 text-center shadow-xl hover:shadow-2xl transition-shadow transform hover:-translate-y-1 duration-300 text-white">
              <div className="flex justify-center mb-4">
                <Calendar className="h-16 w-16 text-[#FF6F4E]" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">7+</h3>
              <p className="text-xl font-semibold text-white mb-2">Years of Experience</p>
              <p className="text-white">In international trade</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#2B58A0] to-[#1e3f70] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Discover how Aventora International can support your global trade goals
          </p>
          <Link
            to="/contact"
            className="bg-orange-400 hover:bg-white text-white hover:text-orange-400  font-semibold px-8 py-4 rounded-lg transition-colors text-lg inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
