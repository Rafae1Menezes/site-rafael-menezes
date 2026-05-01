import { articleColorMap } from "@/content/colors";
import { Article } from "@/src/types/article";
import { cn } from "@/src/utils/cn";
import { getLocale } from "next-intl/server";
import Link from "next/link";
import { Tag } from "../Tag";
import { Thumbnail } from "../Thumbnail";

export const ArticleCard = async ({ article }: { article: Article }) => {
    const locale = await getLocale();

    return (
        <Link
            href={`/${locale}/articles/${article.slug}`}
            className={cn(
                "block rounded-2xl",
                "transition-[background,box-shadow,transform] duration-200 ease-out",
                "hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_4px_16px_-2px_rgba(0,0,0,0.06),0_1px_4px_-1px_rgba(0,0,0,0.04)]",
                "active:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.2),0_1px_4px_-1px_rgba(0,0,0,0.1)]",
                "focus-visible:ring-primary-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
            )}
        >
            <div className="flex cursor-pointer items-center gap-3 py-3 pl-3">
                <Thumbnail tag={article.tag} />
                <div className="min-w-0 flex-1">
                    <div className="mb-0.5 flex items-center gap-1.5">
                        <Tag size="xs" color={articleColorMap[article.tag as keyof typeof articleColorMap] ?? "default"}>
                            {article.tag}
                        </Tag>
                    </div>
                    <p className="truncate text-[13px] leading-snug font-semibold text-zinc-900">{article.title}</p>
                    <p className="mt-0.5 text-[11px] text-zinc-500">
                        {article.readTime} read · {article.year}
                    </p>
                </div>
            </div>
        </Link>
    );
};
