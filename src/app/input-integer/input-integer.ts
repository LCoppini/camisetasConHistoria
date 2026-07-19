import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Camiseta } from '../camisetas-list/Camiseta';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.html',
  styleUrl: './input-integer.scss',
})
export class InputInteger implements OnInit {
  
  constructor() {}

  @Input()
  quantity!: number;

  @Output()
  quantityChange = new EventEmitter<number>();

  // 1. Creamos el nuevo evento para avisar que se llegó al máximo
  @Output()
  maxReached = new EventEmitter<string>();

  @Input()
  max!: number;

  ngOnInit(): void {}

  upQuantity(): void {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    } 
    else {
      this.maxReached.emit(`Se ha alcanzado el límite máximo de stock (${this.max} unidades).`);
    }
  }

  downQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  changeQuantity(event: any): void {
    console.log(event.key); 

    if (this.quantity > this.max) {
      this.quantity = this.max; 
      
      this.maxReached.emit(`No puedes superar el stock máximo de ${this.max}.`);
    }

    if (this.quantity < 0) {
      this.quantity = 0; 
    }

    this.quantityChange.emit(this.quantity);
  }
}