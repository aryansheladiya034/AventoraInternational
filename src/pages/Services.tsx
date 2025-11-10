import React from 'react';
import { Link } from 'react-router-dom';
import { Ship, Plane, Truck, FileCheck, Warehouse, ArrowRightLeft, ChevronRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <ArrowRightLeft className="h-16 w-16 text-[#2B58A0]" />,
      title: 'Import Services',
      description:
        'Comprehensive import solutions tailored to your business needs. We handle sourcing, quality control, documentation, and delivery of products from global suppliers to your doorstep.',
      features: [
        'Global supplier network and sourcing',
        'Quality inspection and verification',
        'Import documentation and compliance',
        'Door-to-door delivery coordination',
      ],
    },
    {
      icon: <ArrowRightLeft className="h-16 w-16 text-[#2B58A0] transform rotate-180" />,
      title: 'Export Services',
      description:
        'Expand your market reach with our expert export services. We facilitate smooth product movement from your location to international buyers, ensuring compliance and timely delivery.',
      features: [
        'Market research and buyer connections',
        'Export documentation and licensing',
        'Packaging and labeling compliance',
        'International payment facilitation',
      ],
    },
    {
      icon: <FileCheck className="h-16 w-16 text-[#2B58A0]" />,
      title: 'Customs Clearance and Documentation',
      description:
        'Navigate complex customs regulations with ease. Our experienced team handles all paperwork, ensures compliance, and expedites clearance processes at borders and ports.',
      features: [
        'Complete customs documentation',
        'Tariff classification and valuation',
        'Duty calculation and payment',
        'Regulatory compliance verification',
      ],
    },
    {
      icon: <Ship className="h-16 w-16 text-[#2B58A0]" />,
      title: 'Freight Forwarding',
      description:
        'Reliable freight solutions across air, sea, and land. We optimize routes, negotiate rates, and ensure your cargo reaches its destination safely and on schedule.',
      features: [
        'Air freight for urgent shipments',
        'Sea freight for bulk cargo',
        'Land transport and trucking',
        'Multi-modal logistics coordination',
      ],
      subIcons: [
        <Plane key="plane" className="h-8 w-8 text-[#FF6F4E]" />,
        <Ship key="ship" className="h-8 w-8 text-[#FF6F4E]" />,
        <Truck key="truck" className="h-8 w-8 text-[#FF6F4E]" />,
      ],
    },
    {
      icon: <Warehouse className="h-16 w-16 text-[#2B58A0]" />,
      title: 'Warehousing and Distribution',
      description:
        'Secure storage and efficient distribution services. Our strategically located facilities and distribution network ensure your products are stored safely and delivered promptly.',
      features: [
        'Climate-controlled storage facilities',
        'Inventory management systems',
        'Order fulfillment and processing',
        'Last-mile delivery coordination',
      ],
    },
  ];

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-[#2B58A0] to-[#1e3f70] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Comprehensive logistics and trade solutions designed to streamline your global operations
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            At Aventora International, we provide end-to-end logistics and trade management services.
            From initial sourcing to final delivery, our integrated approach ensures efficiency,
            compliance, and peace of mind throughout your supply chain journey.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center`}
              >
                <div className="flex-1">
                  <div className="bg-gray-50 rounded-2xl p-8 h-full">
                    <div className="flex justify-center mb-6">{service.icon}</div>
                    {service.subIcons && (
                      <div className="flex justify-center space-x-4 mb-6">{service.subIcons}</div>
                    )}
                  </div>
                </div>

                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">{service.description}</p>

                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <ChevronRight className="h-6 w-6 text-[#FF6F4E] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Why Choose Our Services?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#2B58A0] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    End-to-End Solutions
                  </h3>
                  <p className="text-gray-600">
                    Single-point contact for all your import, export, and logistics needs
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#2B58A0] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
                  <p className="text-gray-600">
                    Experienced professionals with deep knowledge of international trade
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#2B58A0] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Technology-Driven
                  </h3>
                  <p className="text-gray-600">
                    Real-time tracking and digital documentation for complete transparency
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#2B58A0] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Cost-Effective
                  </h3>
                  <p className="text-gray-600">
                    Competitive rates without compromising on service quality
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#2B58A0] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Request a quote or contact us to discuss your specific requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quote"
              className="bg-[#FF6F4E] hover:bg-[#e55d3d] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg text-center"
            >
              Request a Quote
            </Link>
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-[#2B58A0] font-semibold px-8 py-4 rounded-lg transition-colors text-lg text-center"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
