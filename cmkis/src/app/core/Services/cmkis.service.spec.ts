import { TestBed } from '@angular/core/testing';

import { CmkisService } from './cmkis.service';

describe('CmkisService', () => {
  let service: CmkisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CmkisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
