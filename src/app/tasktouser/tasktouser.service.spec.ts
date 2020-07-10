import { TestBed } from '@angular/core/testing';

import { TasktoUserService } from './tasktouser.service';

describe('TasktoUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TasktoUserService = TestBed.get(TasktoUserService);
    expect(service).toBeTruthy();
  });
});
