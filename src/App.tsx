import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ProductsOverview from './pages/ProductsOverview';
import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import RicePage from './pages/RicePage';
import RiceProductDetailPage from './pages/RiceProductDetailPage';
import SubCategoryPage from './pages/SubCategoryPage';
import Contact from './pages/Contact';
import Quote from './pages/Quote';
import Legal from './pages/Legal';
import { submitContactForm, submitQuoteRequest } from './services/formService';
import type { ContactFormData, QuoteFormData } from './types';

function App() {
  const handleContactSubmit = async (data: ContactFormData) => {
    await submitContactForm(data);
  };

  const handleQuoteSubmit = async (data: QuoteFormData) => {
    await submitQuoteRequest(data);
  };

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<ProductsOverview />} />
          <Route path="/products/rice" element={<RicePage />} />
          <Route path="/products/rice/:productSlug" element={<RiceProductDetailPage />} />
          <Route path="/products/:category" element={<CategoryPage />} />
          <Route path="/products/:category/:subCategory" element={<SubCategoryPage />} />
          <Route path="/products/:category/:subCategory/:productSlug" element={<ProductDetailPage />} />
          <Route path="/contact" element={<Contact onSubmit={handleContactSubmit} />} />
          <Route path="/quote" element={<Quote onSubmit={handleQuoteSubmit} />} />
          <Route path="/privacy" element={<Legal page="privacy" />} />
          <Route path="/terms" element={<Legal page="terms" />} />
          <Route path="/faq" element={<Legal page="faq" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
