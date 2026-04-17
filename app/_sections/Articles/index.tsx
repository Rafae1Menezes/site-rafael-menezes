import { ArticleCard } from "@/app/_components/ArticleCard";
import { ArticlesClient } from "@/app/_components/ArticlesClient";
import { Header } from "@/app/_components/Header";
import { getAllArticles } from "@/app/_libs/articles";

type Article = {
    id: number;
    title: string;
    tag: string;
    year: string;
    readTime: string;
    slug: string;
    href?: string;
};

export const Articles = async () => {
    const articles = getAllArticles() as Article[];

    return (
        <section id="articles" className="w-full scroll-mt-14 bg-[#FEFEFE] py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <Header title="Writing" subtitle="Articles" />

                <ArticlesClient>
                    {articles.map((article, i) => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </ArticlesClient>
            </div>
        </section>
    );
};
