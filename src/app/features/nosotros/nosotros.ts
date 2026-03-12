import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.scss'
})
export class NosotrosComponent implements OnInit {

  // Puedes llenar estos datos desde un servicio si en el futuro cambian
  stats = [
    { numero: '+15', label: 'Años de Experiencia' },
    { numero: '+5,000', label: 'Toneladas de Acero Transformadas' },
    { numero: '100%', label: 'Garantía de Fabricación' },
    { numero: '+800', label: 'Proyectos Soportados' }
  ];

  constructor() { }

  ngOnInit(): void {
    // Asegura que al entrar a la página cargue desde arriba
    window.scrollTo(0, 0);
  }
}