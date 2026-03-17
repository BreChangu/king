import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

import { ProductCardComponent } from "../../shared/components/product-card/product-card"; 
import { Product } from '../../shared/models/product.model';
import { ProductService } from '../../core/services/product.service';
import { SeoService } from '../../core/services/seo.service'; // 🌟 Importamos TU servicio

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, ProductCardComponent], 
  templateUrl: './landing.html',
  styleUrl: './landing.scss'
})
export class LandingComponent implements OnInit {

  misProductos: Product[] = [];

  constructor(
    private titleService: Title, 
    private metaService: Meta,
    private productService: ProductService,
    private seoService: SeoService // 🌟 Lo inyectamos
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Sistemas de Construcción Ligera | King Panel');
    
    this.metaService.updateTag({ 
      name: 'description', 
      content: 'Fabricantes de perfilería metálica y expertos en suministro de panel aislado y lámina para proyectos industriales a gran escala.' 
    });
    
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' });

    this.misProductos = this.productService.getProducts();

    this.inyectarSchemaSEO();
  }

  private inyectarSchemaSEO() {
    // 1. DATA DE LA EMPRESA LOCAL
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "King Panel",
      "image": "https://www.kingpanel.com/assets/logo.png",
      "telephone": "+52-55-1234-5678", 
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Edomex",
        "addressRegion": "CDMX",
        "addressCountry": "MX"
      },
      "description": "Suministro e instalación de sistemas ligeros en Edomex y CDMX."
    };

    // 2. DATA DEL CARRUSEL DE PRODUCTOS (Ya con correcciones)
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
            "name": "Perfiles Metálicos Galvanizados",
            "description": "Fabricación de perfiles de alta resistencia para sistemas de construcción ligera.",
            "brand": { "@type": "Brand", "name": "King Panel" },
            "image": "https://www.kingpanel.com/assets/show/perfiles.webp", 
            "url": "https://www.kingpanel.com/producto/perf-001", 
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "150" }
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Product",
            "name": "Panel Aislado Estructural",
            "description": "Soluciones con aislamiento térmico y acústico para muros y cubiertas industriales.",
            "brand": { "@type": "Brand", "name": "King Panel" },
            "image": "https://www.kingpanel.com/assets/show/panel.webp",
            "url": "https://www.kingpanel.com/producto/pan-001",
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "85" }
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Product",
            "name": "Lámina Galvanizada y Pintro",
            "description": "Cerramientos metálicos durables para naves industriales y bodegas.",
            "brand": { "@type": "Brand", "name": "King Panel" },
            "image": "https://www.kingpanel.com/assets/show/lamina.webp",
            "url": "https://www.kingpanel.com/producto/lam-001",
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.7", "reviewCount": "210" }
          }
        }
      ]
    };

    // 🌟 DELEGAMOS LA INYECCIÓN AL SERVICIO
    this.seoService.setSchema('local-business-data', localBusinessSchema);
    this.seoService.setSchema('landing-item-list', itemListSchema);
  }
}