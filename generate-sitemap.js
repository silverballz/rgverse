const fs = require("fs");
const { SitemapStream } = require("sitemap");
const { createWriteStream } = require("fs");
const path = require("path");

const PAGES_DIR = path.resolve(__dirname, "src", "Page");

function getRoutesFromDir(dir, baseRoute = "") {
  let routes = [];
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      routes = routes.concat(
        getRoutesFromDir(fullPath, baseRoute + "/" + file.toLowerCase()),
      );
    } else if (file.endsWith(".jsx")) {
      let route = baseRoute + "/" + file.replace(/\.jsx$/, "").toLowerCase();
      if (route.endsWith("/home")) route = "/"; // treat Home.jsx as root
      routes.push(route);
    }
  });
  return routes;
}

const dynamicRoutes = getRoutesFromDir(PAGES_DIR);

const pages = [
  ...dynamicRoutes.map((url) => ({
    url,
    changefreq: "weekly",
    priority: url === "/" ? 1.0 : 0.8,
  })),
];

async function generateSitemap() {
  const writeStream = createWriteStream(
    path.resolve(__dirname, "public", "sitemap.xml"),
  );
  const sitemap = new SitemapStream({
    hostname: "https://rgverse.vercel.app/",
  });
  sitemap.pipe(writeStream).on("finish", () => {
    console.log("Sitemap generated successfully");
  });
  pages.forEach((page) => sitemap.write(page));
  sitemap.end();
}

generateSitemap().catch((error) => {
  console.error("Error generating sitemap:", error);
});
