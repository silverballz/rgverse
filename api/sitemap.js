import { SitemapStream } from "sitemap";

export default async function handler(req, res) {
  const sitemap = new SitemapStream({
    hostname: "https://rgverse.vercel.app/",
  });
  sitemap.write({ url: "/", changefreq: "daily", priority: 1.0 });
  sitemap.write({ url: "/opportunities", changefreq: "weekly", priority: 0.8 });
  sitemap.end();

  res.setHeader("Content-Type", "application/xml");
  res.status(200);
  sitemap.pipe(res);
}
