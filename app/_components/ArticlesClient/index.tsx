"use client";

import { useState } from "react";
import { Button } from "../../_components/Button";

const PAGE_SIZE = 5;

export const ArticlesClient = ({ children }: { children: React.ReactNode[] }) => {
    const [visible, setVisible] = useState(PAGE_SIZE);

    const hasMore = visible < children.length;

    return (
        <>
            <div className="divide-y divide-zinc-200 border-t border-zinc-200">
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
