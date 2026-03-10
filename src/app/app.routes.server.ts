import { RenderMode, ServerRoute } from '@angular/ssr';
import { routes } from './app.routes'; // 🌟 Cambiado de appRoutes a routes

export const serverRoutes: ServerRoute[] = [
  {
    path: 'producto/:id',
    renderMode: RenderMode.Server,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];