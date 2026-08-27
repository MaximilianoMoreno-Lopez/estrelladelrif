// Fichas de los proyectos de Estrella del Rif.
//
// Todo el contenido de este fichero procede literalmente de los dos formularios
// de solicitud aprobados en la convocatoria 2026 ronda 1 de Erasmus+ Juventud
// (agencia nacional ES02 - INJUVE) y del PIF 2026 de la asociacion. No se
// inventa ni se redondea nada: si un dato no esta en esos documentos, no esta
// aqui.
//
// Dos cosas que a proposito NO se publican, siguiendo la practica de los repos
// hermanos:
//
//  1. El identificador del formulario de solicitud y cualquier numero PRN. Son
//     datos del expediente, no informacion publica.
//  2. Los importes de la subvencion en la ficha del proyecto. Van agregados en
//     /transparencia/, que es donde tienen sentido y donde se leen junto al
//     resto de la informacion economica de la asociacion.
//
// Y una tercera cosa que se retiro: la ciudad de los dos encuentros presenciales
// del KA154. El propio formulario se contradice. Las tablas de flujos asignan
// Madrid al YPEVM01 (25 y 26 de septiembre) y Valencia al YPEVM02 (27 y 28 de
// noviembre); la narrativa de implicacion de responsables publicos dice lo
// contrario, que la primera actividad presencial se celebra en Valencia con
// diputadas de las Cortes Valencianas y la segunda en Madrid con un senador; y
// la ficha del Ayuntamiento de Getafe habla de su papel en la segunda actividad
// presencial facilitando espacios municipales. Hasta que la asociacion confirme
// que ciudad corresponde a cada encuentro, las fechas se publican y la ciudad
// queda como pendiente. Publicar una de las tres versiones habria sido inventar.

export interface Actividad {
  id: string;
  tipo: string;
  titulo: string;
  lugar: string;
  fechas?: string;
  duracion: string;
  participantes: string;
  descripcion: string;
}

export interface Fase {
  mes: string;
  titulo: string;
  objetivo: string;
  hitos: string[];
}

export interface Socio {
  nombre: string;
  tipo: string;
  pais: string;
}

