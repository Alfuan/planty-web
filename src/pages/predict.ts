import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    return new Response(
      JSON.stringify({ image: (await request.json()).image })
    );
  }

  return new Response(JSON.stringify({}));
};
