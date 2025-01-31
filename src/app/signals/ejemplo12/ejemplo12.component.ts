import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { products } from '../ejemplo10/products';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';


interface Producto  {
  id: number,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  category: string,
  thumbnail: string
}

@Component({
  selector: 'app-ejemplo12',
  imports: [CardModule,ButtonModule],
  templateUrl: './ejemplo12.component.html',
  styleUrl: './ejemplo12.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Ejemplo12Component {

  productos = signal<Producto[]>(products);

  cart = signal<Producto[]>([]);

  totalPrice = computed (() => {
    return this.cart().reduce((acc,curr) => acc + curr.price, 0)
  })

  selecProductIds = computed(() => {
    return this.cart().map((producto) => producto.id)
  })

  removeFromCart(producto : Producto){
    this.cart.update((ids) => {
      return ids.filter((i) => i.id !== producto.id)
    })
  }

  addToCart(producto : Producto){
    this.cart.update(productos => [... productos, producto])
  }
}
