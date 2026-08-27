import type { APIRoute } from 'astro';
import { raizSitio } from '../lib/urls';

// Ruta y no fichero de public/ por la URL del sitemap: escrita a mano apuntaria
// siempre a estrelladelrif.eu, y en el despliegue de subdirectorio los
// buscadores irian a buscar un sitemap que no existe.
//
// Nota deliberada para quien venga despues: aqui no se bloquea ninguna ruta. El
// sitio no tiene area privada. Y si algun dia la tuviera, la forma correcta de
// mantenerla fuera del indice es la etiqueta <meta name="robots"
// content="noindex">, no un Disallow: para respetar un noindex, Google necesita
// poder rastrear la pagina y leer la etiqueta, asi que bloquearla en robots.txt
// consigue justo lo contrario de lo que se pretende.
export const GET: APIRoute = () =>
  new Response(
    ['User-agent: *', 'Allow: /', '', `Sitemap: ${raizSitio()}/sitemap-index.xml`, ''].join('\n'),
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
