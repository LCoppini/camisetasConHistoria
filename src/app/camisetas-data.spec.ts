import { TestBed } from '@angular/core/testing';

import { CamisetasDataService } from './camisetas-data';

describe('CamisetasData', () => {
  let service: CamisetasDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CamisetasDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
