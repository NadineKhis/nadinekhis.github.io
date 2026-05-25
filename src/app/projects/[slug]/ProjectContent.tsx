import { notFound } from "next/navigation";

interface ProjectContentProps {
  slug: string;
}

export default async function ProjectContent({ slug }: ProjectContentProps) {
  try {
    const { default: Content } = await import(`@/content/projects/${slug}.mdx`);
    return <Content />;
  } catch {
    notFound();
  }
}
