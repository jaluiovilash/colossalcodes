export default function sitemap() {
  const BASE_URL = "https://colossalcodes.vercel.app";

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

  return staticPages.map((path) => ({
    url: `${BASE_URL}/${path}`.replace(/\/$/, ""),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));
}
