import { Product } from './products';

const createOnionProduct = (
  name: string,
  size: string,
  loading: string,
  packing: string,
): Product => {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  return {
    id: slug,
    name,
    slug,
    description: `Premium quality ${name.toLowerCase()} available in White, Pink, and Red varieties. Perfect for various culinary applications.`,
    specifications: [
      'Variety: White, Pink, Red',
      `Size: ${size}`,
      'Aroma: Sweet and spicy',
      `Packing: ${packing}`,
      `Loading Capacity: ${loading}`,
      'Shelf Life: 2 Years in 5°C -12°C Storage at Dry Place',
      'Origin: India'
    ],
    features: [
      'Multiple Varieties Available',
      'Premium Quality',
      'Long Shelf Life',
      'Consistent Size',
      'Rich Aroma'
    ],
    applications: [
      'Food Processing',
      'Ready Meals',
      'Seasonings',
      'Sauces & Condiments',
      'Snack Foods'
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

export const onionProducts: Product[] = [
  createOnionProduct(
    'Dehydrated Onion Chopped',
    '8 to 15 mm',
    '14 MTS (20 FT), 24 MTS (40FT)',
    '20/25 Kgs PP Bag/Cartoon Box or Customized'
  ),
  createOnionProduct(
    'Dehydrated Onion Flakes',
    '8 to 15 mm',
    '7.5 MTS (20 FT), 16 MTS (40FT)',
    '10/12/14 Kgs PP Bag/Cartoon Box or Customized'
  ),
  createOnionProduct(
    'Dehydrated Onion Granules',
    'Granules – 0.5 x 1.0 mm, 24 x 40 mesh, 40 x 60 mesh, 40 x 80 mesh',
    '14 MTS (20 FT), 24 MTS (40FT)',
    '20/25 Kgs PP Bag/Cartoon Box or Customized'
  ),
  createOnionProduct(
    'Dehydrated Onion Minced',
    '1 to 3 mm',
    '14 MTS (20 FT), 24 MTS (40FT)',
    '20/25 Kgs PP Bag/Cartoon Box or Customized'
  ),
  createOnionProduct(
    'Dehydrated Onion Powder',
    'Powder – 100 or 120 Mesh',
    '15 MTS (20 FT), 28 MTS (40FT)',
    '20/25 Kgs PP Bag/Cartoon Box or Customized'
  )
];