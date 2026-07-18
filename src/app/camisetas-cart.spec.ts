import { TestBed } from '@angular/core/testing';

import { CamisetasCart } from './camisetas-cart';

describe('CamisetasCart', () => {
  let service: CamisetasCart;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CamisetasCart);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
