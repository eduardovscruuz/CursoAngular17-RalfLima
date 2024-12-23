import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-c6-formsmodule',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './c6-formsmodule.component.html',
  styleUrl: './c6-formsmodule.component.scss',
})
export class C6FormsmoduleComponent {
  nome: string = '';
  cidade: string = '';
}
