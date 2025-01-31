import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-ejemplo9',
  imports: [CardModule, 
    ButtonModule,
    InputTextModule,
    FormsModule,
    FloatLabel,
    TableModule],
  templateUrl: './ejemplo9.component.html',
  styleUrl: './ejemplo9.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Ejemplo9Component {

  precio=signal(0);
  IVAEnPorcentaje = signal(19);
  totalIVA = computed(() => this.precio() * (this.IVAEnPorcentaje()/100))

  total = computed(() => this.precio() + this.totalIVA())
  
  listado = signal<any[]>([])

  onInputUpdate(event: Event): void{
    const newValue = +(event.target as HTMLInputElement).value;
    this.precio.set(newValue);
  }

  onInputIvaUpdate(event: Event): void {
    const newValue = +(event.target as HTMLInputElement).value;
    this.IVAEnPorcentaje.set(newValue);
  }

  save(): void {
    if (this.precio() <= 0) return;

    this.listado.update( (historial: any[]) => {
      const item = {
        precio: this.precio(),
        ivaEnPorcentaje: this.IVAEnPorcentaje(),
        iva: this.totalIVA(),
        total: this.total()
      }

      return [...historial, item]
    })
  }
}
