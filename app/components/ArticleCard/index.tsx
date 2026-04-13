import { useEffect, useRef } from "react";
import { Thumbnail } from "../Thumbnail";

type Article = {
  id: number;
  title: string;
  tag: string;
  year: string;
  readTime: string;
  href?: string;
};

const tagColors: Record<string, string> = {
  Architecture: "bg-green-50 text-green-700",
  Performance:  "bg-amber-50 text-amber-700",
  React:        "bg-blue-50 text-blue-700",
  Security:     "bg-red-50 text-red-700",
  DX:           "bg-purple-50 text-purple-700",
};

export  const ArticleCard = ({
  article,
  isNew,
  index,
}: {
  article: Article;
  isNew: boolean;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isNew || !ref.current) return;

    const el = ref.current;
    // stagger baseado na posição dentro do novo batch
    const delay = index * 60;

    el.style.opacity = "0";
    el.style.transform = "translateY(-12px)";
    el.style.transition = "none";

    const raf = requestAnimationFrame(() => {
      setTimeout(() => {
        el.style.transition = `opacity 280ms ease ${delay}ms, transform 320ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`;
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 10);
    });

    return () => cancelAnimationFrame(raf);
  }, [isNew, index]);

  return (
    <div
      ref={ref}
      className="group flex items-center gap-3 py-2.5 cursor-pointer
        rounded-xl px-2 -mx-2
        transition-[background,box-shadow,transform] duration-200 ease-out
        hover:-translate-y-0.5
        hover:bg-white
        hover:shadow-[0_4px_16px_-2px_rgba(0,0,0,0.06),0_1px_4px_-1px_rgba(0,0,0,0.04)]
        active:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.2),0_1px_4px_-1px_rgba(0,0,0,0.1)]"
    >
      <Thumbnail tag={article.tag} />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 mb-0.5">
          <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${tagColors[article.tag] ?? "bg-zinc-100 text-zinc-600"}`}>
            {article.tag}
          </span>
        </div>
        <p className="text-[13px] font-semibold text-zinc-900 truncate leading-snug">
          {article.title}
        </p>
        <p className="text-[11px] text-zinc-400 mt-0.5">
          {article.readTime} read · {article.year}
        </p>
      </div>
    </div>
  );
};