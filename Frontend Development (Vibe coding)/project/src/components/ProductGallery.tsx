import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShoppingCart, Eye, Filter, Grid, List } from 'lucide-react';

const ProductGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    { id: 'all', name: 'All Products', count: 24 },
    { id: 'laptops', name: 'Laptops', count: 8 },
    { id: 'desktops', name: 'Desktops', count: 6 },
    { id: 'components', name: 'Components', count: 10 }
  ];

  const products = [
    {
      id: 1,
      name: 'QuantumCore Elite Gaming Laptop',
      category: 'laptops',
      price: 2499,
      originalPrice: 2799,
      rating: 4.8,
      reviews: 124,
      image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg',
      specs: ['RTX 4070', 'Intel i7-13700H', '32GB RAM', '1TB SSD'],
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'Quantum Workstation Pro',
      category: 'desktops',
      price: 3299,
      rating: 4.9,
      reviews: 89,
      image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg',
      specs: ['RTX 4080', 'Intel i9-13900K', '64GB RAM', '2TB SSD'],
      badge: 'Professional'
    },
    {
      id: 3,
      name: 'NVIDIA RTX 4090 Graphics Card',
      category: 'components',
      price: 1599,
      rating: 4.7,
      reviews: 267,
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
      specs: ['24GB GDDR6X', '2.5GHz Boost', 'DLSS 3.0', 'Ray Tracing'],
      badge: 'New'
    },
    {
      id: 4,
      name: 'Creator Laptop Ultra',
      category: 'laptops',
      price: 1899,
      rating: 4.6,
      reviews: 156,
      image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg',
      specs: ['RTX 4060', 'AMD Ryzen 7', '16GB RAM', '1TB SSD'],
      badge: 'Creator Choice'
    },
    {
      id: 5,
      name: 'Gaming Beast Desktop',
      category: 'desktops',
      price: 2799,
      originalPrice: 3199,
      rating: 4.8,
      reviews: 203,
      image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg',
      specs: ['RTX 4070 Ti', 'AMD Ryzen 9', '32GB RAM', '2TB NVMe'],
      badge: 'Hot Deal'
    },
    {
      id: 6,
      name: 'Intel Core i9-13900K',
      category: 'components',
      price: 589,
      rating: 4.9,
      reviews: 445,
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
      specs: ['24 Cores', '5.8GHz Max', 'LGA1700', 'Unlocked'],
      badge: 'Top Rated'
    }
  ];

  const filteredProducts = products.filter(product => 
    activeFilter === 'all' || product.category === activeFilter
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <section id="products" className="py-20 bg-gray-50 dark:bg-quantum-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-orbitron font-bold text-gray-900 dark:text-white mb-4">
            Premium Products
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Discover our curated selection of high-performance gaming laptops, 
            custom desktops, and cutting-edge components
          </p>
        </motion.div>

        {/* Filters and Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-6">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-inter font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-quantum-blue text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </motion.button>
            ))}
          </div>

          {/* View Controls */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-quantum-blue"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            <div className="flex bg-white dark:bg-gray-800 rounded-lg p-1 border border-gray-300 dark:border-gray-700">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${
                  viewMode === 'grid'
                    ? 'bg-quantum-blue text-white'
                    : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${
                  viewMode === 'list'
                    ? 'bg-quantum-blue text-white'
                    : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter + viewMode}
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                : 'space-y-6'
            }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {sortedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className={`group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                  viewMode === 'list' ? 'flex gap-6 p-6' : 'p-6'
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Product Image */}
                <div className={`relative overflow-hidden rounded-xl ${
                  viewMode === 'list' ? 'w-48 h-32 flex-shrink-0' : 'aspect-video mb-4'
                }`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-3 left-3 px-3 py-1 bg-quantum-green text-white text-sm font-medium rounded-full">
                      {product.badge}
                    </div>
                  )}

                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <motion.button
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Eye className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      className="p-3 bg-quantum-blue rounded-full text-white hover:bg-quantum-blue/80 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex-1">
                  <h3 className="text-xl font-inter font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-quantum-blue dark:group-hover:text-quantum-green transition-colors">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Specs */}
                  <div className={`${viewMode === 'list' ? 'mb-4' : 'mb-4'}`}>
                    {viewMode === 'grid' ? (
                      <div className="flex flex-wrap gap-2">
                        {product.specs.slice(0, 2).map((spec, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-2">
                        {product.specs.map((spec, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Price and Action */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-quantum-blue">
                        ${product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="ml-2 text-lg text-gray-500 line-through">
                          ${product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>

                    {viewMode === 'grid' && (
                      <motion.button
                        className="px-4 py-2 bg-quantum-blue text-white rounded-lg font-medium hover:bg-quantum-blue/80 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Add to Cart
                      </motion.button>
                    )}
                  </div>

                  {viewMode === 'list' && (
                    <motion.button
                      className="mt-4 w-full py-3 bg-quantum-blue text-white rounded-lg font-medium hover:bg-quantum-blue/80 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Add to Cart
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Load More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-quantum-blue to-quantum-green text-white rounded-full font-inter font-semibold text-lg hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Load More Products
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductGallery;