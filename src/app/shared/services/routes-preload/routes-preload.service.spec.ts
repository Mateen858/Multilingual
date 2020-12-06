/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RoutesPreloadService } from './routes-preload.service';

describe('Service: RoutesPreload', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoutesPreloadService]
    });
  });

  it('should ...', inject([RoutesPreloadService], (service: RoutesPreloadService) => {
    expect(service).toBeTruthy();
  }));
});
