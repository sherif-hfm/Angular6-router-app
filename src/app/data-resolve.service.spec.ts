import { TestBed } from '@angular/core/testing';

import { DataResolveService } from './data-resolve.service';

describe('DataResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataResolveService = TestBed.get(DataResolveService);
    expect(service).toBeTruthy();
  });
});
