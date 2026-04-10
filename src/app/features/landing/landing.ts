import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

import { ProductCardComponent } from "../../shared/components/product-card/product-card"; 
import { Product } from '../../shared/models/product.model';
import { ProductService } from '../../core/services/product.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, NgOptimizedImage],
  providers: [ProductService],
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
    // 1. Cargamos los productos
    this.misProductos = this.productService.getProducts().slice(0, 4);

    // 2. 🚀 MAGIA SEO Y WHATSAPP: Inyectamos todas las etiquetas Open Graph
    // Aquí es donde WhatsApp por fin va a encontrar tu imagen
    this.seoService.setMetaTags({
      title: 'Distribuidor de Tablaroca, Durock y Perfiles en CDMX y Edomex',
      description: 'Venta e Instalación de materiales para construcción ligera. Tablaroca, Permabase, perfiles metálicos, plafones y compuestos. Entregas en CDMX, Área Metropolitana y envíos a todo México.',
      url: 'https://king-lake.vercel.app/', // URL de tu Landing
      image: 'https://king-lake.vercel.app/assets/brands/King-portada.jpeg' // 👈 La ruta exacta que validamos
    });
    
    // Le decimos a Google que indexe
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' });

    // 3. Inyectamos Schema JSON-LD
    this.inyectarSchemaSEO();
  }

  toggleFaq(index: number) {
    this.faqs[index].abierta = !this.faqs[index].abierta;
  }

  private inyectarSchemaSEO() {
    // 🚀 Llamamos al servicio para que haga el trabajo pesado
    this.seoService.setLocalBusinessStructuredData(); 
    this.seoService.setLandingItemListStructuredData();
    this.seoService.setFAQStructuredData(this.faqs); 
  }
}