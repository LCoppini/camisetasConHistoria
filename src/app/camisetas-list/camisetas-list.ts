import { Component, OnInit } from '@angular/core';
import { Camiseta } from './Camiseta';

@Component({
  selector: 'app-camisetas-list',
  standalone: false,
  templateUrl: './camisetas-list.html',
  styleUrl: './camisetas-list.scss',
})
export class CamisetasList implements OnInit {
  
  // Agregamos una propiedad simulada de "stock" para controlar el límite del Up
  camisetas: Camiseta[] = [
    {
      "team" : "Francia",
      "player" : "Olise",
      "year" : 2026, 
      "brand" : "Nike", 
      "price" : 180000, 
      "image" : "/img/Francia2026.jpg",
      "quantity" : 0, 
      "clearence" : true,
      "stock": 5 // Límite máximo de compra
    },
    {
      "team" : "Argentina",
      "player" : "Maradona",
      "year" : 1986, 
      "brand" : "Le Coq", 
      "price" : 250000, 
      "image" : "/img/argentina86.jpg",
      "quantity" : 0, 
      "clearence" : false,
      "stock": 3
    },
    {
      "team" : "Arsenal",
      "player" : "Rice",
      "year" : 2025, 
      "brand" : "Adidas", 
      "price" : 180000, 
      "image" : "/img/arsenal2025.jpg",
      "quantity" : 0, 
      "clearence" : false,
      "stock": 10
    },
    {
      "team" : "Argentina",
      "player" : "Messi",
      "year" : 2006, 
      "brand" : "Adidas", 
      "price" : 300000, 
      "image" : "/img/messi2006.jpg", 
      "quantity" : 0, 
      "clearence" : true,
      "stock": 4
    }
  ];

  ngOnInit(): void {
  }

  // Incrementa la cantidad asegurando que no supere el stock disponible
  upQuantity(camiseta: any): void {
    if (camiseta.quantity < camiseta.stock) {
      camiseta.quantity++;
    } else {
      alert(`No puedes agregar más unidades. El stock máximo es de ${camiseta.stock}.`);
    }
  }

  // Decrementa la cantidad controlando que nunca baje de 0
  downQuantity(camiseta: any): void {
    if (camiseta.quantity > 0) {
      camiseta.quantity--;
    }
  }


  changeQuantity(event: any, camiseta: Camiseta): void {
    console.log(event.key); 

    // Controlamos el campo de forma simple directamente con las propiedades del objeto
    if (camiseta.quantity > camiseta.stock) {
      camiseta.quantity = camiseta.stock; // Si se pasa del stock, lo frena en el límite máximo
    }

    if (camiseta.quantity < 0) {
      camiseta.quantity = 0; // Si pone un numero negativo, lo resetea a cero
    }
  }


  // Método para el botón de Añadir
  addToCart(camiseta: any): void {
    console.log('Añadido al carrito:', camiseta);
  }
}
