import { Component, effect, signal } from '@angular/core';
import { interval, take } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-ejemplo8',
  imports: [CardModule,ButtonModule],
  templateUrl: './ejemplo8.component.html',
  styleUrl: './ejemplo8.component.css'
})
export class Ejemplo8Component {
  contador = signal(50)

  contadorEffect = effect(() => console.log(this.contador()))

  updateContador(){
    this.contador.update((count) => count + 1)
  }
}
