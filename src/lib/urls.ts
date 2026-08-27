import { site } from '../data/site';

// Raiz real del sitio en el despliegue actual y los identificadores de JSON-LD
// que dependen de ella.
//
// Con dominio propio la raiz es https://estrelladelrif.eu. Mientras el DNS de
// estrelladelrif.eu no apunte a GitHub Pages, el sitio se construye con
// GH_SUBPATH y vive en https://maximilianomoreno-lopez.github.io/estrelladelrif.
// Los nodos de datos estructurados tienen que declarar URL que resuelvan de
// verdad: un @id, un logo o un `url` apuntando a un dominio que todavia no
// existe es un dato estructurado roto, y ademas dejaria de coincidir con el @id
// del nodo de la organizacion que emite BaseLayout, rompiendo las referencias
// entre nodos.
//
// Se calcula en cada llamada y no en una constante de modulo porque
// import.meta.env se resuelve en tiempo de compilacion por entrada y asi no hay
// riesgo de capturar el valor de otro modo de construccion.
export function raizSitio(): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const origen = new URL(import.meta.env.SITE ?? site.url).origin;
  return `${origen}${base}`;
}

/** @id del nodo canonico de la organizacion, que emite BaseLayout. */
export function idOrg(): string {
  return `${raizSitio()}/#org`;
}

/** @id del nodo WebSite, que emite BaseLayout. */
export function idWeb(): string {
  return `${raizSitio()}/#website`;
}

/**
 * Host, con prefijo de ruta si lo hay, donde el sitio esta publicado de verdad.
 *
 * Lo usan el aviso legal de la LSSI y la ficha de transparencia. Escribir ahi
 * site.domain seria declarar como propio un dominio que todavia no esta
 * registrado, que es exactamente el tipo de afirmacion que una pagina de
 * transparencia no puede permitirse.
 */
export function dominioActual(): string {
  return raizSitio().replace(/^https?:\/\//, '');
}
