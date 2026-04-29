import { Footer } from "@/src/components/layout/Footer";
import { Header } from "@/src/components/layout/Header";
import { Navbar } from "@/src/components/layout/Navbar";
import { Tag } from "@/src/components/ui/Tag";
import { getAllProjects, getProjectBySlug } from "@/src/services/projects";
import { MDXRemote } from "next-mdx-remote/rsc";

import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { mdxComponents } from "@/src/components/mdx";
import { projectColorMap } from "@/content/colors";
import { setRequestLocale } from "next-intl/server";

export default async function ProjectsPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
    const { slug, locale } = await params;
    setRequestLocale(locale);

    const project = await getProjectBySlug(slug);

    return (
        <div className="w-full py-30">
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <Header title="Portfolio" subtitle="My work" />
                <h1 className="mt-5 mb-4 text-4xl font-bold">{project.title}</h1>
                {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                ))}{" "}
                ·{" "}
                <Tag size="sm" color={projectColorMap[project.type]}>
                    {project.type}
                </Tag>{" "}
                · {project.year}
                <article>
                    <MDXRemote
                        source={project.content}
                        components={mdxComponents}
                        options={{
                            mdxOptions: {
                                remarkPlugins: [remarkGfm],
                                rehypePlugins: [rehypeHighlight],
                            },
                        }}
                    />
                </article>
            </main>
        </div>
    );
}

export function generateStaticParams() {
    const articles = getAllProjects();
    return articles.map((a) => ({
        slug: a.slug,
    }));
}
