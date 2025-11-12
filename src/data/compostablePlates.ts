import { Product } from './products';

const createCompostableProduct = (
    name: string,
    specifications: string[],
    additionalFeatures: string[] = []
): Product => {
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  
    const baseFeatures = [
        '100% Compostable',
        'Eco-Friendly',
        'Biodegradable',
        'Food Safe',
        'Leak Proof'
    ];
    
    const features = [...baseFeatures, ...additionalFeatures];
  
    return {
      id: slug,
      name,
      slug,
      description: `Eco-friendly ${name.toLowerCase()} made from sustainable materials. Perfect for food service, restaurants, and environmentally conscious consumers.`,
      specifications,
      features,
      applications: [
        'Food Service',
        'Restaurant Use',
        'Takeaway Packaging',
        'Event Catering',
        'Eco-Friendly Events',
        'Sustainable Dining'
      ],
      packagingOptions: [
        'Bulk Packs',
        'Consumer Packs',
        'Restaurant Packs',
        'Customized Packaging',
        'Export Packaging'
      ],
      image: '/api/placeholder/400/300',
      gallery: [
        '/api/placeholder/400/300',
        '/api/placeholder/400/300',
        '/api/placeholder/400/300'
      ]
    };
};

export const compostablePlatesProducts: Product[] = [
    {
        ...createCompostableProduct(
        '6" Round Plates',
        [
            'Diameter: 153 mm',
            'Weight: 7 gm',
            'Depth: 18 mm',
            'Material: Bagasse/Sugarcane Pulp',
            'Compost Time: 60-90 days',
            'Temperature Resistance: -10°C to 100°C',
            'Microwave Safe: Yes',
            'FDA Approved: Yes',
            'Leak Proof: Yes',
            'Oil Resistant: Yes'
        ],
        ['Compact Size', 'Lightweight', 'Perfect for Appetizers']
    ),
    image: '/images/products/COMPOSTABLE TABLEWARE/COMPOSTABLE PLATES/6”ROUND DISH 1.jpg',
    gallery: [
      '/images/products/COMPOSTABLE TABLEWARE/COMPOSTABLE PLATES/6”ROUND DISH 1.jpg',
      '/images/products/COMPOSTABLE TABLEWARE/COMPOSTABLE PLATES/6”ROUND DISH2.jpeg',
      '/images/products/COMPOSTABLE TABLEWARE/COMPOSTABLE PLATES/6”ROUND DISH3.webp'
    ]
    },

    {
    ...createCompostableProduct(
        '7" Round Plates',
        [
            'Diameter: 175 mm',
            'Weight: 9 gm',
            'Depth: 20 mm',
            'Material: Bagasse/Sugarcane Pulp',
            'Compost Time: 60-90 days',
            'Temperature Resistance: -10°C to 100°C',
            'Microwave Safe: Yes',
            'FDA Approved: Yes',
            'Leak Proof: Yes',
            'Oil Resistant: Yes'
        ],
        ['Medium Size', 'Versatile Use', 'Side Dishes']
    ),
    image: '/images/products/COMPOSTABLE TABLEWARE/COMPOSTABLE PLATES/7”ROUND DISH1.webp',
    gallery: [
      '/images/products/COMPOSTABLE TABLEWARE/COMPOSTABLE PLATES/7”ROUND DISH1.webp',
      '/images/products/COMPOSTABLE TABLEWARE/COMPOSTABLE PLATES/7”ROUND DISH2.webp',
      '/images/products/COMPOSTABLE TABLEWARE/COMPOSTABLE PLATES/7”ROUND DISH3.jpeg'
    ]
    },
    {
    ...createCompostableProduct(
        '9" Round Plates',
        [
            'Diameter: 229 mm',
            'Weight: 12 gm',
            'Depth: 20 mm',
            'Material: Bagasse/Sugarcane Pulp',
            'Compost Time: 60-90 days',
            'Temperature Resistance: -10°C to 100°C',
            'Microwave Safe: Yes',
            'FDA Approved: Yes',
            'Leak Proof: Yes',
            'Oil Resistant: Yes'
        ],
        ['Standard Dinner Size', 'Popular Choice', 'Main Courses']
    ),
    image: '/images/products/COMPOSTABLE TABLEWARE/COMPOSTABLE PLATES/9”ROUND DISH1.webp',
    gallery: [
      '/images/products/COMPOSTABLE TABLEWARE/COMPOSTABLE PLATES/9”ROUND DISH1.webp',
      '/images/products/COMPOSTABLE TABLEWARE/COMPOSTABLE PLATES/9”ROUND DISH2.jfif',
      '/images/products/COMPOSTABLE TABLEWARE/COMPOSTABLE PLATES/9”ROUND DISH3.webp'
    ]
    },
    
    {
    ...createCompostableProduct(
        '10" Round Plates',
        [
            'Diameter: 225 mm',
            'Weight: 19 gm',
            'Depth: 22 mm',
            'Material: Bagasse/Sugarcane Pulp',
            'Compost Time: 60-90 days',
            'Temperature Resistance: -10°C to 100°C',
            'Microwave Safe: Yes',
            'FDA Approved: Yes',
            'Leak Proof: Yes',
            'Oil Resistant: Yes'
        ],
        ['Large Dinner Size', 'Heavy Duty', 'Restaurant Quality']
    ),
    image: '/images/products/COMPOSTABLE TABLEWARE/COMPOSTABLE PLATES/10”ROUND DISH1.webp',
    gallery: [
      '/images/products/COMPOSTABLE TABLEWARE/COMPOSTABLE PLATES/10”ROUND DISH1.webp',
      '/images/products/COMPOSTABLE TABLEWARE/COMPOSTABLE PLATES/10”ROUND DISH2.webp',
      '/images/products/COMPOSTABLE TABLEWARE/COMPOSTABLE PLATES/10”ROUND DISH3.jpeg'
    ]
    },
    
     {
    ...createCompostableProduct(
        '11" Round Plates',
        [
            'Diameter: 275 mm',
            'Weight: 23 gm',
            'Depth: 25 mm',
            'Material: Bagasse/Sugarcane Pulp',
            'Compost Time: 60-90 days',
            'Temperature Resistance: -10°C to 100°C',
            'Microwave Safe: Yes',
            'FDA Approved: Yes',
            'Leak Proof: Yes',
            'Oil Resistant: Yes'
        ],
        ['Extra Large', 'Premium Size', 'Buffet Service']
    ),
    image: '/images/products/COMPOSTABLE TABLEWARE/COMPOSTABLE PLATES/11”ROUND DISH1.webp',
    gallery: [
      '/images/products/COMPOSTABLE TABLEWARE/COMPOSTABLE PLATES/11”ROUND DISH1.webp',
        '/images/products/COMPOSTABLE TABLEWARE/COMPOSTABLE PLATES/11”ROUND DISH2.webp',
        '/images/products/COMPOSTABLE TABLEWARE/COMPOSTABLE PLATES/11”ROUND DISH3.jpeg'
        ]
        },
        {
    ...createCompostableProduct(
        '12" Round Plates',
        [
            'Diameter: 305 mm',
            'Weight: 26 gm',
            'Depth: 25.5 mm',
            'Material: Bagasse/Sugarcane Pulp',
            'Compost Time: 60-90 days',
            'Temperature Resistance: -10°C to 100°C',
            'Microwave Safe: Yes',
            'FDA Approved: Yes',
            'Leak Proof: Yes',
            'Oil Resistant: Yes'
        ],
        ['Largest Size', 'Premium Quality', 'Catering Events']
    ),
    image: '/images/products/COMPOSTABLE TABLEWARE/COMPOSTABLE PLATES/12”ROUND DISH1.webp',
    gallery: [
      '/images/products/COMPOSTABLE TABLEWARE/COMPOSTABLE PLATES/12”ROUND DISH1.webp',
      '/images/products/COMPOSTABLE TABLEWARE/COMPOSTABLE PLATES/12”ROUND DISH2.webp',
      '/images/products/COMPOSTABLE TABLEWARE/COMPOSTABLE PLATES/12”ROUND DISH3.jpeg'
    ]
    },
    {
    ... createCompostableProduct(
        '9" 3 CP Round Plates',
        [
            'Diameter: 229 mm',
            'Weight: 15 gm',
            'Depth: 20 mm',
            'Compartments: 3',
            'Material: Bagasse/Sugarcane Pulp',
            'Compost Time: 60-90 days',
            'Temperature Resistance: -10°C to 100°C',
            'Microwave Safe: Yes',
            'FDA Approved: Yes',
            'Leak Proof: Yes',
            'Oil Resistant: Yes'
        ],
        ['3 Compartments', 'Portion Control', 'Multi-Food Service']
    ),
    image: '/images/products/COMPOSTABLE TABLEWARE/COMPOSTABLE PLATES/9” 3 CP ROUND DISH 1.webp',
    gallery: [
      '/images/products/COMPOSTABLE TABLEWARE/COMPOSTABLE PLATES/9” 3 CP ROUND DISH 1.webp',
      '/images/products/COMPOSTABLE TABLEWARE/COMPOSTABLE PLATES/9” 3 CP ROUND DISH 2.webp',
      '/images/products/COMPOSTABLE TABLEWARE/COMPOSTABLE PLATES/9” 3 CP ROUND DISH 3.webp'
    ]
    },
    
     {
    ... createCompostableProduct(
        '10" 3 CP Round Plates',
        [
            'Diameter: 255 mm',
            'Weight: 19 gm',
            'Depth: 22 mm',
            'Compartments: 3',
            'Material: Bagasse/Sugarcane Pulp',
            'Compost Time: 60-90 days',
            'Temperature Resistance: -10°C to 100°C',
            'Microwave Safe: Yes',
            'FDA Approved: Yes',
            'Leak Proof: Yes',
            'Oil Resistant: Yes'
        ],
        ['3 Compartments', 'Large Size', 'Complete Meal Service']
    ),
    image: '/images/products/COMPOSTABLE TABLEWARE/COMPOSTABLE PLATES/10” 3 CP ROUND DISH1.jpg',
    gallery: [
      '/images/products/COMPOSTABLE TABLEWARE/COMPOSTABLE PLATES/10” 3 CP ROUND DISH1.jpg',
      '/images/products/COMPOSTABLE TABLEWARE/COMPOSTABLE PLATES/10” 3 CP ROUND DISH2.webp',
      '/images/products/COMPOSTABLE TABLEWARE/COMPOSTABLE PLATES/10” 3 CP ROUND DISH3.webp'
    ]
    },
    
     {
    ... createCompostableProduct(
        '11" 4 CP Round Plates',
        [
            'Diameter: 272 mm',
            'Weight: 23 gm',
            'Depth: 25 mm',
            'Compartments: 4',
            'Material: Bagasse/Sugarcane Pulp',
            'Compost Time: 60-90 days',
            'Temperature Resistance: -10°C to 100°C',
            'Microwave Safe: Yes',
            'FDA Approved: Yes',
            'Leak Proof: Yes',
            'Oil Resistant: Yes'
        ],
        ['4 Compartments', 'Premium Dining', 'Variety Meals']
    ),
    image: '/images/products/COMPOSTABLE TABLEWARE/COMPOSTABLE PLATES/11” 4 CP ROUND DISH1.jfif',
    gallery: [
      '/images/products/COMPOSTABLE TABLEWARE/COMPOSTABLE PLATES/11” 4 CP ROUND DISH1.jfif',
      '/images/products/COMPOSTABLE TABLEWARE/COMPOSTABLE PLATES/11” 4 CP ROUND DISH2.png',
      '/images/products/COMPOSTABLE TABLEWARE/COMPOSTABLE PLATES/11” 4 CP ROUND DISH3.jfif'
    ]
    },
    
     {
    ... createCompostableProduct(
        '12" 4 CP Round Plates',
        [
            'Diameter: 305 mm',
            'Weight: 31 gm',
            'Depth: 25.5 mm',
            'Compartments: 4',
            'Material: Bagasse/Sugarcane Pulp',
            'Compost Time: 60-90 days',
            'Temperature Resistance: -10°C to 100°C',
            'Microwave Safe: Yes',
            'FDA Approved: Yes',
            'Leak Proof: Yes',
            'Oil Resistant: Yes'
        ],
        ['4 Compartments', 'Largest Size', 'Premium Catering']
    ),
    image: '/images/products/COMPOSTABLE TABLEWARE/COMPOSTABLE PLATES/12” 4 CP ROUND DISH1.jfif',
    gallery: [
      '/images/products/COMPOSTABLE TABLEWARE/COMPOSTABLE PLATES/12” 4 CP ROUND DISH1.jfif',
      '/images/products/COMPOSTABLE TABLEWARE/COMPOSTABLE PLATES/12” 4 CP ROUND DISH2.jfif',
      '/images/products/COMPOSTABLE TABLEWARE/COMPOSTABLE PLATES/12” 4 CP ROUND DISH3.jpg'
    ]
    }
];