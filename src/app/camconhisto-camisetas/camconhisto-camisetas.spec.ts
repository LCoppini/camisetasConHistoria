import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamConHistoCamisetas } from './camconhisto-camisetas';

describe('CamConHistoCamisetas', () => {
  let component: CamConHistoCamisetas;
  let fixture: ComponentFixture<CamConHistoCamisetas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CamConHistoCamisetas],
    }).compileComponents();

    fixture = TestBed.createComponent(CamConHistoCamisetas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
