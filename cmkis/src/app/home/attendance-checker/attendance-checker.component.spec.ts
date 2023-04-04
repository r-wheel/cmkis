import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceCheckerComponent } from './attendance-checker.component';

describe('AttendanceCheckerComponent', () => {
  let component: AttendanceCheckerComponent;
  let fixture: ComponentFixture<AttendanceCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendanceCheckerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendanceCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
