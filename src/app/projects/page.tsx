import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
};

const projects = [
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
  {
    slug: "api-gateway",
    title: "API Gateway Optimization",
    description:
      "Rewrote critical path of the API gateway in Go. Achieved 3x throughput increase and reduced memory footprint by 70% compared to the Node.js predecessor.",
    tags: ["Go", "Envoy", "Performance", "gRPC"],
  },
];

export default function Projects() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20">
      <h1 className="text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
        Projects
      </h1>
      <p className="mt-4 text-lg text-stone-600 dark:text-stone-400">
        Case studies with real metrics. Each project includes the problem, the approach,
        and the measurable results.
      </p>

      <div className="mt-12 grid gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </div>
  );
}
