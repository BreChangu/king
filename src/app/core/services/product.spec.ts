import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    // 1. ARRANGE (Preparar): Configuramos el entorno de Angular
    TestBed.configureTestingModule({});
    // Inyectamos el servicio para tener una copia fresca antes de cada prueba
    service = TestBed.inject(ProductService);
  });

  it('debería crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('debería retornar el catálogo completo con 7 categorías', () => {
    // 2. ACT (Actuar): Llamamos a la función
    const catalog = service.getProducts();

    // 3. ASSERT (Afirmar): Verificamos que traiga exactamente 7 categorías
    expect(catalog.length).toBe(7);
    
    // Verificamos que el primer elemento sea el de perfiles metálicos
    expect(catalog[0].id).toBe('perfiles-metalicos');
  });

  it('debería retornar el producto correcto al buscar por ID', () => {
    // 2. ACT: Buscamos un ID que sabemos que existe
    const producto = service.getProductById('compuestos-pastas');

    // 3. ASSERT: Confirmamos que no venga vacío y que el nombre coincida
    expect(producto).toBeDefined();
    expect(producto?.name).toBe('Compuestos y Pastas');
  });

  it('debería retornar "undefined" si se busca un ID que no existe', () => {
    // 2. ACT: Buscamos un ID falso
    const productoFalso = service.getProductById('madera-falsa-123');

    // 3. ASSERT: El sistema debe manejar el error devolviendo undefined
    expect(productoFalso).toBeUndefined();
  });
});