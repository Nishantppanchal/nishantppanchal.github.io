import type { APIRoute } from 'astro';

import { faviconImage, renderSvg } from '../lib/images';

export const GET: APIRoute = async () =>
  new Response(await renderSvg(faviconImage(), 64, 64), {
    headers: { 'Content-Type': 'image/svg+xml' },
  });
