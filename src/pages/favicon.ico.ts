import type { APIRoute } from 'astro';

import { faviconSvg, pngsToIco, svgToPng } from '../lib/images';

export const GET: APIRoute = () => {
  const svg = faviconSvg();
  const ico = pngsToIco([16, 32, 48].map((size) => ({ size, png: svgToPng(svg, size) })));
  return new Response(ico as Uint8Array<ArrayBuffer>, {
    headers: { 'Content-Type': 'image/x-icon' },
  });
};