export interface Proyecto {
  slug: string;
  titulo: string;
  tituloCorto: string;
  tituloEn?: string;
  acronimo?: string;
  programa: string;
  accion: string;
  convocatoria: string;
  agencia: string;
  inicio: string;
  fin: string;
  fechasLabel: string;
  duracion: string;
  estado: 'activo' | 'finalizado';
  ambito: string;
  badge: string;
  badgeColor: string;
  resumen: string;
  problema: string[];
  objetivoGeneral: string;
  objetivosEspecificos: string[];
  destinatarios: string[];
  temas: string[];
  actividades: Actividad[];
  fases: Fase[];
  socios: Socio[];
  resultados: string[];
  impacto: { ambito: string; texto: string }[];
  orden: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// KA154-YOU · Actividades de participacion juvenil
// ─────────────────────────────────────────────────────────────────────────────

export const democraciaSinBarreras: Proyecto = {
  slug: 'democracia-sin-barreras',
  titulo:
    'Democracia sin barreras: jóvenes construyendo una participación política inclusiva',
  tituloCorto: 'Democracia sin barreras',
  tituloEn:
    'Democracy without barriers: young people building inclusive political participation',
  acronimo: 'D-Win',
  programa: 'Erasmus+ Juventud',
  accion: 'KA154-YOU · Actividades de participación juvenil',
  convocatoria: 'Convocatoria 2026, ronda 1',
  agencia: 'INJUVE — Agencia Nacional Española de la Juventud (ES02)',
  inicio: '2026-08-01',
  fin: '2027-05-31',
  fechasLabel: 'Agosto de 2026 – mayo de 2027',
  duracion: '10 meses',
  estado: 'activo',
  ambito: 'Nacional, con dos encuentros presenciales en España',
  badge: 'KA154 · Participación juvenil',
  badgeColor: 'terracota',
  resumen:
    'Promover una participación democrática activa, accesible e inclusiva de la ' +
    'juventud, con atención especial a las y los jóvenes con discapacidad, en la ' +
    'vida política y cívica a nivel local y regional. El proyecto responde a la ' +
    'necesidad de reducir las barreras físicas, comunicativas, cognitivas y ' +
    'actitudinales que limitan el ejercicio de los derechos políticos.',
  problema: [
    'El proyecto nace de la experiencia directa de una persona joven con discapacidad que ha vivido en primera persona las barreras existentes para participar en la vida política y democrática.',
    'A pesar de los avances normativos, muchos jóvenes con discapacidad siguen encontrando dificultades para acceder a información comprensible, participar en procesos municipales o regionales, influir en la toma de decisiones o verse representados en los procesos democráticos.',
    'Las entidades participantes han identificado la necesidad de contar con metodologías prácticas de participación política inclusiva y materiales accesibles y reutilizables que puedan integrarse en su trabajo habitual.',
    'Las administraciones locales y regionales suelen carecer de herramientas operativas que garanticen que los procesos de participación juvenil sean accesibles.',
  ],
  objetivoGeneral:
    'Promover una participación democrática sin barreras, en la que jóvenes con y ' +
    'sin discapacidad, partiendo de la experiencia vivida y del conocimiento ' +
    'práctico, construyan conjuntamente espacios, herramientas y propuestas que ' +
    'impulsen una participación política plenamente inclusiva, accesible y ' +
    'representativa en sus comunidades.',
  objetivosEspecificos: [
    'Identificar y visibilizar las barreras que dificultan que los jóvenes con discapacidad participen en la vida política, promoviendo la sensibilización de la juventud y de la sociedad.',
    'Fortalecer las competencias cívicas y democráticas de los jóvenes, especialmente en comunicación accesible, alfabetización mediática, diseño inclusivo de actividades, participación informada y activismo accesible.',
    'Fomentar el trabajo conjunto entre organizaciones juveniles, asociaciones de personas con discapacidad y autoridades públicas para crear entornos de participación política más abiertos y accesibles.',
  ],
  destinatarios: [
    '30 jóvenes de entre 18 y 30 años participan de forma directa en todas las actividades: 15 con discapacidad y 15 sin discapacidad.',
    'Proceden de entidades juveniles generales y de organizaciones de personas con discapacidad.',
    'Un grupo más amplio se implica mediante encuestas, talleres locales y campañas digitales, con un alcance previsto de entre 200 y 500 jóvenes.',
    'Otras entidades juveniles y sociales y responsables públicos participan en los espacios de diálogo y en la difusión de las propuestas accesibles.',
  ],
  temas: [
    'Discapacidad y accesibilidad',
    'Participación democrática',
    'Inclusión y diversidad',
  ],
  actividades: [
    {
      id: 'YPEVM01',
      tipo: 'Encuentro presencial con movilidad',
      titulo: 'Democracia accesible: comprender la participación política sin barreras',
      lugar: 'España, ciudad por confirmar',
      fechas: '25 y 26 de septiembre de 2026',
      duracion: '2 días',
      participantes: '30 participantes en el evento, 15 de ellos con menos oportunidades',
      descripcion:
        'Introduce a los jóvenes en el concepto de democracia inclusiva, permite ' +
        'comprender las barreras reales que enfrentan las personas con discapacidad y ' +
        'abre un primer espacio de reflexión conjunta. Incluye la bienvenida accesible ' +
        'con un contrato de convivencia inclusiva coconstruido, la sesión ' +
        '«¿Qué es la democracia accesible?», el taller «Tu voz en la democracia», la ' +
        'actividad «El laberinto de las barreras», el «Mapa de la participación I», el ' +
        'mini-taller de derechos políticos en lectura fácil y la co-creación del Diario ' +
        'Político Inclusivo.',
    },
    {
      id: 'YPEVM02',
      tipo: 'Encuentro presencial con movilidad',
      titulo: 'Foro por la democracia inclusiva',
      lugar: 'España, ciudad por confirmar',
      fechas: '27 y 28 de noviembre de 2026',
      duracion: '2 días',
      participantes: '30 participantes en el evento, 15 de ellos con menos oportunidades',
      descripcion:
        'Aplica todo lo aprendido para diseñar propuestas políticas accesibles y ' +
        'presentarlas en un foro final. Incluye el «Mapa de la participación II», la ' +
        'sesión «Del diálogo a la incidencia», el taller «Tu ciudad, tú decides», la ' +
        'simulación «El ayuntamiento inclusivo», el taller «Comunica tu propuesta», el ' +
        'laboratorio «Accesibilizar un proceso democrático real» y la feria de ' +
        'propuestas accesibles.',
    },
    {
      id: 'YPEVO03',
      tipo: 'Evento de participación juvenil sin movilidad',
      titulo: 'Escuela ciudadana online',
      lugar: 'En línea',
      duracion: '21 días',
      participantes: '30 participantes, 15 de ellos con menos oportunidades',
      descripcion:
        'Microcursos con personas expertas en inclusión y buenas prácticas para ' +
        'reforzar las competencias cívicas y democráticas. Completamente accesible y en ' +
        'formato flexible: vídeos cortos adaptados, textos en lectura fácil, infografías ' +
        'accesibles y cuestionarios sencillos de comprensión. Temas previstos: democracia ' +
        'accesible y derechos políticos, funcionamiento de la política local, herramientas ' +
        'de participación y comunicación política inclusiva.',
    },
    {
      id: 'YPEVO04',
      tipo: 'Evento de participación juvenil sin movilidad',
      titulo: 'Observatorio Juvenil de Barreras y Soluciones',
      lugar: 'En línea y en los territorios de las entidades socias',
      duracion: '21 días',
      participantes: '40 participantes, 20 de ellos con menos oportunidades',
      descripcion:
        'Recogida y análisis participativo de políticas, procesos y proyectos ya ' +
        'existentes relacionados con participación democrática e inclusión. A partir de ' +
        'esa evidencia, los equipos mixtos de jóvenes con y sin discapacidad identifican ' +
        'barreras concretas y codiseñan soluciones aplicables. Cada caso se documenta en ' +
        'una ficha accesible con la medida, la barrera que elimina, el tipo de ' +
        'accesibilidad y los pasos de implementación, para que ayuntamientos y entidades ' +
        'puedan reutilizarla.',
    },
  ],
  fases: [
    {
      mes: 'Mes 1',
      titulo: 'Acuerdos y puesta en marcha',
      objetivo: 'Dejar el marco de trabajo cerrado antes de la primera actividad.',
      hitos: [
        'Acuerdos de partenariado por escrito y calendario de entregables',
        'Compromisos de calidad y salvaguarda, protección de datos y requisitos de accesibilidad',
        'Creación de los canales de trabajo, comunicación y organización del consorcio',
      ],
    },
    {
      mes: 'Mes 2',
      titulo: 'Primer encuentro presencial',
      objetivo:
        'Comprender qué es la democracia accesible y qué barreras existen, y abrir el Diario Político Inclusivo.',
      hitos: [
        'Actividad presencial «Democracia accesible»',
        'Mapa físico y digital accesible de espacios de participación',
        'Guía breve de derechos democráticos en lectura fácil',
      ],
    },
    {
      mes: 'Mes 3',
      titulo: 'Reto cívico inclusivo',
      objetivo:
        'Contrastar la teoría con la práctica evaluando la accesibilidad de un pleno real.',
      hitos: [
        'Asistencia presencial u online a un pleno municipal o regional',
        'Evaluación de la accesibilidad física, comunicativa, digital, cognitiva y del trato',
      ],
    },
    {
      mes: 'Mes 4',
      titulo: 'Talleres locales «Tu democracia cotidiana»',
      objetivo: 'Llevar el aprendizaje al territorio de cada entidad socia.',
      hitos: [
        'Sesión abierta en cada territorio conducida por los propios jóvenes',
        'Explicación de qué es la participación política, qué barreras hay y qué soluciones existen',
      ],
    },
    {
      mes: 'Mes 5',
      titulo: 'Observatorio Juvenil de Barreras y Soluciones',
      objetivo:
        'Convertir la evidencia recogida en recomendaciones listas para implementar.',
      hitos: [
        'Recogida y análisis participativo de medidas ya existentes',
        'Fichas accesibles elaboradas por equipos mixtos',
        'Conjunto de recomendaciones reutilizables por entidades y administraciones',
      ],
    },
    {
      mes: 'Mes 6',
      titulo: 'Escuela ciudadana online',
      objetivo:
        'Reforzar competencias cívicas y democráticas en un formato sin barreras.',
      hitos: [
        'Microcursos accesibles con personas expertas',
        'Materiales en lectura fácil, vídeo adaptado e infografía accesible',
      ],
    },
    {
      mes: 'Mes 7',
      titulo: 'Segundo encuentro presencial',
      objetivo:
        'Diseñar propuestas políticas accesibles y presentarlas en el foro final.',
      hitos: [
        'Foro por la democracia inclusiva',
        'Simulación «El ayuntamiento inclusivo» con propuesta trasladable a los ayuntamientos',
        'Checklist accesible de participación y hoja de ruta de incidencia',
      ],
    },
    {
      mes: 'Mes 8',
      titulo: 'Campañas «Tu voz cuenta»',
      objetivo: 'Sacar el mensaje del grupo y llevarlo a la comunidad.',
      hitos: [
        'Cada asociación lanza una campaña sobre inclusión en la vida política',
        'Formato accesible e híbrido: presencial y digital',
      ],
    },
    {
      mes: 'Mes 9',
      titulo: 'Red de asociaciones por la participación inclusiva',
      objetivo: 'Garantizar que el trabajo continúe cuando el proyecto termine.',
      hitos: ['Primera reunión anual de la red'],
    },
    {
      mes: 'Mes 10',
      titulo: 'Cierre y transferencia',
      objetivo: 'Dejar los resultados documentados, accesibles y reutilizables.',
      hitos: [
        'Informe final accesible con la evaluación del impacto',
        'Recopilación de materiales accesibles y propuestas finales',
        'Recomendaciones para municipios y consolidación de la red',
      ],
    },
  ],
  socios: [
    {
      nombre: 'Estrella del Rif',
      tipo: 'Organización solicitante y coordinadora · organización juvenil',
      pais: 'España (Melilla)',
    },
    {
      nombre: 'Federación de Asociaciones Jóvenes Europeístas de España',
      tipo: 'Organización socia · organización no gubernamental',
      pais: 'España',
    },
    {
      nombre: 'Asociación Talento para el Futuro',
      tipo: 'Organización socia · organización juvenil',
      pais: 'España',
    },
    {
      nombre: 'AEGEE Valencia',
      tipo: 'Organización socia · organización juvenil',
      pais: 'España',
    },
    {
      nombre:
        'Down España — Federación Española de Instituciones para el Síndrome de Down',
      tipo: 'Organización socia · fundación',
      pais: 'España',
    },
    {
      nombre: 'Asociación Juvenil Horizonte Rioja',
      tipo: 'Organización socia · organización no gubernamental',
      pais: 'España',
    },
    {
      nombre: 'Ayuntamiento de Getafe',
      tipo: 'Organización socia · organismo público local',
      pais: 'España',
    },
  ],
  resultados: [
    'Diario Político Inclusivo: herramienta digital accesible donde los participantes documentan su propio recorrido.',
    'Guía de derechos democráticos en lectura fácil.',
    'Mapa físico y digital accesible de espacios de participación política.',
    'Fichas accesibles del Observatorio Juvenil de Barreras y Soluciones, con recomendaciones listas para implementar.',
    'Checklist accesible de participación y hoja de ruta «Del diálogo a la incidencia».',
    'Propuestas ciudadanas accesibles trasladables a los ayuntamientos.',
    'Informe final accesible y Red de asociaciones por la participación inclusiva.',
  ],
  impacto: [
    {
      ambito: 'Jóvenes',
      texto:
        'Al menos el 80 % de los jóvenes participantes mejora sus competencias cívicas, democráticas y digitales. Un mínimo de 30 jóvenes con y sin discapacidad participa directamente en el diseño de propuestas ciudadanas accesibles y al menos 15 jóvenes con discapacidad asumen roles visibles y activos en los procesos de diálogo y simulación política.',
    },
    {
      ambito: 'Entidades',
      texto:
        'Se fortalece la capacidad de al menos 8 entidades para aplicar metodologías inclusivas, integrando materiales y herramientas accesibles en su trabajo habitual.',
    },
    {
      ambito: 'Comunidad',
      texto:
        'Las campañas y contenidos alcanzan al menos a 10.000 jóvenes y la encuesta recoge entre 200 y 500 respuestas. El impacto se mantiene con la consolidación de la red de asociaciones.',
    },
  ],
  orden: 1,
};

// ─────────────────────────────────────────────────────────────────────────────
// KA155-YOU · Accion de inclusion de DiscoverEU
// ─────────────────────────────────────────────────────────────────────────────

export const melillaIsEurope: Proyecto = {
  slug: 'melilla-is-europe',
  titulo: 'Melilla is Europe',
  tituloCorto: 'Melilla is Europe',
  programa: 'Erasmus+ Juventud',
  accion: 'KA155-YOU · Acción de inclusión de DiscoverEU',
  convocatoria: 'Convocatoria 2026, ronda 1',
  agencia: 'INJUVE — Agencia Nacional Española de la Juventud (ES02)',
  inicio: '2026-07-01',
  fin: '2027-06-30',
  fechasLabel: 'Julio de 2026 – junio de 2027',
  duracion: '12 meses',
  estado: 'activo',
  ambito: 'Melilla y viajes por Europa',
  badge: 'KA155 · DiscoverEU',
  badgeColor: 'turquesa',
  resumen:
    'Una experiencia de aprendizaje y viaje para 15 jóvenes de Melilla de 18 a 21 ' +
    'años, en tres grupos de viaje DiscoverEU y un itinerario de seguimiento de seis ' +
    'meses que convierte el aprendizaje del viaje en acciones cívicas y ' +
    'profesionales en la ciudad.',
  problema: [
    'Melilla es una región periférica de España en el norte de África, sin conexión terrestre con Europa, lo que condiciona las oportunidades educativas, profesionales y de movilidad de su juventud.',
    'España cerró 2025 con una tasa de desempleo juvenil del 23,4 %, 8,7 puntos por encima de la media de la UE y la tercera más alta de la Unión (Eurostat, 2026). En Melilla la realidad es más grave: la tasa superó el 58 % (El Faro de Melilla, 2025).',
    'España sigue en 2025 por encima de la media europea de población joven que ni estudia ni trabaja, con un 12,3 %, y Melilla es la región española con más jóvenes en esa situación, con un 18 % (El Faro de Melilla, 2025).',
    'Seis de cada diez jóvenes en España no se sienten representados en el sistema político de su país (Consejo de la Juventud de España, 2025).',
    'Muchos jóvenes de Melilla viven una crisis de identidad y se sienten periféricos respecto a lo que pasa en Europa y a las oportunidades europeas.',
  ],
  objetivoGeneral:
    'Empoderar a la juventud de Melilla a través de tres viajes grupales DiscoverEU ' +
    'y un itinerario de seguimiento de seis meses que transforma el aprendizaje del ' +
    'viaje en acción cívica y profesional en la ciudad.',
  objetivosEspecificos: [
    'Ofrecer a 15 jóvenes de Melilla de 18 a 21 años la oportunidad de explorar países europeos, entender sus raíces, reforzar su conexión con Europa y desarrollar competencias transversales para su futuro personal y profesional.',
    'Transformar su capacidad de encontrar soluciones para su futuro ampliando horizontes mediante actividades de reflexión, intercambio de conocimiento y visitas a entidades europeas de toma de decisiones.',
    'Dotarles de conocimiento, mentalidad emprendedora, herramientas e ideas para aumentar sus posibilidades profesionales y diversificar y mejorar su ciudad.',
    'Conectarles con los valores de la democracia y reforzar su ciudadanía europea mediante el contacto con culturas distintas y la creación de una red por Europa.',
    'Implicarles en entornos multiculturales para mejorar su comprensión, empatía y comunicación, favoreciendo su inclusión e integración.',
    'Elaborar el portfolio digital «Melilla is Europe» con el itinerario del viaje, el conocimiento recogido en las entidades visitadas y la experiencia compartida de los participantes.',
  ],
  destinatarios: [
    '15 jóvenes de Melilla de entre 18 y 21 años, repartidos en tres grupos de viaje de 5 participantes cada uno.',
    'Todos son jóvenes con menos oportunidades: muchos o todos viajan por primera vez o no tienen experiencia previa en movilidad europea.',
    'Afrontan barreras geográficas, económicas, sociales, culturales y educativas, agravadas por la lejanía de la ciudad.',
    'Cada grupo viaja acompañado de una persona de apoyo con perfil de trabajo con juventud.',
  ],
  temas: [
    'Inclusión de jóvenes con menos oportunidades',
    'Ciudadanía europea',
    'Empleabilidad y competencias transversales',
  ],
  actividades: [
    {
      id: 'DEUIN1',
      tipo: 'Viaje grupal DiscoverEU',
      titulo: 'Melilla is Europe I',
      lugar: 'Europa',
      duracion: '9 días de viaje',
      participantes: '5 participantes y 1 persona acompañante',
      descripcion:
        'Primer grupo de viaje. El itinerario se codefine con los participantes en ' +
        'torno a hitos fijos: visita al Parlamento Europeo, parlamentos nacionales, ' +
        'centros juveniles y museos de historia y cultura. Cada día incluye ' +
        'dinamizador conducido por los participantes, control diario, actividad ' +
        'principal, actividad de exploración de la ciudad, sesión de repaso y círculo ' +
        'final de reflexión.',
    },
    {
      id: 'DEUIN2',
      tipo: 'Viaje grupal DiscoverEU',
      titulo: 'Melilla is Europe II',
      lugar: 'Europa',
      duracion: '9 días de viaje',
      participantes: '5 participantes y 1 persona acompañante',
      descripcion:
        'Segundo grupo de viaje, con la misma estructura de aprendizaje: ciclo de ' +
        'Kolb (hacer, reflexionar, conceptualizar, aplicar), visitas de estudio, ' +
        'debates, intercambio entre iguales y talleres. Los contenidos de democracia y ' +
        'emprendimiento se apoyan en el Youth Participation Toolkit y en EntreComp.',
    },
    {
      id: 'DEUIN3',
      tipo: 'Viaje grupal DiscoverEU',
      titulo: 'Melilla is Europe III',
      lugar: 'Europa',
      duracion: '9 días de viaje',
      participantes: '5 participantes y 1 persona acompañante',
      descripcion:
        'Tercer grupo de viaje. Como en los dos anteriores, la actividad avanza de un ' +
        'acompañamiento alto al principio a una dinámica conducida por los propios ' +
        'participantes, para reforzar su toma de decisiones, responsabilidad, confianza ' +
        'y autonomía.',
    },
  ],
  fases: [
    {
      mes: 'Antes del viaje',
      titulo: 'Preparación',
      objetivo:
        'Que cada participante llegue al viaje preparado, seguro y con un plan de aprendizaje propio.',
      hitos: [
        'Sesiones preparatorias y actividades de cohesión de grupo',
        'Plan de aprendizaje individual a partir de la autoevaluación de competencias',
        'Apoyo lingüístico en inglés y atención a necesidades de aprendizaje',
        'Participación de los jóvenes en el diseño y la coordinación del itinerario',
        'Cuaderno de emergencia con contactos y sesión final de instrucciones',
      ],
    },
    {
      mes: 'Durante el viaje',
      titulo: 'Movilidad',
      objetivo:
        'Aprender viajando, con acompañamiento y con reflexión guiada cada día.',
      hitos: [
        'Visitas de estudio al Parlamento Europeo y a entidades europeas de participación',
        'Sistema de parejas de apoyo, controles diarios y círculos de reflexión',
        'Al menos una actividad de educación no formal diaria facilitada por la persona acompañante',
        'Temas de aprendizaje: democracia, empleabilidad, sostenibilidad y competencias digitales',
      ],
    },
    {
      mes: 'Después del viaje',
      titulo: 'Seguimiento y difusión',
      objetivo:
        'Convertir la experiencia del viaje en acción local y en resultados compartidos.',
      hitos: [
        'Sesiones de reflexión y reconocimiento de competencias con Youthpass',
        'Tres sesiones de difusión conducidas por los participantes en centros educativos de Melilla, una por grupo',
        'Portfolio digital «Melilla is Europe»',
        'Evento público final «DiscoverEU Youth Day»',
      ],
    },
  ],
  socios: [
    {
      nombre: 'Estrella del Rif',
      tipo: 'Organización solicitante · organización juvenil',
      pais: 'España (Melilla)',
    },
  ],
  resultados: [
    'Portfolio digital «Melilla is Europe»: un libro electrónico con el itinerario, los resultados de aprendizaje, las visitas de estudio, el conocimiento recogido en las entidades visitadas y los testimonios de los participantes. Alcance previsto: 50 organizaciones y 200 personas.',
    'Evento público final «DiscoverEU Youth Day», que reúne a los tres grupos de viaje con la comunidad local, entidades y responsables públicos.',
    'Tres sesiones de difusión conducidas por los participantes en centros educativos de Melilla, con 20 jóvenes en cada una, 60 en total.',
    'Difusión digital de los propios participantes (publicaciones, vídeos, testimonios), con una huella prevista de 15.000 visualizaciones.',
  ],
  impacto: [
    {
      ambito: 'Jóvenes',
      texto:
        'Más confianza, autoestima, responsabilidad y autonomía; más conocimiento sobre los procesos e instituciones democráticas y el patrimonio cultural europeo; conciencia de su papel como ciudadanía española y europea; competencias laborales y nociones de emprendimiento; y mejor capacidad de decisión, análisis y pensamiento crítico.',
    },
    {
      ambito: 'Asociación',
      texto:
        'Mejores prácticas organizativas en captación, metodologías de educación no formal y creación y prueba de herramientas de inclusión; refuerzo de la capacidad del equipo para trabajar con jóvenes con menos oportunidades; y más visibilidad y credibilidad a nivel local y europeo.',
    },
    {
      ambito: 'Melilla',
      texto:
        'Atraer a la juventud al asociacionismo y al desarrollo de una comunidad juvenil estructurada en la ciudad, en línea con el proyecto de crear un Foro de la Juventud de Melilla que dé voz y participación real a los jóvenes en la vida democrática de la región.',
    },
    {
      ambito: 'España y Europa',
      texto:
        'Desarrollo e inclusión de una región periférica, con más cohesión social y más conexión entre la ciudadanía; y jóvenes europeos con mejor comprensión de los valores de la UE, acercando Melilla a los procesos europeos de toma de decisiones.',
    },
  ],
  orden: 2,
};

export const proyectos: Proyecto[] = [democraciaSinBarreras, melillaIsEurope];

export const proyectosPorSlug = new Map(proyectos.map((p) => [p.slug, p]));

export default proyectos;
