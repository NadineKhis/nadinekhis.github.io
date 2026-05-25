import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "content");

export function getSlugs(dir: string): string[] {
  const fullDir = path.join(contentDir, dir);
  if (!fs.existsSync(fullDir)) return [];
  return fs.readdirSync(fullDir).filter((f) => f.endsWith(".mdx")).map((f) => f.replace(/\.mdx$/, ""));
}
