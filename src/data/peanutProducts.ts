import { Product } from './products';

const createPeanutProduct = (
  name: string,
  quality: string,
  moisture: string,
  admixture: string,
  aflatoxin: string,
  oilContent: string,
  form: string,
  containerCapacity: string,
): Product => {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  return {
    id: slug,
    name,
    slug,
    description: `Premium quality ${name.toLowerCase()} sourced from Gujarat, India. Meeting international quality standards and perfect for various commercial applications.`,
    specifications: [
      `Quality: ${quality}`,
      `Moisture: ${moisture}`,
      `Admixture: ${admixture}`,
      `Aflatoxin: ${aflatoxin}`,
      `Oil Content: ${oilContent}`,
      `Form: ${form}`,
      `Origin: Gujarat - India`,
      `Container Capacity: ${containerCapacity}`
    ],
    features: [
      'Premium Export Quality',
      'Carefully Selected',
      'Quality Tested',
      'International Standards',
      'Consistent Quality'
    ],
    applications: [
      'Food Processing',
      'Oil Extraction',
      'Snack Manufacturing',
      'Confectionery',
      'Direct Consumption'
    ],
    packagingOptions: [
      '25 kg Vacuum bags',
      '50 kg Vacuum bags',
      'PP Woven Bags',
      'Laser PP Bags',
      'Custom Packaging Available'
    ],
    image: '/api/placeholder/400/300',
    gallery: [
      '/api/placeholder/400/300',
      '/api/placeholder/400/300',
      '/api/placeholder/400/300'
    ]
  };
};

export const peanutProducts: Product[] = [
  createPeanutProduct(
    'Shelled/Unshelled Peanut',
    '20/24, 24/28, 28/32, 40/50, 50/60, 60/70, 70/80 Counts Per Ounce (Grades)',
    '7% Max',
    '0.5% Max',
    '<10 PPB (by TLC or ELISA method)',
    '44%–48%',
    'Shelled',
    "20' FCL: 18-19 MTS | 40' FCL: 25-27 MTS"
  ),
  createPeanutProduct(
    'Bold Peanut',
    '40/50, 50/60, 60/70, 70/80, 80/90 (Counts Per Ounce)',
    '7% to 8% Max',
    '1% max or 0% max',
    'Aflatoxin negative 5 PPB (TLC method)',
    '42%–48% max',
    'Kernel',
    "20'FCL=19 MTS | 40' FCL=27 MTS"
  ),
  createPeanutProduct(
    'Java Peanut',
    '40/50, 50/60, 60/70, 70/80 (Common sizes)',
    '6%–8% Max',
    '0.5% Max',
    '<5 PPB (TLC method)',
    '44%–48% Max',
    'Kernel',
    "20' FCL: 18-19 MTS | 40' FCL: 25-27 MTS"
  ),
  createPeanutProduct(
    'TJ Peanut',
    '50/60, 60/70, 70/80, 80/90 (Common grades)',
    '7%–8% Max',
    '0.5% Max',
    '<5 PPB (by TLC method)',
    '44%–48% Max',
    'Kernel',
    "20' FCL: 18-19 MTS | 40' FCL: 25-27 MTS"
  ),
  createPeanutProduct(
    'Blanched Peanut',
    '40/50, 50/60, 60/70, 70/80 (Counts Per Ounce)',
    '6%–7% Max',
    '0.5% Max',
    '<5 PPB (TLC or ELISA method)',
    '45%–50% Max',
    'Clean, white kernels, no skin or dark spots',
    "20' FCL: 18-19 MTS | 40' FCL: 25-27 MTS"
  ),
  createPeanutProduct(
    'Roasted Peanut',
    '40/50, 50/60, 60/70, 70/80 (Counts per Ounce)',
    '2%–4% Max',
    '0.5% Max',
    '<5 PPB (by TLC or ELISA method)',
    '45%–50% Max',
    'Split',
    "20' FCL: 18-19 MTS | 40' FCL: 25-27 MTS"
  )
];