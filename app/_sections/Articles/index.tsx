import { ArticleCard } from "@/app/_components/ArticleCard";
import { ArticlesClient } from "@/app/_components/ArticlesClient";
import { Header } from "@/app/_components/Header";
import { getAllArticles } from "@/app/_libs/articles";

export const ArticlesSection = async () => {
    const articles = getAllArticles();

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
