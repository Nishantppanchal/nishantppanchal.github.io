import type { APIRoute } from 'astro';

import { faviconImage, pngResponse, renderSvg, svgToPng } from '../lib/images';

export const GET: APIRoute = async () =>
  pngResponse(svgToPng(await renderSvg(faviconImage(), 64, 64), 180));
