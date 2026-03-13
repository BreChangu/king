import { Component, HostListener, inject, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { NosotrosComponent } from '../../../features/nosotros/nosotros';
import { CatalogoComponent } from '../../../features/catalogo/catalogo';

import { QuoteService } from '../../services/quote.service';
import { QuoteItem } from '../../../shared/models/quote.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent implements OnInit, OnDestroy {

  public quoteService = inject(QuoteService);
  private cdr = inject(ChangeDetectorRef);

  isScrolled = false;
  isMenuOpen = false;
  isDrawerOpen = false;
  isCatalogExpanded = false; // 🆕 Control del panel desplegable

  nombreCliente = '';
  clienteEmail = '';

  showMiniToast = false;
  popBadge = false; 
  lastAddedItem: QuoteItem | null = null;

  private toastTimeout: any;
  private destroy$ = new Subject<void>();

  // 🌟 VENTA CRUZADA: Complementos sugeridos para el carrusel
  complementosSugeridos = [
    {
      id: 'comp-001',
      name: 'Tornillo Framer 1/2"',
      variant: 'Caja 1000 pzas',
      image: 'https://via.placeholder.com/150?text=Tornillos' // Cambia por la URL de tu imagen real
    },
    {
      id: 'comp-002',
      name: 'Cinta de Malla',
      variant: 'Rollo 90m',
      image: 'https://via.placeholder.com/150?text=Cinta' // Cambia por la URL de tu imagen real
    },
    {
      id: 'comp-003',
      name: 'Compuesto Base',
      variant: 'Cubeta 21.8 kg',
      image: 'https://via.placeholder.com/150?text=Masilla' // Cambia por la URL de tu imagen real
    }
  ];

  itemsCount$ = this.quoteService.cartItems$.pipe(
    map(items => items.reduce((acc, item) => acc + item.quantity, 0))
  );

  cartItems$ = this.quoteService.cartItems$;

  ngOnInit() {
    this.quoteService.itemAddedEvent$
      .pipe(takeUntil(this.destroy$))
      .subscribe(item => {
        console.log('🔔 Evento ITEM ADDED recibido:', item);
        this.mostrarMiniToast(item);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.toastTimeout) clearTimeout(this.toastTimeout);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMenu() { this.isMenuOpen = !this.isMenuOpen; }

  toggleCatalogPanel() {
    this.isCatalogExpanded = !this.isCatalogExpanded;
  }

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
    this.isMenuOpen = false;
    this.showMiniToast = false;
    this.isCatalogExpanded = false; // Cerrar catálogo al abrir drawer
  }

  removeItem(id: string) { this.quoteService.removeItem(id); }

  // 🌟 AGREGAR COMPLEMENTO DESDE EL CAJÓN (1 Clic)
  agregarComplemento(comp: any) {
    const newItem: QuoteItem = {
      id: comp.id,
      productId: comp.id,
      productName: comp.name,
      variantName: comp.variant,
      calibre: 'N/A', 
      image: comp.image,
      quantity: 1 
    };
    
    // Al agregarlo, el servicio disparará el evento y el Toast saltará
    this.quoteService.addItem(newItem);
  }

  // =========================
  // TOAST ANIMADO 
  // =========================
  mostrarMiniToast(item: QuoteItem) {
    console.log('📍 MOSTRAR TOAST llamado con:', item);
    if (this.toastTimeout) clearTimeout(this.toastTimeout);

    this.showMiniToast = false;
    this.popBadge = false;
    this.lastAddedItem = null;
    this.cdr.detectChanges(); 

    setTimeout(() => {
      this.lastAddedItem = item;
      this.showMiniToast = true; 
      this.popBadge = true; 
      console.log('✅ Toast mostrado. showMiniToast:', this.showMiniToast, 'lastAddedItem:', this.lastAddedItem);
      this.cdr.detectChanges(); 

      this.toastTimeout = setTimeout(() => {
        console.log('⏰ Cerrando toast por timeout');
        this.cerrarMiniToast();
      }, 3500); // 3.5 segundos para que se pueda leer bien
    }, 10);
  }

  cerrarMiniToast() {
    this.showMiniToast = false;
    if (this.toastTimeout) clearTimeout(this.toastTimeout);
    this.cdr.detectChanges();
  }

  // =========================
  // CHECKOUT
  // =========================
  armarMensajeCotizacion(): string | null {
    if (!this.nombreCliente.trim()) {
      alert('Por favor ingresa tu nombre o empresa.');
      return null;
    }

    const items = this.quoteService.getItems();
    if (items.length === 0) return null;

    let mensaje = `Hola King Panel, soy ${this.nombreCliente}.\n`;
    if (this.clienteEmail.trim()) {
      mensaje += `Mi correo es: ${this.clienteEmail}\n`;
    }
    mensaje += `\nMe gustaría cotizar:\n\n`;

    items.forEach(item => {
      mensaje += `• ${item.quantity}x ${item.productName} (${item.variantName}) - Cal: ${item.calibre}\n`;
    });

    return mensaje;
  }

  enviarAWhatsApp() {
    const mensaje = this.armarMensajeCotizacion();
    if (!mensaje) return;
    const url = `https://wa.me/521XXXXXXXXXX?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  }

  enviarPorCorreo() {
    const mensaje = this.armarMensajeCotizacion();
    if (!mensaje) return;
    const url = `mailto:ventas@kingpanel.com?subject=Solicitud de Cotización - ${this.nombreCliente}&body=${encodeURIComponent(mensaje)}`;
    window.open(url, '_self');
  }
}