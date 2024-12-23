import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C4DiretivasComponent } from './c4-diretivas.component';

describe('C4DiretivasComponent', () => {
  let component: C4DiretivasComponent;
  let fixture: ComponentFixture<C4DiretivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [C4DiretivasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(C4DiretivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
