import { Component, signal } from '@angular/core';
import { products } from '../ejemplo10/products';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-ejemplo13',
  imports: [CardModule,ButtonModule],
  templateUrl: './ejemplo13.component.html',
  styleUrl: './ejemplo13.component.css'
})
export class Ejemplo13Component {

  nombre = signal('juan')

  nombreDeSoloLectura = this.nombre.asReadonly();

  nombreUpdate(nombre: string){
    this.nombre.set(nombre)
  }
}
