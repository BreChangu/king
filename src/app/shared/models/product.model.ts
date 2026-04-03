// 1. La variante de tamaño/calibre (¡AQUÍ VAN LAS PÍLDORAS!)
export interface ProductVariant {
  id: string;
  name: string; 
  calibre?: string; // 🌟 Le ponemos "?" porque ahora algunos usan empaques en lugar de calibre directo
  image?: string; 
  sku?: string; 
  empaques?: any[]; // 🌟 AQUÍ VAN LOS EMPAQUES
  empaqueSeleccionado?: any; // 🌟 AQUÍ VA LA SELECCIÓN
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