import { compileMDX } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { useMDXComponents } from "@/mdx-components";

interface ProjectContentProps {
  slug: string;
}

export default async function ProjectContent({ slug }: ProjectContentProps) {
  const filePath = path.join(process.cwd(), "content", "projects", `${slug}.mdx`);

  if (!fs.existsSync(filePath)) notFound();

  const source = fs.readFileSync(filePath, "utf-8");

  const { content } = await compileMDX({
    source,
    options: {
      parseFrontmatter: false,
    },
    components: useMDXComponents(),
  });

  return <article>{content}</article>;
}
