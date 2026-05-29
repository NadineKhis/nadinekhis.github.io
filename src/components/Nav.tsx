"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import ThemeToggle from "./ThemeToggle";
import LocaleSwitcher from "./LocaleSwitcher";

const links: { href: "/" | "/about" | "/projects" | "/blog" | "/contact"; labelKey: keyof NavTranslations }[] = [
  { href: "/", labelKey: "home" },
  { href: "/about", labelKey: "about" },
  { href: "/projects", labelKey: "projects" },
  { href: "/blog", labelKey: "blog" },
  { href: "/contact", labelKey: "contact" },
];

type NavTranslations = {
  home: string;
  about: string;
  projects: string;
  blog: string;
  contact: string;
};

export default function Nav() {
  const pathname = usePathname();
  const t = useTranslations("Nav");

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/80 backdrop-blur-md dark:border-stone-800 dark:bg-stone-950/80">
      <nav className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-stone-900 dark:text-stone-50"
        >
          Nadia<span className="text-amber-500">.</span>
        </Link>
        <div className="flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-stone-900 dark:text-stone-50"
                  : "text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-50"
              }`}
            >
              {t(link.labelKey as string)}
            </Link>
          ))}
          <div className="ml-2 flex items-center gap-1 pl-2 border-l border-stone-200 dark:border-stone-800">
            <LocaleSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
