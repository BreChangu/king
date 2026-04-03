import { Component, HostListener, inject, OnInit, OnDestroy, ChangeDetectorRef, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Subject, takeUntil } from 'rxjs';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

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
  private platformId = inject(PLATFORM_ID); 

  isScrolled = false;
  isMenuOpen = false;
  isDrawerOpen = false;
  isCatalogExpanded = false; 

  nombreCliente = '';
  clienteEmail = '';
  ubicacionEnvio = '';

  showMiniToast = false;
  popBadge = false; 
  lastAddedItem: QuoteItem | null = null;
  
  // Estados para el envío de correo
  isLoadingEmail = false;
  emailSentSuccess = false;

  private toastTimeout: any;
  private destroy$ = new Subject<void>();

  // 🌟 1. BASE DE DATOS RÁPIDA DE ACCESORIOS (Para sugerencias dinámicas)
  private accesoriosDB = {
    cintaPapel: { id: 'cin-papel75', name: 'Cinta de Papel', variant: 'Rollo 75 ml', image: 'assets/productos/cinta-papel.webp' },
    cintaMalla: { id: 'cin-malla45', name: 'Cinta de Malla', variant: 'Rollo 45 m', image: 'assets/productos/cinta-papel.webp' },
    readymix: { id: 'rm-caja21', name: 'Readymix Panel Rey', variant: 'Caja 21.8 Kg', image: 'assets/productos/ready-mix-21.webp' },
    basecoat: { id: 'bc-usg20', name: 'Basecoat USG', variant: 'Bulto 20 Kg', image: 'assets/productos/basecoat.webp' },
    torTablaroca: { id: 'tor-6x1-caja', name: 'Tornillo 6x1" Tablaroca', variant: 'Caja', image: 'assets/show/maquina.webp' },
    torPermabase: { id: 'tek-8x114', name: 'Tornillo 8x1 1/4" Permabase', variant: 'Por Ciento', image: 'assets/show/maquina.webp' },
    esquineroMet: { id: 'esq-met-305', name: 'Esquinero Metálico', variant: '3.05 Mts', image: 'assets/productos/esquinero-metalico.webp' },
    esquineroPvc: { id: 'pvc-esq', name: 'Esquinero de PVC', variant: '3.05 Mts', image: 'assets/productos/esquinero-metalico.webp' }
  };

  // 🌟 2. ARREGLO DE SUGERENCIAS INICIAL
  complementosSugeridos: any[] = [
    this.accesoriosDB.cintaPapel,
    this.accesoriosDB.torTablaroca,
    this.accesoriosDB.readymix,
    this.accesoriosDB.esquineroMet
  ];

  itemsCount$ = this.quoteService.cartItems$.pipe(
    map(items => items.reduce((acc, item) => acc + item.quantity, 0))
  );

  cartItems$ = this.quoteService.cartItems$;

  ngOnInit() {
    // Escuchar adición de items para el Toast
    this.quoteService.itemAddedEvent$
      .pipe(takeUntil(this.destroy$))
      .subscribe(item => {
        this.mostrarMiniToast(item);
      });

    // 🌟 3. MOTOR DE RECOMENDACIONES: Escucha los cambios del carrito en tiempo real
    this.quoteService.cartItems$
      .pipe(takeUntil(this.destroy$))
      .subscribe(items => {
        this.actualizarSugerenciasDinamicas(items);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.toastTimeout) clearTimeout(this.toastTimeout);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled = window.scrollY > 20;
    }
  }

  // 🌟 4. LÓGICA DINÁMICA DE CROSS-SELLING (Corregida e Híbrida)
  actualizarSugerenciasDinamicas(items: QuoteItem[]) {
    if (items.length === 0) {
      this.complementosSugeridos = [
        this.accesoriosDB.cintaPapel, this.accesoriosDB.torTablaroca, 
        this.accesoriosDB.readymix, this.accesoriosDB.esquineroMet
      ];
      return;
    }

    // 🌟 1. Detectamos si hay paneles de CEMENTO (Exterior)
    const tieneTablacemento = items.some(i => 
      i.productName.toLowerCase().includes('permabase') ||
      i.productName.toLowerCase().includes('durock') ||
      i.productName.toLowerCase().includes('cemento') ||
      i.productId.toLowerCase().includes('tc-')
    );

    // 🌟 2. Detectamos si hay paneles de YESO regular (Interior)
    const tienePanelYeso = items.some(i => 
      (i.category && i.category.toLowerCase().includes('panel')) || 
      i.productName.toLowerCase().includes('tablaroca') ||
      i.productName.toLowerCase().includes('yeso') ||
      i.productName.toLowerCase().includes('light rey')
    );

    const tieneEstructura = items.some(i => 
      (i.category && i.category.toLowerCase().includes('perfil')) || 
      i.productId.toLowerCase().includes('pos-') || 
      i.productId.toLowerCase().includes('can-')
    );
    
    const tienePlafones = items.some(i => 
      (i.category && i.category.toLowerCase().includes('plafon')) || 
      i.productId.toLowerCase().includes('plaf-') || 
      i.productId.toLowerCase().includes('susp-')
    );

    // 🌟 LÓGICA DE PRIORIDAD:
    if (tieneTablacemento && tienePanelYeso) {
      // 🚀 ESCENARIO HÍBRIDO: El usuario lleva yeso y cemento
      this.complementosSugeridos = [
        this.accesoriosDB.readymix,      // Pasta para Tablaroca
        this.accesoriosDB.basecoat,      // Pasta para Permabase
        this.accesoriosDB.torTablaroca,  // Tornillos para Tablaroca
        this.accesoriosDB.torPermabase   // Tornillos para Permabase
      ];
    } else if (tieneTablacemento) {
      // Si detecta SOLO cemento
      this.complementosSugeridos = [
        this.accesoriosDB.cintaMalla,
        this.accesoriosDB.torPermabase,
        this.accesoriosDB.basecoat,
        this.accesoriosDB.esquineroPvc
      ];
    } else if (tienePanelYeso) {
      // Si es un panel normal (Tablaroca)
      this.complementosSugeridos = [
        this.accesoriosDB.cintaPapel,
        this.accesoriosDB.torTablaroca,
        this.accesoriosDB.readymix,
        this.accesoriosDB.esquineroMet
      ];
    } else if (tienePlafones) {
      this.complementosSugeridos = [
        this.accesoriosDB.cintaPapel, 
        this.accesoriosDB.readymix,
        this.accesoriosDB.torTablaroca
      ];
    } else if (tieneEstructura) {
      this.complementosSugeridos = [
        this.accesoriosDB.torTablaroca,
        this.accesoriosDB.esquineroMet,
        this.accesoriosDB.cintaPapel,
        this.accesoriosDB.readymix
      ];
    } else {
      // Por defecto
      this.complementosSugeridos = [
        this.accesoriosDB.cintaPapel,
        this.accesoriosDB.torTablaroca,
        this.accesoriosDB.readymix,
        this.accesoriosDB.esquineroMet
      ];
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
    if (this.isDrawerOpen) this.emailSentSuccess = false;
  }

  removeItem(id: string) { this.quoteService.removeItem(id); }

  agregarComplemento(comp: any) {
    const newItem: QuoteItem = {
      id: comp.id,
      productId: comp.id,
      productName: comp.name,
      variantName: comp.variant,
      calibre: comp.variant || 'N/A',
      image: comp.image,
      quantity: 1,
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

  // 🛡️ CADENERO DE SEGURIDAD: Valida que no haya links y que el correo sea real
  validarCamposSeguros(): boolean {
    const urlRegex = /(http|https|www\.)/i;

    if (urlRegex.test(this.nombreCliente) || urlRegex.test(this.ubicacionEnvio)) {
      alert('❌ Por seguridad, no se permiten enlaces ni sitios web en los campos de texto.');
      return false;
    }

    if (this.clienteEmail.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.clienteEmail)) {
        alert('❌ Por favor, ingresa un correo electrónico válido (ej. juan@empresa.com).');
        return false;
      }
    }
    return true;
  }

  enviarAWhatsApp() {
    if (!this.nombreCliente.trim() || !this.ubicacionEnvio.trim()) {
      alert('Por favor ingresa tu nombre/empresa y el lugar de entrega.');
      return;
    }

    const items = this.quoteService.getItems();
    if (items.length === 0) return;

    if (!this.validarCamposSeguros()) return;

    let mensaje = `*📦 NUEVA SOLICITUD DE COTIZACIÓN*\n`;
    mensaje += `----------------------------------\n`;
    mensaje += `*Cliente:* ${this.nombreCliente}\n`;
    
    if (this.clienteEmail.trim()) {
      mensaje += `*Correo:* ${this.clienteEmail}\n`;
    }
    
    if (this.ubicacionEnvio.trim()) {
      mensaje += `*Lugar de entrega:* ${this.ubicacionEnvio}\n`;
    }
    
    mensaje += `----------------------------------\n`;
    mensaje += `*LISTA DE MATERIALES:*\n\n`;

    items.forEach(item => {
      mensaje += `✅ *${item.quantity}x* ${item.productName}\n`;
      mensaje += `   _Variante: ${item.variantName}_\n`;
      if(item.calibre && item.calibre !== 'N/A') {
        mensaje += `   _Presentación: ${item.calibre}_\n`;
      }
      mensaje += `\n`; 
    });

    mensaje += `----------------------------------\n`;
    mensaje += `_Enviado desde el cotizador de King Panel_`;

    const numeroWhatsApp = '525514654716'; 
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    
    if (isPlatformBrowser(this.platformId)) {
      window.open(url, '_blank');
    }
  }

  async enviarPorCorreo() {
    if (!this.nombreCliente.trim() || !this.clienteEmail.trim() || !this.ubicacionEnvio.trim()) {
      alert('Por favor ingresa tu nombre, correo y lugar de entrega.');
      return;
    }

    const items = this.quoteService.getItems();
    if (items.length === 0) return;

    if (!this.validarCamposSeguros()) return;

    let listaProductosHTML = '';
    items.forEach(item => {
      let calibreText = item.calibre && item.calibre !== 'N/A' 
        ? `<br><span style="font-size: 11px; color: #94a3b8; text-transform: uppercase;">Presentación: ${item.calibre}</span>` 
        : '';

      listaProductosHTML += `
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; text-align: center; background-color: #f8fafc;">
            ${item.quantity}
          </td>
          <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #0f172a;">
            ${item.productName}
          </td>
          <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #475569;">
            ${item.variantName} ${calibreText}
          </td>
        </tr>
      `;
    });

    this.isLoadingEmail = true;

    try {
      const response: EmailJSResponseStatus = await emailjs.send(
        'service_y2rqcts',    
        'template_0zkdhah',   
        {
          from_name: this.nombreCliente,
          reply_to: this.clienteEmail,
          ubicacion_envio: this.ubicacionEnvio, 
          message: listaProductosHTML, 
        },
        {
          publicKey: '08rTfUTiXRv8X3bS5', 
        }
      );

      console.log('¡Correo enviado con éxito!', response.status, response.text);
      this.emailSentSuccess = true;
      this.quoteService.clearCart(); 
      
      setTimeout(() => {
        this.toggleDrawer();
      }, 3000);

    } catch (error) {
      console.error('Error enviando correo:', error);
      alert('Hubo un problema enviando tu cotización. Por favor, intenta vía WhatsApp.');
    } finally {
      this.isLoadingEmail = false;
      this.cdr.detectChanges(); 
    }
  }
}