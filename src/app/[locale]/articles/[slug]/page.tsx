import { mdxComponents } from "@/src/components/mdx";
import { Tag } from "@/src/components/ui/Tag";
import { getAllArticles, getArticleBySlug } from "@/src/services/articles";
import { setRequestLocale } from "next-intl/server";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

export default async function ArticlePage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
    const { slug, locale } = await params;
    setRequestLocale(locale);

    const article = await getArticleBySlug(slug);

    return (
        <div className="w-full pt-24 pb-20 md:pt-28 md:pb-40">
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <nav className="mb-8 flex items-center gap-2 font-mono text-xs tracking-widest text-zinc-500 uppercase">
                    Writing
                    <span className="text-zinc-300"> / </span>
                    Articles
                </nav>

                <h1 className="mb-2 max-w-170 text-[2rem] leading-[1.2] font-bold tracking-[-0.03em] text-zinc-900 md:mb-4">
                    {article.title}
                </h1>

                <div className=":mb-12 mb-6 flex flex-wrap items-center gap-2.5">
                    <Tag color="green">{article.tag}</Tag>
                    <span className="h-1 w-1 rounded-full bg-zinc-300" />
                    <span className="font-mono text-[0.8125rem] text-zinc-500">{article.readTime} read</span>
                    <span className="h-1 w-1 rounded-full bg-zinc-300" />
                    <span className="font-mono text-[0.8125rem] text-zinc-500">{article.year}</span>
                </div>
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
    );
}

export function generateStaticParams() {
    const articles = getAllArticles();
    return articles.map((a) => ({
        slug: a.slug,
    }));
}
