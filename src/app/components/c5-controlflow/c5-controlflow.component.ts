import { Component } from '@angular/core';

@Component({
  selector: 'app-c5-controlflow',
  standalone: true,
  imports: [],
  templateUrl: './c5-controlflow.component.html',
  styleUrl: './c5-controlflow.component.scss',
})
export class C5ControlflowComponent {
  exibir: boolean = false;

  nomes: string[] = ['Cersei Lannister', 'Tyrion Lannister', 'Arya Stark'];

  linguagem: string = 'HTML'; //HTML, CSS, Javascript
}
