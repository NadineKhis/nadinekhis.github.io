import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "About" });

  const skills = [
    { category: t("skillGroups.languages"), items: ["TypeScript", "JavaScript", "Python", "Go"] },
    { category: t("skillGroups.backend"), items: ["Node.js", "WebSockets", "gRPC", "RabbitMQ", "AWS Lambda"] },
    { category: t("skillGroups.data"), items: ["MongoDB", "DynamoDB", "Redis", "Minio"] },
    { category: t("skillGroups.infra"), items: ["Docker", "Kubernetes", "CI/CD", "Prometheus", "Grafana"] },
    { category: t("skillGroups.ai"), items: ["Ollama", "Claude", "Opencode", "LLM API", "Prompt Engineering"] },
  ];

  const myofficeBullets = Array.from({ length: 8 }, (_, i) => t(`myoffice.bullets.${i}`));
  const epamBullets = Array.from({ length: 5 }, (_, i) => t(`epam.bullets.${i}`));

  return (
    <div className="mx-auto max-w-3xl px-4 py-20">
      <h1 className="text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
        {t("title")}
      </h1>

      <section className="mt-12 space-y-6">
        <p className="text-lg leading-8 text-stone-600 dark:text-stone-400">{t("p1")}</p>
        <p className="text-lg leading-8 text-stone-600 dark:text-stone-400">{t("p2")}</p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight text-stone-900 dark:text-stone-50">
          {t("experience")}
        </h2>
        <div className="mt-8 space-y-8">
          <div className="border-l-2 border-amber-500 pl-4">
            <h3 className="font-semibold text-stone-900 dark:text-stone-50">
              {t("myoffice.title")}
            </h3>
            <p className="text-sm text-amber-600 dark:text-amber-400">
              {t("myoffice.company")} &middot; {t("myoffice.period")}
            </p>
            <p className="mt-2 text-sm font-medium text-stone-500 dark:text-stone-400">
              {t("myoffice.stack")}
            </p>
            <div className="mt-4 space-y-3 text-stone-600 dark:text-stone-400">
              <p>{t("myoffice.desc")}</p>
              <ul className="ml-5 list-disc space-y-2">
                {myofficeBullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-l-2 border-stone-300 pl-4 dark:border-stone-700">
            <h3 className="font-semibold text-stone-900 dark:text-stone-50">
              {t("epam.title")}
            </h3>
            <p className="text-sm text-stone-500 dark:text-stone-400">
              {t("epam.company")} &middot; {t("epam.period")}
            </p>
            <p className="mt-2 text-sm font-medium text-stone-500 dark:text-stone-400">
              {t("epam.stack")}
            </p>
            <div className="mt-4 space-y-3 text-stone-600 dark:text-stone-400">
              <ul className="ml-5 list-disc space-y-2">
                {epamBullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight text-stone-900 dark:text-stone-50">
          {t("skills")}
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                {group.category}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-stone-100 px-3 py-1.5 text-sm font-medium text-stone-700 dark:bg-stone-800 dark:text-stone-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
