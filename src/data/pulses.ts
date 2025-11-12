import { Product } from './products';

const createPulseProduct = (
    name: string,
    specifications: string[],
    additionalFeatures: string[] = []
): Product => {
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  
    const baseFeatures = [
        'Premium Quality',
        '100% Sortex Clean',
        'High Protein Content',
        'Export Grade',
        'Natural Processing'
    ];
    
    const features = [...baseFeatures, ...additionalFeatures];
  
    return {
      id: slug,
      name,
      slug,
      description: `Premium quality ${name.toLowerCase()} sourced from the finest farms in India. Rich in protein and essential nutrients, perfect for healthy cooking and food processing.`,
      specifications,
      features,
      applications: [
        'Home Cooking',
        'Food Processing',
        'Protein Supplements',
        'Healthy Meals',
        'International Cuisine',
        'Vegetarian Protein Source'
      ],
      packagingOptions: [
        '25 Kg PP Bags',
        '30 Kg PP Bags',
        '50 Kg PP Bags',
        'Customized Packaging',
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

export const pulsesProducts: Product[] = [
    {...createPulseProduct(
        'Black Eye Bean',
        [
            'Count Per 100gms: 390, 420, 450, 480, 500, 550',
            'Moisture: 13% Max',
            'Admixture: 2% Max',
            'Foreign Matter And Impurities: 1% Max',
            'Origin: India',
            'Sortex: 100%',
            'Packing: 25Kg, 30Kg, 50Kg P.P. Bag or As Per Customer Requirement',
            'GMO Status: Not Genetically Modified',
            'Shelf Life: 1 Year From Production Date',
            'Storage Condition: Cool and Dry Place'
        ],
        ['Multiple Count Options', 'High Fiber Content', 'Rich in Folate']
    ),
    image: '/images/products/pulses/pulses/black-eye-beans1.webp',
    gallery: [
        '/images/products/pulses/pulses/black-eye-beans1.webp',
        '/images/products/pulses/pulses/black-eyed-bean2.webp',
        '/images/products/pulses/pulses/black-eye-bean3.webp'
    ]
    },
    {
    ...createPulseProduct(
        'Chickpeas (White/Black)',
        [
            'Scientific Name: Cicer Arietinum',
            'Counts: 75-80, 58-60, 40-42, 44-46, 42-44, 38-42',
            'Size: 7mm, 9mm, 10mm, 11mm, 12mm, 14mm',
            'Moisture: 10%-11% Max',
            'Admixture: 0.50%-1% Max',
            'Broken Kernels: 1%-2% Max',
            'Place Of Origin: India',
            'Damaged Kernels: 1%-3% Max',
            'Discolored Kernels: 2%-3% Max',
            'Foreign Matter: 0.002%',
            'Sortex: 100%',
            'Packing: 25Kg, 30Kg, 50Kg P.P. Bag or As Per Customer Requirement',
            'GMO Status: Not Genetically Modified',
            'Shelf Life: 1 Year From Production Date'
        ],
        ['Multiple Size Grades', 'White & Black Varieties', 'Premium Sorting']
    ),
    image: '/images/products/pulses/pulses/chickpeas1.webp',
    gallery: [
        '/images/products/pulses/pulses/chickpeas1.webp',
        '/images/products/pulses/pulses/chickpeas2.webp',
        '/images/products/pulses/pulses/chickpea3.webp'
    ]
    },
    {...createPulseProduct(
        'Brown Eye Bean',
        [
            'Count Per 100gms: 380, 400, 430, 460, 500 (or as per customer requirement)',
            'Moisture: 13% Max',
            'Admixture: 2% Max',
            'Foreign Matter & Impurities: 1% Max',
            'Origin: India',
            'Sortex: 100%',
            'Packing: 25Kg, 30Kg, 50Kg P.P. Bag or As Per Customer Requirement',
            'GMO Status: Not Genetically Modified',
            'Shelf Life: 1 Year From Production Date',
            'Storage Condition: Cool and Dry Place'
        ],
        ['Flexible Count Options', 'Nutritious Choice', 'Quality Assured']
    ),
    image: '/images/products/pulses/pulses/brown-eye-bean1.webp',
    gallery: [
        '/images/products/pulses/pulses/brown-eye-bean1.webp',
        '/images/products/pulses/pulses/brown-eye-bean2.webp',
        '/images/products/pulses/pulses/brown-eye-bean3.webp'
    ]
    },
    {...createPulseProduct(
        'Red Kidney Bean',
        [
            'Count Per 100gms: 160–180, 180–200, 200–220 (or as per customer requirement)',
            'Moisture: 14% Max',
            'Admixture: 2% Max',
            'Foreign Matter & Impurities: 1% Max',
            'Origin: India',
            'Sortex: 100%',
            'Packing: 25Kg, 30Kg, 50Kg P.P. Bag or As Per Customer Requirement',
            'GMO Status: Not Genetically Modified',
            'Shelf Life: 1 Year From Production Date',
            'Storage Condition: Cool and Dry Place'
        ],
        ['Large Size Beans', 'Rich Red Color', 'High Protein']
    ),
    image: '/images/products/pulses/pulses/red-kideny-bean1.webp',
    gallery: [
        '/images/products/pulses/pulses/red-kideny-bean1.webp',
        '/images/products/pulses/pulses/red-kideny-bean2.webp',
        '/images/products/pulses/pulses/red-kideny-bean3.webp'
    ]
    },
{
    ...createPulseProduct(
        'Soybean',
        [
            'Scientific Name: Glycine Max',
            'Sortex: 100%',
            'Color: Light Yellow/Golden Yellow',
            'Maturity: 100%',
            'Admixture: 1% Max',
            'Foreign Matter: 1% Max',
            'Protein: 35%–38%',
            'Oil Content: 18%–20%',
            'Moisture: 12%–13% Max',
            'Damaged/Discolored Beans: 1%–2% Max',
            'Split Beans: 2%–3% Max',
            'Origin: India',
            'Packing: 25Kg, 30Kg, 50Kg P.P. Bag or As Per Customer Requirement',
            'GMO Status: Not Genetically Modified',
            'Shelf Life: 1 Year From Production Date'
        ],
        ['Highest Protein Content', 'Oil Rich', 'Complete Amino Profile']
    ),
    image: '/images/products/pulses/pulses/soyabean1.webp',
    gallery: [
        '/images/products/pulses/pulses/soyabean1.webp',
        '/images/products/pulses/pulses/soyabean2.webp',
        '/images/products/pulses/pulses/soyabean3.webp'
    ]
    },
    {
    ...createPulseProduct(
        'Green Peas',
        [
            'Scientific Name: Pisum Sativum',
            'Sortex: 100%',
            'Color: Natural Green',
            'Maturity: 100%',
            'Admixture: 0.5% Max',
            'Foreign Matter: 0.5% Max',
            'Moisture: 12%–14% Max',
            'Damaged/Discolored Peas: 1% Max',
            'Weevilled: 1% Max',
            'Size: 5.5 mm – 7 mm (as per requirement)',
            'Origin: India',
            'Packing: 25Kg, 30Kg, 50Kg P.P. Bag or As Per Customer Requirement',
            'GMO Status: Not Genetically Modified',
            'Shelf Life: 1 Year From Production Date'
        ],
        ['Natural Green Color', 'Custom Size Available', 'Low Impurity Levels']
    ),
    image: '/images/products/pulses/pulses/green-peas1.webp',
    gallery: [
        '/images/products/pulses/pulses/green-peas1.webp',
        '/images/products/pulses/pulses/green-peas2.webp',
        '/images/products/pulses/pulses/green-peas3.webp'
    ]
    },
    {
    ...createPulseProduct(
        'Green Mung',
        [
            'Scientific Name: Vigna Radiata',
            'Size: 3.6mm regular, 3.8mm bold',
            'Sortex: 100%',
            'Foreign Matter: 1%',
            'Weevilled: 2% Max',
            'Sister Bean: 2% Max',
            'Damage: 4% Max',
            'Moisture: 12%-13%',
            'Purity: 99%',
            'Origin: India',
            'Packing: 25Kg, 30Kg, 50Kg P.P. Bag or As Per Customer Requirement',
            'GMO Status: Not Genetically Modified',
            'Shelf Life: 1 Year From Production Date'
        ],
        ['Regular & Bold Sizes', 'High Purity', 'Easy to Digest']
    ),
    image: '/images/products/pulses/pulses/green-mung1.webp',
    gallery: [
        '/images/products/pulses/pulses/green-mung1.webp',
        '/images/products/pulses/pulses/green-mung2.webp',
        '/images/products/pulses/pulses/green-mung3.webp'
    ]
    },
    {
    ...createPulseProduct(
    
        'Moth Beans',
        [
            'Scientific Name: Vigna Aconitifolia',
            'Sortex: 100%',
            'Color: Brown',
            'Maturity: 100%',
            'Admixture: 0.1% Max',
            'Magnesium: 95%',
            'Iron: 60%',
            'Origin: India',
            'Packing: 25Kg, 30Kg, 50Kg P.P. Bag or As Per Customer Requirement',
            'GMO Status: Not Genetically Modified',
            'Shelf Life: 1 Year From Production Date',
            'Storage Condition: Cool and Dry Place'
        ],
        ['High Magnesium Content', 'Iron Rich', 'Drought Resistant Crop']
    ),
    image: '/images/products/pulses/pulses/moth-beans1.webp',
    gallery: [
        '/images/products/pulses/pulses/moth-beans1.webp',
        '/images/products/pulses/pulses/moth-beans2.webp',
        '/images/products/pulses/pulses/moth-beans3.webp'
    ]
    }
];