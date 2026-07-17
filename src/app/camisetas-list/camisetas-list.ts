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
      "quantity" : 10, 
      "clearence" : true,
      "stock": 4
    }
  ];

  ngOnInit(): void {
  }

  maxReached(mensaje: string): void {
    alert(mensaje);
  }

  // Método para el botón de Añadir
  addToCart(camiseta: any): void {
    console.log('Añadido al carrito:', camiseta);
  }
}
