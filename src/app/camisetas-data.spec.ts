import { TestBed } from '@angular/core/testing';

import { CamisetasData } from './camisetas-data';

describe('CamisetasData', () => {
  let service: CamisetasData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CamisetasData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
