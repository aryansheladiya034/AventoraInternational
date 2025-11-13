import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Package, Home, ChevronRight } from 'lucide-react';
import { productData } from '../data/productDataWithDetails';

const CategoryPage: React.FC = () => {
  const { category: categorySlug } = useParams<{ category: string }>();

  const category = productData.categories.find(cat => cat.slug === categorySlug);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <p className="text-gray-600 mb-8">The category you're looking for doesn't exist.</p>
          <Link
            to="/products"
            className="bg-[#2B58A0] hover:bg-[#1e3f70] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#2B58A0] transition-colors">
              <Home className="h-4 w-4" />
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/products" className="hover:text-[#2B58A0] transition-colors">
              Products
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900 font-medium">{category.name}</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2B58A0] to-[#1e3f70] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <span className="text-6xl mr-4">{category.icon}</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {category.name}
              </h1>
              <p className="text-xl text-gray-100 max-w-3xl">
                {category.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products by Category */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {category.subCategories.map((subCategory, index) => (
            <div key={subCategory.id} className={index > 0 ? 'mt-16' : ''}>
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 uppercase tracking-wide">
                  {subCategory.name}
                </h2>
                <p className="text-gray-600 mb-6">
                  {subCategory.description}
                </p>
                <div className="w-20 h-1 bg-gradient-to-r from-[#FF6F4E] to-[#2B58A0] rounded-full"></div>
              </div>

              {subCategory.products.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {subCategory.products.map((product) => (
                    <Link
                      key={product.id}
                      to={`/products/${categorySlug}/${subCategory.slug}/${product.slug}`}
                      className="group bg-white border border-gray-200 rounded-lg p-4 hover:border-[#FF6F4E] hover:shadow-md transition-all"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-32 object-cover rounded-md mb-3"
                      />
                      <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#2B58A0] transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{product.features.length} features</span>
                        <ArrowRight className="h-3 w-3 group-hover:text-[#FF6F4E] transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <Package className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>No products available in this category yet.</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#2B58A0] to-[#1e3f70] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interested in Our {category.name}?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Get detailed specifications, pricing, and availability information
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quote"
              className="bg-[#FF6F4E] hover:bg-[#e55d3d] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg text-center"
            >
              Request Quote
            </Link>
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-[#2B58A0] font-semibold px-8 py-4 rounded-lg transition-colors text-lg text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;