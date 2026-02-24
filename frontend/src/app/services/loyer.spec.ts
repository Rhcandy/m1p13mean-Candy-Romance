import { TestBed } from '@angular/core/testing';

import { LoyerService } from '../../services/loyer';

describe('LoyerService', () => {
  let service: LoyerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Loyer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
