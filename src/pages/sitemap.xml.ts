import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
    const generatedSitemap = new URL("/sitemap-0.xml", site ?? "https://vallax.es");
    const body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>${generatedSitemap.toString()}</loc></sitemap>
</sitemapindex>`;

    return new Response(body, {
        headers: { "Content-Type": "application/xml; charset=utf-8" },
    });
};
