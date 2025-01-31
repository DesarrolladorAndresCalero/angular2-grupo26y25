import { ChangeDetectionStrategy, Component, effect, signal, untracked } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-ejemplo11',
  imports: [CardModule,ButtonModule],
  templateUrl: './ejemplo11.component.html',
  styleUrl: './ejemplo11.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Ejemplo11Component {

  contador1 = signal(1)
  contador2 = signal(1)

  counterUpdate$ = effect(() => {
    console.log(this.contador1(), untracked(() => this.contador2()))
  })  

  updateContador1(){
    this.contador1.update(() => this.contador1() + 1)
  }

  updateContador2(){
    this.contador2.update(() => this.contador2() + 1)
  }
}
