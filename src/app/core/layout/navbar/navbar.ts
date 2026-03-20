import { Component, HostListener, inject, OnInit, OnDestroy, ChangeDetectorRef, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Subject, takeUntil } from 'rxjs';

import { QuoteService } from '../../services/quote.service';
import { QuoteItem } from '../../../shared/models/quote.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent implements OnInit, OnDestroy {

  public quoteService = inject(QuoteService);
  private cdr = inject(ChangeDetectorRef);
  private platformId = inject(PLATFORM_ID); // 🌟 FIX SSR: Inyectamos el verificador de plataforma

  isScrolled = false;
  isMenuOpen = false;
  isDrawerOpen = false;
  isCatalogExpanded = false; 

  nombreCliente = '';
  clienteEmail = '';

  showMiniToast = false;
  popBadge = false; 
  lastAddedItem: QuoteItem | null = null;

  private toastTimeout: any;
  private destroy$ = new Subject<void>();

  // 🌟 VENTA CRUZADA CON TUS PRODUCTOS REALES
  complementosSugeridos = [
    {
      id: 'cinta-de-papel-unimax-de-75-ml',
      name: 'Cinta de Papel Unimax',
      variant: 'Rollo 75 ml',
      image: '/assets/productos/cinta-papel.webp'
    },
    {
      id: 'tornillo-6-x-1-tablarroca-ciento',
      name: 'Tornillo 6x1" Tablaroca',
      variant: 'Ciento',
      image: '/assets/show/maquina.webp' // Cambiar por foto real de tornillo si tienes
    },
    {
      id: 'readymix-caja-de-218-kg',
      name: 'Readymix Panel Rey',
      variant: 'Caja 21.8 Kg',
      image: '/assets/productos/ready-mix-21.webp'
    },
    {
      id: 'esquinero-metalico-3-mts',
      name: 'Esquinero Metálico',
      variant: '3.05 Mts',
      image: '/assets/productos/esquinero-metalico.webp'
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
        this.mostrarMiniToast(item);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.toastTimeout) clearTimeout(this.toastTimeout);
  }

  // 🌟 FIX SSR: Protegemos el uso de window en el HostListener
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Solo se ejecuta si estamos en el navegador, no en el servidor
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled = window.scrollY > 20;
    }
  }

  toggleMenu() { this.isMenuOpen = !this.isMenuOpen; }

  toggleCatalogPanel() {
    this.isCatalogExpanded = !this.isCatalogExpanded;
  }

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
    this.isMenuOpen = false;
    this.showMiniToast = false;
    this.isCatalogExpanded = false; 
  }

  removeItem(id: string) { this.quoteService.removeItem(id); }

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
    
    this.quoteService.addItem(newItem);
  }

  mostrarMiniToast(item: QuoteItem) {
    if (this.toastTimeout) clearTimeout(this.toastTimeout);

    this.showMiniToast = false;
    this.popBadge = false;
    this.lastAddedItem = null;
    this.cdr.detectChanges(); 

    setTimeout(() => {
      this.lastAddedItem = item;
      this.showMiniToast = true; 
      this.popBadge = true; 
      this.cdr.detectChanges(); 

      this.toastTimeout = setTimeout(() => {
        this.cerrarMiniToast();
      }, 3500); 
    }, 10);
  }

  cerrarMiniToast() {
    this.showMiniToast = false;
    if (this.toastTimeout) clearTimeout(this.toastTimeout);
    this.cdr.detectChanges();
  }

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
    const url = `https://wa.me/525512345678?text=${encodeURIComponent(mensaje)}`;
    
    // 🌟 FIX SSR: Protegemos la apertura de nuevas ventanas
    if (isPlatformBrowser(this.platformId)) {
      window.open(url, '_blank');
    }
  }

  enviarPorCorreo() {
    const mensaje = this.armarMensajeCotizacion();
    if (!mensaje) return;
    const url = `mailto:ventas@kingpanel.com?subject=Solicitud de Cotización - ${this.nombreCliente}&body=${encodeURIComponent(mensaje)}`;
    
    // 🌟 FIX SSR: Protegemos la redirección de correo
    if (isPlatformBrowser(this.platformId)) {
      window.open(url, '_self');
    }
  }
}