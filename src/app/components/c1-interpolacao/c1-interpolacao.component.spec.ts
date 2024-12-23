import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1InterpolacaoComponent } from './c1-interpolacao.component';

describe('C1InterpolacaoComponent', () => {
  let component: C1InterpolacaoComponent;
  let fixture: ComponentFixture<C1InterpolacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [C1InterpolacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(C1InterpolacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
