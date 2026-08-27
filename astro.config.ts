import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import rehypeContentPictures from './scripts/rehype-content-pictures.mjs';
import { site } from './src/data/site';

// El fichero es .ts (y no .mjs como en los repos hermanos) precisamente para
// poder importar src/data/site.ts y no volver a escribir el dominio a mano.

// Interruptor para servir el sitio en GitHub Pages sin dominio propio, mientras
// el DNS de estrelladelrif.eu todavia no apunta a Pages:
//   GH_SUBPATH=1 npm run build
// Con el interruptor activo el sitio se sirve bajo /estrelladelrif/. Todos los
// enlaces internos usan `${base}` justamente para que esto funcione sin tocar
// ninguna pagina. En cuanto el dominio este activo se construye sin variable.
const subpath = process.env.GH_SUBPATH === '1';

export default defineConfig({
  site: subpath ? 'https://maximilianomoreno-lopez.github.io' : site.url,
  base: subpath ? '/estrelladelrif' : undefined,
  output: 'static',
  trailingSlash: 'ignore',

  build: {
    // Inline del CSS en el HTML para evitar <link> que bloquean el render. El
    // payload es pequeno y GitHub Pages cachea la hoja de estilos apenas diez
    // minutos, asi que mantenerla externa no compensa.
    inlineStylesheets: 'always',
  },

  markdown: {
    // Astro 6 depreco markdown.rehypePlugins: la forma vigente es construir el
    // procesador con unified() de @astrojs/markdown-remark y pasarlo en
    // `processor`. Con la clave antigua el build seguia funcionando pero avisaba
    // en cada ejecucion y desaparece en la siguiente mayor.
    processor: unified({ rehypePlugins: [rehypeContentPictures] }),
  },

  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/404/'),
      changefreq: 'monthly',
      priority: 0.7,
      serialize(item) {
        // Aqui solo se toca `priority`. El `changefreq` por pagina se descarto a
        // proposito: @astrojs/sitemap lo tipa como enum de la libreria `sitemap`
        // y un literal de cadena no es asignable a un enum de TypeScript, asi que
        // devolverlo rompia `astro check`. Importar el enum obligaria a depender
        // de un paquete transitivo, y el valor apenas influye: los buscadores lo
        // ignoran en la practica y se quedan con el `changefreq: 'monthly'`
        // global de arriba.
        const path = new URL(item.url).pathname;
        if (path === '/' || path === '/estrelladelrif/') {
          return { ...item, priority: 1.0 };
        }
        if (path.includes('/proyectos/') || path.includes('/actualidad/')) {
          return { ...item, priority: 0.9 };
        }
        if (/\/(sobre-nosotros|que-hacemos|participa|transparencia|contacto)\/$/.test(path)) {
          return { ...item, priority: 0.8 };
        }
        return item;
      },
    }),
  ],
});
