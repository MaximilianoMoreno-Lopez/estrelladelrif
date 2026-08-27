// Genera todos los derivados de marca a partir de dos SVG fuente:
//
//   public/images/logo.svg   la marca sobre fondo claro
//   public/favicon.svg       la marca recalculada para tamano pequeno
//
// Se ejecuta con:  npm run marca
//
// Los dos repos hermanos (Estrellas del Sur y Estrellas de Europa) exportaron
// sus favicons y su og-image a mano una sola vez y el resultado se desincronizo:
// en Europa el background_color del manifest pertenece a una paleta anterior y en
// el Sur quedo un favicon-144x144.png que ya no enlaza nadie. Aqui todo sale de
// los dos SVG, asi que retocar la marca es reeditar un fichero y reejecutar.
//
// Importante: la geometria del arco NO se copia aqui. Una primera version de este
// script llevaba el trazado duplicado en la plantilla de la imagen social, se
// corrigio el logo y la imagen social siguio publicando el arco antiguo. Ahora se
// lee el contenido de logo.svg y se reinyecta.
//
// No forma parte de `npm run build`: la marca cambia una vez al ano, no en cada
// despliegue, y los PNG se versionan en el repositorio.

import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const raiz = process.cwd();
const p = (...partes) => resolve(raiz, ...partes);

const INDIGO = '#14263f';
const CAL = '#f8f5ef';
const ORO = '#e0a428';

const logoFuente = readFileSync(p('public/images/logo.svg'), 'utf8');
const faviconSvg = readFileSync(p('public/favicon.svg'));

// ─── Variante para fondo oscuro ────────────────────────────────────────────
// Unico cambio: el arco pasa de indigo a blanco de cal. El zocalo de terracota
// y la estrella de oro funcionan igual sobre claro y sobre oscuro.
const logoClaro = logoFuente.replaceAll(`stroke="${INDIGO}"`, `stroke="${CAL}"`);
writeFileSync(p('public/images/logo-claro.svg'), logoClaro);
console.log('images/logo-claro.svg');

// Contenido interior del SVG, para reinyectarlo dentro de otros lienzos.
const interior = (svg) => svg.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
const marcaClara = interior(logoClaro);

// ─── Favicons PNG ──────────────────────────────────────────────────────────
// 16/32/48 los pide el navegador, 96 lo usan algunos lectores de marcadores,
// 180 es apple-touch-icon, 192/512 los exige site.webmanifest para instalar.
for (const size of [16, 32, 48, 96, 192, 512]) {
  await sharp(faviconSvg, { density: 384 })
    .resize(size, size)
    .png({ compressionLevel: 9 })
    .toFile(p(`public/favicon-${size}x${size}.png`));
  console.log(`favicon-${size}x${size}.png`);
}

await sharp(faviconSvg, { density: 384 })
  .resize(180, 180)
  .png({ compressionLevel: 9 })
  .toFile(p('public/apple-touch-icon.png'));
console.log('apple-touch-icon.png');

// favicon.ico. sharp no escribe ICO, pero un ICO puede contener PNG tal cual
// (formato PNG-in-ICO, entendido por todo navegador desde IE11), asi que se
// construye la cabecera a mano con los tres tamanos clasicos.
const iconos = await Promise.all(
  [16, 32, 48].map(async (size) => ({
    size,
    datos: await sharp(faviconSvg, { density: 384 })
      .resize(size, size)
      .png({ compressionLevel: 9 })
      .toBuffer(),
  })),
);

const cabecera = Buffer.alloc(6 + 16 * iconos.length);
cabecera.writeUInt16LE(0, 0); // reservado
cabecera.writeUInt16LE(1, 2); // tipo 1 = icono
cabecera.writeUInt16LE(iconos.length, 4);
let desplazamiento = cabecera.length;
iconos.forEach((icono, i) => {
  const base = 6 + i * 16;
  cabecera.writeUInt8(icono.size, base + 0); // ancho
  cabecera.writeUInt8(icono.size, base + 1); // alto
  cabecera.writeUInt8(0, base + 2); // entradas de paleta
  cabecera.writeUInt8(0, base + 3); // reservado
  cabecera.writeUInt16LE(1, base + 4); // planos de color
  cabecera.writeUInt16LE(32, base + 6); // bits por pixel
  cabecera.writeUInt32LE(icono.datos.length, base + 8);
  cabecera.writeUInt32LE(desplazamiento, base + 12);
  desplazamiento += icono.datos.length;
});
writeFileSync(p('public/favicon.ico'), Buffer.concat([cabecera, ...iconos.map((i) => i.datos)]));
console.log('favicon.ico');

// ─── Logo en PNG ───────────────────────────────────────────────────────────
// Para donde no se puede usar SVG: firmas de correo, plantillas de oficina,
// formularios de las agencias.
await sharp(Buffer.from(logoFuente), { density: 1600 })
  .resize(1024, 1024)
  .png({ compressionLevel: 9 })
  .toFile(p('public/images/logo-1024.png'));
console.log('images/logo-1024.png');

// ─── Imagen social (Open Graph) ────────────────────────────────────────────
// 1200x630 es lo que piden Facebook, LinkedIn, WhatsApp y Twitter/X.
// El logotipo va como texto SVG con pila de respaldo serif: la familia real
// (Playfair Display) no esta instalada en el sistema que ejecuta el script, asi
// que quien renderiza es Georgia. Es aceptable para una imagen fija; si algun
// dia se quiere el tipo exacto habria que convertir el texto a trazados.
// Los acentos van como entidades numericas para no depender de como interprete
// librsvg la codificacion del buffer.
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="fondo" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${INDIGO}"/>
      <stop offset="62%" stop-color="#1d3557"/>
      <stop offset="100%" stop-color="#24406a"/>
    </linearGradient>
    <radialGradient id="brillo" cx="0.72" cy="0.44" r="0.6">
      <stop offset="0%" stop-color="${ORO}" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="${ORO}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#fondo)"/>
  <rect width="1200" height="630" fill="url(#brillo)"/>

  <!-- La marca ocupa 64x64 en su lienzo original; a escala 4.6 mide 294 px y
       centrada verticalmente arranca en y = (630 - 294) / 2 = 168, mas 22 de ajuste optico. -->
  <g transform="translate(104, 190) scale(4.6)">${marcaClara}</g>

  <text x="450" y="307" font-family="Playfair Display, Georgia, serif" font-size="82" font-weight="700" fill="#ffffff">Estrella del Rif</text>
  <text x="453" y="367" font-family="DM Sans, Arial, sans-serif" font-size="32" fill="${ORO}" letter-spacing="1.4">Melilla &#183; Juventud &#183; Europa</text>
  <text x="453" y="424" font-family="DM Sans, Arial, sans-serif" font-size="26" fill="#c9d2e0">Asociaci&#243;n juvenil &#183; Educaci&#243;n no formal &#183; Erasmus+</text>
</svg>`;

await sharp(Buffer.from(og)).png({ compressionLevel: 9 }).toFile(p('public/og-image.png'));
console.log('og-image.png');

console.log('\nMarca regenerada.');
