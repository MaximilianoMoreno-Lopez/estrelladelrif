---
# ─────────────────────────────────────────────────────────────────────────────
# PLANTILLA DE ENTRADA DE BITACORA
#
# Copia este fichero, renombralo con el slug que quieras para la entrada
# (minusculas, sin acentos, guiones en vez de espacios: por ejemplo
# `primer-encuentro-presencial.md`) y borra los comentarios que no necesites.
#
# Este fichero NO se publica: el loader de src/content.config.ts excluye todo lo
# que empieza por guion bajo (`!**/_*.md`), asi que la plantilla puede vivir en
# la propia carpeta de la coleccion sin generar una pagina ni aparecer en las
# fichas de proyecto.
#
# El esquema completo esta en src/content.config.ts. Si un campo obligatorio
# falta o un valor no encaja en su lista cerrada, el build falla con el nombre
# del fichero y del campo; no hay entradas mal formadas publicadas en silencio.
# ─────────────────────────────────────────────────────────────────────────────

# OBLIGATORIO. Titulo de la entrada, en frase, con acentos correctos y sin punto
# final. Es lo que se lee en la bitacora del proyecto, asi que conviene que diga
# que paso y no solo de que iba: "Primer encuentro presencial del consorcio"
# mejor que "Encuentro".
title: 'Titulo de la entrada'

# OBLIGATORIO. Slug del proyecto al que pertenece la entrada. Solo hay dos
# valores validos hoy, y tienen que coincidir con el campo `slug` de
# src/data/proyectos.ts porque la ficha del proyecto filtra la bitacora por el:
#   democracia-sin-barreras
#   melilla-is-europe
project: 'democracia-sin-barreras'

# OBLIGATORIO. Fecha del hecho que se narra (no la de redaccion), en formato
# YYYY-MM-DD. El esquema lo valida con una expresion regular, asi que aqui no
# vale dejar solo el mes: si la actividad se extiende varios dias, pon el dia de
# inicio y detalla el rango en el cuerpo o en `description`.
date: '2026-08-01'

# OPCIONAL con valor por defecto 'Actividad'. Tipo de entrada, de una lista
# cerrada. Define el distintivo con que se muestra:
#   Hito        un paso formal del proyecto: aprobacion, firma, cierre de fase.
#   Actividad   una sesion, taller, encuentro o viaje que ya ha ocurrido.
#   Material    un recurso producido: guia, video, informe, kit didactico.
#   Centro      trabajo hecho en un centro educativo o entidad de acogida.
#   Evaluacion  medicion, encuesta, evaluacion intermedia o final.
#   Difusion    prensa, redes, presentacion publica, evento multiplicador.
kind: 'Actividad'

# OPCIONAL. Fase del proyecto a la que corresponde. Usa el mismo texto que el
# campo `titulo` de la fase en src/data/proyectos.ts (por ejemplo 'Acuerdos y
# puesta en marcha') para que la bitacora y el calendario del proyecto se lean
# como una sola cronologia.
phase: 'Acuerdos y puesta en marcha'

# OPCIONAL. Lugar concreto. Ciudad, o ciudad y espacio si aporta algo:
# 'Melilla', 'En linea', 'Melilla, IES Leopoldo Queipo'.
#
# El KA154 tiene un solo encuentro presencial, en Getafe (el de Valencia se
# elimino en el convenio, ver la cabecera de src/data/proyectos.ts).
location: 'Melilla'

# OPCIONAL. Resumen de una o dos frases. Es el texto que acompana al titulo en
# los listados, asi que tiene que entenderse solo, sin leer el cuerpo. Sin
# exclamaciones y sin adjetivos de folleto.
description: 'Resumen breve de lo que ocurrio, en una o dos frases.'

# OPCIONAL. Datos cuantitativos verificados, como pares etiqueta/valor. Solo
# cifras que consten en un registro real (hoja de firmas, formulario, informe):
# no se estiman ni se redondean al alza. Deja el campo fuera si no hay datos.
metrics:
  - label: 'Participantes'
    value: '24'
  - label: 'Sesiones'
    value: '3'

# OPCIONAL. Enlaces relacionados. Pueden ser externos (con https://) o rutas
# internas del sitio empezando por barra y terminando en barra, como
# '/proyectos/democracia-sin-barreras/'.
#
# Las rutas internas se escriben desde la raiz del sitio, igual que los `navLinks`
# de src/data/site.ts, y sin el prefijo `base`: anteponerlo es tarea del
# componente que pinta el enlace, no de la entrada. Si se escribiera aqui, la
# entrada dejaria de funcionar al cambiar el modo de despliegue.
links:
  - label: 'Ficha del proyecto'
    url: '/proyectos/democracia-sin-barreras/'

# OPCIONAL con valor por defecto false. En true la entrada queda como borrador.
# Ojo: el loader la sigue cargando (el filtro por guion bajo solo afecta al
# nombre del fichero), asi que quien consuma la coleccion tiene que descartar
# las entradas con draft: true. Para un borrador que no debe llegar ni a la
# coleccion, renombra el fichero con guion bajo delante.
draft: true
---

Cuerpo de la entrada en Markdown. Se renderiza dentro del contenedor
`.bit-cuerpo` de src/components/Bitacora.astro, que ya da estilo a parrafos,
negritas, enlaces, listas, citas y encabezados.

Ojo con el nivel de los encabezados, porque no es el de una noticia. En la ficha
de proyecto, Bitacora.astro pinta el titulo de la seccion ("Como va el proyecto")
como `h2` y el titulo de cada entrada como `h3`. Asi que **el cuerpo de una
entrada de bitacora empieza en `####`**, nunca en `#` ni en `##`: un `##` aqui
generaria un `h2` detras de un `h3` dentro de la misma seccion, es decir un salto
hacia atras en la jerarquia. El "empieza en `##`" vale para el cuerpo de una
noticia, donde el `h1` es el titular del hero, pero no aqui.

#### Un apartado, si el texto lo pide

Frases cortas y tono llano. Se cuenta lo que ha pasado, en pasado, y lo que va a
pasar, en futuro. No se anticipan resultados que aun no existen ni se atribuyen
efectos que no se han medido.

Las cifras y las citas llevan su fuente entre parentesis, tal cual, la primera
vez que aparecen: (Eurostat, 2026), (El Faro de Melilla, 2025), (Consejo de la
Juventud de España, 2025).

- Las listas sirven para enumerar acuerdos, materiales o pasos.
- Cada punto, una idea.

Las fotografias van en `public/images/` y se insertan con la sintaxis de imagen
de Markdown, `![Texto alternativo](/images/nombre.png)`. En un `.md` no se pueden
usar componentes de Astro (haria falta MDX, que no esta instalado), asi que aqui
no cabe `Picture`.

Tres reglas al insertar una imagen:

- El texto alternativo es **obligatorio** y describe lo que se ve, no el nombre
  del fichero. Si la imagen es puro adorno, mejor no ponerla.
- La ruta empieza por barra y apunta a `public/`: `/images/nombre.png`.
- De `width`, `height` y la version WebP se encarga
  `scripts/rehype-content-pictures.mjs`, que envuelve la imagen en un `<picture>`
  con `loading="lazy"` y mide el fichero PNG o JPEG para reservar el hueco. Si no
  encuentra el hermano `.webp` sirve solo el original, asi que conviene pasar el
  script de generacion de WebP antes de publicar.
