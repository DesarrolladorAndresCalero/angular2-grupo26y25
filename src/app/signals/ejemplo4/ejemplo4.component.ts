import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-ejemplo4',
  imports: [CardModule, ButtonModule],
  templateUrl: './ejemplo4.component.html',
  styleUrl: './ejemplo4.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Ejemplo4Component {

  contador = signal(0)
  contadorComputador = computed(() => this.contador() *2)

  increaseCount(){
    this.contador.update(() => this.contador() + 1)
  }
}
