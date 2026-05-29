import Link from "next/link";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  locale: string;
}

export default function ProjectCard({ slug, title, description, tags, locale }: ProjectCardProps) {
  return (
    <Link
      href={`/${locale}/projects/${slug}`}
      className="group block rounded-xl border border-stone-200 bg-white p-6 transition-all hover:border-amber-500/50 hover:shadow-md dark:border-stone-800 dark:bg-stone-900 dark:hover:border-amber-500/50"
    >
      <h3 className="text-lg font-semibold text-stone-900 group-hover:text-amber-600 dark:text-stone-50 dark:group-hover:text-amber-400">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-stone-400">
        {description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-600 dark:bg-stone-800 dark:text-stone-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
