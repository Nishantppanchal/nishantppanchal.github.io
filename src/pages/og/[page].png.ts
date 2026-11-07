import type { APIRoute, GetStaticPaths } from 'astro';

import { roleLine, site } from '../../data/site';
import { ogImage, pngResponse, renderSvg, svgToPng, type OgPage } from '../../lib/images';

const pages: OgPage[] = [
  {
    slug: 'home',
    eyebrow: site.url.replace(/^https?:\/\//, ''),
    title: site.name,
    subtitle: roleLine,
  },
  {
    slug: 'research',
    eyebrow: site.name,
    title: 'Research',
    subtitle: 'Publications, theses and research projects',
  },
  {
    slug: 'projects',
    eyebrow: site.name,
    title: 'Projects',
    subtitle: 'Things I have built, from first experiments to current tools',
  },
  {
    slug: 'experience',
    eyebrow: site.name,
    title: 'Experience & education',
    subtitle: 'Where I have worked and studied',
  },
];

export const getStaticPaths = (() =>
  pages.map((page) => ({ params: { page: page.slug }, props: { page } }))) satisfies GetStaticPaths;

export const GET: APIRoute<{ page: OgPage }> = async ({ props }) => {
  const svg = await renderSvg(ogImage(props.page), 1200, 630);
  return pngResponse(svgToPng(svg, 1200));
};
