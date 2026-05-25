import { notFound } from "next/navigation";

interface BlogContentProps {
  slug: string;
}

export default async function BlogContent({ slug }: BlogContentProps) {
  try {
    const { default: Content } = await import(`@/content/blog/${slug}.mdx`);
    return <Content />;
  } catch {
    notFound();
  }
}
