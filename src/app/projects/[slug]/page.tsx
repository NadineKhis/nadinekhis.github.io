import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSlugs } from "@/lib/utils";
import ProjectContent from "./ProjectContent";

const projectNames: Record<string, { title: string; description: string }> = {
  "distributed-cache": {
    title: "Distributed Cache at Scale",
    description:
      "Designed and built a low-latency distributed caching layer serving 10M+ requests/day.",
  },
  "real-time-analytics": {
    title: "Real-Time Analytics Pipeline",
    description:
      "Architected a streaming analytics pipeline processing 5TB of event data daily.",
  },
  "api-gateway": {
    title: "API Gateway Optimization",
    description: "Rewrote critical path of the API gateway in Go for 3x throughput.",
  },
};

export function generateStaticParams() {
  return getSlugs("projects").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectNames[slug];
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectNames[slug];

  if (!project) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-20">
      <Link
        href="/projects"
        className="text-sm font-medium text-amber-600 hover:text-amber-500 dark:text-amber-400"
      >
        &larr; All projects
      </Link>
      <article className="mt-8">
        <ProjectContent slug={slug} />
      </article>
    </div>
  );
}
