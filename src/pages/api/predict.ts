import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request, params }) => {
  //Tratamiento API
  if (request.headers.get("Content-Type") === "application/json") {
    const parsedRequest = (await request.json()).image.split(",")[1];

    const predictResponse = await fetch(
      "http://192.168.0.75:5050/api/v1/model/predict",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: parsedRequest }),
      }
    );

    return new Response(JSON.stringify(await predictResponse.json()));
  }

  return new Response("Unsupported Content-Type", { status: 415 });
};
