import { compileMDX } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { useMDXComponents } from "@/mdx-components";
import { getSlugsByLocale } from "@/lib/utils";

export function generateStaticParams() {
  return getSlugsByLocale("projects");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "Projects.items" });
  return { title: t(`${slug}.title`), description: t(`${slug}.description`) };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const filePath = path.join(process.cwd(), "content", "projects", slug, `${locale}.mdx`);
  if (!fs.existsSync(filePath)) notFound();

  const source = fs.readFileSync(filePath, "utf-8");

  const { content } = await compileMDX({
    source,
    options: { parseFrontmatter: false },
    components: useMDXComponents(),
  });

  return (
    <div className="mx-auto max-w-3xl px-4 py-20">
      <Link
        href="/projects"
        className="text-sm font-medium text-amber-600 hover:text-amber-500 dark:text-amber-400"
      >
        &larr; {locale === "ru" ? "Все проекты" : "All projects"}
      </Link>
      <article className="mt-8">{content}</article>
    </div>
  );
}
