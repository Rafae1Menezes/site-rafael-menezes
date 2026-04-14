import { Button } from "../../_components/Button";
import { Thumbnail } from "@/app/_components/Thumbnail";
import { ArticleCard } from "@/app/_components/ArticleCard";
import { ArticlesClient } from "@/app/_components/ArticlesClient";

type Article = {
    id: number;
    title: string;
    tag: string;
    year: string;
    readTime: string;
    href?: string;
};

const ALL_ARTICLES: Article[] = [
    { id: 1, tag: "Architecture", year: "2024", title: "Micro-frontend patterns that actually scale", readTime: "8 min" },
    { id: 2, tag: "Performance", year: "2024", title: "From 4.2s to 1.6s: a real-world LCP optimization", readTime: "12 min" },
    { id: 3, tag: "React", year: "2023", title: "Building a design system for 4 product teams", readTime: "10 min" },
    { id: 4, tag: "Security", year: "2023", title: "Frontend authentication done right", readTime: "9 min" },
    { id: 5, tag: "DX", year: "2022", title: "CI/CD pipelines for frontend teams", readTime: "7 min" },
    { id: 6, tag: "React", year: "2022", title: "WebSockets at scale in a fintech dashboard", readTime: "11 min" },
    { id: 7, tag: "Architecture", year: "2021", title: "The hidden cost of shared state", readTime: "6 min" },
    { id: 8, tag: "Performance", year: "2020", title: "Lazy loading that doesn't hurt UX", readTime: "5 min" },
];

const PAGE_SIZE = 5;

export const Articles = () => {
    return (
        <section id="articles" className="w-full scroll-mt-14 bg-[#FEFEFE] py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-6 flex items-end justify-between">
                    <div>
                        <p className="mb-1 text-xs font-medium tracking-widest text-zinc-400 uppercase">Writing</p>
                        <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Articles</h2>
                    </div>
                </div>

                {/* Lista */}
                <ArticlesClient>
                    {ALL_ARTICLES.map((article, i) => (
                        <ArticleCard key={article.id} article={article} index={i} />
                    ))}
                </ArticlesClient>
            </div>
        </section>
    );
};
