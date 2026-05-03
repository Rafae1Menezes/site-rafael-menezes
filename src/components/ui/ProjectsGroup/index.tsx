"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Button } from "../Button";

export const ProjectsGroup = ({ children }: { children: React.ReactNode[] }) => {
    const t = useTranslations("projects");
    const [pageSize, setPageSize] = useState(6);
    const [visible, setVisible] = useState(6);

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

    const hasMore = visible < children.length;

    return (
        <>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {children.map((child, i) => (
                    <div key={i} className={i >= visible ? "hidden" : ""}>
                        {child}
                    </div>
                ))}
            </div>

            {hasMore && (
                <div className="mt-10 flex justify-center">
                    <Button onClick={() => setVisible((v) => v + pageSize)}>{t("loadMore")}</Button>
                </div>
            )}
        </>
    );
};
