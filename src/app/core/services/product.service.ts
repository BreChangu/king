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
          name: 'Poste Metálico ',
          shortDescription: 'Diseñado para soportar el peso del panel de yeso y recibir cargas estructurales en muros divisorios.',
          image: 'assets/productos/poste-6.webp', 
          variants: [
            {
              id: 'v1', name: '4.10 cm x 2.44 m', calibre: '26', sku: '546996',
              image: ''
            },
            {
              id: 'v2', name: '4.10 cm x 3.05 m', calibre: '26', sku: '850794',
              image: ''
            },
            {
              id: 'v3', name: '9.20 cm x 3.05 m', calibre: '20', sku: '536034',
              image: ''
            }
          ]
        },
        {
          id: 'canal-amarre',
          name: 'Canal de Amarre Perfirey',
          shortDescription: 'Complemento del poste metálico. Se utiliza para crear los bastidores horizontales (pecheras, cajillos) en muros y plafones.',
          image: 'assets/productos/canal-amarre.webp', 
          variants: [
            {
              id: 'v1', name: 'Ancho: 4.20 cm', calibre: '26', sku: '321496',
              image: ''
            },
            {
              id: 'v2', name: 'Ancho: 6.60 cm', calibre: '26',
              image: ''
            },
            {
              id: 'v3', name: 'Ancho: 9.20 cm', calibre: '26',
              image: ''
            }
          ]
        },
        {
          id: 'esquinero',
          name: 'Esquinero Metálico Perfirey',
          shortDescription: 'Protege las esquinas de los muros de panel de yeso contra golpes y daños en áreas expuestas (puertas, ventanas).',
          image: 'assets/productos/esquinero-metalico.webp',
          variants: [
            {
              id: 'v1', name: '2.51 cm x 3.05 m', calibre: '26', sku: '379374',
              image: ''
            },
            {
              id: 'v2', name: '4.00 cm x 3.05 m', calibre: '26',
              image: ''
            }
          ]
        },
        {
          id: 'canaleta',
          name: 'Canaleta de Carga',
          shortDescription: 'Soporta el peso de materiales en plafones corridos y estructura principal.',
          image: 'assets/productos/canaleta-carga.webp',
          variants: [
            {
              id: 'v1', name: '4.00 cm x 3.05 m', calibre: '22',
              image: ''
            },
            {
              id: 'v2', name: '4.00 cm x 4.00 m', calibre: '22', sku: '173938',
              image: ''
            }
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
          name: 'Panel de Yeso Regular',
          shortDescription: 'Ideal para muros divisorios y plafones en interiores secos.',
          image: 'assets/productos/panel-regular.webp',
          variants: [
            {
              id: 'v1', name: '1.22 m x 2.44 m', calibre: '1/2 pulg',
              image: ''
            },
            {
              id: 'v2', name: '1.22 m x 2.44 m', calibre: '5/8 pulg (RF)',
              image: ''
            },
            {
              id: 'v3', name: '1.22 m x 3.05 m', calibre: '1/2 pulg',
              image: ''
            }
          ],
        },

         {
          id: 'panel-rh',
          name: 'Panel de Yeso Resistente a la Humedad',
          shortDescription: 'Ideal para áreas húmedas y plafones.',
          image: 'assets/productos/panel-verde.webp',
          variants: [
            {
              id: 'v1', name: '1.22 m x 2.44 m', calibre: '1/2 pulg',
              image: ''
            },
            {
              id: 'v2', name: '1.22 m x 2.44 m', calibre: '5/8 pulg (RF)',
              image: ''
            },
            {
              id: 'v3', name: '1.22 m x 3.05 m', calibre: '1/2 pulg',
              image: ''
            }
          ],
        },
        
         {
          id: 'panel-rf',
          name: 'Panel de Yeso Resistente al Fuego',
          shortDescription: 'Ideal para áreas húmedas y plafones.',
          image: 'assets/productos/panel-rojo.webp',
          variants: [
            {
              id: 'v1', name: '1.22 m x 2.44 m', calibre: '1/2 pulg',
              image: ''
            },
            {
              id: 'v2', name: '1.22 m x 2.44 m', calibre: '5/8 pulg (RF)',
              image: ''
            },
            {
              id: 'v3', name: '1.22 m x 3.05 m', calibre: '1/2 pulg',
              image: ''
            }
          ],
        },

        
         {
          id: 'panel-ligero',
          name: 'Panel de Yeso Ligero',
          shortDescription: 'Ideal para áreas secas y plafones.',
          image: 'assets/productos/panel-ligero.webp',
          variants: [
            {
              id: 'v1', name: '1.22 m x 2.44 m', calibre: '1/2 pulg',
              image: ''
            },
            {
              id: 'v2', name: '1.22 m x 2.44 m', calibre: '5/8 pulg (RF)',
              image: ''
            },
            {
              id: 'v3', name: '1.22 m x 3.05 m', calibre: '1/2 pulg',
              image: ''
            }
          ],
        },

        
         {
          id: 'panel-fibra',
          name: 'Panel de Yeso con Fibra de Vidrio',
          shortDescription: 'Ideal para exteriores.',
          image: 'assets/productos/panel-glass.webp',
          variants: [
            {
              id: 'v1', name: '1.22 m x 2.44 m', calibre: '1/2 pulg',
              image: ''
            },
            {
              id: 'v2', name: '1.22 m x 2.44 m', calibre: '5/8 pulg (RF)',
              image: ''
            },
            {
              id: 'v3', name: '1.22 m x 3.05 m', calibre: '1/2 pulg',
              image: ''
            }
          ],
        },

        
         {
          id: 'panel-w',
          name: 'Panel W',
          shortDescription: 'Ideal para áreas húmedas y plafones.',
          image: 'assets/productos/panel-w.webp',
          variants: [
            {
              id: 'v1', name: '1.22 m x 2.44 m', calibre: '1/2 pulg',
              image: ''
            },
            {
              id: 'v2', name: '1.22 m x 2.44 m', calibre: '5/8 pulg (RF)',
              image: ''
            },
            {
              id: 'v3', name: '1.22 m x 3.05 m', calibre: '1/2 pulg',
              image: ''
            }
          ],
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
  name: 'Ready-mix',
  shortDescription: 'Compuestos premezclados y en polvo para un acabado arquitectónico perfecto.',
  image: 'assets/productos/ready-mix-21.webp', // <--- Imagen por defecto / Categoría
  variants: [
    { 
      id: 'v1', 
      name: 'Ready Mix Estándar Plus', 
      calibre: 'Cubeta 28 kg',
      image: 'assets/productos/ready-mix-21.webp' // <--- Foto específica
    },
    { 
      id: 'v2', 
      name: 'Basecoat Protekto Plus', 
      calibre: 'Saco 22.7 kg',
      image: 'assets/productos/basecoat.webp' // <--- Foto específica
    },
    { 
      id: 'v3', 
      name: 'Cinta de Papel Reforzada', 
      calibre: 'Rollo 75 m',
      image: 'assets/productos/cinta-papel.webp' // <--- Foto específica
    }
  ]
},
        {
          id: 'readymix-ligero',
          name: 'Ready Mix Ligero',
          shortDescription: 'Compuesto superligero plus blanco de 5 kg Panel Rey, mezcla de yeso crudo diseñado para mejorar y facilitar la aplicación sobre los sustratos, provee una superficie más sencilla de lijar, apto para tratamiento de juntas y trabajos de acabado final..',
          image: 'assets/productos/compuestos.webp',
          variants: [
            {
              id: 'v1', name: 'Ready Mix Estándar Plus', calibre: 'Cubeta 28 kg',
              image: ''
            },
            {
              id: 'v2', name: 'Basecoat Protekto Plus', calibre: 'Saco 22.7 kg',
              image: ''
            },
            {
              id: 'v3', name: 'Cinta de Papel Reforzada', calibre: 'Rollo 75 m',
              image: ''
            }
          ]
        },
        {
          id: 'readymix-estandar',
          name: 'Ready Mix Estándar',
          shortDescription: ' Aplicación más fácil, práctica y con un excelente acabado de la superficie ',
          image: 'assets/productos/compuestos.webp',
          variants: [
            {
              id: 'v1', name: 'Ready Mix Estándar Plus', calibre: 'Cubeta 28 kg',
              image: ''
            },
            {
              id: 'v2', name: 'Basecoat Protekto Plus', calibre: 'Saco 22.7 kg',
              image: ''
            },
            {
              id: 'v3', name: 'Cinta de Papel Reforzada', calibre: 'Rollo 75 m',
              image: ''
            }
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