import { Injectable } from '@angular/core';
import { Product } from '../../shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // ==========================================
  // 🌟 1. FAMILIAS PARA EL CATÁLOGO (Paneles va primero)
  // ==========================================
  private familiasCatalogo = [
    {
      id: 'paneles',
      name: 'Tablaroca, Panel Rey y Durock',
      description: 'Paneles de yeso para exterior, interior, Permabase y maderas.',
      image: 'assets/productos/panel.webp',
    },
    {
      id: 'perfiles-metalicos',
      name: 'Perfiles para Tablaroca (Postes y Canales)',
      description: 'Postes metálicos, canales de amarre, canaletas y estructurales.',
      image: 'assets/productos/perfil.webp',
    },
    {
      id: 'plafones-suspension',
      name: 'Plafones Acústicos y Suspensión',
      description: 'Plafones reticulares, suspensión Donn/GPM y ángulos perimetrales.',
      image: 'assets/productos/panel-ligero.webp',
    },
    {
      id: 'compuestos-pastas',
      name: 'Readymix, Basecoat y Pastas',
      description: 'Pasta Readymix, Redimix USG, Basecoat para Durock y estucos.',
      image: 'assets/productos/compuestos.webp',
    },
    {
      id: 'cintas-complementos',
      name: 'Cintas para Tablaroca y Esquineros',
      description: 'Cinta de malla, cinta de papel USG, esquineros Perfatrim y PVC.',
      image: 'assets/productos/cinta-papel.webp',
    },
    {
      id: 'aislamientos',
      name: 'Colchonetas Aislhogar y Tyvek',
      description: 'Fibra de vidrio Aislhogar, lana mineral y placas de poliestireno.',
      image: 'assets/productos/panel-amarillo.webp',
    },
    {
      id: 'tornilleria-fijacion',
      name: 'Tornillos Tek y Taquetes',
      description: 'Tornillo Framer, tornillos para tablaroca, taquetes y fulminantes.',
      image: 'assets/show/maquina.webp',
    },
    {
      id: 'herramientas',
      name: 'Espátulas y Herramientas',
      description: 'Espátulas para Readymix, charolas, lijas y navajas.',
      image: 'assets/show/maquina.webp',
    },
  ];

  // ==========================================
  // 🌟 2. PRODUCTOS DETALLADOS (Paneles en Posición 0)
  // ==========================================
  private products: Product[] = [
    // --- 1. PANELES DE YESO Y TABLEROS (NUEVO REY DEL ARREGLO) ---
    {
      id: 'paneles',
      name: 'Tablaroca, Panel Rey y Tablacemento',
      category: 'Paneles',
      image: 'assets/productos/panel.webp',
      shortDescription:
        'Todo tipo de hojas: Tablaroca USG, Panel Rey, paneles verdes antihumedad para baño y Durock/Permabase para exterior.',
      features: ['Aislamiento térmico', 'Resistencia a fuego y humedad', 'Maderas para obra'],
      inStock: true,
      seoTitle: 'Precio de Tablaroca | Venta de Panel de Yeso, Panel Rey y Durock',
      seoDescription:
        'Cotiza hoja de tablaroca precio mayoreo. Proveedores de tablaroca, panel de yeso estandar, panel rey, placa de yeso, tablaroca para baño y tablaroca exterior.',
      seoKeywords:
        'Tablaroca,venta de tablaroca, panel de yeso, Venta de panel de yeso, tabla roca, precio de tablaroca, tabla de yeso, tabla de roca, tabalroca precio, tablaroca panel rey precio, tablaroca panel rey, Tablaroca mdedias, tabla roca para interior, panel de yeso estandar, panel de yeso ligth rey, panel de yeso panel rey, panel rey precios, proveedores de tablaroca, placa de yeso, venta tablaroca, hoja de tablaroca precio,, hoja de tablaroca, tablaroca exterior, Panel de yeso precio,Panel de yeso regular, Panel de yeso, tablaroca para baño, durock precio por hoja',
      subProducts: [
        {
          id: 'panel-regular',
          name: 'Tablaroca USG y Panel Rey Regular',
          shortDescription:
            'Hojas de panel de yeso estándar (1/2" y 5/8") y Firecode (Contra fuego).',
          image: 'assets/productos/usg-tablaroca.webp',
          variants: [
            {
              id: 'var-pr-12',
              name: 'Medida estándar: 1.22 x 2.44m (1/2")',
              empaqueSeleccionado: null,
              empaques: [
                {
                  idProducto: 'pr-usg',
                  nombre: 'Tablaroca USG',
                  cantidad: 'Hoja',
                  image: 'assets/productos/usg-tablaroca.webp',
                },
                {
                  idProducto: 'pr-prey',
                  nombre: 'Panel Rey',
                  cantidad: 'Hoja',
                  image: 'assets/productos/panel-regular.webp',
                },
                {
                  idProducto: 'pr-ligero',
                  nombre: 'Panel Ligero',
                  cantidad: 'Hoja',
                  image: 'assets/productos/panel-ligero.webp',
                },
              ],
            },
            {
              id: 'var-pr-58',
              name: 'Grosor: 5/8" y Especiales',
              empaqueSeleccionado: null,
              empaques: [
                { idProducto: 'pr-58', nombre: 'Tablaroca 5/8"', cantidad: 'Hoja' },
                { idProducto: 'pr-fire', nombre: 'Firecode Tipo X', cantidad: 'Hoja' },
              ],
            },
          ],
        },
        {
          id: 'panel-humedad',
          name: 'Tablaroca Verde (Antihumedad para Baños)',
          shortDescription: 'Panel verde RH (Resistente a la Humedad) Panel Rey y Anti Moho USG.',
          image: 'assets/productos/panel-verde.webp',
          variants: [
            {
              id: 'var-ph',
              name: 'Panel RH Verde (1.22 x 2.44m)',
              empaqueSeleccionado: null,
              empaques: [
                {
                  idProducto: 'ph-rey',
                  nombre: 'RH Panel Rey (12.7mm)',
                  cantidad: 'Hoja',
                  image: 'assets/productos/panel-verde.webp',
                },
                {
                  idProducto: 'ph-usg',
                  nombre: 'Anti Moho USG (13mm)',
                  cantidad: 'Hoja',
                  image: 'assets/productos/usg-tablaroca-anti-moho.webp',
                },
              ],
            },
          ],
        },
        {
          id: 'tablero-cemento',
          name: 'Durock y Permabase (Tablacemento Exterior)',
          shortDescription:
            'Placas de cemento altamente resistentes para fachadas y muros exteriores.',
          image: 'assets/productos/permabase.webp',
          variants: [
            {
              id: 'var-tc',
              name: 'Hoja de Cemento (1.22 x 2.44m)',
              empaqueSeleccionado: null,
              empaques: [
                {
                  idProducto: 'tc-permabase',
                  nombre: 'Permabase (1/2")',
                  cantidad: 'Hoja',
                  image: 'assets/productos/permabase.webp',
                },
                {
                  idProducto: 'tc-durock',
                  nombre: 'Durock USG (1/2")',
                  cantidad: 'Hoja',
                  image: 'assets/productos/usg-durock.webp',
                },
                {
                  idProducto: 'tc-glassrey',
                  nombre: 'Glass Rey Exterior (1/2")',
                  cantidad: 'Hoja',
                  image: 'assets/productos/panel-glass.webp',
                },
                { idProducto: 'tc-securock', name: 'Securock Glass Mat', cantidad: 'Hoja' },
              ],
            },
          ],
        },
        {
          id: 'maderas-construccion',
          name: 'Hojas de Triplay, OSB y MDF',
          shortDescription: 'Maderas estructurales para cimbra y recubrimientos.',
          image: 'assets/productos/panel-amarillo.webp',
          variants: [
            {
              id: 'var-maderas',
              name: 'Hojas Estructurales',
              empaqueSeleccionado: null,
              empaques: [
                { idProducto: 'mad-osb', nombre: 'OSB 16mm', cantidad: 'Hoja' },
                { idProducto: 'mad-triplay9', nombre: 'Triplay 9mm', cantidad: 'Hoja' },
                { idProducto: 'mad-triplay12', nombre: 'Triplay 1/2" Segunda', cantidad: 'Hoja' },
                { idProducto: 'mad-mdf', nombre: 'MDF 9mm', cantidad: 'Hoja' },
              ],
            },
          ],
        },
      ],
    },

    // --- 2. PERFILES METÁLICOS ---
    {
      id: 'perfiles-metalicos',
      name: 'Perfiles Galvanizados para Tablaroca',
      category: 'Perfiles',
      image: 'assets/productos/perfil.webp',
      shortDescription:
        'Postes y canales de amarre de acero galvanizado para muros de Tablaroca y Panel Rey. Calibres 20, 22, 24 y 26.',
      features: [
        'Acero galvanizado de alta calidad',
        'Fabricación bajo estándares',
        'Calibres 20, 22, 24 y 26',
      ],
      inStock: true,
      seoTitle: 'Perfiles Metálicos para Tablaroca | Postes y Canales Calibre 26',
      seoDescription:
        'Venta de perfiles metálicos galvanizados. Poste metálico y canal de amarre para instalar Tablaroca. Cotiza material tablaroca con precios de mayoreo.',
      seoKeywords:
        'perfiles para tablaroca, poste metalico, canal de amarre, precio perfiles tablaroca, acero galvanizado, canaleta de carga, material tablaroca, instalacion de tablaroca',
      subProducts: [
        {
          id: 'poste-metalico',
          name: 'Poste Metálico para Tablaroca',
          shortDescription: 'Poste estructural y divisorio. Base fundamental del bastidor.',
          image: 'assets/productos/poste-6.webp',
          variants: [
            {
              id: 'var-pos-410',
              name: 'Medida: 4.10 cm x 3.05 m',
              empaqueSeleccionado: null,
              empaques: [
                {
                  idProducto: 'pos-410-26',
                  nombre: 'Calibre 26',
                  cantidad: 'Pieza',
                  image: 'assets/productos/poste-6.webp',
                },
                {
                  idProducto: 'pos-410-20',
                  nombre: 'Calibre 20 (Estructural)',
                  cantidad: 'Pieza',
                  image: 'assets/productos/poste-6.webp',
                },
              ],
            },
            {
              id: 'var-pos-635',
              name: 'Medida: 6.35 cm x 3.05 m',
              empaqueSeleccionado: null,
              empaques: [
                { idProducto: 'pos-635-26', nombre: 'Calibre 26', cantidad: 'Pieza' },
                { idProducto: 'pos-635-20', nombre: 'Calibre 20 (Estructural)', cantidad: 'Pieza' },
              ],
            },
            {
              id: 'var-pos-920',
              name: 'Medida: 9.20 cm x 3.05 m',
              empaqueSeleccionado: null,
              empaques: [
                { idProducto: 'pos-920-26', nombre: 'Calibre 26', cantidad: 'Pieza' },
                { idProducto: 'pos-920-20', nombre: 'Calibre 20 (Estructural)', cantidad: 'Pieza' },
              ],
            },
            {
              id: 'var-pos-1524',
              name: 'Medida: 15.24 cm x 3.05 m',
              empaqueSeleccionado: null,
              empaques: [
                { idProducto: 'pos-1524-26', nombre: 'Calibre 26', cantidad: 'Pieza' },
                {
                  idProducto: 'pos-1524-20',
                  nombre: 'Calibre 20 (Estructural)',
                  cantidad: 'Pieza',
                },
              ],
            },
          ],
        },
        {
          id: 'canal-amarre',
          name: 'Canal de Amarre Galvanizado',
          shortDescription: 'Canal de amarre superior e inferior para bastidores de panel de yeso.',
          image: 'assets/productos/canal-amarre.webp',
          variants: [
            {
              id: 'var-can-410',
              name: 'Ancho: 4.10 cm x 3.05 m',
              empaqueSeleccionado: null,
              empaques: [
                { idProducto: 'can-410-26', nombre: 'Calibre 26', cantidad: 'Pieza' },
                { idProducto: 'can-410-22', nombre: 'Calibre 22 (Estructural)', cantidad: 'Pieza' },
              ],
            },
            {
              id: 'var-can-635',
              name: 'Ancho: 6.35 cm x 3.05 m',
              empaqueSeleccionado: null,
              empaques: [
                { idProducto: 'can-635-26', nombre: 'Calibre 26', cantidad: 'Pieza' },
                { idProducto: 'can-635-22', nombre: 'Calibre 22 (Estructural)', cantidad: 'Pieza' },
              ],
            },
            {
              id: 'var-can-920',
              name: 'Ancho: 9.20 cm x 3.05 m',
              empaqueSeleccionado: null,
              empaques: [
                { idProducto: 'can-920-26', nombre: 'Calibre 26', cantidad: 'Pieza' },
                { idProducto: 'can-920-22', nombre: 'Calibre 22 (Estructural)', cantidad: 'Pieza' },
              ],
            },
            {
              id: 'var-can-1524',
              name: 'Ancho: 15.24 cm x 3.05 m',
              empaqueSeleccionado: null,
              empaques: [
                {
                  idProducto: 'can-1524-22',
                  nombre: 'Calibre 22 (Estructural)',
                  cantidad: 'Pieza',
                },
              ],
            },
          ],
        },
        {
          id: 'canaleta-carga',
          name: 'Canaleta de Carga y Canal Listón',
          shortDescription: 'Perfilería estructural para armado de plafones falsos.',
          image: 'assets/productos/canaleta-carga.webp',
          variants: [
            {
              id: 'var-canc-34',
              name: 'Canaleta 3/4" x 3.05 m',
              empaqueSeleccionado: null,
              empaques: [{ idProducto: 'canc-34-24', nombre: 'Calibre 24', cantidad: 'Pieza' }],
            },
            {
              id: 'var-canc-112',
              name: 'Canaleta 1 1/2" x 3.05 m',
              empaqueSeleccionado: null,
              empaques: [
                { idProducto: 'canc-112-24', nombre: 'Calibre 24', cantidad: 'Pieza' },
                {
                  idProducto: 'canc-112-22',
                  nombre: 'Calibre 22 (Estructural)',
                  cantidad: 'Pieza',
                },
              ],
            },
            {
              id: 'var-canlist-635',
              name: 'Canal Listón 6.35 x 3.05 m',
              empaqueSeleccionado: null,
              empaques: [{ idProducto: 'canlist-635-26', nombre: 'Calibre 26', cantidad: 'Pieza' }],
            },
          ],
        },
        {
          id: 'angulos-metalicos',
          name: 'Esquinero Metálico y Ángulo de Amarre',
          shortDescription: 'Remates y protección de esquinas para muros de panel.',
          image: 'assets/productos/esquinero-metalico.webp',
          variants: [
            {
              id: 'var-esq-met',
              name: 'Esquinero Metálico',
              empaqueSeleccionado: null,
              empaques: [
                { idProducto: 'esq-met-244', nombre: 'Largo: 2.44 m', cantidad: 'Cal 30' },
                { idProducto: 'esq-met-305', nombre: 'Largo: 3.05 m', cantidad: 'Cal 30' },
              ],
            },
            {
              id: 'var-ang-am',
              name: 'Ángulo de Amarre',
              empaqueSeleccionado: null,
              empaques: [
                { idProducto: 'ang-am-26', nombre: '3.05 m (Calibre 26)', cantidad: 'Pieza' },
              ],
            },
          ],
        },
      ],
    },

    // --- 3. PLAFONES Y SUSPENSIÓN ---
    {
      id: 'plafones-suspension',
      name: 'Plafón Reticular y Suspensión Acústica',
      category: 'Plafones',
      image: 'assets/productos/panel-ligero.webp',
      shortDescription:
        'Plafones acústicos Radar y Cortega. Suspensión Donn y GPM para techos falsos.',
      features: ['Variedad de texturas', 'Suspensión GPM y Donn', 'Fácil mantenimiento'],
      inStock: true,
      seoTitle: 'Plafones de Tablaroca y Acústicos | Suspensión Donn y GPM',
      seoDescription:
        'Venta de plafón reticular. Losetas acústicas Radar USG y Cortega. Perfilería de suspensión Donn y GPM para plafones de tablaroca y techos falsos.',
      seoKeywords:
        'plafon acustico, plafon reticular, plafones de tablaroca, suspension donn, loseta radar usg, techo falso tablaroca, suspension gpm, instalacion de tablaroca',
      subProducts: [
        {
          id: 'plafones-reticulares',
          name: 'Loseta Acústica Radar USG y Cortega',
          shortDescription:
            'Losetas de fibra mineral y yeso vinil para falsos plafones reticulares.',
          image: 'assets/productos/panel-ligero.webp',
          variants: [
            {
              id: 'var-plaf-61',
              name: 'Medida: .61 x .61 m',
              empaqueSeleccionado: null,
              empaques: [
                { idProducto: 'plaf-radar', nombre: 'Radar USG', cantidad: 'Caja 16 Pzas' },
                {
                  idProducto: 'plaf-cortega',
                  nombre: 'Cortega Armstrong',
                  cantidad: 'Caja 16 Pzas',
                },
                { idProducto: 'plaf-fisured', nombre: 'Fisured L/S', cantidad: 'Caja 16 Pzas' },
                { idProducto: 'plaf-yeso', nombre: 'Yeso Vinil', cantidad: 'Caja 10 Pzas' },
                { idProducto: 'plaf-gpm', name: 'GPM Lana Mineral', cantidad: 'Caja 10 Pzas' },
              ],
            },
            {
              id: 'var-plaf-122',
              name: 'Medida: .61 x 1.22 m',
              empaqueSeleccionado: null,
              empaques: [
                { idProducto: 'plaf-toledo', nombre: 'Toledo', cantidad: 'Pieza' },
                { idProducto: 'plaf-polar', nombre: 'Polar USG', cantidad: 'Pieza' },
              ],
            },
          ],
        },
        {
          id: 'suspension-metalica',
          name: 'Suspensión Donn USG y GPM',
          shortDescription: 'Tee principal, Tees secundarias y ángulos para armar plafones.',
          image: 'assets/productos/perfil.webp',
          variants: [
            {
              id: 'var-susp-gpm',
              name: 'Línea Suspensión (GPM / Donn)',
              empaqueSeleccionado: null,
              empaques: [
                { idProducto: 'susp-tprin', nombre: 'T Principal 3.66m', cantidad: 'Pieza' },
                { idProducto: 'susp-tsec122', nombre: 'T Secundaria 1.22m', cantidad: 'Pieza' },
                { idProducto: 'susp-tsec61', nombre: 'T Secundaria 0.61m', cantidad: 'Pieza' },
                { idProducto: 'susp-ang', nombre: 'Ángulo Perimetral', cantidad: 'Pieza' },
              ],
            },
          ],
        },
      ],
    },

    // --- 4. COMPUESTOS Y PASTAS ---
    {
      id: 'compuestos-pastas',
      name: 'Pasta Readymix, Basecoat y Redimix USG',
      category: 'Compuestos',
      image: 'assets/productos/compuestos.webp',
      shortDescription:
        'Cubetas y cajas de compuesto para tratamiento de juntas de Tablaroca, Basecoat para Durock y yeso.',
      features: ['Sistemas de tratamiento de juntas', 'Adhesivos y Yesos', 'Materiales a granel'],
      inStock: true,
      seoTitle: 'Pasta Readymix Panel Rey y Basecoat | Precio Mayoreo',
      seoDescription:
        'Pasta para tablaroca Readymix y Redimix USG. Venta de Basecoat para Durock y Permabase. Estuco y Yeso Supremo para instalacion de tablaroca.',
      seoKeywords:
        'readymix panel rey, redimix usg, pasta para tablaroca, basecoat durock precio, basecoat permabase, tratamiento de juntas',
      subProducts: [
        {
          id: 'readymix',
          name: 'Pasta Readymix y Redimix USG',
          shortDescription:
            'Compuesto premezclado estándar para encintado y acabado de juntas de Tablaroca.',
          image: 'assets/productos/ready-mix-21.webp',
          variants: [
            {
              id: 'var-rm-caja',
              name: 'Presentación en Caja',
              empaqueSeleccionado: null,
              empaques: [
                {
                  idProducto: 'rm-caja21',
                  nombre: 'Readymix Panel Rey',
                  cantidad: '21.8 kg',
                  image: 'assets/productos/ready-mix-21.webp',
                },
                { idProducto: 'rm-caja25', nombre: 'Estándar', cantidad: '25 kg' },
                {
                  idProducto: 'rm-caja28usg',
                  nombre: 'Redimix USG',
                  cantidad: '28 kg',
                  image: 'assets/productos/ready-mix-28.webp',
                },
              ],
            },
            {
              id: 'var-rm-cubeta',
              name: 'Presentación en Cubeta',
              empaqueSeleccionado: null,
              empaques: [
                {
                  idProducto: 'rm-cubeta6',
                  nombre: 'Cubeta Pequeña',
                  cantidad: '6 kg',
                  image: 'assets/productos/ready-mix-6.webp',
                },
                {
                  idProducto: 'rm-cubeta28',
                  nombre: 'Cubeta Grande Redimix',
                  cantidad: '28 kg',
                  image: 'assets/productos/ready-mix-28.wep',
                },
                { idProducto: 'rm-granel', nombre: 'A Granel', cantidad: '1 kg' },
              ],
            },
          ],
        },
        {
          id: 'basecoat-estuco',
          name: 'Basecoat para Durock y Permabase',
          shortDescription: 'Mortero Basecoat para tratamiento de juntas en placas de exterior.',
          image: 'assets/productos/basecoat.webp',
          variants: [
            {
              id: 'var-bc',
              name: 'Sacos de Basecoat',
              empaqueSeleccionado: null,
              empaques: [
                { idProducto: 'bc-usg20', nombre: 'Basecoat USG (Para Durock)', cantidad: '20 kg' },
                {
                  idProducto: 'bc-protekto',
                  nombre: 'Protekto Plus (Para Permabase)',
                  cantidad: '22.7 kg',
                },
              ],
            },
            {
              id: 'var-est',
              name: 'Estucos y Recubrimientos',
              empaqueSeleccionado: null,
              empaques: [
                { idProducto: 'est-adhetec25', nombre: 'Estuco Fino Adhetec', cantidad: '25 kg' },
                { idProducto: 'est-exter40', nombre: 'Estuco Exter Block', cantidad: '40 kg' },
                { idProducto: 'past-royal', nombre: 'Pasta Royal / MS-Block', cantidad: '25 kg' },
              ],
            },
          ],
        },
        {
          id: 'cementos-yesos',
          name: 'Yeso Supremo, Cemento y Pegazulejo',
          shortDescription: 'Polvos básicos para albañilería, nivelación y adherencia.',
          image: 'assets/productos/compuestos.webp',
          variants: [
            {
              id: 'var-yeso',
              name: 'Yeso de Construcción',
              empaqueSeleccionado: null,
              empaques: [
                { idProducto: 'kilo-de-yeso-penitas', nombre: 'Por Kilo', cantidad: '1 kg' },
                { idProducto: 'cy-supremo', nombre: 'Bulto Yeso Supremo', cantidad: '40 kg' },
              ],
            },
            {
              id: 'var-cem',
              name: 'Cemento',
              empaqueSeleccionado: null,
              empaques: [
                { idProducto: 'cy-cemblanco', nombre: 'Cemento Blanco', cantidad: '25 kg' },
                { idProducto: 'cy-cemgris', nombre: 'Cemento Gris', cantidad: '50 kg' },
              ],
            },
            {
              id: 'var-pega',
              name: 'Adhesivos',
              empaqueSeleccionado: null,
              empaques: [
                { idProducto: 'cy-pegayeso', nombre: 'Pegayeso', cantidad: 'Galón' },
                { idProducto: 'cy-pegazulejo', nombre: 'Pegazulejo', cantidad: '20 kg' },
              ],
            },
          ],
        },
      ],
    },

    // --- 5. CINTAS Y COMPLEMENTOS ---
    {
      id: 'cintas-complementos',
      name: 'Cinta de Malla y Esquineros Perfatrim',
      category: 'Complementos',
      image: 'assets/productos/cinta-papel.webp',
      shortDescription:
        'Cintas de malla de fibra de vidrio, cinta de papel USG y esquineros metálicos/PVC.',
      features: ['Esquineros PVC y Metal', 'Cintas de Fibra de Vidrio', 'Selladores y espumas'],
      inStock: true,
      seoTitle: 'Cinta de Malla para Tablaroca y Esquineros | Accesorios',
      seoDescription:
        'Cinta de malla de fibra de vidrio, cinta de papel USG para juntas de Tablaroca, esquineros metálicos Perfatrim y PVC. Reborde J para instalacion de tablaroca.',
      seoKeywords:
        'cinta para tablaroca, cinta de malla fibra de vidrio, cinta de papel usg, esquinero plastico pvc, reborde j, esquinero perfatrim, instalacion de tablaroca',
      subProducts: [
        {
          id: 'cintas-juntas',
          name: 'Cinta de Malla y Cinta de Papel USG',
          shortDescription: 'Cintas esenciales para ocultar las juntas de los paneles de yeso.',
          image: 'assets/productos/cinta-papel.webp',
          variants: [
            {
              id: 'var-cin-malla',
              name: 'Cinta de Malla (Fibra de Vidrio)',
              empaqueSeleccionado: null,
              empaques: [
                {
                  idProducto: 'cinta-de-malla-de-fibra-de-vidrio-de-10-cm-x-23-mts',
                  nombre: 'Rollo Chico',
                  cantidad: '23 mts',
                },
                { idProducto: 'cin-malla45', nombre: 'Rollo Grande', cantidad: '45 mts' },
              ],
            },
            {
              id: 'var-cin-papel',
              name: 'Cinta de Papel y Masking',
              empaqueSeleccionado: null,
              empaques: [
                {
                  idProducto: 'cin-papel75',
                  nombre: 'Cinta de Papel USG',
                  cantidad: 'Rollo 75 ml',
                },
                { idProducto: 'cin-masking', nombre: 'Masking Azul 3/4"', cantidad: 'Pieza' },
                { idProducto: 'cin-gris', nombre: 'Cinta Gris (Duct Tape)', cantidad: 'Pieza' },
              ],
            },
          ],
        },
        {
          id: 'esquineros-rollos',
          name: 'Esquineros PVC y Perfatrim (Metálico)',
          shortDescription: 'Guardacantos y protección de esquinas vivas.',
          image: 'assets/productos/esquinero-metalico.webp',
          variants: [
            {
              id: 'var-esq-rollo',
              name: 'Protección Perimetral',
              empaqueSeleccionado: null,
              empaques: [
                { idProducto: 'esq-rollo', nombre: 'Rollo Metálico Perfatrim', cantidad: '30 mts' },
                { idProducto: 'pvc-esq', nombre: 'Esquinero PVC 1 1/4"', cantidad: '3.05 m' },
                { idProducto: 'reb-j', nombre: 'Reborde "J"', cantidad: '3.05 m' },
                { idProducto: 'reb-lz', nombre: 'Reborde "Z" PVC', cantidad: '3.05 m' },
              ],
            },
          ],
        },
      ],
    },

    // --- 6. AISLAMIENTOS TÉRMICOS ---
    {
      id: 'aislamientos',
      name: 'Colchoneta Aislhogar y Lana Mineral',
      category: 'Aislamientos',
      image: 'assets/productos/panel-amarillo.webp',
      shortDescription:
        'Rollos de fibra de vidrio Aislhogar Owens Corning para muros de Tablaroca.',
      features: ['Fibra de vidrio Aislhogar', 'Membranas protectoras', 'Placas de poliestireno'],
      inStock: true,
      seoTitle: 'Colchoneta de Fibra de Vidrio Aislhogar | Aislante Acústico',
      seoDescription:
        'Aislamiento térmico y acústico para muros de Tablaroca. Venta de colchoneta de fibra de vidrio Aislhogar R-8 y R-11 de Owens Corning.',
      seoKeywords:
        'aislante termico tablaroca, fibra de vidrio aislhogar, owens corning, colchoneta acustica, lana mineral, aislamiento termico r11',
      subProducts: [
        {
          id: 'aislamiento-fibra',
          name: 'Fibra de Vidrio Aislhogar (Owens Corning)',
          shortDescription:
            'Colchoneta aislante termoacústica para el interior de bastidores metálicos.',
          image: 'assets/productos/panel-amarillo.webp',
          variants: [
            {
              id: 'var-ais-fibra',
              name: 'Aislhogar en Rollo',
              empaqueSeleccionado: null,
              empaques: [
                { idProducto: 'ais-r8', nombre: 'Valor R-8', cantidad: 'Rollo' },
                { idProducto: 'ais-r11', nombre: 'Valor R-11 (3 1/2")', cantidad: 'Rollo' },
              ],
            },
          ],
        },
      ],
    },

    // --- 7. TORNILLERÍA Y FIJACIÓN ---
    {
      id: 'tornilleria-fijacion',
      name: 'Tornillos para Tablaroca y Tornillo Framer',
      category: 'Tornillería',
      image: 'assets/show/maquina.webp',
      shortDescription:
        'Tornillos Tek broca, tornillo punta fina para panel, fulminantes y clavos con rondana.',
      features: ['Fijación especializada', 'Anclajes a concreto', 'Cartuchos cal. 22 y 27'],
      inStock: true,
      seoTitle: 'Tornillos para Tablaroca 1 pulgada y Tornillo Framer',
      seoDescription:
        'Cajas de tornillos para Tablaroca (punta fina y Tek broca) 1 y 1 1/4 pulgadas. Clavo con rondana, tornillo Framer y fulminantes cal 27.',
      seoKeywords:
        'tornillos para tablaroca, tornillo framer, tornillo tek broca, clavo con rondana, fulminantes cal 27, tornillo punta fina 1 pulgada, taquete plastico',
      subProducts: [
        {
          id: 'tornillos-tablaroca',
          name: 'Tornillos para Tablaroca (Punta Fina)',
          shortDescription: 'Tornillos fosfatados color negro para fijar la hoja de yeso al poste.',
          image: 'assets/show/maquina.webp',
          variants: [
            {
              id: 'var-tor-6x1',
              name: 'Medida: 6 x 1"',
              empaqueSeleccionado: null,
              empaques: [
                { idProducto: 'tor-6x1-ciento', nombre: 'Por Ciento', cantidad: '100 pzas' },
                { idProducto: 'tor-6x1-caja', nombre: 'Caja Cerrada', cantidad: 'Millar' },
              ],
            },
            {
              id: 'var-tor-6x118',
              name: 'Medida: 6 x 1 1/8"',
              empaqueSeleccionado: null,
              empaques: [
                { idProducto: 'tor-6x118-ciento', nombre: 'Por Ciento', cantidad: '100 pzas' },
                { idProducto: 'tor-6x118-caja', nombre: 'Caja Cerrada', cantidad: 'Millar' },
              ],
            },
            {
              id: 'var-tor-6x158',
              name: 'Medida: 6 x 1 5/8"',
              empaqueSeleccionado: null,
              empaques: [
                { idProducto: 'tor-6x158-ciento', nombre: 'Por Ciento', cantidad: '100 pzas' },
                { idProducto: 'tor-6x158-caja', nombre: 'Caja Cerrada', cantidad: 'Millar' },
              ],
            },
            {
              id: 'var-tor-6x2',
              name: 'Medida: 6 x 2"',
              empaqueSeleccionado: null,
              empaques: [
                { idProducto: 'tor-6x2-ciento', nombre: 'Por Ciento', cantidad: '100 pzas' },
              ],
            },
          ],
        },
        {
          id: 'tornillos-tek',
          name: 'Tornillos Tek Broca y Tornillo Framer',
          shortDescription: 'Para unir perfiles metálicos entre sí o fijar Durock.',
          image: 'assets/show/maquina.webp',
          variants: [
            {
              id: 'var-tek-8x12',
              name: 'Medida: 8 x 1/2" (Framer)',
              empaqueSeleccionado: null,
              empaques: [
                { idProducto: 'tek-8x12', nombre: 'Por Ciento', cantidad: '100 pzas' },
                {
                  idProducto: 'caja-de-tornillo-8-x-12-dr-tekbroca',
                  nombre: 'Caja Cerrada',
                  cantidad: 'Millar',
                },
              ],
            },
            {
              id: 'var-tek-8x1',
              name: 'Medida: 8 x 1"',
              empaqueSeleccionado: null,
              empaques: [{ idProducto: 'tek-8x1', nombre: 'Por Ciento', cantidad: '100 pzas' }],
            },
            {
              id: 'var-tek-8x114',
              name: 'Medida: 8 x 1 1/4" (Para Durock)',
              empaqueSeleccionado: null,
              empaques: [
                { idProducto: 'tek-8x114', nombre: 'Por Ciento', cantidad: '100 pzas' },
                {
                  idProducto: 'caja-de-tornillo-8-x-1-14-dr',
                  nombre: 'Caja Cerrada',
                  cantidad: 'Millar',
                },
              ],
            },
          ],
        },
        {
          id: 'taquetes-clavos',
          name: 'Clavo con Rondana y Taquetes',
          shortDescription: 'Anclajes para fijar el canal de amarre al concreto.',
          image: 'assets/show/maquina.webp',
          variants: [
            {
              id: 'var-taq-plas',
              name: 'Taquete Plástico Rojo',
              empaqueSeleccionado: null,
              empaques: [
                { idProducto: 'fij-taq-plastico', nombre: 'Por Ciento', cantidad: '100 pzas' },
              ],
            },
            {
              id: 'var-taq-coch',
              name: 'Taquete Cola Cochino',
              empaqueSeleccionado: null,
              empaques: [
                { idProducto: 'fij-taq-nylon', nombre: 'Nylon', cantidad: '1 pza' },
                {
                  idProducto: 'taquete-cola-de-cochino-metalico-pza',
                  nombre: 'Metálico',
                  cantidad: '1 pza',
                },
              ],
            },
            {
              id: 'var-cla-concr',
              name: 'Clavo Concreto 1" con Rondana',
              empaqueSeleccionado: null,
              empaques: [
                { idProducto: 'fij-clavo-ciento', nombre: 'Por Ciento', cantidad: '100 pzas' },
                {
                  idProducto: 'caja-de-clavo-con-rondana-100-pzas',
                  nombre: 'Caja Cerrada',
                  cantidad: 'Caja',
                },
              ],
            },
          ],
        },
        {
          id: 'fulminantes',
          name: 'Fulminantes Calibre 27 y 22',
          shortDescription: 'Cargas de pólvora amarilla y roja para fijación directa.',
          image: 'assets/show/maquina.webp',
          variants: [
            {
              id: 'var-fulm-cal22',
              name: 'Calibre 22',
              empaqueSeleccionado: null,
              empaques: [
                {
                  idProducto: 'fulminante-cartucho-individual-cal-22-1-pza',
                  nombre: 'Individual',
                  cantidad: '1 pza',
                },
              ],
            },
            {
              id: 'var-fulm-cal27r',
              name: 'Calibre 27 (Tira Roja)',
              empaqueSeleccionado: null,
              empaques: [
                { idProducto: 'fij-fulm-rojo', nombre: 'Individual', cantidad: '1 pza' },
                {
                  idProducto: 'caja-de-fulminantes-tira-roja-cal-27-100-pzas',
                  nombre: 'Caja Cerrada',
                  cantidad: '100 pzas',
                },
              ],
            },
            {
              id: 'var-fulm-cal27a',
              name: 'Calibre 27 (Amarillo)',
              empaqueSeleccionado: null,
              empaques: [
                { idProducto: 'fij-fulm-amarillo', nombre: 'Individual', cantidad: '1 pza' },
              ],
            },
          ],
        },
      ],
    },

    // --- 8. HERRAMIENTAS ---
    {
      id: 'herramientas',
      name: 'Espátulas para Readymix y Lijas',
      category: 'Herramientas',
      image: 'assets/show/maquina.webp',
      shortDescription:
        'Espátulas aceradas, charolas para encintar, lijas esmeril y navajas utilitarias.',
      features: ['Herramientas manuales', 'Accesorios de corte', 'Insumos de pintura'],
      inStock: true,
      seoTitle: 'Espátulas para Tablaroca y Charolas para Readymix',
      seoDescription:
        'Catálogo de herramientas manuales para tablaroqueros. Espátulas aceradas (4 a 12 pulgadas), lijas esmeril y charolas. Todo para instalar Tablaroca.',
      seoKeywords:
        'herramienta para tablaroca, espatula para tablaroca, navaja utilitaria, lija esmeril, charola para readymix, instalar tablaroca',
      subProducts: [
        {
          id: 'herramientas-manuales',
          name: 'Espátulas para Tablaroquero',
          shortDescription: 'Láminas de acero al carbón para aplicar compuestos y pastas.',
          image: 'assets/show/maquina.webp',
          variants: [
            {
              id: 'var-esp',
              name: 'Medidas de Espátula',
              empaqueSeleccionado: null,
              empaques: [
                { idProducto: 'esp-4', nombre: '4 Pulgadas', cantidad: 'Pieza' },
                { idProducto: 'esp-6', nombre: '6 Pulgadas', cantidad: 'Pieza' },
                { idProducto: 'esp-8', nombre: '8 Pulgadas', cantidad: 'Pieza' },
                { idProducto: 'esp-10', nombre: '10 Pulgadas', cantidad: 'Pieza' },
                { idProducto: 'esp-12', nombre: '12 Pulgadas', cantidad: 'Pieza' },
              ],
            },
          ],
        },
        {
          id: 'pintura-lijas',
          name: 'Lija Esmeril para Tablaroca',
          shortDescription: 'Lijas de malla para detallar el tratamiento de juntas sin empastarse.',
          image: 'assets/show/maquina.webp',
          variants: [
            {
              id: 'var-lija',
              name: 'Grano de Lija',
              empaqueSeleccionado: null,
              empaques: [
                { idProducto: 'lija-80', nombre: 'Grano 80', cantidad: 'Pieza' },
                { idProducto: 'lija-120', nombre: 'Grano 120', cantidad: 'Pieza' },
                { idProducto: 'lija-220', nombre: 'Grano 220', cantidad: 'Pieza' },
              ],
            },
          ],
        },
      ],
    },
  ];

  constructor() {}

  getFamiliasCatalogo() {
    return this.familiasCatalogo;
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: string): Product | undefined {
    return this.products.find((product) => product.id === id);
  }
}
