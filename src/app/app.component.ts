import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { C1InterpolacaoComponent } from './components/c1-interpolacao/c1-interpolacao.component';
import { C2EventBindingComponent } from './components/c2-event-binding/c2-event-binding.component';
import { C3PropertyBindingComponent } from './components/c3-property-binding/c3-property-binding.component';
import { C4DiretivasComponent } from './components/c4-diretivas/c4-diretivas.component';
import { C5ControlflowComponent } from './components/c5-controlflow/c5-controlflow.component';
import { C6FormsmoduleComponent } from './components/c6-formsmodule/c6-formsmodule.component';
import { C7ReactiveformsComponent } from './components/c7-reactiveforms/c7-reactiveforms.component';
import { C8CrudComponent } from './components/c8-crud/c8-crud.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    C1InterpolacaoComponent,
    C2EventBindingComponent,
    C3PropertyBindingComponent,
    C4DiretivasComponent,
    C5ControlflowComponent,
    C6FormsmoduleComponent,
    C7ReactiveformsComponent,
    C8CrudComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'curso-ralflima-angular17';
}
