import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotlightDirective } from '../../shared/directives/spotlight';
@Component({
  selector: 'app-landing',
  standalone: true,
  // 👇 2. La agregas al arreglo de imports
  imports: [CommonModule, SpotlightDirective], 
  templateUrl: './landing.html',
  styleUrl: './landing.scss'
})
export class LandingComponent {
}