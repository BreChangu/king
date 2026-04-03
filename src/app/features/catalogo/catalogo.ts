import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../core/services/product.service'; // 🌟 1. Se importa el servicio

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.scss'
})
export class CatalogoComponent implements OnInit {

  // 🌟 2. Ahora esto se inicializa vacío
  familias: any[] = [];
  searchTerm: string = '';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private productService: ProductService // 🌟 3. Se inyecta en el constructor
  ) { }

  ngOnInit(): void {
    // 🛡️ Evita el error "window is not defined" en el servidor (SSR)
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // 🌟 4. Se obtienen los datos directamente del servicio
    this.familias = this.productService.getFamiliasCatalogo();
  }

  get familiasFiltradas() {
    if (!this.searchTerm) return this.familias;
    const term = this.searchTerm.toLowerCase();
    
    // El filtro sigue funcionando igual, buscando en el nombre y descripción
    return this.familias.filter(f => 
      f.name.toLowerCase().includes(term) || 
      f.description.toLowerCase().includes(term)
    );
  }
}