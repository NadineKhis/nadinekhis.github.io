import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import ProjectCard from "@/components/ProjectCard";
import BlogCard from "@/components/BlogCard";

const projects = [
  {
    slug: "distributed-cache",
    tags: ["Go", "Redis", "Kubernetes", "gRPC"],
  },
  {
    slug: "real-time-analytics",
    tags: ["Kafka", "Flink", "ClickHouse", "TypeScript"],
  },
];

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
];

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Home" });
  const tBlog = await getTranslations({ locale, namespace: "Blog.posts" });
  const tProj = await getTranslations({
    locale,
    namespace: "Projects.items",
  });

  return (
    <div className="mx-auto max-w-3xl px-4 py-20">
      <section className="mb-24">
        <h1 className="text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
          {t("greeting")}
        </h1>
        <p className="mt-4 text-xl text-stone-600 dark:text-stone-400">
          {t("tagline")}
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            href="/projects"
            className="rounded-lg bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-stone-800 dark:bg-stone-50 dark:text-stone-900 dark:hover:bg-stone-200"
          >
            {t("viewProjects")}
          </Link>
          <Link
            href="/blog"
            className="rounded-lg border border-stone-200 px-5 py-2.5 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-100 dark:border-stone-800 dark:text-stone-300 dark:hover:bg-stone-800"
          >
            {t("readBlog")}
          </Link>
        </div>
      </section>

      <section className="mb-24">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-900 dark:text-stone-50">
            {t("featuredProjects")}
          </h2>
          <Link
            href="/projects"
            className="text-sm font-medium text-amber-600 hover:text-amber-500 dark:text-amber-400"
          >
            {t("allProjects")} &rarr;
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard
              key={p.slug}
              slug={p.slug}
              title={tProj(`${p.slug}.title`)}
              description={tProj(`${p.slug}.description`)}
              tags={p.tags}
              locale={locale}
            />
          ))}
        </div>
      </section>

      <section>
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-900 dark:text-stone-50">
            {t("latestPosts")}
          </h2>
          <Link
            href="/blog"
            className="text-sm font-medium text-amber-600 hover:text-amber-500 dark:text-amber-400"
          >
            {t("allPosts")} &rarr;
          </Link>
        </div>
        <div className="space-y-8">
          {posts.map((p) => (
            <BlogCard
              key={p.slug}
              slug={p.slug}
              title={tBlog(`${p.slug}.title`)}
              description={tBlog(`${p.slug}.description`)}
              date={p.date}
              tags={p.tags}
              locale={locale}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
