import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Home" });

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
    </div>
  );
}
