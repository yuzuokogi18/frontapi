import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarLibroComponent } from './editar.component';

describe('EditarComponent', () => {
  let component: EditarLibroComponent;
  let fixture: ComponentFixture<EditarLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarLibroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
