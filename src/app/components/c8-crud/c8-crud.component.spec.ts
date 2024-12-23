import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C8CrudComponent } from './c8-crud.component';

describe('C8CrudComponent', () => {
  let component: C8CrudComponent;
  let fixture: ComponentFixture<C8CrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [C8CrudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(C8CrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
