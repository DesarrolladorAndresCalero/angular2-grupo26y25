import { ChangeDetectionStrategy, Component, signal, WritableSignal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';

@Component({
  selector: 'app-ejemplo5',
  imports: [CardModule, ButtonModule,InputTextModule,FormsModule,FloatLabel],
  templateUrl: './ejemplo5.component.html',
  styleUrl: './ejemplo5.component.css',  
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Ejemplo5Component {

  todoName = '';
  todos: WritableSignal<string[]> = signal([])

  addTodo(todo: HTMLInputElement){
    const item = todo.value;
    this.updateTodos(item)
    this.resetAndFocus(todo)
  }

  updateTodos(todo: string){
    this.todos.update((todos) => [todo, ...todos])
  }

  resetAndFocus(todo: HTMLInputElement){
    todo.value = ''
    todo.focus();
  }
}
