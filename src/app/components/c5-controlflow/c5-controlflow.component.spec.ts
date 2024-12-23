import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C5ControlflowComponent } from './c5-controlflow.component';

describe('C5ControlflowComponent', () => {
  let component: C5ControlflowComponent;
  let fixture: ComponentFixture<C5ControlflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [C5ControlflowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(C5ControlflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
