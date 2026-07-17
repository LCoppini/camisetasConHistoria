import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisetasAbout } from './camisetas-about';

describe('CamisetasAbout', () => {
  let component: CamisetasAbout;
  let fixture: ComponentFixture<CamisetasAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CamisetasAbout],
    }).compileComponents();

    fixture = TestBed.createComponent(CamisetasAbout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
