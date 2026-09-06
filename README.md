# Estrella del Rif

Web de **Estrella del Rif**, asociación juvenil sin ánimo de lucro de Melilla constituida
en 2024. Trabajamos con educación no formal para que la juventud de la ciudad participe en
la vida democrática y acceda a las oportunidades europeas.

- Sitio: https://estrelladelrif.eu
- NIF G23831845 · OID Erasmus+ E10411785
- Contacto: asoc.estrelladelrif@gmail.com

## Stack

| Pieza | Elección |
|---|---|
| Framework | Astro 6, salida estática |
| Estilos | CSS nativo, sin framework externo |
| Tipografía | DM Sans + Playfair Display, self-hosted con `@fontsource-variable` |
| Contenido | Markdown con Content Layer de Astro |
| Imágenes | `sharp`, conversión a WebP en el build |
| Alojamiento | GitHub Pages con dominio propio |
| Dependencias en el navegador | ninguna: cero JavaScript de terceros, cero cookies, cero analítica |

## Estructura

```
public/
  CNAME                  dominio propio
  favicon.svg            marca para tamano pequeno (fuente)
  images/logo.svg        marca principal (fuente): yaz tifinagh U+2D63 + estrella de 6 puntas
  images/logo-claro.svg  variante para fondo oscuro (generada)
  og-image.png           imagen social 1200x630 (generada)
  favicon-*.png  apple-touch-icon.png  favicon.ico
scripts/
  generate-brand.mjs     SVG -> favicons, logo claro, og-image
  generate-webp.mjs       public/images/*.jpg|png -> .webp y -card.webp
  rehype-content-pictures.mjs  <img> de Markdown -> <picture> con WebP y lazy
src/
  data/site.ts           identidad de la asociacion y navegacion
  data/proyectos.ts      fichas de los proyectos (fuente de verdad)
  data/llms.txt          resumen del sitio para rastreadores de IA (se sirve por ruta)
  lib/urls.ts            raiz real del despliegue e identificadores de JSON-LD
  content.config.ts      esquemas de las colecciones
  content/noticias/      noticias en Markdown
  content/bitacora/      avances de proyecto en Markdown
  layouts/BaseLayout.astro
  components/            Navbar, Footer, Hero, Stats, Areas, ProyectoCard, Bitacora, EUBanner, Picture
  pages/                 una ruta por fichero
  pages/robots.txt.ts    robots.txt generado, con la URL real del sitemap
  pages/site.webmanifest.ts  manifest generado, con el prefijo real de las rutas
  pages/llms.txt.ts      llms.txt generado desde src/data/llms.txt
  styles/global.css      tokens y utilidades
  lib/legal.js           version vigente de los textos legales
```

## Desarrollo

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # dist/
npm run preview
npm run marca        # regenera los derivados de marca desde los SVG
npx astro check      # comprobacion de tipos
```

## Páginas

| Ruta | Qué contiene |
|---|---|
| `/` | Portada: propuesta, cifras, áreas, proyectos en marcha, novedades |
| `/que-hacemos/` | Las seis áreas de trabajo y el método |
| `/proyectos/` | Catálogo de proyectos |
| `/proyectos/democracia-sin-barreras/` | KA154-YOU · participación política inclusiva |
| `/proyectos/melilla-is-europe/` | KA155-YOU · acción de inclusión de DiscoverEU |
| `/actualidad/` y `/actualidad/<slug>/` | Noticias |
| `/sobre-nosotros/` | Historia, misión, contexto de Melilla, equipo, datos registrales |
| `/participa/` | Cómo participar, voluntariado y adhesión |
| `/transparencia/` | Datos identificativos, junta, financiación pública, documentos |
| `/contacto/` | Correo, teléfono y sede |
| `/privacidad/`, `/terminos/`, `/accesibilidad/` | Textos legales versionados |
| `/rss.xml` | Canal de novedades |

## Despliegue

Cada push a `main` dispara `.github/workflows/deploy.yml`, que comprueba tipos con
`astro check`, construye el sitio y lo publica en GitHub Pages. En **Settings → Pages**:
Source `GitHub Actions`, dominio propio `estrelladelrif.eu` (fijado en `public/CNAME`),
*Enforce HTTPS* activado.

### Volver al subdirectorio de Pages

Si alguna vez hace falta servir el sitio sin dominio propio, en
`https://maximilianomoreno-lopez.github.io/estrelladelrif/`, son dos cambios: borrar
`public/CNAME` y añadir `env: GH_SUBPATH: '1'` al paso *Build* del workflow. **Ninguna
página depende del modo**: los enlaces internos pasan por `${base}` y las URL absolutas
(canonical, Open Graph, JSON-LD, sitemap, robots.txt, manifest y llms.txt) se derivan de
`src/lib/urls.ts`.

DNS del dominio, en Namecheap (Advanced DNS), ya configurado:

| Tipo | Nombre | Valor |
|---|---|---|
| A | `@` | 185.199.108.153 |
| A | `@` | 185.199.109.153 |
| A | `@` | 185.199.110.153 |
| A | `@` | 185.199.111.153 |
| AAAA | `@` | 2606:50c0:8000::153 |
| AAAA | `@` | 2606:50c0:8001::153 |
| AAAA | `@` | 2606:50c0:8002::153 |
| AAAA | `@` | 2606:50c0:8003::153 |
| CNAME | `www` | `maximilianomoreno-lopez.github.io` |

## Requisitos de Google for Nonprofits

Para solicitar **Google Workspace para organizaciones sin ánimo de lucro** (correo propio
gratuito) y **Ad Grants** hacen falta una entidad validada y una web con contenido
sustantivo **en un dominio de la propia organización**. Un subdominio de `github.io` no
sirve: Workspace verifica la propiedad del dominio por DNS y Ad Grants rechaza dominios
gratuitos o compartidos.

Qué requisito cubre cada página:

| Requisito | Dónde está |
|---|---|
| Misión explícita | `/` y `/sobre-nosotros/` |
| Descripción sustantiva de los programas | `/que-hacemos/` y las dos fichas de proyecto |
| Datos de contacto y dirección física | `/contacto/` y el pie de todas las páginas |
| Identificación fiscal de la entidad | `/transparencia/` y el pie |
| Transparencia económica | `/transparencia/` |
| Sin publicidad ni contenido comercial | todo el sitio |
| HTTPS | GitHub Pages con *Enforce HTTPS* |
| Dominio propio | `estrelladelrif.eu`, fijado en `public/CNAME` |

Pasos que quedan por hacer fuera de este repositorio: validar la entidad ante el socio de
TechSoup en España y verificar el dominio en Google añadiendo en Namecheap el registro TXT
que facilite la consola.

## Licencia y créditos

Contenidos © Estrella del Rif. El emblema de la Unión Europea se usa conforme a las
normas de visibilidad del programa Erasmus+.

*Proyectos cofinanciados por la Unión Europea. Las opiniones y puntos de vista expresados
son responsabilidad exclusiva de Estrella del Rif y no reflejan necesariamente la posición
de la Unión Europea ni de la Agencia Nacional Erasmus+.*
