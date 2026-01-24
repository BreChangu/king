import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./core/layout/navbar/navbar";
import { CustomCursorComponent } from './core/ui/custom-cursor/custom-cursor';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent,CustomCursorComponent],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('king');
}
