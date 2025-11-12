export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  specifications: string[];
  features: string[];
  applications: string[];
  packagingOptions: string[];
  image: string;
  gallery: string[];
}

export interface SubCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  products: Product[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  image: string;
  subCategories: SubCategory[];
}

export interface ProductData {
  categories: Category[];
}

// Generate dummy content for products
const generateDummyProduct = (name: string, categoryType: string): Product => {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  
  const getSpecifications = (type: string): string[] => {
    switch (type) {
      case 'dehydrated':
        return [
          'Moisture Content: 4-6%',
          'Purity: 99.5%+',
          'Shelf Life: 12-24 months',
          'Storage: Cool, dry place',
          'Microbial Count: <10,000 cfu/g'
        ];
      case 'oil-seeds':
        return [
          'Oil Content: 45-55%',
          'Moisture: 6-8%',
          'Purity: 98%+',
          'Free Fatty Acid: <2%',
          'Shelf Life: 12 months'
        ];
      case 'spices':
        return [
          'Moisture Content: 8-12%',
          'Volatile Oil: 2-4%',
          'Ash Content: 6-8%',
          'Purity: 99%+',
          'Shelf Life: 18-24 months'
        ];
      case 'pulses':
        return [
          'Protein Content: 20-25%',
          'Moisture: 12-14%',
          'Damaged Grains: <2%',
          'Foreign Matter: <1%',
          'Shelf Life: 12 months'
        ];
      case 'compostable':
        return [
          'Material: Bagasse/Palm Leaf',
          'Compost Time: 60-90 days',
          'Temperature Resistance: -10°C to 100°C',
          'Microwave Safe: Yes',
          'FDA Approved: Yes'
        ];
      case 'rice':
        return [
          'Grain Length: 6.0-8.5mm',
          'Moisture Content: 12-14%',
          'Broken Grains: <5%',
          'Foreign Matter: <0.1%',
          'Shelf Life: 12-18 months'
        ];
      default:
        return [
          'Premium Quality',
          'Export Grade',
          'Quality Assured',
          'Certified Processing',
          'International Standards'
        ];
    }
  };

  const getFeatures = (type: string): string[] => {
    switch (type) {
      case 'dehydrated':
        return ['100% Natural', 'No Artificial Colors', 'Rich Flavor', 'Easy to Rehydrate', 'Long Shelf Life'];
      case 'oil-seeds':
        return ['Premium Quality', 'Rich in Nutrients', 'High Oil Content', 'Natural Processing', 'Export Quality'];
      case 'spices':
        return ['Authentic Aroma', 'Pure & Natural', 'Hand-Selected', 'Traditional Processing', 'Export Grade'];
      case 'pulses':
        return ['High Protein', 'Natural & Pure', 'Rich in Fiber', 'Premium Quality', 'Nutrient Dense'];
      case 'compostable':
        return ['100% Biodegradable', 'Eco-Friendly', 'Leak Proof', 'Microwave Safe', 'Chemical Free'];
      case 'rice':
        return ['Premium Basmati', 'Long Grain', 'Aromatic', 'Fluffy Texture', 'Export Quality'];
      default:
        return ['Premium Quality', 'Natural Processing', 'Export Grade', 'Quality Assured', 'Certified'];
    }
  };

  const getApplications = (type: string): string[] => {
    switch (type) {
      case 'dehydrated':
        return ['Cooking & Seasoning', 'Food Processing', 'Ready Meals', 'Soup Mixes', 'Sauce Preparation'];
      case 'oil-seeds':
        return ['Oil Extraction', 'Food Products', 'Snack Foods', 'Confectionery', 'Health Foods'];
      case 'spices':
        return ['Culinary Use', 'Food Processing', 'Seasoning Blends', 'Traditional Medicine', 'Aromatherapy'];
      case 'pulses':
        return ['Cooking', 'Food Processing', 'Protein Supplements', 'Traditional Dishes', 'Health Foods'];
      case 'compostable':
        return ['Restaurants', 'Food Service', 'Events & Catering', 'Takeaway', 'Eco-Conscious Dining'];
      case 'rice':
        return ['Cooking', 'Food Processing', 'Restaurant Use', 'Export Markets', 'Premium Dining'];
      default:
        return ['Culinary Use', 'Food Processing', 'Commercial Applications', 'Export Markets', 'Retail'];
    }
  };

  return {
    id: slug,
    name,
    slug,
    description: `Premium quality ${name.toLowerCase()} sourced from trusted suppliers. Our ${name.toLowerCase()} meets international quality standards and is perfect for various culinary and commercial applications.`,
    specifications: getSpecifications(categoryType),
    features: getFeatures(categoryType),
    applications: getApplications(categoryType),
    packagingOptions: ['25kg Bags', '50kg Bags', 'Custom Packaging', 'Bulk Orders', 'Retail Packs'],
    image: '/api/placeholder/400/300',
    gallery: [
      '/api/placeholder/400/300',
      '/api/placeholder/400/300',
      '/api/placeholder/400/300'
    ]
  };
};

