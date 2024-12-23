import { Component } from '@angular/core';

@Component({
  selector: 'app-c1-interpolacao',
  standalone: true,
  imports: [],
  templateUrl: './c1-interpolacao.component.html',
  styleUrl: './c1-interpolacao.component.scss',
})
export class C1InterpolacaoComponent {
  interpo: string = 'interpolação';
  nome: string = 'Eduardo';
  idade: number = 24;
}
