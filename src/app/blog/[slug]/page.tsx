import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSlugs } from "@/lib/utils";
import BlogContent from "./BlogContent";

const postNames: Record<string, { title: string; description: string }> = {
  "building-resilient-systems": {
    title: "Building Resilient Distributed Systems",
    description:
      "Lessons learned from operating production systems at scale.",
  },
  "profiling-nodejs": {
    title: "Profiling Node.js in Production",
    description:
      "A practical guide to CPU and memory profiling without downtime.",
  },
  "terraform-at-scale": {
    title: "Terraform at Scale: Lessons from 500+ Modules",
    description:
      "How we organized infrastructure as code across 20+ teams.",
  },
};

export function generateStaticParams() {
  return getSlugs("blog").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = postNames[slug];
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = postNames[slug];

  if (!post) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-20">
      <Link
        href="/blog"
        className="text-sm font-medium text-amber-600 hover:text-amber-500 dark:text-amber-400"
      >
        &larr; All posts
      </Link>
      <article className="mt-8">
        <BlogContent slug={slug} />
      </article>
    </div>
  );
}
