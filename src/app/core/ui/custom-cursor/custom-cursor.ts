import { Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-custom-cursor',
  standalone: true,
  templateUrl: './custom-cursor.html',
  styleUrl: './custom-cursor.scss'
})
export class CustomCursorComponent implements OnInit, OnDestroy {
  @ViewChild('dot', { static: true }) dotRef!: ElementRef;
  @ViewChild('outline', { static: true }) outlineRef!: ElementRef;

   posX: number = 0;
  posY: number = 0;
  isHovered: boolean = false;
   outlineX: number = 0;  // Changed from private to public
  outlineY: number = 0; 

  private mouseX = 0;
  private mouseY = 0;
  private isBrowser: boolean; // Variable para guardar el estado

  constructor(
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) platformId: Object 
  ) {
    // Verificamos una sola vez en el constructor
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    // Solo si es navegador arrancamos los eventos
    if (this.isBrowser) {
      this.ngZone.runOutsideAngular(() => {
        window.addEventListener('mousemove', this.onMouseMove);
        this.animate();
      });
    }
  }

  // Usamos 'any' en el evento para evitar error de tipos en SSR
  private onMouseMove = (e: any) => {
    // Doble chequeo de seguridad
    if (!this.isBrowser) return;

    this.mouseX = e.clientX;
    this.mouseY = e.clientY;

    if (this.dotRef?.nativeElement) {
      this.dotRef.nativeElement.style.transform = 
        `translate3d(${this.mouseX}px, ${this.mouseY}px, 0) translate(-50%, -50%)`;
    }

    const target = e.target as HTMLElement;
    if (!target) return;

    // Accedemos a window de forma segura
    const computedCursor = window.getComputedStyle(target).cursor;
    const isInteractive = computedCursor === 'pointer' || 
                          target.tagName === 'A' || 
                          target.tagName === 'BUTTON';

    if (this.outlineRef?.nativeElement) {
      if (isInteractive) {
        this.outlineRef.nativeElement.classList.add('hovered');
      } else {
        this.outlineRef.nativeElement.classList.remove('hovered');
      }
    }
  };

  private animate = () => {
    if (!this.isBrowser) return;

    this.outlineX += (this.mouseX - this.outlineX) * 0.15;
    this.outlineY += (this.mouseY - this.outlineY) * 0.15;

    if (this.outlineRef?.nativeElement) {
      this.outlineRef.nativeElement.style.transform = 
        `translate3d(${this.outlineX}px, ${this.outlineY}px, 0) translate(-50%, -50%)`;
      
      if (this.outlineRef.nativeElement.classList.contains('hovered')) {
        this.outlineRef.nativeElement.style.transform += ' rotate(45deg)';
      }
    }

    // 🔥 CAMBIO CLAVE: Usamos window.requestAnimationFrame explícitamente
    window.requestAnimationFrame(this.animate);
  };

  ngOnDestroy() {
    if (this.isBrowser) {
      window.removeEventListener('mousemove', this.onMouseMove);
    }
  }
}