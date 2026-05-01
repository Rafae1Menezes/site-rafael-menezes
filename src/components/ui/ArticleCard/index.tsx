import { Thumbnail } from "../Thumbnail";
import { Tag } from "../Tag";
import Link from "next/link";
import { Article, ArticleTag } from "@/src/types/article";
import { articleColorMap } from "@/content/colors";
import { getLocale } from "next-intl/server";

export const ArticleCard = async ({ article }: { article: Article }) => {
    const locale = await getLocale();

    return (
        <Link href={`/${locale}/articles/${article.slug}`}>
            <div className="group elevation2 -mx-2 flex cursor-pointer items-center gap-3 py-3">
                <Thumbnail tag={article.tag} />
                <div className="min-w-0 flex-1">
                    <div className="mb-0.5 flex items-center gap-1.5">
                        <Tag size="xs" color={articleColorMap[article.tag as keyof typeof articleColorMap] ?? "default"}>
                            {article.tag}
                        </Tag>
                    </div>
                    <p className="truncate text-[13px] leading-snug font-semibold text-zinc-900">{article.title}</p>
                    <p className="mt-0.5 text-[11px] text-zinc-400">
                        {article.readTime} read · {article.year}
                    </p>
                </div>
            </div>
        </Link>
    );
};
