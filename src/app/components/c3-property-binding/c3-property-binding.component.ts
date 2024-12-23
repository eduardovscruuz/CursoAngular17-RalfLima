import { Component } from '@angular/core';

@Component({
  selector: 'app-c3-property-binding',
  standalone: true,
  imports: [],
  templateUrl: './c3-property-binding.component.html',
  styleUrl: './c3-property-binding.component.scss',
})
export class C3PropertyBindingComponent {
  imagem: string = 'assets/sun.png';

  mudar() {
    if (this.imagem === 'assets/sun.png') {
      this.imagem = 'assets/moon.png';
    } else {
      this.imagem = 'assets/sun.png';
    }
  }
}
