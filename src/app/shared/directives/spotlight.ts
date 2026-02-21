import { Directive, ElementRef, HostListener, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appSpotlight]',
  standalone: true
})
export class SpotlightDirective implements OnInit {
  // 👇 Le damos "poderes" configurables desde el HTML
  @Input() spotlightColor: string = 'rgba(0, 0, 0, 0.05)'; // Color por defecto (sombra oscura)
  @Input() spotlightSize: string = '800px'; // Tamaño por defecto

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // Inyectamos el color y tamaño iniciales al CSS
    this.renderer.setStyle(this.el.nativeElement, '--spotlight-color', this.spotlightColor);
    this.renderer.setStyle(this.el.nativeElement, '--spotlight-size', this.spotlightSize);
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    this.renderer.setStyle(this.el.nativeElement, '--mouse-x', `${x}px`);
    this.renderer.setStyle(this.el.nativeElement, '--mouse-y', `${y}px`);
  }
}