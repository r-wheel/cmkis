import { TestBed } from '@angular/core/testing';

import { SecomdSemService } from './secomd-sem.service';

describe('SecomdSemService', () => {
  let service: SecomdSemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecomdSemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
