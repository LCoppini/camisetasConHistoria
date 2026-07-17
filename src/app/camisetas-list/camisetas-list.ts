import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camisetas-list',
  standalone: false,
  templateUrl: './camisetas-list.html',
  styleUrl: './camisetas-list.scss',
})
export class CamisetasList implements OnInit {
  
  // Definimos la lista 
  camisetas = [
    {
      "team" : "Francia",
      "player" : "Olise",
      "year" : 2026, 
      "brand" : "Nike", 
      "price" : 180000, 
      "image" : "/img/Francia2026.jpg"
    },
    {
      "team" : "Argentina",
      "player" : "Maradona",
      "year" : 1986, 
      "brand" : "Le Coq", 
      "price" : 250000, 
      "image" : "/img/argentina86.jpg" // Nombre exacto de tu carpeta
    },
    {
      "team" : "Arsenal",
      "player" : "Rice",
      "year" : 2025, 
      "brand" : "Adidas", 
      "price" : 180000, 
      "image" : "/img/arsenal2025.jpg" // Nombre exacto de tu carpeta
    },

    {
      "team" : "Argentina",
      "player" : "Messi",
      "year" : 2006, 
      "brand" : "Adidas", 
      "price" : 300000, 
      "image" : "/img/messi2006.jpg"
    }

  ];

  ngOnInit(): void {
    // Lógica de inicialización si es necesaria
  }
}
