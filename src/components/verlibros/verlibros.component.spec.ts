import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerlibrosComponent } from './verlibros.component';

describe('VerlibrosComponent', () => {
  let component: VerlibrosComponent;
  let fixture: ComponentFixture<VerlibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerlibrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerlibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
