import Link from "next/link";

interface BlogCardProps {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  locale: string;
}

export default function BlogCard({ slug, title, description, date, tags, locale }: BlogCardProps) {
  return (
    <article>
      <Link href={`/${locale}/blog/${slug}`} className="group block">
        <div className="text-xs font-medium text-amber-600 dark:text-amber-400">
          {new Date(date).toLocaleDateString(locale === "ru" ? "ru-RU" : "en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
        <h3 className="mt-1 text-lg font-semibold text-stone-900 group-hover:text-amber-600 dark:text-stone-50 dark:group-hover:text-amber-400">
          {title}
        </h3>
        <p className="mt-1 text-sm leading-6 text-stone-600 dark:text-stone-400">
          {description}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-stone-100 px-2 py-0.5 text-xs font-medium text-stone-600 dark:bg-stone-800 dark:text-stone-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </article>
  );
}
