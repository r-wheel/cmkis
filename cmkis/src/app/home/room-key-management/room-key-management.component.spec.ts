import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomKeyManagementComponent } from './room-key-management.component';

describe('RoomKeyManagementComponent', () => {
  let component: RoomKeyManagementComponent;
  let fixture: ComponentFixture<RoomKeyManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomKeyManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomKeyManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
