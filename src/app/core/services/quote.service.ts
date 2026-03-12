import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { QuoteItem } from '../../shared/models/quote.model'; // 🌟 Usamos tu QuoteItem

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  
  // Almacén privado
  private cartItems = new BehaviorSubject<QuoteItem[]>([]);
  // Megáfono público
  cartItems$ = this.cartItems.asObservable();

  // 🌟 NUEVO MEGÁFONO: Avisa específicamente cuándo se agrega un item
  private itemAddedEvent = new Subject<QuoteItem>();
  itemAddedEvent$ = this.itemAddedEvent.asObservable();

  constructor() { }

  getItems(): QuoteItem[] {
    return this.cartItems.getValue();
  }

  addItem(newItem: QuoteItem) {
    const currentItems = this.getItems();
    const existingItemIndex = currentItems.findIndex(item => item.id === newItem.id);

    if (existingItemIndex > -1) {
      currentItems[existingItemIndex].quantity += newItem.quantity;
      this.cartItems.next([...currentItems]);
    } else {
      this.cartItems.next([...currentItems, newItem]);
    }

    // 🌟 AVISAMOS DEL EVENTO
    this.itemAddedEvent.next(newItem);
  }

  removeItem(itemId: string) {
    const currentItems = this.getItems();
    const filteredItems = currentItems.filter(item => item.id !== itemId);
    this.cartItems.next(filteredItems);
  }

  updateQuantity(itemId: string, quantity: number) {
    const currentItems = this.getItems();
    const itemIndex = currentItems.findIndex(item => item.id === itemId);
    
    if (itemIndex > -1 && quantity > 0) {
      currentItems[itemIndex].quantity = quantity;
      this.cartItems.next([...currentItems]);
    }
  }

  clearCart() {
    this.cartItems.next([]);
  }
}