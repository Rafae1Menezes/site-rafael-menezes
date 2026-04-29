"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ConditionalScrollToTop() {
    const pathname = usePathname();

    useEffect(() => {
        const isArticle = pathname.startsWith("/pt/articles/") || pathname.startsWith("/en/articles/");
        const isProject = pathname.startsWith("/pt/projects/") || pathname.startsWith("/en/projects/");

        if (isArticle || isProject) {
            const html = document.documentElement;

            html.style.scrollBehavior = "auto";

            requestAnimationFrame(() => {
                window.scrollTo(0, 0);

                html.style.scrollBehavior = "smooth";
            });
        }
    }, [pathname]);

    return null;
}
