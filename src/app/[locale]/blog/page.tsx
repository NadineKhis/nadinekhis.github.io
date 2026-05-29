import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import BlogCard from "@/components/BlogCard";

const posts = [
  {
    slug: "building-resilient-systems",
    date: "2026-04-15",
    tags: ["distributed-systems", "resilience", "go"],
  },
  {
    slug: "profiling-nodejs",
    date: "2026-03-28",
    tags: ["nodejs", "performance", "debugging"],
  },
  {
    slug: "terraform-at-scale",
    date: "2026-02-10",
    tags: ["terraform", "infrastructure", "devops"],
  },
];

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Blog" });

  return (
    <div className="mx-auto max-w-3xl px-4 py-20">
      <h1 className="text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
        {t("title")}
      </h1>
      <p className="mt-4 text-lg text-stone-600 dark:text-stone-400">
        {t("subtitle")}
      </p>

      <div className="mt-12 space-y-10">
        {posts.map((p) => (
          <BlogCard
            key={p.slug}
            slug={p.slug}
            title={t(`posts.${p.slug}.title`)}
            description={t(`posts.${p.slug}.description`)}
            date={p.date}
            tags={p.tags}
            locale={locale}
          />
        ))}
      </div>
    </div>
  );
}
