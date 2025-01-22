import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-ejemplo1',
  imports: [CardModule, ButtonModule],
  templateUrl: './ejemplo1.component.html',
  styleUrl: './ejemplo1.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Ejemplo1Component {
    
  count = signal<number>(1);

  increaseCount(){
    this.count.update((conteo) => conteo + 1)
  }

  decreaseCount(){
    this.count.update((conteo) => conteo - 1)
  }
}
