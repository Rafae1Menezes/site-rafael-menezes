import { getAllArticles, getArticleBySlug } from "@/app/_libs/articles";
import { remark } from "remark";
import html from "remark-html";

interface Props {
    params: {
        slug: string;
    };
}

export default async function ArticlePage({ params }: Props) {
    const { slug } = await params;

    console.log(slug);

    const article = getArticleBySlug(slug);

    const processedContent = await remark().use(html).process(article.content);

    const contentHtml = processedContent.toString();

    return (
        <main className="mx-auto max-w-3xl p-6">
            <h1 className="mb-4 text-4xl font-bold">{article.title}</h1>

            <p className="mb-8 text-gray-500">{article.date}</p>

            <article className="prose prose-zinc" dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </main>
    );
}

export function generateStaticParams() {
    const articles = getAllArticles();
    return articles.map((a) => ({
        slug: a.slug,
    }));
}
