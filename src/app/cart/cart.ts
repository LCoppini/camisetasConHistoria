import { Component, OnInit } from '@angular/core';

// Definimos la estructura exacta para mantener la compatibilidad con tus camisetas
interface CamisetaItem {
  team: string;
  player: string;
  year: number;
  brand: string;
  price: number;
  image: string;
  quantity: number; // Control de cantidad dentro del carrito
}

@Component({
  selector: 'app-cart', // MODIFICADO: Selector simplificado
  standalone: false,
  templateUrl: './cart.html', // MODIFICADO: Ruta al nuevo archivo HTML
  styleUrl: './cart.scss', // MODIFICADO: Ruta al nuevo archivo SCSS
})
export class CartComponent implements OnInit { // MODIFICADO: Nombre de clase más limpio

  // Lista de productos cargados actualmente en el carrito de compras
  carrito: CamisetaItem[] = [
    {
      "team": "Argentina",
      "player": "Messi",
      "year": 2006, 
      "brand": "Adidas", 
      "price": 300000, 
      "image": "/img/messi2006.jpg",
      "quantity": 1
    },
    {
      "team": "Francia",
      "player": "Olise",
      "year": 2026, 
      "brand": "Nike", 
      "price": 180000, 
      "image": "/img/Francia2026.jpg",
      "quantity": 2
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Lógica al iniciar el componente si la necesitas
  }

  // Incrementa la cantidad de un artículo en el carrito
  incrementarCantidad(index: number): void {
    this.carrito[index].quantity++;
  }

  // Decrementa la cantidad de un artículo o lo elimina si llega a cero
  decrementarCantidad(index: number): void {
    if (this.carrito[index].quantity > 1) {
      this.carrito[index].quantity--;
    } else {
      this.eliminarProducto(index);
    }
  }

  // Elimina por completo un producto del listado usando su posición
  eliminarProducto(index: number): void {
    this.carrito.splice(index, 1);
  }

  // Calcula el precio total acumulado de todos los artículos multiplicados por su cantidad
  get totalCompra(): number {
    return this.carrito.reduce((acumulado, item) => acumulado + (item.price * item.quantity), 0);
  }

  // Vacía por completo el listado del carrito
  limpiarCarrito(): void {
    this.carrito = [];
  }
}
