import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

import { ProductCardComponent } from "../../shared/components/product-card/product-card"; 
import { Product } from '../../shared/models/product.model';
import { ProductService } from '../../core/services/product.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, ProductCardComponent], 
  templateUrl: './landing.html',
  styleUrl: './landing.scss'
})
export class LandingComponent implements OnInit {


  misProductos: Product[] = [];

  // 🌟 PREGUNTAS FRECUENTES (Visuales)
  faqs = [
    {
      pregunta: '¿Hacen entregas de material a pie de obra?',
      respuesta: 'Sí, contamos con logística y unidades propias para entregar tus materiales como Tablaroca, perfiles y pastas directamente en tu obra dentro de la CDMX y el Estado de México.',
      abierta: false
    },
    {
      pregunta: '¿Mejoran presupuestos de otras casas de materiales?',
      respuesta: '¡Por supuesto! Envíanos tu cotización actual por WhatsApp y te garantizamos un mejor precio por escrito para tus proyectos de volumen.',
      abierta: false
    },
    {
      pregunta: '¿Qué marcas de paneles y compuestos manejan?',
      respuesta: 'Somos distribuidores de marcas líderes a nivel mundial como USG (Tablaroca, Durock, Securock), Panel Rey (Glass Rey, Permabase), Armstrong y Corev.',
      abierta: false
    },
    {
      pregunta: '¿Venden por mayoreo a contratistas y constructoras?',
      respuesta: 'Absolutamente. Tenemos esquemas de precios especiales, atención preferencial y disponibilidad de stock masivo para contratistas, arquitectos y constructoras.',
      abierta: false
    }
  ];

  constructor(
    private titleService: Title, 
    private metaService: Meta,
    private productService: ProductService,
    private seoService: SeoService 
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Distribuidor de Tablaroca, Durock y Perfiles en CDMX y Edomex | King Panel');
    
    this.metaService.updateTag({ 
      name: 'description', 
      content: 'Venta e Instalación  de materiales para construcción ligera. Tablaroca, Permabase, perfiles metálicos, plafones y compuestos.Entregas en CDMX, Área Metropolitana y envíos a todo México.' 
    });

    // content: 'Materiales para construcción ligera por volumen. Tablaroca, perfiles y plafones. Entregas en CDMX, Área Metropolitana y envíos a todo México.'
    
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' });

    // Cargamos algunos productos destacados para el inicio (Ej. los primeros 4)
    this.misProductos = this.productService.getProducts().slice(0, 4);

    this.inyectarSchemaSEO();
  }

  // 🌟 Función para abrir/cerrar la pregunta
  toggleFaq(index: number) {
    this.faqs[index].abierta = !this.faqs[index].abierta;
  }

  private inyectarSchemaSEO() {
    // 1. DATA DE LA EMPRESA LOCAL
   const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "King Panel",
      "image": "https://www.kingpanel.com/assets/logo.png",
      "telephone": "+52-55-1234-5678", // Pon tu WhatsApp real
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Estado de México",
        "addressRegion": "MEX",
        "addressCountry": "MX"
      },
      // 🌟 EL TRUCO SEO: Definimos tus "Anillos de Cobertura"
      "areaServed": [
        { "@type": "City", "name": "Ciudad de México" },
        { "@type": "State", "name": "Estado de México" },
        { "@type": "State", "name": "Hidalgo" },
        { "@type": "City", "name": "Texcoco" },
        // Y el comodín para los proyectos grandes foráneos:
        { "@type": "Country", "name": "Mexico" } 
      ],
      "description": "Suministro masivo y especializado de sistemas de construcción ligera. Cobertura directa en el Área Metropolitana, Centro del País y envíos a toda la República Mexicana."
    };

    // 2. DATA DEL CARRUSEL DE PRODUCTOS
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
            "name": "Sistemas de Paneles y Tableros",
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

    // 🌟 3. EL NUEVO SCHEMA DE PREGUNTAS FRECUENTES (FAQPage)
    // Generamos las respuestas dinámicamente basadas en el arreglo de arriba
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": this.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.pregunta,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.respuesta
        }
      }))
    };

    // Inyectamos todo usando el servicio
    this.seoService.setSchema('local-business-data', localBusinessSchema);
    this.seoService.setSchema('landing-item-list', itemListSchema);
    this.seoService.setSchema('faq-page-schema', faqSchema); // 🌟 Se inyecta FAQ
  }
}