export async function onRequest(context) {
  if (!context.env.GATEWAY) {
    return new Response("GATEWAY service binding is missing", {
      status: 500,
    });
  }

  return context.env.GATEWAY.fetch(context.request);
}
