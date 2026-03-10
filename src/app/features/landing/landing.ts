import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

// 1. IMPORTACIONES CORREGIDAS CON EL NOMBRE EXACTO DE TU ARCHIVO
import { ProductCardComponent } from "../../shared/components/product-card/product-card"; 
import { Product } from '../../shared/models/product.model';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  // 2. Solo módulos y componentes válidos
  imports: [CommonModule, ProductCardComponent], 
  templateUrl: './landing.html',
  styleUrl: './landing.scss'
})
export class LandingComponent implements OnInit {

  misProductos: Product[] = [];

  constructor(
    private titleService: Title, 
    private metaService: Meta,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private productService: ProductService
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
    const schema = {
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
            "brand": { "@type": "Brand", "name": "King Panel" }
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Product",
            "name": "Panel Aislado Estructural",
            "description": "Soluciones con aislamiento térmico y acústico para muros y cubiertas industriales.",
            "brand": { "@type": "Brand", "name": "King Panel" }
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Product",
            "name": "Lámina Galvanizada y Pintro",
            "description": "Cerramientos metálicos durables para naves industriales y bodegas.",
            "brand": { "@type": "Brand", "name": "King Panel" }
          }
        }
      ]
    };

    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    this.renderer.appendChild(this.document.head, script);
  }
}