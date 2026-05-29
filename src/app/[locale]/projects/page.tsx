import { getTranslations, setRequestLocale } from "next-intl/server";

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

      <div className="mt-12 text-stone-500 dark:text-stone-400">
        Coming soon.
      </div>
    </div>
  );
}
