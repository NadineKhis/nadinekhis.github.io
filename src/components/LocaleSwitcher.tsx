"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const pathname = usePathname();

  const otherLocale = pathname.startsWith("/ru") ? "en" : "ru";

  return (
    <Link
      href={pathname}
      locale={otherLocale}
      className="flex h-9 w-9 items-center justify-center rounded-lg text-xs font-semibold uppercase tracking-wider text-stone-500 transition-colors hover:bg-stone-100 hover:text-stone-900 dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-stone-50"
      aria-label={`Switch to ${otherLocale === "en" ? "English" : "Russian"}`}
    >
      {t(otherLocale)}
    </Link>
  );
}
