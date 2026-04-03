// 1. La variante de tamaño/calibre (¡Las Píldoras!)
export interface ProductVariant {
  id: string;
  name: string; 
  calibre?: string; 
  image?: string; 
  sku?: string; 
  empaques?: any[]; 
  empaqueSeleccionado?: any; 
}

// 2. El Sub-producto específico
export interface SubProduct {
  id: string;
  name: string;
  shortDescription: string;
  image: string; 
  variants: ProductVariant[]; 
}

// 3. El Producto Principal / Familia (Con SEO Integrado)
export interface Product {
  id: string;
  category: string;
  name: string; 
  shortDescription: string;
  image?: string; 
  inStock: boolean;
  features?: string[]; 
  subProducts?: SubProduct[]; 
  
  // 🔥 CAMPOS EXCLUSIVOS PARA EL ALGORITMO DE GOOGLE 🔥
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
}