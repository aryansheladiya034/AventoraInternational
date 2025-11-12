import { Product } from './products';

const createGroundSpiceProduct = (
    name: string,
    specifications: string[],
    additionalFeatures: string[] = []
): Product => {
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  
    const baseFeatures = [
        'Premium Quality',
        'Export Grade',
        'Finely Ground',
        'Rich Flavor',
        'Quality Assured'
    ];
    
    const features = [...baseFeatures, ...additionalFeatures];
  
    return {
      id: slug,
      name,
      slug,
      description: `Premium quality ${name.toLowerCase()} powder sourced from the finest spices in India. Ground to perfection for optimal flavor and aroma.`,
      specifications,
      features,
      applications: [
        'Culinary Seasoning',
        'Food Processing',
        'Ready Meals',
        'Spice Blends',
        'Restaurant Use',
        'Home Cooking'
      ],
      packagingOptions: [
        'PP Bags',
        'Paper Bags',
        'Food Grade Boxes',
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

export const groundSpicesProducts: Product[] = [
    {
        ...createGroundSpiceProduct(
            'Turmeric Powder (Haldi)',
            [
                'Botanical Name: Curcumin Longa',
                'Form Available: Powder',
                'Curcumin Available: From 1.5% To 5.00%',
                'Packaging Available: 10 Kg, 15 Kg, 25 Kg, 50 LBS',
                'Packaging Material Available: PP/Paper/Box',
                'GMO Status: Not Genetically Modified',
                'Labelling: As Per Buyer\'s Requirement',
                'Shelf Life: 1 Year From Production Date',
                'Storage Condition: Cool and Dry (20°C)',
                'Origin: India',
                'Specification: Detail Specification Are Provided Upon Request',
                'Microbiological Parameters: As Per Requirement & Importing Country Norms'
            ],
            ['High Curcumin Content', 'Golden Color', 'Anti-inflammatory Properties']
        ),
        image: '/images/products/spices/ground-spices/turmeric-powder1.webp',
        gallery: [
            '/images/products/spices/ground-spices/turmeric-powder1.webp',
            '/images/products/spices/ground-spices/turmeric-powder2.webp',
            '/images/products/spices/ground-spices/turmeric-powder3.webp'
        ]
    },
    
    {
        ...createGroundSpiceProduct(
            'Red Chilli Powder',
            [
                'Botanical Name: Capsicum Frutescens',
                'Type: Machine Clean & Sortex Clean',
                'Scoville Heat Unit (SHU): 20,000 to 50,000 SHU',
                'Color: 45-55/55-65/65-75 ASTA',
                'Size: 40-65 Mesh',
                'Aflatoxin: Below 10 PPB Or As Required',
                'Sudan 1,2,3,4: Nil',
                'Shelf Life: 1 Year From Production Date',
                'GMO Status: Not Genetically Modified',
                'Storage Condition: Cool And Dry (20°C)',
                'Packaging: 10 Kg, 15 Kg, 25 Kg & 50 LBS Paper/Poly Bags',
                'Labelling: As Per Buyer\'s Requirement',
                'Origin: India'
            ],
            ['High Heat Level', 'Vibrant Red Color', 'Premium ASTA Rating']
        ),
        image: '/images/products/spices/ground-spices/red-chilli-powder1.webp',
        gallery: [
            '/images/products/spices/ground-spices/red-chilli-powder1.webp',
            '/images/products/spices/ground-spices/red-chilli-powder2.webp',
            '/images/products/spices/ground-spices/red-chilli-powder3.webp'
        ]
    },
    
    {
        ...createGroundSpiceProduct(
            'Cumin Powder',
            [
                'Scientific Name: Cuminum Cyminum',
                'Origin: India',
                'Type: Machine Cleaned/Sortex Cleaned/Extra Bold',
                'Purity: 99%',
                'Flavor: Aromatic With A Penetrating Flavor',
                'Moisture: 10% Max',
                'Extraneous Foreign Matter (% By Weight): 0.50% Max',
                'Whole Insects Dead (By Count): 4 Max',
                'Excreta Mammalian (By Mg./Lb): 3 Mg/Lb Max',
                'Excreta Other (By Mg./Lb): 5 Mg/Lb Max',
                'Mold (% By Wgt.): 1% Max',
                'Insect Defiled/Infested (% By Wgt.): 1% Max',
                'Total Ash: 9.5% Max',
                'Acid Insoluble Ash: 1.75% Max',
                'Packaging: 10 kg, 15 Kg, 25 Kg & 50 Kg PP/Jute Bag',
                'Labelling: As Per Buyer\'s Requirement',
                'Shelf Life: 1 Year From Production Date'
            ],
            ['Aromatic Excellence', 'High Purity', 'Premium Processing']
        ),
        image: '/images/products/spices/ground-spices/cumin-powde1.webp',
        gallery: [
            '/images/products/spices/ground-spices/cumin-powde1.webp',
            '/images/products/spices/ground-spices/cumin-powder2.webp',
            '/images/products/spices/ground-spices/cumin-powde3.webp'
        ]
    },
    
    {
        ...createGroundSpiceProduct(
            'Coriander Powder',
            [
                'Botanical Name: Coriander Sativam L',
                'Form Available: Powder',
                'Origin: India',
                'Flavor: Aromatic With A Penetrating Flavor',
                'Purity: 99%, 99.50%',
                'Foreign Matter: 0.50%',
                'Total Ash: 9%',
                'Acid Insoluble Ash Value: 1.50%',
                'Volatile Oil: 0.3 to 1%',
                'Heavy Metal as Lead: 2.5 PPB',
                'Aflatoxin: 5 PPB',
                'Arsenic: 5 PPB',
                'Copper: 20 PPB',
                'Zinc: 50 PPB',
                'Lead: 10 PPB',
                'Chromate Test: Negative',
                'Shelf Life: 1 Year From Production Date',
                'GMO Status: Not Genetically Modified',
                'Packaging: 10 kg, 15 kg, 25 Kg & 50 LBS Paper/Poly Bags',
                'Labelling: As Per Buyers Requirement'
            ],
            ['Sweet Aroma', 'Heavy Metal Tested', 'Multiple Purity Grades']
        ),
        image: '/images/products/spices/ground-spices/coriander-powder1.webp',
        gallery: [
            '/images/products/spices/ground-spices/coriander-powder1.webp',
            '/images/products/spices/ground-spices/coriander-powder2.webp',
            '/images/products/spices/ground-spices/coriander-powder3.webp'
        ]
    },
    
    {
        ...createGroundSpiceProduct(
            'Ginger Powder',
            [
                'Botanical Name: Zingiber officinale',
                'Form Available: Powder',
                'Moisture: Below 10%',
                'Volatile Oil: 1% – 2.5%',
                'Packaging Available: 10 Kg, 15 Kg, 25 Kg, 50 LBS',
                'Packaging Material Available: PP/Paper/Box',
                'GMO Status: Not Genetically Modified',
                'Labelling: As Per Buyer\'s Requirement',
                'Shelf Life: 1 Year From Production Date',
                'Storage Condition: Cool and Dry (20°C)',
                'Origin: India',
                'Specification: Detailed Specifications Provided Upon Request',
                'Microbiological Parameters: As Per Requirement & Importing Country Norms'
            ],
            ['Warming Spice', 'High Volatile Oil', 'Digestive Properties']
        ),
        image: '/images/products/spices/ground-spices/ginger-powder1.webp',
        gallery: [
            '/images/products/spices/ground-spices/ginger-powder1.webp',
            '/images/products/spices/ground-spices/ginger-powder2.webp',
            '/images/products/spices/ground-spices/ginger-powder3.webp'
        ]
    },
    
    {
        ...createGroundSpiceProduct(
            'Asafoetida Powder (Hing)',
            [
                'Botanical Name: Ferula assa-foetida',
                'Form Available: Powder (Compounded/Blended)',
                'Asafoetida Content: Typically 20%–25% (rest is starch/flour blend)',
                'Color: Light to dark brown (varies by blend)',
                'Packaging Available: 10 Kg, 15 Kg, 25 Kg, 50 LBS',
                'Packaging Material Available: PP/Paper/Box',
                'GMO Status: Not Genetically Modified',
                'Labelling: As Per Buyer\'s Requirement',
                'Shelf Life: 1 Year From Production Date',
                'Storage Condition: Cool and Dry (20°C)',
                'Origin: India',
                'Specification: Detailed Specifications Provided Upon Request',
                'Microbiological Parameters: As Per Requirement & Importing Country Norms'
            ],
            ['Distinctive Aroma', 'Digestive Aid', 'Traditional Blend']
        ),
        image: '/images/products/spices/ground-spices/asafoetida-powder1.webp',
        gallery: [
            '/images/products/spices/ground-spices/asafoetida-powder1.webp',
            '/images/products/spices/ground-spices/asafoetida-powder2.webp',
            '/images/products/spices/ground-spices/asafoetida-powder3.webp'
        ]
    },
    
    {
        ...createGroundSpiceProduct(
            'Nutmeg Powder',
            [
                'Botanical Name: Myristica fragrans',
                'Form Available: Powder',
                'Moisture: 8% – 10% Maximum',
                'Oil Content: 6% – 16%',
                'Packaging Available: 10 Kg, 15 Kg, 25 Kg, 50 LBS',
                'Packaging Material Available: PP/Paper/Box',
                'GMO Status: Not Genetically Modified',
                'Labelling: As Per Buyer\'s Requirement',
                'Shelf Life: 1 Year From Production Date',
                'Storage Condition: Cool and Dry (20°C)',
                'Origin: India',
                'Specification: Detailed Specifications Provided Upon Request',
                'Microbiological Parameters: As Per Requirement & Importing Country Norms'
            ],
            ['Warm & Sweet', 'High Oil Content', 'Aromatic Intensity']
        ),
        image: '/images/products/spices/ground-spices/nutmeg-powder1.webp',
        gallery: [
            '/images/products/spices/ground-spices/nutmeg-powder1.webp',
            '/images/products/spices/ground-spices/nutmeg-powder2.webp',
            '/images/products/spices/ground-spices/nutmeg-powder3.webp'
        ]
    },
    
    {
        ...createGroundSpiceProduct(
            'Cinnamon Powder',
            [
                'Botanical Name: Cinnamomum verum (True Cinnamon) or Cinnamomum cassia (Cassia)',
                'Form Available: Powder',
                'Volatile Oil: 1% – 2%',
                'Moisture: Max 12%',
                'Packaging Available: 10 Kg, 15 Kg, 25 Kg, 50 LBS',
                'Packaging Material Available: PP/Paper/Box',
                'GMO Status: Not Genetically Modified',
                'Labelling: As Per Buyer\'s Requirement',
                'Shelf Life: 1 Year From Production Date',
                'Storage Condition: Cool and Dry (20°C)',
                'Origin: India',
                'Specification: Detailed Specifications Provided Upon Request',
                'Microbiological Parameters: As Per Requirement & Importing Country Norms'
            ],
            ['Sweet & Spicy', 'True Cinnamon Available', 'High Volatile Oil']
        ),
        image: '/images/products/spices/ground-spices/cinnamon-powder1.webp',
        gallery: [
            '/images/products/spices/ground-spices/cinnamon-powder1.webp',
            '/images/products/spices/ground-spices/cinnamon-powder2.webp',
            '/images/products/spices/ground-spices/cinnamon-powder3.webp'
        ]
    }
];