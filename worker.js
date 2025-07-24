export default {
  async fetch(request, env, ctx) {
    const response = await fetch(request);
    const newHeaders = new Headers(response.headers);
    
    // CSP হেডার কাস্টমাইজ করুন (নিচের লাইনটি এডিট করুন)
    newHeaders.set(
      "Content-Security-Policy", 
      "frame-ancestors 'self' https://motionmedia.motioncut.xyz"
    );
    
    return new Response(response.body, {
      status: response.status,
      headers: newHeaders
    });
  }
}
