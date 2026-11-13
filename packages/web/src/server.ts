import { resolve } from "node:path";
import app from "./api";

// Serve prerendered marketing pages as real HTML, including a real 404.
// Keep the protected template server untouched.
const port = Number(process.env.PORT ?? require("../../../__ports.cjs").website);
const dist = resolve(import.meta.dirname, "../dist");
const marketingPaths = new Set([
  "/",
  "/zdjecia-do-dokumentow",
  "/sesje-rodzinne",
  "/fotografia-slubna",
  "/polityka-prywatnosci",
]);

const server = Bun.serve({
  port,
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname.startsWith("/api")) return app.fetch(request);
    let path: string;
    try {
      path = decodeURIComponent(url.pathname);
    } catch {
      return new Response("Invalid URL", { status: 400 });
    }
    if (path.includes("..") || path.includes("\\") || path.includes("\0"))
      return new Response("Invalid path", { status: 400 });
    const normalized = path.replace(/\/index\.html$/, "").replace(/\/$/, "") || "/";
    if (marketingPaths.has(normalized)) {
      if (path !== normalized)
        return Response.redirect(`${url.origin}${normalized}${url.search}`, 308);
      const filename = normalized === "/" ? "index.html" : `${normalized.slice(1)}/index.html`;
      const file = Bun.file(resolve(dist, filename));
      if (await file.exists())
        return new Response(file, { headers: { "Content-Type": "text/html; charset=utf-8" } });
    }
    const staticPath = resolve(dist, path.replace(/^\/+/, ""));
    if (staticPath.startsWith(`${dist}/`)) {
      const file = Bun.file(staticPath);
      if (await file.exists()) return new Response(file);
    }
    const fallback = Bun.file(resolve(dist, "404.html"));
    return new Response((await fallback.exists()) ? fallback : "Nie znaleziono strony", {
      status: 404,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  },
});
console.log(`FOTO FILA production server listening on http://localhost:${server.port}`);
