import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
};

const skills = [
  { category: "Languages", items: ["TypeScript", "Go", "Python", "Rust", "SQL"] },
  { category: "Backend", items: ["Node.js", "Express", "FastAPI", "gRPC", "GraphQL"] },
  { category: "Infrastructure", items: ["Kubernetes", "Docker", "Terraform", "AWS", "GCP"] },
  { category: "Data", items: ["PostgreSQL", "Redis", "Kafka", "ClickHouse", "Flink"] },
];

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20">
      <h1 className="text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
        About
      </h1>

      <section className="mt-12 space-y-6">
        <p className="text-lg leading-8 text-stone-600 dark:text-stone-400">
          I&apos;m a software engineer who loves building systems that scale. I&apos;ve spent
          the last several years designing distributed systems, optimizing performance, and
          occasionally breaking things in production so I can learn how to fix them better.
        </p>
        <p className="text-lg leading-8 text-stone-600 dark:text-stone-400">
          I believe in writing code that&apos;s boring in the right ways — clear, testable,
          and boringly reliable in production. When I&apos;m not debugging a distributed
          trace, I&apos;m writing about what I&apos;ve learned or contributing to open source.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight text-stone-900 dark:text-stone-50">
          Experience
        </h2>
        <div className="mt-8 space-y-8">
          <div className="border-l-2 border-amber-500 pl-4">
            <h3 className="font-semibold text-stone-900 dark:text-stone-50">
              Senior Software Engineer
            </h3>
            <p className="text-sm text-amber-600 dark:text-amber-400">
              Company Name &middot; 2024 &ndash; Present
            </p>
            <p className="mt-2 text-stone-600 dark:text-stone-400">
              Leading the platform engineering team. Designed a distributed caching layer
              that reduced p99 latency by 60%. Mentoring engineers and driving architectural
              decisions.
            </p>
          </div>
          <div className="border-l-2 border-stone-300 pl-4 dark:border-stone-700">
            <h3 className="font-semibold text-stone-900 dark:text-stone-50">
              Software Engineer
            </h3>
            <p className="text-sm text-stone-500 dark:text-stone-400">
              Company Name &middot; 2021 &ndash; 2024
            </p>
            <p className="mt-2 text-stone-600 dark:text-stone-400">
              Built and operated real-time data pipelines processing billions of events.
              Improved system reliability to 99.99% uptime with comprehensive observability.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight text-stone-900 dark:text-stone-50">
          Skills
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
