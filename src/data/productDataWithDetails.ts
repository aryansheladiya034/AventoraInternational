import { productData as baseProductData } from './products';
import { peanutProducts } from './peanutProducts';
import { sesameProducts } from './sesameProducts';
import { onionProducts } from './onionProducts';
import { garlicProducts } from './garlicProducts';
import { wholeProducts } from './wholeProduct';
import { groundSpicesProducts } from './groundSpices';
import { spiceBlendProducts } from './spiceBlends';
import { pulsesProducts } from './pulses';
import { lentilsProducts } from './lentils';
import { compostablePlatesProducts } from './compostablePlates';
import { compostableBowlsProducts } from './compostableBowls';
import { clamShellProducts } from './clamShells';
import { compostableAccessoriesProducts } from './compostableAccessories';


// Create a copy of the base product data
const productData = { ...baseProductData };

// Find and update the oil-seeds category
const oilSeedsCategory = productData.categories.find(cat => cat.id === 'oil-seeds');
if (oilSeedsCategory) {
  // Update peanut products
  const peanutSubCategory = oilSeedsCategory.subCategories.find(sub => sub.id === 'peanut');
  if (peanutSubCategory) {
    peanutSubCategory.products = peanutProducts;
  }
  
  // Update sesame products
  const sesameSubCategory = oilSeedsCategory.subCategories.find(sub => sub.id === 'sesame');
  if (sesameSubCategory) {
    sesameSubCategory.products = sesameProducts;
  }
}

// Find and update the dehydrated-products category
const dehydratedCategory = productData.categories.find(cat => cat.id === 'dehydrated-products');
if (dehydratedCategory) {
  // Update onion products
  const onionSubCategory = dehydratedCategory.subCategories.find(sub => sub.id === 'dehydrated-onion');
  if (onionSubCategory) {
    onionSubCategory.products = onionProducts;
  }

  const driedGarlicSubCategory = dehydratedCategory.subCategories.find(sub => sub.id === 'dehydrated-garlic');
  if (driedGarlicSubCategory) {
    driedGarlicSubCategory.products = garlicProducts;
  }
}

// Find and update the spices category
const spicesCategory = productData.categories.find(cat => cat.id === 'spices');
if (spicesCategory) {
  // Update whole spices
  const wholeSpicesSubCategory = spicesCategory.subCategories.find(sub => sub.id === 'whole-spices');
  if (wholeSpicesSubCategory) {
    wholeSpicesSubCategory.products = wholeProducts;
  }
  
  // Update ground spices
  const groundSpicesSubCategory = spicesCategory.subCategories.find(sub => sub.id === 'ground-spices');
  if (groundSpicesSubCategory) {
    groundSpicesSubCategory.products = groundSpicesProducts;
  }
  
  // Update spice blends
  const spiceBlendsSubCategory = spicesCategory.subCategories.find(sub => sub.id === 'spice-blends');
  if (spiceBlendsSubCategory) {
    spiceBlendsSubCategory.products = spiceBlendProducts;
  }
}

// Find and update the pulses-lentils category
const pulsesLentilsCategory = productData.categories.find(cat => cat.id === 'pulses-lentils');
if (pulsesLentilsCategory) {
  // Update pulses
  const pulsesSubCategory = pulsesLentilsCategory.subCategories.find(sub => sub.id === 'pulses');
  if (pulsesSubCategory) {
    pulsesSubCategory.products = pulsesProducts;
  }
  
  // Update lentils
  const lentilsSubCategory = pulsesLentilsCategory.subCategories.find(sub => sub.id === 'lentils');
  if (lentilsSubCategory) {
    lentilsSubCategory.products = lentilsProducts;
  }
}

// Find and update the compostable-tableware category
const compostableTableware = productData.categories.find(cat => cat.id === 'compostable-tableware');
if (compostableTableware) {
  // Update compostable plates
  const platesSubCategory = compostableTableware.subCategories.find(sub => sub.id === 'compostable-plates');
  if (platesSubCategory) {
    platesSubCategory.products = compostablePlatesProducts;
  }
  
  // Update compostable bowls
  const bowlsSubCategory = compostableTableware.subCategories.find(sub => sub.id === 'compostable-bowls');
  if (bowlsSubCategory) {
    bowlsSubCategory.products = compostableBowlsProducts;
  }
  
  // Update clam shells
  const clamShellsSubCategory = compostableTableware.subCategories.find(sub => sub.id === 'compostable-clam-shells');
  if (clamShellsSubCategory) {
    clamShellsSubCategory.products = clamShellProducts;
  }
  
  // Update cups & cutlery
  const cupsAndCutlerySubCategory = compostableTableware.subCategories.find(sub => sub.id === 'compostable-cups-cutlery');
  if (cupsAndCutlerySubCategory) {
    cupsAndCutlerySubCategory.products = compostableAccessoriesProducts;
  }
}

export { productData };