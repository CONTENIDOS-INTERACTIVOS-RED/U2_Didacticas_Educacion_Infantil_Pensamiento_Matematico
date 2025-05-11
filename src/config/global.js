export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad:
      'Aplicación de estrategias didácticas para desarrollar los pensamientos matemáticos',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Estrategias didácticas para el pensamiento numérico en educación infantil',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Explorando el mundo con números: bases del pensamiento matemático en la primera infancia',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Descubriendo el mundo a través del juego: La clave para el desarrollo del pensamiento numérico en la infancia',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Diseño e implementación de estrategias didácticas para fortalecer el pensamiento numérico',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo:
              'Selección y uso de materiales manipulativos para la enseñanza del pensamiento numérico: regletas, ábacos, bloques lógicos, entre otros.',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Explorando recursos didácticos para el pensamiento métrico y espacial en la primera infancia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Explorando el espacio y la medida: Recursos y ambientes de aprendizaje para el desarrollo del pensamiento métrico y espacial',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Innovación y tecnología en la enseñanza de las matemáticas en educación infantil',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Goñi, J. M. (2013). Didáctica de las matemáticas: (ed.). Ministerio de Educación y Formación Profesional de España - Editorial GRAÓ, de IRIF, S.L.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/49235',
    },
    {
      referencia:
        'Castro Puche, R. (2011). Didáctica de las matemáticas: de preescolar a secundaria: (ed.). Ecoe Ediciones.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/69177',
    },
    {
      referencia:
        'Oyarce, M. F. M., & Fierro, A. A. (2015). Cognición, juego y aprendizaje: una propuesta para el área de la primera infancia. Revista Infancia, Educación y Aprendizaje, 1(1), 162-177.',
      link: 'https://ieva.uv.cl/index.php/IEYA/article/view/576',
    },
    {
      referencia:
        "Goercke Torres, S. A. (2023). Material didáctico para desarrollar el ámbito de relaciones lógico-matemáticas en niños de 4 a 5 años en el Centro de Promoción Social P. Carlos Crespi, año 2023 (Bachelor's thesis).",
      link: 'https://dspace.ups.edu.ec/handle/123456789/26011',
    },
    {
      referencia:
        'Hidalgo, M. I. M. (2018). Estrategias metodológicas para el desarrollo del pensamiento lógico-matemático. Didasc@ lia: Didáctica y educación, 9(1), 125-132.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=6595073',
    },
    {
      referencia:
        'Muñoz Santoja, J., Fernández-Aliseda Redondo, A. & Hans Martín, J. A. (2020). Jugando con las matemáticas: los juegos como recurso de enseñanza y aprendizaje matemático: (1 ed.). Los libros de la Catarata.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/252976',
    },
    {
      referencia:
        'Castro Martínez, E. (2016). Enseñanza y aprendizaje de las matemáticas en educación infantil: (ed.). Difusora Larousse - Ediciones Pirámide.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/49142',
    },
    {
      referencia:
        'González, A. (2016). La enseñanza de la matemática en el jardín de infantes a través de secuencias didácticas: (ed.). Homo Sapiens Ediciones.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/67064',
    },
    {
      referencia:
        'Campoverde, M. M. P., Aguilar, M. A. A., Quiñonez, N. N. R., & Guanopatín, M. S. L. (2024). Estimulación sensorial para el desarrollo del pensamiento espacial en niños de 3 a 5 años. Sinergia Académica, 7(1), 187-203.',
      link: 'https://sinergiaacademica.com/index.php/sa/article/view/124',
    },
    {
      referencia:
        'Caguana Paucar, G. E. (2021). La estimulación visomotriz y el desarrollo de la orientación espacial en niños y niñas de inicial.',
      link:
        'https://repositorio.uta.edu.ec/items/c85ed2d3-d0c2-4d73-be00-d166def8af7e',
    },
    {
      referencia:
        'Cattaneo, L. (2012). Didáctica de la matemática: enseñar matemática, enseñar a enseñar matemática: (ed.). Homo Sapiens Ediciones.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/67091',
    },
    {
      referencia:
        'Castro Puche, R. (2016). Enseñanza de las matemáticas a través de la formulación de problemas: (ed.). Ecoe Ediciones.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/70448',
    },
    {
      referencia:
        'Adolfo Ortiz Choez, W. Torres Villegas, I. D. L. A., & Ortiz Aguilar, W. (2019). La enseñanza de la Matemática y su influencia en el desarrollo del pensamiento espacial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/151749',
    },
    {
      referencia:
        'Mejía, D. N. (2021). Elementos estructurales de los videojuegos potencialmente educativos para el desarrollo de temáticas escolares relacionadas con el pensamiento espacial en niños y niñas entre ocho y diez años.',
      link: 'https://dialnet.unirioja.es/servlet/td?codigo=333098',
    },
    {
      referencia:
        'Fernández, L. M. D. (2023). Una Aproximación al Estado del Estudio del Pensamiento Variacional en Primeros Grados de Escolaridad. Educación Matemática Multidisciplinar, 7(6), 33.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=9280118',
    },
  ],
  glosario: [
    {
      termino: 'Algoritmo',
      significado:
        'conjunto de pasos ordenados y finitos que se siguen para resolver un problema o realizar una operación matemática.',
    },
    {
      termino: 'Clasificación',
      significado:
        'proceso mediante el cual los niños agrupan objetos según sus características comunes, como color, forma o tamaño.',
    },
    {
      termino: 'Correspondencia',
      significado:
        'relación entre dos conjuntos de elementos en la que cada elemento de un grupo se asocia con uno del otro.',
    },
    {
      termino: 'Conteo',
      significado:
        'habilidad matemática inicial que permite a los niños asignar un número a cada objeto de un conjunto de manera secuencial.',
    },
    {
      termino: 'Concepto numérico',
      significado:
        'comprensión de la cantidad representada por un número y su relación con otros números.',
    },
    {
      termino: 'Desarrollo del pensamiento lógico',
      significado:
        'proceso mediante el cual los niños adquieren habilidades para analizar, razonar y resolver problemas matemáticos.',
    },
    {
      termino: 'Estimación',
      significado:
        'habilidad para hacer cálculos aproximados sobre cantidades, medidas o resultados sin necesidad de contar exactamente.',
    },
    {
      termino: 'Estrategias didácticas',
      significado:
        'métodos o técnicas utilizadas para facilitar el aprendizaje de los niños en el ámbito matemático.',
    },
    {
      termino: 'Figuras geométricas',
      significado:
        'formas con características específicas, como triángulos, cuadrados y círculos, que ayudan a comprender el espacio y las relaciones entre objetos.',
    },
    {
      termino: 'Juego simbólico',
      significado:
        'actividad lúdica en la que los niños representan situaciones de la vida real, favoreciendo la construcción del pensamiento matemático.',
    },
    {
      termino: 'Material manipulativo',
      significado:
        'recursos físicos como bloques, regletas o fichas que facilitan el aprendizaje de conceptos matemáticos a través de la exploración.',
    },
    {
      termino: 'Medición',
      significado:
        'proceso de determinar la cantidad de una magnitud, como longitud, peso o tiempo, utilizando unidades de medida.',
    },
    {
      termino: 'Patrones',
      significado:
        'secuencias repetitivas de colores, formas o números que ayudan a los niños a identificar regularidades y establecer relaciones.',
    },
    {
      termino: 'Pensamiento variacional',
      significado:
        'habilidad para comprender cómo cambian los objetos o situaciones en función de diferentes variables.',
    },
    {
      termino: 'Procesos espaciales',
      significado:
        'habilidades relacionadas con la ubicación y relación de los objetos en el espacio, fundamentales para la geometría.',
    },
    {
      termino: 'Razonamiento matemático',
      significado:
        'capacidad para analizar situaciones, establecer relaciones y resolver problemas con base en principios matemáticos.',
    },
    {
      termino: 'Resolución de problemas',
      significado:
        'proceso en el que los niños aplican estrategias matemáticas para encontrar soluciones a diversas situaciones.',
    },
    {
      termino: 'Secuenciación',
      significado:
        'ordenación de elementos o eventos siguiendo una lógica numérica, temporal o espacial.',
    },
    {
      termino: 'Seriación',
      significado:
        'habilidad para organizar objetos en función de un criterio determinado, como tamaño o cantidad.',
    },
  ],
}
