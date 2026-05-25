export default function Footer() {
  return (
    <footer className="border-t border-stone-200 dark:border-stone-800">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <p className="text-sm text-stone-500 dark:text-stone-400">
          &copy; {new Date().getFullYear()} Nadia Khismatullina
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/nadiahki"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-stone-500 transition-colors hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-50"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/nadiahki"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-stone-500 transition-colors hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-50"
          >
            LinkedIn
          </a>
          <a
            href="mailto:nadia@example.com"
            className="text-sm text-stone-500 transition-colors hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-50"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
