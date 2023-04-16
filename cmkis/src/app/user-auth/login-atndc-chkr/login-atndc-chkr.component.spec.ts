import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAtndcChkrComponent } from './login-atndc-chkr.component';

describe('LoginAtndcChkrComponent', () => {
  let component: LoginAtndcChkrComponent;
  let fixture: ComponentFixture<LoginAtndcChkrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginAtndcChkrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginAtndcChkrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
