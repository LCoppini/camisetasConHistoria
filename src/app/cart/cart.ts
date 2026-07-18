import { Component, OnInit } from '@angular/core';
import { CamisetasCartService } from '../camisetas-cart';
import { Camiseta } from '../camisetas-list/Camiseta';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class CartComponent implements OnInit { 
    
  cartList$: Observable<Camiseta[]>;

  constructor(private cart: CamisetasCartService) {
    this.cartList$ = cart.cartList.asObservable(); // Observable del carrito conectado
  }

  ngOnInit(): void {
  }

  // Corregido: Agregamos tu función de totalizar usando reduce de forma limpia
  getTotal(products: Camiseta[]): number {
    return products.reduce((acc, p) => acc + (p.price * p.quantity), 0);
  }
}