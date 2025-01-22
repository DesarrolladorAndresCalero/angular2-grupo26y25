import { ChangeDetectionStrategy, Component, model, signal, WritableSignal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejemplo6',
  imports: [CardModule, ButtonModule,InputTextModule,FormsModule],
  templateUrl: './ejemplo6.component.html',
  styleUrl: './ejemplo6.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Ejemplo6Component {

  userName = model('Nombre Apellido')

}
