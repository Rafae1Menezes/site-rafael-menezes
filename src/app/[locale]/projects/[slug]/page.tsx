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
        <div className="w-full pt-24 pb-20 md:pt-28 md:pb-40">
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <nav className="mb-4 flex items-center gap-2 font-mono text-xs tracking-widest text-zinc-400 uppercase md:mb-8">
                    Writing
                    <span className="text-zinc-300"> / </span>
                    Articles
                </nav>

                {/* Título */}
                <h1 className="mb-2 max-w-[680px] text-[2rem] leading-[1.2] font-bold tracking-[-0.03em] text-zinc-900 md:mb-4">
                    {project.title}
                </h1>

                {/* Metadados */}
                <div className="mb-6 flex flex-wrap items-center gap-2.5 md:mb-12">
                    {project.tags.map((tag) => (
                        <Tag color="green">{tag}</Tag>
                    ))}
                    <span className="h-1 w-1 rounded-full bg-zinc-300" />
                    <span className="font-mono text-[0.8125rem] text-zinc-400">{project.year}</span>
                </div>
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
