import { TestBed } from '@angular/core/testing';

import { DataFetchServiceService } from './data-fetch-service.service';

describe('DataFetchServiceService', () => {
  let service: DataFetchServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataFetchServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
