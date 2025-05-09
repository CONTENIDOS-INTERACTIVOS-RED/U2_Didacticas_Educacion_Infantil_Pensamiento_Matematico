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
        'Ardaraz, M. (2002). Teoría de las tres dimensiones de desarrollo sostenible: . Ecosistemas, 11(2)',
      link:
        'https://www.revistaecosistemas.net/index.php/ecosistemas/article/view/614',
    },
    {
      referencia:
        'Beltrán, D. J. (2002). La estrategia de desarrollo sostenible de la Unión Europea en el contexto global: de Río a Johannesburgo. ICE. Revista de Economía, (800).',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Bioética',
      significado:
        'disciplina que estudia las implicaciones éticas, sociales y legales de los avances biológicos y médicos, buscando garantizar que las decisiones en estos campos respeten la dignidad humana, los derechos fundamentales y la justicia social.',
    },
    {
      termino: '<em>Design Thinking</em>',
      significado:
        'método de diseño centrado en el usuario que se basa en la comprensión de las necesidades y expectativas de los clientes, para crear soluciones innovadoras y efectivas.',
    },
  ],
}
