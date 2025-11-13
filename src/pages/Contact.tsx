import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Send, Twitter } from 'lucide-react';
import type { ContactFormData } from '../types';

interface ContactProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
}

const Contact: React.FC<ContactProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await onSubmit(formData);
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        country: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/Baki na pages ma.jpg')` }}
        >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Contact Us</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Get in touch with our team to discuss your global trade needs
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2B58A0] focus:border-transparent outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="companyName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2B58A0] focus:border-transparent outline-none transition-colors"
                    placeholder="Your Company Ltd."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2B58A0] focus:border-transparent outline-none transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2B58A0] focus:border-transparent outline-none transition-colors"
                      placeholder="+91 76981 07075"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-2">
                    Country *
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2B58A0] focus:border-transparent outline-none transition-colors"
                    placeholder="United States"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2B58A0] focus:border-transparent outline-none transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800">
                    Message received! Our team will get back to you as soon as possible.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
                    Something went wrong. Please try again or contact us directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#2B58A0] hover:bg-[#1e3f70] text-white font-semibold px-8 py-4 rounded-lg transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#2B58A0] p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:info@aventorainternational.com"
                      className="text-gray-600 hover:text-[#2B58A0] transition-colors"
                    >
                      info@aventorainternational.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#2B58A0] p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+91 76981 07075</p>
                    
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#2B58A0] p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">A-216, Royal Plaza</p>
                    <p className="text-gray-600">Bapasitaram Chowk, BTRS Road</p>
                    <p className="text-gray-600">Simada Gam, Surat - 395006</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#25D366] p-3 rounded-lg text-white">
                    <svg 
        className="h-7 w-7" 
        viewBox="0 0 24 24" 
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/917698107075"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#25D366] transition-colors"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/company/aventora-international/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#2B58A0] p-3 rounded-lg hover:bg-[#1e3f70] transition-colors"
                  >
                    <Linkedin className="h-6 w-6 text-white" />
                  </a>
                  <a
                    href="https://www.facebook.com/share/1CpizuzXR7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#2B58A0] p-3 rounded-lg hover:bg-[#1e3f70] transition-colors"
                  >
                    <Facebook className="h-6 w-6 text-white" />
                  </a>
                  <a
                    href="https://www.instagram.com/aventora_international?igsh=dDd0d2ttbjU4ejVi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#2B58A0] p-3 rounded-lg hover:bg-[#1e3f70] transition-colors"
                  >
                    <Instagram className="h-6 w-6 text-white" />
                  </a>
                   <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#2B58A0] p-3 rounded-lg hover:bg-[#1e3f70] transition-colors"
            aria-label="X (Twitter)"
          >
            <Twitter className="h-6 w-6 text-white"  />
          </a>
                </div>
              </div>

              <div className="mt-8 rounded-xl overflow-hidden shadow-lg h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986548248684!3d40.69714941680757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Aventora International Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
