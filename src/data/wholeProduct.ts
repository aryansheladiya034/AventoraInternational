import { Product } from './products';

const createWholeProduct = (
    name: string,
    specifications: string[],
    additionalFeatures: string[] = []
): Product => {
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  
    const baseFeatures = [
        'Premium Quality',
        'Export Grade',
        'Natural Processing',
        'Quality Assured',
        'Freshness Guaranteed'
    ];
    
    const features = [...baseFeatures, ...additionalFeatures];
  
    return {
      id: slug,
      name,
      slug,
      description: `High-quality ${name.toLowerCase()} sourced from premium farms in India. Known for exceptional flavor, aroma, and nutritional benefits.`,
      specifications,
      features,
      applications: [
        'Culinary Uses',
        'Food Processing',
        'Spice Blends',
        'Traditional Medicine',
        'Oil Extraction',
        'Cosmetic Products'
      ],
      packagingOptions: [
        'Paper Bags',
        'Poly Bags', 
        'Jute Bags',
        'PP Bags',
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

export const wholeProducts: Product[] = [
{

   ...createWholeProduct(
        'Green Cardamom',
        [
            'Botanical Name: Elettaria Cardamomum',
            'Origin: India',
            'Color: Deep Green, Fast Green',
            'GMO Status: Not Genetically Modified',
            'Size: 6, 7, 8 mm or Longer',
            'Foreign Matter: 2% Basis',
            'Immature Cardamom: 5% By Count',
            'Thrips: Nil or 3 by Count',
            'Packaging: 10 kg, 15 Kg, 25 Kg & 50 Kg PP/Jute Bag',
            'Shelf Life: 1 Year From Production Date'
        ],
        ['Aromatic Excellence', 'Premium Grade', 'Hand-Selected']
    ),
    image: '/images/products/spices/whole-spices/green-cardamom-1.webp',
    gallery: [
        '/images/products/spices/whole-spices/green-cardamom-1.webp',
        '/images/products/spices/whole-spices/green-cardamom-2.webp',
        '/images/products/spices/whole-spices/green-cardamom-3.webp'
    ]
    
},
{
    ...createWholeProduct(
        'Cumin Seeds',
        [
            'Origin: India',
            'Type: Machine Clean & Sortex Clean',
            'Quality: Singapore & Europe',
            'Purity: 98%, 99%, 99.50%, 99.80%',
            'Flavor: Aromatic With A Penetrating Flavor',
            'GMO Status: Not Genetically Modified',
            'Packaging: 10 Kg, 15 Kg, 25 Kg & 50 LBS Paper/Poly/Jute Bags',
            'Labeling: As Per Buyer\'s Requirement',
            'Specification: Detail Specification Will Be Provided Upon Request',
            'Microbiological Parameters: As Per Requirement & Importing Country Norms',
            'Shelf Life: 1 Year From Production Date'
        ],
        ['Machine Cleaned', 'Sortex Cleaned', 'Multiple Purity Grades']
    ),
    image: '/images/products/spices/whole-spices/cumin1.webp',
    gallery: [
        '/images/products/spices/whole-spices/cumin1.webp',
        '/images/products/spices/whole-spices/cumin2.webp',
        '/images/products/spices/whole-spices/cumin3.webp'
    ]
},
{
    ...createWholeProduct(
        'Dry Red Chili',
        [
            'Botanical Name: Capsicum Frutescens',
            'Origin: India',
            'Type: With Stem, Stemless, Stemcut',
            'Varieties: Sanam S4, Teja S17, Byadgie, Wrinkle 273, Wonderhot, Mundu Red',
            'Color: Red',
            'Moisture: 10% Max',
            'Broken Chillies: 7% Max',
            'Loose Seeds: 2% Max',
            'Damaged And Discolored Pods: 6%',
            'Dietary Fiber: 6%',
            'Packaging: 10 Kg, 15 Kg, 25 Kg & 50 LBS Thin Jute/Perforated Poly Bags',
            'Labeling: As Per Buyer\'s Requirement',
            'Shelf Life: 1 Year From Production Date'
        ],
        ['Multiple Varieties', 'Rich Color', 'High Heat Level']
    ),
    image: '/images/products/spices/whole-spices/dried-chilli1.webp',
    gallery: [
        '/images/products/spices/whole-spices/dried-chilli1.webp',
        '/images/products/spices/whole-spices/dried-chilli2.webp',
        '/images/products/spices/whole-spices/dried-chilli3.webp'
    ]
},  
    
{
    ...createWholeProduct(
        'Cloves',
        [
            'Botanical Name: Eugenia Caryophylus',
            'Color: Natural Brown',
            'Type: Machine & Handpicked',
            'Moisture: Less Than 12%',
            'Stems: 3 – 5%',
            'Baby Cloves: 2%',
            'Headless Cloves: 3% Max',
            'Shelf Life: 1 Year From Production Date',
            'GMO Status: Not Genetically Modified',
            'Packaging: 10 Kg, 15 Kg, 25 Kg & 50 LBS Paper/Poly/Jute Bags',
            'Labeling: As Per Buyer\'s Requirement'
        ],
        ['Handpicked Quality', 'Strong Aroma', 'Natural Brown Color']
    ),
    image: '/images/products/spices/whole-spices/cloves1.webp',
    gallery: [
        '/images/products/spices/whole-spices/cloves1.webp',
        '/images/products/spices/whole-spices/cloves2.webp',
        '/images/products/spices/whole-spices/cloves3.webp'
    ]
},
{
    ...createWholeProduct(
        'Black Pepper',
        [
            'Botanical Name: Piper Nigrum',
            'Origin: India',
            'GMO Status: Not Genetically Modified',
            'Type: Machine Clean & Sortex Clean',
            'Size (mm): 4.75, 4.25, 4',
            'Moisture Content: 7%, 10%, 12%',
            'Purity: 99%, 99.50%',
            'Extraneous Matter: 0.50%, 1%, 1.50%',
            'Light Berries: 2%, 3%, 4%',
            'Shelf Life: 1 Year From Production Date',
            'Packaging: 10 Kg, 15 Kg, 25 Kg & 50 LBS Paper/Poly/Box Bags',
            'Labeling: As Per Buyer\'s Requirement'
        ],
        ['King of Spices', 'Multiple Size Grades', 'High Purity']
    ),
    image: '/images/products/spices/whole-spices/black-papper1.webp',
    gallery: [
        '/images/products/spices/whole-spices/black-papper1.webp',
        '/images/products/spices/whole-spices/black-papper2.webp',
        '/images/products/spices/whole-spices/black-papper3.webp'
    ]
},
{
    ...createWholeProduct(
        'Coriander Seeds',
        [
            'Type: Machine Clean & Sortex Clean',
            'Purity: From 98% To 99.50%',
            'Grades: Eagle, Scooter, Single Parrot, Double Parrot',
            'Form Available: Whole, Split And Powder',
            'Origin: India',
            'Shelf Life: 1 Year From Production Date',
            'GMO Status: Not Genetically Modified',
            'Storage Condition: Cool And Dry (20°C)',
            'Packaging: 10 Kg, 15 Kg, 25 Kg & 50 LBS Paper/Poly Bags',
            'Labeling: As Per Buyer\'s Requirement',
            'Specification: Detail Specification Will Be Provided Upon Request',
            'Microbiological Parameters: As Per Requirement & Importing Country Norms'
        ],
        ['Multiple Grades Available', 'Versatile Forms', 'Premium Sorting']
    ),
    image: '/images/products/spices/whole-spices/coriander-seed1.webp',
    gallery: [
        '/images/products/spices/whole-spices/coriander-seed1.webp',
        '/images/products/spices/whole-spices/coriander-seed2.webp',
        '/images/products/spices/whole-spices/coriander-seed3.webp'
    ]
},
{
    ...createWholeProduct(
        'Turmeric Dried',
        [
            'Scientific Name: Curcuma Longa',
            'Origin: India',
            'Type: Finger/Bulb',
            'Flavor: Aromatic with a penetrating flavor',
            'Moisture: 12% Max',
            'Extraneous Foreign Matter (% by Weight): 0.50% Max',
            'Whole Insects Dead: 3 Max (By Count)',
            'Excreta Mammalian (By mg./lb): 5 mg/lb Max',
            'Excreta other (By mg./lb): 5 mg/lb Max',
            'Mold (% by wgt.): 3% Max',
            'Insect defiled/infested (% by wgt.): 2.5% Max',
            'Salmonella: Absent/25gms',
            'Packaging: 10 Kg, 15 Kg, 25 Kg & 50 LBS Paper/Poly Bags',
            'Labeling: As Per Buyer\'s Requirement',
            'Shelf Life: 1 Year From Production Date'
        ],
        ['Golden Spice', 'Natural Curcumin', 'Medicinal Properties']
    ),
    image: '/images/products/spices/whole-spices/turmeric-dried1.webp',
    gallery: [
        '/images/products/spices/whole-spices/turmeric-dried1.webp',
        '/images/products/spices/whole-spices/turmeric-dried2.webp',
        '/images/products/spices/whole-spices/turmeric-dried3.webp'
    ]
},
{
    ...createWholeProduct(
        'Fennel Seeds',
        [
            'Scientific Name: Anethum Graveolens',
            'Origin: India',
            'GMO Status: Not Genetically Modified',
            'Flavor: Aromatic with a penetrating flavor',
            'Moisture: 10% Max',
            'Purity: 99.85%/99%/98% (Europe/Singapore)',
            'Extraneous Foreign Matter (% by Weight): 0.50% Max',
            'Whole Insects Dead (By Count): 4 Max',
            'Excreta Mammalian (By mg./lb): 3 mg/lb Max',
            'Excreta other (By mg./lb): 5 mg/lb Max',
            'Mold (% by wgt.): 1% Max',
            'Insect defiled/infested (% by wgt.): 1% Max',
            'Total Ash: 10% Max',
            'Acid Insoluble Ash: 1.25% Max',
            'Salmonella: Absent/25 Gms',
            'Shelf Life: 1 Year From Production Date',
            'Packaging: 05Kg, 10 Kg, 15 Kg, 25 Kg, 50 Kgs of Jute/PP Bags',
            'Labeling: As Per Buyer\'s Requirement'
        ],
        ['Sweet Aroma', 'Digestive Properties', 'Multiple Purity Grades']
    ),
    image: '/images/products/spices/whole-spices/fennel-seeds1.webp',
    gallery: [
        '/images/products/spices/whole-spices/fennel-seeds1.webp',
        '/images/products/spices/whole-spices/fennel-seeds2.webp',
        '/images/products/spices/whole-spices/fennel-seeds3.webp'
    ]
},
{
    ...createWholeProduct(
    
        'Fenugreek Seeds',
        [
            'Type: Machine Clean & Sortex Clean',
            'Origin: India',
            'Odor And Flavor: Odor And Taste Are Typical, A Bit Of Celery And Bitter. Free From Foreign Odor And Taste, Such As Mustiness Or Rancidity',
            'Purity: 99.50%, 99%, 98.50%',
            'Total Ash: 9.5% Max',
            'Shelf Life: 1 Year From Production Date',
            'GMO Status: Not Genetically Modified',
            'Storage Condition: Cool And Dry (20°C)',
            'Packaging: 10 Kg, 15 Kg, 25 Kg & 50 LBS Paper/Poly Bags',
            'Labeling: As Per Buyer\'s Requirement',
            'Specification: Detail Specification Will Be Provided Upon Request',
            'Microbiological Parameters: As Per Requirement & Importing Country Norms'
        ],
        ['Distinctive Flavor', 'Health Benefits', 'Clean Sorting']
    ),
    image: '/images/products/spices/whole-spices/fenugreek-seeds1.webp',
    gallery: [
        '/images/products/spices/whole-spices/fenugreek-seeds1.webp',
        '/images/products/spices/whole-spices/fenugreek-seeds2.webp',
        '/images/products/spices/whole-spices/fenugreek-seeds3.webp'
    ]
},
{
    ...createWholeProduct(
        'Mustard Seeds',
        [
            'Color Varieties: Black, Brown, Yellow (White)',
            'Purity: 99% to 99.95%',
            'Moisture Content: 6% to 8% Maximum',
            'Oil Content: 38% to 42% (varies by type)',
            'Aflatoxin Level: Within permissible limits (typically <5 PPB)',
            'Foreign Matter: Max 0.5%',
            'Broken/Damaged Seeds: Max 1%',
            'Origin: India',
            'Packaging: 10 kg, 15 kg, 25 kg, 50 kg PP/Jute Bag',
            'GMO Status: Not Genetically Modified',
            'Shelf Life: 1 Year From Production Date'
        ],
        ['Multiple Color Varieties', 'High Oil Content', 'Superior Purity']
    ),
    image: '/images/products/spices/whole-spices/mustard-seed1.webp',
    gallery: [
        '/images/products/spices/whole-spices/mustard-seed1.webp',
        '/images/products/spices/whole-spices/mustard-seed2.webp',
        '/images/products/spices/whole-spices/mustard-seed3.webp'
    ]
},
{
    ...createWholeProduct(
        'Nutmeg',
        [
            'Scientific Name: Myristica',
            'GMO Status: Not Genetically Modified',
            'Pieces Count Per Kg: 200 To 215 Pieces Per Kg',
            'Moisture: 10% To 12% Maximum',
            'Aflatoxin: 10% To 12% PPB',
            'Broken: 2% To 3% Max',
            'Origin: India',
            'Packaging: 10 kg, 15 Kg, 25 Kg & 50 Kg PP/Jute Bag',
            'Labeling: As Per Buyer\'s Requirement',
            'Shelf Life: 1 Year From Production Date'
        ],
        ['Aromatic Warmth', 'Premium Whole', 'Counted Quality']
    ),
    image: '/images/products/spices/whole-spices/nutmeg1.webp',
    gallery: [
        '/images/products/spices/whole-spices/nutmeg1.webp',
        '/images/products/spices/whole-spices/nutmeg2.webp',
        '/images/products/spices/whole-spices/nutmeg3.webp'
    ]
},
{
    ...createWholeProduct(
        'Tamarind',
        [
            'Botanical Name: Tamarindus Indica',
            'Origin: India',
            'Type: With Seeds/Without Seeds/Raw',
            'Quality: Black Chocolate/Red Brown/Golden Brown/Light Brown',
            'GMO Status: Not Genetically Modified',
            'Packaging: 450g/500g, 1 Kg, 5 Kg, 10 Kg Or As Per Buyer Requirement',
            'Packaging Type: Packet/Box Or As Per Clients Needs',
            'Labeling: As Per Buyers Requirement',
            'Shelf Life: 1 Year From Production Date'
        ],
        ['Multiple Quality Grades', 'Tangy Flavor', 'Flexible Packaging']
    ),
    image: '/images/products/spices/whole-spices/tamarind1.webp',
    gallery: [
        '/images/products/spices/whole-spices/tamarind1.webp',
        '/images/products/spices/whole-spices/tamarind2.webp',
        '/images/products/spices/whole-spices/tamarind3.webp'
    ]
}
];


