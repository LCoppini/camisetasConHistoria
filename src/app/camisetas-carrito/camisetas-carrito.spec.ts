import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisetasCarrito } from './camisetas-carrito';

describe('CamisetasCarrito', () => {
  let component: CamisetasCarrito;
  let fixture: ComponentFixture<CamisetasCarrito>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CamisetasCarrito],
    }).compileComponents();

    fixture = TestBed.createComponent(CamisetasCarrito);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
