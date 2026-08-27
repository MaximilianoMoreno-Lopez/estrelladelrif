import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../data/site';

// Canal RSS de /actualidad/. El <link rel="alternate"> del BaseLayout ya apunta
// a `${base}/rss.xml`, asi que la ruta de este endpoint no debe cambiar de
// nombre sin actualizar tambien el layout.

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

// El campo `date` de la coleccion admite "YYYY-MM-DD" y "YYYY-MM" (hay noticias
// de las que solo se conoce el mes). Ambas formas son ISO y las parsea el motor,
// pero "YYYY-MM" se interpreta como UTC y "YYYY-MM-DD" tambien, asi que no hay
// desfase entre unas y otras. Se normaliza aqui en vez de en el esquema porque
// el esquema conserva la cadena original para mostrarla tal cual en la web.
//
// Si la fecha no se puede interpretar se devuelve null y la entrada sale sin
// pubDate: preferible a inventar una fecha, que en un lector de feeds ordenaria
// mal la noticia y la marcaria como nueva en cada refresco.
function fechaPublicacion(datos) {
  if (!datos.date) return null;
  const iso = /^\d{4}-\d{2}$/.test(datos.date) ? `${datos.date}-01` : datos.date;
  const fecha = new Date(iso);
  return Number.isNaN(fecha.getTime()) ? null : fecha;
}

export async function GET(context) {
  // Con la coleccion vacia getCollection devuelve [] y rss() genera un canal
  // valido sin <item>. No hace falta ningun caso especial: el feed existe desde
  // el primer despliegue, aunque todavia no haya noticias publicadas.
  const noticias = await getCollection('noticias');

  const items = noticias
    .map((entrada) => ({ entrada, fecha: fechaPublicacion(entrada.data) }))
    .sort((a, b) => (b.fecha?.getTime() ?? 0) - (a.fecha?.getTime() ?? 0))
    .map(({ entrada, fecha }) => ({
      title: entrada.data.title,
      // El id de la entrada es el nombre del fichero sin extension: en Astro 6
      // (Content Layer) es `entry.id`, no `entry.slug`, que ya no existe.
      link: `${base}/actualidad/${entrada.id}/`,
      description: entrada.data.description ?? entrada.data.title,
      categories: [entrada.data.type],
      ...(fecha && { pubDate: fecha }),
    }));

  return rss({
    title: `${site.name} · Actualidad`,
    description: site.description,
    // context.site sale de la clave `site` de astro.config.ts, que cambia con el
    // interruptor GH_SUBPATH. Tomarla de ahi evita fijar el dominio a mano y que
    // el feed apunte al sitio equivocado en las compilaciones de prueba.
    site: context.site,
    items,
    customData: '<language>es-es</language>',
  });
}
