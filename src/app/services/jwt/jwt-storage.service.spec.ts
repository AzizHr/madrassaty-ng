import { TestBed } from '@angular/core/testing';

import { JwtStorageService } from './jwt-storage.service';

describe('JwtStorageService', () => {
  let service: JwtStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
