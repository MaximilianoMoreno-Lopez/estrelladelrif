# Textos legales

Este fichero describe el único procedimiento válido para tocar `/privacidad/`,
`/terminos/` y `/accesibilidad/`.

## La regla de oro

1. Editar el texto en `src/pages/privacidad.astro`, `src/pages/terminos.astro` o
   `src/pages/accesibilidad.astro`.
2. Subir `LEGAL_VERSION` y `LEGAL_VERSION_LABEL` en `src/lib/legal.js`.
3. **Los dos cambios, en el mismo commit.**

El motivo: este sitio no registra usuarios, así que no hay ningún sitio donde se guarde
qué versión aceptó cada persona. La única prueba de qué texto estaba en vigor en una
fecha determinada es el historial de git. Si el texto y la versión viajan en commits
distintos, esa prueba se rompe.

## Formato de la versión

`LEGAL_VERSION` es la fecha en formato `YYYY-MM-DD`. `LEGAL_VERSION_LABEL` es la misma
fecha escrita en español, tal como se muestra al público ("27 de agosto de 2026").

Si hay que corregir el texto el mismo día de una publicación anterior, se añade sufijo:
`2026-08-27.2`, `2026-08-27.3`. La etiqueta visible no cambia en ese caso.

## Comprobación antes de publicar

- [ ] El texto dice la verdad sobre lo que hace el sitio (sin cookies, sin analítica,
      sin formularios, sin registro). Si eso cambia, el texto cambia **antes**.
- [ ] `LEGAL_VERSION` y `LEGAL_VERSION_LABEL` actualizadas.
- [ ] Un solo commit con las dos cosas.
- [ ] `npm run build` sin errores.
- [ ] Push a `main`.

## Qué NO va en estas páginas

Ni datos personales de miembros o participantes, ni promesas de tratamiento de datos que
la asociación no pueda cumplir, ni texto de plantilla copiado de otra entidad. Si una
cláusula no describe una práctica real de Estrella del Rif, se borra.
