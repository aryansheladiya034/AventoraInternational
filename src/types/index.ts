export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  origin?: string;
  destination?: string;
}

export interface ContactFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  message: string;
}

export interface QuoteFormData {
  type: 'import' | 'export';
  productCategory: string;
  quantity: string;
  destinationCountry: string;
  message: string;
  fullName: string;
  email: string;
  phone: string;
}
