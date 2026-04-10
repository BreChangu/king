import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Product } from '../../shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private metaService: Meta,
    private titleService: Title
  ) { }

  // ========================================================================
  // 📱 1. ETIQUETAS META BÁSICAS Y OPEN GRAPH (WHATSAPP, LINKEDIN, SEO)
  // ========================================================================
  setMetaTags(config: { title: string, description: string, url: string, image?: string }) {
    // Título de la pestaña del navegador
    this.titleService.setTitle(`${config.title} | King Panel`);
    
    // Descripción para los resultados de Google
    this.metaService.updateTag({ name: 'description', content: config.description });

    // Etiquetas Open Graph para Redes Sociales y WhatsApp
    this.metaService.updateTag({ property: 'og:title', content: `${config.title} | King Panel` });
    this.metaService.updateTag({ property: 'og:description', content: config.description });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:url', content: config.url });

    // 🚀 LA FOTO DE PORTADA PARA WHATSAPP (URL Absoluta)
    const imageUrl = config.image || 'https://www.kingpanel.com/assets/brands/King-portada.jpeg';
    this.metaService.updateTag({ property: 'og:image', content: imageUrl });
    
    // Forzamos a WhatsApp a mostrar la imagen en formato grande (1200x630)
    this.metaService.updateTag({ property: 'og:image:width', content: '1200' });
    this.metaService.updateTag({ property: 'og:image:height', content: '630' });

    // Evitamos contenido duplicado en Google
    this.setCanonicalURL(config.url);
  }

  // 🌟 MÉTODO PARA LA URL CANÓNICA
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

  // ========================================================================
  // 🧠 2. MOTOR DE DATOS ESTRUCTURADOS (JSON-LD)
  // ========================================================================

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

  clearStructuredData(scriptId: string = 'product-structured-data') {
    const existingScript = this.document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }
  }

  // ========================================================================
  // 🚀 3. ESQUEMAS DE NEGOCIO Y LANDING
  // ========================================================================

  // 🌟 SCHEMA DE EMPRESA LOCAL (SEO GEOGRÁFICO B2B)
  setLocalBusinessStructuredData() {
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "King Panel | Sistemas de Construcción Ligera y Termoaislantes",
      "image": "https://www.kingpanel.com/assets/logo.png",
      "telephone": "+52-55-1234-5678", 
      "description": "Proveedores y venta de paneles termoaislantes, tablaroca, perfiles y sistemas de construcción ligera para naves industriales. Envíos a obra.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ciudad López Mateos",
        "addressRegion": "Estado de México",
        "addressCountry": {
          "@type": "Country",
          "name": "MX"
        }
      },
      // 🔥 PALABRAS CLAVE LOCALES Y ZONAS INDUSTRIALES 🔥
      "areaServed": [
        { "@type": "City", "name": "Ciudad López Mateos" },
        { "@type": "City", "name": "Nicolás Romero" },
        { "@type": "City", "name": "Atizapán de Zaragoza" },
        { "@type": "City", "name": "Cuautitlán Izcalli" },
        { "@type": "City", "name": "Tlalnepantla de Baz" },
        { "@type": "City", "name": "Naucalpan de Juárez" },
        { "@type": "City", "name": "Toluca" },
        { "@type": "City", "name": "Ciudad de México" },
        { "@type": "State", "name": "Estado de México" },
        { "@type": "Place", "name": "Zona Metropolitana del Valle de México" }
      ]
    };
    
    this.setSchema('local-business-schema', schema);
  }

  // 🌟 SCHEMA DEL CARRUSEL DE CATEGORÍAS (Catálogo sin errores)
  setLandingItemListStructuredData() {
    const itemListSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Catálogo de Materiales King Panel",
      "description": "Distribuidor líder de Panel Termoaislante, Tablaroca y perfiles en el Estado de México.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1, 
          "item": {
            "@type": "Product",
            "name": "Tablaroca, Panel Rey, Durock y Permabase", 
            "description": "Venta de panel de yeso estándar, Panel Rey, Tablaroca para baño (verde), Durock y Permabase exterior.",
            "brand": { "@type": "Brand", "name": "King Panel" },
            "image": "https://www.kingpanel.com/assets/productos/panel.webp", 
            "url": "https://www.kingpanel.com/producto/paneles",
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
          "position": 2, 
          "item": {
            "@type": "Product",
            "name": "Perfiles Metálicos para Tablaroca",
            "description": "Postes metálicos, canales de amarre y canaletas de acero galvanizado.",
            "brand": { "@type": "Brand", "name": "King Panel" },
            "image": "https://www.kingpanel.com/assets/productos/perfil.webp",
            "url": "https://www.kingpanel.com/producto/perfiles-metalicos",
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
          "position": 3, 
          "item": {
            "@type": "Product",
            "name": "Pasta Readymix y Basecoat",
            "description": "Cubetas de pasta para tablaroca Readymix Panel Rey, Redimix USG y Basecoat para Durock.",
            "brand": { "@type": "Brand", "name": "King Panel" },
            "image": "https://www.kingpanel.com/assets/productos/compuestos.webp",
            "url": "https://www.kingpanel.com/producto/compuestos-pastas",
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

  // 🌟 SCHEMA DE PREGUNTAS FRECUENTES
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
  // 🛡️ 4. MÉTODOS DE PRODUCTO Y NAVEGACIÓN
  // ========================================================================

  // 🌟 MÚLTIPLES PRODUCTOS EN UNA SOLA PÁGINA
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

  // 🌟 PRODUCTO SINGULAR
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

  // 🌟 BREADCRUMBS (MIGAS DE PAN)
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
}