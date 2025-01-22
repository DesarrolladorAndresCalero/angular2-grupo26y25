import { Component } from '@angular/core';
import { interval, take } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-ejemplo7',
  imports: [CardModule,ButtonModule],
  templateUrl: './ejemplo7.component.html',
  styleUrl: './ejemplo7.component.css'
})
export class Ejemplo7Component {

  counter$ = interval(1000);
  counter = toSignal(this.counter$);

  counter2$ = interval(1000).pipe(take(6))
  counter2 = toSignal(this.counter2$);

}
