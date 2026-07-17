import { Component, Input, OnInit } from '@angular/core';
import { Camiseta } from '../camisetas-list/Camiseta';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.html',
  styleUrl: './input-integer.scss',
})
export class InputInteger implements OnInit {
  
  // El constructor vacío como el del profe
  constructor() {}

  // Agregamos '!' para solucionar el error de TypeScript
  @Input()
  quantity!: number;

  @Input()
  max!: number;

  // El método obligatorio del OnInit que te faltaba
  ngOnInit(): void {
  }

  // Cambié 'any' por 'Camiseta' para seguir el tipado estricto del profe
  upQuantity(): void {
    if (this.quantity < this.max) {
      this.quantity++;
    } 
  }

  downQuantity(camiseta: Camiseta): void {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }

  changeQuantity(event: any, camiseta: Camiseta): void {
    console.log(event.key); 

    if (camiseta.quantity > camiseta.stock) {
      camiseta.quantity = camiseta.stock; 
    }

    if (camiseta.quantity < 0) {
      camiseta.quantity = 0; 
    }
  }
}