import { Product } from './products';

const createSpiceBlendProduct = (
    name: string,
    specifications: string[],
    additionalFeatures: string[] = []
): Product => {
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  
    const baseFeatures = [
        'Premium Blend',
        'Authentic Recipe',
        'Balanced Flavor',
        'Export Quality',
        'Traditional Processing'
    ];
    
    const features = [...baseFeatures, ...additionalFeatures];
  
    return {
      id: slug,
      name,
      slug,
      description: `Authentic ${name.toLowerCase()} blend made from premium quality spices. Carefully crafted to deliver traditional flavors and aroma.`,
      specifications,
      features,
      applications: [
        'Traditional Cooking',
        'Restaurant Use',
        'Food Processing',
        'Ready Meals',
        'Seasoning Blends',
        'International Cuisine'
      ],
      packagingOptions: [
        'PP Bags',
        'Paper Bags', 
        'Food Grade Boxes',
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

export const spiceBlendProducts: Product[] = [
    createSpiceBlendProduct(
        'Garam Masala',
        [
            'Botanical Name: Blend of Various Spices (Coriander, Cumin, Clove, Cinnamon, Black Pepper, Cardamom, Nutmeg, etc.)',
            'Form Available: Powder',
            'Flavor Profile: Warm, aromatic, spicy',
            'Color: Brown to dark brown',
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
        ['Traditional Recipe', 'Warming Spices', 'Versatile Use']
    ),
    
    createSpiceBlendProduct(
        'Chat Masala',
        [
            'Botanical Name: Blend of Various Spices (Black Salt, Dry Mango Powder, Cumin, Coriander, Asafoetida, etc.)',
            'Form Available: Powder',
            'Flavor Profile: Tangy, salty, slightly spicy',
            'Color: Light brown to greyish-brown',
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
        ['Tangy Flavor', 'Street Food Essential', 'Unique Blend']
    ),
    
    createSpiceBlendProduct(
        'Chicken Masala',
        [
            'Botanical Name: Blend of Dehydrated Chicken Extract, Spices, Salt, Starch, Flavoring Agents',
            'Form Available: Powder or Granules',
            'Flavor Profile: Savory, umami, chicken-flavored',
            'Color: Light yellow to beige',
            'Packaging Available: 10 Kg, 15 Kg, 25 Kg, 50 LBS',
            'Packaging Material Available: PP/Paper/Box',
            'GMO Status: Not Genetically Modified',
            'Labelling: As Per Buyer\'s Requirement',
            'Shelf Life: 1 Year From Production Date',
            'Storage Condition: Cool and Dry (20°C)',
            'Origin: India',
            'Specification: Detailed Specifications Provided Upon Request',
            'Microbiological Parameters: As Per Requirement & Importing Country Norms',
            'Note: Can be supplied in vegetarian flavor upon request (synthetic flavoring, no meat content)'
        ],
        ['Savory Profile', 'Umami Rich', 'Vegetarian Option Available']
    ),
    
    createSpiceBlendProduct(
        'Garlic Flax Powder',
        [
            'Botanical Name: Allium sativum',
            'Form Available: Powder (Ground from Dehydrated Garlic Flakes)',
            'Color: Off-white to pale yellow',
            'Flavor/Aroma: Strong, pungent, characteristic of fresh garlic',
            'Mesh Size: 80 – 100 mesh (customizable as per requirement)',
            'Moisture Content: Max 6%',
            'Purity: 99% Min (free from additives, impurities, and contaminants)',
            'Packaging Available: 10 Kg, 15 Kg, 25 Kg, 50 LBS',
            'Packaging Material Available: PP/Paper/Food-Grade Box with Inner Liner',
            'GMO Status: Not Genetically Modified',
            'Labelling: As Per Buyer\'s Requirement',
            'Shelf Life: 1 Year From Production Date',
            'Storage Condition: Cool and Dry (20°C), Keep away from direct sunlight and moisture',
            'Origin: India',
            'Specification: Detailed Specifications Provided Upon Request',
            'Microbiological Parameters: As Per Requirement & Importing Country Norms'
        ],
        ['Intense Garlic Flavor', 'High Purity', 'Custom Mesh Size']
    )
];