import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Blog",
};

const posts = [
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
  {
    slug: "terraform-at-scale",
    title: "Terraform at Scale: Lessons from 500+ Modules",
    description:
      "How we organized infrastructure as code across 20+ teams. Module design, state management, and CI/CD patterns that worked.",
    date: "2026-02-10",
    tags: ["terraform", "infrastructure", "devops"],
  },
];

export default function Blog() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20">
      <h1 className="text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
        Blog
      </h1>
      <p className="mt-4 text-lg text-stone-600 dark:text-stone-400">
        Technical writing about distributed systems, performance engineering, and
        infrastructure.
      </p>

      <div className="mt-12 space-y-10">
        {posts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
}
