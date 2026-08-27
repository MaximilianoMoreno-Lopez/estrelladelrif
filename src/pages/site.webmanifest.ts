import type { APIRoute } from 'astro';
import { site } from '../data/site';

// Ruta y no fichero de public/ porque `start_url` y las rutas de los iconos
// dependen del prefijo del despliegue: con el manifest escrito a mano, instalar
// el sitio desde el subdirectorio de GitHub Pages abria la raiz del dominio
// github.io en vez del sitio.
export const GET: APIRoute = () => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return new Response(
    JSON.stringify(
      {
        name: site.name,
        short_name: site.name,
        description: site.description,
        icons: [
          { src: `${base}/favicon-192x192.png`, type: 'image/png', sizes: '192x192' },
          { src: `${base}/favicon-512x512.png`, type: 'image/png', sizes: '512x512' },
        ],
        theme_color: site.themeColor,
        background_color: site.themeColor,
        display: 'standalone',
        start_url: `${base}/`,
        lang: 'es',
      },
      null,
      2,
    ),
    { headers: { 'Content-Type': 'application/manifest+json; charset=utf-8' } },
  );
};
