import { TestBed } from '@angular/core/testing';

import { TeacherAuthService } from './teacher-auth.service';

describe('TeacherService', () => {
  let service: TeacherAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacherAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
