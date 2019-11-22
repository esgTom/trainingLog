import { TestBed, inject } from '@angular/core/testing';

import { ActivityBoService } from './activity-bo.service';

describe('ActivityBoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivityBoService]
    });
  });

  it('should be created', inject([ActivityBoService], (service: ActivityBoService) => {
    expect(service).toBeTruthy();
  }));
});
