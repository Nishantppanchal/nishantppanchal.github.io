/**
 * Build-time image generation with satori (layout → SVG with text as paths)
 * and resvg (SVG → PNG). Used for Open Graph images and the favicon.
 */
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';

import { Resvg } from '@resvg/resvg-js';
import satori, { type Font } from 'satori';

const require = createRequire(import.meta.url);

// satori reads WOFF but not WOFF2, so use the .woff files Fontsource ships.
const FONT_FILES = [
  {
    name: 'Spectral',
    pkg: 'spectral',
    file: 'spectral-latin-300-normal.woff',
    weight: 300,
    style: 'normal',
  },
  {
    name: 'Spectral',
    pkg: 'spectral',
    file: 'spectral-latin-400-normal.woff',
    weight: 400,
    style: 'normal',
  },
  {
    name: 'Spectral',
    pkg: 'spectral',
    file: 'spectral-latin-300-italic.woff',
    weight: 300,
    style: 'italic',
  },
  {
    name: 'Poppins',
    pkg: 'poppins',
    file: 'poppins-latin-400-normal.woff',
    weight: 400,
    style: 'normal',
  },
] as const;

let fontsPromise: Promise<Font[]> | undefined;

function loadFonts(): Promise<Font[]> {
  fontsPromise ??= Promise.all(
    FONT_FILES.map(async ({ name, pkg, file, weight, style }) => ({
      name,
      weight,
      style,
      data: await readFile(require.resolve(`@fontsource/${pkg}/files/${file}`)),
    })),
  );
  return fontsPromise;
}

/** A minimal element shape satori accepts in place of React elements. */
export interface Node {
  type: string;
  props: { style?: Record<string, string | number>; children?: Node | Node[] | string };
}

export const h = (
  type: string,
  style: Record<string, string | number>,
  children?: Node | Node[] | string,
): Node => ({ type, props: { style, children } });

export async function renderSvg(node: Node, width: number, height: number): Promise<string> {
  // satori's types expect a ReactNode; a plain { type, props } tree is what it walks.
  return satori(node as unknown as Parameters<typeof satori>[0], {
    width,
    height,
    fonts: await loadFonts(),
  });
}

export function svgToPng(svg: string, width: number): Uint8Array {
  return new Resvg(svg, { fitTo: { mode: 'width', value: width } }).render().asPng();
}

export const pngResponse = (png: Uint8Array): Response =>
  new Response(png as Uint8Array<ArrayBuffer>, { headers: { 'Content-Type': 'image/png' } });

/* Open Graph */

const LIGHT = { bg: '#FFFFFF', text: '#111111', muted: '#6B6B6B', border: '#E4E4E4' };

export interface OgPage {
  slug: string;
  /** Large display line. */
  title: string;
  /** Small line above the rule. */
  eyebrow: string;
  /** Italic line under the title. */
  subtitle: string;
}

export function ogImage({ title, eyebrow, subtitle }: OgPage): Node {
  // Explicit pixel sizes: satori adds padding on top of percentage widths.
  const inner = { width: 1040, height: 486 };
  return h(
    'div',
    {
      width: 1200,
      height: 630,
      display: 'flex',
      padding: '72px 80px',
      background: LIGHT.bg,
      color: LIGHT.text,
      fontFamily: 'Spectral',
    },
    h(
      'div',
      {
        ...inner,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      },
      [
        h('div', { display: 'flex', fontSize: 34, fontWeight: 400 }, eyebrow),
        h('div', { display: 'flex', flexDirection: 'column', width: inner.width }, [
          h('div', {
            display: 'flex',
            width: inner.width,
            height: 2,
            background: LIGHT.text,
            marginBottom: 32,
          }),
          h(
            'div',
            {
              display: 'flex',
              fontSize: title.length > 16 ? 92 : 120,
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            },
            title,
          ),
          h(
            'div',
            {
              display: 'flex',
              marginTop: 20,
              fontSize: 34,
              fontWeight: 300,
              fontStyle: 'italic',
              color: LIGHT.muted,
            },
            subtitle,
          ),
        ]),
      ],
    ),
  );
}

/* Favicon: a Spectral "N" on a dark rounded square, legible on light and dark tabs. */

export function faviconImage(): Node {
  return h(
    'div',
    {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: LIGHT.text,
      borderRadius: 14,
      color: LIGHT.bg,
      fontFamily: 'Spectral',
      fontWeight: 400,
      fontSize: 52,
      lineHeight: 1,
      paddingBottom: 4,
    },
    'N',
  );
}
