import type { APIRoute } from 'astro';
import texto from '../data/llms.txt?raw';
import { raizSitio } from '../lib/urls';
import { site } from '../data/site';

// llms.txt se sirve como ruta y no como fichero estatico de public/ porque
// contiene URL absolutas. Un fichero de public/ se copia tal cual, asi que
// mientras el sitio se despliega en el subdirectorio de GitHub Pages publicaria
// diecisiete enlaces a un dominio que todavia no resuelve. El texto vive en
// src/data/llms.txt con el dominio definitivo escrito, y aqui se reescribe a la
// raiz real del despliegue.
export const GET: APIRoute = () =>
  new Response(texto.replaceAll(site.url, raizSitio()), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
