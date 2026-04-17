import { Thumbnail } from "../Thumbnail";
import { Tag, TagColor } from "../Tag";
import Link from "next/link";

type Article = {
    id: number;
    title: string;
    tag: string;
    year: string;
    readTime: string;
    href?: string;
};

export type ArticleTag = "Architecture" | "Performance" | "React" | "Security" | "DX";

export const articleTagColorMap: Record<ArticleTag, TagColor> = {
    Architecture: "green",
    Performance: "amber",
    React: "blue",
    Security: "red",
    DX: "purple",
};

export const ArticleCard = ({ article, index }: { article: Article; index: number }) => {
    return (
        <Link href="#">
            <div className="group -mx-2 flex cursor-pointer items-center gap-3 rounded-xl px-2 py-2.5 transition-[background,box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_4px_16px_-2px_rgba(0,0,0,0.06),0_1px_4px_-1px_rgba(0,0,0,0.04)] active:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.2),0_1px_4px_-1px_rgba(0,0,0,0.1)]">
                <Thumbnail tag={article.tag} />

                <div className="min-w-0 flex-1">
                    {/* Tag */}
                    <div className="mb-0.5 flex items-center gap-1.5">
                        <Tag size="xs" color={articleTagColorMap[article.tag as keyof typeof articleTagColorMap] ?? "default"}>
                            {article.tag}
                        </Tag>
                    </div>

                    {/* Title */}
                    <p className="truncate text-[13px] leading-snug font-semibold text-zinc-900">{article.title}</p>

                    {/* Meta */}
                    <p className="mt-0.5 text-[11px] text-zinc-400">
                        {article.readTime} read · {article.year}
                    </p>
                </div>
            </div>
        </Link>
    );
};
