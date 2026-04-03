
import { ComponentFixture, TestBed } from '@angular/core/testing';
// 1. CORRECCIÓN: Importamos el nombre exacto de la clase
import { ProductDetailComponent } from './product-detail'; 
// Importamos herramientas para simular la URL
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

// 2. CORRECCIÓN: Actualizamos el nombre en el describe
describe('ProductDetailComponent', () => {
  // 3. CORRECCIÓN: Actualizamos los tipos de las variables
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // 4. CORRECCIÓN: Pasamos el componente correcto a los imports
      imports: [ProductDetailComponent],
      providers: [
        // PREVENCIÓN: Engañamos a Angular simulando que estamos en una ruta válida
        // para que 'this.route.paramMap.subscribe' no haga crash.
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({ get: (key: string) => 'perfiles-metalicos' })
          }
        }
      ]
    })
    .compileComponents();

    // 5. CORRECCIÓN: Creamos el componente con el nombre exacto
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    
    // Forzamos a que Angular detecte los cambios iniciales (Ejecuta el ngOnInit)
    fixture.detectChanges(); 
  });

  it('debería crearse exitosamente', () => {
    expect(component).toBeTruthy();
  });
});