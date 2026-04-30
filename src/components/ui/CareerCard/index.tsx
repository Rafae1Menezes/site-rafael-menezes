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

export const CareerCard = ({ entry }: { entry: CareerEntry }) => (
    <div className={`elevation3 ${entry.current ? "elevation3Active" : ""}`}>
        <div className="w-full rounded-2xl border border-zinc-200 bg-white p-4 shadow-md">
            {/* Company */}
            <p className="mb-0.5 text-[10px] font-semibold tracking-wider text-zinc-400 uppercase">{entry.company}</p>

            {/* Role */}
            <p className="text-[13px] leading-snug font-bold text-zinc-900">{entry.role}</p>

            {/* Period */}
            <p className="mt-0.5 mb-2 text-[11px] text-zinc-400">{entry.period}</p>

            {/* Description */}
            <p className="text-[12px] leading-relaxed text-zinc-500">{entry.description}</p>

            {/* Tags */}
            <div className="mt-2.5 flex flex-wrap gap-1">
                {entry.current && (
                    <Tag size="xs" color="green">
                        Atual
                    </Tag>
                )}

                {entry.tags.map((tag) => (
                    <Tag key={tag} size="xs">
                        {tag}
                    </Tag>
                ))}
            </div>
        </div>
    </div>
);
