import { TestBed } from '@angular/core/testing';

import { StudentAuthService } from './student-auth.service';

describe('StudentAuthService', () => {
  let service: StudentAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
