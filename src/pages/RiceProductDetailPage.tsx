import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Package, Home, ChevronRight, Check, Star, Share2, Heart, Info } from 'lucide-react';
import { getRiceProductBySlug, getAllRiceProducts } from '../data/riceData';

const RiceProductDetailPage: React.FC = () => {
  const { productSlug } = useParams<{ productSlug: string }>();
  const [selectedImage, setSelectedImage] = useState(0);

  const product = getRiceProductBySlug(productSlug || '');
  const allRiceProducts = getAllRiceProducts();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The rice product you're looking for doesn't exist.</p>
          <Link
            to="/products/rice"
            className="bg-[#2B58A0] hover:bg-[#1e3f70] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Back to Rice Products
          </Link>
        </div>
      </div>
    );
  }

  // Get related products (same variety or category)
  const relatedProducts = allRiceProducts
    .filter(p => p.id !== product.id && (p.variety === product.variety || p.category === product.category))
    .slice(0, 4);

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
            <Link to="/products/rice" className="hover:text-[#2B58A0] transition-colors">
              Rice
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
                    className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 ${
                      selectedImage === index
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
                  {product.category === 'basmati' ? 'Basmati Rice' : 'Non-Basmati Rice'}
                </span>
                <span className="bg-[#2B58A0] text-white px-3 py-1 rounded-full text-xs font-medium mr-3">
                  {product.type.charAt(0).toUpperCase() + product.type.slice(1).replace('-', ' ')}
                </span>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">(4.9/5)</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              {product.scientificName && (
                <p className="text-lg text-gray-600 mb-2 italic">
                  Scientific Name: {product.scientificName}
                </p>
              )}

              <p className="text-lg text-gray-600 mb-6">
                Premium quality {product.name.toLowerCase()} sourced from the finest farms in India. 
                Our rice meets international quality standards and is perfect for various culinary applications.
              </p>

              {/* Key Highlights */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Highlights</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Premium Export Quality</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">100% Sortex Cleaned</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">FDA Approved</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Long Grain Variety</span>
                  </div>
                  {product.category === 'basmati' && (
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Authentic Aroma</span>
                    </div>
                  )}
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Custom Packaging</span>
                  </div>
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

      {/* Detailed Specifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Detailed Specifications
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Specifications */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <Info className="h-6 w-6 text-[#2B58A0] mr-2" />
                Product Specifications
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Purity</span>
                  <span className="text-gray-900">{product.purity}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Sortex</span>
                  <span className="text-gray-900">{product.sortex}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Average Grain Length</span>
                  <span className="text-gray-900">{product.averageGrainLength}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Moisture Content</span>
                  <span className="text-gray-900">{product.moisture}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Place of Origin</span>
                  <span className="text-gray-900">{product.placeOfOrigin}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Damage & Discolored</span>
                  <span className="text-gray-900">{product.damageDiscolored}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Broken Grains</span>
                  <span className="text-gray-900">{product.broken}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Foreign Matter</span>
                  <span className="text-gray-900">{product.foreignMatter}</span>
                </div>
                {product.chalkyGrains && (
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Chalky Grains</span>
                    <span className="text-gray-900">{product.chalkyGrains}</span>
                  </div>
                )}
                {product.color && (
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Color</span>
                    <span className="text-gray-900">{product.color}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Packaging Information */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <Package className="h-6 w-6 text-[#FF6F4E] mr-2" />
                Packaging Options
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700 mb-4">{product.packing}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  {['1 Kg', '2 Kg', '5 Kg', '10 Kg', '25 Kg', '50 Kg'].map((size, index) => (
                    <div key={index} className="bg-white rounded-lg p-3 border border-gray-200 text-center">
                      <div className="font-medium text-gray-900">{size}</div>
                      <div className="text-sm text-gray-600">Available</div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Bag Types Available:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>PP Bag</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>Non Woven Bag</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>BOPP Bag</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>Jute Bag</span>
                    </div>
                    <div className="flex items-center col-span-2">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>Customized Packing Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Applications & Uses</h2>
            <p className="text-lg text-gray-600">
              Our {product.name} is perfect for various culinary and commercial applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🍽️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Restaurant Use</h3>
              <p className="text-gray-600 text-sm">Perfect for professional kitchens and restaurants</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Food Processing</h3>
              <p className="text-gray-600 text-sm">Ideal for food processing industries</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Export Markets</h3>
              <p className="text-gray-600 text-sm">Premium quality for international markets</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Home Cooking</h3>
              <p className="text-gray-600 text-sm">Perfect for everyday cooking and special occasions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Related Rice Products
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/products/rice/${relatedProduct.slug}`}
                  className="group bg-gray-50 border border-gray-200 rounded-lg p-4 hover:border-[#FF6F4E] hover:shadow-md transition-all"
                >
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-32 object-cover rounded-md mb-3"
                  />
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#2B58A0] transition-colors line-clamp-2">
                    {relatedProduct.name}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="bg-[#FF6F4E] text-white px-2 py-1 rounded">
                      {relatedProduct.type.replace('-', ' ').toUpperCase()}
                    </span>
                    <ArrowRight className="h-3 w-3 group-hover:text-[#FF6F4E] transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#2B58A0] to-[#1e3f70] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Import {product.name}?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Get detailed pricing, minimum order quantities, and shipping information for bulk orders
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quote"
              className="bg-[#FF6F4E] hover:bg-[#e55d3d] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg text-center"
            >
              Get Bulk Quote
            </Link>
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-[#2B58A0] font-semibold px-8 py-4 rounded-lg transition-colors text-lg text-center"
            >
              Speak with Rice Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RiceProductDetailPage;