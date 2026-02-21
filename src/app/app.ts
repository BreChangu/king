import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./core/layout/navbar/navbar";
import { Footer } from "./core/layout/footer/footer";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, Footer],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('king');
}
