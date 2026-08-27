// Unica fuente de verdad de la identidad del sitio.
//
// En los repos hermanos (Estrellas del Sur y Estrellas de Europa) estos mismos
// datos estan repartidos entre astro.config.mjs, BaseLayout, Navbar, Footer,
// site.webmanifest, robots.txt y una constante `SITE` redeclarada en cada ruta
// dinamica. Cambiar el dominio o el NIF obligaba a tocar seis ficheros y en la
// practica se quedaban desincronizados (el theme_color del manifest de Europa
// no coincide con ningun token de su CSS). Aqui se declara una vez y se importa.

export interface EnlaceNav {
  href: string;
  label: string;
}

export interface RedSocial {
  label: string;
  url: string;
}

export const site = {
  // Identidad
  name: 'Estrella del Rif',
  legalName: 'Estrella del Rif',
  acronym: 'EdR',
  claim: 'Juventud de Melilla, ciudadanía europea',
  description:
    'Asociación juvenil de Melilla. Educación no formal, participación democrática, ' +
    'inclusión y oportunidades europeas para la juventud de la ciudad.',
  founded: 2024,

  // Dominio. Sin `base` porque el sitio vive en la raiz de un dominio propio;
  // el interruptor GH_SUBPATH de astro.config.ts permite servirlo bajo
  // /estrelladelrif/ mientras el DNS todavia no apunta a GitHub Pages.
  domain: 'estrelladelrif.eu',
  url: 'https://estrelladelrif.eu',

  // Datos registrales. Se publican en /transparencia/ y /contacto/ y alimentan
  // el nodo JSON-LD de la organizacion.
  nif: 'G23831845',
  oid: 'E10411785',
  address: {
    street: 'Calle Dolores Carmona Román, 18, 7.º A',
    postalCode: '52002',
    city: 'Melilla',
    region: 'Ciudad Autónoma de Melilla',
    country: 'ES',
  },

  // Contacto institucional. Los correos y telefonos personales de la junta no
  // se publican: la web solo expone el buzon y el telefono de la asociacion.
  email: 'asoc.estrelladelrif@gmail.com',
  phone: '+34 666 028 511',
  phoneHref: '+34666028511',

  // Vacio a proposito hasta que la asociacion confirme los perfiles. En cuanto
  // haya alguno entra en el footer y en `sameAs` del JSON-LD sin tocar nada mas.
  socials: [] as RedSocial[],

  // Marca
  colors: {
    indigo: '#14263f',
    terracota: '#c0563a',
    oro: '#e0a428',
    turquesa: '#2f8f89',
    cal: '#f8f5ef',
  },
  themeColor: '#14263f',
  logo: '/images/logo.svg',
  ogImage: '/og-image.png',
} as const;

// Navegacion principal. Los href se completan con `${base}` en el componente,
// asi que aqui van como rutas absolutas del sitio y siempre con barra final.
export const navLinks: EnlaceNav[] = [
  { href: '/', label: 'Inicio' },
  { href: '/que-hacemos/', label: 'Qué hacemos' },
  { href: '/proyectos/', label: 'Proyectos' },
  { href: '/actualidad/', label: 'Actualidad' },
  { href: '/sobre-nosotros/', label: 'Sobre nosotros' },
  { href: '/contacto/', label: 'Contacto' },
];

// Enlaces que solo viven en el pie.
export const footerLinks: EnlaceNav[] = [
  { href: '/participa/', label: 'Participa' },
  { href: '/transparencia/', label: 'Transparencia' },
  { href: '/privacidad/', label: 'Privacidad' },
  { href: '/terminos/', label: 'Terminos' },
  { href: '/accesibilidad/', label: 'Accesibilidad' },
];

export default site;
