"use client"
import { useState } from "react";

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
  { id: 2, tag: "Performance",  year: "2024", title: "From 4.2s to 1.6s: a real-world LCP optimization", readTime: "12 min" },
  { id: 3, tag: "React",        year: "2023", title: "Building a design system for 4 product teams", readTime: "10 min" },
  { id: 4, tag: "Security",     year: "2023", title: "Frontend authentication done right", readTime: "9 min" },
  { id: 5, tag: "DX",           year: "2022", title: "CI/CD pipelines for frontend teams", readTime: "7 min" },
  { id: 6, tag: "React",        year: "2022", title: "WebSockets at scale in a fintech dashboard", readTime: "11 min" },
  { id: 7, tag: "Architecture", year: "2021", title: "The hidden cost of shared state", readTime: "6 min" },
  { id: 8, tag: "Performance",  year: "2020", title: "Lazy loading that doesn't hurt UX", readTime: "5 min" },
];

const PAGE_SIZE = 5;

const tagColors: Record<string, string> = {
  Architecture: "bg-green-50 text-green-700",
  Performance:  "bg-amber-50 text-amber-700",
  React:        "bg-blue-50 text-blue-700",
  Security:     "bg-red-50 text-red-700",
  DX:           "bg-purple-50 text-purple-700",
};

const Thumbnail = ({ tag }: { tag: string }) => {
  const bg: Record<string, string> = {
    Architecture: "bg-green-50",
    Performance:  "bg-amber-50",
    React:        "bg-blue-50",
    Security:     "bg-red-50",
    DX:           "bg-purple-50",
  };

  const icons: Record<string, React.ReactNode> = {
    Architecture: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-green-600 opacity-60">
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/><path d="M17.5 14v7M14 17.5h7"/>
      </svg>
    ),
    Performance: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-amber-600 opacity-60">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    React: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-blue-600 opacity-60">
        <circle cx="12" cy="12" r="2"/>
        <ellipse cx="12" cy="12" rx="10" ry="4"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>
      </svg>
    ),
    Security: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-red-600 opacity-60">
        <path d="M12 2l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V5l7-3z"/>
      </svg>
    ),
    DX: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-purple-600 opacity-60">
        <path d="M8 6l-4 6 4 6M16 6l4 6-4 6M14 4l-4 16"/>
      </svg>
    ),
  };

  return (
    <div className={`w-14 h-10 rounded-md flex-shrink-0 flex items-center justify-center ${bg[tag] ?? "bg-zinc-100"}`}>
      {icons[tag]}
    </div>
  );
};

export const Articles = () => {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const shown = ALL_ARTICLES.slice(0, visible);
  const hasMore = visible < ALL_ARTICLES.length;

  return (
    <section className="w-full bg-[#FEFEFE] dark:bg-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-1">
              Writing
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Articles
            </h2>
          </div>
          <p className="text-xs text-zinc-400 dark:text-zinc-500">
            {shown.length} of {ALL_ARTICLES.length}
          </p>
        </div>

        {/* List */}
        <div className="divide-y divide-zinc-200 dark:divide-zinc-700/50 border-t border-zinc-200 dark:border-zinc-700/50">
          {shown.map((article) => (
            <div key={article.id} className="group flex items-center gap-3 py-2.5 cursor-pointer">
              <Thumbnail tag={article.tag} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${tagColors[article.tag] ?? "bg-zinc-100 text-zinc-600"}`}>
                    {article.tag}
                  </span>
                </div>
                <p className="text-[13px] font-semibold text-zinc-900 dark:text-zinc-50 truncate leading-snug">
                  {article.title}
                </p>
                <p className="text-[11px] text-zinc-400 dark:text-zinc-500 mt-0.5">
                  {article.readTime} read · {article.year}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load more */}
        {hasMore && (
          <div className="flex justify-center mt-5">
            <button
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 px-5 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              Load more
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M7 2v10M2 7l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};