// 1. La variante de tamaño/calibre
export interface ProductVariant {
  image?: string; // 🌟 EL CAMBIO: Agregamos el "?" aquí
  id: string;
  name: string; 
  calibre: string; 
  sku?: string; 
}

// 2. El Sub-producto específico
export interface SubProduct {
  id: string;
  name: string;
  shortDescription: string;
  image: string; 
  variants: ProductVariant[]; 
}

// 3. El Producto Principal / Familia
export interface Product {
  id: string;
  category: string;
  name: string; 
  shortDescription: string;
  image?: string; 
  inStock: boolean;
  features?: string[]; 
  subProducts?: SubProduct[]; 
}