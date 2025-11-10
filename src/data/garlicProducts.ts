import { Product } from './products';

const createGarlicProduct = (
  name: string,
  size: string,
  loading: string = '14 MTS (20 FT), 25 MTS (40FT)',
  packing: string = '20/25 Kgs PP Bag/Cartoon Box or Customized',
): Product => {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  return {
    id: slug,
    name,
    slug,
    description: `Premium quality ${name.toLowerCase()} with distinctive aroma and flavor. Perfect for various culinary applications.`,
    specifications: [
      'Appearance/Color: Yellowish – Brown',
      `Size: ${size}`,
      'Aroma: Strong Spicy',
      `Packing: ${packing}`,
      `Loading Capacity: ${loading}`,
      'Shelf Life: 2 Years in 5°C -12°C Storage at Dry Place',
      'Origin: India'
    ],
    features: [
      'Premium Quality',
      'Strong Aroma',
      'Long Shelf Life',
      'Consistent Size',
      'Export Grade'
    ],
    applications: [
      'Food Processing',
      'Seasonings & Spice Blends',
      'Ready Meals',
      'Sauces & Marinades',
      'Industrial Food Production'
    ],
    packagingOptions: [
      'PP Bags',
      'Carton Boxes',
      'Customized Packaging',
      'Bulk Packaging',
      'Export Grade Packaging'
    ],
    image: '/api/placeholder/400/300',
    gallery: [
      '/api/placeholder/400/300',
      '/api/placeholder/400/300',
      '/api/placeholder/400/300'
    ]
  };
};

export const garlicProducts: Product[] = [
  createGarlicProduct(
    'Dehydrated Garlic Chopped',
    '3 – 5 mm',
    '14 MTS (20 FT), 24 MTS (40FT)',

  ),
  createGarlicProduct(
    'Dehydrated Garlic Flakes',
    '8 – 15 mm',
    '14 MTS (20 FT), 24 MTS (40FT)',
  ),
  createGarlicProduct(
    'Dehydrated Garlic Granules',
    'Granules – 8 x 16 mesh, 16 x 26 mesh, 26 x 40 mesh, 40 x 80 mesh'
  ),
  createGarlicProduct(
    'Dehydrated Garlic Minced',
    'Minced – 1 x 3 mm (8 x 16 mesh)'
  ),
  createGarlicProduct(
    'Dehydrated Garlic Powder',
    'Below 100 or 120 mesh'
  )
];