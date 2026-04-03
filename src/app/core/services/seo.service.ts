import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Product } from '../../shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  // 🌟 MÉTODO PARA LA URL CANÓNICA (Adiós error de PageSpeed)
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

  // ========================================================================
  // 🚀 NUEVOS MÉTODOS PARA LA LANDING Y NEGOCIO LOCAL
  // ========================================================================

  // 🌟 SCHEMA DE EMPRESA LOCAL (Con zonas de cobertura actualizadas)
  setLocalBusinessStructuredData() {
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "King Panel",
      "image": "https://www.kingpanel.com/assets/logo.png",
      "telephone": "+52-55-1234-5678",
      "description": "Suministro masivo y especializado de sistemas de construcción ligera. Cobertura directa en el Área Metropolitana, Centro del País y envíos a toda la República Mexicana.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Estado de México",
        "addressRegion": "MEX",
        "addressCountry": {
          "@type": "Country",
          "name": "MX"
        }
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Ciudad de México"
        },
        {
          "@type": "State",
          "name": "Estado de México"
        },
        {
          "@type": "Place",
          "name": "Zona Metropolitana del Valle de México"
        },
        {
          "@type": "Country",
          "name": "Mexico"
        }
      ]
    };
    
    this.setSchema('local-business-schema', schema);
  }

  // 🌟 SCHEMA DEL CARRUSEL DE CATEGORÍAS (Para la Landing)
  setLandingItemListStructuredData() {
    const itemListSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Catálogo de Materiales King Panel",
      "description": "Sistemas especializados para construcción ligera y obra civil.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Product",
            "name": "Sistemas de Perfilería Metálica",
            "description": "Fabricación propia de perfiles de alta resistencia para sistemas de construcción ligera. Calibre exacto garantizado.",
            "brand": { "@type": "Brand", "name": "King Panel" },
            "image": "https://www.kingpanel.com/assets/productos/perfil.webp", 
            "url": "https://www.kingpanel.com/producto/perfiles-metalicos", 
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "150" }
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Product",
            "name": "Tablaroca,Paneles de Yeso, ",
            "description": "Placas de yeso, cemento y maderas para cubiertas, fachadas y divisiones interiores.",
            "brand": { "@type": "Brand", "name": "King Panel" },
            "image": "https://www.kingpanel.com/assets/productos/panel.webp",
            "url": "https://www.kingpanel.com/producto/paneles", 
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "85" }
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Product",
            "name": "Compuestos y Pastas",
            "description": "Sistemas completos para el tratamiento de juntas, resanes y texturizados finales.",
            "brand": { "@type": "Brand", "name": "King Panel" },
            "image": "https://www.kingpanel.com/assets/productos/compuestos.webp",
            "url": "https://www.kingpanel.com/producto/compuestos-pastas", 
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.7", "reviewCount": "210" }
          }
        }
      ]
    };
    this.setSchema('landing-item-list', itemListSchema);
  }

  // 🌟 SCHEMA DE PREGUNTAS FRECUENTES (Dinámico)
  setFAQStructuredData(faqs: any[]) {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.pregunta,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.respuesta
        }
      }))
    };
    this.setSchema('faq-page-schema', faqSchema);
  }

  // ========================================================================
  // 🛡️ TUS MÉTODOS ORIGINALES (Intactos)
  // ========================================================================

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


  // 🌟 NUEVO MÉTODO: MÚLTIPLES PRODUCTOS EN UNA SOLA PÁGINA
  setMultipleProductsOnPage(familyProduct: Product) {
    // 1. Verificamos que la familia tenga subproductos (las tarjetas)
    if (!familyProduct.subProducts || familyProduct.subProducts.length === 0) {
      this.setProductStructuredData(familyProduct); // Fallback de seguridad
      return;
    }

    // 2. Mapeamos (recorremos) tus tarjetas para crear un producto SEO por cada una
    const schemasArray = familyProduct.subProducts.map(sub => ({
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": `${sub.name} | King Panel`, // Ej: "Panel Resistente a la Humedad | King Panel"
      "description": sub.shortDescription,
      "image": sub.image ? `https://www.kingpanel.com/${sub.image}` : "https://www.kingpanel.com/assets/logo.png",
      "sku": sub.id,
      "brand": { 
        "@type": "Brand", 
        "name": "King Panel" 
      },
      "offers": {
        "@type": "Offer",
        "url": `https://www.kingpanel.com/producto/${familyProduct.id}`, // Todos apuntan a la misma URL padre
        "priceCurrency": "MXN",
        "price": "0.00",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition"
      }
    }));

    // 3. Inyectamos el arreglo con todos los productos al mismo tiempo
    this.setSchema('product-structured-data', schemasArray);
  }

  // 🌟 SCHEMA DE MIGAS DE PAN (BREADCRUMBS)
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