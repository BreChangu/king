import { Injectable } from '@angular/core';
import { Product } from '../../shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // ==========================================
  // 🌟 1. FAMILIAS PARA EL CATÁLOGO
  // ==========================================
  private familiasCatalogo = [
    {
      id: 'perfiles-metalicos',
      name: 'Perfiles Metálicos',
      description: 'Postes, canales de amarre, canaletas de carga y ángulos estructurales.',
      image: 'assets/productos/perfil.webp',
    },
    {
      id: 'paneles',
      name: 'Paneles y Tableros',
      description: 'Panel de Yeso, Glass Rey, Durock, Permabase y exteriores.',
      image: 'assets/productos/panel.webp',
    },
    {
      id: 'plafones-suspension',
      name: 'Plafones y Suspensión',
      description: 'Plafones acústicos, T principales, secundarias y ángulos perimetrales.',
      image: 'assets/productos/panel-ligero.webp',
    },
    {
      id: 'compuestos-pastas',
      name: 'Compuestos y Pastas',
      description: 'Readymix, Basecoat, Estuco, Yeso supremo y cementos.',
      image: 'assets/productos/compuestos.webp',
    },
    {
      id: 'cintas-complementos',
      name: 'Cintas y Complementos',
      description: 'Cintas de papel, malla de fibra de vidrio y esquineros metálicos o PVC.',
      image: 'assets/productos/cinta-papel.webp',
    },
    {
      id: 'aislamientos',
      name: 'Aislamientos Térmicos',
      description: 'Lana de roca, colchoneta Aislhogar, Tyvek y placas de poliestireno.',
      image: 'assets/productos/panel-amarillo.webp',
    },
    {
      id: 'tornilleria-fijacion',
      name: 'Tornillería y Anclajes',
      description: 'Tornillos Tek, Framer, taquetes, clavos y fulminantes.',
      image: 'assets/show/maquina.webp',
    },
    {
      id: 'herramientas',
      name: 'Herramientas',
      description: 'Espátulas, charolas, rodillos y herramientas de corte.',
      image: 'assets/show/maquina.webp',
    },
  ];

  // ==========================================
  // 🌟 2. PRODUCTOS DETALLADOS (Con SEO de Alto Impacto)
  // ==========================================
  private products: Product[] = [
    
    // --- 1. PERFILES METÁLICOS ---
    {
      id: 'perfiles-metalicos',
      name: 'Sistemas de Perfilería Metálica',
      category: 'Perfiles',
      image: 'assets/productos/perfil.webp',
      shortDescription: 'Fabricantes directos de perfiles de alta resistencia. Suministro e instalación para proyectos de construcción ligera.',
      features: ['Acero galvanizado de alta calidad', 'Fabricación bajo estándares', 'Calibres 20, 22, 24 y 26'],
      inStock: true,
      
      // 🎯 SEO OPTIMIZADO 🎯
      seoTitle: 'Perfiles Metálicos para Tablaroca | Postes y Canales Calibre 26 y 20',
      seoDescription: 'Fábrica y distribuidora de perfiles metálicos para construcción ligera. Postes, canales de amarre y canaletas de carga. Precios de mayoreo para contratistas.',
      seoKeywords: 'perfiles metalicos para tablaroca, poste metalico tablaroca, canal de amarre, canaleta de carga, precio perfiles tablaroca, acero galvanizado construccion',
      
      subProducts: [
        {
          id: 'poste-metalico',
          name: 'Poste Metálico',
          shortDescription: 'Poste estructural y divisorio de acero galvanizado.',
          image: 'assets/productos/poste-6.webp',
          variants: [
            { id: 'var-pos-410', name: 'Medida: 4.10 cm x 3.05 m', empaqueSeleccionado: null, empaques: [{ idProducto: 'pos-410-26', nombre: 'Calibre 26', cantidad: 'Pieza', image: 'assets/productos/poste-6.webp' }, { idProducto: 'pos-410-20', nombre: 'Calibre 20 (Estructural)', cantidad: 'Pieza', image: 'assets/productos/poste-6.webp' }] },
            { id: 'var-pos-635', name: 'Medida: 6.35 cm x 3.05 m', empaqueSeleccionado: null, empaques: [{ idProducto: 'pos-635-26', nombre: 'Calibre 26', cantidad: 'Pieza' }, { idProducto: 'pos-635-20', nombre: 'Calibre 20 (Estructural)', cantidad: 'Pieza' }] },
            { id: 'var-pos-920', name: 'Medida: 9.20 cm x 3.05 m', empaqueSeleccionado: null, empaques: [{ idProducto: 'pos-920-26', nombre: 'Calibre 26', cantidad: 'Pieza' }, { idProducto: 'pos-920-20', nombre: 'Calibre 20 (Estructural)', cantidad: 'Pieza' }] },
            { id: 'var-pos-1524', name: 'Medida: 15.24 cm x 3.05 m', empaqueSeleccionado: null, empaques: [{ idProducto: 'pos-1524-26', nombre: 'Calibre 26', cantidad: 'Pieza' }, { idProducto: 'pos-1524-20', nombre: 'Calibre 20 (Estructural)', cantidad: 'Pieza' }] }
          ],
        },
        {
          id: 'canal-amarre',
          name: 'Canal de Amarre',
          shortDescription: 'Canal de amarre de acero galvanizado para bastidores.',
          image: 'assets/productos/canal-amarre.webp',
          variants: [
            { id: 'var-can-410', name: 'Ancho: 4.10 cm x 3.05 m', empaqueSeleccionado: null, empaques: [{ idProducto: 'can-410-26', nombre: 'Calibre 26', cantidad: 'Pieza' }, { idProducto: 'can-410-22', nombre: 'Calibre 22 (Estructural)', cantidad: 'Pieza' }] },
            { id: 'var-can-635', name: 'Ancho: 6.35 cm x 3.05 m', empaqueSeleccionado: null, empaques: [{ idProducto: 'can-635-26', nombre: 'Calibre 26', cantidad: 'Pieza' }, { idProducto: 'can-635-22', nombre: 'Calibre 22 (Estructural)', cantidad: 'Pieza' }] },
            { id: 'var-can-920', name: 'Ancho: 9.20 cm x 3.05 m', empaqueSeleccionado: null, empaques: [{ idProducto: 'can-920-26', nombre: 'Calibre 26', cantidad: 'Pieza' }, { idProducto: 'can-920-22', nombre: 'Calibre 22 (Estructural)', cantidad: 'Pieza' }] },
            { id: 'var-can-1524', name: 'Ancho: 15.24 cm x 3.05 m', empaqueSeleccionado: null, empaques: [{ idProducto: 'can-1524-22', nombre: 'Calibre 22 (Estructural)', cantidad: 'Pieza' }] }
          ],
        },
        {
          id: 'canaleta-carga',
          name: 'Canaleta de Carga y Listón',
          shortDescription: 'Canaleta de carga y listón metálico para plafones.',
          image: 'assets/productos/canaleta-carga.webp',
          variants: [
            { id: 'var-canc-34', name: 'Canaleta 3/4" x 3.05 m', empaqueSeleccionado: null, empaques: [{ idProducto: 'canc-34-24', nombre: 'Calibre 24', cantidad: 'Pieza' }] },
            { id: 'var-canc-112', name: 'Canaleta 1 1/2" x 3.05 m', empaqueSeleccionado: null, empaques: [{ idProducto: 'canc-112-24', nombre: 'Calibre 24', cantidad: 'Pieza' }, { idProducto: 'canc-112-22', nombre: 'Calibre 22 (Estructural)', cantidad: 'Pieza' }] },
            { id: 'var-canlist-635', name: 'Canal Listón 6.35 x 3.05 m', empaqueSeleccionado: null, empaques: [{ idProducto: 'canlist-635-26', nombre: 'Calibre 26', cantidad: 'Pieza' }] }
          ],
        },
        {
          id: 'angulos-metalicos',
          name: 'Ángulos y Esquineros Metálicos',
          shortDescription: 'Ángulos de amarre y esquineros para remates de muros.',
          image: 'assets/productos/esquinero-metalico.webp',
          variants: [
            { id: 'var-esq-met', name: 'Esquinero Metálico', empaqueSeleccionado: null, empaques: [{ idProducto: 'esq-met-244', nombre: 'Largo: 2.44 m', cantidad: 'Cal 30' }, { idProducto: 'esq-met-305', nombre: 'Largo: 3.05 m', cantidad: 'Cal 30' }] },
            { id: 'var-ang-am', name: 'Ángulo de Amarre', empaqueSeleccionado: null, empaques: [{ idProducto: 'ang-am-26', nombre: '3.05 m (Calibre 26)', cantidad: 'Pieza' }] }
          ],
        },
      ],
    },

    // --- 2. PANELES DE YESO Y TABLEROS ---
    {
      id: 'paneles',
      name: 'Sistemas de Paneles y Tableros',
      category: 'Paneles',
      image: 'assets/productos/panel.webp',
      shortDescription: 'Suministro masivo de paneles de yeso, cemento y maderas estructurales.',
      features: ['Aislamiento térmico', 'Resistencia a fuego y humedad', 'Maderas para obra'],
      inStock: true,
      
      // 🎯 SEO OPTIMIZADO 🎯
      seoTitle: 'Tablaroca Precio por Hoja | Paneles para Exterior y Baño | King Panel',
      seoDescription: 'Cotiza tablaroca a precio de distribuidor. Tenemos Tablaroca para exterior (Durock/Permabase), Tablaroca para baño (verde antihumedad) y paneles de yeso estándar USG y Panel Rey.',
      seoKeywords: 'tablaroca precio, tablaroca para exterior, tablaroca para baño, tablaroca precio por hoja, medidas de tablaroca, distribuidor panel de yeso',
      
      subProducts: [
        {
          id: 'panel-regular',
          name: 'Panel de Yeso Regular y Firecode',
          shortDescription: 'Tableros estándar y resistentes al fuego (USG y Panel Rey).',
          image: 'assets/productos/panel-regular.webp',
          variants: [
            { id: 'var-pr-12', name: 'Grosor: 1/2" (1.22 x 2.44m)', empaqueSeleccionado: null, empaques: [{ idProducto: 'pr-usg', nombre: 'Tablaroca USG', cantidad: 'Hoja' }, { idProducto: 'pr-prey', nombre: 'Panel Rey', cantidad: 'Hoja' }, { idProducto: 'pr-ligero', nombre: 'Panel Ligero', cantidad: 'Hoja' }] },
            { id: 'var-pr-58', name: 'Grosor: 5/8" y Especiales', empaqueSeleccionado: null, empaques: [{ idProducto: 'pr-58', nombre: 'Tablaroca 5/8"', cantidad: 'Hoja' }, { idProducto: 'pr-fire', nombre: 'Firecode Tipo X', cantidad: 'Hoja' }] }
          ],
        },
        {
          id: 'panel-humedad',
          name: 'Panel Resistente a la Humedad',
          shortDescription: 'Paneles RH y sustratos especiales Anti Moho.',
          image: 'assets/productos/panel-verde.webp',
          variants: [
            { id: 'var-ph', name: 'Paneles RH (1.22 x 2.44m)', empaqueSeleccionado: null, empaques: [{ idProducto: 'ph-rey', nombre: 'RH Panel Rey (12.7mm)', cantidad: 'Hoja' }, { idProducto: 'ph-usg', nombre: 'Anti Moho USG (13mm)', cantidad: 'Hoja' }] }
          ],
        },
        {
          id: 'tablero-cemento',
          name: 'Sustratos para Exterior (Tablacemento)',
          shortDescription: 'Placas de cemento y recubrimientos de fibra de vidrio.',
          image: 'assets/productos/permabase.webp',
          variants: [
            { id: 'var-tc', name: 'Placas Exterior (1.22 x 2.44m)', empaqueSeleccionado: null, empaques: [{ idProducto: 'tc-permabase', nombre: 'Permabase (1/2")', cantidad: 'Hoja' }, { idProducto: 'tc-durock', nombre: 'Durock USG (1/2")', cantidad: 'Hoja' }, { idProducto: 'tc-glassrey', nombre: 'Glass Rey (1/2")', cantidad: 'Hoja' }, { idProducto: 'tc-securock', name: 'Securock Glass Mat', cantidad: 'Hoja' }] }
          ],
        },
        {
          id: 'maderas-construccion',
          name: 'Maderas Estructurales',
          shortDescription: 'Láminas OSB, MDF y Triplay para cimbres y usos estructurales.',
          image: 'assets/productos/panel-amarillo.webp',
          variants: [
            { id: 'var-maderas', name: 'Hojas y Triplay', empaqueSeleccionado: null, empaques: [{ idProducto: 'mad-osb', nombre: 'OSB 16mm', cantidad: 'Hoja' }, { idProducto: 'mad-triplay9', nombre: 'Triplay 9mm', cantidad: 'Hoja' }, { idProducto: 'mad-triplay12', nombre: 'Triplay 1/2" Segunda', cantidad: 'Hoja' }, { idProducto: 'mad-mdf', nombre: 'MDF 9mm', cantidad: 'Hoja' }] }
          ],
        },
      ],
    },

    // --- 3. PLAFONES Y SUSPENSIÓN ---
    {
      id: 'plafones-suspension',
      name: 'Plafones y Suspensión',
      category: 'Plafones',
      image: 'assets/productos/panel-ligero.webp',
      shortDescription: 'Losetas acústicas y suspensión metálica para techos reticulares.',
      features: ['Variedad de texturas', 'Suspensión GPM y DX', 'Fácil mantenimiento'],
      inStock: true,
      
      // 🎯 SEO OPTIMIZADO 🎯
      seoTitle: 'Plafones Acústicos y Suspensión para Falso Plafón | King Panel',
      seoDescription: 'Venta de plafón reticular, losetas acústicas (Radar, Cortega, Yeso Vinil) y perfilería de suspensión T principal y secundaria. Sistemas para techo falso.',
      seoKeywords: 'plafon acustico, plafon reticular, suspension para plafon, techo falso, loseta acustica usg, plafon radar, suspension donnn',
      
      subProducts: [
        {
          id: 'plafones-reticulares',
          name: 'Losetas y Plafones Acústicos',
          shortDescription: 'Plafones de fibra mineral, yeso y vinil para control acústico.',
          image: 'assets/productos/panel-ligero.webp',
          variants: [
            { id: 'var-plaf-61', name: 'Medida: .61 x .61 m', empaqueSeleccionado: null, empaques: [{ idProducto: 'plaf-radar', nombre: 'Radar USG', cantidad: 'Caja 16 Pzas' }, { idProducto: 'plaf-cortega', nombre: 'Cortega Armstrong', cantidad: 'Caja 16 Pzas' }, { idProducto: 'plaf-fisured', nombre: 'Fisured L/S', cantidad: 'Caja 16 Pzas' }, { idProducto: 'plaf-yeso', nombre: 'Yeso Vinil', cantidad: 'Caja 10 Pzas' }, { idProducto: 'plaf-gpm', name: 'GPM Lana Mineral', cantidad: 'Caja 10 Pzas' }] },
            { id: 'var-plaf-122', name: 'Medida: .61 x 1.22 m', empaqueSeleccionado: null, empaques: [{ idProducto: 'plaf-toledo', nombre: 'Toledo', cantidad: 'Pieza' }, { idProducto: 'plaf-polar', nombre: 'Polar USG', cantidad: 'Pieza' }] }
          ],
        },
        {
          id: 'suspension-metalica',
          name: 'Suspensión Metálica y Ángulos',
          shortDescription: 'Sistemas de suspensión perimetral y conectores.',
          image: 'assets/productos/perfil.webp',
          variants: [
            { id: 'var-susp-gpm', name: 'Línea Suspensión (GPM / DX)', empaqueSeleccionado: null, empaques: [{ idProducto: 'susp-tprin', nombre: 'T Principal 3.66m', cantidad: 'Pieza' }, { idProducto: 'susp-tsec122', nombre: 'T Secundaria 1.22m', cantidad: 'Pieza' }, { idProducto: 'susp-tsec61', nombre: 'T Secundaria 0.61m', cantidad: 'Pieza' }, { idProducto: 'susp-ang', nombre: 'Ángulo Perimetral', cantidad: 'Pieza' }] }
          ],
        },
      ],
    },

    // --- 4. COMPUESTOS Y PASTAS ---
    {
      id: 'compuestos-pastas',
      name: 'Compuestos y Pastas',
      category: 'Compuestos',
      image: 'assets/productos/compuestos.webp',
      shortDescription: 'Premezclados, cementos y materiales de obra civil para recubrimientos y obra negra.',
      features: ['Sistemas de tratamiento de juntas', 'Adhesivos y Yesos', 'Materiales a granel'],
      inStock: true,
      
      // 🎯 SEO OPTIMIZADO 🎯
      seoTitle: 'Pasta Readymix y Basecoat para Exterior | Precios Mayoreo',
      seoDescription: 'Todo para el tratamiento de juntas. Venta de pasta Readymix Panel Rey y Redimix USG en caja y cubeta. Basecoat para Durock, estucos y yeso.',
      seoKeywords: 'readymix tablaroca, pasta para tablaroca precio, basecoat precio, cubeta de readymix usg, tratamiento de juntas, yeso supremo, estuco fino',
      
      subProducts: [
        {
          id: 'readymix',
          name: 'Compuesto Premezclado (Readymix)',
          shortDescription: 'Pasta para tratamiento de juntas en sistemas ligeros.',
          image: 'assets/productos/ready-mix-21.webp',
          variants: [
            { id: 'var-rm-caja', name: 'Presentación: Caja', empaqueSeleccionado: null, empaques: [{ idProducto: 'rm-caja21', nombre: 'Panel Rey', cantidad: '21.8 kg', image: 'assets/productos/ready-mix-21.webp' }, { idProducto: 'rm-caja25', nombre: 'Estándar', cantidad: '25 kg' }, { idProducto: 'rm-caja28usg', nombre: 'Redimix USG', cantidad: '28 kg', image: 'assets/productos/ready-mix-28.webp' }] },
            { id: 'var-rm-cubeta', name: 'Presentación: Cubeta y Granel', empaqueSeleccionado: null, empaques: [{ idProducto: 'rm-cubeta6', nombre: 'Cubeta Pequeña', cantidad: '6 kg', image: 'assets/productos/ready-mix-6.webp' }, { idProducto: 'rm-cubeta28', nombre: 'Cubeta Grande', cantidad: '28 kg', image: 'assets/productos/ready-mix-28.wep' }, { idProducto: 'rm-granel', nombre: 'A Granel', cantidad: '1 kg' }] }
          ],
        },
        {
          id: 'basecoat-estuco',
          name: 'Basecoat, Estucos y Pastas',
          shortDescription: 'Recubrimientos para exterior y acabados decorativos.',
          image: 'assets/productos/basecoat.webp',
          variants: [
            { id: 'var-bc', name: 'Basecoat (Tratamiento Exterior)', empaqueSeleccionado: null, empaques: [{ idProducto: 'bc-usg20', nombre: 'Basecoat USG', cantidad: '20 kg' }, { idProducto: 'bc-protekto', nombre: 'Protekto Plus', cantidad: '22.7 kg' }] },
            { id: 'var-est', name: 'Estucos y Recubrimientos', empaqueSeleccionado: null, empaques: [{ idProducto: 'est-adhetec25', nombre: 'Estuco Fino Adhetec', cantidad: '25 kg' }, { idProducto: 'est-exter40', nombre: 'Estuco Exter Block', cantidad: '40 kg' }, { idProducto: 'past-royal', nombre: 'Pasta Royal / MS-Block', cantidad: '25 kg' }] }
          ],
        },
        {
          id: 'cementos-yesos',
          name: 'Cementos, Yesos y Adhesivos',
          shortDescription: 'Materiales base para albañilería y nivelación.',
          image: 'assets/productos/compuestos.webp',
          variants: [
            { id: 'var-yeso', name: 'Yeso', empaqueSeleccionado: null, empaques: [{ idProducto: 'kilo-de-yeso-penitas', nombre: 'Por Kilo', cantidad: '1 kg' }, { idProducto: 'cy-supremo', nombre: 'Bulto Supremo', cantidad: '40 kg' }] },
            { id: 'var-cem', name: 'Cemento', empaqueSeleccionado: null, empaques: [{ idProducto: 'cy-cemblanco', nombre: 'Cemento Blanco', cantidad: '25 kg' }, { idProducto: 'cy-cemgris', nombre: 'Cemento Gris', cantidad: '50 kg' }] },
            { id: 'var-pega', name: 'Adhesivos', empaqueSeleccionado: null, empaques: [{ idProducto: 'cy-pegayeso', nombre: 'Pegayeso', cantidad: 'Galón' }, { idProducto: 'cy-pegazulejo', nombre: 'Pegazulejo', cantidad: '20 kg' }] }
          ],
        },
      ],
    },

    // --- 5. CINTAS Y COMPLEMENTOS ---
    {
      id: 'cintas-complementos',
      name: 'Cintas y Complementos',
      category: 'Complementos',
      image: 'assets/productos/cinta-papel.webp',
      shortDescription: 'Cintas de amarre, esquineros plásticos y accesorios misceláneos.',
      features: ['Esquineros PVC y Metal', 'Cintas de Fibra de Vidrio', 'Selladores y espumas'],
      inStock: true,
      
      // 🎯 SEO OPTIMIZADO 🎯
      seoTitle: 'Cinta de Malla para Tablaroca y Esquineros Perfatrim | Accesorios',
      seoDescription: 'Cinta de malla de fibra de vidrio, cinta de papel USG para juntas de tablaroca, esquineros metálicos y de PVC. Complementos de construcción ligera.',
      seoKeywords: 'cinta para tablaroca, cinta de malla fibra de vidrio, cinta de papel usg, esquinero plastico pvc, reborde j, esquinero perfatrim, masking tape',
      
      subProducts: [
        {
          id: 'cintas-juntas',
          name: 'Cintas para Juntas y Enmascarar',
          shortDescription: 'Cintas de papel, malla y masking tape.',
          image: 'assets/productos/cinta-papel.webp',
          variants: [
            { id: 'var-cin-malla', name: 'Cinta de Malla (Fibra de Vidrio)', empaqueSeleccionado: null, empaques: [{ idProducto: 'cinta-de-malla-de-fibra-de-vidrio-de-10-cm-x-23-mts', nombre: 'Rollo Chico', cantidad: '23 mts' }, { idProducto: 'cin-malla45', nombre: 'Rollo Grande', cantidad: '45 mts' }] },
            { id: 'var-cin-papel', name: 'Otras Cintas', empaqueSeleccionado: null, empaques: [{ idProducto: 'cin-papel75', nombre: 'Cinta de Papel USG', cantidad: 'Rollo 75 ml' }, { idProducto: 'cin-masking', nombre: 'Masking Azul 3/4"', cantidad: 'Pieza' }, { idProducto: 'cin-gris', nombre: 'Cinta Gris (Duct Tape)', cantidad: 'Pieza' }] }
          ],
        },
        {
          id: 'esquineros-rollos',
          name: 'Esquineros y Rebordes (PVC y Metal)',
          shortDescription: 'Protección perimetral y guardacantos.',
          image: 'assets/productos/esquinero-metalico.webp',
          variants: [
            { id: 'var-esq-rollo', name: 'Protección Perimetral', empaqueSeleccionado: null, empaques: [{ idProducto: 'esq-rollo', nombre: 'Rollo Metálico Perfatrim', cantidad: '30 mts' }, { idProducto: 'pvc-esq', nombre: 'Esquinero PVC 1 1/4"', cantidad: '3.05 m' }, { idProducto: 'reb-j', nombre: 'Reborde "J"', cantidad: '3.05 m' }, { idProducto: 'reb-lz', nombre: 'Reborde "Z" PVC', cantidad: '3.05 m' }] }
          ],
        },
      ],
    },

    // --- 6. AISLAMIENTOS TÉRMICOS ---
    {
      id: 'aislamientos',
      name: 'Aislamientos Térmicos y Acústicos',
      category: 'Aislamientos',
      image: 'assets/productos/panel-amarillo.webp',
      shortDescription: 'Lana mineral, Tyvek y poliestireno para control de temperatura y ruido.',
      features: ['Fibra de vidrio Aislhogar', 'Membranas protectoras', 'Placas de poliestireno'],
      inStock: true,
      
      // 🎯 SEO OPTIMIZADO 🎯
      seoTitle: 'Colchoneta de Fibra de Vidrio Aislhogar | Aislante Acústico y Térmico',
      seoDescription: 'Aislamiento térmico y acústico para muros de tablaroca. Venta de colchoneta de fibra de vidrio Aislhogar R-8 y R-11. Controla temperatura y ruido.',
      seoKeywords: 'aislante termico tablaroca, fibra de vidrio aislhogar, colchoneta acustica, aislante acustico muro, lana mineral, aislamiento termico r11',
      
      subProducts: [
        {
          id: 'aislamiento-fibra',
          name: 'Colchoneta de Fibra de Vidrio',
          shortDescription: 'Aislante Aislhogar para interiores.',
          image: 'assets/productos/panel-amarillo.webp',
          variants: [
            { id: 'var-ais-fibra', name: 'Aislhogar en Rollo', empaqueSeleccionado: null, empaques: [{ idProducto: 'ais-r8', nombre: 'Valor R-8', cantidad: 'Rollo' }, { idProducto: 'ais-r11', nombre: 'Valor R-11 (3 1/2")', cantidad: 'Rollo' }] }
          ],
        },
      ],
    },

    // --- 7. TORNILLERÍA Y FIJACIÓN ---
    {
      id: 'tornilleria-fijacion',
      name: 'Tornillería y Anclajes',
      category: 'Tornillería',
      image: 'assets/show/maquina.webp',
      shortDescription: 'Tornillos Tek, Tablaroca, madera, taquetes y fulminantes de pólvora.',
      features: ['Fijación especializada', 'Anclajes a concreto', 'Cartuchos cal. 22 y 27'],
      inStock: true,
      
      // 🎯 SEO OPTIMIZADO 🎯
      seoTitle: 'Tornillos para Tablaroca 1 pulgada y Tornillo Framer | Fijación',
      seoDescription: 'Cajas de tornillos para tablaroca (punta fina y broca/tek) 1, 1 1/4 y 1 5/8 pulgadas. Clavo con rondana para concreto, fulminantes cal 22 y 27.',
      seoKeywords: 'tornillos para tablaroca, tornillo framer, tornillo tek broca, clavo con rondana, fulminantes cal 27, tornillo punta fina 1 pulgada, taquete plastico',
      
      subProducts: [
        {
          id: 'tornillos-tablaroca',
          name: 'Tornillos Tablaroca (Punta Fina)',
          shortDescription: 'Tornillos fosfatados para fijación de paneles.',
          image: 'assets/show/maquina.webp',
          variants: [
            { id: 'var-tor-6x1', name: 'Medida: 6 x 1"', empaqueSeleccionado: null, empaques: [{ idProducto: 'tor-6x1-ciento', nombre: 'Por Ciento', cantidad: '100 pzas' }, { idProducto: 'tor-6x1-caja', nombre: 'Caja Cerrada', cantidad: 'Millar' }] },
            { id: 'var-tor-6x118', name: 'Medida: 6 x 1 1/8"', empaqueSeleccionado: null, empaques: [{ idProducto: 'tor-6x118-ciento', nombre: 'Por Ciento', cantidad: '100 pzas' }, { idProducto: 'tor-6x118-caja', nombre: 'Caja Cerrada', cantidad: 'Millar' }] },
            { id: 'var-tor-6x158', name: 'Medida: 6 x 1 5/8"', empaqueSeleccionado: null, empaques: [{ idProducto: 'tor-6x158-ciento', nombre: 'Por Ciento', cantidad: '100 pzas' }, { idProducto: 'tor-6x158-caja', nombre: 'Caja Cerrada', cantidad: 'Millar' }] },
            { id: 'var-tor-6x2', name: 'Medida: 6 x 2"', empaqueSeleccionado: null, empaques: [{ idProducto: 'tor-6x2-ciento', nombre: 'Por Ciento', cantidad: '100 pzas' }] }
          ],
        },
        {
          id: 'tornillos-tek',
          name: 'Tornillos Tek (Broca) y Madera',
          shortDescription: 'Para estructuras metálicas y sustratos especiales.',
          image: 'assets/show/maquina.webp',
          variants: [
            { id: 'var-tek-8x12', name: 'Medida: 8 x 1/2" Framer', empaqueSeleccionado: null, empaques: [{ idProducto: 'tek-8x12', nombre: 'Por Ciento', cantidad: '100 pzas' }, { idProducto: 'caja-de-tornillo-8-x-12-dr-tekbroca', nombre: 'Caja Cerrada', cantidad: 'Millar' }] },
            { id: 'var-tek-8x1', name: 'Medida: 8 x 1"', empaqueSeleccionado: null, empaques: [{ idProducto: 'tek-8x1', nombre: 'Por Ciento', cantidad: '100 pzas' }] },
            { id: 'var-tek-8x114', name: 'Medida: 8 x 1 1/4" Permabase', empaqueSeleccionado: null, empaques: [{ idProducto: 'tek-8x114', nombre: 'Por Ciento', cantidad: '100 pzas' }, { idProducto: 'caja-de-tornillo-8-x-1-14-dr', nombre: 'Caja Cerrada', cantidad: 'Millar' }] }
          ],
        },
        {
          id: 'taquetes-clavos',
          name: 'Taquetes, Clavos y Remaches',
          shortDescription: 'Anclajes a concreto y mampostería.',
          image: 'assets/show/maquina.webp',
          variants: [
            { id: 'var-taq-plas', name: 'Taquete Plástico Rojo', empaqueSeleccionado: null, empaques: [{ idProducto: 'fij-taq-plastico', nombre: 'Por Ciento', cantidad: '100 pzas' }] },
            { id: 'var-taq-coch', name: 'Taquete Cola Cochino', empaqueSeleccionado: null, empaques: [{ idProducto: 'fij-taq-nylon', nombre: 'Nylon', cantidad: '1 pza' }, { idProducto: 'taquete-cola-de-cochino-metalico-pza', nombre: 'Metálico', cantidad: '1 pza' }] },
            { id: 'var-cla-concr', name: 'Clavo Concreto 1" con Rondana', empaqueSeleccionado: null, empaques: [{ idProducto: 'fij-clavo-ciento', nombre: 'Por Ciento', cantidad: '100 pzas' }, { idProducto: 'caja-de-clavo-con-rondana-100-pzas', nombre: 'Caja Cerrada', cantidad: 'Caja' }] }
          ],
        },
        {
          id: 'fulminantes',
          name: 'Fulminantes (Cargas de Pólvora)',
          shortDescription: 'Cargas para pistolas de fijación directa.',
          image: 'assets/show/maquina.webp',
          variants: [
            { id: 'var-fulm-cal22', name: 'Calibre 22', empaqueSeleccionado: null, empaques: [{ idProducto: 'fulminante-cartucho-individual-cal-22-1-pza', nombre: 'Individual', cantidad: '1 pza' }] },
            { id: 'var-fulm-cal27r', name: 'Calibre 27 (Tira Roja)', empaqueSeleccionado: null, empaques: [{ idProducto: 'fij-fulm-rojo', nombre: 'Individual', cantidad: '1 pza' }, { idProducto: 'caja-de-fulminantes-tira-roja-cal-27-100-pzas', nombre: 'Caja Cerrada', cantidad: '100 pzas' }] },
            { id: 'var-fulm-cal27a', name: 'Calibre 27 (Amarillo)', empaqueSeleccionado: null, empaques: [{ idProducto: 'fij-fulm-amarillo', nombre: 'Individual', cantidad: '1 pza' }] }
          ],
        },
      ],
    },

    // --- 8. HERRAMIENTAS ---
    {
      id: 'herramientas',
      name: 'Herramientas, Pintura y Acabados',
      category: 'Herramientas',
      image: 'assets/show/maquina.webp',
      shortDescription: 'Espátulas, brochas, lijas, puntas de impacto y accesorios para instalación.',
      features: ['Herramientas manuales', 'Accesorios de corte', 'Insumos de pintura'],
      inStock: true,
      
      // 🎯 SEO OPTIMIZADO 🎯
      seoTitle: 'Herramientas para Tablaroca | Espátulas y Lijas',
      seoDescription: 'Catálogo de herramientas manuales para tablaroqueros. Espátulas aceradas (4, 6, 8, 10, 12 pulgadas), lijas y navajas. Todo para acabados e instalación.',
      seoKeywords: 'herramienta para tablaroca, espatula para tablaroca, navaja utilitaria, lija esmeril, charola para readymix, instalar tablaroca',
      
      subProducts: [
        {
          id: 'herramientas-manuales',
          name: 'Espátulas y Charolas',
          shortDescription: 'Herramientas aceradas para tratamiento de juntas.',
          image: 'assets/show/maquina.webp',
          variants: [
            { id: 'var-esp', name: 'Medidas de Espátula', empaqueSeleccionado: null, empaques: [{ idProducto: 'esp-4', nombre: '4 Pulgadas', cantidad: 'Pieza' }, { idProducto: 'esp-6', nombre: '6 Pulgadas', cantidad: 'Pieza' }, { idProducto: 'esp-8', nombre: '8 Pulgadas', cantidad: 'Pieza' }, { idProducto: 'esp-10', nombre: '10 Pulgadas', cantidad: 'Pieza' }, { idProducto: 'esp-12', nombre: '12 Pulgadas', cantidad: 'Pieza' }] }
          ],
        },
        {
          id: 'pintura-lijas',
          name: 'Pintura, Selladores y Lijas',
          shortDescription: 'Consumibles para acabados finales.',
          image: 'assets/show/maquina.webp',
          variants: [
            { id: 'var-lija', name: 'Lija / Lija Esmeril', empaqueSeleccionado: null, empaques: [{ idProducto: 'lija-80', nombre: 'Grano 80', cantidad: 'Pieza' }, { idProducto: 'lija-120', nombre: 'Grano 120', cantidad: 'Pieza' }, { idProducto: 'lija-220', nombre: 'Grano 220', cantidad: 'Pieza' }] }
          ],
        },
      ],
    },
  ];

  constructor() {}

  // ==========================================
  // 🌟 MÉTODOS DE ACCESO A LA INFORMACIÓN
  // ==========================================

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