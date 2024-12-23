import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-c2-event-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './c2-event-binding.component.html',
  styleUrl: './c2-event-binding.component.scss',
})
export class C2EventBindingComponent {
  mensagem() {
    alert('Event Binding funcionando!');
  }
}
