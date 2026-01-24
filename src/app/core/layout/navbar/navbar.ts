import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importante para [class.scrolled]
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink], // Importa esto
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent {
  isScrolled = false;

  // Escucha el scroll del navegador
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Si bajas más de 20px, activa la clase .scrolled
    this.isScrolled = window.scrollY > 20;
  }
}