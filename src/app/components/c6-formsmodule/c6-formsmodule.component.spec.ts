import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C6FormsmoduleComponent } from './c6-formsmodule.component';

describe('C6FormsmoduleComponent', () => {
  let component: C6FormsmoduleComponent;
  let fixture: ComponentFixture<C6FormsmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [C6FormsmoduleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(C6FormsmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
