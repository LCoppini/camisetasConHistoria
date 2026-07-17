import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamconhistoCamisetas } from './camconhisto-camisetas';

describe('CamconhistoCamisetas', () => {
  let component: CamconhistoCamisetas;
  let fixture: ComponentFixture<CamconhistoCamisetas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CamconhistoCamisetas],
    }).compileComponents();

    fixture = TestBed.createComponent(CamconhistoCamisetas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
