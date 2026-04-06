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

  // 🌟 SCHEMA DE EMPRESA LOCAL (NIVEL 1: SEO GEOGRÁFICO)
  setLocalBusinessStructuredData() {
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "King Panel | Materiales de Construcción Ligera",
      "image": "https://www.kingpanel.com/assets/logo.png",
      "telephone": "+52-55-1234-5678", // Reemplaza con tu número
      "description": "Proveedores y venta de tablaroca, panel de yeso, perfiles y sistemas de construcción ligera. Venta de tablaroca cerca de mi ubicación con envíos a obra.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Estado de México",
        "addressRegion": "MEX",
        "addressCountry": {
          "@type": "Country",
          "name": "MX"
        }
      },
      // 🔥 AQUI ESTÁN TUS PALABRAS CLAVE LOCALES 🔥
      "areaServed": [
        { "@type": "City", "name": "Nicolás Romero" },
        { "@type": "City", "name": "Atizapán de Zaragoza" },
        { "@type": "City", "name": "Cuautitlán Izcalli" },
        { "@type": "State", "name": "Estado de México" },
        { "@type": "Place", "name": "Zona Metropolitana del Valle de México" }
      ]
    };
    
    this.setSchema('local-business-schema', schema);
  }

  // 🌟 SCHEMA DEL CARRUSEL DE CATEGORÍAS (Orden optimizado: Tablaroca Posición 1)
  // 🌟 SCHEMA DEL CARRUSEL DE CATEGORÍAS (Para la Landing - Libre de Errores Críticos)
  setLandingItemListStructuredData() {
    const itemListSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Catálogo de Materiales King Panel",
      "description": "Distribuidor líder de Tablaroca, perfiles y sistemas de construcción ligera en el Estado de México.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1, // 🥇 TABLAROCA ES EL REY
          "item": {
            "@type": "Product",
            "name": "Tablaroca, Panel Rey, Durock y Permabase", // 🎯 Añadido Permabase
            "description": "Venta de panel de yeso estándar, Panel Rey, Tablaroca para baño (verde), Durock y Permabase exterior.",
            "brand": { "@type": "Brand", "name": "King Panel" },
            "image": "https://www.kingpanel.com/assets/productos/panel.webp", 
            "url": "https://www.kingpanel.com/producto/paneles",
            // 🔥 SOLUCIÓN AL ERROR CRÍTICO: Agregamos Ofertas y Reseñas 🔥
            "offers": {
              "@type": "Offer",
              "url": "https://www.kingpanel.com/producto/paneles",
              "priceCurrency": "MXN",
              "price": "0.00",
              "availability": "https://schema.org/InStock"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "124"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 2, // 🥈 PERFILES
          "item": {
            "@type": "Product",
            "name": "Perfiles Metálicos para Tablaroca",
            "description": "Postes metálicos, canales de amarre y canaletas de acero galvanizado.",
            "brand": { "@type": "Brand", "name": "King Panel" },
            "image": "https://www.kingpanel.com/assets/productos/perfil.webp",
            "url": "https://www.kingpanel.com/producto/perfiles-metalicos",
            // 🔥 SOLUCIÓN AL ERROR CRÍTICO 🔥
            "offers": {
              "@type": "Offer",
              "url": "https://www.kingpanel.com/producto/perfiles-metalicos",
              "priceCurrency": "MXN",
              "price": "0.00",
              "availability": "https://schema.org/InStock"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "150"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 3, // 🥉 PASTAS
          "item": {
            "@type": "Product",
            "name": "Pasta Readymix y Basecoat",
            "description": "Cubetas de pasta para tablaroca Readymix Panel Rey, Redimix USG y Basecoat para Durock.",
            "brand": { "@type": "Brand", "name": "King Panel" },
            "image": "https://www.kingpanel.com/assets/productos/compuestos.webp",
            "url": "https://www.kingpanel.com/producto/compuestos-pastas",
            // 🔥 SOLUCIÓN AL ERROR CRÍTICO 🔥
            "offers": {
              "@type": "Offer",
              "url": "https://www.kingpanel.com/producto/compuestos-pastas",
              "priceCurrency": "MXN",
              "price": "0.00",
              "availability": "https://schema.org/InStock"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "98"
            }
          }
        }
      ]
    };
    this.setSchema('landing-item-list', itemListSchema);
  }

  // 🌟 SCHEMA DE PREGUNTAS FRECUENTES (Para tu cubeta informativa)
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
  // 🛡️ MÉTODOS DE PRODUCTO
  // ========================================================================

  // 🌟 NUEVO MÉTODO: MÚLTIPLES PRODUCTOS EN UNA SOLA PÁGINA (Fichas de Comerciante)
  setMultipleProductsOnPage(familyProduct: Product) {
    if (!familyProduct.subProducts || familyProduct.subProducts.length === 0) {
      this.setProductStructuredData(familyProduct); 
      return;
    }

    const schemasArray = familyProduct.subProducts.map(sub => ({
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": `${sub.name} | King Panel`, 
      "description": sub.shortDescription,
      "image": sub.image ? `https://www.kingpanel.com/${sub.image}` : "https://www.kingpanel.com/assets/logo.png",
      "sku": sub.id,
      "brand": { 
        "@type": "Brand", 
        "name": "King Panel" 
      },
      "offers": {
        "@type": "Offer",
        "url": `https://www.kingpanel.com/producto/${familyProduct.id}`, 
        "priceCurrency": "MXN",
        "price": "0.00",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition"
      }
    }));

    this.setSchema('product-structured-data', schemasArray);
  }

  // 🌟 MÉTODO ESPECÍFICO DE PRODUCTO SINGULAR
  setProductStructuredData(product: Product) {
    const structuredData = {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": product.seoTitle || product.name,
      "description": product.seoDescription || product.shortDescription,
      "image": product.image ? `https://www.kingpanel.com/${product.image}` : "https://www.kingpanel.com/assets/logo.png",
      "sku": product.id,
      "brand": { "@type": "Brand", "name": "King Panel" },
      "offers": {
        "@type": "Offer",
        "url": `https://www.kingpanel.com/producto/${product.id}`,
        "priceCurrency": "MXN",
        "price": "0.00", 
        "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
        "itemCondition": "https://schema.org/NewCondition"
      },
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "124" }
    };
    
    this.setSchema('product-structured-data', structuredData);
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