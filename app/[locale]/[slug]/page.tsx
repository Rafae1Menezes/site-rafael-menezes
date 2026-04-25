import { Footer } from "@/app/_components/Footer";
import { Header } from "@/app/_components/Header";
import { Navbar } from "@/app/_components/Navbar";
import { Tag } from "@/app/_components/Tag";
import { getAllArticles, getArticleBySlug } from "@/app/_libs/articles";
import { MDXRemote } from "next-mdx-remote/rsc";

import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { mdxComponents } from "@/app/_components/mdxComponents";

interface Props {
    params: {
        slug: string;
    };
}

export default async function ArticlePage({ params }: Props) {
    const { slug } = await params;

    const article = await getArticleBySlug(slug);

    return (
        <>
            <Navbar />
            <div className="w-full py-30">
                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <Header title="Writing" subtitle="Articles" />
                    <h1 className="mt-5 mb-4 text-4xl font-bold">{article.title}</h1>
                    <Tag>Performance</Tag> · {article.readTime} read · {article.year}
                    <article>
                        <MDXRemote
                            source={article.content}
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
    const articles = getAllArticles();
    return articles.map((a) => ({
        slug: a.slug,
    }));
}
