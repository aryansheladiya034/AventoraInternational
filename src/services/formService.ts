import type { ContactFormData, QuoteFormData } from '../types';

// Static site form handling - opens default email client with pre-filled information
export const submitContactForm = async (data: ContactFormData): Promise<void> => {
  const subject = `Contact Form Submission from ${data.fullName}`;
  const body = `
Full Name: ${data.fullName}
Company: ${data.companyName || 'N/A'}
Email: ${data.email}
Phone: ${data.phone || 'N/A'}
Country: ${data.country || 'N/A'}

Message:
${data.message}
  `;
  
  const mailtoLink = `mailto:info@aventorainternational.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  // Open email client
  window.open(mailtoLink, '_blank');
  
  // Return a successful promise to maintain the async interface
  return Promise.resolve();
};

export const submitQuoteRequest = async (data: QuoteFormData): Promise<void> => {
  const subject = `Quote Request from ${data.fullName}`;
  const body = `
Full Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone || 'N/A'}

Quote Request Details:
Type: ${data.type}
Product Category: ${data.productCategory}
Quantity: ${data.quantity || 'N/A'}
Destination Country: ${data.destinationCountry || 'N/A'}

Message:
${data.message || 'No additional message'}
  `;
  
  const mailtoLink = `mailto:sales@aventorainternational.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  // Open email client
  window.open(mailtoLink, '_blank');
  
  // Return a successful promise to maintain the async interface
  return Promise.resolve();
};
