// 1. La variante de tamaño/calibre (esto se queda igual)
export interface ProductVariant {
  id: string;
  name: string; 
  calibre: string; 
  sku?: string; 
}

// 2. NUEVO: El Sub-producto específico (ej. "Poste Metálico", "Esquinero")
export interface SubProduct {
  id: string;
  name: string;
  shortDescription: string;
  image: string; // Cada sub-producto necesita su propia foto
  variants: ProductVariant[]; // Las medidas de este sub-producto en específico
}

// 3. El Producto Principal / Familia (ej. "Perfiles Metálicos")
export interface Product {
  id: string;
  category: string;
  name: string; // "Sistemas de Perfiles Metálicos"
  shortDescription: string;
  image: string; // La foto hero de la categoría entera
  inStock: boolean;
  features?: string[]; 
  // EL CAMBIO CLAVE: En lugar de variantes directas, ahora tiene una lista de sub-productos
  subProducts?: SubProduct[]; 
}