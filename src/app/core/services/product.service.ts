import { Injectable } from '@angular/core';
import { Product } from '../../shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    // 1. PERFILES METÁLICOS
    {
      id: 'perf-001',
      name: 'Sistemas de Perfilería Metálica', 
      category: 'perfiles',
      image: 'assets/productos/perfil.webp', 
      shortDescription: 'Fabricación propia de perfiles de alta resistencia para sistemas de construcción ligera. La base estructural perfecta para paneles de yeso.',
      features: [
        'Acero Galvanizado de alta calidad', 
        'Fabricación bajo estándares internacionales',
        'Soluciones completas para muros y plafones'
      ],
      inStock: true,
      subProducts: [
        {
          id: 'poste',
          name: 'Poste Metálico Perfirey',
          shortDescription: 'Diseñado para soportar el peso del panel de yeso y recibir cargas estructurales en muros divisorios.',
          image: 'assets/productos/poste.jpg', 
          variants: [
            { id: 'v1', name: '4.10 cm x 2.44 m', calibre: '26', sku: '546996' },
            { id: 'v2', name: '4.10 cm x 3.05 m', calibre: '26', sku: '850794' },
            { id: 'v3', name: '9.20 cm x 3.05 m', calibre: '20', sku: '536034' }
          ]
        },
        {
          id: 'canal-amarre',
          name: 'Canal de Amarre Perfirey',
          shortDescription: 'Complemento del poste metálico. Se utiliza para crear los bastidores horizontales (pecheras, cajillos) en muros y plafones.',
          image: 'assets/productos/canal-amarre.jpg', 
          variants: [
            { id: 'v1', name: 'Ancho: 4.20 cm', calibre: '26', sku: '321496' },
            { id: 'v2', name: 'Ancho: 6.60 cm', calibre: '26' },
            { id: 'v3', name: 'Ancho: 9.20 cm', calibre: '26' }
          ]
        },
        {
          id: 'esquinero',
          name: 'Esquinero Metálico Perfirey',
          shortDescription: 'Protege las esquinas de los muros de panel de yeso contra golpes y daños en áreas expuestas (puertas, ventanas).',
          image: 'assets/productos/esquinero.jpg',
          variants: [
            { id: 'v1', name: '2.51 cm x 3.05 m', calibre: '26', sku: '379374' },
            { id: 'v2', name: '4.00 cm x 3.05 m', calibre: '26' }
          ]
        },
        {
          id: 'canaleta',
          name: 'Canaleta de Carga Plata',
          shortDescription: 'Soporta el peso de materiales en plafones corridos y estructura principal.',
          image: 'assets/productos/canaleta.jpg',
          variants: [
            { id: 'v1', name: '4.00 cm x 3.05 m', calibre: '22' },
            { id: 'v2', name: '4.00 cm x 4.00 m', calibre: '22', sku: '173938' }
          ]
        }
      ]
    }, // <-- ¡AQUÍ ESTABA UNA COMA IMPORTANTE!

    // 2. PANELES DE YESO
    {
      id: 'pan-001',
      name: 'Sistemas de Paneles de Yeso',
      category: 'paneles',
      image: 'assets/productos/panel.webp',
      shortDescription: 'Sistemas con alto aislamiento térmico y acústico para fachadas, cubiertas y divisiones interiores en obra civil.',
      features: [
        'Aislamiento Térmico y Acústico', 
        'Opciones Resistentes a la Humedad (RH) y Fuego (RF)'
      ],
      inStock: true,
      subProducts: [
        {
          id: 'panel-estandar',
          name: 'Panel de Yeso Estándar',
          shortDescription: 'Ideal para muros divisorios y plafones en interiores secos.',
          image: 'assets/productos/panel.webp',
          variants: [
            { id: 'v1', name: '1.22 m x 2.44 m', calibre: '1/2 pulg' },
            { id: 'v2', name: '1.22 m x 2.44 m', calibre: '5/8 pulg (RF)' },
            { id: 'v3', name: '1.22 m x 3.05 m', calibre: '1/2 pulg' }
          ]
        }
      ]
    }, // <-- OTRA COMA AQUÍ

    // 3. COMPUESTOS
    {
      id: 'comp-001',
      name: 'Sistemas de Compuestos',
      category: 'compuestos',
      image: 'assets/productos/compuestos.webp',
      shortDescription: 'Sistemas completos de compuestos y pastas para el tratamiento de juntas, texturizados y acabados.',
      features: [
        'Basecoat Protekto Plus para exteriores', 
        'Ready Mix multiusos de secado óptimo'
      ],
      inStock: true,
      subProducts: [
        {
          id: 'pastas-cintas',
          name: 'Tratamiento de Juntas',
          shortDescription: 'Compuestos premezclados y en polvo para un acabado arquitectónico perfecto.',
          image: 'assets/productos/compuestos.webp',
          variants: [
            { id: 'v1', name: 'Ready Mix Estándar Plus', calibre: 'Cubeta 28 kg' },
            { id: 'v2', name: 'Basecoat Protekto Plus', calibre: 'Saco 22.7 kg' },
            { id: 'v3', name: 'Cinta de Papel Reforzada', calibre: 'Rollo 75 m' }
          ]
        }
      ]
    }
  ]; // <-- ¡ESTE CORCHETE Y PUNTO Y COMA ESTABAN PERDIDOS! Esto cierra el arreglo de productos.

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: string): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}