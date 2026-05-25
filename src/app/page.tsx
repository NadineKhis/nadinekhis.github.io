import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import BlogCard from "@/components/BlogCard";

const featuredProjects = [
  {
    slug: "distributed-cache",
    title: "Distributed Cache at Scale",
    description:
      "Designed and built a low-latency distributed caching layer serving 10M+ requests/day. Reduced p99 latency by 60% and cut infrastructure costs by 35%.",
    tags: ["Go", "Redis", "Kubernetes", "gRPC"],
  },
  {
    slug: "real-time-analytics",
    title: "Real-Time Analytics Pipeline",
    description:
      "Architected a streaming analytics pipeline processing 5TB of event data daily. Enabled sub-second query responses on 90-day rolling windows.",
    tags: ["Kafka", "Flink", "ClickHouse", "TypeScript"],
  },
];

const recentPosts = [
  {
    slug: "building-resilient-systems",
    title: "Building Resilient Distributed Systems",
    description:
      "Lessons learned from operating production systems at scale — circuit breakers, bulkheads, and graceful degradation patterns.",
    date: "2026-04-15",
    tags: ["distributed-systems", "resilience", "go"],
  },
  {
    slug: "profiling-nodejs",
    title: "Profiling Node.js in Production",
    description:
      "A practical guide to CPU and memory profiling without downtime. Using async hooks, heap snapshots, and flamegraphs effectively.",
    date: "2026-03-28",
    tags: ["nodejs", "performance", "debugging"],
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20">
      <section className="mb-24">
        <h1 className="text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
          Nadia Khismatullina
        </h1>
        <p className="mt-4 text-xl text-stone-600 dark:text-stone-400">
          Software engineer. I architect systems, write about distributed computing,
          and care deeply about performance.
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            href="/projects"
            className="rounded-lg bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-stone-800 dark:bg-stone-50 dark:text-stone-900 dark:hover:bg-stone-200"
          >
            View Projects
          </Link>
          <Link
            href="/blog"
            className="rounded-lg border border-stone-200 px-5 py-2.5 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-100 dark:border-stone-800 dark:text-stone-300 dark:hover:bg-stone-800"
          >
            Read Blog
          </Link>
        </div>
      </section>

      <section className="mb-24">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-900 dark:text-stone-50">
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="text-sm font-medium text-amber-600 hover:text-amber-500 dark:text-amber-400"
          >
            All projects &rarr;
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </section>

      <section>
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-900 dark:text-stone-50">
            Latest Posts
          </h2>
          <Link
            href="/blog"
            className="text-sm font-medium text-amber-600 hover:text-amber-500 dark:text-amber-400"
          >
            All posts &rarr;
          </Link>
        </div>
        <div className="space-y-8">
          {recentPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </section>
    </div>
  );
}
