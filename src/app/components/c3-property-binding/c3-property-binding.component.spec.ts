import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3PropertyBindingComponent } from './c3-property-binding.component';

describe('C3PropertyBindingComponent', () => {
  let component: C3PropertyBindingComponent;
  let fixture: ComponentFixture<C3PropertyBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [C3PropertyBindingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(C3PropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
