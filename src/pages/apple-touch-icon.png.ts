import type { APIRoute } from 'astro';

import { faviconSvg, pngResponse, svgToPng } from '../lib/images';

export const GET: APIRoute = () => pngResponse(svgToPng(faviconSvg({ rounded: false }), 180));
