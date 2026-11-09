import type { APIRoute } from 'astro';
import { buildSearchIndex } from '../utils/searchData';

export const GET: APIRoute = () => {
  const index = buildSearchIndex();
  return new Response(JSON.stringify(index), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
