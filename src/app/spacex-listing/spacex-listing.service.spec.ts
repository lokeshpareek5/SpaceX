import { TestBed } from '@angular/core/testing';

import { SpacexListingService } from './spacex-listing.service';

describe('SpacexListingService', () => {
  let service: SpacexListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpacexListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
