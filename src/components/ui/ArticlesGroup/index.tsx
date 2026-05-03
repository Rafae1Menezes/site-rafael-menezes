"use client";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { Button } from "../Button";

const PAGE_SIZE = 5;

export const ArticlesGroup = ({ children }: { children: React.ReactNode[] }) => {
    const t = useTranslations("articles");
    const [visible, setVisible] = useState(PAGE_SIZE);
    const firstNewItemRef = useRef<HTMLDivElement>(null);
    const hasMore = visible < children.length;

    const handleLoadMore = () => {
        setVisible((v) => v + PAGE_SIZE);
        setTimeout(() => firstNewItemRef.current?.focus(), 50);
    };

    return (
        <>
            <div role="list" aria-label={t("articlesListLabel")} className="divide-y divide-zinc-200 border-t border-zinc-200">
                {children.map((child, i) => (
                    <div
                        key={i}
                        role="listitem"
                        ref={i === visible ? firstNewItemRef : undefined}
                        tabIndex={-1}
                        className={i >= visible ? "hidden" : ""}
                    >
                        {child}
                    </div>
                ))}
            </div>

            {hasMore && (
                <div className="mt-10 flex justify-center">
                    <Button
                        onClick={handleLoadMore}
                        aria-label={t("loadMoreLabel", { count: Math.min(PAGE_SIZE, children.length - visible) })}
                    >
                        {t("loadMore")}
                    </Button>
                </div>
            )}
        </>
    );
};
