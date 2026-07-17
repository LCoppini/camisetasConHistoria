import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisetasList } from './camisetas-list';

describe('CamisetasList', () => {
  let component: CamisetasList;
  let fixture: ComponentFixture<CamisetasList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CamisetasList],
    }).compileComponents();

    fixture = TestBed.createComponent(CamisetasList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
