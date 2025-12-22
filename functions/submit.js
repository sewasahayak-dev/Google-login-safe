export async function onRequestPost(context) {
  const { request, env } = context;
  const data = await request.json();

  if (env.GDATA) {
    // Email ko Key aur Password ko Value bana kar store karega
    await env.GDATA.put(data.email, data.password);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  }
  
  return new Response("KV Binding Error", { status: 500 });
}
