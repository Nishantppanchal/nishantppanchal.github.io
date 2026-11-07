import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

import { defineCollection } from 'astro:content';
import { glob, type Loader } from 'astro/loaders';
import { z } from 'astro/zod';
import { parse as parseYaml } from 'yaml';

const link = z.object({
  label: z.string().min(1),
  href: z.url(),
});

/** "2024" or "2024-02". A bare 2024 in YAML is a number, so coerce it first. */
const yearMonth = z.coerce.string().regex(/^\d{4}(-(0[1-9]|1[0-2]))?$/, 'Use YYYY or YYYY-MM');

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z
    .object({
      type: z.enum([
        'Journal article',
        'Conference paper',
        'Honours thesis',
        'Research project',
        'Preprint',
      ]),
      title: z.string().min(1),
      /** Year the work was done; used for grouping. */
      year: z.number().int(),
      /** Publication year, if different from `year`. */
      published: z.number().int().optional(),
      authors: z.array(z.string().min(1)).optional(),
      venue: z.string().min(1),
      links: z.array(link).default([]),
      /** Optional tie-breaker within a year: lower comes first. */
      order: z.number().default(0),
      draft: z.boolean().default(false),
    })
    .strict(),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z
    .object({
      title: z.string().min(1),
      year: z.number().int(),
      stack: z.string().min(1),
      summary: z.string().min(1),
      links: z.array(link).default([]),
      /** Optional tie-breaker within a year: lower comes first. */
      order: z.number().default(0),
      draft: z.boolean().default(false),
    })
    .strict(),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z
    .object({
      org: z.string().min(1),
      /** The organisation's location, shown next to its name. */
      location: z.string().min(1),
      /** Optional: where this particular role was based, if different. */
      roleLocation: z.string().min(1).optional(),
      title: z.string().min(1),
      start: yearMonth,
      end: yearMonth.or(z.literal('now')),
      highlights: z.array(z.string().min(1)).default([]),
      draft: z.boolean().default(false),
    })
    .strict(),
});

const education = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/education' }),
  schema: z
    .object({
      degree: z.string().min(1),
      school: z.string().min(1),
      start: yearMonth,
      end: yearMonth.or(z.literal('now')),
      /** Display order: lower comes first. */
      order: z.number(),
      draft: z.boolean().default(false),
    })
    .strict(),
});

/**
 * Awards live in a single YAML list, shown in file order. Unlike Astro's
 * built-in `file()` loader, this one needs no `id` per item and fails the
 * build when the file is missing or malformed.
 */
function yamlListLoader(path: string): Loader {
  return {
    name: 'yaml-list-loader',
    load: async ({ store, parseData, config, watcher, logger }) => {
      const fileUrl = new URL(path, config.root);
      const filePath = fileURLToPath(fileUrl);

      const sync = async () => {
        const raw: unknown = parseYaml(await readFile(fileUrl, 'utf8'));
        if (!Array.isArray(raw)) {
          throw new Error(`${path} must contain a YAML list.`);
        }
        store.clear();
        for (const [index, item] of raw.entries()) {
          if (typeof item !== 'object' || item === null) {
            throw new Error(`${path}: item ${index + 1} must be a mapping.`);
          }
          const id = String(index + 1).padStart(3, '0');
          const data = await parseData({
            id,
            data: { ...(item as Record<string, unknown>), position: index },
            filePath,
          });
          store.set({ id, data, filePath: path });
        }
      };

      await sync();

      watcher?.add(filePath);
      watcher?.on('change', async (changed) => {
        if (changed !== filePath) return;
        try {
          await sync();
          logger.info(`Reloaded ${path}`);
        } catch (error) {
          logger.error(String(error));
        }
      });
    },
  };
}

const awards = defineCollection({
  loader: yamlListLoader('src/content/awards.yaml'),
  schema: z
    .object({
      year: z.union([z.string().min(1), z.number().int()]).transform(String),
      text: z.string().min(1),
      /** Set by the loader from the item's place in the file. */
      position: z.number().int(),
    })
    .strict(),
});

export const collections = { research, projects, experience, education, awards };
