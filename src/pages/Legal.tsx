import React from 'react';
import { Shield, FileText, HelpCircle } from 'lucide-react';

interface LegalProps {
  page: 'privacy' | 'terms' | 'faq';
}

const Legal: React.FC<LegalProps> = ({ page }) => {
  if (page === 'privacy') {
    return (
      <div className="bg-white">
        <section className="bg-gradient-to-br from-[#2B58A0] to-[#1e3f70] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Shield className="h-16 w-16 mx-auto mb-4 opacity-90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-100">Last updated: January 2025</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
            <h2>1. Introduction</h2>
            <p>
              Aventora International is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you visit
              our website or use our services.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul>
              <li>Name, email address, phone number, and company information</li>
              <li>Details about your import/export requirements</li>
              <li>Communication preferences and correspondence with us</li>
              <li>Payment and billing information for our services</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process your transactions and send related information</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you technical notices, updates, and administrative messages</li>
              <li>Communicate with you about products, services, and events</li>
            </ul>

            <h2>4. Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share
              your information with:
            </p>
            <ul>
              <li>Service providers who assist in our operations</li>
              <li>Customs and regulatory authorities as required by law</li>
              <li>Shipping partners and logistics providers to fulfill your orders</li>
            </ul>

            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access and receive a copy of your personal data</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your personal data</li>
              <li>Object to or restrict processing of your information</li>
            </ul>

            <h2>7. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at
              privacy@aventorainternational.com
            </p>
          </div>
        </section>
      </div>
    );
  }

  if (page === 'terms') {
    return (
      <div className="bg-white">
        <section className="bg-gradient-to-br from-[#2B58A0] to-[#1e3f70] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FileText className="h-16 w-16 mx-auto mb-4 opacity-90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms & Conditions</h1>
            <p className="text-xl text-gray-100">Last updated: January 2025</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the services of Aventora International, you accept and agree to
              be bound by the terms and provisions of this agreement.
            </p>

            <h2>2. Services Description</h2>
            <p>
              Aventora International provides import and export facilitation services, including but
              not limited to freight forwarding, customs clearance, warehousing, and distribution
              services.
            </p>

            <h2>3. User Responsibilities</h2>
            <p>As a user of our services, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Ensure that your products meet all legal requirements</li>
              <li>Pay all fees and charges as agreed</li>
            </ul>

            <h2>4. Pricing and Payment</h2>
            <p>
              Prices for our services are quoted based on the information you provide. Payment terms
              will be specified in your service agreement. We reserve the right to adjust pricing
              based on changes in circumstances.
            </p>

            <h2>5. Limitation of Liability</h2>
            <p>
              Aventora International will not be liable for any indirect, incidental, special, or
              consequential damages arising from the use of our services. Our liability is limited to
              the fees paid for the specific service in question.
            </p>

            <h2>6. Force Majeure</h2>
            <p>
              We shall not be liable for any failure to perform our obligations due to circumstances
              beyond our reasonable control, including natural disasters, acts of government, strikes,
              or other labor disputes.
            </p>

            <h2>7. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and software, is the
              property of Aventora International and protected by copyright and intellectual property
              laws.
            </p>

            <h2>8. Termination</h2>
            <p>
              Either party may terminate services with written notice as specified in the service
              agreement. Outstanding obligations remain in effect after termination.
            </p>

            <h2>9. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with international trade
              laws and the laws of the jurisdiction where services are performed.
            </p>

            <h2>10. Contact Information</h2>
            <p>
              For questions about these Terms & Conditions, contact us at
              legal@aventorainternational.com
            </p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-[#2B58A0] to-[#1e3f70] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle className="h-16 w-16 mx-auto mb-4 opacity-90" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-100">Find answers to common questions</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What services does Aventora International provide?
              </h3>
              <p className="text-gray-700">
                We provide comprehensive import and export services including freight forwarding (air,
                sea, and land), customs clearance and documentation, warehousing and distribution, and
                end-to-end supply chain management.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Which countries do you operate in?
              </h3>
              <p className="text-gray-700">
                We operate globally with partnerships in over 50 countries across North America, South
                America, Europe, Asia, Africa, and the Middle East. Our extensive network allows us to
                facilitate trade to virtually any destination.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How long does shipping typically take?
              </h3>
              <p className="text-gray-700">
                Shipping times vary based on origin, destination, and shipping method. Air freight
                typically takes 3-7 days, sea freight 20-45 days, and land transport 5-15 days. We
                provide specific timelines in your quote based on your requirements.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do you handle customs clearance?
              </h3>
              <p className="text-gray-700">
                Yes, we provide complete customs clearance services. Our team handles all documentation,
                tariff classification, duty calculation, and compliance verification to ensure smooth
                passage through customs at all borders and ports.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How is pricing determined?</h3>
              <p className="text-gray-700">
                Pricing is based on several factors including product type, weight/volume, origin and
                destination, shipping method, and any special handling requirements. Request a quote
                through our website for a detailed cost breakdown specific to your needs.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can I track my shipment in real-time?
              </h3>
              <p className="text-gray-700">
                Yes, we provide real-time tracking for all shipments. Once your shipment is in transit,
                you'll receive tracking information and can monitor its progress through our online
                system or by contacting our customer support team.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What documentation do I need to provide?
              </h3>
              <p className="text-gray-700">
                Required documents vary by product and destination but typically include commercial
                invoice, packing list, bill of lading, and any product-specific certifications. Our
                team will provide you with a complete checklist based on your specific shipment.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you offer insurance?</h3>
              <p className="text-gray-700">
                Yes, we offer comprehensive cargo insurance to protect your shipment against loss or
                damage during transit. Insurance coverage and costs are included in your service quote.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What are your payment terms?
              </h3>
              <p className="text-gray-700">
                Payment terms are flexible and determined based on your service agreement. We accept
                various payment methods and can offer customized payment plans for long-term
                partnerships. Contact us to discuss options that work for your business.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How do I get started with Aventora International?
              </h3>
              <p className="text-gray-700">
                Simply request a quote through our website or contact our team directly. We'll discuss
                your requirements, provide a detailed quote, and guide you through the entire process
                from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Legal;
