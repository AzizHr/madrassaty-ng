import { TestBed } from '@angular/core/testing';

import { ManagerAuthService } from './manager-auth.service';

describe('ManagerAuthService', () => {
  let service: ManagerAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
