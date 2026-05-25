import type { MDXComponents } from "mdx/types";

const components = {
  h1: ({ children, ...props }) => (
    <h1 className="text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 className="mt-12 mb-4 text-2xl font-semibold tracking-tight text-stone-900 dark:text-stone-50" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="mt-8 mb-3 text-xl font-semibold tracking-tight text-stone-900 dark:text-stone-50" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }) => (
    <p className="mb-4 leading-7 text-stone-600 dark:text-stone-400" {...props}>
      {children}
    </p>
  ),
  a: ({ children, href, ...props }) => (
    <a
      href={href}
      className="font-medium text-amber-600 underline decoration-amber-600/30 underline-offset-2 transition-colors hover:decoration-amber-600 dark:text-amber-400 dark:decoration-amber-400/30 dark:hover:decoration-amber-400"
      {...props}
    >
      {children}
    </a>
  ),
  ul: ({ children, ...props }) => (
    <ul className="mb-4 ml-6 list-disc space-y-1 text-stone-600 dark:text-stone-400" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="mb-4 ml-6 list-decimal space-y-1 text-stone-600 dark:text-stone-400" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => <li {...props}>{children}</li>,
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="mb-4 border-l-4 border-amber-500 pl-4 italic text-stone-600 dark:text-stone-400"
      {...props}
    >
      {children}
    </blockquote>
  ),
  code: ({ children, className, ...props }) => {
    const isInline = !className;
    if (isInline) {
      return (
        <code
          className="rounded bg-stone-100 px-1.5 py-0.5 text-sm font-mono text-stone-800 dark:bg-stone-800 dark:text-stone-200"
          {...props}
        >
          {children}
        </code>
      );
    }
    return (
      <pre className="mb-4 overflow-x-auto rounded-lg bg-stone-900 p-4 text-sm text-stone-100 dark:bg-stone-950">
        <code className={className} {...props}>
          {children}
        </code>
      </pre>
    );
  },
  pre: ({ children, ...props }) => <>{children}</>,
  hr: (props) => <hr className="my-8 border-stone-200 dark:border-stone-800" {...props} />,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
