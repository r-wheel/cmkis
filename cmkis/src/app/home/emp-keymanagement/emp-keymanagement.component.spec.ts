import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpKeymanagementComponent } from './emp-keymanagement.component';

describe('EmpKeymanagementComponent', () => {
  let component: EmpKeymanagementComponent;
  let fixture: ComponentFixture<EmpKeymanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpKeymanagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpKeymanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
