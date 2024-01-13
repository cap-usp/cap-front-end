import { TestBed } from '@angular/core/testing';

import { ObraServiceService } from './obra-service.service';

describe('ObraServiceService', () => {
  let service: ObraServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObraServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
