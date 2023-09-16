import { TestBed } from '@angular/core/testing';

import { RejectsService } from './rejects.service';

describe('RejectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RejectsService = TestBed.get(RejectsService);
    expect(service).toBeTruthy();
  });
});
