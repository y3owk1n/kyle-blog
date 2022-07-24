import { writeFileSync } from "fs";
import { globby } from "globby";
import prettier from "prettier";

const getDate = new Date().toISOString();

async function generate() {
  const pages = await globby([
    "pages/*.tsx",
    "_posts/*.md",
    "!pages/_*.tsx",
    "!pages/api",
    "!pages/404.tsx",
  ]);

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .map((page) => {
            const path = page
              .replace("pages", "")
              .replace(".tsx", "")
              .replace(".md", "");
            const route = path === "/index" ? "" : path;

            return `
                <url>
                    <loc>${`https://www.kylewong.my${route}`}</loc>
                    <lastmod>${getDate}</lastmod>
                </url>
            `;
          })
          .join("")}
    </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    parser: "html",
  });

  // eslint-disable-next-line no-sync
  writeFileSync("public/sitemap.xml", formatted);
}

generate();
