import { Footer } from "@/app/_components/Footer";
import { Header } from "@/app/_components/Header";
import { Navbar } from "@/app/_components/Navbar";
import { Tag } from "@/app/_components/Tag";
import { getAllProjects, getProjectBySlug } from "@/app/_libs/projects";
import { MDXRemote } from "next-mdx-remote/rsc";

import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { mdxComponents } from "@/app/_components/mdxComponents";
import { projectColorMap } from "@/content/colors";

interface Props {
    params: {
        slug: string;
    };
}

export default async function ProjectsPage({ params }: Props) {
    const { slug } = await params;

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
