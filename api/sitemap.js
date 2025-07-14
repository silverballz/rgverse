import { SitemapStream, streamToPromise } from "sitemap";

export default async function handler(req, res) {
  const sitemap = new SitemapStream({
    hostname: "https://rgverse.vercel.app/",
  });
  sitemap.write({ url: "/", changefreq: "daily", priority: 1.0 });
  sitemap.write({ url: "/opportunities", changefreq: "weekly", priority: 0.8 });
  sitemap.end();

  const xml = await streamToPromise(sitemap).then((data) => data.toString());
  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(xml);
}
