import { TestBed, inject } from '@angular/core/testing';

import { AppRouteResolversService } from './app-route-resolvers.service';

describe('AppRouteResolversService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppRouteResolversService]
    });
  });

  it('should be created', inject([AppRouteResolversService], (service: AppRouteResolversService) => {
    expect(service).toBeTruthy();
  }));
});
