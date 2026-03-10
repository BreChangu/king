import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router'; 
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
  
  // 🌟 Objeto para guardar la variante seleccionada y cantidad de CADA subproducto en la pantalla
  selecciones: { [subProductId: string]: { variant: ProductVariant, quantity: number } } = {};

  // 🌟 Variables para el Toast (Notificación)
  toastMessage: string = '';
  showToast: boolean = false;
  private toastTimeout: any; 

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private quoteService: QuoteService,
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    
    if (idParam) {
      this.productoActual = this.productService.getProductById(idParam);
      // Pre-cargamos la primera medida de cada material apenas entramos a la página
      this.inicializarSelecciones(); 
    }
  }

  // ==========================================
  // LÓGICA DE SELECCIÓN Y COMPRA
  // ==========================================

  // Asigna por defecto la primera medida disponible y una cantidad de 1
  inicializarSelecciones() {
    if (this.productoActual?.subProducts) {
      this.productoActual.subProducts.forEach(sub => {
        if (sub.variants && sub.variants.length > 0) {
          this.selecciones[sub.id] = {
            variant: sub.variants[0], 
            quantity: 1
          };
        }
      });
    }
  }

  // Actualiza la medida cuando el usuario hace clic en una caja diferente
  seleccionarVariante(subId: string, variant: ProductVariant) {
    if (this.selecciones[subId]) {
      this.selecciones[subId].variant = variant;
    }
  }

  // Suma o resta la cantidad con los botones (+) y (-)
  cambiarCantidad(subId: string, delta: number) {
    if (this.selecciones[subId]) {
      const nuevaCantidad = this.selecciones[subId].quantity + delta;
      // Evitamos que el cliente ponga 0 o números negativos
      if (nuevaCantidad >= 1) { 
        this.selecciones[subId].quantity = nuevaCantidad;
      }
    }
  }

  // Toma los datos actuales, los manda al servicio y lanza la notificación
  agregarACotizacion(sub: SubProduct) {
    const seleccion = this.selecciones[sub.id];
    
    // Si por alguna razón no hay nada seleccionado, abortamos
    if (!seleccion || !seleccion.variant) return;

    // Construimos el objeto para el carrito
    const newItem: QuoteItem = {
      id: `${sub.id}-${seleccion.variant.id}`, // ID único combinando producto y variante
      productId: sub.id,
      productName: sub.name,
      variantName: seleccion.variant.name,
      calibre: seleccion.variant.calibre,
      image: sub.image,
      quantity: seleccion.quantity // Toma exactamente la cantidad que el cliente ajustó
    };

    // 1. Guardamos en memoria (El Cerebro)
    this.quoteService.addItem(newItem);
    
    // 2. Disparamos la notificación elegante
    this.lanzarToast(`${seleccion.quantity}x ${sub.name} agregado a tu cotización.`);
    
    // 3. (Opcional pero recomendado en UX) Reiniciamos la cantidad a 1 por si quiere agregar otra medida
    this.selecciones[sub.id].quantity = 1; 
  }

  // ==========================================
  // CONTROL DEL TOAST FLOTANTE
  // ==========================================
  
  lanzarToast(mensaje: string) {
    this.toastMessage = mensaje;
    this.showToast = true;

    // Si había un temporizador previo, lo limpiamos para que la animación no salte
    if (this.toastTimeout) {
      clearTimeout(this.toastTimeout);
    }

    // A los 3 segundos exactos, ocultamos el mensaje
    this.toastTimeout = setTimeout(() => {
      this.showToast = false;
      this.cdr.detectChanges(); // Pellizcamos a Angular para que actualice la vista sin mover el mouse
    }, 3000);
  }
}