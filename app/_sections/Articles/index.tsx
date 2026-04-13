"use client";
import { useState, useRef, useEffect } from "react";
import { Button } from "../../_components/Button";
import { Thumbnail } from "@/app/_components/Thumbnail";
import { ArticleCard } from "@/app/_components/ArticleCard";

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
    const [visible, setVisible] = useState(PAGE_SIZE);
    // guarda o índice a partir do qual os itens são "novos"
    const [newFrom, setNewFrom] = useState<number>(Infinity);

    const shown = ALL_ARTICLES.slice(0, visible);
    const hasMore = visible < ALL_ARTICLES.length;

    const handleLoadMore = () => {
        setNewFrom(visible);
        setVisible((v) => v + PAGE_SIZE);
    };

    return (
        <section id="articles" className="w-full bg-[#FEFEFE] py-12 scroll-mt-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex items-end justify-between mb-6">
                    <div>
                        <p className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-1">Writing</p>
                        <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Articles</h2>
                    </div>
                    <p className="text-xs text-zinc-400">
                        {shown.length} of {ALL_ARTICLES.length}
                    </p>
                </div>

                {/* List */}
                <div className="divide-y divide-zinc-200 border-t border-zinc-200">
                    {shown.map((article, i) => (
                        <ArticleCard
                            key={article.id}
                            article={article}
                            isNew={i >= newFrom}
                            // índice relativo dentro do novo batch para o stagger
                            index={i >= newFrom ? i - newFrom : 0}
                        />
                    ))}
                </div>

                {/* Load more */}
                {hasMore && (
                    <div className="flex justify-center mt-5">
                        <Button onClick={handleLoadMore}>
                            Load more
                            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                                <path
                                    d="M7 2v10M2 7l5 5 5-5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
};
