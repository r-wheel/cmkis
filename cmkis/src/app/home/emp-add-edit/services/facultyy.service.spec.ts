import { TestBed } from '@angular/core/testing';

import { FacultyyService } from './facultyy.service';

describe('FacultyyService', () => {
  let service: FacultyyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacultyyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
