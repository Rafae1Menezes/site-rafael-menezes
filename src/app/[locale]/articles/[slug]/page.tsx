import { Footer } from "@/src/components/layout/Footer";
import { Header } from "@/src/components/layout/Header";
import { Navbar } from "@/src/components/layout/Navbar";
import { Tag } from "@/src/components/ui/Tag";
import { getAllArticles, getArticleBySlug } from "@/src/services/articles";
import { MDXRemote } from "next-mdx-remote/rsc";

import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { mdxComponents } from "@/src/components/mdx";
import { setRequestLocale } from "next-intl/server";

export default async function ArticlePage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
    const { slug, locale } = await params;
    setRequestLocale(locale);

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
