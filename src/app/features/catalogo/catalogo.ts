import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.scss'
})
export class CatalogoComponent implements OnInit {

  // 🌟 8 FAMILIAS PARA UN GRID PERFECTO (Sin emojis, 100% corporativo)
  familias = [
    {
      id: 'perfiles-metalicos', 
      name: 'Perfiles Metálicos',
      description: 'Postes, canales de amarre, canaletas de carga y ángulos estructurales.',
      image: '/assets/productos/perfil.webp'
    },
    {
      id: 'paneles',
      name: 'Paneles y Tableros',
      description: 'Panel de Yeso, Glass Rey, Durock, Permabase y exteriores.',
      image: '/assets/productos/panel.webp'
    },
    {
      id: 'plafones-suspension',
      name: 'Plafones y Suspensión',
      description: 'Plafones acústicos, T principales, secundarias y ángulos perimetrales.',
      image: '/assets/productos/panel-ligero.webp'
    },
    {
      id: 'compuestos-pastas',
      name: 'Compuestos y Pastas',
      description: 'Readymix, Basecoat, Estuco, Yeso supremo y cementos.',
      image: '/assets/productos/compuestos.webp'
    },
    {
      id: 'cintas',
      name: 'Cintas y Complementos',
      description: 'Cintas de papel, malla de fibra de vidrio y esquineros metálicos o PVC.',
      image: '/assets/productos/cinta-papel.webp'
    },
    {
      id: 'aislamientos',
      name: 'Aislamientos Térmicos',
      description: 'Lana de roca, colchoneta Aislhogar, Tyvek y placas de poliestireno.',
      image: '/assets/productos/panel-amarillo.webp' 
    },
    {
      id: 'tornilleria-fijacion',
      name: 'Tornillería y Anclajes',
      description: 'Tornillos Tek, Framer, taquetes, clavos y fulminantes.',
      image: '/assets/show/maquina.webp'
    },
    {
      id: 'herramientas',
      name: 'Herramientas',
      description: 'Espátulas, charolas, rodillos y herramientas de corte.',
      image: '/assets/show/maquina.webp'
    }
  ];

  searchTerm: string = '';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object 
  ) { }

  ngOnInit(): void {
    // 🛡️ Evita el error "window is not defined" en el servidor
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  get familiasFiltradas() {
    if (!this.searchTerm) return this.familias;
    const term = this.searchTerm.toLowerCase();
    return this.familias.filter(f => 
      f.name.toLowerCase().includes(term) || 
      f.description.toLowerCase().includes(term)
    );
  }
}