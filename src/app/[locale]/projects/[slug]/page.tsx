import { Footer } from "@/src/components/Footer";
import { Header } from "@/src/components/Header";
import { Navbar } from "@/src/components/Navbar";
import { Tag } from "@/src/components/Tag";
import { getAllProjects, getProjectBySlug } from "@/src/_libs/projects";
import { MDXRemote } from "next-mdx-remote/rsc";

import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { mdxComponents } from "@/src/components/mdxComponents";
import { projectColorMap } from "@/content/colors";
import { setRequestLocale } from "next-intl/server";

export default async function ProjectsPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
    const { slug, locale } = await params;
    setRequestLocale(locale);

    const project = await getProjectBySlug(slug);

    return (
        <>
            <Navbar />
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
            <Footer />
        </>
    );
}

export function generateStaticParams() {
    const articles = getAllProjects();
    return articles.map((a) => ({
        slug: a.slug,
    }));
}
