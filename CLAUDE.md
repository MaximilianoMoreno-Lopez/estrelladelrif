# Estrella del Rif — web

Sitio estático en **Astro 6**, contenido en Markdown, despliegue automático en GitHub
Pages al hacer push a `main`. Todo el contenido visible está en **español**.

## Reglas duras

- **URLs internas**: siempre `${base}/ruta/`, donde
  `const base = import.meta.env.BASE_URL.replace(/\/$/, '');`. Con barra final.
- **Un único sitio de verdad para la identidad**: `src/data/site.ts` (nombre, dominio,
  NIF, OID, sede, correo, teléfono, redes, colores, navegación). Si un dato de la
  asociación aparece escrito a mano en una página, es un error: se importa de ahí.
- **Fichas de proyecto**: los datos viven en `src/data/proyectos.ts` y las páginas solo
  los renderizan. No se copia texto de proyecto a una página.
- **No se publican** ni los importes de subvención en las fichas de proyecto (van en
  `/transparencia/`), ni los identificadores de formulario de solicitud, ni números PRN,
  ni datos personales de participantes, ni correos o teléfonos personales del equipo.
- **Textos legales**: al cambiar `/privacidad/`, `/terminos/` o `/accesibilidad/`, subir
  `LEGAL_VERSION` y `LEGAL_VERSION_LABEL` en `src/lib/legal.js` **en el mismo commit**.
  Ver `LEGAL.md`.
- **Content Layer de Astro 6**: la configuración está en `src/content.config.ts` (raíz de
  `src/`, no en `src/content/config.ts`) y las entradas se direccionan por `entry.id`,
  **no** por `entry.slug`. Se renderiza con
  `import { render } from 'astro:content'` y `await render(entry)`.
- **CSS nativo**, sin Tailwind. Tokens y utilidades en `src/styles/global.css`; el resto,
  `<style>` scoped por componente. Fuentes self-hosted con `@fontsource-variable`, sin
  peticiones a Google Fonts.
- **Cero emojis** en la interfaz: los iconos son SVG inline inyectados con `set:html`.
- Para **texto** sobre fondo claro usar `--terracota-texto` y `--turquesa-texto`; los
  colores de marca puros no llegan a 4,5:1. `--oro` solo sobre `--indigo` o como gráfico.
- La banda `EUBanner` va solo en fichas de proyecto y noticias de proyecto, nunca en
  páginas institucionales.

## Identidad

```
Estrella del Rif (EdR) · asociación juvenil sin ánimo de lucro · constituida en 2024
NIF G23831845 · OID Erasmus+ E10411785
Calle Dolores Carmona Román, 18, 7.º A · 52002 Melilla
asoc.estrelladelrif@gmail.com · +34 666 028 511
Junta: Mohamed Abdelkader Kichouh (presidente) · Pablo Sánchez Ruiz (vicepresidente)
Colores: indigo #14263f · terracota #c0563a · oro #e0a428 · turquesa #2f8f89 · cal #f8f5ef
Logo: public/images/logo.svg (fondo claro) y logo-claro.svg (fondo oscuro)
OG image: public/og-image.png
```

## Marca

Los SVG fuente son `public/images/logo.svg` y `public/favicon.svg`. Todo lo demás
(favicons PNG, `favicon.ico`, `apple-touch-icon`, `logo-claro.svg`, `logo-1024.png`,
`og-image.png`) lo genera `npm run marca` con sharp. **No editar los derivados a mano**:
se sobreescriben. La geometría del arco está documentada dentro de `logo.svg`.

## Comandos

```bash
npm install
npm run dev        # servidor local
npm run build      # genera WebP y construye en dist/
npm run preview
npm run marca      # regenera favicons, logo claro y og-image desde los SVG
npm run webp       # solo el pipeline de imágenes
```

## Despliegue

Push a `main` → `.github/workflows/deploy.yml` construye y publica (~2 min).
En Settings → Pages: Source `GitHub Actions`, dominio propio `estrelladelrif.eu`
(fijado en `public/CNAME`), Enforce HTTPS activado.

Mientras el DNS de `estrelladelrif.eu` no apunte a GitHub Pages, el sitio se puede
construir para el subdirectorio de Pages con `GH_SUBPATH=1 npm run build`. Por eso todos
los enlaces internos pasan por `${base}`: sin esa convención habría que reescribirlos al
migrar.

## Publicar contenido

- **Noticia**: nuevo `.md` en `src/content/noticias/`. Campos en `src/content.config.ts`.
  Los valores de `type` van **sin tilde** (`Participacion`, `Accion local`).
- **Avance de proyecto**: copiar `src/content/bitacora/_plantilla.md`, poner `project`
  igual al slug del proyecto y quitar `draft: true`. Ver `BITACORA.md`.
- Los ficheros que empiezan por `_` los ignora el loader.
