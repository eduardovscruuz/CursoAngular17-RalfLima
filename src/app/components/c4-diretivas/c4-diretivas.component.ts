import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-c4-diretivas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './c4-diretivas.component.html',
  styleUrl: './c4-diretivas.component.scss',
})
export class C4DiretivasComponent {
  exibir: boolean = true;

  mudarNg() {
    if (this.exibir) {
      this.exibir = false;
    } else {
      this.exibir = true;
    }
  }

  nomes: string[] = ['Ned Stark', 'Jon Snow', 'Robb Stark', 'Jaime Lannister'];

  linguagem: string = 'Javascript'; //HTML, CSS, Javascript

  condicaoStyle: boolean = true;

  lista: string[] = ['True', 'True', 'False'];
}
