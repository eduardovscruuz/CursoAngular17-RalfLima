import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-c7-reactiveforms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './c7-reactiveforms.component.html',
  styleUrl: './c7-reactiveforms.component.scss',
})
export class C7ReactiveformsComponent {
  formulario = new FormGroup({
    nome: new FormControl(''),
    cidade: new FormControl(''),
  });
}
