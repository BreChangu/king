import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Product } from '../../shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  // 🌟 MÉTODO MAESTRO GENÉRICO (Para la Landing y otras páginas)
  setSchema(scriptId: string, schema: any) {
    // 1. Buscamos si ya existe el script para no duplicarlo
    const existingScript = this.document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    // 2. Lo creamos y lo inyectamos
    const script = this.document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    this.document.head.appendChild(script);
  }

  // 🌟 MÉTODO ESPECÍFICO (El que ya usábamos para el Product-Detail)
  setProductStructuredData(product: Product) {
    const structuredData = {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": product.name,
      "description": product.shortDescription,
      "image": product.subProducts && product.subProducts.length > 0 ? product.subProducts[0].image : "https://www.kingpanel.com/assets/logo.png",
      "sku": product.id,
      "brand": { "@type": "Brand", "name": "King Panel" },
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "124" }
    };
    
    // Usamos el método maestro
    this.setSchema('product-structured-data', structuredData);
  }

  clearStructuredData(scriptId: string = 'product-structured-data') {
    const existingScript = this.document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }
  }
}