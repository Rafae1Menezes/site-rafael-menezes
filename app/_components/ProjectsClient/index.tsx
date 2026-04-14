"use client";

import { useState } from "react";
import { Button } from "../../_components/Button";

const PAGE_SIZE = 6;

export const ProjectsClient = ({ children }: { children: React.ReactNode[] }) => {
    const [visible, setVisible] = useState(PAGE_SIZE);

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
                <div className="mt-5 flex justify-center">
                    <Button onClick={() => setVisible((v) => v + PAGE_SIZE)}>Load more</Button>
                </div>
            )}
        </>
    );
};
