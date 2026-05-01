import { Header } from "@/src/components/layout/Header";
import { ArticleCard } from "@/src/components/ui/ArticleCard";
import { ArticlesGroup } from "@/src/components/ui/ArticlesGroup";
import { getAllArticles } from "@/src/services/articles";

export const ArticlesSection = async () => {
    const articles = getAllArticles();

    return (
        <section id="articles" className="w-full scroll-mt-10 bg-[#FEFEFE] py-12 sm:scroll-mt-14">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <Header title="Writing" subtitle="Articles" />
                <ArticlesGroup>
                    {articles.map((article) => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </ArticlesGroup>
            </div>
        </section>
    );
};
