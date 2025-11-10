import { Product } from './products';

const createSesameProduct = (
  name: string,
  purity: string,
  moisture: string,
  oilContent: string,
  ffa: string,
  admixture: string,
): Product => {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  return {
    id: slug,
    name,
    slug,
    description: `Premium quality ${name.toLowerCase()} sourced from the finest producers. Meeting international quality standards and perfect for various commercial and culinary applications.`,
    specifications: [
      `Purity: ${purity}`,
      `Moisture: ${moisture}`,
      `Oil Content: ${oilContent}`,
      `FFA (Free Fatty Acid): ${ffa}`,
      `Admixture: ${admixture}`,
      'Origin: Gujarat - India',
      'Packaging: 25 kg/50 kg PP/Jute bags',
      'Storage: Store in a cool, dry place'
    ],
    features: [
      'Premium Export Quality',
      'High Oil Content',
      'Carefully Selected',
      'Quality Tested',
      'International Standards'
    ],
    applications: [
      'Oil Extraction',
      'Food Processing',
      'Bakery Products',
      'Confectionery',
      'Direct Consumption'
    ],
    packagingOptions: [
      '25 kg PP bags',
      '50 kg PP bags',
      '25 kg Jute bags',
      '50 kg Jute bags',
      'Customized packaging available'
    ],
    image: '/api/placeholder/400/300',
    gallery: [
      '/api/placeholder/400/300',
      '/api/placeholder/400/300',
      '/api/placeholder/400/300'
    ]
  };
};

export const sesameProducts: Product[] = [
  createSesameProduct(
    'Hulled White Sesame Seeds',
    '99.95% min',
    '4% max',
    '48–52%',
    '1.5% max',
    '0.05% max'
  ),
  createSesameProduct(
    'Natural White Sesame Seeds',
    '99.90% min',
    '6% max',
    '50–54%',
    '2% max',
    '0.10% max'
  ),
  createSesameProduct(
    'Black Sesame Seeds',
    '99.90% min',
    '5% max',
    '45–50%',
    '2% max',
    '0.10% max'
  ),
  createSesameProduct(
    'Brown Sesame Seeds',
    '99% to 99.90%',
    '6% max',
    '48–52%',
    '2% max',
    '0.10% max'
  )
];