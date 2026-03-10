import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model'; // Asegúrate de que la ruta sea correcta
import  { RouterModule } from '@angular/router';
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})
export class ProductCardComponent {
  // Exigimos que le pasen un producto obligatoriamente
  @Input({ required: true }) product!: Product; 
}