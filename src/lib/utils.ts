import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "content");

export function getSlugs(dir: string): string[] {
  const fullDir = path.join(contentDir, dir);
  if (!fs.existsSync(fullDir)) return [];
  return fs.readdirSync(fullDir).filter((f) => f.endsWith(".mdx")).map((f) => f.replace(/\.mdx$/, ""));
}

export function getSlugsByLocale(dir: string): { locale: string; slug: string }[] {
  const dirs: { locale: string; slug: string }[] = [];
  const fullDir = path.join(contentDir, dir);
  if (!fs.existsSync(fullDir)) return [];
  const entries = fs.readdirSync(fullDir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      const localeDir = path.join(fullDir, entry.name);
      const files = fs.readdirSync(localeDir);
      for (const file of files) {
        if (file.endsWith(".mdx")) {
          dirs.push({ slug: entry.name, locale: file.replace(/\.mdx$/, "") });
        }
      }
    }
  }
  return dirs;
}
