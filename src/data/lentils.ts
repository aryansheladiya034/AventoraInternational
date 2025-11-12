import { Product } from './products';

const createLentilProduct = (
    name: string,
    specifications: string[],
    additionalFeatures: string[] = []
): Product => {
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  
    const baseFeatures = [
        'Premium Dal Quality',
        '100% Sortex Clean',
        'Split & Husked',
        'High Protein',
        'Easy Cooking'
    ];
    
    const features = [...baseFeatures, ...additionalFeatures];
  
    return {
      id: slug,
      name,
      slug,
      description: `Premium quality ${name.toLowerCase()} (split lentils) processed with advanced technology. Rich in protein and essential nutrients, perfect for traditional Indian cooking and healthy meals.`,
      specifications,
      features,
      applications: [
        'Traditional Indian Cooking',
        'Dal Preparations',
        'Protein Rich Meals',
        'Food Processing',
        'Ready-to-Cook Products',
        'Nutritional Supplements'
      ],
      packagingOptions: [
        '25 Kg PP Bags',
        '30 Kg PP Bags',
        '50 Kg PP Bags',
        'Customized Packaging',
        'Consumer Packs'
      ],
      image: '/api/placeholder/400/300',
      gallery: [
        '/api/placeholder/400/300',
        '/api/placeholder/400/300',
        '/api/placeholder/400/300'
      ]
    };
};

export const lentilsProducts: Product[] = [
    {
        ...createLentilProduct(
    
        'Masoor Dal',
        [
            'Scientific Name: Lens Culinaris',
            'Sortex: 100%',
            'Types: Skinned, Without Skinned',
            'Purity: 98% Min',
            'Moisture: 13%-14% Max',
            'Foreign Matter: 1% Max',
            'Un-Husked: 1% Max',
            'Un-Split: 1% Max',
            'Origin: India',
            'Packing: 25Kg, 30Kg, 50Kg P.P. Bag or As Per Customer Requirement',
            'GMO Status: Not Genetically Modified',
            'Shelf Life: 1 Year From Production Date',
            'Storage Condition: Cool and Dry Place'
        ],
        ['Fast Cooking', 'High Iron Content', 'Both Skinned & Unskinned Available']
    ),
    image: '/images/products/pulses/lentils/masoor-dal1.webp',
    gallery: [
        '/images/products/pulses/lentils/masoor-dal1.webp',
        '/images/products/pulses/lentils/masoor-dal2.webp',
        '/images/products/pulses/lentils/masoor-dal3.webp'
    ]
  },
    
    {
        ...createLentilProduct(
        'Mung Dal',
        [
            'Scientific Name: Vigna Radiata',
            'Sortex: 100%',
            'Purity: 98% Min',
            'Protein: 23.88%',
            'Moisture: 10% Max',
            'Magnesium (mg): 155',
            'Zinc (mg): 2.49',
            'Origin: India',
            'Packing: 25Kg, 30Kg, 50Kg P.P. Bag or As Per Customer Requirement',
            'GMO Status: Not Genetically Modified',
            'Shelf Life: 1 Year From Production Date',
            'Storage Condition: Cool and Dry Place'
        ],
        ['High Protein Content', 'Rich in Magnesium', 'Easy to Digest']
    ),
    image: '/images/products/pulses/lentils/mung-dal1.webp',
    gallery: [
        '/images/products/pulses/lentils/mung-dal1.webp',
        '/images/products/pulses/lentils/mung-dal2.webp',
        '/images/products/pulses/lentils/mung-dal3.webp'
    ]
  },
    
     {
    ...createLentilProduct(
        'Toor Dal',
        [
            'Scientific Name: Cajanus Cajan',
            'Sortex: 100%',
            'Moisture: 13%-14% Max',
            'Foreign Matter: 1% Max',
            'Damaged Grains: 1% Max',
            'Admixture: 2% Max',
            'Weevilled Grains: 0.5% Max',
            'Origin: India',
            'Packing: 25Kg, 30Kg, 50Kg P.P. Bag or As Per Customer Requirement',
            'GMO Status: Not Genetically Modified',
            'Shelf Life: 1 Year From Production Date',
            'Storage Condition: Cool and Dry Place'
        ],
        ['Most Popular Dal', 'Rich Flavor', 'High Protein']
    ),
    image: '/images/products/pulses/lentils/toor-dal1.webp',
    gallery: [
        '/images/products/pulses/lentils/toor-dal1.webp',
        '/images/products/pulses/lentils/toor-dal2.webp',
        '/images/products/pulses/lentils/toor-dal3.webp'
    ]
    },
    
    {
    ...createLentilProduct(
        'Urad Dal',
        [
            'Scientific Name: Vigna Mungo',
            'Sortex: 100%',
            'Types: Whole, With Skin, Without Skin',
            'Moisture: 6%-7%',
            'Foreign Matter: 1% Max',
            'Weevilled: 1% Max',
            'Damage/Discolor: 3% Max',
            'Origin: India',
            'Packing: 25Kg, 30Kg, 50Kg P.P. Bag or As Per Customer Requirement',
            'GMO Status: Not Genetically Modified',
            'Shelf Life: 1 Year From Production Date',
            'Storage Condition: Cool and Dry Place'
        ],
        ['Multiple Processing Types', 'Low Moisture', 'Premium Quality']
    ),
    image: '/images/products/pulses/lentils/urad-dal1.webp',
    gallery: [
        '/images/products/pulses/lentils/urad-dal1.webp',
        '/images/products/pulses/lentils/urad-dal2.webp',
        '/images/products/pulses/lentils/urad-dal3.webp'
    ]
    }
];