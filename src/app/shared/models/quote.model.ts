// quote.model.ts
export interface QuoteItem {
  id: string; // Un ID único para el carrito (combinación de producto + variante)
  productId: string;
  productName: string;
  variantName: string; // ej. '4.10 cm x 2.44 m'
  calibre?: string;     // ej. '26'
  image: string;
  quantity: number;
  category?: string; // Puedes definir esto mejor según tu estructura de categorías|
}