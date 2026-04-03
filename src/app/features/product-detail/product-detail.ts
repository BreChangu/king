import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core'; 
import { CommonModule, isPlatformBrowser } from '@angular/common'; 
import { ActivatedRoute, Router, RouterModule, NavigationEnd } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { QuoteService } from '../../core/services/quote.service'; 
import { SeoService } from '../../core/services/seo.service'; 
import { Product, SubProduct, ProductVariant } from '../../shared/models/product.model';
import { QuoteItem } from '../../shared/models/quote.model'; 
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss'
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  seleccionarEmpaque(_t57: ProductVariant, _t61: any) {
    throw new Error('Method not implemented.');
  }
  
  productoActual: Product | undefined;
  selecciones: { [subProductId: string]: { variant: ProductVariant, quantity: number } } = {};

  // NAVEGACIÓN INFERIOR SINCRONIZADA CON EL CATÁLOGO
  categoriasMenu = [
    { id: 'perfiles-metalicos', name: 'Perfiles Metálicos' },
    { id: 'paneles', name: 'Paneles y Tableros' }, 
    { id: 'plafones-suspension', name: 'Plafones y Suspensión' },
    { id: 'compuestos-pastas', name: 'Compuestos y Pastas' },
    { id: 'cintas-complementos', name: 'Cintas y Aislantes' },
    { id: 'tornilleria-fijacion', name: 'Tornillería y Fijación' },
    { id: 'herramientas', name: 'Herramientas' }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private productService: ProductService,
    private quoteService: QuoteService,
    private seoService: SeoService,
    private titleService: Title,
    private metaService: Meta,
    @Inject(PLATFORM_ID) private platformId: Object 
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.productoActual = this.productService.getProductById(idParam);
        
        // 🌟 MEJORA 3 (UX): Reseteamos las selecciones al cambiar de producto
        this.selecciones = {}; 
        this.inicializarSelecciones(); 

     if (this.productoActual) {
          // 🌟 MAGIA SEO: Usamos los campos optimizados. Si el producto no los tiene, usamos un texto por defecto.
          const seoTitle = this.productoActual.seoTitle || `${this.productoActual.name} | King Panel México`;
          const seoDesc = this.productoActual.seoDescription || this.productoActual.shortDescription;
          const seoKeys = this.productoActual.seoKeywords || 'construcción ligera, tablaroca, king panel, materiales';
          const seoImage = this.productoActual.image ? `https://www.kingpanel.com${this.productoActual.image}` : 'https://www.kingpanel.com/assets/logo.png';
          const seoUrl = `https://www.kingpanel.com/producto/${this.productoActual.id}`;

          // Cambiamos la pestaña del navegador (Lo que el usuario lee arriba)
          this.titleService.setTitle(seoTitle);
          
          // Metas Generales (Lo que lee el Robot de Google)
          this.metaService.updateTag({ name: 'description', content: seoDesc });
          this.metaService.updateTag({ name: 'keywords', content: seoKeys });
          
          // Metas Open Graph (Lo que sale en WhatsApp y Facebook)
          this.metaService.updateTag({ property: 'og:title', content: seoTitle });
          this.metaService.updateTag({ property: 'og:description', content: seoDesc });
          this.metaService.updateTag({ property: 'og:image', content: seoImage });
          this.metaService.updateTag({ property: 'og:url', content: seoUrl });
          this.metaService.updateTag({ property: 'og:type', content: 'product' });

          // Los datos estructurados (Para intentar ganarnos las tarjetitas visuales de Google)
          this.seoService.setProductStructuredData(this.productoActual);
        }
        // Subimos el scroll suavemente al cambiar de producto
        if (isPlatformBrowser(this.platformId)) {
          setTimeout(() => {
             window.scrollTo({ top: 0, behavior: 'smooth' });
          }, 100); // Un pequeño timeout asegura que el DOM ya se dibujó antes de subir
        }
      }
    });
  }

  ngOnDestroy() {
    // Limpiamos los datos estructurados
    this.seoService.clearStructuredData();
    
    // 🌟 MEJORA 2 (Limpieza): Removemos las etiquetas específicas de producto al salir de la página
    this.metaService.removeTag("property='og:title'");
    this.metaService.removeTag("property='og:description'");
    this.metaService.removeTag("property='og:image'");
    this.metaService.removeTag("property='og:url'");
    this.metaService.removeTag("property='og:type'");
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

  navegarACategoria(catId: string) {
    if (this.productoActual?.id === catId) return; 
    this.router.navigate(['/producto', catId]); 
  }

  scrollToSection(id: string) {
    if (isPlatformBrowser(this.platformId)) {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = element.getBoundingClientRect().top + window.scrollY - 120;
        window.scrollTo({ top: yOffset, behavior: 'smooth' });
      }
    }
  }

obtenerImagenActiva(sub: SubProduct): string {
    const seleccion = this.selecciones[sub.id];
    if (!seleccion) return sub.image; 

    // 1. ¿El empaque seleccionado tiene imagen propia? (Ej. Cubeta de 6kg)
    if (seleccion.variant.empaqueSeleccionado && seleccion.variant.empaqueSeleccionado.image) {
      return seleccion.variant.empaqueSeleccionado.image;
    }

    // 2. ¿La variante tiene imagen propia?
    if (seleccion.variant.image) {
      return seleccion.variant.image;
    }

    // 3. Si no hay nada específico, mostramos la imagen general del sub-producto
    return sub.image;
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

    // 🌟 Usamos nuestra nueva función inteligente
    const imagenFinal = this.obtenerImagenActiva(sub);

    let presentacionFinal = seleccion.variant.calibre || 'N/A';
    if (seleccion.variant.empaqueSeleccionado) {
       presentacionFinal = seleccion.variant.empaqueSeleccionado.nombre || seleccion.variant.empaqueSeleccionado;
    }

    const newItem: QuoteItem = {
      id: `${sub.id}-${seleccion.variant.id}`,
      productId: sub.id,
      productName: seleccion.variant.name,
      variantName: sub.name,
      calibre: presentacionFinal, 
      image: imagenFinal,
      quantity: seleccion.quantity,
      category: this.productoActual?.category || 'general'
    };

    this.quoteService.addItem(newItem);
    this.selecciones[sub.id].quantity = 0; 
  }
}