export const productData: ProductData = {
  categories: [
    {
      id: 'dehydrated-products',
      name: 'Dehydrated Products',
      slug: 'dehydrated-products',
      description: 'Premium dehydrated onion and garlic products with exceptional flavor and quality.',
      icon: '',
      image: '/images/Dehydrated Products profile.webp',
      subCategories: [
        {
          id: 'dehydrated-onion',
          name: 'Dehydrated Onion',
          slug: 'dehydrated-onion',
          description: 'High-quality dehydrated onion products in various forms.',
          products: [
            // generateDummyProduct('Dehydrated Onion Chopped', 'dehydrated'),
            // generateDummyProduct('Dehydrated Onion Flakes', 'dehydrated'),
            // generateDummyProduct('Dehydrated Onion Granules', 'dehydrated'),
            // generateDummyProduct('Dehydrated Onion Minced', 'dehydrated'),
            // generateDummyProduct('Dehydrated Onion Powder', 'dehydrated')
          ]
        },
        {
          id: 'dehydrated-garlic',
          name: 'Dehydrated Garlic',
          slug: 'dehydrated-garlic',
          description: 'Premium dehydrated garlic products with rich flavor and aroma.',
          products: [
            // generateDummyProduct('Dehydrated Garlic Chopped', 'dehydrated'),
            // generateDummyProduct('Dehydrated Garlic Flakes', 'dehydrated'),
            // generateDummyProduct('Dehydrated Garlic Granules', 'dehydrated'),
            // generateDummyProduct('Dehydrated Garlic Minced', 'dehydrated'),
            // generateDummyProduct('Dehydrated Garlic Powder', 'dehydrated')
          ]
        }
      ]
    },
    {
      id: 'oil-seeds',
      name: 'Oil Seeds',
      slug: 'oil-seeds',
      description: 'Premium quality peanuts and sesame seeds for oil extraction and direct consumption.',
      icon: '',
      image: '/images/Oil Seeds Profile.avif',
      subCategories: [
        {
          id: 'peanut',
          name: 'Peanut',
          slug: 'peanut',
          description: 'Various varieties of premium peanuts for different applications.',
          products: [
            // generateDummyProduct('Shelled/Unshelled Peanut', 'oil-seeds'),
            // generateDummyProduct('Bold Peanut', 'oil-seeds'),
            // generateDummyProduct('Java Peanut', 'oil-seeds'),
            // generateDummyProduct('TJ Peanut', 'oil-seeds'),
            // generateDummyProduct('Blanched Peanut', 'oil-seeds'),
            // generateDummyProduct('Roasted Peanut', 'oil-seeds')
          ]
        },
        {
          id: 'sesame',
          name: 'Sesame',
          slug: 'sesame',
          description: 'Premium sesame seeds in various colors and processing forms.',
          products: [
            // generateDummyProduct('White Sesame Seeds', 'oil-seeds'),
            // generateDummyProduct('White Sesame Seeds', 'oil-seeds'),
            // generateDummyProduct('Black Sesame Seeds', 'oil-seeds'),
            // generateDummyProduct('Brown Sesame Seeds', 'oil-seeds')
          ]
        }
      ]
    },
    {
      id: 'spices',
      name: 'Spices',
      slug: 'spices',
      description: 'Authentic whole spices, ground spices, and spice blends from India.',
      icon: '',
      image: '/images/Spices Profile.jpg',
      subCategories: [
        {
          id: 'whole-spices',
          name: 'Whole Spices',
          slug: 'whole-spices',
          description: 'Premium whole spices with authentic aroma and flavor.',
          products: [
            // generateDummyProduct('Green Cardamom', 'spices'),
            // generateDummyProduct('Cumin', 'spices'),
            // generateDummyProduct('Dried Chillies', 'spices'),
            // generateDummyProduct('Cloves', 'spices'),
            // generateDummyProduct('Black Pepper', 'spices'),
            // generateDummyProduct('Cinnamon', 'spices'),
            // generateDummyProduct('Turmeric', 'spices'),
            // generateDummyProduct('Funnel Seeds', 'spices'),
            // generateDummyProduct('Fenugreek seeds', 'spices'),
            // generateDummyProduct('Mustard seeds', 'spices'),
            // generateDummyProduct('Nutmeg', 'spices'),
            // generateDummyProduct('Tamarind', 'spices')
          ]
        },
        {
          id: 'ground-spices',
          name: 'Ground Spices',
          slug: 'ground-spices',
          description: 'Finely ground spice powders for convenient cooking.',
          products: [
            generateDummyProduct('Turmeric Powder', 'spices'),
            generateDummyProduct('Red Chilli Powder', 'spices'),
            generateDummyProduct('Cumin Powder', 'spices'),
            generateDummyProduct('Coriander Powder', 'spices'),
            generateDummyProduct('Ginger Powder', 'spices'),
            generateDummyProduct('Asafoetida Powder', 'spices'),
            generateDummyProduct('Nutmeg Powder', 'spices'),
            generateDummyProduct('Cinnamon Powder', 'spices')
          ]
        },
        {
          id: 'spice-blends',
          name: 'Spice Blends',
          slug: 'spice-blends',
          description: 'Traditional spice blends for authentic Indian flavors.',
          products: [
            generateDummyProduct('Garam Masala', 'spices'),
            generateDummyProduct('Chat masala', 'spices'),
            generateDummyProduct('Chicken Masala', 'spices'),
            generateDummyProduct('Garlic Flax Powder', 'spices')
          ]
        }
      ]
    },
    {
      id: 'pulses-lentils',
      name: 'Pulses & Lentils',
      slug: 'pulses-lentils',
      description: 'High-protein pulses and lentils, essential ingredients for healthy cooking.',
      icon: '',
      image: '/images/Pulses & Lentils Profile.jpg',
      subCategories: [
        {
          id: 'pulses',
          name: 'Pulses',
          slug: 'pulses',
          description: 'Premium quality pulses rich in protein and nutrients.',
          products: [
            // generateDummyProduct('Black Eye Bean', 'pulses'),
            // generateDummyProduct('Brown Eye Bean', 'pulses'),
            // generateDummyProduct('Chickpea', 'pulses'),
            // generateDummyProduct('Red Kidney Bean', 'pulses'),
            // generateDummyProduct('Soyabean', 'pulses'),
            // generateDummyProduct('Green Peas', 'pulses'),
            // generateDummyProduct('Green Mung', 'pulses'),
            // generateDummyProduct('Moth Beans', 'pulses')
          ]
        },
        {
          id: 'lentils',
          name: 'Lentils',
          slug: 'lentils',
          description: 'Traditional Indian lentils (dal) for authentic cooking.',
          products: [
            // generateDummyProduct('Masoor Dal', 'pulses'),
            // generateDummyProduct('Mung Dal', 'pulses'),
            // generateDummyProduct('Toor Dal', 'pulses'),
            // generateDummyProduct('Urad Dal', 'pulses')
          ]
        }
      ]
    },
    {
      id: 'compostable-tableware',
      name: 'Compostable Tableware',
      slug: 'compostable-tableware',
      description: 'Eco-friendly, biodegradable tableware made from sustainable materials.',
      icon: '',
      image: '/images/CompostableTablewareProfile.png',
      subCategories: [
        {
          id: 'compostable-plates',
          name: 'Compostable Plates',
          slug: 'compostable-plates',
          description: 'Biodegradable plates in various sizes and compartments.',
          products: [
            generateDummyProduct('6" Round Dish', 'compostable'),
            generateDummyProduct('7" Round Dish', 'compostable'),
            generateDummyProduct('9" Round Dish', 'compostable'),
            generateDummyProduct('10" Round Dish', 'compostable'),
            generateDummyProduct('11" Round Dish', 'compostable'),
            generateDummyProduct('12" Round Dish', 'compostable'),
            generateDummyProduct('9" 3 CP Round Dish', 'compostable'),
            generateDummyProduct('10" 3 CP Round Dish', 'compostable'),
            generateDummyProduct('11" 3 CP Round Dish', 'compostable'),
            generateDummyProduct('12" 3 CP Round Dish', 'compostable'),
            generateDummyProduct('3 CP Square Compartment', 'compostable'),
            generateDummyProduct('5 CP Meal Tray', 'compostable'),
            generateDummyProduct('6 CP Meal Tray', 'compostable')
          ]
        },
        {
          id: 'compostable-bowls',
          name: 'Compostable Bowls',
          slug: 'compostable-bowls',
          description: 'Eco-friendly bowls for various serving needs.',
          products: [
            generateDummyProduct('120 ML Medium Bowl', 'compostable'),
            generateDummyProduct('180 ML Medium Bowl', 'compostable'),
            generateDummyProduct('240 ML Medium Bowl', 'compostable'),
            generateDummyProduct('350 ML Medium Bowl', 'compostable'),
            generateDummyProduct('DONA Square Bowl', 'compostable'),
            generateDummyProduct('1 D Tray Square Bowl', 'compostable')
          ]
        },
        {
          id: 'compostable-clam-shells',
          name: 'Compostable Clam Shells',
          slug: 'compostable-clam-shells',
          description: 'Hinged containers perfect for takeaway and food service.',
          products: [
            generateDummyProduct('6"×6" Clam Shell', 'compostable'),
            generateDummyProduct('6"×9" Clam Shell', 'compostable'),
            generateDummyProduct('8"×8" Clam Shell', 'compostable'),
            generateDummyProduct('8"×8" 3 CP Clam Shell', 'compostable'),
            generateDummyProduct('9"×9" Clam Shell', 'compostable'),
            generateDummyProduct('9"×9" 3 CP Clam Shell', 'compostable')
          ]
        },
        {
          id: 'compostable-cups-cutlery',
          name: 'Compostable Cups & Cutlery',
          slug: 'compostable-cups-cutlery',
          description: 'Biodegradable drinking cups, straws, and cutlery.',
          products: [
            generateDummyProduct('250 ML PLA Drink Cup', 'compostable'),
            generateDummyProduct('PLA Straws', 'compostable'),
            generateDummyProduct('PLA Cutlery', 'compostable')
          ]
        },
        {
          id: 'compostable-bags-bottles',
          name: 'Compostable Bags & Bottles',
          slug: 'compostable-bags-bottles',
          description: 'Eco-friendly bags, bottles, and containers.',
          products: [
              // generateDummyProduct('Compostable Grocery Bags', 'compostable'),
              // generateDummyProduct('Compostable Garbage Bags', 'compostable'),
              // generateDummyProduct('Compostable Carry Bags', 'compostable'),
              // generateDummyProduct('Compostable PLA Bio Based Bottles', 'compostable'),
              // generateDummyProduct('Compostable PLA Ice Cream Cups', 'compostable'),
              // generateDummyProduct('PLA Biobased Preforms', 'compostable')
          ]
        }
      ]
    }
  ]
};

