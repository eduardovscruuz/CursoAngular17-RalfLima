import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C7ReactiveformsComponent } from './c7-reactiveforms.component';

describe('C7ReactiveformsComponent', () => {
  let component: C7ReactiveformsComponent;
  let fixture: ComponentFixture<C7ReactiveformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [C7ReactiveformsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(C7ReactiveformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
