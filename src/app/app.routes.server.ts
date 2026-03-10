import { RenderMode, ServerRoute } from '@angular/ssr';
import { appRoutes } from './app.routes'; // Asegúrate de que apunte a tus rutas

export const serverRoutes: ServerRoute[] = [
  {
    path: 'producto/:id',
    renderMode: RenderMode.Server, // 🌟 Le decimos que renderice esta en vivo
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender // 🌟 El resto del sitio sí lo pre-construye
  }
];