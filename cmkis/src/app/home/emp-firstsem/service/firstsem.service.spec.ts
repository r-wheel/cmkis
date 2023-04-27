import { TestBed } from '@angular/core/testing';

import { FirstsemService } from './firstsem.service';

describe('FirstsemService', () => {
  let service: FirstsemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstsemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