// Rice data will be handled separately due to its special structure
// export const riceData = {
//   id: 'rice',
//   name: 'Rice',
//   slug: 'rice',
//   description: 'Premium Basmati and Non-Basmati rice varieties from India.',
//   icon: '🌾',
//   image: '/api/placeholder/600/400',
//   sections: [
//     {
//       id: 'basmati-rice',
//       name: 'Basmati Rice',
//       slug: 'basmati-rice',
//       description: 'World-renowned aromatic Basmati rice varieties.',
//       varieties: [
//         {
//           id: '1121-basmati',
//           name: '1121 Basmati Rice',
//           slug: '1121-basmati',
//           description: 'Premium long-grain aromatic Basmati rice.',
//           products: [
//             generateDummyProduct('1121 RAW Basmati Rice', 'rice'),
//             generateDummyProduct('1121 STEAM Basmati Rice', 'rice'),
//             generateDummyProduct('1121 GOLDEN Basmati Rice', 'rice'),
//             generateDummyProduct('1121 WHITE SELLA Basmati Rice', 'rice')
//           ]
//         },
//         {
//           id: '1509-basmati',
//           name: '1509 Basmati Rice',
//           slug: '1509-basmati',
//           description: 'Premium quality 1509 Basmati rice variety.',
//           products: [
//             generateDummyProduct('1509 STEAM Basmati Rice', 'rice'),
//             generateDummyProduct('1509 GOLDEN SELLA Basmati Rice', 'rice'),
//             generateDummyProduct('1509 WHITE SELLA Basmati Rice', 'rice')
//           ]
//         },
//         {
//           id: 'pusa-1401-basmati',
//           name: 'PUSA 1401 Basmati Rice',
//           slug: 'pusa-1401-basmati',
//           description: 'Traditional PUSA 1401 Basmati rice variety.',
//           products: [
//             generateDummyProduct('PUSA 1401 STEAM Basmati Rice', 'rice'),
//             generateDummyProduct('PUSA 1401 GOLDEN SELLA Basmati Rice', 'rice'),
//             generateDummyProduct('PUSA 1401 WHITE SELLA Basmati Rice', 'rice')
//           ]
//         }
//       ]
//     },
//     {
//       id: 'non-basmati-rice',
//       name: 'Non-Basmati Rice',
//       slug: 'non-basmati-rice',
//       description: 'High-quality Non-Basmati rice varieties for various applications.',
//       varieties: [
//         {
//           id: 'pr-11-14-rice',
//           name: 'PR 11/14 Rice',
//           slug: 'pr-11-14-rice',
//           description: 'Premium PR 11/14 rice variety.',
//           products: [
//             generateDummyProduct('PR 11/14 RAW Rice', 'rice'),
//             generateDummyProduct('PR 11/14 STEAM Rice', 'rice'),
//             generateDummyProduct('PR 11/14 GOLDEN SELLA Rice', 'rice'),
//             generateDummyProduct('PR 11/14 WHITE SELLA Rice', 'rice')
//           ]
//         },
//         {
//           id: 'sugandha-rice',
//           name: 'Sugandha Rice',
//           slug: 'sugandha-rice',
//           description: 'Aromatic Sugandha rice variety.',
//           products: [
//             generateDummyProduct('SUGANDHA STEAM Rice', 'rice'),
//             generateDummyProduct('SUGANDHA GOLDEN SELLA Rice', 'rice'),
//             generateDummyProduct('SUGANDHA WHITE SELLA Rice', 'rice')
//           ]
//         },
//         {
//           id: 'ir-64-rice',
//           name: 'IR-64 Rice',
//           slug: 'ir-64-rice',
//           description: 'High-yield IR-64 rice variety.',
//           products: [
//             // generateDummyProduct('IR-64 5% BROKEN PARBOILED Rice', 'rice'),
//             // generateDummyProduct('IR-64 5% BROKEN RAW Rice', 'rice'),
//             // generateDummyProduct('IR-64 25% BROKEN PARBOILED Rice', 'rice'),
//             // generateDummyProduct('IR-64 25% BROKEN RAW Rice', 'rice')
//           ]
//         },
//         {
//           id: 'sona-mansoori-rice',
//           name: 'Sona Mansoori Rice',
//           slug: 'sona-mansoori-rice',
//           description: 'Premium Sona Mansoori rice variety.',
//           products: [
//             generateDummyProduct('SONA MANSOORI RAW Rice', 'rice'),
//             generateDummyProduct('SONA MANSOORI STEAM Rice', 'rice')
//           ]
//         },
//         {
//           id: 'swarna-rice',
//           name: 'Swarna Rice',
//           slug: 'swarna-rice',
//           description: 'High-quality Swarna rice variety.',
//           products: [
//             generateDummyProduct('SWARNA RAW Rice', 'rice'),
//             generateDummyProduct('SWARNA PARBOILED Rice', 'rice')
//           ]
//         }
//       ]
//     }
//   ]
// };
