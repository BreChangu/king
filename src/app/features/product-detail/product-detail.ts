import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router'; 
import { ProductService } from '../../core/services/product.service';
import { QuoteService } from '../../core/services/quote.service'; 
import { Product, SubProduct, ProductVariant } from '../../shared/models/product.model';
import { QuoteItem } from '../../shared/models/quote.model'; 

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss'
})
export class ProductDetailComponent implements OnInit {
  
  productoActual: Product | undefined;
  selecciones: { [subProductId: string]: { variant: ProductVariant, quantity: number } } = {};

  // 🌟 EL MENÚ GLOBAL DEL CATÁLOGO (Puedes alimentar esto desde tu Service después)
  categoriasMenu = [
    { id: 'perf-001', name: 'Sistemas de Perfilería' },
    { id: 'pan-001', name: 'Paneles de Yeso' }, // Ejemplos de otras URLs
    { id: 'comp-001', name: 'Masillas y Adhesivos' },
    { id: 'torn-001', name: 'Tornillería y Fijación' }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router, // 🌟 Inyectamos el Router
    private productService: ProductService,
    private quoteService: QuoteService 
  ) {}

  ngOnInit() {
    // 🌟 MAGIA ANGULAR: Escuchamos los cambios en la URL de forma activa
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.productoActual = this.productService.getProductById(idParam);
        this.inicializarSelecciones(); 
        
        // Cuando cambia de categoría, subimos el scroll al inicio suavemente
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  inicializarSelecciones() {
    if (this.productoActual?.subProducts) {
      this.productoActual.subProducts.forEach(sub => {
        if (sub.variants && sub.variants.length > 0) {
          this.selecciones[sub.id] = { variant: sub.variants[0], quantity: 0 };
        }
      });
    }
  }

  // 🌟 NAVEGACIÓN ENTRE FAMILIAS (Sin recargar página)
  navegarACategoria(catId: string) {
    if (this.productoActual?.id === catId) return; // Si ya estoy aquí, no hago nada
    this.router.navigate(['/producto', catId]); // Viaja a la nueva familia
  }

  // 🌟 NAVEGACIÓN INTERNA (Scroll)
  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = element.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: yOffset, behavior: 'smooth' });
    }
  }

  seleccionarVariante(subId: string, variant: ProductVariant) {
    if (this.selecciones[subId]) this.selecciones[subId].variant = variant;
  }

  cambiarCantidad(subId: string, delta: number) {
    if (this.selecciones[subId]) {
      const nuevaCantidad = this.selecciones[subId].quantity + delta;
      if (nuevaCantidad >= 0) this.selecciones[subId].quantity = nuevaCantidad;
    }
  }

  onInputCantidad(subId: string, event: Event) {
    const input = event.target as HTMLInputElement;
    let valor = parseInt(input.value, 10);
    if (isNaN(valor) || valor < 0) valor = 0; 
    if (this.selecciones[subId]) this.selecciones[subId].quantity = valor;
  }

agregarACotizacion(sub: SubProduct) {
    const seleccion = this.selecciones[sub.id];
    if (!seleccion || seleccion.quantity <= 0) {
      alert("Por favor, ingresa una cantidad válida para cotizar.");
      return;
    }

    const newItem: QuoteItem = {
      id: `${sub.id}-${seleccion.variant.id}`,
      productId: sub.id,
      
      // 🌟 1. EL FIX DE LOS TÍTULOS PARA EL CARRITO:
      // Invertimos los nombres para que la variante sea el título principal
      productName: seleccion.variant.name, // Ej: "Cinta de Papel Reforzada"
      variantName: sub.name,               // Ej: "Ready Mix Ligero"
      
      calibre: seleccion.variant.calibre,
      
      // 🌟 2. EL FIX DE LA FOTO DINÁMICA:
      // Intenta usar la foto de la variante. Si no tiene, usa la general.
      // (Nota: Asegúrate de agregar 'image?: string' a tu interface ProductVariant)
      image: seleccion.variant.image || sub.image, 
      
      quantity: seleccion.quantity
    };

    this.quoteService.addItem(newItem);
    this.selecciones[sub.id].quantity = 0; 
  }}