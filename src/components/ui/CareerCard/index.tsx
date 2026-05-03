import { cn } from "@/src/utils/cn";
import { getTranslations } from "next-intl/server";
import { Card } from "../Card";
import { Tag } from "../Tag";

type CareerEntry = {
    id: number;
    company: string;
    role: string;
    period: string;
    description: string;
    tags: string[];
    current?: boolean;
};

export const CareerCard = async ({ entry }: { entry: CareerEntry }) => {
    const t = await getTranslations("career");

    return (
        <article
            aria-label={`${entry.role} na ${entry.company}`}
            className={cn(
                "animate-rotate-border rounded-2xl p-0.5",
                "via-primary-400 from-transparent from-0% to-transparent to-100%",
                "transition-all duration-300 ease-out hover:-translate-y-1.5",
                entry.current ? "bg-conic/[from_var(--border-angle)]" : "hover:bg-conic/[from_var(--border-angle)]",
            )}
        >
            <Card>
                <p className="mb-0.5 text-[10px] font-semibold tracking-wider text-zinc-500 uppercase">
                    <span className="sr-only">{t("companyLabel")}</span>
                    {entry.company}
                </p>

                <p className="text-[13px] leading-snug font-bold text-zinc-900">
                    <span className="sr-only">{t("roleLabel")}</span>
                    {entry.role}
                </p>

                <p className="mt-0.5 mb-2 text-[11px] text-zinc-600">
                    <span className="sr-only">{t("periodLabel")}</span>
                    {entry.period}
                </p>

                <p className="text-[12px] leading-relaxed text-zinc-600">{entry.description}</p>

                <ul aria-label="Tecnologias" className="mt-2.5 flex flex-wrap gap-1">
                    {entry.current && (
                        <li>
                            <Tag size="xs" color="green">
                                Atual
                            </Tag>
                        </li>
                    )}
                    {entry.tags.map((tag) => (
                        <li key={tag}>
                            <Tag size="xs">{tag}</Tag>
                        </li>
                    ))}
                </ul>
            </Card>
        </article>
    );
};
