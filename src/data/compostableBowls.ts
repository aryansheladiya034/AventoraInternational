import { Product } from './products';

const createCompostableBowlProduct = (
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
      description: `Sustainable ${name.toLowerCase()} made from eco-friendly materials. Ideal for serving soups, salads, and various food items while protecting the environment.`,
      specifications,
      features,
      applications: [
        'Soup Service',
        'Salad Bowls',
        'Food Containers',
        'Takeaway Packaging',
        'Event Catering',
        'Restaurant Use'
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

export const compostableBowlsProducts: Product[] = [
    createCompostableBowlProduct(
        '120 ML Medium Bowl',
        [
            'Diameter: 95 mm',
            'Weight: 7 gm',
            'Depth: 36 mm',
            'Volume: 120 ml',
            'Material: Bagasse/Sugarcane Pulp',
            'Compost Time: 60-90 days',
            'Temperature Resistance: -10°C to 100°C',
            'Microwave Safe: Yes',
            'FDA Approved: Yes',
            'Leak Proof: Yes',
            'Oil Resistant: Yes'
        ],
        ['Small Portion Size', 'Perfect for Sauces', 'Appetizer Bowls']
    ),
    
    createCompostableBowlProduct(
        '180 ML Medium Bowl',
        [
            'Diameter: 115 mm',
            'Weight: 10 gm',
            'Depth: 38 mm',
            'Volume: 180 ml',
            'Material: Bagasse/Sugarcane Pulp',
            'Compost Time: 60-90 days',
            'Temperature Resistance: -10°C to 100°C',
            'Microwave Safe: Yes',
            'FDA Approved: Yes',
            'Leak Proof: Yes',
            'Oil Resistant: Yes'
        ],
        ['Medium Portion', 'Soup Bowls', 'Side Dishes']
    ),
    
    createCompostableBowlProduct(
        '240 ML Medium Bowl',
        [
            'Diameter: 133 mm',
            'Weight: 12 gm',
            'Depth: 39 mm',
            'Volume: 240 ml',
            'Material: Bagasse/Sugarcane Pulp',
            'Compost Time: 60-90 days',
            'Temperature Resistance: -10°C to 100°C',
            'Microwave Safe: Yes',
            'FDA Approved: Yes',
            'Leak Proof: Yes',
            'Oil Resistant: Yes'
        ],
        ['Standard Size', 'Versatile Use', 'Main Portions']
    ),
    
    createCompostableBowlProduct(
        '350 ML Medium Bowl',
        [
            'Diameter: 151 mm',
            'Weight: 15 gm',
            'Depth: 41 mm',
            'Volume: 350 ml',
            'Material: Bagasse/Sugarcane Pulp',
            'Compost Time: 60-90 days',
            'Temperature Resistance: -10°C to 100°C',
            'Microwave Safe: Yes',
            'FDA Approved: Yes',
            'Leak Proof: Yes',
            'Oil Resistant: Yes'
        ],
        ['Large Size', 'Salad Bowls', 'Generous Portions']
    ),
    
    createCompostableBowlProduct(
        'DONA Square Bowl',
        [
            'Dimensions: 105 mm × 105 mm',
            'Weight: 7 gm',
            'Depth: 29 mm',
            'Volume: 120 ml',
            'Shape: Square',
            'Material: Bagasse/Sugarcane Pulp',
            'Compost Time: 60-90 days',
            'Temperature Resistance: -10°C to 100°C',
            'Microwave Safe: Yes',
            'FDA Approved: Yes',
            'Leak Proof: Yes',
            'Oil Resistant: Yes'
        ],
        ['Square Design', 'Traditional Style', 'Compact Size']
    ),
    
    createCompostableBowlProduct(
        '1D Tray Square Bowl',
        [
            'Dimensions: 137 mm × 137 mm',
            'Weight: 12 gm',
            'Depth: 21 mm',
            'Volume: 240 ml',
            'Shape: Square',
            'Material: Bagasse/Sugarcane Pulp',
            'Compost Time: 60-90 days',
            'Temperature Resistance: -10°C to 100°C',
            'Microwave Safe: Yes',
            'FDA Approved: Yes',
            'Leak Proof: Yes',
            'Oil Resistant: Yes'
        ],
        ['Square Tray Design', 'Shallow Depth', 'Versatile Use']
    ),
    
    createCompostableBowlProduct(
        '3 CP Square Compartment',
        [
            'Diameter: 215 mm',
            'Weight: 26 gm',
            'Depth: 24 mm',
            'Compartments: 3',
            'Shape: Square',
            'Material: Bagasse/Sugarcane Pulp',
            'Compost Time: 60-90 days',
            'Temperature Resistance: -10°C to 100°C',
            'Microwave Safe: Yes',
            'FDA Approved: Yes',
            'Leak Proof: Yes',
            'Oil Resistant: Yes'
        ],
        ['3 Compartments', 'Square Design', 'Organized Serving']
    ),
    
    createCompostableBowlProduct(
        '5 CP Meal Tray (295×215)',
        [
            'Dimensions: 295 mm × 215 mm',
            'Weight: 38 gm',
            'Depth: 33 mm',
            'Compartments: 5',
            'Shape: Rectangular',
            'Material: Bagasse/Sugarcane Pulp',
            'Compost Time: 60-90 days',
            'Temperature Resistance: -10°C to 100°C',
            'Microwave Safe: Yes',
            'FDA Approved: Yes',
            'Leak Proof: Yes',
            'Oil Resistant: Yes'
        ],
        ['5 Compartments', 'Complete Meal Tray', 'Restaurant Quality']
    ),
    
    createCompostableBowlProduct(
        '5 CP Meal Tray (305×215)',
        [
            'Dimensions: 305 mm × 215 mm',
            'Weight: 42 gm',
            'Depth: 33 mm',
            'Compartments: 5',
            'Shape: Rectangular',
            'Material: Bagasse/Sugarcane Pulp',
            'Compost Time: 60-90 days',
            'Temperature Resistance: -10°C to 100°C',
            'Microwave Safe: Yes',
            'FDA Approved: Yes',
            'Leak Proof: Yes',
            'Oil Resistant: Yes'
        ],
        ['5 Compartments', 'Large Meal Tray', 'Premium Size']
    )
];