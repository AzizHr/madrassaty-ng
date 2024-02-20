import { TestBed } from '@angular/core/testing';

import { ManagerAuthService } from './manager-auth.service';

describe('ManagerService', () => {
  let service: ManagerAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
