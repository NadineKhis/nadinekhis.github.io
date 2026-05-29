import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  { slug: "distributed-cache", tags: ["Go", "Redis", "Kubernetes", "gRPC"] },
  { slug: "real-time-analytics", tags: ["Kafka", "Flink", "ClickHouse", "TypeScript"] },
  { slug: "api-gateway", tags: ["Go", "Envoy", "Performance", "gRPC"] },
];

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Projects" });

  return (
    <div className="mx-auto max-w-3xl px-4 py-20">
      <h1 className="text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
        {t("title")}
      </h1>
      <p className="mt-4 text-lg text-stone-600 dark:text-stone-400">
        {t("subtitle")}
      </p>

      <div className="mt-12 grid gap-6">
        {projects.map((p) => (
          <ProjectCard
            key={p.slug}
            slug={p.slug}
            title={t(`items.${p.slug}.title`)}
            description={t(`items.${p.slug}.description`)}
            tags={p.tags}
            locale={locale}
          />
        ))}
      </div>
    </div>
  );
}
