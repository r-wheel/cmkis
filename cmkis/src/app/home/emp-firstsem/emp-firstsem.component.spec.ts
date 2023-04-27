import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpFirstsemComponent } from './emp-firstsem.component';

describe('EmpFirstsemComponent', () => {
  let component: EmpFirstsemComponent;
  let fixture: ComponentFixture<EmpFirstsemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpFirstsemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpFirstsemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
