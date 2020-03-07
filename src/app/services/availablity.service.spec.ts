import { TestBed } from '@angular/core/testing';

import { AvailablityService } from './availablity.service';

describe('AvailablityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvailablityService = TestBed.get(AvailablityService);
    expect(service).toBeTruthy();
  });
});
