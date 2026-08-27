import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// Astro 6 / Content Layer API. Ojo: el fichero va en src/content.config.ts (raiz
// de src) y no en src/content/config.ts, y las entradas se direccionan por
// `entry.id`, no por `entry.slug`. Los ficheros que empiezan por _ se ignoran,
// asi que _plantilla.md sirve de plantilla sin publicarse.

const noticias = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!**/_*.md'], base: './src/content/noticias' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['Erasmus+', 'DiscoverEU', 'Participacion', 'Accion local', 'Asociacion']),
    // "YYYY-MM" o "YYYY-MM-DD". Se usa para ordenar y para article:published_time.
    date: z.string(),
    dates: z.string().optional(),
    location: z.string().optional(),
    description: z.string().optional(),
    cover: z.string().optional(),
    // Orden manual del listado. Negativo para fijar arriba.
    order: z.number().default(99),
  }),
});

const bitacora = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!**/_*.md'], base: './src/content/bitacora' }),
  schema: z.object({
    title: z.string(),
    // Slug del proyecto al que pertenece la entrada: 'democracia-sin-barreras'
    // o 'melilla-is-europe'. La ficha del proyecto filtra por este campo.
    project: z.string(),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Usa el formato YYYY-MM-DD'),
    kind: z
      .enum(['Hito', 'Actividad', 'Material', 'Centro', 'Evaluacion', 'Difusion'])
      .default('Actividad'),
    phase: z.string().optional(),
    location: z.string().optional(),
    description: z.string().optional(),
    metrics: z.array(z.object({ label: z.string(), value: z.string() })).optional(),
    links: z.array(z.object({ label: z.string(), url: z.string() })).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { noticias, bitacora };
