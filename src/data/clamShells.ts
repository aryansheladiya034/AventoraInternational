import { Product } from './products';

const createClamShellProduct = (
    name: string,
    specifications: string[],
    additionalFeatures: string[] = []
): Product => {
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  
    const baseFeatures = [
        '100% Compostable',
        'Hinged Design',
        'Secure Closure',
        'Leak Proof',
        'Food Safe'
    ];
    
    const features = [...baseFeatures, ...additionalFeatures];
  
    return {
      id: slug,
      name,
      slug,
      description: `Eco-friendly ${name.toLowerCase()} with hinged design for secure food storage and transportation. Perfect for takeaway orders and food delivery services.`,
      specifications,
      features,
      applications: [
        'Takeaway Containers',
        'Food Delivery',
        'Restaurant Packaging',
        'Meal Prep',
        'Event Catering',
        'To-Go Orders'
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

export const clamShellProducts: Product[] = [
    createClamShellProduct(
        '6" × 6" Clam Shell',
        [
            'Length: 153 mm',
            'Width: 153 mm',
            'Weight: 22 gm',
            'Depth: 44 mm',
            'Volume: 500 ML',
            'Shape: Square',
            'Material: Bagasse/Sugarcane Pulp',
            'Compost Time: 60-90 days',
            'Temperature Resistance: -10°C to 100°C',
            'Microwave Safe: Yes',
            'FDA Approved: Yes',
            'Hinged Design: Yes',
            'Secure Closure: Yes'
        ],
        ['Compact Size', 'Perfect for Snacks', 'Single Portion']
    ),
    
    createClamShellProduct(
        '6" × 9" Clam Shell',
        [
            'Length: 153 mm',
            'Width: 232 mm',
            'Weight: 26 gm',
            'Depth: 42 mm',
            'Volume: 800 ML',
            'Shape: Rectangular',
            'Material: Bagasse/Sugarcane Pulp',
            'Compost Time: 60-90 days',
            'Temperature Resistance: -10°C to 100°C',
            'Microwave Safe: Yes',
            'FDA Approved: Yes',
            'Hinged Design: Yes',
            'Secure Closure: Yes'
        ],
        ['Rectangular Design', 'Sandwich Size', 'Versatile Use']
    ),
    
    createClamShellProduct(
        '8" × 8" Clam Shell',
        [
            'Length: 203 mm',
            'Width: 203 mm',
            'Weight: 37 gm',
            'Depth: 40 mm',
            'Volume: 1500 ML',
            'Shape: Square',
            'Material: Bagasse/Sugarcane Pulp',
            'Compost Time: 60-90 days',
            'Temperature Resistance: -10°C to 100°C',
            'Microwave Safe: Yes',
            'FDA Approved: Yes',
            'Hinged Design: Yes',
            'Secure Closure: Yes'
        ],
        ['Large Capacity', 'Main Meals', 'Restaurant Standard']
    ),
    
    createClamShellProduct(
        '8" × 8" 3 CP Clam Shell',
        [
            'Length: 203 mm',
            'Width: 203 mm',
            'Weight: 30 gm',
            'Depth: 40 mm',
            'Volume: 1400 ML',
            'Compartments: 3',
            'Shape: Square',
            'Material: Bagasse/Sugarcane Pulp',
            'Compost Time: 60-90 days',
            'Temperature Resistance: -10°C to 100°C',
            'Microwave Safe: Yes',
            'FDA Approved: Yes',
            'Hinged Design: Yes',
            'Secure Closure: Yes'
        ],
        ['3 Compartments', 'Organized Meals', 'Portion Control']
    ),
    
    createClamShellProduct(
        '9" × 9" Clam Shell',
        [
            'Length: 230 mm',
            'Width: 230 mm',
            'Weight: 42 gm',
            'Depth: 40 mm',
            'Volume: 1800 ML',
            'Shape: Square',
            'Material: Bagasse/Sugarcane Pulp',
            'Compost Time: 60-90 days',
            'Temperature Resistance: -10°C to 100°C',
            'Microwave Safe: Yes',
            'FDA Approved: Yes',
            'Hinged Design: Yes',
            'Secure Closure: Yes'
        ],
        ['Extra Large', 'Family Size', 'Premium Capacity']
    ),
    
    createClamShellProduct(
        '9" × 9" 3 CP Clam Shell',
        [
            'Length: 230 mm',
            'Width: 230 mm',
            'Weight: 45 gm',
            'Depth: 40 mm',
            'Volume: 1700 ml',
            'Compartments: 3',
            'Shape: Square',
            'Material: Bagasse/Sugarcane Pulp',
            'Compost Time: 60-90 days',
            'Temperature Resistance: -10°C to 100°C',
            'Microwave Safe: Yes',
            'FDA Approved: Yes',
            'Hinged Design: Yes',
            'Secure Closure: Yes'
        ],
        ['3 Compartments', 'Large Size', 'Complete Meal Solution']
    )
];