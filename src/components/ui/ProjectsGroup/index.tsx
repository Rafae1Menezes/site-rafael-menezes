"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { Button } from "../Button";

export const ProjectsGroup = ({ children }: { children: React.ReactNode[] }) => {
    const t = useTranslations("projects");
    const [pageSize, setPageSize] = useState(6);
    const [visible, setVisible] = useState(6);
    const firstNewItemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth < 640;
            const size = isMobile ? 3 : 6;
            setPageSize(size);
            setVisible(size);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleLoadMore = () => {
        setVisible((v) => v + pageSize);
        setTimeout(() => firstNewItemRef.current?.focus(), 50);
    };

    const hasMore = visible < children.length;

    return (
        <>
            <div
                role="list"
                aria-label={t("projectsListLabel")}
                className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
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
                        aria-label={t("loadMoreLabel", { count: Math.min(pageSize, children.length - visible) })}
                    >
                        {t("loadMore")}
                    </Button>
                </div>
            )}
        </>
    );
};
