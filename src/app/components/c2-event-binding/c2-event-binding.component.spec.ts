import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C2EventBindingComponent } from './c2-event-binding.component';

describe('C2EventBindingComponent', () => {
  let component: C2EventBindingComponent;
  let fixture: ComponentFixture<C2EventBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [C2EventBindingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(C2EventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
