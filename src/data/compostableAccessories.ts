import { Product } from './products';

const createCompostableAccessoryProduct = (
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
        'Sustainable'
    ];
    
    const features = [...baseFeatures, ...additionalFeatures];
  
    return {
      id: slug,
      name,
      slug,
      description: `Sustainable ${name.toLowerCase()} made from eco-friendly materials. An environmentally responsible choice for food service and everyday use.`,
      specifications,
      features,
      applications: [
        'Food Service',
        'Beverage Service',
        'Restaurant Use',
        'Event Catering',
        'Takeaway Service',
        'Eco-Friendly Dining'
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

export const compostableAccessoriesProducts: Product[] = [
    createCompostableAccessoryProduct(
        'PLA Drink Cups',
        [
            'Volume Options: 200ml, 250ml, 300ml, 350ml, 400ml, 500ml',
            'Type: White, Transparent',
            'Material: PLA (Polylactic Acid)',
            'Compost Time: 60-90 days in industrial composting',
            'Temperature Resistance: -10°C to 50°C',
            'Food Safe: Yes',
            'BPA Free: Yes',
            'Leak Proof: Yes',
            'Stackable: Yes',
            'Microwave Safe: Limited use',
            'Origin: Made from plant-based materials'
        ],
        ['Multiple Sizes', 'Clear & White Options', 'Plant-Based PLA']
    ),
    
    createCompostableAccessoryProduct(
        'PLA Straws',
        [
            'Size Options: 6mm, 8mm, 10mm',
            'Type: White, Brown',
            'Material: PLA (Polylactic Acid)',
            'Length: Standard 210mm',
            'Compost Time: 60-90 days in industrial composting',
            'Food Safe: Yes',
            'BPA Free: Yes',
            'Temperature Resistance: -10°C to 50°C',
            'Flexible: No (Rigid)',
            'Individually Wrapped: Optional',
            'Origin: Made from plant-based materials'
        ],
        ['Multiple Diameters', 'Rigid Design', 'Eco-Alternative to Plastic']
    ),
    
    createCompostableAccessoryProduct(
        'PLA Cutlery Set',
        [
            'Types: Spoon, Fork, Knife',
            'Material Options: PLA, Wooden',
            'Length: Standard 160mm',
            'Weight: Lightweight yet sturdy',
            'Compost Time: 60-90 days (PLA), 30-60 days (Wooden)',
            'Food Safe: Yes',
            'BPA Free: Yes',
            'Heat Resistant: Up to 50°C (PLA), 100°C (Wooden)',
            'Disposable: Yes',
            'Individually Wrapped: Optional',
            'Color: Natural/White'
        ],
        ['Complete Cutlery Set', 'PLA & Wood Options', 'Restaurant Quality']
    ),
    
    createCompostableAccessoryProduct(
        'Compostable Grocery Bags',
        [
            'Size: 5" X 40"',
            'Type: White, Transparent',
            'Material: Compostable Bioplastic',
            'Thickness: Standard food grade',
            'Compost Time: 60-90 days',
            'Load Capacity: Up to 5kg',
            'Food Safe: Yes',
            'Leak Proof: Yes',
            'Temperature Resistance: -10°C to 50°C',
            'Biodegradable: Yes',
            'Home Compostable: Yes'
        ],
        ['Food Grade', 'Strong & Durable', 'Multiple Colors']
    ),
    
    createCompostableAccessoryProduct(
        'Compostable Garbage Bags',
        [
            'Size: 5" X 40"',
            'Type: White, Black, Transparent',
            'Material: Compostable Bioplastic',
            'Thickness: Heavy duty',
            'Compost Time: 60-90 days',
            'Load Capacity: Up to 8kg',
            'Tear Resistant: Yes',
            'Leak Proof: Yes',
            'Odor Control: Yes',
            'Biodegradable: Yes',
            'Home Compostable: Yes'
        ],
        ['Heavy Duty', '3 Color Options', 'Waste Management']
    ),
    
    createCompostableAccessoryProduct(
        'Compostable Carry Bags',
        [
            'Size Options: 9x12, 10x14, 13x16, 16x20, 17x23, 20x26, 27x30',
            'Material: Compostable Bioplastic',
            'Handle Type: Loop handles',
            'Thickness: Standard retail grade',
            'Compost Time: 60-90 days',
            'Load Capacity: Varies by size (2-10kg)',
            'Print Ready: Yes',
            'Customizable: Yes',
            'Food Safe: Yes',
            'Biodegradable: Yes',
            'Home Compostable: Yes'
        ],
        ['Multiple Sizes', 'Custom Printing Available', 'Retail Ready']
    ),
    
    createCompostableAccessoryProduct(
        'PLA Bio Based Bottles',
        [
            'Type: Transparent',
            'Material: PLA (Polylactic Acid)',
            'Volume Options: 250ml, 500ml, 1000ml',
            'Closure: Screw cap',
            'Compost Time: 60-90 days in industrial composting',
            'Temperature Resistance: -10°C to 50°C',
            'Food Safe: Yes',
            'BPA Free: Yes',
            'Recyclable: In PLA recycling facilities',
            'Crystal Clear: Yes',
            'Shatter Resistant: Yes'
        ],
        ['Crystal Clear', 'Multiple Volumes', 'Shatter Resistant']
    ),
    
    createCompostableAccessoryProduct(
        'PLA Ice Cream Cups',
        [
            'Volume: 100ml',
            'Type: Transparent',
            'Material: PLA (Polylactic Acid)',
            'Shape: Round',
            'Compost Time: 60-90 days in industrial composting',
            'Temperature Resistance: -20°C to 50°C',
            'Food Safe: Yes',
            'BPA Free: Yes',
            'Freezer Safe: Yes',
            'Stackable: Yes',
            'Leak Proof: Yes'
        ],
        ['Freezer Safe', 'Perfect Portion Size', 'Crystal Clear']
    ),
    
    createCompostableAccessoryProduct(
        'PLA Biobased Preforms',
        [
            'Type: Transparent',
            'Material: PLA (Polylactic Acid)',
            'Application: Bottle manufacturing',
            'Processing: Blow molding ready',
            'Compost Time: 60-90 days in industrial composting',
            'Clarity: Crystal clear',
            'Food Safe: Yes',
            'BPA Free: Yes',
            'Temperature Resistance: Processing up to 180°C',
            'Neck Finish: Various standard sizes',
            'Custom Weights: Available'
        ],
        ['Manufacturing Ready', 'Custom Weights', 'Industrial Use']
    )
];