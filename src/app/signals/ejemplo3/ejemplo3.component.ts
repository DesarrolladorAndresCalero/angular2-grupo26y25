import { Component, signal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';

@Component({
  selector: 'app-ejemplo3',
  imports: [CardModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    FloatLabel],
  templateUrl: './ejemplo3.component.html',
  styleUrl: './ejemplo3.component.css'
})
export class Ejemplo3Component {

  name = signal('')

  updateName(name: string){
    this.name.set(name)
  }

}
