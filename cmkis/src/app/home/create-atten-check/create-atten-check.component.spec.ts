import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAttenCheckComponent } from './create-atten-check.component';

describe('CreateAttenCheckComponent', () => {
  let component: CreateAttenCheckComponent;
  let fixture: ComponentFixture<CreateAttenCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAttenCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAttenCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
