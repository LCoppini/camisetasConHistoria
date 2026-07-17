import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Añadido para que el test entienda ngModel si lo usas
import { CartComponent } from './cart'; // CORRECCIÓN: Nombre de la clase real

describe('CartComponent', () => {
  let component: CartComponent; // CORRECCIÓN: Tipo correcto
  let fixture: ComponentFixture<CartComponent>; // CORRECCIÓN: Tipo correcto

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartComponent], // CORRECCIÓN: Declaración correcta
      imports: [FormsModule] // Consejo útil: Evita que el test falle por culpa de formularios
    }).compileComponents();

    fixture = TestBed.createComponent(CartComponent); // CORRECCIÓN: Creación correcta
    component = fixture.componentInstance;
    fixture.detectChanges(); // Reemplazado por detectChanges para inicializar el ciclo de vida de Angular
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
