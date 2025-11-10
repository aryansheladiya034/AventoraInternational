import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, Home, ChevronRight, Star } from 'lucide-react';
import { productData } from '../data/products';

const SesamePage: React.FC = () => {
    const oilSeedsCategory = productData.categories.find(cat => cat.id === 'oil-seeds');
    const sesameSubCategory = oilSeedsCategory?.subCategories.find(sub => sub.id === 'sesame');

    if (!sesameSubCategory) {
        return <div>Product category not found</div>;
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
                        <Link to="/products/oil-seeds" className="hover:text-[#2B58A0] transition-colors">
                            Oil Seeds
                        </Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-gray-900 font-medium">Sesame Seeds</span>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-[#2B58A0] to-[#1e3f70] text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center mb-6">
                        <span className="text-6xl mr-4">🌱</span>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                {sesameSubCategory.name}
                            </h1>
                            <p className="text-xl text-gray-100 max-w-3xl">
                                {sesameSubCategory.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sesameSubCategory.products.map((product) => (
                            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-12 h-12 bg-[#FF6F4E] rounded-lg flex items-center justify-center">
                                            <Package className="h-6 w-6 text-white" />
                                        </div>
                                        <Star className="h-5 w-5 text-yellow-400" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                                    <p className="text-gray-600 mb-4">{product.description}</p>
                                    <div className="space-y-2">
                                        <div className="text-sm text-gray-500">
                                            <strong>Key Features:</strong>
                                            <ul className="list-disc list-inside mt-1">
                                                {product.features.slice(0, 3).map((feature, index) => (
                                                    <li key={index}>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <Link
                                        to={`/products/oil-seeds/sesame/${product.slug}`}
                                        className="mt-6 inline-flex items-center text-[#2B58A0] hover:text-[#1e3f70] transition-colors"
                                    >
                                        View Details
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-gradient-to-r from-[#2B58A0] to-[#1e3f70] text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Premium Quality Sesame Seeds for Your Business
                    </h2>
                    <p className="text-xl mb-8 text-gray-100">
                        Get competitive pricing for bulk orders and explore our complete sesame seeds portfolio
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/quote"
                            className="bg-[#FF6F4E] hover:bg-[#e55d3d] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg text-center"
                        >
                            Request Sesame Quote
                        </Link>
                        <Link
                            to="/contact"
                            className="bg-white hover:bg-gray-100 text-[#2B58A0] font-semibold px-8 py-4 rounded-lg transition-colors text-lg text-center"
                        >
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SesamePage;