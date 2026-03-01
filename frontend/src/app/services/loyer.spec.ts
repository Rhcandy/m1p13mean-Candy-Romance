import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ApiService } from './api.service';
import { LoyerService } from './loyer.services';

describe('LoyerService', () => {
  let service: LoyerService;
  let apiServiceSpy: jasmine.SpyObj<ApiService>;

  beforeEach(() => {
    apiServiceSpy = jasmine.createSpyObj<ApiService>('ApiService', ['get', 'post', 'put', 'patch', 'delete']);
    apiServiceSpy.get.and.returnValue(of({ success: true, data: [] }));

    TestBed.configureTestingModule({
      providers: [LoyerService, { provide: ApiService, useValue: apiServiceSpy }]
    });

    service = TestBed.inject(LoyerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
