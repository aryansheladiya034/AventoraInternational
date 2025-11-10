import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Package, Home, ChevronRight, Check, Star, Share2, Heart } from 'lucide-react';
import { productData } from '../data/productDataWithDetails';

const ProductDetailPage: React.FC = () => {
  const { category: categorySlug, subCategory: subCategorySlug, productSlug } = useParams<{
    category: string;
    subCategory: string;
    productSlug: string;
  }>();
  const [selectedImage, setSelectedImage] = useState(0);

  const category = productData.categories.find(cat => cat.slug === categorySlug);
  const subCategory = category?.subCategories.find(sub => sub.slug === subCategorySlug);
  const product = subCategory?.products.find(prod => prod.slug === productSlug);

  if (!category || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
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
            <Link to={`/products/${categorySlug}`} className="hover:text-[#2B58A0] transition-colors">
              {category.name}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link to={`/products/${categorySlug}/${subCategory?.slug}`} className="hover:text-[#2B58A0] transition-colors">
              {subCategory?.name}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </nav>

      {/* Product Details */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="aspect-w-1 aspect-h-1 mb-6">
                <img
                  src={product.gallery[selectedImage]}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>

              <div className="flex space-x-2 overflow-x-auto">
                {product.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 ${selectedImage === index
                        ? 'border-[#FF6F4E]'
                        : 'border-gray-200 hover:border-gray-300'
                      }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center mb-4">
                <span className="bg-[#FF6F4E] text-white px-3 py-1 rounded-full text-xs font-medium mr-3">
                  {category.name}
                </span>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">(4.8/5)</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              <p className="text-lg text-gray-600 mb-6">
                {product.description}
              </p>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/quote"
                  className="flex-1 bg-[#FF6F4E] hover:bg-[#e55d3d] text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center"
                >
                  Request Quote
                </Link>
                <Link
                  to="/contact"
                  className="flex-1 bg-white hover:bg-gray-50 text-[#2B58A0] border border-[#2B58A0] font-semibold py-3 px-6 rounded-lg transition-colors text-center"
                >
                  Contact Us
                </Link>
              </div>

              {/* Social Actions */}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                <button className="flex items-center text-gray-600 hover:text-[#2B58A0] transition-colors">
                  <Heart className="h-5 w-5 mr-2" />
                  Add to Wishlist
                </button>
                <button className="flex items-center text-gray-600 hover:text-[#2B58A0] transition-colors">
                  <Share2 className="h-5 w-5 mr-2" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Specifications */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Specifications</h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-3">
                  {product.specifications.map((spec, index) => (
                    <li key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                      <span className="font-medium text-gray-900">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Applications */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Applications</h3>
              <div className="space-y-4">
                {product.applications.map((application, index) => (
                  <div key={index} className="flex items-start">
                    <Package className="h-5 w-5 text-[#FF6F4E] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{application}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Packaging Options */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Packaging Options</h3>
              <div className="space-y-4">
                {product.packagingOptions.map((option, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">{option}</span>
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Related Products
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {category.subCategories
              .flatMap(subCat => subCat.products)
              .filter(p => p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/products/${categorySlug}/${relatedProduct.slug}`}
                  className="group bg-white border border-gray-200 rounded-lg p-4 hover:border-[#FF6F4E] hover:shadow-md transition-all"
                >
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-32 object-cover rounded-md mb-3"
                  />
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#2B58A0] transition-colors line-clamp-2">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {relatedProduct.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{relatedProduct.features.length} features</span>
                    <ArrowRight className="h-3 w-3 group-hover:text-[#FF6F4E] transition-colors" />
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#2B58A0] to-[#1e3f70] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Order {product.name}?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Get detailed pricing, minimum order quantities, and shipping information
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quote"
              className="bg-[#FF6F4E] hover:bg-[#e55d3d] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg text-center"
            >
              Get Detailed Quote
            </Link>
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-[#2B58A0] font-semibold px-8 py-4 rounded-lg transition-colors text-lg text-center"
            >
              Speak with Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;