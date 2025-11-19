// app/sitemap.ts
import { NextResponse } from "next/server";

const BASE_URL = "https://colossalcodes.vercel.app";

export async function GET() {
  const staticPages = [
    "",
    "typescript",
    "rust",
    "devops",
    "projects",
    "blog",
    "about",
    "contact",
  ];

  const pages = staticPages
    .map((path) => {
      const url = `${BASE_URL}/${path}`.replace(/\/$/, "");
      return `
        <url>
          <loc>${url}</loc>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>
      `;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages}
    </urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=0, s-maxage=3600", // server cache for 1 hour
    },
  });
}
