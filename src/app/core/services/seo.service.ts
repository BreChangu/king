import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Product } from '../../shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  // 🌟 NUEVO: MÉTODO PARA LA URL CANÓNICA (Adiós error de PageSpeed)
  setCanonicalURL(url: string) {
    const head = this.document.head;
    let link: HTMLLinkElement | null = this.document.querySelector('link[rel="canonical"]');
    
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  // 🌟 MÉTODO MAESTRO GENÉRICO
  setSchema(scriptId: string, schema: any) {
    const existingScript = this.document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    const script = this.document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    this.document.head.appendChild(script);
  }

  // 🌟 MÉTODO ESPECÍFICO DE PRODUCTO
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
    
    this.setSchema('product-structured-data', structuredData);
  }

  // 🌟 NUEVO: SCHEMA DE MIGAS DE PAN (BREADCRUMBS)
  setBreadcrumbs(breadcrumbs: { name: string, url: string }[]) {
    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((bc, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": bc.name,
        "item": bc.url
      }))
    };
    this.setSchema('breadcrumbs-schema', schema);
  }

  clearStructuredData(scriptId: string = 'product-structured-data') {
    const existingScript = this.document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }
  }
}