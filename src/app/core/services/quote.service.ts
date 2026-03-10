import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { QuoteItem } from '../../shared/models/quote.model'; // Ajusta la ruta si es necesario

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  
  // Este es nuestro "Almacén privado" de los productos seleccionados
  private cartItems = new BehaviorSubject<QuoteItem[]>([]);
  
  // Este es el "Megáfono" público que los componentes escuchan para actualizarse
  cartItems$ = this.cartItems.asObservable();

  constructor() { }

  // 1. OBTENER LOS ARTÍCULOS ACTUALES
  getItems(): QuoteItem[] {
    return this.cartItems.getValue();
  }

  // 2. AGREGAR A LA COTIZACIÓN
  addItem(newItem: QuoteItem) {
    const currentItems = this.getItems();
    // Buscamos si ya existe ese mismo producto con esa misma medida
    const existingItemIndex = currentItems.findIndex(item => item.id === newItem.id);

    if (existingItemIndex > -1) {
      // Si ya existe, solo le sumamos la cantidad
      currentItems[existingItemIndex].quantity += newItem.quantity;
      this.cartItems.next([...currentItems]);
    } else {
      // Si es nuevo, lo agregamos a la lista
      this.cartItems.next([...currentItems, newItem]);
    }
  }

  // 3. ELIMINAR DE LA COTIZACIÓN
  removeItem(itemId: string) {
    const currentItems = this.getItems();
    const filteredItems = currentItems.filter(item => item.id !== itemId);
    this.cartItems.next(filteredItems);
  }

  // 4. ACTUALIZAR CANTIDAD (Para el input de + y - en el cajón)
  updateQuantity(itemId: string, quantity: number) {
    const currentItems = this.getItems();
    const itemIndex = currentItems.findIndex(item => item.id === itemId);
    
    if (itemIndex > -1 && quantity > 0) {
      currentItems[itemIndex].quantity = quantity;
      this.cartItems.next([...currentItems]);
    }
  }

  // 5. VACIAR COTIZACIÓN (Se usa después de que el cliente manda el WhatsApp)
  clearCart() {
    this.cartItems.next([]);
  }
}