import React, { useState } from 'react';
import { FileText, Send } from 'lucide-react';
import type { QuoteFormData } from '../types';

interface QuoteProps {
  onSubmit: (data: QuoteFormData) => Promise<void>;
}

const Quote: React.FC<QuoteProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    type: 'import',
    productCategory: '',
    quantity: '',
    destinationCountry: '',
    message: '',
    fullName: '',
    email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const productCategories = [
    'Agriculture',
    'Textiles',
    'Machinery',
    'Electronics',
    'FMCG',
    'Raw Materials',
    'Other',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
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
        type: 'import',
        productCategory: '',
        quantity: '',
        destinationCountry: '',
        message: '',
        fullName: '',
        email: '',
        phone: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-[#2B58A0] to-[#1e3f70] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FileText className="h-16 w-16 mx-auto mb-4 opacity-90" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Request a Quote</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Get a customized quote for your import or export needs
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Tell Us About Your Requirements
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Fill out the form below and our team will provide you with a detailed quote within 24-48
              hours
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Service Type *
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, type: 'import' })}
                    className={`p-4 border-2 rounded-lg font-semibold transition-all ${formData.type === 'import'
                        ? 'border-[#2B58A0] bg-[#2B58A0] text-white'
                        : 'border-gray-300 bg-white text-gray-700 hover:border-[#2B58A0]'
                      }`}
                  >
                    Import
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, type: 'export' })}
                    className={`p-4 border-2 rounded-lg font-semibold transition-all ${formData.type === 'export'
                        ? 'border-[#2B58A0] bg-[#2B58A0] text-white'
                        : 'border-gray-300 bg-white text-gray-700 hover:border-[#2B58A0]'
                      }`}
                  >
                    Export
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="productCategory" className="block text-sm font-semibold text-gray-700 mb-2">
                  Product Category *
                </label>
                <select
                  id="productCategory"
                  name="productCategory"
                  value={formData.productCategory}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2B58A0] focus:border-transparent outline-none transition-colors bg-white"
                >
                  <option value="">Select a category</option>
                  {productCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="quantity" className="block text-sm font-semibold text-gray-700 mb-2">
                  Quantity / Weight *
                </label>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2B58A0] focus:border-transparent outline-none transition-colors"
                  placeholder="e.g., 1000 kg, 50 containers, 10 pallets"
                />
              </div>

              <div>
                <label htmlFor="destinationCountry" className="block text-sm font-semibold text-gray-700 mb-2">
                  {formData.type === 'import' ? 'Origin Country' : 'Destination Country'} *
                </label>
                <input
                  type="text"
                  id="destinationCountry"
                  name="destinationCountry"
                  value={formData.destinationCountry}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2B58A0] focus:border-transparent outline-none transition-colors"
                  placeholder="Enter country name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2B58A0] focus:border-transparent outline-none transition-colors resize-none"
                  placeholder="Tell us more about your requirements, timeline, special handling needs, etc."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800">
                  Thank you! Your email client should open with your quote request pre-filled. If it doesn't open automatically, please email us at sales@aventorainternational.com
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
                className="w-full bg-[#FF6F4E] hover:bg-[#e55d3d] text-white font-semibold px-8 py-4 rounded-lg transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'Submitting...' : 'Request Quote'}</span>
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>

          <div className="mt-8 bg-[#2B58A0] rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
            <p className="mb-4">
              Our team is available 24/7 to answer your questions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15551234567"
                className="bg-white text-[#2B58A0] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Call: +91 76981 07075
              </a>
              <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF6F4E] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#e55d3d] transition-colors"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;
