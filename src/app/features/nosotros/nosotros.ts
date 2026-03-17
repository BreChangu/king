import { Component, OnInit } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common'; // 🌟 1. Importamos el scroller
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.scss'
})
export class NosotrosComponent implements OnInit {

  stats = [
    { numero: '+15', label: 'Años de Experiencia' },
    { numero: '+5,000', label: 'Toneladas de Acero Transformadas' },
    { numero: '100%', label: 'Garantía de Fabricación' },
    { numero: '+800', label: 'Proyectos Soportados' }
  ];

  // 🌟 2. Inyectamos el ViewportScroller
  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
    // 🌟 3. Forma segura de subir el scroll al inicio (Compatible con SSR y Vercel)
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}