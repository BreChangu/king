import { Component, OnInit } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, RouterLink,FormsModule],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.scss'
})
export class CatalogoComponent implements OnInit {

  // 🌟 EL "HUB" DE FAMILIAS
  familias = [
    {
      id: 'perf-001', // 👈 Este ID debe coincidir con los de tu ProductDetail
      name: 'Sistemas de Perfilería Metálica',
      description: 'Postes, canales, esquineros y canaletas de carga en diversos calibres para muros y plafones.',
      image: 'https://via.placeholder.com/600x400?text=Perfileria', // Cambia por foto real
      icon: '🏗️'
    },
    {
      id: 'pan-001',
      name: 'Paneles de Yeso y Cemento',
      description: 'Placas estándar, resistentes a la humedad (RH), fuego (RF) y fibrocemento para exteriores.',
      image: 'https://via.placeholder.com/600x400?text=Paneles',
      icon: '🧱'
    },
    {
      id: 'comp-001',
      name: 'Masillas y Adhesivos',
      description: 'Compuestos para juntas, basecoat, selladores y texturizados de alto rendimiento.',
      image: 'https://via.placeholder.com/600x400?text=Masillas',
      icon: '🪣'
    },
    {
      id: 'torn-001',
      name: 'Tornillería y Fijación',
      description: 'Tornillos Framer, Tek, anclajes y clavos para todo tipo de estructura ligera.',
      image: 'https://via.placeholder.com/600x400?text=Tornillos',
      icon: '🔩'
    },
    {
      id: 'cint-001',
      name: 'Cintas y Complementos',
      description: 'Cintas de malla, papel, esquineros plásticos y rebordes para un acabado perfecto.',
      image: 'https://via.placeholder.com/600x400?text=Cintas',
      icon: '📏'
    },
    {
      id: 'herr-001',
      name: 'Herramientas',
      description: 'Espátulas, charolas, atornilladores y herramienta especializada para tablaroqueros.',
      image: 'https://via.placeholder.com/600x400?text=Herramientas',
      icon: '🛠️'
    }
  ];

  searchTerm: string = '';

  constructor(private viewportScroller: ViewportScroller) { }

ngOnInit(): void {
    // 3. Usas la forma segura de Angular para ir hacia arriba
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  // Lógica simple para un buscador rápido (filtrará las familias)
  get familiasFiltradas() {
    if (!this.searchTerm) return this.familias;
    const term = this.searchTerm.toLowerCase();
    return this.familias.filter(f => 
      f.name.toLowerCase().includes(term) || 
      f.description.toLowerCase().includes(term)
    );
  }
}