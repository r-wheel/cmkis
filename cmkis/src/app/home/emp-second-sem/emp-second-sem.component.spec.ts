import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpSecondSemComponent } from './emp-second-sem.component';

describe('EmpSecondSemComponent', () => {
  let component: EmpSecondSemComponent;
  let fixture: ComponentFixture<EmpSecondSemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpSecondSemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpSecondSemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
