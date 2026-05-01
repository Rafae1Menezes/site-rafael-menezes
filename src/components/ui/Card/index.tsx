import { cn } from "@/src/utils/cn";
import { FC, ReactNode } from "react";

type CardProps = {
    children: ReactNode;
    classNames?: string;
};

export const Card: FC<CardProps> = ({ children, classNames }) => {
    return (
        <article
            className={cn(
                "flex h-full flex-col",
                "rounded-2xl border border-zinc-200 bg-white p-5",
                "shadow-md",
                "hover:border-zinc-300 hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.3),0_2px_8px_-2px_rgba(0,0,0,0.04)]",
                "active:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.5),0_2px_8px_-2px_rgba(0,0,0,0.04)]",
                classNames,
            )}
        >
            {children}
        </article>
    );
};
