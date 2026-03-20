import { Injectable } from '@angular/core';
import { Product } from '../../shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    // ==========================================
    // 1. PERFILES METÁLICOS
    // ==========================================
    {
      id: 'perfiles-metalicos',
      name: 'Sistemas de Perfilería Metálica', 
      category: 'Perfiles',
      image: 'assets/productos/perfil.webp', 
      shortDescription: 'Fabricantes directos de perfiles de alta resistencia (calibres 20, 22, 26). Suministro e instalación para proyectos de construcción ligera. Cobertura en Área Metropolitana y envíos nacionales por volumen.',
      features: [
        'Acero galvanizado de alta calidad calibres 26, 22 y 20', 
        'Fabricación bajo estándares internacionales',
        'Soluciones completas para muros y plafones'
      ],
      inStock: true,
      subProducts: [
        {
          id: 'poste-metalico',
          name: 'Poste Metálico',
          shortDescription: 'Poste metálico de acero galvanizado diseñado para soportar el peso del panel de yeso. Suministro masivo para proyectos comerciales e industriales.',
          image: 'assets/productos/poste-6.webp', 
          variants: [
            { id: 'pos-410-26', name: '4.10 cm x 3.05 m', calibre: '26' },
            { id: 'pos-635-26', name: '6.35 cm x 3.05 m', calibre: '26' },
            { id: 'pos-920-26', name: '9.20 cm x 3.05 m', calibre: '26' },
            { id: 'pos-635-20', name: '6.35 cm x 3.05 m', calibre: '20 Estructural' },
            { id: 'pos-920-20', name: '9.20 cm x 3.05 m', calibre: '20 Estructural' },
            { id: 'pos-1524-20', name: '15.24 cm x 3.05 m', calibre: '20 Estructural' }
          ]
        },
        {
          id: 'canal-amarre',
          name: 'Canal de Amarre',
          shortDescription: 'Canal de amarre estructural de acero galvanizado para creación de bastidores. Cotiza suministro e instalación a gran escala.',
          image: 'assets/productos/canal-amarre.webp', 
          variants: [
            { id: 'can-410-26', name: 'Ancho: 4.10 cm', calibre: '26' },
            { id: 'can-635-26', name: 'Ancho: 6.35 cm', calibre: '26' },
            { id: 'can-920-26', name: 'Ancho: 9.20 cm', calibre: '26' },
            { id: 'can-635-22', name: 'Ancho: 6.35 cm', calibre: '22 Estructural' },
            { id: 'can-1524-22', name: 'Ancho: 15.24 cm', calibre: '22 Estructural' }
          ]
        },
        {
          id: 'canaleta-carga',
          name: 'Canaleta de Carga y Listón',
          shortDescription: 'Canaleta de carga y listón metálico para plafones corridos. Venta por mayoreo con envíos al interior de la república.',
          image: 'assets/productos/canaleta-carga.webp',
          variants: [
            { id: 'canc-34-24', name: 'Canaleta 3/4" x 3.05 m', calibre: '24' },
            { id: 'canc-112-24', name: 'Canaleta 1 1/2" x 3.05 m', calibre: '24' },
            { id: 'canc-112-22', name: 'Canaleta 1 1/2" x 3.05 m', calibre: '22 Estructural' },
            { id: 'canlist-635-26', name: 'Canal Listón 6.35 x 3.05 m', calibre: '26' }
          ]
        },
        {
          id: 'esquineros-angulos',
          name: 'Esquineros y Ángulos de Amarre',
          shortDescription: 'Esquineros metálicos y ángulos de amarre para remate perfecto en muros. Distribución nacional para desarrolladores.',
          image: 'assets/productos/esquinero-metalico.webp',
          variants: [
            { id: 'esq-met-244', name: 'Esquinero Metálico 2.44 m', calibre: '30' },
            { id: 'esq-met-305', name: 'Esquinero Metálico 3.05 m', calibre: '30' },
            { id: 'ang-am-26', name: 'Ángulo de Amarre 3.05 m', calibre: '26' }
          ]
        }
      ]
    },

    // ==========================================
    // 2. PANELES DE YESO Y TABLEROS
    // ==========================================
    {
      id: 'paneles',
      name: 'Sistemas de Paneles y Tableros',
      category: 'Paneles',
      image: 'assets/productos/panel.webp',
      shortDescription: 'Suministro e instalación de paneles de yeso (Tablaroca) y cemento (Durock, Permabase). Ejecución de obra en CDMX y distribución de material a todo México.',
      features: [
        'Aislamiento térmico y acústico', 
        'Opciones RH (Humedad) y RF (Fuego)',
        'Sustratos para exterior e interior'
      ],
      inStock: true,
      subProducts: [
        {
          id: 'panel-regular',
          name: 'Panel de Yeso Regular',
          shortDescription: 'Tablero de yeso estándar (Tablaroca / Panel Rey). Ideal para instalación de muros divisorios en corporativos y obra civil.',
          image: 'assets/productos/panel-regular.webp',
          variants: [
            { id: 'pr-12', name: 'Tablaroca USG / Panel Rey', calibre: '1.22 x 2.44m (1/2")' },
            { id: 'pr-12-ligero', name: 'Panel Ligero', calibre: '1.22 x 2.44m (1/2")' },
            { id: 'pr-58', name: 'Tablaroca USG', calibre: '1.22 x 2.44m (5/8")' }
          ]
        },
        {
          id: 'panel-especial',
          name: 'Panel de Yeso RH y RF',
          shortDescription: 'Paneles RH (Humedad) y RF (Fuego). Soluciones especializadas con instalación certificada para zonas de alto riesgo.',
          image: 'assets/productos/panel-verde.webp',
          variants: [
            { id: 'ph-12', name: 'Panel RH (Humedad)', calibre: '1.22 x 2.44m (1/2")' },
            { id: 'pf-12', name: 'Panel RF (Fuego)', calibre: '1.22 x 2.44m (1/2")' },
            { id: 'pf-58', name: 'Panel RF Firecode Tipo X', calibre: '1.22 x 2.44m (5/8")' }
          ]
        },
        {
          id: 'tablero-cemento',
          name: 'Tablacemento y Exterior',
          shortDescription: 'Placas de cemento (Durock, Permabase) para fachadas. Ofrecemos material por volumen y mano de obra especializada a nivel nacional.',
          image: 'assets/productos/permabase.webp',
          variants: [
            { id: 'tc-permabase', name: 'Permabase', calibre: '1.22 x 2.44m (1/2")' },
            { id: 'tc-durock', name: 'Durock USG', calibre: '1.22 x 2.44m (1/2")' },
            { id: 'tc-glassrey', name: 'Glass Rey', calibre: '1.22 x 2.44m (1/2")' },
            { id: 'tc-securock', name: 'Securock USG', calibre: '1.22 x 2.44m (1/2")' }
          ]
        },
        {
          id: 'maderas-construccion',
          name: 'Maderas y Especialidades',
          shortDescription: 'Láminas OSB y triplay para usos estructurales. Entregas consolidadas para constructoras y desarrolladores en la República Mexicana.',
          image: 'assets/productos/panel-amarillo.webp',
          variants: [
            { id: 'mad-osb', name: 'OSB', calibre: '16 mm' },
            { id: 'mad-triplay9', name: 'Triplay', calibre: '9 mm' },
            { id: 'mad-triplay12', name: 'Triplay Segunda', calibre: '1/2 pulg' },
            { id: 'ais-poli', name: 'Placa Poliestireno Reciclado', calibre: '1.22 x 2.44m (1")' }
          ]
        }
      ]
    },

    // ==========================================
    // 3. PLAFONES Y SUSPENSIÓN
    // ==========================================
    {
      id: 'plafones-suspension',
      name: 'Plafones y Suspensión',
      category: 'Plafones',
      image: 'assets/productos/panel-ligero.webp',
      shortDescription: 'Suministro e instalación de sistemas de plafones acústicos y decorativos. Ejecución de proyectos en corporativos e industria con cobertura nacional.',
      features: [
        'Suspensión metálica esmaltada',
        'Losetas acústicas de fibra mineral',
        'Fácil registro y mantenimiento'
      ],
      inStock: true,
      subProducts: [
        {
          id: 'plafones-reticulares',
          name: 'Plafones Acústicos',
          shortDescription: 'Losetas de fibra mineral y plafones de yeso para control de sonido. Expertos en instalación de techos reticulares de alto volumen.',
          image: 'assets/productos/panel-ligero.webp',
          variants: [
            { id: 'plaf-radar', name: 'Radar USG .61 x .61', calibre: 'Caja 16 Pzas' },
            { id: 'plaf-cortega', name: 'Cortega Armstrong .61 x .61', calibre: 'Caja 16 Pzas' },
            { id: 'plaf-fisured', name: 'Fisured L/S .61 x .61', calibre: 'Caja 16 Pzas' },
            { id: 'plaf-toledo', name: 'Toledo .61 x 1.22', calibre: 'Pieza' },
            { id: 'plaf-yeso', name: 'Yeso Vinil .61 x .61', calibre: 'Caja 10 Pzas' }
          ]
        },
        {
          id: 'suspension-donn',
          name: 'Suspensión Metálica',
          shortDescription: 'Suspensión metálica esmaltada para techos seguros. Ventas al por mayor con logística de envío a todo México.',
          image: 'assets/productos/perfil.webp',
          variants: [
            { id: 'susp-tprin', name: 'T Principal 3.66 m', calibre: 'GPM / DX' },
            { id: 'susp-tsec122', name: 'T Secundaria 1.22 m', calibre: 'GPM / DX' },
            { id: 'susp-tsec61', name: 'T Secundaria 0.61 m', calibre: 'GPM / DX' },
            { id: 'susp-ang', name: 'Ángulo Perimetral', calibre: 'Flat White' }
          ]
        }
      ]
    },

    // ==========================================
    // 4. COMPUESTOS Y PASTAS
    // ==========================================
    {
      id: 'compuestos-pastas',
      name: 'Compuestos y Pastas',
      category: 'Compuestos',
      image: 'assets/productos/compuestos.webp',
      shortDescription: 'Compuestos premezclados, basecoat y estucos. Indispensables para acabados perfectos. Disponibilidad para envíos masivos al interior de la república.',
      features: [
        'Readymix multiusos de secado rápido', 
        'Basecoat para cemento exterior',
        'Estucos y yesos de alta resistencia'
      ],
      inStock: true,
      subProducts: [
        {
          id: 'readymix',
          name: 'Compuesto Premezclado (Readymix)',
          shortDescription: 'Compuesto Readymix para acabados lisos en paneles de yeso. Surtimos tarimas completas para constructoras en todo el país.',
          image: 'assets/productos/ready-mix-21.webp',
          variants: [
            { id: 'rm-caja21', name: 'Caja Ready Mix Panel Rey', calibre: '21.8 kg' },
            { id: 'rm-caja25', name: 'Caja Ready Mix Estándar', calibre: '25 kg' },
            { id: 'rm-cubeta28', name: 'Cubeta Ready Mix', calibre: '28 kg' },
            { id: 'rm-caja28usg', name: 'Caja Redimix USG', calibre: '28 kg' },
            { id: 'rm-cubeta6', name: 'Cubeta Pequeña', calibre: '6 kg' }
          ]
        },
        {
          id: 'basecoat-estuco',
          name: 'Basecoat y Estucos',
          shortDescription: 'Basecoat de alta adherencia para fachadas de cemento. Precios de fábrica en compras por volumen.',
          image: 'assets/productos/basecoat.webp',
          variants: [
            { id: 'bc-usg20', name: 'Basecoat USG Bulto', calibre: '20 kg' },
            { id: 'bc-protekto', name: 'Protekto Plus Bulto', calibre: '22.7 kg' },
            { id: 'est-adhetec25', name: 'Estuco Fino Adhetec', calibre: '25 kg' },
            { id: 'est-exter40', name: 'Estuco / Exter Block', calibre: '40 kg' }
          ]
        },
        {
          id: 'cementos-yesos',
          name: 'Cementos y Yesos',
          shortDescription: 'Cementos y Yeso Supremo para resane general. Cotiza cargamentos completos con logística nacional.',
          image: 'assets/productos/compuestos.webp',
          variants: [
            { id: 'cy-supremo', name: 'Yeso Supremo Bulto', calibre: '40 kg' },
            { id: 'cy-pegayeso', name: 'Pegayeso', calibre: 'Galón' },
            { id: 'cy-cemblanco', name: 'Cemento Blanco', calibre: '25 kg' },
            { id: 'cy-cemgris', name: 'Cemento Gris Cruz Azul', calibre: '50 kg' }
          ]
        }
      ]
    },

    // ==========================================
    // 5. CINTAS Y AISLANTES
    // ==========================================
    {
      id: 'cintas-complementos',
      name: 'Cintas y Aislantes',
      category: 'Complementos',
      image: 'assets/productos/cinta-papel.webp',
      shortDescription: 'Cintas de refuerzo y aislamiento termoacústico (Lana de roca, Fibra de vidrio). Materiales complementarios para instalaciones profesionales en todo México.',
      features: [
        'Cintas de papel reforzado y malla',
        'Rebordes plásticos para curvas',
        'Aislamiento de fibra de vidrio'
      ],
      inStock: true,
      subProducts: [
        {
          id: 'cintas-juntas',
          name: 'Cintas para Juntas y Enmascarar',
          shortDescription: 'Cintas de papel y malla para tratamiento invisible de uniones. Venta a granel para proyectos de alta demanda.',
          image: 'assets/productos/cinta-papel.webp',
          variants: [
            { id: 'cin-papel75', name: 'Cinta de Papel Unimax / USG', calibre: 'Rollo 75 ml' },
            { id: 'cin-malla45', name: 'Cinta de Malla Fibra Vidrio', calibre: 'Rollo 45 m' },
            { id: 'cin-masking', name: 'Masking Azul 3/4', calibre: 'Pieza' },
            { id: 'cin-gris', name: 'Cinta Gris (Duct Tape)', calibre: 'Pieza' }
          ]
        },
        {
          id: 'aislamientos',
          name: 'Aislamiento Acústico/Térmico',
          shortDescription: 'Aislamiento de fibra de vidrio y lana de roca para muros acústicos. Entregas a pie de obra en área metropolitana y foráneas.',
          image: 'assets/productos/panel-amarillo.webp',
          variants: [
            { id: 'ais-r8', name: 'Rollo Aislhogar R-8', calibre: 'Rollo' },
            { id: 'ais-r11', name: 'Rollo Aislhogar R-11 (3 1/2")', calibre: 'Rollo' },
            { id: 'ais-roca', name: 'Lana de Roca (Aislamuro) 2"', calibre: '1.22 x 0.61m' },
            { id: 'ais-tyvek', name: 'Membrana Tyvek Dupond', calibre: 'Rollo' }
          ]
        },
        {
          id: 'esquineros-pvc',
          name: 'Esquineros y Rebordes PVC',
          shortDescription: 'Esquineros de PVC para protección contra impactos. Stock disponible para surtir desarrollos completos.',
          image: 'assets/productos/esquinero-metalico.webp',
          variants: [
            { id: 'pvc-esq', name: 'Esquinero de PVC 1 1/4"', calibre: '3.05 m' },
            { id: 'pvc-rebj', name: 'Reborde "J" (Plástico o Papel)', calibre: '3.05 m' },
            { id: 'pvc-rebl', name: 'Reborde "L" Plástico', calibre: '3.05 m' },
            { id: 'pvc-rebz', name: 'Reborde "Z" PVC 1/2"', calibre: '3.05 m' }
          ]
        }
      ]
    },

    // ==========================================
    // 6. TORNILLERÍA Y FIJACIÓN 
    // ==========================================
    {
      id: 'tornilleria-fijacion',
      name: 'Tornillería y Anclajes',
      category: 'Tornillería',
      image: 'assets/show/maquina.webp',
      shortDescription: 'Tornillería especializada para sistemas Tablaroca. Anclajes, tornillos Tek y Framer de máxima fijación. Envíos consolidados a toda la república.',
      features: [
        'Tornillos fosfatados anticorrosión',
        'Puntas Phillips especializadas',
        'Fulminantes para fijación directa'
      ],
      inStock: true,
      subProducts: [
        {
          id: 'tornillos-tablaroca',
          name: 'Tornillos para Tablaroca (Punta Fina)',
          shortDescription: 'Tornillos fosfatados punta fina para paneles de yeso. Precios de distribuidor por caja o tarima.',
          image: 'assets/show/maquina.webp',
          variants: [
            { id: 'tor-6x1-ciento', name: '6 x 1" (Por Ciento)', calibre: '100 pzas' },
            { id: 'tor-6x1-caja', name: '6 x 1" (Caja Cerrada)', calibre: 'Caja' },
            { id: 'tor-6x118-ciento', name: '6 x 1 1/8" (Por Ciento)', calibre: '100 pzas' },
            { id: 'tor-6x118-caja', name: '6 x 1 1/8" (Caja Cerrada)', calibre: 'Caja' },
            { id: 'tor-6x158-ciento', name: '6 x 1 5/8" (Por Ciento)', calibre: '100 pzas' },
            { id: 'tor-6x158-caja', name: '6 x 1 5/8" (Caja Cerrada)', calibre: 'Caja' },
            { id: 'tor-6x2-ciento', name: '6 x 2" (Por Ciento)', calibre: '100 pzas' }
          ]
        },
        {
          id: 'tornillos-tek',
          name: 'Tornillos Tek (Punta Broca)',
          shortDescription: 'Tornillos Tek y Framer para estructuras metálicas. Distribución masiva para proyectos de gran escala.',
          image: 'assets/show/maquina.webp',
          variants: [
            { id: 'tek-8x12', name: '8 x 1/2" Framer (Por Ciento)', calibre: '100 pzas' },
            { id: 'tek-8x1', name: '8 x 1" (Por Ciento)', calibre: '100 pzas' },
            { id: 'tek-8x114', name: '8 x 1 1/4" Permabase (Ciento)', calibre: '100 pzas' }
          ]
        },
        {
          id: 'fijacion-concreto',
          name: 'Taquetes, Clavos y Fulminantes',
          shortDescription: 'Sistemas de anclaje a concreto para seguridad estructural. Cotiza tu inventario con envíos a nivel nacional.',
          image: 'assets/show/maquina.webp',
          variants: [
            { id: 'fij-clavo-ciento', name: 'Clavo Concreto 1" con Rondana', calibre: '100 pzas' },
            { id: 'fij-clavo-caja', name: 'Clavo Concreto 1" con Rondana', calibre: 'Caja' },
            { id: 'fij-taq-nylon', name: 'Taquete Cola de Cochino Nylon', calibre: 'Pieza' },
            { id: 'fij-taq-plastico', name: 'Taquete Plástico Rojo', calibre: '100 pzas' },
            { id: 'fij-fulm-rojo', name: 'Fulminante Cal 27 (Tira Roja)', calibre: '100 pzas' },
            { id: 'fij-fulm-amarillo', name: 'Fulminante Cal 27 (Amarillo)', calibre: 'Pieza' }
          ]
        }
      ]
    },

    // ==========================================
    // 7. HERRAMIENTAS
    // ==========================================
    {
      id: 'herramientas',
      name: 'Herramientas de Instalación',
      category: 'Herramientas',
      image: 'assets/show/maquina.webp',
      shortDescription: 'Herramientas profesionales para contratistas e instaladores de Tablaroca. Surtimos equipo de uso rudo a todo el país.',
      features: [
        'Espátulas aceradas',
        'Herramientas manuales de impacto',
        'Consumibles de pintura'
      ],
      inStock: true,
      subProducts: [
        {
          id: 'espatulas',
          name: 'Espátulas y Charolas',
          shortDescription: 'Espátulas de acero inoxidable para acabados de alta calidad. Suministro constante para cuadrillas grandes.',
          image: 'assets/show/maquina.webp',
          variants: [
            { id: 'esp-4', name: 'Espátula de 4"', calibre: 'Pieza' },
            { id: 'esp-6', name: 'Espátula de 6"', calibre: 'Pieza' },
            { id: 'esp-8', name: 'Espátula de 8"', calibre: 'Pieza' },
            { id: 'esp-10', name: 'Espátula de 10"', calibre: 'Pieza' },
            { id: 'esp-12', name: 'Espátula de 12"', calibre: 'Pieza' },
            { id: 'charola-12', name: 'Charola de 12"', calibre: 'Pieza' }
          ]
        },
        {
          id: 'corte-medicion',
          name: 'Corte, Medición y Puntas',
          shortDescription: 'Cutter industrial y herramientas de medición de alta precisión. Venta al por mayor para desarrollos en construcción.',
          image: 'assets/show/maquina.webp',
          variants: [
            { id: 'her-cutter', name: 'Cutter Industrial 18cm', calibre: 'Pieza' },
            { id: 'her-repcutter', name: 'Repuesto Cuchillas Cutter', calibre: 'Estuche 10 pzas' },
            { id: 'her-cinta', name: 'Cinta Métrica 5m', calibre: 'Pieza' },
            { id: 'her-ph2tope', name: 'Punta Phillips PH2 con Tope', calibre: '1" y 2"' }
          ]
        },
        {
          id: 'pintura-acabados',
          name: 'Pintura y Lijado',
          shortDescription: 'Consumibles de pintura y lijas para preparación final de muros. Manejo de volúmenes industriales con entrega a pie de obra.',
          image: 'assets/show/maquina.webp',
          variants: [
            { id: 'pin-rodillo', name: 'Rodillo Medio Completo', calibre: 'Pieza' },
            { id: 'pin-brocha2', name: 'Brocha de 2"', calibre: 'Pieza' },
            { id: 'pin-lija', name: 'Lijas de Agua/Esmeril (80, 120, 220)', calibre: 'Pieza' },
            { id: 'pin-pintura', name: 'Pintura Acrílica Blanca', calibre: '19 Litros' }
          ]
        }
      ]
    }
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: string): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}