# Bitácora de proyecto

Cada proyecto con seguimiento tiene su propia línea temporal en la web, alimentada por la
colección `bitacora`. Sirve como evidencia de ejecución y difusión ante la agencia
nacional, y como forma honesta de contar el proyecto mientras ocurre.

## Publicar un avance

1. Copiar `src/content/bitacora/_plantilla.md` a un nombre nuevo, en minúsculas y con
   guiones: `primera-sesion-preparatoria.md`.
   **El nombre del fichero es el ancla del enlace directo**, así que se elige pensando en
   que va a aparecer en una URL y no se cambia después.
2. Rellenar el frontmatter.
3. Escribir el cuerpo en Markdown.
4. Quitar `draft: true`.
5. Push a `main`.

## Campos

| Campo | Obligatorio | Qué es |
|---|---|---|
| `title` | sí | Titular del avance |
| `project` | sí | Slug del proyecto: `democracia-sin-barreras` o `melilla-is-europe` |
| `date` | sí | Fecha del avance, `YYYY-MM-DD` |
| `kind` | no | `Hito`, `Actividad`, `Material`, `Centro`, `Evaluacion` o `Difusion` (por defecto `Actividad`; **sin tilde**) |
| `phase` | no | Fase del proyecto a la que pertenece |
| `location` | no | Ciudad o "En línea" |
| `description` | no | Una o dos frases de resumen |
| `metrics` | no | Lista de `{ label, value }`: participantes, alcance, materiales |
| `links` | no | Lista de `{ label, url }` |
| `draft` | no | `true` mientras se redacta; el loader lo publica cuando desaparece |

## Reglas de contenido

- **Nunca** se publican datos personales de participantes menores de edad, ni
  identificadores del formulario de solicitud, ni números PRN.
- Los promotores jóvenes aparecen solo con el nombre de pila.
- No se publican importes por participante ni desgloses del presupuesto: la información
  económica va agregada en `/transparencia/`.
- Fotografías: solo con consentimiento de imagen firmado. Si no lo hay, no hay foto.
- Si un avance es un hito importante, plantéate además una noticia en
  `src/content/noticias/`: la bitácora la lee quien sigue el proyecto, la noticia la lee
  quien llega de fuera.

## Añadir un proyecto nuevo

1. Añadir el objeto a `src/data/proyectos.ts` respetando la interfaz `Proyecto`.
2. Crear `src/pages/proyectos/<slug>.astro` pasando ese objeto a la ficha.
3. Empezar a publicar entradas de bitácora con `project: <slug>`.
