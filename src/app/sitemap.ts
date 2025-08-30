// app/sitemap.ts
import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const BASE_URL = "https://hikasami.com";

// Рекурсивно обходим директории и собираем пути ко всем .mdx файлам
function getMdxRoutes(dir: string, baseRoute = ""): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let routes: string[] = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      routes = routes.concat(
        getMdxRoutes(path.join(dir, entry.name), `${baseRoute}/${entry.name}`)
      );
    } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
      const name = entry.name.replace(/\.mdx$/, "");

      // index.mdx → /route/
      const route = name === "index"
        ? `${baseRoute || "/"}`
        : `${baseRoute}/${name}`;

      routes.push(route);
    }
  }

  return routes;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const docsDir = path.join(process.cwd(), "content"); // здесь лежат твои mdx-страницы
  const routes = getMdxRoutes(docsDir);

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "/" ? 1.0 : 0.8,
  }));
}
