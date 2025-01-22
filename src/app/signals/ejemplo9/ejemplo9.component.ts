import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-ejemplo9',
  imports: [],
  templateUrl: './ejemplo9.component.html',
  styleUrl: './ejemplo9.component.css'
})
export class Ejemplo9Component {

  precio=signal(0);
  IVAEnPorcentaje = signal(19);
  totalIVA = computed(() => this.precio() * (this.IVAEnPorcentaje()/100))

  total = computed(() => this.precio() + this.totalIVA())
  
  listado = signal<any[]>([])

  onInputUpdate(event: Event): void{
    const newValue = +(event.target as HTMLInputElement).value
  }
}
