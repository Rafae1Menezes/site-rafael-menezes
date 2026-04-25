import { Thumbnail } from "../Thumbnail";
import { Tag } from "../Tag";
import Link from "next/link";
import { Article, ArticleTag } from "@/app/types/article";
import { articleColorMap } from "@/content/colors";
import { getLocale } from "next-intl/server";

export const ArticleCard = async ({ article }: { article: Article }) => {
    const locale = await getLocale();

    return (
        <Link href={`/${locale}/articles/${article.slug}`}>
            <div className="group -mx-2 flex cursor-pointer items-center gap-3 rounded-xl px-2 py-2.5 transition-[background,box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_4px_16px_-2px_rgba(0,0,0,0.06),0_1px_4px_-1px_rgba(0,0,0,0.04)] active:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.2),0_1px_4px_-1px_rgba(0,0,0,0.1)]">
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
