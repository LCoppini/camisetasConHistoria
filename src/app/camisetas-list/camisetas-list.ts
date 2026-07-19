import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Camiseta } from './Camiseta';
import { CamisetasCartService } from '../camisetas-cart';
import { CamisetasDataService } from '../camisetas-data';

@Component({
  selector: 'app-camisetas-list',
  standalone: false,
  templateUrl: './camisetas-list.html',
  styleUrl: './camisetas-list.scss',
})
export class CamisetasList implements OnInit {

  camisetas$!: Observable<Camiseta[]>;

  constructor(
    private cart: CamisetasCartService,
    private camisetasDataService: CamisetasDataService) {
  }

  ngOnInit(): void {
    this.camisetas$ = this.camisetasDataService.getAll();
  }

  addToCart(camiseta: Camiseta): void {
    if (camiseta.quantity > 0) {
      this.cart.addToCart(camiseta);
      camiseta.stock -= camiseta.quantity;
      camiseta.quantity = 0;
    }
  }

  maxReached(mensaje: string): void {
    alert(mensaje);
  }
}